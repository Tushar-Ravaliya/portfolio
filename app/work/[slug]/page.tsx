import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, profile } from "@/lib/portfolio";
import { SiteHeader } from "@/components/site-header";
import { ProjectArt } from "@/components/project-art";
import { Arrow } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Field note not found" };
  return {
    title: project.name,
    description: project.summary,
    alternates: profile.siteUrl
      ? { canonical: `/work/${project.slug}` }
      : undefined,
    openGraph: {
      title: `${project.name} — Tushar Ravaliya`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return (
    <>
      <SiteHeader />
      <main id="main" className="page-width dossier">
        <Link href="/#work" className="dossier-back mono">
          <Arrow direction="left" /> BACK TO SELECTED WORK
        </Link>
        <header className="dossier-header">
          <div>
            <div className="eyebrow mono">
              <span className="section-index">
                FIELD NOTE {project.number} /
              </span>
              {project.category.toUpperCase()}
            </div>
            <h1>
              {project.name}
              <em>.</em>
            </h1>
          </div>
          <p>{project.question}</p>
        </header>
        <div className="dossier-art">
          <ProjectArt slug={project.slug} />
        </div>
        <div className="dossier-overview">
          <dl className="dossier-aside">
            <div>
              <dt>STATUS</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>CONTENT BASIS</dt>
              <dd>{project.evidence}</dd>
            </div>
            <div>
              <dt>BUILT WITH</dt>
              <dd>
                {project.technologies.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </dd>
            </div>
            {project.repository && (
              <div>
                <dt>EXPLORE THE SOURCE</dt>
                <dd>
                  <a
                    className="text-link"
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub repository <Arrow />
                  </a>
                </dd>
              </div>
            )}
          </dl>
          <div className="dossier-body">
            <p className="overview-text">{project.overview}</p>
            {project.details.map((detail, i) => (
              <section className="dossier-detail" key={detail.title}>
                <span className="mono">0{i + 1}</span>
                <div>
                  <h2>{detail.title}</h2>
                  <p>{detail.text}</p>
                </div>
              </section>
            ))}
            <div className="system-flow">
              <span className="mono">THE SYSTEM, AT A GLANCE</span>
              <ol>
                {project.flow.map((step, i) => (
                  <li key={step}>
                    <span className="mono">0{i + 1}</span>
                    {step}
                    {i < project.flow.length - 1 && <Arrow direction="right" />}
                  </li>
                ))}
              </ol>
            </div>
            {project.note && (
              <aside className="dossier-note">{project.note}</aside>
            )}
          </div>
        </div>
        <Link className="dossier-next" href={`/work/${next.slug}`}>
          <div>
            <span className="mono">
              KEEP EXPLORING / FIELD NOTE {next.number}
            </span>
            <h2>{next.name}</h2>
          </div>
          <Arrow />
        </Link>
      </main>
    </>
  );
}
