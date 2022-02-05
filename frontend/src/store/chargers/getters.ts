import { GetterTree } from "vuex";

import { StateRoot, Charger } from "@/store/store.types";
import { ChargersGetters, GETTERS } from "@/store/chargers/chargers.types";

const getters: GetterTree<StateRoot, StateRoot> & ChargersGetters = {
  /**
   * Chargers
   *
   * @param {StateRoot} state - The root state
   * @returns {Charger[]}
   */
  [GETTERS.CHARGERS]: (state: StateRoot): Charger[] => state.chargers,
};

export default getters;
