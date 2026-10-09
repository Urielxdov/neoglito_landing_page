import { siteConfig } from "@/lib/landing/config";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { SiteFooter } from "./SiteFooter";

/** Llamado final a contacto + pie de página. */
export function ContactSection() {
  const email = siteConfig.contactEmail;

  return (
    <section id="contacto" className="bg-navy text-white">
      <Container className="py-[clamp(80px,11vw,144px)]">
        <Eyebrow num="04" label="Contacto" tone="dark" className="mb-7" />
        <h2
          data-reveal="1"
          className="m-0 text-[length:clamp(44px,7vw,112px)] font-medium leading-[.98] tracking-[-.045em]"
        >
          ¿Qué necesitas
          <br />
          <span className="pl-[1.1em] text-sky">construir?</span>
        </h2>
        <div className="mt-14 flex flex-wrap items-end justify-between gap-8 border-t border-navy-line pt-8">
          <p className="m-0 max-w-[560px] text-[length:clamp(18px,1.8vw,22px)] leading-[1.5] text-pretty text-navy-text">
            Cuéntanos qué problema quieres resolver y exploremos cómo convertirlo en software.
          </p>
          <a
            href={`mailto:${email}`}
            className="inline-flex h-16 items-center gap-7 rounded-btn bg-accent px-7 text-[19px] font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Escríbenos · {email} <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
      <SiteFooter />
    </section>
  );
}
