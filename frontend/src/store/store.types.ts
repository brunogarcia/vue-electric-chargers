import { ActionContext } from "vuex";
import { Charger, ChargerStatusName } from "@/types";

export interface StateRoot {
  loading: boolean;
  chargers: Charger[];
  isModalDisplayed: boolean;
  tableFilter: ChargerStatusName;
}

export enum ACTIONS {
  FETCH_CHARGERS = "FETCH_CHARGERS",
  SET_TABLE_FILTER = "ACTIVE_TABLE_FILTER",
  TOGGLE_MODAL = "TOGGLE_MODAL",
}

export enum MUTATION {
  SAVE_CHARGERS = "SAVE_CHARGERS",
  SAVE_TABLE_FILTER = "SAVE_TABLE_FILTER",
  START_LOADING = "START_LOADING",
  END_LOADING = "END_LOADING",
  TOGGLE_MODAL = "TOGGLE_MODAL",
}

export enum GETTERS {
  LOADING = "LOADING",
  CHARGERS = "CHARGERS",
  TABLE_FILTER = "TABLE_FILTER",
  MODAL_VISIBILITY = "MODAL_VISIBILITY",
}

export type AugmentedActionContext = {
  commit<K extends keyof AppMutations>(
    key: K,
    payload?: Parameters<AppMutations[K]>[1]
  ): ReturnType<AppMutations[K]>;
  getters<K extends keyof AppGetters>(
    key: K,
    payload: Parameters<AppGetters[K]>[1]
  ): ReturnType<AppGetters[K]>;
} & Omit<ActionContext<StateRoot, StateRoot>, "commit">;

export interface AppActions {
  [ACTIONS.FETCH_CHARGERS]({ commit }: AugmentedActionContext): Promise<void>;
  [ACTIONS.SET_TABLE_FILTER](
    { commit }: AugmentedActionContext,
    payload: ChargerStatusName
  ): Promise<void>;
  [ACTIONS.TOGGLE_MODAL]({ commit }: AugmentedActionContext): Promise<void>;
}

export type AppMutations<S = StateRoot> = {
  [MUTATION.SAVE_CHARGERS](state: S, payload: Charger[]): void;
  [MUTATION.SAVE_TABLE_FILTER](state: S, payload: ChargerStatusName): void;
  [MUTATION.START_LOADING](state: S): void;
  [MUTATION.END_LOADING](state: S): void;
  [MUTATION.TOGGLE_MODAL](state: S): void;
};

export type AppGetters = {
  [GETTERS.CHARGERS](state: StateRoot): Charger[];
  [GETTERS.TABLE_FILTER](state: StateRoot): ChargerStatusName;
  [GETTERS.LOADING](state: StateRoot): boolean;
  [GETTERS.MODAL_VISIBILITY](state: StateRoot): boolean;
};
