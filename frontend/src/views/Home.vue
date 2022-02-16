<template>
  <div class="home-container">
    <TableFilters />
    <Table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "@/components/Table/Table.vue";
import TableFilters from "@/components/TableFilters/TableFilters.vue";

export default defineComponent({
  name: "Home",
  components: {
    Table,
    TableFilters,
  },
});
</script>

<style scoped>
.home-container {
  margin-top: 65px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
}
</style>
