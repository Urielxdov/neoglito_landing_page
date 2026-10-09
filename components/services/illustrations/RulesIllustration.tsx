import type { IllustrationProps } from "./types";

interface RuleRowProps {
  label: string;
  barWidth: string;
  highlighted?: boolean;
  shifted?: boolean;
}

function RuleRow({ label, barWidth, highlighted = false, shifted = false }: RuleRowProps) {
  return (
    <div
      className={`grid grid-cols-[64px_1fr_48px] items-center gap-2.5 rounded-lg border px-3 py-2.5 transition-transform duration-500 ease-out-soft ${
        highlighted ? "border-accent bg-accent-weak" : "border-line-2 bg-white"
      }`}
      style={{ transform: `translateX(${shifted ? 18 : 0}px)` }}
    >
      <span className={`font-mono text-[11px] ${highlighted ? "text-accent" : "text-fg-3"}`}>
        {label}
      </span>
      <div
        className={`h-2 rounded ${highlighted ? "bg-accent-soft" : "bg-line-2"}`}
        style={{ width: barWidth }}
      />
      <div className={`h-4 rounded ${highlighted ? "bg-accent" : "bg-surface-3"}`} />
    </div>
  );
}

/** Lista de reglas donde "tu regla" se desplaza al activarse. */
export function RulesIllustration({ active }: IllustrationProps) {
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      <RuleRow label="REGLA 01" barWidth="80%" />
      <RuleRow label="TU REGLA" barWidth="60%" highlighted shifted={active} />
      <RuleRow label="REGLA 03" barWidth="65%" />
    </div>
  );
}
