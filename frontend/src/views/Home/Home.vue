<template>
  <div class="home-container">
    <ModalCharger
      v-if="isModalDisplayed"
      :charger="currentCharger"
      @hide-modal="toggleModal"
    />

    <TableFilters
      :charger-filter="chargerFilter"
      @set-charger-filter="setChargerFilter"
    />

    <TableChargers :chargers="chargers" @view-session="onViewSession" />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

import useModal from "@/composables/useModal";
import useChargers from "@/composables/useChargers";
import useCurrentCharger from "@/composables/useCurrentCharger";

import ModalCharger from "@/components/ModalCharger/ModalCharger.vue";
import TableFilters from "@/components/TableFilters/TableFilters.vue";
import TableChargers from "@/components/TableChargers/TableChargers.vue";

export default defineComponent({
  name: "Home",
  components: {
    ModalCharger,
    TableFilters,
    TableChargers,
  },
  setup() {
    const { isModalDisplayed, toggleModal } = useModal();
    const { chargers, findCharger, chargerFilter, setChargerFilter } =
      useChargers();
    const {
      currentCharger,
      currentChargerId,
      setCurrentCharger,
      setCurrentChargerId,
    } = useCurrentCharger();

    const onViewSession = (chargerId: number) => {
      setCurrentChargerId(chargerId);
    };

    const displayModalCharger = (id: number | null) => {
      if (id === null) {
        setCurrentCharger(undefined);
        return;
      }

      setCurrentCharger(findCharger(id));

      if (currentCharger.value) {
        toggleModal();
      }
    };

    watch(
      () => currentChargerId.value,
      (data) => displayModalCharger(data)
    );

    return {
      chargers,
      chargerFilter,
      toggleModal,
      onViewSession,
      isModalDisplayed,
      setChargerFilter,
      currentCharger,
    };
  },
});
</script>

<style scoped>
.home-container {
  margin-top: 65px;
  background-color: var(--color-light);
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
}
</style>
