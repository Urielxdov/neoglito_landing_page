"use client";

import { useCallback, useReducer } from "react";
import { siteConfig } from "../config";
import { createHeroState, heroReducer } from "../state/heroReducer";
import { useInterval } from "./useInterval";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/** Rota las composiciones del hero y permite elegir una manualmente. */
export function useHeroCarousel(total: number) {
  const [state, dispatch] = useReducer(heroReducer, total, createHeroState);
  const reducedMotion = usePrefersReducedMotion();
  const autoplay = siteConfig.heroMotion && !reducedMotion && !state.paused;

  const advance = useCallback(() => dispatch({ type: "hero/advance" }), []);
  const select = useCallback(
    (index: number) => dispatch({ type: "hero/select", index }),
    [],
  );

  useInterval(advance, autoplay ? siteConfig.heroIntervalMs : null);

  return { active: state.active, select };
}
