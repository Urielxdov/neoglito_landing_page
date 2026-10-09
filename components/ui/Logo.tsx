interface LogoMarkProps {
  size?: number;
  tone?: "light" | "dark";
}

/** Isotipo de Neoglito: tres bloques + bloque de acento. */
export function LogoMark({ size = 24, tone = "light" }: LogoMarkProps) {
  const base = tone === "dark" ? "#fff" : "var(--color-navy)";
  const accent = tone === "dark" ? "var(--color-sky)" : "var(--color-accent)";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="9" width="6.5" height="6.5" rx="1.2" fill={base} />
      <rect x="1" y="16.5" width="6.5" height="6.5" rx="1.2" fill={base} />
      <rect x="8.5" y="16.5" width="6.5" height="6.5" rx="1.2" fill={base} />
      <rect x="12" y="1" width="11" height="11" rx="1.6" fill={accent} />
    </svg>
  );
}
