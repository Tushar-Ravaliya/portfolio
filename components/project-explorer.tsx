"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { projects, profile } from "@/lib/portfolio";
import { ProjectArt } from "./project-art";
import { Arrow } from "./icons";

export function ProjectExplorer() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const project = projects[selected];
  function navigate(event: KeyboardEvent, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % projects.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index - 1 + projects.length) % projects.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = projects.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }
  return (
    <div className="project-explorer">
      <div
        className="project-tabs"
        role="tablist"
        aria-label="Selected projects"
      >
        {projects.map((item, index) => (
          <button
            key={item.slug}
            id={`tab-${item.slug}`}
            role="tab"
            aria-selected={selected === index}
            aria-controls="project-panel"
            tabIndex={selected === index ? 0 : -1}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            onKeyDown={(event) => navigate(event, index)}
            onClick={() => setSelected(index)}
          >
            <span className="mono">{item.number}</span>
            <span>{item.name}</span>
            <span className="tab-indicator">↗</span>
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="project-panel"
        aria-labelledby={`tab-${project.slug}`}
        className="project-panel"
        tabIndex={0}
      >
        <div className="project-visual" key={`${project.slug}-art`}>
          <ProjectArt slug={project.slug} />
        </div>
        <div className="project-info" key={project.slug}>
          <div className="project-meta mono">
            <span>{project.category}</span>
            <span className="project-status">{project.status}</span>
          </div>
          <span className="project-number">/{project.number}</span>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
          <ul className="technology-list" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <Link className="text-link" href={`/work/${project.slug}`}>
            Open field notes <Arrow />
          </Link>
        </div>
      </div>
      <div className="work-footnote mono">
        <span>SMALL QUESTIONS. WORKING ANSWERS.</span>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          MORE ON GITHUB <Arrow />
        </a>
      </div>
    </div>
  );
}
