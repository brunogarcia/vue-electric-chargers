<template>
  <div class="container">
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
<style lang="scss" scoped>
.container {
  padding-top: 20px;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin-right: 30px;
    text-transform: uppercase;
    cursor: pointer;
    color: #8e98a7;
    min-width: 53px;
    height: 36px;
    text-align: center;
    border-bottom: solid 3px #fff;

    &.active {
      color: #000;
      border-bottom: solid 3px #000;
    }
  }
}
</style>
