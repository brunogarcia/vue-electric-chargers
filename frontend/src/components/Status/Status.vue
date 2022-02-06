<template>
  <div role="status" :aria-label="label" class="status" :class="style">
    {{ name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type ChargerStatus = 10 | 11 | 20 | 45 | 50 | 51 | 52 | 53 | 55;
const ChargerStatusCharging: ChargerStatus[] = [20];
const ChargerStatusReady: ChargerStatus[] = [10, 11];
const ChargerStatusError: ChargerStatus[] = [45, 50, 51, 52, 53, 55];

enum NameStatus {
  Charging = "charging",
  Ready = "ready",
  Error = "error",
  Unknown = "unknown",
}

export default defineComponent({
  name: "Status",
  props: {
    chargerStatus: {
      type: Number as PropType<ChargerStatus>,
      required: true,
    },
  },
  setup(props) {
    const isCharging = ChargerStatusCharging.includes(props.chargerStatus);
    const isReady = ChargerStatusReady.includes(props.chargerStatus);
    const isError = ChargerStatusError.includes(props.chargerStatus);

    const label = `${props.chargerStatus} charger status`;

    const name = isCharging
      ? NameStatus.Charging
      : isReady
      ? NameStatus.Ready
      : isError
      ? NameStatus.Error
      : NameStatus.Unknown;

    const style = {
      "status--charging": isCharging,
      "status--ready": isReady,
      "status--error": isError,
    };

    return {
      name,
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
