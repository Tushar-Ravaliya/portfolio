import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-bg-primary text-text-primary text-center relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(163,230,53,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[640px] w-full z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-[2px] text-accent uppercase px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse-dot" />
          HTTP 404 — PAGE NOT FOUND
        </div>

        {/* Heading */}
        <h1 className="font-heading text-[clamp(40px,8vw,96px)] font-extrabold leading-[1] tracking-[-2px] mb-4">
          LOST IN <span className="text-accent">SPACE.</span>
        </h1>

        <p className="text-text-secondary text-base sm:text-lg max-w-[480px] mx-auto mb-10 leading-[1.6]">
          The page or resource you requested does not exist or has been moved.
          Use the links below to navigate back to active pages or machine-readable documents.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg-primary rounded-full text-[13px] font-bold tracking-[0.5px] no-underline transition-all duration-300 hover:bg-accent-dark hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:scale-105"
          >
            RETURN HOME
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border-hover rounded-full text-text-primary text-[13px] font-semibold no-underline tracking-[0.5px] transition-all duration-300 bg-transparent hover:border-accent hover:bg-accent/5"
          >
            VIEW PROJECTS
          </Link>
        </div>

        {/* Recovery Links for Agents & Users */}
        <div className="border-t border-border pt-8 text-left bg-bg-card/50 rounded-2xl p-6 border">
          <h2 className="text-xs font-semibold tracking-[2px] text-text-muted uppercase mb-4">
            QUICK RECOVERY DIRECTORY
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-secondary">
            <li>
              <Link href="/#about" className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="text-accent">→</span> About &amp; Skills
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="text-accent">→</span> Experience &amp; Education
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="text-accent">→</span> Sitemap (XML)
              </Link>
            </li>
            <li>
              <Link href="/llms.txt" className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="text-accent">→</span> LLM Index (llms.txt)
              </Link>
            </li>
            <li>
              <Link href="/llms-full.txt" className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="text-accent">→</span> LLM Full Dump (llms-full.txt)
              </Link>
            </li>
            <li>
              <Link href="/agent-instructions.md" className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="text-accent">→</span> Agent Instructions (.md)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
