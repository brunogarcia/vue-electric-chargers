<template>
  <div class="home">
    <ul>
      <li v-for="item in chargers" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useChargers from "@/composables/useChargers";

export default defineComponent({
  name: "Home",
  setup() {
    const { chargers } = useChargers();

    return {
      chargers,
    };
  },
});
</script>
