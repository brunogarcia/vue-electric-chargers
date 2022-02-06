<template>
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Device</th>
        <th>Connectivity</th>
        <th>Status</th>
        <th>Charging Time</th>
        <th>Energy Supplied</th>
        <th>Charging Current</th>
        <th>Manufactured Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="charger in chargers" :key="charger.id">
        <TableCharger :charger="charger" />
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableCharger from "@/components/Table/TableCharger.vue";
import useChargers from "@/composables/useChargers";

export default defineComponent({
  name: "Table",
  components: {
    TableCharger,
  },
  setup() {
    const { chargers } = useChargers();

    return {
      chargers,
    };
  },
});
</script>

<style scoped>
.table {
  width: 100%;
}
</style>
