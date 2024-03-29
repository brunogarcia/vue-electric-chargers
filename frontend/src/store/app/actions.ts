import { ActionTree } from "vuex";
import http from "@/http";
import { ChargerStatusName } from "@/types";
import {
  ACTIONS,
  MUTATION,
  AppActions,
  StateRoot,
  AugmentedActionContext,
} from "@/store/store.types";

const actions: ActionTree<StateRoot, StateRoot> & AppActions = {
  /**
   * Fetch chargers
   *
   * @param {ActionContext} context - Vuex Action Context
   */
  [ACTIONS.FETCH_CHARGERS]: async ({ commit }: AugmentedActionContext) => {
    try {
      commit(MUTATION.START_LOADING);
      const data = await http.fetchChargers();
      commit(MUTATION.SAVE_CHARGERS, data);
      commit(MUTATION.END_LOADING);
    } catch (error) {
      throw new Error(
        "Sorry, there was an issue when we have tried to get the chargers"
      );
    }
  },

  /**
   * Set table filter
   *
   * @param {ActionContext} context - Vuex Action Context
   * @param {ChargerStatusName} payload - Table filter
   */
  [ACTIONS.SET_TABLE_FILTER]: async (
    { commit }: AugmentedActionContext,
    payload: ChargerStatusName
  ) => {
    try {
      commit(MUTATION.START_LOADING);
      commit(MUTATION.SAVE_TABLE_FILTER, payload);
      commit(MUTATION.END_LOADING);
    } catch (error) {
      throw new Error(
        "Sorry, there was an issue when we have tried to set the table filter"
      );
    }
  },

  /**
   * Toggle modal
   *
   * @param {ActionContext} context - Vuex Action Context
   */
  [ACTIONS.TOGGLE_MODAL]: async ({ commit }: AugmentedActionContext) => {
    try {
      commit(MUTATION.TOGGLE_MODAL);
    } catch (error) {
      throw new Error(
        "Sorry, there was an issue when we have tried to update the modal visibility"
      );
    }
  },
};

export default actions;
