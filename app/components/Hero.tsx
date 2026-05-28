"use client";

import Image from "next/image";

const stats = [
  { value: "02+", label: "YEARS EXP." },
  { value: "10+", label: "PROJECTS" },
  { value: "15+", label: "TECHNOLOGIES" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient background */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(163, 230, 53, 0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="md:!grid-cols-[1.2fr_0.8fr]"
        >
          {/* Left Content */}
          <div>
            {/* Available Badge */}
            <div
              className="animate-fade-in start-hidden"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "32px",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "1px",
                color: "var(--color-text-secondary)",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "50%",
                  display: "inline-block",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            {/* Heading */}
            <h1
              className="animate-fade-in-up start-hidden delay-100"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(48px, 7vw, 88px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-2px",
                marginBottom: "24px",
              }}
            >
              I BUILD DIGITAL{" "}
              <span style={{ color: "var(--color-accent)" }}>EXPERIENCES.</span>
            </h1>

            {/* Subtext */}
            <p
              className="animate-fade-in-up start-hidden delay-200"
              style={{
                fontSize: "16px",
                color: "var(--color-text-secondary)",
                maxWidth: "440px",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              Full-stack MERN developer &mdash; national hackathon finalist with
              proven experience shipping real-time web apps using React, Node.js,
              Express, and MongoDB.
            </p>

            {/* Buttons */}
            <div
              className="animate-fade-in-up start-hidden delay-300"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 28px",
                  border: "1px solid var(--color-border-hover)",
                  borderRadius: "100px",
                  color: "var(--color-text-primary)",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(163, 230, 53, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--color-border-hover)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                VIEW MY WORK
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 28px",
                  color: "var(--color-text-secondary)",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.5px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-secondary)";
                }}
              >
                DOWNLOAD CV
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
              </a>
            </div>
          </div>

          {/* Right Content - Illustration + Stats */}
          <div
            className="animate-fade-in start-hidden delay-400"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {/* Illustration */}
            <div
              className="animate-float"
              style={{
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "1",
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/hero-illustration.png"
                alt="Tushar Ravaliya - Developer illustration"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2px",
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "var(--color-border)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: "var(--color-bg-secondary)",
                    padding: "20px 16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "1.5px",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
