/** Estado del carrusel de composiciones del hero. */
export interface HeroState {
  active: number;
  total: number;
  /** Se pausa la rotación automática cuando el usuario elige una composición. */
  paused: boolean;
}

export type HeroAction =
  | { type: "hero/advance" }
  | { type: "hero/select"; index: number };

export const createHeroState = (total: number): HeroState => ({
  active: 0,
  total,
  paused: false,
});

export function heroReducer(state: HeroState, action: HeroAction): HeroState {
  switch (action.type) {
    case "hero/advance":
      if (state.paused) return state;
      return { ...state, active: (state.active + 1) % state.total };
    case "hero/select":
      return { ...state, active: action.index, paused: true };
  }
}
