import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { ServiceList } from "./ServiceList";

/** Sección "Qué hacemos": encabezado + lista interactiva de servicios. */
export function ServicesSection() {
  return (
    <Container as="section" id="servicios" className="pt-[clamp(72px,10vw,136px)]">
      <div className="mb-14 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-12 gap-y-6">
        <Eyebrow num="01" label="Qué hacemos" className="mt-2" />
        <h2
          data-reveal="1"
          className="col-span-2 m-0 text-[length:clamp(34px,4.4vw,64px)] font-medium leading-[1.04] tracking-[-.035em] text-balance max-[639px]:col-span-1"
        >
          Tres formas de convertir una necesidad en software.
        </h2>
      </div>
      <ServiceList />
    </Container>
  );
}
