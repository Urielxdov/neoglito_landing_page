interface ProcessStepItemProps {
  index: number;
  title: string;
  description: string;
  active: boolean;
  onSelect: () => void;
}

/** Paso del proceso; se activa al hacer clic o pasar el puntero. */
export function ProcessStepItem({ index, title, description, active, onSelect }: ProcessStepItemProps) {
  return (
    <li className="border-b border-line-2">
      <button
        type="button"
        aria-pressed={active}
        onClick={onSelect}
        onMouseEnter={onSelect}
        className="grid w-full cursor-pointer appearance-none grid-cols-[56px_1fr] gap-4 border-0 bg-transparent py-6 text-left font-[inherit] text-inherit"
      >
        <span className={`pt-1.5 font-mono text-sm ${active ? "text-accent" : "text-fg-3"}`}>
          0{index + 1}
        </span>
        <span className="flex flex-col gap-2">
          <span
            className={`text-[length:clamp(22px,2.2vw,30px)] font-medium tracking-[-.02em] transition-colors duration-[250ms] ${
              active ? "text-fg" : "text-fg-3"
            }`}
          >
            {title}
          </span>
          <span
            className={`overflow-hidden text-base leading-[1.55] text-fg-2 transition-all duration-400 ease-in-out ${
              active ? "max-h-[120px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {description}
          </span>
        </span>
      </button>
    </li>
  );
}
