<template>
  <div class="home">
    <ul>
      <li v-for="item in chargers" :key="item.id">
        {{ item.name }}
        <Connectivity :connectivityType="item.connectivityType" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Connectivity from "@/components/Connectivity/Connectivity.vue";
import useChargers from "@/composables/useChargers";

export default defineComponent({
  name: "Home",
  components: {
    Connectivity,
  },
  setup() {
    const { chargers } = useChargers();

    return {
      chargers,
    };
  },
});
</script>
