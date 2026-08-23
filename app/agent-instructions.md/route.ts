import { AGENT_INSTRUCTIONS_MARKDOWN } from "@/lib/markdown-content";

export async function GET() {
  return new Response(AGENT_INSTRUCTIONS_MARKDOWN, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
