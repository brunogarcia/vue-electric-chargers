import { MutationTree } from "vuex";

import { Charger, ChargerStatusName } from "@/types";
import { StateRoot } from "@/store/store.types";
import { AppMutations, MUTATION } from "@/store/store.types";

const mutations: MutationTree<StateRoot> & AppMutations = {
  [MUTATION.SAVE_CHARGERS](state: StateRoot, payload: Charger[]) {
    state.chargers = payload;
  },
  [MUTATION.SAVE_TABLE_FILTER](state: StateRoot, payload: ChargerStatusName) {
    state.tableFilter = payload;
  },
  [MUTATION.START_LOADING](state: StateRoot) {
    state.loading = true;
  },
  [MUTATION.END_LOADING](state: StateRoot) {
    state.loading = false;
  },
};

export default mutations;
