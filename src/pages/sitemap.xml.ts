import { getCollection } from "astro:content";

export async function GET({ site }: { site: URL }) {
  const baseUrl = new URL(import.meta.env.BASE_URL, site).toString();
  const tools = await getCollection("tools");
  const comparisons = [
    ...(await getCollection("comparisons")),
    ...(await getCollection("comparativas"))
  ];
  const guides = await getCollection("guides");

  const paths = [
    "",
    "herramientas/",
    "comparativas/",
    "guias/",
    "automatizacion-solopreneurs-2026/",
    "lab/",
    "quienes-somos/",
    "legal/",
    "robots.txt",
    "llms.txt",
    ...tools.map((item) => `herramientas/${item.slug}/`),
    ...comparisons.map((item) => `comparativas/${item.slug}/`),
    ...guides.map((item) => `guias/${item.slug}/`)
  ];

  const urls = paths.map((path) => `  <url><loc>${new URL(path, baseUrl).toString()}</loc></url>`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}
