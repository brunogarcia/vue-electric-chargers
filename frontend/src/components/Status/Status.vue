<template>
  <div role="status" :aria-label="label" class="status" :class="style">
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
      "status--charging": isChargeStatusCharging(props.chargerStatus),
      "status--ready": isChargeStatusReady(props.chargerStatus),
      "status--error": isChargeStatusError(props.chargerStatus),
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
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 10px;
  text-align: center;
  text-transform: uppercase;
  background-color: #eeeeee;
  color: #000000;
  min-width: 67px;
}

.status--charging {
  background-color: #d6dbff;
  color: #2f46ff;
}

.status--ready {
  background-color: #d7fff5;
  color: #52b89e;
}

.status--error {
  background-color: #ffe7e6;
  color: #ff5050;
}
</style>
