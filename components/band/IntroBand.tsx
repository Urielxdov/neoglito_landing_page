import { BAND_FACTS } from "@/lib/landing/content";
import { Container } from "../ui/Container";

const CTA_BASE =
  "flex h-[58px] items-center justify-between rounded-btn px-6 text-lg font-medium text-white transition-colors";

/** Banda oscura con propuesta de valor, CTAs y datos clave. */
export function IntroBand() {
  return (
    <section className="bg-navy text-white">
      <Container className="py-[clamp(36px,5vw,56px)]">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <p className="m-0 max-w-[720px] flex-[1_1_520px] text-[length:clamp(19px,2vw,25px)] leading-[1.45] text-pretty text-navy-text">
            Construimos aplicaciones, sistemas y herramientas digitales a la medida de los
            problemas que necesitas resolver.
          </p>
          <div className="flex min-w-[240px] flex-[0_1_340px] flex-col gap-3">
            <a href="#contacto" className={`${CTA_BASE} bg-accent hover:bg-accent-hover`}>
              Hablemos de tu idea <span aria-hidden="true">→</span>
            </a>
            <a
              href="#proyectos"
              className={`${CTA_BASE} border border-navy-border hover:border-navy-muted`}
            >
              Explorar proyectos <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <dl className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 border-t border-navy-line pt-[22px]">
          {BAND_FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[.12em] text-navy-muted">
                {fact.label}
              </dt>
              <dd className="m-0 mt-1.5 text-[15px]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
