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
    <div className="group bg-bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 cursor-pointer flex flex-col hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
      {/* Image Area */}
      <div className="relative aspect-[16/10] overflow-hidden m-3 rounded-xl bg-bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Number Badge */}
        <div className="absolute top-3 left-3 w-9 h-9 rounded-[10px] border border-white/15 bg-black/50 backdrop-blur-[10px] flex items-center justify-center text-xs font-semibold text-accent">
          {project.number}
        </div>
        {/* Heading overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-heading text-lg font-bold leading-[1.3] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
            {project.heading}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-2 pb-5 flex flex-col gap-3 flex-1">
        {/* Title + Arrow */}
        <div className="flex items-center justify-between">
          <h4 className="font-heading text-sm font-bold tracking-[0.5px]">
            {project.title}
          </h4>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-[10px] border border-border flex items-center justify-center text-text-secondary no-underline transition-all duration-300 hover:border-accent hover:text-accent"
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
        <p className="text-[13px] text-text-muted leading-[1.5]">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-[0.5px] px-3 py-1.5 border border-border rounded-md text-text-secondary"
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
    <section id="projects" className="py-[100px] border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-medium tracking-[1px] text-text-secondary uppercase">
              <span className="w-2 h-2 bg-accent rounded-full inline-block" />
              FEATURED WORKS
            </div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold tracking-[-1px]">
              SELECTED PROJECTS
            </h2>
          </div>
          <a
            href="https://github.com/tushar-ravaliya?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-text-secondary no-underline transition-colors duration-300 hover:text-accent"
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
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
