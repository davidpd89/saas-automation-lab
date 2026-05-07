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
    `- Transparencia legal: ${new URL("legal/", baseUrl).toString()}`,
    "",
    "## Criterio editorial",
    "Las paginas priorizan utilidad practica, precios verificables, casos de uso por perfil y transparencia de afiliacion."
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
