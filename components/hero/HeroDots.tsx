interface HeroDotsProps {
  labels: readonly string[];
  active: number;
  onSelect: (index: number) => void;
}

/** Indicadores que permiten elegir una composición del hero. */
export function HeroDots({ labels, active, onSelect }: HeroDotsProps) {
  return (
    <div role="group" aria-label="Cambiar composición" className="flex gap-1.5">
      {labels.map((label, i) => {
        const on = i === active;
        return (
          <button
            key={label}
            type="button"
            aria-label={label}
            aria-pressed={on}
            onClick={() => onSelect(i)}
            className={`h-2 cursor-pointer appearance-none rounded-full border-0 p-0 transition-all duration-300 ${
              on ? "w-6 bg-accent" : "w-2 bg-line-strong"
            }`}
          />
        );
      })}
    </div>
  );
}
