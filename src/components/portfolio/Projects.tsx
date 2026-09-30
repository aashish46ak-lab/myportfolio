import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Section";

const projectImages: Record<string, { src: string; alt: string }> = {
  neparena: {
    src: "https://id-preview--cd4fbe95-be01-4e63-bb67-b978c39d94fc.lovable.app/__l5e/assets-v1/495e8935-59a6-48f9-ac60-92572fcc4817/neparena-cover.jpg",
    alt: "NepARENA - Online Tournament Hosting platform cover",
  },
  sharetemp: {
    src: "https://sharetemp.vercel.app/og.jpg?v=7",
    alt: "ShareTemp - Temporary File and Content Sharing platform cover",
  },
};

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const cover = project.image ? projectImages[project.image] : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {cover ? (
        <img
          src={cover.src}
          alt={cover.alt}
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full object-cover object-center"
        />
      ) : (
        <div className="hero-gradient hero-pattern grid aspect-[16/9] place-items-center">
          <span className="text-4xl font-bold tracking-tight text-primary transition-transform duration-300 group-hover:scale-105">
            {project.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Live Project
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            View Project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="soft-gradient px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured Projects"
            subtitle="Some of the things I've built."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.name} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
