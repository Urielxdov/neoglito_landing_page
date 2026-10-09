/** Paso activo de la sección "Cómo trabajamos". */
export interface ProcessState {
  active: number;
}

export type ProcessAction = { type: "process/select"; index: number };

export const initialProcessState: ProcessState = { active: 0 };

export function processReducer(
  state: ProcessState,
  action: ProcessAction,
): ProcessState {
  switch (action.type) {
    case "process/select":
      return state.active === action.index ? state : { active: action.index };
  }
}
