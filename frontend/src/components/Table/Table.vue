<template>
  <table class="container">
    <thead>
      <tr>
        <th
          v-for="(item, index) in tableHeader()"
          :key="index"
          :width="item.width"
        >
          <span v-html="item.name"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in chargers" :key="item.id" data-testid="table-charger">
        <TableCharger :charger="item" />
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useChargers from "@/composables/useChargers";
import tableHeader from "@/components/Table/utils/header";
import TableCharger from "@/components/TableCharger/TableCharger.vue";

export default defineComponent({
  name: "Table",
  components: {
    TableCharger,
  },
  setup() {
    const { chargers } = useChargers();

    return {
      chargers,
      tableHeader,
    };
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  color: #8e98a7;
  background-color: #fff;
  border-collapse: collapse;
  border-top: 1px solid #ededed;
}
.container table thead th {
  font-weight: 500;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 10px;
}

.container table tbody tr:nth-child(odd) {
  background: #fbfbfb;
}
</style>
