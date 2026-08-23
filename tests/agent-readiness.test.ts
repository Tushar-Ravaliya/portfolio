import { describe, expect, it } from "bun:test";
import { parseAccept, preferredType, appendVaryAccept, proxy } from "../proxy";
import { GET as getMarkdown } from "../app/api/markdown/[[...slug]]/route";
import { GET as getLlmsTxt } from "../app/llms.txt/route";
import { GET as getLlmsFullTxt } from "../app/llms-full.txt/route";
import { GET as getAgentInstructions } from "../app/agent-instructions.md/route";
import { GET as getIndexMd } from "../app/index.md/route";
import sitemap from "../app/sitemap";
import robots from "../app/robots";

describe("Accept Header Parsing & Content Negotiation (acceptmarkdown.com)", () => {
  it("parses single media type", () => {
    const entries = parseAccept("text/markdown");
    expect(entries).toEqual([{ type: "text/markdown", q: 1, specificity: 2 }]);
  });

  it("parses multiple media types with q-values", () => {
    const entries = parseAccept("text/markdown;q=0.9, text/html;q=0.8, */*;q=0.1");
    expect(entries).toHaveLength(3);
    expect(entries[0]).toEqual({ type: "text/markdown", q: 0.9, specificity: 2 });
    expect(entries[1]).toEqual({ type: "text/html", q: 0.8, specificity: 2 });
    expect(entries[2]).toEqual({ type: "*/*", q: 0.1, specificity: 0 });
  });

  it("prefers text/markdown when explicitly requested", () => {
    expect(preferredType("text/markdown")).toBe("text/markdown");
    expect(preferredType("text/markdown, text/html;q=0.9")).toBe("text/markdown");
    expect(preferredType("text/markdown;q=0.9, text/html;q=0.5")).toBe("text/markdown");
  });

  it("prefers text/html for standard browser Accept header", () => {
    const browserHeader =
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";
    expect(preferredType(browserHeader)).toBe("text/html");
  });

  it("returns null (406 trigger) for unsupported MIME types", () => {
    expect(preferredType("application/pdf")).toBeNull();
    expect(preferredType("image/png, image/jpeg")).toBeNull();
    expect(preferredType("text/html;q=0, text/markdown;q=0")).toBeNull();
  });

  it("handles null or empty Accept header by defaulting to text/html", () => {
    expect(preferredType(null)).toBe("text/html");
    expect(preferredType("")).toBe("text/html");
  });

  it("honors q=0 rejection and picks fallback", () => {
    expect(preferredType("text/html;q=0, text/markdown;q=1")).toBe("text/markdown");
  });
});

describe("Vary Header Management", () => {
  it("sets Vary: Accept when no header exists", () => {
    const headers = new Headers();
    appendVaryAccept(headers);
    expect(headers.get("Vary")).toBe("Accept");
  });

  it("appends Accept to existing Vary header without duplicate", () => {
    const headers = new Headers({ Vary: "Accept-Encoding" });
    appendVaryAccept(headers);
    expect(headers.get("Vary")).toBe("Accept-Encoding, Accept");

    // Calling again should not duplicate
    appendVaryAccept(headers);
    expect(headers.get("Vary")).toBe("Accept-Encoding, Accept");
  });
});

describe("Markdown Route Handlers", () => {
  it("serves portfolio markdown for homepage / root slug", async () => {
    const req = new Request("https://tushar-ravaliya.dev/api/markdown");
    const res = await getMarkdown(req, { params: Promise.resolve({ slug: [] }) });
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("text/markdown; charset=utf-8");
    expect(res.headers.get("Vary")).toBe("Accept");

    const text = await res.text();
    expect(text).toContain("# Tushar Ravaliya");
    expect(text).toContain("## When to Use This / Agent Guidance");
    expect(text).toContain("GhostTrade");
    expect(text).toContain("AI Interview Planner");
  });

  it("returns agent-friendly 404 markdown for unknown paths", async () => {
    const req = new Request("https://tushar-ravaliya.dev/api/markdown/unknown-route");
    const res = await getMarkdown(req, {
      params: Promise.resolve({ slug: ["unknown-route"] }),
    });
    expect(res.status).toBe(404);
    expect(res.headers.get("Content-Type")).toBe("text/markdown; charset=utf-8");
    expect(res.headers.get("Vary")).toBe("Accept");

    const text = await res.text();
    expect(text).toContain("# 404 Not Found");
    expect(text).toContain("sitemap.xml");
    expect(text).toContain("llms.txt");
  });

  it("serves agent-instructions markdown", async () => {
    const req = new Request("https://tushar-ravaliya.dev/api/markdown/agent-instructions");
    const res = await getMarkdown(req, {
      params: Promise.resolve({ slug: ["agent-instructions"] }),
    });
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("text/markdown; charset=utf-8");
    const text = await res.text();
    expect(text).toContain("Agent Instructions");
    expect(text).toContain("Capabilities & Triggers");
  });
});

describe("LLM & Agent Instruction Endpoints", () => {
  it("serves /llms.txt with When to Use guidance", async () => {
    const res = await getLlmsTxt();
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("text/plain; charset=utf-8");
    expect(res.headers.get("Vary")).toBe("Accept");

    const text = await res.text();
    expect(text).toContain("When to Use This (Agent Guidance)");
    expect(text).toContain("tushar.ravaliya18@gmail.com");
    expect(text).toContain("Canonical URLs");
  });

  it("serves /llms-full.txt with complete context", async () => {
    const res = await getLlmsFullTxt();
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("text/plain; charset=utf-8");

    const text = await res.text();
    expect(text).toContain("Full LLM Context");
    expect(text).toContain("GhostTrade");
    expect(text).toContain("AI Interview Planner");
    expect(text).toContain("Technical Skills Matrix");
  });

  it("serves /agent-instructions.md directly", async () => {
    const res = await getAgentInstructions();
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("text/markdown; charset=utf-8");
  });

  it("serves /index.md directly", async () => {
    const res = await getIndexMd();
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("text/markdown; charset=utf-8");
  });
});

describe("Sitemap & Robots", () => {
  it("sitemap includes llms.txt, agent-instructions.md, index.md", () => {
    const map = sitemap();
    const urls = map.map((m) => m.url);
    expect(urls).toContain("https://tushar-ravaliya.dev");
    expect(urls).toContain("https://tushar-ravaliya.dev/llms.txt");
    expect(urls).toContain("https://tushar-ravaliya.dev/llms-full.txt");
    expect(urls).toContain("https://tushar-ravaliya.dev/agent-instructions.md");
    expect(urls).toContain("https://tushar-ravaliya.dev/index.md");
  });

  it("robots allows all and points to sitemap", () => {
    const r = robots();
    expect(r.sitemap).toBe("https://tushar-ravaliya.dev/sitemap.xml");
  });
});

describe("Proxy End-to-End Negotiation Simulation", () => {
  it("returns 406 response with Vary: Accept when unsupported type requested", () => {
    const req = new Request("https://tushar-ravaliya.dev/", {
      headers: { accept: "application/pdf" },
    });
    // @ts-expect-error Mock NextRequest shape
    req.nextUrl = new URL("https://tushar-ravaliya.dev/");
    // @ts-expect-error Mock NextRequest shape
    const res = proxy(req);
    expect(res.status).toBe(406);
    expect(res.headers.get("Vary")).toBe("Accept");
  });

  it("rewrites to markdown api when Accept: text/markdown is sent", () => {
    const req = new Request("https://tushar-ravaliya.dev/", {
      headers: { accept: "text/markdown" },
    });
    // @ts-expect-error Mock NextRequest shape
    req.nextUrl = new URL("https://tushar-ravaliya.dev/");
    // @ts-expect-error Mock NextRequest shape
    const res = proxy(req);
    expect(res.headers.get("x-middleware-rewrite")).toBe("https://tushar-ravaliya.dev/api/markdown");
    expect(res.headers.get("Vary")).toBe("Accept");
  });

  it("rewrites explicit .md request to markdown api handler", () => {
    const req = new Request("https://tushar-ravaliya.dev/index.md");
    // @ts-expect-error Mock NextRequest shape
    req.nextUrl = new URL("https://tushar-ravaliya.dev/index.md");
    // @ts-expect-error Mock NextRequest shape
    const res = proxy(req);
    expect(res.headers.get("x-middleware-rewrite")).toBe("https://tushar-ravaliya.dev/api/markdown");
    expect(res.headers.get("Vary")).toBe("Accept");
  });

  it("sets Link alternate header and Vary on HTML passthrough", () => {
    const req = new Request("https://tushar-ravaliya.dev/", {
      headers: { accept: "text/html" },
    });
    // @ts-expect-error Mock NextRequest shape
    req.nextUrl = new URL("https://tushar-ravaliya.dev/");
    // @ts-expect-error Mock NextRequest shape
    const res = proxy(req);
    expect(res.headers.get("Link")).toBe('</index.md>; rel="alternate"; type="text/markdown"');
    expect(res.headers.get("Vary")).toBe("Accept");
  });
});

