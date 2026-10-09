"use client";

import { useReducer } from "react";
import { PROCESS_STEPS } from "@/lib/landing/content";
import { initialProcessState, processReducer } from "@/lib/landing/state/processReducer";
import { ProcessPreview } from "./ProcessPreview";
import { ProcessStepItem } from "./ProcessStepItem";

/** Lista de pasos + vista previa del paso activo. */
export function ProcessExplorer() {
  const [{ active }, dispatch] = useReducer(processReducer, initialProcessState);
  const select = (index: number) => dispatch({ type: "process/select", index });

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-12">
      <ol className="m-0 list-none border-t border-line-2 p-0">
        {PROCESS_STEPS.map((step, i) => (
          <ProcessStepItem
            key={step.title}
            index={i}
            title={step.title}
            description={step.description}
            active={i === active}
            onSelect={() => select(i)}
          />
        ))}
      </ol>
      <ProcessPreview step={PROCESS_STEPS[active]} index={active} total={PROCESS_STEPS.length} />
    </div>
  );
}
