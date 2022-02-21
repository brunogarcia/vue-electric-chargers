<template>
  <div class="table-filters-container">
    <ul>
      <li
        v-for="filter in filters"
        :key="filter.id"
        :data-testid="filter.id"
        @click="onActiveTableFilter(filter.id)"
        :class="isActiveTableFilter(filter.id)"
      >
        {{ filter.id }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import tableFilters from "@/components/TableFilters/utils/data";
import { ChargerStatusName, ChargerStyle, EventType } from "@/types";

export default defineComponent({
  name: "TableFilter",
  props: {
    chargerFilter: {
      type: String as PropType<ChargerStatusName>,
      required: true,
    },
  },

  setup(props, { emit }) {
    const isActiveTableFilter = (filter: ChargerStatusName) => {
      return props.chargerFilter === filter ? ChargerStyle.Active : "";
    };

    const onActiveTableFilter = (filter: ChargerStatusName) => {
      emit(EventType.SET_CHARGER_FILTER, filter);
    };

    return {
      filters: tableFilters(),
      isActiveTableFilter,
      onActiveTableFilter,
    };
  },
});
</script>
<style scoped>
.table-filters-container {
  padding-top: 20px;
}
.table-filters-container ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-light);
  border-radius: 5px;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.table-filters-container li {
  margin-right: 30px;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--color-gray);
  min-width: 53px;
  height: 36px;
  text-align: center;
  border-bottom: solid 3px var(--color-light);
}
.table-filters-container li.active {
  color: var(--color-dark);
  border-bottom: solid 3px var(--color-dark);
}
</style>
