import Image from "next/image";

interface ProjectMediaProps {
  image?: string;
  alt: string;
  className?: string;
}

/** Imagen del proyecto, o un placeholder rotulado mientras no exista. */
export function ProjectMedia({ image, alt, className = "" }: ProjectMediaProps) {
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-card transition-transform duration-500 ease-out-soft hover:-translate-y-1.5 ${className}`}
    >
      {image ? (
        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      ) : (
        <>
          <div className="grid h-full place-items-center p-6 text-center text-sm">{alt}</div>
          <span className="pointer-events-none absolute top-3.5 left-3.5 rounded bg-white/92 px-2 py-1 font-mono text-[10px] uppercase tracking-[.12em] text-fg-2">
            Placeholder · sustituir
          </span>
        </>
      )}
    </div>
  );
}
