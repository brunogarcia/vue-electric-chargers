<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th
            v-for="(item, index) in tableHeader()"
            :key="index"
            :width="item.width"
            scope="col"
          >
            <span v-html="item.name"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in chargers" :key="item.id" data-testid="table-charger">
          <TableCharger :charger="item" @view-session="onViewSession" />
        </tr>
      </tbody>
    </table>
  </div>
  <SessionCharger
    v-if="isModalDisplayed"
    :chargerId="currentSessionChargerId"
    @hide-modal="toggleModal"
  />
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import useModal from "@/composables/useModal";
import useChargers from "@/composables/useChargers";
import tableHeader from "@/components/Table/utils/header";
import TableCharger from "@/components/TableCharger/TableCharger.vue";
import SessionCharger from "@/components/SessionCharger/SessionCharger.vue";

export default defineComponent({
  name: "Table",
  components: {
    TableCharger,
    SessionCharger,
  },
  setup() {
    const currentSessionChargerId = ref<number | null>(null);
    const { chargers } = useChargers();
    const { isModalDisplayed, toggleModal } = useModal();

    const onViewSession = (chargerId: number) => {
      currentSessionChargerId.value = chargerId;
      toggleModal();
    };

    return {
      chargers,
      toggleModal,
      tableHeader,
      onViewSession,
      isModalDisplayed,
      currentSessionChargerId,
    };
  },
});
</script>
<style lang="scss">
@import "@/assets/styles/mixins";

@include for-desktop-down {
  .table-container table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .table-container table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
}

.table-container table {
  width: 100%;
  color: var(--color-gray);
  background-color: var(--color-light);
  border-collapse: collapse;
  border-top: 1px solid var(--color-gray-light);
  overflow-x: auto;
}
.table-container table thead th {
  font-weight: 500;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 10px;
}

.table-container table tbody tr:nth-child(odd) {
  background: var(--color-gray-light);
}
</style>
