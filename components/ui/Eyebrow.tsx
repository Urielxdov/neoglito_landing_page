interface EyebrowProps {
  num: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}

/** Etiqueta numerada en monoespaciada que encabeza cada sección. */
export function Eyebrow({ num, label, tone = "light", className = "" }: EyebrowProps) {
  const dark = tone === "dark";
  return (
    <p
      className={`m-0 flex gap-2.5 font-mono text-xs uppercase tracking-[.12em] ${
        dark ? "text-navy-muted" : "text-fg-2"
      } ${className}`}
    >
      <span className={dark ? "text-sky" : "text-accent"}>{num}</span>
      <span>{label}</span>
    </p>
  );
}
