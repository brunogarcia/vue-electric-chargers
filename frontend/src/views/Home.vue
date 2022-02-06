<template>
  <div class="home">
    <Table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "@/components/Table/Table.vue";

export default defineComponent({
  name: "Home",
  components: {
    Table,
  },
});
</script>
