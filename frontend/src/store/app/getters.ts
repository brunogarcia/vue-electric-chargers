import { GetterTree } from "vuex";

import { Charger, ChargerStatusName } from "@/types";
import { StateRoot } from "@/store/store.types";
import { AppGetters, GETTERS } from "@/store/store.types";

const getters: GetterTree<StateRoot, StateRoot> & AppGetters = {
  /**
   * Chargers
   *
   * @param {StateRoot} state - The root state
   * @returns {Charger[]}
   */
  [GETTERS.CHARGERS]: (state: StateRoot): Charger[] => state.chargers,

  /**
   * Table filter
   *
   * @param {StateRoot} state - The root state
   * @returns {ChargerStatusName}
   */
  [GETTERS.TABLE_FILTER]: (state: StateRoot): ChargerStatusName =>
    state.tableFilter,

  /**
   * Loading
   *
   * @param {StateRoot} state - The root state
   */
  [GETTERS.LOADING]: (state: StateRoot): boolean => state.loading,
};

export default getters;
