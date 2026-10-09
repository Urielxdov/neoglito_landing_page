"use client";

import { HERO_COMPOSITIONS } from "@/lib/landing/content";
import { useHeroCarousel } from "@/lib/landing/hooks/useHeroCarousel";
import { PieceComposition } from "../ui/PieceComposition";
import { HeroDots } from "./HeroDots";

/** Tarjeta con la composición activa del hero, su etiqueta y los controles. */
export function HeroShowcase() {
  const { active, select } = useHeroCarousel(HERO_COMPOSITIONS.length);
  const current = HERO_COMPOSITIONS[active];

  return (
    <div data-reveal="2" className="w-full min-w-[260px] max-w-[420px] flex-[0_1_380px]">
      <div className="rounded-card border border-line bg-white p-[22px]">
        <PieceComposition layout={current.layout} />
      </div>
      <div className="mt-3.5 flex items-center justify-between gap-3">
        <span
          aria-live="polite"
          className="font-mono text-xs uppercase tracking-[.08em] text-fg-2"
        >
          → {current.label}
        </span>
        <HeroDots
          labels={HERO_COMPOSITIONS.map((c) => c.label)}
          active={active}
          onSelect={select}
        />
      </div>
    </div>
  );
}
