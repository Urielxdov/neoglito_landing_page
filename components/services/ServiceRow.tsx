interface ServiceRowProps {
  index: number;
  title: string;
  description: string;
  onHover: () => void;
  onLeave: () => void;
  children: React.ReactNode;
}

/** Fila de un servicio: número, título, descripción e ilustración. */
export function ServiceRow({ index, title, description, onHover, onLeave, children }: ServiceRowProps) {
  return (
    <article
      data-reveal="1"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-x-12 gap-y-7 border-b border-line-2 py-10"
    >
      <div className="flex items-baseline gap-5">
        <span className="font-mono text-[13px] text-accent">/{index + 1}</span>
        <h3 className="m-0 text-[length:clamp(26px,2.6vw,36px)] font-medium tracking-[-.025em]">
          {title}
        </h3>
      </div>
      <p className="m-0 max-w-[440px] text-[17px] leading-[1.6] text-pretty text-fg-2">
        {description}
      </p>
      <div aria-hidden="true" className="h-[200px] w-full max-w-[380px] justify-self-end">
        {children}
      </div>
    </article>
  );
}
