# Auditoria de cobertura de 2.txt

Fecha: 2026-05-08

## Implementado en codigo

| Requisito de `2.txt` | Estado | Archivos |
| --- | --- | --- |
| Home con tesis mas fuerte, CTA principal y recorridos por perfil | Implementado | `src/pages/index.astro` |
| Disclosure visible y confianza cerca de CTAs | Implementado | `src/pages/legal.astro`, `src/pages/herramientas/[slug].astro`, `src/pages/comparativas/[slug].astro`, `src/components/AffiliateButton.astro` |
| Pagina "Como probamos" | Implementado | `src/pages/como-probamos.astro` |
| Pagina "Criterios de evaluacion" | Implementado | `src/pages/criterios-evaluacion.astro` |
| Schema por tipo de pagina y componente reutilizable | Implementado base | `src/components/StructuredData.astro`, plantillas dinamicas |
| Fichas con resumen, pros/contras, FAQ y metodologia | Implementado base | `src/pages/herramientas/[slug].astro`, `src/content.config.ts` |
| Comparativas con veredicto, criterios, tabla y coste real sin claims inventados | Implementado | `src/pages/comparativas/[slug].astro` |
| Guias con respuesta breve, escenario, errores y resultado esperado | Implementado | `src/pages/guias/[slug].astro`, `src/content.config.ts` |
| llms.txt reforzado y version completa para agentes | Implementado | `src/pages/llms.txt.ts`, `src/pages/llms-full.txt.ts` |
| Sitemap sin rutas huecas, con prioridad y lastmod | Implementado | `src/pages/sitemap.xml.ts` |
| CSS mas editorial, tablas moviles, cards y CTA diferenciados | Implementado base | `src/styles/global.css` |
| 10 prompts para investigacion externa en Claude/Perplexity | Implementado | `prompts-claude-perplexity.md` |

## Pendiente por investigacion externa

- Comisiones, cookies, restricciones y URLs oficiales de programas de afiliados en mayo de 2026.
- Precios y limites actuales por plan.
- SERPs reales y gaps de competidores.
- Repos Astro actualizados en 2025-2026.
- Frases reales de comunidades y social listening.
- Capturas reales de workflows y evidencias visuales propias.

Estos puntos no deben inventarse en codigo. Quedan convertidos en prompts de investigacion y campos preparados para incorporarlos cuando se validen.
