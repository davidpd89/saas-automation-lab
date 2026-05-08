export async function GET({ site }: { site: URL }) {
  const baseUrl = new URL(import.meta.env.BASE_URL, site).toString();

  return new Response(
    [
      "# Automatiza Sin Humo permite rastreo publico y bots de respuesta.",
      "User-agent: *",
      "Allow: /",
      "",
      "User-agent: GPTBot",
      "Allow: /",
      "",
      "User-agent: ChatGPT-User",
      "Allow: /",
      "",
      "User-agent: OAI-SearchBot",
      "Allow: /",
      "",
      "User-agent: PerplexityBot",
      "Allow: /",
      "",
      "User-agent: ClaudeBot",
      "Allow: /",
      "",
      "User-agent: Claude-User",
      "Allow: /",
      "",
      "User-agent: Google-Extended",
      "Allow: /",
      "",
      `# LLM guidance: ${new URL("llms.txt", baseUrl).toString()}`,
      `# LLM full index: ${new URL("llms-full.txt", baseUrl).toString()}`,
      `Sitemap: ${new URL("sitemap.xml", baseUrl).toString()}`
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
