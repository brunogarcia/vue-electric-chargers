import { ref, Ref } from "vue";
import { Charger } from "@/types";

interface ComposableCurrentCharger {
  currentCharger: Ref<Charger | undefined>;
  currentChargerId: Ref<number | null>;
  setCurrentCharger: (charger: Charger | undefined) => void;
  setCurrentChargerId: (chargerId: number) => void;
}

export default function useCurrentCharger(): ComposableCurrentCharger {
  const currentCharger = ref<Charger | undefined>(undefined);
  const currentChargerId = ref<number | null>(null);

  const setCurrentCharger = (charger: Charger | undefined): void => {
    currentCharger.value = charger;
  };

  const setCurrentChargerId = (chargerId: number): void => {
    currentChargerId.value = chargerId;
  };

  return {
    currentCharger,
    currentChargerId,
    setCurrentCharger,
    setCurrentChargerId,
  };
}
