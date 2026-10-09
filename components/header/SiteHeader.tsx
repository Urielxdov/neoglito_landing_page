import { NAV_LINKS } from "@/lib/landing/content";
import { Container } from "../ui/Container";
import { LogoMark } from "../ui/Logo";

/** Barra de navegación fija con logo, enlaces de sección y CTA de contacto. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/88 backdrop-blur-[10px]">
      <Container className="flex h-[68px] items-center gap-6">
        <a href="#top" aria-label="Neoglito, inicio" className="flex items-center gap-2.5 text-fg">
          <LogoMark />
          <span className="text-[21px] font-semibold tracking-[-.03em]">neoglito</span>
        </a>
        <nav aria-label="Principal" className="ml-auto flex flex-wrap gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-fg-2 transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="inline-flex h-10 items-center rounded-btn bg-fg px-[18px] text-sm font-semibold text-white transition-colors hover:bg-accent"
        >
          Contacto
        </a>
      </Container>
    </header>
  );
}
