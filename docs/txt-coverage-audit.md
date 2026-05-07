# Auditoria de cobertura del TXT

Fecha: 2026-05-07

Archivo auditado: `Gemini-perplexity-orders.txt`

## Resultado

El proyecto implementa la arquitectura, los tipos de contenido, las rutas principales, las plantillas, el interlinking base, el SEO tecnico y la separacion de repositorios definidos en el TXT.

La unica parte que no puede considerarse "verificada" solo desde el repositorio son los datos vivos externos de mayo de 2026: comisiones actuales, cookies, plataformas de afiliacion, precios, features recientes, SERP reales, benchmarks de competidores y opiniones de usuarios. Esos puntos estan representados en contenido, prompts y campos de datos, pero requieren investigacion externa antes de publicarse como afirmaciones definitivas.

## Matriz de cobertura

| Bloque del TXT | Estado | Implementacion |
| --- | --- | --- |
| Micro-nicho ganador: automatizacion e IA para solopreneurs de servicios | Cubierto | Home, pagina pilar `automatizacion-solopreneurs-2026`, pagina `escalar-negocio-servicios-ia`, guias por coach/formador/consultor. |
| Buyer personas: coach premium, formador evergreen, consultor B2B | Cubierto | Cards de home, pilar de escalado y campos `idealUser`/`persona` en colecciones. |
| Tareas criticas: onboarding, nurturing, facturacion, prospeccion, soporte RAG, agenda, contenido SEO | Cubierto base | Guias de onboarding, facturacion, prospeccion y soporte RAG; pilar de facturacion; fichas para n8n, Clientify, lemlist, Blym, Reclaim, ConvertKit, Thinkific. |
| Nucleo Top 8: n8n, Blym, Clientify, Make, lemlist, ConvertKit, Webflow, Thinkific | Cubierto | 8 fichas en `src/content/tools/` y rutas `/herramientas/.../`. |
| Catalogo ampliado de 15 programas | Cubierto como inventario editorial | Fichas para HubSpot, Instantly, Pipedrive, Synthesia, Reclaim, Jasper, Notion, ademas de MailerLite, Zapier y Brevo para comparativas. |
| Arquitectura URL: home, blog, herramientas, comparativas, guias, lab, legal, quienes somos | Cubierto | Rutas estaticas y dinamicas en `src/pages/`. |
| 15 URLs iniciales | Cubierto base | Pilares, 18 fichas, 7 comparativas y 4 guias generadas. Algunos slugs son equivalentes, no identicos, para mantener naming consistente. |
| Comparativas principales: Make vs Zapier, n8n vs Make, n8n vs Make vs Zapier | Cubierto | Colecciones `comparativas` y `comparisons`, ruta dinamica unificada. |
| Comparativas bloque 2: ConvertKit vs MailerLite, Clientify vs HubSpot, lemlist vs Instantly | Cubierto | Archivos nuevos en `src/content/comparativas/`. |
| Plantilla ficha de herramienta | Cubierto | Hero, rating, CTA afiliado, contenido MD, datos de afiliacion, bloque E-E-A-T, FAQ y JSON-LD Review/FAQ. |
| Plantilla comparativa | Cubierto | Veredicto, tabla accesible, CTAs duales, casos de uso, analisis de costes, stack recomendado y schema Article/ItemList. |
| Plantilla guia de proceso | Cubierto | Pasos, stack necesario con enlaces a fichas, contenido MD y schema HowTo. |
| Content Collections con Zod | Cubierto | `src/content.config.ts` valida tools, comparisons, comparativas, guides y pillars. |
| Campos SEO, persona y afiliacion en contenido | Cubierto | `seoTitle`, `seoDescription`, `searchIntent`, `affiliate`, `toolsUsed`, `idealUser`, `persona`. |
| Interlinking semantico guias -> herramientas | Cubierto | `src/pages/guias/[slug].astro` resuelve `toolsUsed` y enlaza fichas. |
| CTAs afiliados transparentes | Cubierto | `AffiliateButton` usa `rel="sponsored nofollow"`, disclosure visible y tracking local/eventos. |
| E-E-A-T: metodologia, autor, transparencia | Cubierto base | `/lab/`, `/quienes-somos/`, `/legal/`, schema Organization/Breadcrumb y bloques de evaluacion en fichas. |
| SEO tecnico: canonical, sitemap, robots, llms.txt, schema | Cubierto | `BaseLayout`, endpoints `sitemap.xml.ts`, `robots.txt.ts`, `llms.txt.ts`. |
| GitHub Pages + Astro | Cubierto | Build estatico de Astro y Pages configurado desde rama `gh-pages`. |
| Repositorios independientes | Cubierto | `new-website` apunta a `davidpd89/saas-automation-lab`; `author-website` queda fuera de este repo y no comparte dominio. |
| Sistema visual minimo | Cubierto base | CSS global con contenedores, grids, cards, botones, tablas, detalles y estados responsive. No se usa Tailwind como dependencia, pero se replica una capa utilitaria ligera. |
| Roadmap 90 dias | Cubierto como base operativa | Setup, paginas EEAT, primeras fichas, comparativas y guias ya existen; quedan ciclos editoriales, validacion externa y promocion. |
| Prompts para Gemini/Perplexity | Cubierto | `prompts-gemini-perplexity.md` contiene 10 prompts de investigacion 2026. |

## Pendiente por naturaleza externa

Antes de hacer afirmaciones comerciales finales en publico conviene validar:

- Comisiones, cookies y plataformas actuales de cada programa de afiliacion.
- Precios y limites de planes actuales.
- Cambios de producto de los ultimos 3-6 meses.
- SERP real en Google.es para las keywords prioritarias.
- Competidores vivos y formatos de contenido que estan funcionando ahora.
- Opiniones recientes en Reddit, LinkedIn, X y comunidades oficiales.

Esos puntos no son carencias de implementacion: son investigacion viva y deben actualizarse con fuentes actuales antes de escalar la publicacion.
