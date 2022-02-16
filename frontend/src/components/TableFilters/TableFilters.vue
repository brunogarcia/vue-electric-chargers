<template>
  <div class="table-filters-container">
    <ul>
      <li
        v-for="item in tableFilters()"
        :key="item.id"
        :data-testid="item.id"
        @click="onActiveTableFilter(item.id)"
        :class="isActiveTableFilter(item.id)"
      >
        {{ item.id }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ChargerStatusName } from "@/types";
import useChargers from "@/composables/useChargers";
import tableFilters from "@/components/TableFilters/utils/data";

export default defineComponent({
  name: "TableFilter",

  setup() {
    const { getChargerFilter, setChargerFilter } = useChargers();

    const onActiveTableFilter = (filter: ChargerStatusName) => {
      setChargerFilter(filter);
    };

    const isActiveTableFilter = (filter: ChargerStatusName) => {
      return getChargerFilter.value === filter ? "active" : "";
    };

    return {
      tableFilters,
      getChargerFilter,
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
