import type {
  HeroComposition,
  NavLink,
  PieceLayout,
  ProcessStep,
  Project,
} from "./types";

export const LAYOUT_PRODUCT: PieceLayout = [
  [0, 0, 100, 12],
  [0, 16, 28, 84],
  [32, 16, 68, 44],
  [32, 64, 32, 14],
  [68, 64, 32, 36],
  [32, 82, 32, 18],
];

export const LAYOUT_SYSTEM: PieceLayout = [
  [0, 0, 100, 14],
  [0, 20, 100, 14],
  [0, 40, 62, 14],
  [66, 40, 34, 14],
  [0, 60, 48, 40],
  [52, 60, 48, 40],
];

export const LAYOUT_INTEGRATION: PieceLayout = [
  [0, 0, 28, 28],
  [72, 0, 28, 28],
  [0, 72, 28, 28],
  [35, 35, 30, 30],
  [72, 72, 28, 28],
  [14, 47, 72, 6],
];

export const LAYOUT_SCATTER: PieceLayout = [
  [6, 8, 20, 20],
  [62, 4, 14, 14],
  [28, 42, 16, 16],
  [70, 50, 20, 20],
  [10, 72, 13, 13],
  [46, 78, 15, 15],
];

export const LAYOUT_REFINE: PieceLayout = [
  [0, 0, 100, 12],
  [0, 16, 28, 84],
  [32, 16, 68, 44],
  [32, 64, 68, 14],
  [32, 82, 32, 18],
  [68, 82, 32, 18],
];

export const NAV_LINKS: readonly NavLink[] = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
];

export const HERO_COMPOSITIONS: readonly HeroComposition[] = [
  { layout: LAYOUT_PRODUCT, label: "Producto digital" },
  { layout: LAYOUT_SYSTEM, label: "Sistema a la medida" },
  { layout: LAYOUT_INTEGRATION, label: "Integración" },
];

export const BAND_FACTS = [
  { label: "Construimos", value: "Web, SaaS, sistemas, APIs" },
  { label: "Enfoque", value: "Del problema al producto" },
  { label: "Producto propio", value: "Neoglito Platform · en construcción" },
] as const;

export const SERVICES = [
  {
    title: "Productos digitales",
    description:
      "Aplicaciones web, plataformas y productos SaaS: desde la primera versión hasta un producto que crece con sus usuarios.",
  },
  {
    title: "Software a la medida",
    description:
      "Sistemas adaptados a los procesos y reglas de cada negocio, en lugar de adaptar el negocio a una herramienta genérica.",
  },
  {
    title: "Automatización e integración",
    description:
      "APIs, conexión entre sistemas y eliminación de tareas repetitivas para que la información fluya sin intervención manual.",
  },
] as const;

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: "Entendemos el problema",
    description:
      "Escuchamos, preguntamos y ordenamos necesidades, reglas y restricciones antes de escribir una línea de código.",
    layout: LAYOUT_SCATTER,
    caption: "Piezas sueltas · contexto",
  },
  {
    title: "Diseñamos la solución",
    description:
      "Definimos la estructura, los flujos y la interfaz adecuada para ese problema concreto.",
    layout: LAYOUT_PRODUCT,
    wireframe: true,
    caption: "Estructura · diseño",
  },
  {
    title: "Desarrollamos e integramos",
    description:
      "Construimos el software y lo conectamos con los sistemas que ya usas.",
    layout: LAYOUT_PRODUCT,
    caption: "Construcción · integración",
  },
  {
    title: "Probamos, desplegamos y mejoramos",
    description:
      "Validamos, lanzamos y seguimos ajustando el producto con uso real.",
    layout: LAYOUT_REFINE,
    caption: "En producción · mejora continua",
  },
];

export const PROJECTS: readonly Project[] = [
  {
    num: "P—01",
    status: "Producto propio · en construcción",
    title: "Neoglito Platform",
    description:
      "Plataforma para desplegar, descubrir y analizar aplicaciones basadas en contenedores.",
    tags: ["Despliegue", "Análisis", "Contenedores"],
    placeholder: "Captura de Neoglito Platform",
    mediaClassName: "bg-navy text-navy-muted",
    staggerClassName: "lg:mt-0",
  },
  {
    num: "P—02",
    status: "Ejemplo",
    title: "Aplicaciones para negocios",
    description:
      "Soluciones digitales enfocadas en las necesidades concretas de un sector.",
    tags: ["Web", "Móvil", "Operación"],
    placeholder: "Imagen de proyecto de negocio",
    mediaClassName: "bg-surface-3 text-fg-3",
    staggerClassName: "lg:mt-24",
  },
  {
    num: "P—03",
    status: "Ejemplo",
    title: "Sistemas e integraciones",
    description: "Herramientas empresariales y automatizaciones personalizadas.",
    tags: ["APIs", "Automatización", "ERP"],
    placeholder: "Imagen de sistema o integración",
    mediaClassName: "bg-accent-weak text-fg-3",
    staggerClassName: "lg:mt-48",
  },
];
