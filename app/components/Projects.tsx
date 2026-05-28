"use client";

import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "GHOSTTRADE",
    heading: "Virtual Money Trading — real-time market simulation.",
    description:
      "A Virtual Money trading app using the MERN stack, integrating Lightweight charts for advanced financial visualization. Secured user sessions with JWT and WebSocket APIs for real-time market data.",
    image: "/images/project-pixora.png",
    tags: ["REACT", "NODE.JS", "MONGODB", "WEBSOCKET"],
    link: "https://github.com/Tushar-Ravaliya/GhostTrade",
  },
  {
    number: "02",
    title: "AI INTERVIEW PLANNER",
    heading: "Smart interview prep powered by AI.",
    description:
      "A full-stack AI Interview Planner using MongoDB, Express, React, and Node.js that assesses job description compatibility, delivers a 0–100% match score, and identifies critical skill gaps.",
    image: "/images/project-flowteam.png",
    tags: ["REACT", "EXPRESS", "MONGODB", "NODE.JS"],
    link: "https://github.com/Tushar-Ravaliya/AI-Interview-Planner",
  },
  {
    number: "03",
    title: "BUZZIFY",
    heading: "Social platform for real-time buzz.",
    description:
      "A social media-style application featuring real-time updates, user authentication, and a modern responsive UI built with the MERN stack.",
    image: "/images/project-fintex.png",
    tags: ["REACT", "NODE.JS", "MONGODB", "TAILWIND CSS"],
    link: "https://github.com/Tushar-Ravaliya/Buzzify",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-bg-card)",
        borderRadius: "16px",
        border: "1px solid var(--color-border)",
        overflow: "hidden",
        transition: "all 0.4s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border-hover)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image Area */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/10",
          overflow: "hidden",
          margin: "12px",
          borderRadius: "12px",
          backgroundColor: "var(--color-bg-secondary)",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
        />
        {/* Number Badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.15)",
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--color-accent)",
          }}
        >
          {project.number}
        </div>
        {/* Heading overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            right: "16px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#fff",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            {project.heading}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "8px 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          flex: 1,
        }}
      >
        {/* Title + Arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            {project.title}
          </h4>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
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
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.color = "var(--color-text-secondary)";
            }}
          >
            <svg
              width="14"
              height="14"
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

        {/* Description */}
        <p
          style={{
            fontSize: "13px",
            color: "var(--color-text-muted)",
            lineHeight: 1.5,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "auto",
            paddingTop: "8px",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                padding: "6px 12px",
                border: "1px solid var(--color-border)",
                borderRadius: "6px",
                color: "var(--color-text-secondary)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
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
              FEATURED WORKS
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-1px",
              }}
            >
              SELECTED PROJECTS
            </h2>
          </div>
          <a
            href="https://github.com/tushar-ravaliya?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-secondary)";
            }}
          >
            VIEW ALL PROJECTS
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
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
