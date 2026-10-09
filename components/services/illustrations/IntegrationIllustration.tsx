import type { IllustrationProps } from "./types";

const NODE =
  "absolute top-[calc(50%-32px)] grid size-16 place-items-center rounded-[10px] border border-line-2 bg-white font-mono text-[11px] text-fg-2";

/** ERP → API → CRM con un paquete de datos que viaja al activarse. */
export function IntegrationIllustration({ active }: IllustrationProps) {
  return (
    <div className="relative h-full">
      <div className="absolute inset-x-[12%] top-1/2 h-0.5 bg-line-2" />
      <div
        className="absolute top-[calc(50%-5px)] size-2.5 rounded-full bg-accent transition-[left] duration-[1100ms] ease-[cubic-bezier(.65,0,.35,1)]"
        style={{ left: active ? "calc(88% - 10px)" : "12%" }}
      />
      <div className={`${NODE} left-0`}>ERP</div>
      <div className="absolute top-[calc(50%-36px)] left-[calc(50%-36px)] grid size-[72px] place-items-center rounded-xl bg-navy font-mono text-[11px] text-white">
        API
      </div>
      <div className={`${NODE} right-0`}>CRM</div>
    </div>
  );
}
