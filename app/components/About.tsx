"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React / Next.js", level: 5 },
  { name: "Node.js / Express", level: 4 },
  { name: "MongoDB", level: 4 },
  { name: "TypeScript", level: 3 },
  { name: "Tailwind CSS", level: 4 },
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

function SkillCapsule({
  name,
  level,
  animate,
}: {
  name: string;
  level: number;
  animate: boolean;
}) {
  const totalSegments = 5;
  return (
    <div className="mb-5">
      <span className="text-sm font-medium text-text-primary block mb-2.5">
        {name}
      </span>
      <div className="flex gap-2">
        {Array.from({ length: totalSegments }).map((_, i) => (
          <div
            key={i}
            className={`h-[10px] flex-1 rounded-full transition-all duration-500 ${
              animate && i < level
                ? "bg-accent shadow-[0_0_8px_rgba(163,230,53,0.25)]"
                : "bg-border-hover"
            }`}
            style={{
              transitionDelay: animate ? `${i * 100}ms` : "0ms",
            }}
          />
        ))}
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
      className="py-[100px] border-t border-border"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 mb-5 text-xs font-medium tracking-[1px] text-text-secondary uppercase">
          <span className="w-2 h-2 bg-accent rounded-full inline-block" />
          ABOUT ME
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="font-heading text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-1px] mb-8">
              I TURN IDEAS INTO FAST, SCALABLE & BEAUTIFUL WEB EXPERIENCES.
            </h2>

            {/* Highlights */}
            <h3 className="sr-only">Core Highlights & Specializations</h3>
            <div className="flex flex-col gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 text-text-secondary text-sm font-medium"
                >
                  <div className="w-9 h-9 rounded-[10px] border border-border flex items-center justify-center shrink-0">
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
            <div className="mb-10">
              <p className="text-[15px] text-text-secondary leading-[1.8] mb-4">
                I&apos;m a Full-Stack MERN Developer passionate about building
                digital products that are fast, functional, and visually
                engaging. Currently pursuing B.Tech in Computer Engineering at
                RK University.
              </p>
              <p className="text-[15px] text-text-secondary leading-[1.8]">
                I enjoy solving complex problems and turning ideas into
                impactful solutions — from real-time trading apps to AI-powered
                interview planners.
              </p>
            </div>

            {/* Skills — Capsule Progress Bars */}
            <div>
              <h3 className="text-xs font-semibold tracking-[2px] text-text-muted mb-4 uppercase">
                Technical Stack &amp; Proficiency
              </h3>
              {skills.map((skill) => (
                <SkillCapsule
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
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
