import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-sm text-fg transition hover:border-violet hover:text-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-violet/50">
      {project.image ? (
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          width={800}
          height={450}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className="flex aspect-video items-center justify-center border-b border-line bg-bg p-4 text-center font-mono text-xs text-muted">
          {project.category}
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1 font-mono text-xs text-violet">{project.category}</p>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.description}</p>

        <ul className="mt-4 space-y-1 text-sm text-muted">
          {project.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-blue">▹</span>
              {h}
            </li>
          ))}
        </ul>

        {project.note && <p className="mt-3 text-xs italic text-muted">{project.note}</p>}

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>

        {(project.github || project.demo) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Live demo <ExternalLink size={14} aria-hidden />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                GitHub <ArrowUpRight size={14} aria-hidden />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}