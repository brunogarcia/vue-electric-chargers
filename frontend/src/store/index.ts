import { InjectionKey } from "vue";
import {
  createStore,
  Store as VuexStore,
  useStore as baseUseStore,
} from "vuex";

import App from "@/store/app";
import { StateRoot } from "@/store/store.types";

export const key: InjectionKey<VuexStore<StateRoot>> = Symbol();

export const store = createStore<StateRoot>(App);

export function useStore(): VuexStore<StateRoot> {
  return baseUseStore(key);
}
