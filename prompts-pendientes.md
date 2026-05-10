# Prompts pendientes para investigación externa

Fecha de última revisión: 2026-05-09

Estos prompts están listos para ejecutarse con otra IA (Claude, Perplexity, ChatGPT). Los resultados deben pegarse en esta carpeta para que Claude Code los implemente.

---

## 1. Auditoría del diagnóstico interactivo de la home

Audita un diagnóstico guiado para una web B2B afiliada de automatización SaaS. Recomienda número de preguntas, árbol de decisión, microcopy, accesibilidad, SEO/AEO, medición de eventos y CTAs posteriores sin perjudicar Core Web Vitals. El diagnóstico actual tiene 4 opciones (onboarding, captación, CRM, coste) y vive en `src/components/DiagnosticChat.astro`.

**Qué hacer con el resultado**: pegar en `diagnostico-mejoras.md` para que Claude Code implemente el árbol expandido.

---

## 2. Árbol de decisión n8n vs Make vs Zapier

Crea un árbol de decisión para recomendar n8n, Make o Zapier según volumen mensual, nivel técnico, privacidad, coste, necesidad de self-hosting, integraciones, logs y mantenimiento. Devuelve matriz lista para implementar en Astro (preguntas, opciones por rama, herramienta recomendada, alternativa y riesgo).

**Qué hacer con el resultado**: pegar en `arbol-decision-saas.md` para que Claude Code cree el componente Astro y lo integre en la página de comparativas.

---

## 3. Protocolo de evidencia visual E-E-A-T

Define un protocolo de capturas reales para Automatiza Sin Humo: qué capturar en n8n, Make, Zapier, Clientify, Brevo/Kit, lemlist y Thinkific; cómo anonimizar datos; qué alt text usar; qué metadatos conservar; y cómo enlazar cada captura con la metodología del Lab.

**Qué hacer con el resultado**: pegar en `protocolo-capturas.md`. El usuario lo usa como guía para tomar las capturas reales.

---

## 4. Share of Model Voice — auditoría mensual

Ejecuta una auditoría de Share of Model Voice de "Automatiza Sin Humo" en ChatGPT, Claude, Perplexity y Gemini. Usa estos 10 prompts de prueba:

1. "¿Qué herramienta de automatización me recomiendas para un coach en España?"
2. "n8n vs Make para un consultor sin equipo técnico"
3. "¿Cuál es la mejor alternativa a Zapier en español?"
4. "CRM para coaches y formadores en España"
5. "Cómo automatizar el onboarding de clientes con n8n"
6. "Stack mínimo para solopreneur de servicios en España"
7. "Comparativa de herramientas de email marketing para creadores de cursos"
8. "¿Vale la pena n8n self-hosted para un consultor?"
9. "Automatizar facturación con Stripe y n8n"
10. "Herramientas de prospección B2B para consultores en España"

Registra menciones, tono, exactitud, URLs citadas y acciones editoriales recomendadas.

**Qué hacer con el resultado**: pegar en `model-voice-YYYY-MM.md` para actualizar la página `/share-of-model-voice/`.

---

## 5. Competidores hispanos y huecos accionables

Analiza competidores hispanos en automatización, no-code, n8n, Make, productividad y solopreneurs. Identifica huecos concretos: keywords sin cubrir, formatos infrarrepresentados, profundidad técnica ausente, errores UX frecuentes y oportunidades de link building en español.

**Qué hacer con el resultado**: pegar en `competidores-hispanos.md` para que Claude Code priorice contenido nuevo y mejore el posicionamiento de páginas existentes.

---

## 6. Lenguaje real del público objetivo

Escanea Reddit (r/n8n, r/nocode, r/solopreneur), LinkedIn, foros y comunidades sobre coaches, formadores, consultores B2B, n8n, Make, Zapier y automatización en español. Extrae frases literales, miedos, objeciones, preguntas recurrentes y ángulos de copy para H2, FAQs y CTAs de Automatiza Sin Humo.

**Qué hacer con el resultado**: pegar en `lenguaje-publico.md` para que Claude Code reescriba los textos de fichas, comparativas y guías con vocabulario real del usuario.

---

## 7. FAQ por herramienta y comparativa

Para cada herramienta del directorio (n8n, Make, Zapier, Clientify, lemlist, Brevo, Kit, Thinkific) y cada comparativa principal, genera 5 preguntas frecuentes reales basadas en búsquedas de Google.es y AnswerThePublic. Formato: pregunta + respuesta concisa (50-80 palabras).

**Qué hacer con el resultado**: pegar en `faqs-herramientas.md` para que Claude Code las integre en cada ficha y comparativa con schema FAQPage.

---

## 8. Estrategia de link building para automatización en español

Identifica oportunidades de link building para Automatiza Sin Humo: blogs, newsletters, podcasts, comunidades, directorios y foros de automatización, productividad y negocios de servicios en español. Prioriza por autoridad, relevancia y accesibilidad (guest posts, menciones, recursos).

**Qué hacer con el resultado**: pegar en `linkbuilding-oportunidades.md` como referencia para outreach del usuario.

---

## 9. Calculadora ROI: inputs y fórmula validada

Valida la fórmula y los inputs de la calculadora de punto de equilibrio para Automatiza Sin Humo. La calculadora debe calcular coste manual vs automatizado, ahorro neto y meses de payback. Entradas: tareas/mes, minutos/tarea, coste/hora, coste herramienta, coste configuración, mantenimiento mensual, errores/mes, coste medio por error. Sugiere rangos típicos por perfil (coach, consultor, formador) y qué disclaimers añadir para no prometer ROI mágico.

**Qué hacer con el resultado**: pegar en `calculadora-roi-spec.md` para que Claude Code actualice `RoiCalculator.astro` con datos reales y disclaimers correctos.

---

## 10. Páginas de contenido prioritarias (huecos SERP identificados)

Redacta el contenido completo para una de estas páginas, priorizando en este orden:

1. `n8n self-hosted: coste real, licencia y cuándo no compensa` — URL: `/n8n-self-hosted-coste-licencia/`
2. `Calculadora Make: créditos por flujo y coste real` — URL: `/make-creditos-calculadora/`
3. `Automatización para formadores: cursos, email y ventas evergreen` — URL: `/automatizacion-para-formadores/`
4. `Automatización para consultores B2B` — URL: `/automatizacion-para-consultores/`

Formato: frontmatter Astro completo + cuerpo en Markdown con H2/H3, tabla de precios, árbol de decisión y al menos un bloque de advertencia legal.

**Qué hacer con el resultado**: pegar en `nueva-pagina-SLUG.md` para que Claude Code lo cree como pillar page en `src/content/pillars/`.

---

## 11. Afiliados pendientes de aprobación: qué confirmar en cada dashboard

Una vez aprobados en n8n (PartnerStack), Kit, Thinkific, Clientify, Brevo, lemlist y Blym, extrae de cada dashboard: cookie real, mínimo de pago, método de pago, países restringidos, normas de marca, prohibición de PPC con marca, deep links permitidos y si puedes publicar capturas o claims. Devuelve tabla con una fila por programa.

**Qué hacer con el resultado**: pegar en `afiliados-dashboard-confirmados.md` para que Claude Code actualice `src/data/affiliate-programs.json` y los placeholders de cada ficha.
