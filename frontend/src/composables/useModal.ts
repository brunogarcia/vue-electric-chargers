import { computed, Ref } from "vue";
import { useStore } from "@/store";
import { ACTIONS, GETTERS } from "@/store/store.types";

interface ComposableModal {
  toggleModal: () => void;
  isModalDisplayed: Ref<boolean>;
}

export default function useModal(): ComposableModal {
  const store = useStore();

  const toggleModal = (): Promise<void> => store.dispatch(ACTIONS.TOGGLE_MODAL);

  const isModalDisplayed = computed(
    (): boolean => store.getters[GETTERS.MODAL_VISIBILITY]
  );

  return {
    toggleModal,
    isModalDisplayed,
  };
}
