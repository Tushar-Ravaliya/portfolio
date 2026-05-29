"use client";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/tushar-ravaliya" },
  { label: "LinkedIn", href: "https://linkedin.com/in/tushar-ravaliya" },
  { label: "Email", href: "mailto:tushar.ravaliya18@gmail.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      {/* CTA Section */}
      <div className="py-20 px-6 border-b border-border">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between flex-wrap gap-6">
          <h2 className="font-heading text-[clamp(24px,3vw,32px)] font-bold leading-[1.3] tracking-[-0.5px] max-w-[400px]">
            LET&apos;S BUILD SOMETHING AWESOME TOGETHER.
          </h2>
          <a
            href="mailto:tushar.ravaliya18@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg-primary rounded-full text-base font-bold tracking-[0.5px] no-underline transition-all duration-300 hover:bg-accent-dark hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:scale-105"
          >
            GET IN TOUCH
            <svg
              width="20"
              height="20"
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
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1.5fr] gap-10">
          {/* Logo / Brand */}
          <div />

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-[1px] text-text-muted mb-5 uppercase">
              NAVIGATION
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-secondary no-underline transition-colors duration-300 hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-semibold tracking-[1px] text-text-muted mb-5 uppercase">
              SOCIALS
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary no-underline transition-colors duration-300 hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col justify-end text-right gap-2">
            <p className="text-[13px] text-text-muted">
              © 2026 Tushar Ravaliya. All rights reserved.
            </p>
            <p className="text-[13px] text-text-muted">
              Built with passion &amp; code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
