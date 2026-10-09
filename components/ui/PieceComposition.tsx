import type { CSSProperties } from "react";
import type { PieceLayout } from "@/lib/landing/types";

const FILLS: readonly CSSProperties[] = [
  { background: "var(--color-navy)" },
  { background: "var(--color-surface-3)", boxShadow: "inset 0 0 0 1px var(--color-line-2)" },
  { background: "#fff", boxShadow: "inset 0 0 0 1px var(--color-line-2)" },
  { background: "var(--color-accent)" },
  { background: "var(--color-fg-2)" },
  { background: "var(--color-accent-weak)", boxShadow: "inset 0 0 0 1px var(--color-accent-soft)" },
];

const EASE = "cubic-bezier(.65,0,.25,1)";
const TRANSITION = `left .9s ${EASE}, top .9s ${EASE}, width .9s ${EASE}, height .9s ${EASE}, background .5s, box-shadow .5s`;

function wireframeFill(index: number): CSSProperties {
  return {
    background: "transparent",
    boxShadow: `inset 0 0 0 1.5px ${index === 3 ? "var(--color-accent)" : "var(--color-line-strong)"}`,
  };
}

interface PieceCompositionProps {
  layout: PieceLayout;
  wireframe?: boolean;
}

/** Bloques que se recolocan con transición al cambiar de layout. */
export function PieceComposition({ layout, wireframe = false }: PieceCompositionProps) {
  return (
    <div aria-hidden="true" className="relative aspect-square w-full">
      {layout.map(([left, top, width, height], i) => (
        <div
          key={i}
          className="absolute rounded-md"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${width}%`,
            height: `${height}%`,
            transition: TRANSITION,
            transitionDelay: `${i * 45}ms`,
            ...(wireframe ? wireframeFill(i) : FILLS[i]),
          }}
        />
      ))}
    </div>
  );
}
