import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { ProcessExplorer } from "./ProcessExplorer";

/** Sección "Cómo trabajamos". */
export function ProcessSection() {
  return (
    <Container as="section" id="proceso" className="py-[clamp(80px,11vw,152px)]">
      <Eyebrow num="03" label="Cómo trabajamos" className="mb-5" />
      <h2
        data-reveal="1"
        className="m-0 mb-14 max-w-[820px] text-[length:clamp(34px,4.4vw,64px)] font-medium leading-[1.04] tracking-[-.035em] text-balance"
      >
        Pieza por pieza, hasta que funciona.
      </h2>
      <ProcessExplorer />
    </Container>
  );
}
