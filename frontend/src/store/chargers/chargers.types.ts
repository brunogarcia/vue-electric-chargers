import { ActionContext } from "vuex";
import { StateRoot, Charger } from "@/store/store.types";

export enum ACTIONS {
  FETCH_CHARGERS = "FETCH_CHARGERS",
}

export enum MUTATION {
  SAVE_CHARGERS = "SAVE_CHARGERS",
}

export enum GETTERS {
  CHARGERS = "CHARGERS",
}

type AugmentedActionContext = {
  commit<K extends keyof ChargersMutations>(
    key: K,
    payload?: Parameters<ChargersMutations[K]>[1]
  ): ReturnType<ChargersMutations[K]>;
  getters<K extends keyof ChargersGetters>(
    key: K,
    payload: Parameters<ChargersGetters[K]>[1]
  ): ReturnType<ChargersGetters[K]>;
} & Omit<ActionContext<StateRoot, StateRoot>, "commit">;

export interface ShoppingActions {
  [ACTIONS.FETCH_CHARGERS]({ commit }: AugmentedActionContext): Promise<void>;
}

export type ChargersMutations<S = StateRoot> = {
  [MUTATION.SAVE_CHARGERS](state: S, payload: Charger[]): void;
};

export type ChargersGetters = {
  [GETTERS.CHARGERS](state: StateRoot): Charger[];
};
