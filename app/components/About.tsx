"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React / Next.js", percentage: 90 },
  { name: "Node.js / Express", percentage: 85 },
  { name: "MongoDB", percentage: 80 },
  { name: "TypeScript", percentage: 75 },
  { name: "Tailwind CSS", percentage: 85 },
];

const highlights = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: "MERN Stack Developer",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    label: "National Hackathon Finalist",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    label: "Real-Time App Specialist",
  },
];

function SkillBar({
  name,
  percentage,
  animate,
}: {
  name: string;
  percentage: number;
  animate: boolean;
}) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--color-text-primary)",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--color-text-secondary)",
          }}
        >
          {percentage}%
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: "6px",
          backgroundColor: "var(--color-bg-card)",
          borderRadius: "3px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: animate ? `${percentage}%` : "0%",
            background: `linear-gradient(90deg, var(--color-accent-dark), var(--color-accent))`,
            borderRadius: "3px",
            transition: "width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Section Label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "20px",
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
            }}
          />
          ABOUT ME
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="lg:!grid-cols-[1fr_1fr]"
        >
          {/* Left Column */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-1px",
                marginBottom: "32px",
              }}
            >
              I TURN IDEAS INTO FAST, SCALABLE & BEAUTIFUL WEB EXPERIENCES.
            </h2>

            {/* Highlights */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "var(--color-text-secondary)",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Bio Text */}
            <div style={{ marginBottom: "40px" }}>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                  marginBottom: "16px",
                }}
              >
                I&apos;m a Full-Stack MERN Developer passionate about building
                digital products that are fast, functional, and visually
                engaging. Currently pursuing B.Tech in Computer Engineering at
                RK University.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.8,
                }}
              >
                I enjoy solving complex problems and turning ideas into
                impactful solutions — from real-time trading apps to AI-powered
                interview planners.
              </p>
            </div>

            {/* Skills */}
            <div>
              {skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  animate={animate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
