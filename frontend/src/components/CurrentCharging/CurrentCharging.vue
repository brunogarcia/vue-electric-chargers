<template>
  <div class="current-charging--container">
    <img :src="WifiIcon" alt="Wifi" />
    <span class="current-charging--data color-gray font-size-medium">
      {{ currentCharging }}%
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WifiIcon from "@/assets/icons/wifi.svg";

export default defineComponent({
  name: "CurrentCharging",
  props: {
    currentCharging: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {
      WifiIcon,
    };
  },
});
</script>

<style scoped>
.current-charging--data {
  margin-left: 5px;
}
</style>
