import { StoreOptions } from "vuex";

import { StateRoot } from "@/store/store.types";

import initialState from "@/store/chargers/initialState";
import actions from "@/store/chargers/actions";
import getters from "@/store/chargers/getters";
import mutations from "@/store/chargers/mutations";

const Chargers: StoreOptions<StateRoot> = {
  strict: true,
  state: initialState,
  actions,
  mutations,
  getters,
};

export default Chargers;
