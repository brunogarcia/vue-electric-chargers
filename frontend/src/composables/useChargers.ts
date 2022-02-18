import { ComputedRef, computed } from "vue";
import { useStore } from "@/store";
import { ACTIONS, GETTERS } from "@/store/store.types";
import { Charger, ChargerStatusName } from "@/types";
import getChargerStatus from "@/utils/getChargerStatus";

const { isSameChargerStatus } = getChargerStatus;

interface ComposableChargers {
  chargers: ComputedRef<Charger[]>;
  getChargerFilter: ComputedRef<ChargerStatusName>;
  setChargerFilter: (filter: ChargerStatusName) => void;
}

export default function useChargers(): ComposableChargers {
  const store = useStore();

  const getChargerFilter = computed(
    (): ChargerStatusName => store.getters[GETTERS.TABLE_FILTER]
  );

  const setChargerFilter = (filter: ChargerStatusName): Promise<void> =>
    store.dispatch(ACTIONS.SET_TABLE_FILTER, filter);

  const chargersByFilter = (): Charger[] =>
    store.getters[GETTERS.CHARGERS].filter((charger: Charger) =>
      isSameChargerStatus(charger.status, getChargerFilter.value)
    );

  const chargers = computed((): Charger[] => {
    const hasFilter = getChargerFilter.value !== ChargerStatusName.All;

    if (hasFilter) {
      return chargersByFilter();
    }

    return store.getters[GETTERS.CHARGERS];
  });

  return {
    chargers,
    getChargerFilter,
    setChargerFilter,
  };
}
