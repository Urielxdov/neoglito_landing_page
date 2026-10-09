import { siteConfig } from "@/lib/landing/config";
import { PROJECTS } from "@/lib/landing/content";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { ProjectCard } from "./ProjectCard";

/** Sección "Proyectos seleccionados". */
export function ProjectsSection() {
  const staggered = siteConfig.projectLayout === "escalonado";

  return (
    <Container as="section" id="proyectos" className="pt-[clamp(80px,11vw,152px)]">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow num="02" label="Proyectos seleccionados" className="mb-5" />
          <h2
            data-reveal="1"
            className="m-0 max-w-[760px] text-[length:clamp(34px,4.4vw,64px)] font-medium leading-[1.04] tracking-[-.035em] text-balance"
          >
            Problemas distintos, <span className="text-accent">software distinto.</span>
          </h2>
        </div>
        <p className="m-0 max-w-[340px] text-[15px] leading-[1.6] text-fg-2">
          Cada proyecto tiene su propia interfaz y su propio carácter. No repetimos el mismo
          dashboard.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.num} project={project} staggered={staggered} />
        ))}
      </div>
    </Container>
  );
}
