import { ComputedRef, computed } from "vue";
import { useStore } from "@/store";
import { ACTIONS, GETTERS } from "@/store/store.types";
import { Charger, ChargerStatusName } from "@/types";
import getChargerStatus from "@/utils/getChargerStatus";

const { isSameChargerStatus } = getChargerStatus;

interface ComposableChargers {
  chargers: ComputedRef<Charger[]>;
  chargerFilter: ComputedRef<ChargerStatusName>;
  setChargerFilter: (filter: ChargerStatusName) => void;
  findCharger: (chargerId: number) => Charger | undefined;
}

export default function useChargers(): ComposableChargers {
  const store = useStore();

  const chargerFilter = computed(
    (): ChargerStatusName => store.getters[GETTERS.TABLE_FILTER]
  );

  const setChargerFilter = (filter: ChargerStatusName): Promise<void> =>
    store.dispatch(ACTIONS.SET_TABLE_FILTER, filter);

  const chargersByFilter = (): Charger[] =>
    store.getters[GETTERS.CHARGERS].filter((charger: Charger) =>
      isSameChargerStatus(charger.status, chargerFilter.value)
    );

  const chargers = computed((): Charger[] => {
    const hasFilter = chargerFilter.value !== ChargerStatusName.All;

    if (hasFilter) {
      return chargersByFilter();
    }

    return store.getters[GETTERS.CHARGERS];
  });

  const findCharger = (chargerId: number): Charger | undefined =>
    chargers.value.find((charger: Charger) => charger.id === chargerId);

  return {
    chargers,
    findCharger,
    chargerFilter,
    setChargerFilter,
  };
}
