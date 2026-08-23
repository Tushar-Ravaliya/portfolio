"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/tushar-ravaliya",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tushar-ravaliya",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/tushar_ravaliya",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const footer = document.getElementById("contact");
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(163,230,53,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(163,230,53,0.04)_0%,transparent_60%)] pointer-events-none" />

      {/* ── Marquee Strip ── */}
      <div className="border-t border-b border-border py-4 overflow-hidden relative">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "marquee 20s linear infinite",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-[13px] font-semibold tracking-[3px] text-text-muted uppercase mx-8 flex items-center gap-8"
            >
              FULL-STACK DEVELOPER
              <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full" />
              REACT & NODE.JS
              <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full" />
              MERN STACK
              <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full" />
              OPEN TO WORK
              <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Main CTA Section ── */}
      <div className="py-20 md:py-28 px-6 relative">
        <div
          className="max-w-[1280px] mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Small label */}
          <p className="text-xs font-semibold tracking-[3px] text-text-muted uppercase mb-6">
            HAVE A PROJECT IN MIND?
          </p>

          {/* Giant CTA heading */}
          <h2 className="font-heading text-[clamp(32px,6vw,72px)] font-extrabold leading-[1.05] tracking-[-2px] mb-8">
            LET&apos;S WORK <span className="text-accent">TOGETHER.</span>
          </h2>

          {/* Email as a prominent clickable element */}
          <a
            href="mailto:tushar.ravaliya18@gmail.com"
            className="group inline-flex items-center gap-4 no-underline mb-12 transition-all duration-300"
          >
            {/* Email icon */}
            <span className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-border-hover bg-bg-secondary transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10 group-hover:scale-110">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-secondary transition-colors duration-300 group-hover:text-accent"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <span className="flex flex-col">
              <span className="text-[10px] font-semibold tracking-[2px] text-text-muted uppercase mb-1">
                DROP ME A LINE
              </span>
              <span className="text-[clamp(16px,2.5vw,28px)] font-heading font-bold text-text-primary transition-colors duration-300 group-hover:text-accent tracking-[-0.5px]">
                tushar.ravaliya18@gmail.com
              </span>
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 ml-2 hidden sm:block"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-12" />

          {/* Bottom grid: Nav + Socials + CTA Button */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr] gap-10">
            {/* Navigation links */}
            <div>
              <h3 className="text-[10px] font-semibold tracking-[2px] text-text-muted mb-5 uppercase">
                QUICK LINKS
              </h3>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-text-secondary no-underline transition-all duration-300 hover:text-text-primary hover:translate-x-1 inline-flex items-center gap-2 w-fit"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social links with icons */}
            <div>
              <h3 className="text-[10px] font-semibold tracking-[2px] text-text-muted mb-5 uppercase">
                FIND ME ONLINE
              </h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social inline-flex items-center gap-3 text-sm text-text-secondary no-underline transition-all duration-300 hover:text-text-primary w-fit"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-bg-card border border-border transition-all duration-300 group-hover/social:border-accent group-hover/social:bg-accent/10 group-hover/social:text-accent">
                      {link.icon}
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button area */}
            <div className="flex flex-col items-start md:items-end justify-end gap-4">
              <a
                href="mailto:tushar.ravaliya18@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg-primary rounded-full text-[13px] font-bold tracking-[0.5px] no-underline transition-all duration-300 hover:bg-accent-dark hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] hover:scale-105 active:scale-95"
              >
                GET IN TOUCH
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/1soZ8yJWlA9RyEOSPxNjqi7XMfiCZbfVl/view?usp=sharing"
                target="_blank"
                className="inline-flex items-center gap-2 text-[13px] text-text-muted no-underline transition-colors duration-300 hover:text-text-secondary"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-border">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-dot" />
            <p className="text-[12px] text-text-muted">
              © {currentYear} Tushar Ravaliya
            </p>
          </div>
          <p className="text-[12px] text-text-muted">
            Designed &amp; built with ❤️ and lots of ☕
          </p>
          <button
            onClick={scrollToTop}
            className="group/top inline-flex items-center gap-2 text-[12px] text-text-muted bg-transparent border border-border rounded-full px-4 py-2 cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/5"
            aria-label="Scroll to top"
          >
            BACK TO TOP
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover/top:-translate-y-0.5"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
