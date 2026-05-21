# Handoff — keyword research SEO/AEO convertirLeads

Fecha: 2026-05-21
Sitio: https://convertirleads.cl/
Idioma: español de Chile neutro, tuteo. Evitar voseo argentino: `tenés`, `podés`, `sos`, `vos`, `decime`, `contame`.

## Tesis principal

AEO no es una disciplina separada llena de trucos. Buen AEO se parece mucho a buen SEO:

1. Contenido útil, original y difícil de copiar.
2. Estructura clara para humanos y motores de búsqueda.
3. Datos, experiencia o patrones que la marca realmente posee.
4. Schema, sitemap, canonical, Search Console y monitoreo técnico bien resueltos.
5. CTA hacia una acción comercial concreta.

La infraestructura técnica ayuda —schema, FAQ, `llms.txt`, sitemap— pero no reemplaza el contenido no commodity.

## Posicionamiento de convertirLeads

convertirLeads debe posicionarse como diagnóstico digital y consultoría de marketing para empresas en Chile que ya invierten en web, ads, SEO, CRM o proveedores, pero no saben qué funciona, qué no, ni qué corregir primero.

Entrada comercial preferida: **diagnóstico digital**.

Consultoría, SEO/AEO, web, landing pages, CRM y automatización son consecuencias posibles del diagnóstico, no la promesa inicial por defecto.

ICP inicial:

- Empresas con mayor presupuesto y disposición a pagar.
- Ticket objetivo desde ~$2MM CLP hacia arriba.
- Industria abierta, pero priorizar empresas donde una mala decisión de marketing cueste caro.
- Dolor: invierten en marketing, agencias, diseño, desarrollo o ads sin claridad de retorno.
- Problemas típicos: medición débil, conversión baja, keywords mal trabajadas, campañas sin negativas, branded mal usado, SEO técnico superficial, CRM sin seguimiento, proveedores desalineados.
- Mercado: Chile primero. Partir por Los Lagos, luego otras regiones y LatAm.

## Cambios SEO/AEO ya implementados

Páginas principales actuales:

- `/diagnostico-digital/`
- `/consultoria-marketing-digital/`
- `/auditoria-seo-aeo/`
- `/consultor-marketing-digital-chile/`
- `/estrategia-digital/`
- `/agencia-vs-consultor-digital/`
- `/por-que-mi-sitio-no-convierte/`

AEO implementado:

- Respuesta breve al inicio de landings clave.
- FAQ visible + `FAQPage` schema.
- `Service`, `Article`, `BreadcrumbList`, `Person`, `ProfessionalService`, `WebSite` schema.
- `/llms.txt` agregado.
- `/gracias/` noindex y fuera del sitemap.
- `/blog/` noindex, fuera del sitemap y con redirects 302 temporales mientras no existan posts reales.

Validado previamente:

- `npm run build`
- `npx tsc --noEmit --pretty false`
- `npm audit --audit-level=moderate`
- sitemap generado contiene páginas money nuevas y excluye `/blog/` y `/gracias/`.

## Lección clave: non-commodity content

No publicar contenido que una IA o cualquier agencia pueda producir sin experiencia propia.

Evitar:

- “Qué es marketing digital”.
- “7 consejos para mejorar tu SEO”.
- “Beneficios de tener una página web”.
- Landings geográficas donde solo cambia la ciudad.
- Artículos basados en definiciones genéricas.

Priorizar:

- Notas de campo.
- Diagnósticos anonimizados.
- Patrones observados en empresas chilenas.
- Checklists usados en auditorías reales.
- Errores frecuentes vistos en campañas, webs, SEO, CRM o agencias.
- Criterios propios para decidir qué corregir primero.
- Comparaciones con postura clara.
- Casos donde se explique qué se encontró, qué se corrigió y qué se decidió no hacer.

## Datos propios a recolectar antes de escribir

Crear un banco de datos propio con:

1. **Auditorías anonimizadas**
   - Tipo de empresa.
   - Qué estaba gastando.
   - Qué problema creían tener.
   - Qué problema apareció realmente.
   - Qué se priorizó.

2. **Errores frecuentes**
   - Ads sin negativas.
   - Branded mal separado.
   - Formularios sin tracking.
   - Landing sin propuesta de valor.
   - Sitio bonito sin intención SEO.
   - CRM sin seguimiento.
   - Leads sin calificación.

3. **Benchmarks internos**
   - Rango de inversión común.
   - Tiempo típico de diagnóstico.
   - Cantidad de problemas encontrados.
   - Canales donde más se pierde plata.
   - Señales de buen/mal fit.

4. **Lenguaje del cliente**
   - Frases reales que usan dueños/gerentes.
   - Preguntas antes de contratar.
   - Objeciones.
   - Miedos.
   - Cómo describen el problema antes de saber que es un problema de marketing.

5. **Criterios de Antonio**
   - Qué mira primero en una web.
   - Qué mira primero en Google Ads.
   - Qué mira primero en Search Console.
   - Cuándo recomienda no hacer SEO.
   - Cuándo recomienda no rediseñar.
   - Cuándo una agencia sí conviene.

Esto es el insumo real para rankear en SEO y aparecer/citarse en LLMs.

## Objetivo del keyword research

No buscar tráfico genérico. Priorizar intención comercial y problemas con alta probabilidad de lead calificado.

Separar:

1. **Branded SEO**: convertirLeads, Antonio Correa, variantes de marca.
2. **Non-branded adquisición**: diagnóstico, consultoría, auditoría, SEO/AEO, conversión, agencia vs consultor.
3. **Local/regional**: Los Lagos, Puerto Varas, Puerto Montt, Osorno, Chiloé, Santiago, regiones.
4. **AEO**: preguntas que una IA podría responder citando el sitio.

## Inputs pedidos al negocio

Ideal recibir:

- Export de Google Search Console últimos 3–6 meses: queries, pages, clicks, impressions, CTR, position.
- 5–10 competidores reales: consultores, agencias, SEO, marketing B2B, auditoría digital.
- Ciudades/regiones prioritarias: Puerto Varas, Puerto Montt, Osorno, Chiloé, Los Lagos, Santiago, etc.
- Servicios que NO queremos atraer.
- Testimonios/casos disponibles.
- Certificaciones y datos de autoridad de Antonio Correa/LinkedIn.
- 5–10 ejemplos reales de problemas vistos en clientes o prospectos.

## Clusters iniciales a investigar

### Cluster 1 — Diagnóstico digital / auditoría marketing

Hipótesis de intención alta:

- diagnóstico digital
- diagnóstico marketing digital
- auditoría marketing digital
- auditoría de marketing
- auditoría web marketing
- diagnóstico de estrategia digital
- consultoría diagnóstico marketing
- cómo saber si mi marketing funciona
- por qué mi marketing no funciona
- empresa gasta en marketing sin resultados

Página destino probable:

- `/diagnostico-digital/`

Contenido no commodity requerido:

- Checklist real del diagnóstico.
- Patrones de errores frecuentes.
- Ejemplo anonimizado de “creían que era problema de web, pero era problema de oferta/tracking/seguimiento”.

### Cluster 2 — Consultoría de marketing digital

Hipótesis:

- consultor marketing digital Chile
- consultoría marketing digital Chile
- consultor de marketing para empresas
- consultor marketing B2B
- asesor marketing digital empresas
- consultoría estrategia digital
- consultor externo marketing

Páginas destino:

- `/consultoria-marketing-digital/`
- `/consultor-marketing-digital-chile/`

Contenido no commodity requerido:

- Cómo se diferencia consultoría de diagnóstico y de agencia.
- Qué decisiones se toman en una consultoría mensual.
- Señales de que una empresa necesita criterio externo y no más ejecución.

### Cluster 3 — SEO/AEO / sitio que no aparece

Hipótesis:

- auditoría SEO Chile
- consultoría SEO Chile
- auditoría SEO web
- sitio web no aparece en Google
- por qué mi página no aparece en Google
- optimización SEO para empresas
- AEO marketing
- optimización para motores de respuesta
- SEO para IA

Página destino:

- `/auditoria-seo-aeo/`

Contenido no commodity requerido:

- Qué mira Antonio en Search Console.
- Ejemplos de páginas que no rankean por mala intención, no por problema técnico.
- Checklist SEO/AEO propio.

### Cluster 4 — Conversión web / landing

Hipótesis:

- sitio web no convierte
- mi página web no vende
- landing page no convierte
- mejorar conversión sitio web
- optimización conversión web
- CRO Chile
- página web para generar leads

Página destino:

- `/por-que-mi-sitio-no-convierte/`

Contenido no commodity requerido:

- Patrones reales de webs bonitas que no convierten.
- Qué revisar antes de rediseñar.
- Checklist de conversión usado en diagnóstico.

### Cluster 5 — Agencia vs consultor

Hipótesis:

- agencia vs consultor marketing
- contratar agencia de marketing o consultor
- consultor digital vs agencia
- agencia marketing no da resultados
- cómo evaluar agencia marketing
- revisar agencia marketing digital

Página destino:

- `/agencia-vs-consultor-digital/`

Contenido no commodity requerido:

- Tabla de incentivos.
- Señales de cuándo agencia sí conviene.
- Señales de cuándo hay que pausar ejecución y diagnosticar.

### Cluster 6 — Local Los Lagos

Hipótesis:

- consultor marketing digital Puerto Varas
- consultor marketing digital Puerto Montt
- marketing digital Puerto Varas
- marketing digital Puerto Montt
- agencia marketing digital Puerto Montt
- consultoría marketing Los Lagos
- auditoría SEO Puerto Varas
- auditoría SEO Puerto Montt

Posibles páginas futuras:

- `/consultor-marketing-digital-puerto-varas/`
- `/consultor-marketing-digital-puerto-montt/`
- `/diagnostico-digital-los-lagos/`

Contenido no commodity requerido:

- Observaciones reales de empresas regionales.
- Diferencias entre vender desde regiones y vender en Santiago.
- Problemas comunes en servicios, turismo, B2B industrial, comercio o empresas familiares si aplica.

## Guardrails para programmatic SEO

No crear páginas programáticas si no tienen al menos uno de estos elementos propios:

- Insight local específico.
- Caso o patrón observado.
- Preguntas frecuentes distintas.
- Competidores o contexto del mercado local.
- Oferta o CTA específica para esa intención.
- Ejemplo real anonimizado.

Regla práctica:

> Si se puede cambiar “Puerto Varas” por “Temuco” y la página sigue igual, no publicarla.

## Formato recomendado por página AEO/SEO

Cada página prioritaria debería incluir:

1. H1 claro con intención.
2. Respuesta breve arriba.
3. Problema en lenguaje del cliente.
4. Criterio propio o patrón observado.
5. Tabla, checklist o framework.
6. FAQ real.
7. Schema correspondiente.
8. CTA hacia diagnóstico.
9. Autoría/entidad clara.
10. Enlaces internos hacia páginas money relacionadas.

## Scoring recomendado

Para cada keyword, puntuar 1–5:

- Intención comercial.
- Fit con ticket objetivo.
- Probabilidad de lead calificado.
- Dificultad/competencia.
- Volumen aproximado.
- Capacidad de diferenciación con diagnóstico/consultoría.
- Existencia de datos propios para escribir algo no commodity.
- Local relevance.

Priorizar keywords con baja/media competencia y alta intención, aunque tengan poco volumen.

## Entregable esperado

Tabla con columnas:

- Cluster
- Keyword/query
- Intención: comercial / problema / comparación / local / informacional
- Página destino existente o nueva
- Prioridad: P0/P1/P2
- Volumen estimado
- Dificultad estimada
- Datos propios disponibles
- Riesgo de contenido commodity
- Razonamiento
- Recomendación de title/H1
- FAQ/AEO sugeridas
- CTA sugerido

## Search Console loop

Después de publicar:

1. Enviar sitemap.
2. Inspeccionar URLs prioritarias.
3. Separar branded vs non-branded.
4. Revisar queries con impresiones y bajo CTR.
5. Ajustar titles/metas.
6. Detectar canibalización entre páginas.
7. Crear nuevas páginas solo si hay patrón de búsqueda + posibilidad de contenido propio.
8. Resolver coverage/indexing issues a medida que Google rastrea.

## Decisiones pendientes

1. Blog vacío: mantener oculto hasta tener al menos 3 piezas útiles y diferenciadoras. No abrir blog genérico.
2. Páginas geo antiguas de `estratega digital`: revisar canibalización vs nuevas páginas de `consultor marketing digital`.
3. Definir si `/agendar/` debe estar en sitemap. Actualmente puede quedar indexable por conversión, pero no es página SEO principal.
4. Conseguir testimonios/casos antes de escalar demasiado contenido.
5. Crear un lead magnet propio: checklist de diagnóstico, scorecard de web/ads/SEO o plantilla para evaluar agencia.

## Próximo paso recomendado

Antes de crear más páginas, reunir:

- Export Search Console.
- Lista de competidores.
- 10 problemas reales vistos en clientes/prospectos.
- 5 objeciones reales de venta.
- 3–5 testimonios o mini casos.

Luego priorizar 5 páginas/piezas con el criterio:

> Keyword con intención + dato propio + CTA claro.
