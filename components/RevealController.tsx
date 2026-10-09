"use client";

import { useRevealOnScroll } from "@/lib/landing/hooks/useRevealOnScroll";

/** Activa las animaciones de entrada de los elementos `data-reveal`. No renderiza nada. */
export function RevealController() {
  useRevealOnScroll();
  return null;
}
