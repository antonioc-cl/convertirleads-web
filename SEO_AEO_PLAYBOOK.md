# SEO/AEO Playbook — contenido no commodity

Este playbook sirve para cualquier sitio del portafolio.

Tesis:

> Buen AEO se parece mucho a buen SEO: contenido útil, propio, bien estructurado, técnicamente indexable y con una acción comercial clara.

No optimizar para LLMs con trucos. Optimizar para que humanos, buscadores y modelos puedan entender, confiar, sintetizar y citar contenido que realmente aporta algo distinto.

---

## 1. Principios

### 1.1 No publicar contenido commodity

Evitar contenido que una IA o cualquier competidor pueda producir sin experiencia propia:

- “Qué es X”.
- “7 beneficios de Y”.
- “Guía completa de Z” sin punto de vista.
- Páginas locales donde solo cambia la ciudad.
- Artículos basados solo en definiciones públicas.

Regla:

> Si la página no contiene datos, experiencia, criterio o ejemplos propios, no está lista para publicar.

### 1.2 AEO no reemplaza SEO

AEO depende de fundamentos SEO:

- sitio rastreable;
- páginas indexables;
- sitemap limpio;
- canonical correcto;
- buena arquitectura interna;
- intención de búsqueda clara;
- contenido útil;
- autoridad externa;
- Search Console conectado.

Schema, FAQ y `llms.txt` ayudan, pero no compensan contenido débil.

### 1.3 Cada página debe tener una función comercial

Antes de crear una página, definir:

- Qué intención captura.
- Qué dolor resuelve.
- Qué evidencia aporta.
- Qué siguiente acción pide.
- Qué página interna fortalece.

---

## 2. Inventario de datos propios

Antes de keyword research o contenido, responder:

### Experiencia

- ¿Qué problemas vemos repetirse?
- ¿Qué errores detectamos en clientes/proyectos?
- ¿Qué decisiones tomamos distinto a otros?
- ¿Qué casos reales podemos anonimizar?
- ¿Qué aprendimos por hacer el trabajo, no por leer sobre él?

### Datos

- Benchmarks internos.
- Rangos de inversión.
- Tiempos típicos.
- Problemas más frecuentes.
- Errores por industria/ciudad/canal.
- Resultados antes/después.
- Preguntas reales de clientes.
- Objeciones comerciales.

### Lenguaje del cliente

Recolectar frases literales:

- “No sé si esto está funcionando”.
- “Mi web se ve bien, pero no vende”.
- “La agencia me manda reportes, pero no entiendo qué hacer”.
- “Estamos pagando ads, pero no sé si son buenos leads”.

Ese lenguaje debe alimentar titles, H1, FAQs, CTAs y contenido.

---

## 3. Clasificación de keywords

Separar siempre:

| Tipo | Qué mide | Ejemplo |
| --- | --- | --- |
| Branded | Demanda de marca | convertirLeads, Antonio Correa |
| Comercial | Intención de compra | consultoría marketing digital Chile |
| Problema | Dolor activo | mi sitio web no convierte |
| Comparación | Decisión entre alternativas | agencia vs consultor marketing |
| Local | Intención geográfica | consultor marketing Puerto Montt |
| Informacional | Aprendizaje | qué es diagnóstico digital |
| AEO | Pregunta sintetizable | cómo saber si mi marketing funciona |

No mezclar branded con adquisición. Medirlos distinto en Search Console.

---

## 4. Scoring de oportunidades

Puntuar 1–5 cada keyword o página:

| Criterio | Pregunta |
| --- | --- |
| Intención comercial | ¿Puede generar lead o venta? |
| Fit de cliente | ¿Atrae buen ticket? |
| Volumen | ¿Hay demanda suficiente? |
| Dificultad | ¿Podemos competir? |
| Datos propios | ¿Tenemos algo único que decir? |
| Riesgo commodity | ¿La página sería genérica? |
| Autoridad | ¿Tenemos credenciales/casos? |
| CTA | ¿Hay siguiente paso claro? |

Priorizar oportunidades con:

- intención alta;
- buen fit comercial;
- datos propios disponibles;
- baja/media competencia;
- bajo riesgo commodity.

---

## 5. Template SEO/AEO por página

Cada página importante debería incluir:

1. **Title** orientado a intención.
2. **Meta description** con valor concreto.
3. **H1** claro, no genérico.
4. **Respuesta breve** arriba para AEO.
5. **Problema en lenguaje del cliente**.
6. **Punto de vista propio**.
7. **Datos, ejemplos o patrones reales**.
8. **Tabla, checklist o framework**.
9. **FAQ real**.
10. **Schema adecuado**.
11. **Enlaces internos**.
12. **CTA** hacia diagnóstico, demo, lead magnet o contacto.
13. **Autoría/entidad** clara.
14. **Fecha de actualización** si aplica.

---

## 6. Guardrails para programmatic SEO

No publicar páginas programáticas si solo cambia una variable.

Ejemplo malo:

- `/consultor-marketing-puerto-varas/`
- `/consultor-marketing-temuco/`
- `/consultor-marketing-santiago/`

con el mismo texto y ciudad reemplazada.

Publicar solo si cada página tiene al menos uno:

- insight local específico;
- caso o patrón observado;
- preguntas frecuentes distintas;
- contexto competitivo local;
- industria relevante;
- oferta/CTA específica;
- datos propios.

Regla:

> Si puedes cambiar “Puerto Varas” por “Temuco” y la página sigue igual, no publicarla.

---

## 7. Lead magnets recomendados

Cada sitio debería tener al menos un activo propio para capturar demanda:

- Checklist.
- Scorecard.
- Plantilla.
- Auditoría rápida.
- Calculadora.
- Guía corta con criterio propio.
- Benchmark anonimizado.

Ejemplos:

- “Checklist para saber si tu web está perdiendo leads”.
- “Scorecard SEO/AEO de 10 minutos”.
- “Plantilla para evaluar una agencia de marketing”.
- “Calculadora de costo por lead real”.

CTA preferido: acción directa vinculada al servicio principal.

---

## 8. Baseline técnico por sitio

Antes de escalar contenido, validar:

- `robots.txt` permite páginas importantes.
- Sitemap existe y contiene solo URLs indexables/canónicas.
- Páginas no SEO están `noindex` o fuera del sitemap.
- Canonical consistente: https, www/non-www, trailing slash.
- Redirects sin cadenas ni loops.
- Titles y descriptions únicos.
- Un H1 por página.
- Schema base: `Organization`/`Person`, `WebSite`, `WebPage`, `BreadcrumbList`.
- Schema por tipo: `Service`, `Article`, `FAQPage`, `Product`, etc.
- `llms.txt` si existen páginas útiles que curar.
- Search Console conectado.
- Analytics/conversiones configuradas.

---

## 9. `llms.txt`

Agregar solo si ayuda a resumir el sitio.

Debe incluir:

- Qué hace la marca.
- Audiencia ideal.
- Páginas clave.
- Servicios/productos principales.
- Datos de entidad: marca, persona, ubicación, idioma.
- Cómo citar/describir el sitio.

No meter todo. Curar.

`llms.txt` no reemplaza:

- sitemap;
- schema;
- contenido real;
- autoridad externa;
- Search Console.

---

## 10. Blog / contenido editorial

No abrir blog por tener blog.

Abrirlo solo cuando existan al menos 3 piezas útiles, diferenciadas y conectadas a negocio.

Buenas piezas:

- notas de campo;
- análisis de casos anonimizados;
- patrones vistos en clientes;
- checklists propios;
- comparaciones con postura;
- errores frecuentes;
- benchmarks.

Malas piezas:

- definiciones genéricas;
- top 10 tips;
- contenido sin CTA;
- artículos sin experiencia propia;
- posts que no fortalecen ninguna página money.

Si está vacío:

- ocultar de navegación;
- sacar del sitemap;
- `noindex`;
- considerar redirect 302 temporal.

---

## 11. Loop Search Console mensual

Cada mes:

1. Exportar queries y pages últimos 3 meses.
2. Separar branded vs non-branded.
3. Detectar páginas con impresiones y bajo CTR.
4. Ajustar titles/metas.
5. Detectar queries nuevas con intención comercial.
6. Revisar canibalización entre páginas.
7. Ver coverage/indexing issues.
8. Inspeccionar URLs prioritarias.
9. Crear nuevas páginas solo si hay:
   - query real;
   - intención clara;
   - dato propio;
   - CTA.
10. Documentar aprendizajes.

---

## 12. Checklist antes de publicar una página

- [ ] Keyword/intención definida.
- [ ] Página destino no canibaliza otra existente.
- [ ] Hay dato, experiencia o criterio propio.
- [ ] No parece generada por plantilla genérica.
- [ ] H1 y title están alineados.
- [ ] Responde rápido la pregunta principal.
- [ ] Tiene ejemplos, tabla, checklist o framework.
- [ ] Tiene FAQ real.
- [ ] Tiene CTA claro.
- [ ] Tiene enlaces internos.
- [ ] Tiene schema correcto.
- [ ] Está en sitemap si debe indexarse.
- [ ] No está en sitemap si es noindex.
- [ ] Se validó build.
- [ ] Se inspeccionará en Search Console.

---

## 13. Instrucción para aplicar a otro sitio

Para reutilizar este playbook en otro proyecto:

1. Copiar este archivo al repo del sitio.
2. Completar inventario de datos propios.
3. Listar páginas actuales y sitemap.
4. Separar branded vs non-branded en Search Console.
5. Crear tabla de keyword opportunities con scoring.
6. Priorizar 3–5 páginas con alto fit.
7. Crear o mejorar páginas usando el template SEO/AEO.
8. Validar baseline técnico.
9. Publicar.
10. Medir y ajustar mensualmente.

---

## 14. Frase operativa

> Keyword con intención + dato propio + estructura clara + CTA = candidata. Si falta el dato propio, primero investigar; no publicar relleno.
