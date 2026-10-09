/** Rectángulo en porcentajes: [left, top, width, height]. */
export type PieceRect = readonly [number, number, number, number];

export type PieceLayout = readonly PieceRect[];

export interface HeroComposition {
  layout: PieceLayout;
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  layout: PieceLayout;
  /** Muestra las piezas como wireframe (solo contorno). */
  wireframe?: boolean;
  caption: string;
}

export interface Project {
  num: string;
  status: string;
  title: string;
  description: string;
  tags: readonly string[];
  placeholder: string;
  image?: string;
  /** Color de fondo del contenedor de imagen (clase de Tailwind). */
  mediaClassName: string;
  /** Desfase vertical en layout escalonado (clase de Tailwind). */
  staggerClassName: string;
}

export type ProjectLayout = "escalonado" | "alineado";

export interface NavLink {
  href: string;
  label: string;
}
