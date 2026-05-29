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
      className="min-h-screen flex items-center pt-[100px] pb-[60px] relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute -top-1/2 -right-[20%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(163,230,53,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Available Badge */}
            <div className="opacity-0 animate-fade-in inline-flex items-center gap-2 mb-8 text-xs font-medium tracking-[1px] text-text-secondary uppercase">
              <span className="w-2 h-2 bg-accent rounded-full inline-block animate-pulse-dot" />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            {/* Heading */}
            <h1
              className="opacity-0 animate-fade-in-up font-heading text-[clamp(48px,7vw,88px)] font-extrabold leading-[1.05] tracking-[-2px] mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              I BUILD DIGITAL{" "}
              <span className="text-accent">EXPERIENCES.</span>
            </h1>

            {/* Subtext */}
            <p
              className="opacity-0 animate-fade-in-up text-base text-text-secondary max-w-[440px] leading-[1.7] mb-10"
              style={{ animationDelay: "0.2s" }}
            >
              Full-stack MERN developer &mdash; national hackathon finalist with
              proven experience shipping real-time web apps using React, Node.js,
              Express, and MongoDB.
            </p>

            {/* Buttons */}
            <div
              className="opacity-0 animate-fade-in-up flex items-center gap-4 flex-wrap"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-border-hover rounded-full text-text-primary text-[13px] font-semibold no-underline tracking-[0.5px] transition-all duration-300 bg-transparent hover:border-accent hover:bg-accent/5"
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
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-text-secondary text-[13px] font-semibold no-underline tracking-[0.5px] transition-colors duration-300 hover:text-text-primary"
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
            className="opacity-0 animate-fade-in flex flex-col items-center gap-8"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Illustration */}
            <div className="animate-float w-full max-w-[400px] aspect-square relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/hero-illustration.png"
                alt="Tushar Ravaliya - Developer illustration"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-0.5 w-full max-w-[400px] bg-border rounded-2xl overflow-hidden">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-bg-secondary py-5 px-4 text-center"
                >
                  <div className="text-[28px] font-bold font-heading text-text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-medium tracking-[1.5px] text-text-muted uppercase">
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
