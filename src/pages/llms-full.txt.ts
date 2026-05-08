import { getCollection } from "astro:content";

export async function GET({ site }: { site: URL }) {
  const baseUrl = new URL(import.meta.env.BASE_URL, site).toString();
  const tools = await getCollection("tools");
  const comparisons = [
    ...(await getCollection("comparisons")),
    ...(await getCollection("comparativas"))
  ];
  const guides = await getCollection("guides");

  const lines = [
    "# SaaS Automation Lab - llms-full",
    "",
    "SaaS Automation Lab es un laboratorio editorial en espanol sobre automatizacion SaaS e IA para solopreneurs de servicios.",
    "Audiencias principales: coaches, formadores, consultores B2B, agencias pequenas y microequipos.",
    "Problemas cubiertos: onboarding, prospeccion, nurturing, soporte RAG, facturacion, cobros, contenido SEO y seleccion de stack.",
    "",
    "## Metodologia y confianza",
    `- Lab: ${new URL("lab/", baseUrl).toString()}`,
    `- Como probamos: ${new URL("como-probamos/", baseUrl).toString()}`,
    `- Criterios: ${new URL("criterios-evaluacion/", baseUrl).toString()}`,
    `- AI Act y RGPD: ${new URL("ai-act-rgpd-automatizacion/", baseUrl).toString()}`,
    `- Share of Model Voice: ${new URL("share-of-model-voice/", baseUrl).toString()}`,
    `- Transparencia legal: ${new URL("legal/", baseUrl).toString()}`,
    "",
    "## Herramientas",
    ...tools.map((item) => `- ${item.data.title}: ${new URL(`herramientas/${item.slug}/`, baseUrl).toString()} - ${item.data.description}`),
    "",
    "## Comparativas",
    ...comparisons.map((item) => `- ${item.data.title}: ${new URL(`comparativas/${item.slug}/`, baseUrl).toString()} - ${item.data.verdict}`),
    "",
    "## Guias",
    ...guides.map((item) => `- ${item.data.title}: ${new URL(`guias/${item.slug}/`, baseUrl).toString()} - ${item.data.scenario}`),
    "",
    "## Nota de precision",
    "Precios, comisiones, cookies y condiciones comerciales deben verificarse con fuentes oficiales antes de citarse como datos definitivos."
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
