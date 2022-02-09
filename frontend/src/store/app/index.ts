import { StoreOptions } from "vuex";

import { StateRoot } from "@/store/store.types";

import initialState from "@/store/app/initialState";
import actions from "@/store/app/actions";
import getters from "@/store/app/getters";
import mutations from "@/store/app/mutations";

const App: StoreOptions<StateRoot> = {
  strict: true,
  state: initialState,
  actions,
  mutations,
  getters,
};

export default App;
