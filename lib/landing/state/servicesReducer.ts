/** Servicio sobre el que está el puntero (null = ninguno). */
export interface ServicesState {
  hovered: number | null;
}

export type ServicesAction =
  | { type: "services/hover"; index: number }
  | { type: "services/leave" };

export const initialServicesState: ServicesState = { hovered: null };

export function servicesReducer(
  state: ServicesState,
  action: ServicesAction,
): ServicesState {
  switch (action.type) {
    case "services/hover":
      return state.hovered === action.index
        ? state
        : { hovered: action.index };
    case "services/leave":
      return state.hovered === null ? state : { hovered: null };
  }
}
