"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]";
const FALLBACK_MS = 6000;

/**
 * Anima la entrada de los elementos con `data-reveal` que están bajo el pliegue
 * cuando entran en el viewport. El valor del atributo es el multiplicador de retardo.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    if (document.visibilityState !== "visible") return;

    const animations = new Map<Element, Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          animations.get(entry.target)?.play();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
      if (!el.animate || el.getBoundingClientRect().top < window.innerHeight) return;
      const delay = (Number.parseInt(el.dataset.reveal ?? "1", 10) || 1) * 80;
      const animation = el.animate(
        [
          { opacity: 0, transform: "translateY(24px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 800, delay, easing: "cubic-bezier(.2,.8,.25,1)", fill: "backwards" },
      );
      animation.pause();
      animations.set(el, animation);
      observer.observe(el);
    });

    const finishAll = () => animations.forEach((a) => a.finish());
    const fallback = setTimeout(finishAll, FALLBACK_MS);
    const onVisibility = () => {
      if (document.visibilityState !== "visible") finishAll();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      clearTimeout(fallback);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
      finishAll();
    };
  }, []);
}
