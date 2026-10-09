interface TagProps {
  children: React.ReactNode;
  className?: string;
}

/** Etiqueta con borde para estados y categorías. */
export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`rounded border border-line-2 px-2 py-1 font-mono text-[11px] uppercase text-fg-2 ${className}`}
    >
      {children}
    </span>
  );
}
