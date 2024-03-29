import { createStore } from "vuex";
import { StateRoot } from "@/store/store.types";
import mockStore from "../mocks/mockStore";

const store = createStore<StateRoot>(mockStore);

export default store;
