import { MutationTree } from "vuex";

import { StateRoot, Charger } from "@/store/store.types";
import { ChargersMutations, MUTATION } from "@/store/chargers/chargers.types";

const mutations: MutationTree<StateRoot> & ChargersMutations = {
  [MUTATION.SAVE_CHARGERS](state: StateRoot, payload: Charger[]) {
    state.chargers = payload;
  },
};

export default mutations;
