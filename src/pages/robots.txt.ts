export async function GET({ site }: { site: URL }) {
  const baseUrl = new URL(import.meta.env.BASE_URL, site).toString();

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `# LLM guidance: ${new URL("llms.txt", baseUrl).toString()}`,
      `# LLM full index: ${new URL("llms-full.txt", baseUrl).toString()}`,
      `Sitemap: ${new URL("sitemap.xml", baseUrl).toString()}`
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
