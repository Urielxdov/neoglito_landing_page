import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { HeroShowcase } from "./HeroShowcase";

/** Titular principal + composición animada. */
export function HeroSection() {
  return (
    <Container
      as="section"
      id="top"
      className="pt-[clamp(48px,8vw,104px)] pb-[clamp(48px,6vw,80px)]"
    >
      <Eyebrow num="00" label="Neoglito · Ingeniería de software a la medida" className="mb-9" />
      <div className="flex flex-wrap items-end gap-[clamp(32px,5vw,72px)]">
        <h1
          data-reveal="1"
          className="m-0 flex-[1_1_600px] text-[length:clamp(46px,7.2vw,116px)] font-medium leading-[.98] tracking-[-.045em]"
        >
          <span className="block">Software</span>
          <span className="block pl-[1.1em]">para tus</span>
          <span className="block text-accent">propias reglas.</span>
        </h1>
        <HeroShowcase />
      </div>
    </Container>
  );
}
