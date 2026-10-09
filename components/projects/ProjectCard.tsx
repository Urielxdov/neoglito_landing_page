import type { Project } from "@/lib/landing/types";
import { Tag } from "../ui/Tag";
import { ProjectMedia } from "./ProjectMedia";

interface ProjectCardProps {
  project: Project;
  staggered: boolean;
}

/** Tarjeta de un proyecto: estado, imagen, título, descripción y etiquetas. */
export function ProjectCard({ project, staggered }: ProjectCardProps) {
  return (
    <article
      data-reveal="1"
      className={`flex flex-col gap-[18px] ${staggered ? project.staggerClassName : ""}`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-xs text-fg-3">{project.num}</span>
        <Tag className="tracking-[.1em]">{project.status}</Tag>
      </div>
      <ProjectMedia
        image={project.image}
        alt={project.placeholder}
        className={project.mediaClassName}
      />
      <div>
        <h3 className="m-0 mb-2 text-[26px] font-medium tracking-[-.025em]">{project.title}</h3>
        <p className="m-0 text-base leading-[1.55] text-pretty text-fg-2">{project.description}</p>
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag} className="tracking-[.08em]">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
