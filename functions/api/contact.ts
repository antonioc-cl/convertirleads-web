import { AwsClient } from 'aws4fetch';

interface Env {
  TURNSTILE_SECRET_KEY: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_SESSION_TOKEN?: string;
  AWS_REGION: string;
  CONTACT_FROM_EMAIL: string;
  CONTACT_TO_EMAIL: string;
}

type Json = Record<string, unknown>;

const json = (body: Json, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

const clean = (value: FormDataEntryValue | null) => String(value ?? '').trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const verifyTurnstile = async (secret: string, token: string, ip?: string) => {
  const body = new FormData();
  body.set('secret', secret);
  body.set('response', token);
  if (ip) body.set('remoteip', ip);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });

  if (!response.ok) {
    throw new Error('TURNSTILE_UNAVAILABLE');
  }

  return response.json() as Promise<{
    success: boolean;
    action?: string;
    hostname?: string;
    'error-codes'?: string[];
  }>;
};

const sendSesEmail = async (env: Env, payload: { name: string; email: string; company: string; message: string; ip?: string; userAgent?: string; }) => {
  const aws = new AwsClient({
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    sessionToken: env.AWS_SESSION_TOKEN,
  });

  const submittedAt = new Date().toISOString();
  const subject = `Nuevo contacto convertirLeads — ${payload.name}`;
  const textBody = [
    'Nuevo mensaje desde convertirleads.cl',
    '',
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Empresa/proyecto: ${payload.company || '—'}`,
    `Enviado: ${submittedAt}`,
    `IP: ${payload.ip || '—'}`,
    `User-Agent: ${payload.userAgent || '—'}`,
    '',
    'Mensaje:',
    payload.message,
  ].join('\n');

  const htmlBody = `
    <h1>Nuevo mensaje desde convertirleads.cl</h1>
    <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Empresa/proyecto:</strong> ${escapeHtml(payload.company || '—')}</p>
    <p><strong>Enviado:</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>IP:</strong> ${escapeHtml(payload.ip || '—')}</p>
    <p><strong>User-Agent:</strong> ${escapeHtml(payload.userAgent || '—')}</p>
    <hr />
    <p><strong>Mensaje</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
  `;

  const response = await aws.fetch(`https://email.${env.AWS_REGION}.amazonaws.com/v2/email/outbound-emails`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      FromEmailAddress: env.CONTACT_FROM_EMAIL,
      Destination: { ToAddresses: [env.CONTACT_TO_EMAIL] },
      ReplyToAddresses: [payload.email],
      Content: {
        Simple: {
          Subject: { Data: subject, Charset: 'UTF-8' },
          Body: {
            Text: { Data: textBody, Charset: 'UTF-8' },
            Html: { Data: htmlBody, Charset: 'UTF-8' },
          },
        },
      },
    }),
    aws: { service: 'ses', region: env.AWS_REGION },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`SES_SEND_FAILED: ${errorText}`);
  }
};

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const formData = await context.request.formData();

    const name = clean(formData.get('name'));
    const email = clean(formData.get('email')).toLowerCase();
    const company = clean(formData.get('company'));
    const message = clean(formData.get('message'));
    const website = clean(formData.get('website'));
    const formContext = clean(formData.get('formContext'));
    const token = clean(formData.get('cf-turnstile-response'));

    if (website) {
      return json({ ok: true });
    }

    if (!name || name.length < 2 || name.length > 80) {
      return json({ ok: false, error: 'Tu nombre no es válido.' }, 400);
    }

    if (!emailPattern.test(email) || email.length > 160) {
      return json({ ok: false, error: 'Tu email no es válido.' }, 400);
    }

    if (company.length > 120) {
      return json({ ok: false, error: 'El nombre de empresa es demasiado largo.' }, 400);
    }

    if (!message || message.length < 30 || message.length > 2000) {
      return json({ ok: false, error: 'Cuéntame un poco más para poder ayudarte.' }, 400);
    }

    if (!token) {
      return json({ ok: false, error: 'Falta la verificación anti-spam.' }, 400);
    }

    const requiredEnv: Array<keyof Env> = [
      'TURNSTILE_SECRET_KEY',
      'AWS_ACCESS_KEY_ID',
      'AWS_SECRET_ACCESS_KEY',
      'AWS_REGION',
      'CONTACT_FROM_EMAIL',
      'CONTACT_TO_EMAIL',
    ];

    for (const key of requiredEnv) {
      if (!context.env[key]) {
        return json({ ok: false, error: `Falta configurar ${key}.` }, 503);
      }
    }

    const ip = context.request.headers.get('CF-Connecting-IP') ?? undefined;
    const turnstile = await verifyTurnstile(context.env.TURNSTILE_SECRET_KEY, token, ip);

    if (!turnstile.success || (turnstile.action && turnstile.action !== 'contact_form')) {
      return json({ ok: false, error: 'No pude validar el formulario. Intenta de nuevo.' }, 400);
    }

    await sendSesEmail(context.env, {
      name,
      email,
      company,
      message,
      ip,
      userAgent: context.request.headers.get('user-agent') ?? undefined,
    });

    return json({ ok: true, context: formContext || 'contact' });
  } catch (error) {
    console.error('contact-form-error', error);
    return json({ ok: false, error: 'No pude enviar tu mensaje. Intenta de nuevo en un minuto.' }, 500);
  }
};
