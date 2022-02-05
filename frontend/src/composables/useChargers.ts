import { ComputedRef, computed } from "vue";
import { useStore } from "@/store";
import { Charger } from "@/store/store.types";
import { GETTERS } from "@/store/chargers/chargers.types";

interface ComposableChargers {
  chargers: ComputedRef<Charger[]>;
}

export default function useChargers(): ComposableChargers {
  const store = useStore();

  const chargers = computed((): Charger[] => store.getters[GETTERS.CHARGERS]);

  return {
    chargers,
  };
}
