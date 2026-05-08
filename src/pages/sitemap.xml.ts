import { getCollection } from "astro:content";

export async function GET({ site }: { site: URL }) {
  const baseUrl = new URL(import.meta.env.BASE_URL, site).toString();
  const tools = await getCollection("tools");
  const comparisons = [
    ...(await getCollection("comparisons")),
    ...(await getCollection("comparativas"))
  ];
  const guides = await getCollection("guides");

  const today = new Date().toISOString().slice(0, 10);
  const entries = [
    { path: "", priority: "1.0" },
    { path: "blog/", priority: "0.5" },
    { path: "escalar-negocio-servicios-ia/", priority: "0.8" },
    { path: "automatizacion-facturacion-cobros-consultores/", priority: "0.8" },
    { path: "herramientas/", priority: "0.7" },
    { path: "comparativas/", priority: "0.8" },
    { path: "guias/", priority: "0.7" },
    { path: "automatizacion-solopreneurs-2026/", priority: "0.9" },
    { path: "lab/", priority: "0.7" },
    { path: "como-probamos/", priority: "0.7" },
    { path: "criterios-evaluacion/", priority: "0.6" },
    { path: "quienes-somos/", priority: "0.5" },
    { path: "legal/", priority: "0.4" },
    ...tools.map((item) => ({ path: `herramientas/${item.slug}/`, priority: "0.7", lastmod: item.data.updatedAt?.toISOString().slice(0, 10) })),
    ...comparisons.map((item) => ({ path: `comparativas/${item.slug}/`, priority: "0.8", lastmod: item.data.updatedAt?.toISOString().slice(0, 10) })),
    ...guides.map((item) => ({ path: `guias/${item.slug}/`, priority: "0.7", lastmod: item.data.updatedAt?.toISOString().slice(0, 10) }))
  ];

  const seen = new Set<string>();
  const urls = entries
    .filter((entry) => {
      if (seen.has(entry.path)) return false;
      seen.add(entry.path);
      return true;
    })
    .map((entry) => [
      "  <url>",
      `    <loc>${new URL(entry.path, baseUrl).toString()}</loc>`,
      `    <lastmod>${entry.lastmod ?? today}</lastmod>`,
      "    <changefreq>weekly</changefreq>",
      `    <priority>${entry.priority}</priority>`,
      "  </url>"
    ].join("\n"));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}
