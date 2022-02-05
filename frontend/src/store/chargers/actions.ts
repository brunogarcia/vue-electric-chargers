import { ActionContext, ActionTree } from "vuex";
import http from "@/http";
import { StateRoot } from "@/store/store.types";
import {
  ACTIONS,
  MUTATION,
  ShoppingActions,
} from "@/store/chargers/chargers.types";

const actions: ActionTree<StateRoot, StateRoot> & ShoppingActions = {
  /**
   * Fetch chargers
   *
   * @param {ActionContext} context - Vuex Action Context
   */
  [ACTIONS.FETCH_CHARGERS]: async ({
    commit,
  }: ActionContext<StateRoot, StateRoot>) => {
    try {
      const data = await http.fetchChargers();
      commit(MUTATION.SAVE_CHARGERS, data);
    } catch (error) {
      // TODO: send to error monitoring service (eg: Sentry)
      console.log(error);
      throw new Error(
        "Sorry, there was an issue when we have tried to get the chargers"
      );
    }
  },
};

export default actions;
