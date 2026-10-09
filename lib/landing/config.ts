import type { ProjectLayout } from "./types";

/** Equivalente a las props editables del diseño (contactEmail, heroMotion, projectLayout). */
export const siteConfig = {
  contactEmail: "hola@neoglito.com",
  heroMotion: true,
  heroIntervalMs: 3000,
  projectLayout: "escalonado" as ProjectLayout,
} as const;
