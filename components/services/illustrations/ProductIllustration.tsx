import type { IllustrationProps } from "./types";

const MOTION = "transition-all duration-500 ease-out-soft";

/** Ventana de escritorio + móvil que se acercan al activarse. */
export function ProductIllustration({ active }: IllustrationProps) {
  return (
    <div className="relative h-full">
      <div
        className={`absolute left-0 h-[150px] w-[72%] overflow-hidden rounded-[10px] border border-line-2 bg-white ${MOTION}`}
        style={{ top: active ? 0 : 20 }}
      >
        <div className="h-[22px] border-b border-line bg-surface-2" />
        <div className="grid grid-cols-[30%_1fr] gap-2 p-2.5">
          <div className="h-24 rounded bg-surface-3" />
          <div className="flex flex-col gap-1.5">
            <div className="h-10 rounded bg-accent-weak" />
            <div className="h-2 w-[70%] rounded bg-line-2" />
            <div className="h-2 w-1/2 rounded bg-line" />
          </div>
        </div>
      </div>
      <div
        className={`absolute top-11 h-[150px] w-[30%] rounded-[14px] bg-navy p-2 ${MOTION}`}
        style={{ right: active ? -8 : "14%" }}
      >
        <div className="flex h-full flex-col gap-1.5 rounded-lg bg-white p-2">
          <div className="h-[30px] rounded bg-surface-3" />
          <div className="h-2 rounded bg-line-2" />
          <div className="h-2 w-[60%] rounded bg-line" />
          <div className="mt-auto h-5 rounded bg-accent" />
        </div>
      </div>
    </div>
  );
}
