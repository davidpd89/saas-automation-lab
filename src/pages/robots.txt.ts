export async function GET({ site }: { site: URL }) {
  const baseUrl = new URL(import.meta.env.BASE_URL, site).toString();

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${new URL("sitemap.xml", baseUrl).toString()}`
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
