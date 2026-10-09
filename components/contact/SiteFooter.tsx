import { Container } from "../ui/Container";
import { LogoMark } from "../ui/Logo";

/** Pie de página con marca y copyright. */
export function SiteFooter() {
  return (
    <footer className="border-t border-navy-line">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-navy-muted">
        <span className="flex items-center gap-2.5 text-white">
          <LogoMark size={18} tone="dark" />
          <span className="font-semibold tracking-[-.02em]">neoglito</span>
        </span>
        <span>© 2026 Neoglito · Software a la medida</span>
      </Container>
    </footer>
  );
}
