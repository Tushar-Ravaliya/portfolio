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
    <footer
      id="contact"
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "0",
      }}
    >
      {/* CTA Section */}
      <div
        style={{
          padding: "80px 24px",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "-0.5px",
              maxWidth: "400px",
            }}
          >
            LET&apos;S BUILD SOMETHING AWESOME TOGETHER.
          </h2>
          <a
            href="mailto:tushar.ravaliya18@gmail.com"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              border: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-accent)";
              e.currentTarget.style.backgroundColor =
                "rgba(163, 230, 53, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.color = "var(--color-text-secondary)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
      <div
        style={{
          padding: "48px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
          className="md:!grid-cols-[1fr_1fr_1fr_1.5fr]"
        >
          {/* Logo / Brand */}
          <div />

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "var(--color-text-muted)",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              NAVIGATION
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "var(--color-text-muted)",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              SOCIALS
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              textAlign: "right",
              gap: "8px",
            }}
            className="md:!text-right"
          >
            <p
              style={{
                fontSize: "13px",
                color: "var(--color-text-muted)",
              }}
            >
              © 2026 Tushar Ravaliya. All rights reserved.
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "var(--color-text-muted)",
              }}
            >
              Built with passion & code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
