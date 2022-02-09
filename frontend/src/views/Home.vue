<template>
  <div class="table-wrapper">
    <TableFilter />
    <Table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "@/components/Table/Table.vue";
import TableFilter from "@/components/TableFilter/TableFilter.vue";

export default defineComponent({
  name: "Home",
  components: {
    Table,
    TableFilter,
  },
});
</script>

<style lang="scss" scoped>
.table-wrapper {
  margin-top: 65px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
}
</style>
