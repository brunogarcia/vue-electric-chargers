import { ref, Ref } from "vue";

interface ComposableModal {
  isModalDisplayed: Ref<boolean>;
  hideModal: () => void;
  displayModal: () => void;
}

export default function useModal(): ComposableModal {
  const isModalDisplayed = ref(false);

  const hideModal = () => {
    isModalDisplayed.value = false;
  };

  const displayModal = () => {
    isModalDisplayed.value = true;
  };

  return {
    isModalDisplayed,
    hideModal,
    displayModal,
  };
}
