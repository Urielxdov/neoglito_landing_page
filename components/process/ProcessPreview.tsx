import type { ProcessStep } from "@/lib/landing/types";
import { PieceComposition } from "../ui/PieceComposition";

interface ProcessPreviewProps {
  step: ProcessStep;
  index: number;
  total: number;
}

/** Composición del paso activo con barra de progreso y leyenda. */
export function ProcessPreview({ step, index, total }: ProcessPreviewProps) {
  const progress = ((index + 1) / total) * 100;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="w-full max-w-[460px] justify-self-center">
      <div className="rounded-card border border-line bg-white p-7">
        <PieceComposition layout={step.layout} wireframe={step.wireframe} />
      </div>
      <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-line">
        <div
          className="h-full bg-accent transition-[width] duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2.5 font-mono text-xs uppercase tracking-[.08em] text-fg-2">
        {pad(index + 1)} / {pad(total)} · {step.caption}
      </div>
    </div>
  );
}
