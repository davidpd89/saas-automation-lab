export async function GET({ site }: { site: URL }) {
  const baseUrl = new URL(import.meta.env.BASE_URL, site).toString();
  const lines = [
    "# SaaS Automation Lab",
    "",
    "Proyecto editorial en espanol sobre automatizacion SaaS e IA para solopreneurs de servicios.",
    "",
    "## Secciones principales",
    `- Inicio: ${baseUrl}`,
    `- Herramientas: ${new URL("herramientas/", baseUrl).toString()}`,
    `- Comparativas: ${new URL("comparativas/", baseUrl).toString()}`,
    `- Guias: ${new URL("guias/", baseUrl).toString()}`,
    `- Lab y metodologia: ${new URL("lab/", baseUrl).toString()}`,
    `- Como probamos: ${new URL("como-probamos/", baseUrl).toString()}`,
    `- Criterios de evaluacion: ${new URL("criterios-evaluacion/", baseUrl).toString()}`,
    `- Transparencia legal: ${new URL("legal/", baseUrl).toString()}`,
    `- Version ampliada para agentes: ${new URL("llms-full.txt", baseUrl).toString()}`,
    "",
    "## Audiencias",
    "- Coaches y formadores que venden servicios, cursos o programas premium.",
    "- Consultores B2B que necesitan prospeccion, CRM, facturacion y seguimiento.",
    "- Microequipos que quieren automatizar sin perder control de datos.",
    "",
    "## Criterio editorial",
    "Las paginas priorizan utilidad practica, precios verificables, casos de uso por perfil y transparencia de afiliacion."
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
