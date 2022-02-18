<template>
  <div
    role="status"
    :aria-label="label"
    class="status font-size-xsmall color-dark"
    :class="style"
  >
    {{ getChargeStatusName(chargerStatus) }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ChargerStatus } from "@/types";
import getChargerStatus from "@/utils/getChargerStatus";

export default defineComponent({
  name: "Status",
  props: {
    chargerStatus: {
      type: Number as PropType<ChargerStatus>,
      required: true,
    },
  },
  setup(props) {
    const label = `${props.chargerStatus} charger status`;
    const {
      isChargeStatusCharging,
      isChargeStatusReady,
      isChargeStatusError,
      getChargeStatusName,
    } = getChargerStatus;
    const style = {
      "bg-ready color-ready": isChargeStatusReady(props.chargerStatus),
      "bg-error color-error": isChargeStatusError(props.chargerStatus),
      "bg-charging color-charging": isChargeStatusCharging(props.chargerStatus),
    };

    return {
      getChargeStatusName,
      style,
      label,
    };
  },
});
</script>

<style scoped>
.status {
  display: inline-block;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 12px;
  text-align: center;
  text-transform: uppercase;
  min-width: 67px;
}
</style>
