const CANONICAL_HOST = 'convertirleads.cl';
const WWW_HOST = `www.${CANONICAL_HOST}`;
const HOSTING_WEB_PATH = '/hosting-web';
const HOSTING_WEB_TARGET = 'https://computincloudhosting.com';
const BLOG_PATH = '/blog';

const permanentRedirect = (url: URL) => Response.redirect(url.toString(), 301);
const temporaryRedirect = (url: URL) => Response.redirect(url.toString(), 302);

export async function onRequest(context: { request: Request; next: () => Promise<Response> }) {
  const url = new URL(context.request.url);
  const hostname = url.hostname.toLowerCase();

  // Keep the existing /hosting-web redirects in code too: global middleware can
  // make Cloudflare Pages skip _redirects for matching requests.
  if (url.pathname === HOSTING_WEB_PATH || url.pathname === `${HOSTING_WEB_PATH}/`) {
    const destination = new URL(HOSTING_WEB_TARGET);
    destination.search = url.search;
    return permanentRedirect(destination);
  }

  if (url.pathname.startsWith(`${HOSTING_WEB_PATH}/`)) {
    const splat = url.pathname.slice(`${HOSTING_WEB_PATH}/`.length);
    const destination = new URL(`${HOSTING_WEB_TARGET}/${splat}`);
    destination.search = url.search;
    return permanentRedirect(destination);
  }

  // Blog is intentionally hidden while there are no published posts.
  // Use a temporary redirect so the section can return later without SEO baggage.
  if (url.pathname === BLOG_PATH || url.pathname === `${BLOG_PATH}/` || url.pathname.startsWith(`${BLOG_PATH}/`)) {
    const destination = new URL('/', url.origin);
    destination.search = url.search;
    return temporaryRedirect(destination);
  }

  if (hostname === WWW_HOST) {
    url.hostname = CANONICAL_HOST;
    return permanentRedirect(url);
  }

  return context.next();
}
