<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th
            v-for="(column, index) in header"
            :key="index"
            :width="column.width"
            scope="col"
          >
            <span v-html="column.name"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="charger in chargers"
          :key="charger.id"
          data-testid="table-charger"
        >
          <TableCharger :charger="charger" @view-session="onViewSession" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Charger, EventType } from "@/types";
import tableHeader from "@/components/TableChargers/utils/header";
import TableCharger from "@/components/TableCharger/TableCharger.vue";

export default defineComponent({
  name: "TableChargers",
  components: {
    TableCharger,
  },
  props: {
    chargers: {
      type: Array as PropType<Charger[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const onViewSession = (chargerId: number) => {
      emit(EventType.VIEW_SESSION, chargerId);
    };

    return {
      header: tableHeader(),
      onViewSession,
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
