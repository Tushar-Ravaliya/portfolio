import {
  PORTFOLIO_MARKDOWN,
  NOT_FOUND_MARKDOWN,
  AGENT_INSTRUCTIONS_MARKDOWN,
} from "@/lib/markdown-content";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug = [] } = await params;
  const path = slug.join("/").replace(/\.md$/, "");

  let content: string;
  let status = 200;

  if (path === "" || path === "index" || path === "home") {
    content = PORTFOLIO_MARKDOWN;
  } else if (path === "agent-instructions") {
    content = AGENT_INSTRUCTIONS_MARKDOWN;
  } else {
    content = NOT_FOUND_MARKDOWN;
    status = 404;
  }

  return new Response(content, {
    status,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "Cache-Control":
        status === 200
          ? "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400"
          : "no-cache, no-store, must-revalidate",
    },
  });
}
