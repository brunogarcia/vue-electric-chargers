<template>
  <div v-if="data" class="current-charging--container">
    <img :src="WifiIcon" alt="Wifi" />
    <span class="current-charging--data color-gray font-size-medium">
      {{ data }}%
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import WifiIcon from "@/assets/icons/wifi.svg";
import { ChargerErrorName } from "@/types";

export default defineComponent({
  name: "CurrentCharging",
  props: {
    currentCharging: {
      type: [Number, String] as PropType<number | ChargerErrorName>,
      required: true,
    },
  },
  setup(props) {
    const data = Number.isInteger(props.currentCharging)
      ? props.currentCharging
      : null;

    return {
      data,
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
