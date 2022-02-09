<template>
  <td class="charger--image">
    <img :src="getChargerImage(charger.type)" />
  </td>
  <td>
    {{ charger.type }}<br />
    {{ charger.serialNumber }}
  </td>
  <td><Connectivity :connectivityType="charger.connectivityType" /></td>
  <td><Status :chargerStatus="charger.status" /></td>
  <td>{{ getChargingTime(charger.chargingTime) }}</td>
  <td>{{ charger.energySupplied }}</td>
  <td>{{ charger.currentCharging }}</td>
  <td>{{ getDateformated(charger.manufacturedDate) }}</td>
  <td>
    <Button label="View Session" @click="onViewSession" />
    <Button :style="ButtonStyle.Danger" label="Delete" @click="onDelete" />
  </td>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Charger, ButtonStyle } from "@/types";

import getDateformated from "@/utils/getDateformated";
import getChargerImage from "@/utils/getChargerImage";
import getChargingTime from "@/utils/getChargingTime";

import Status from "@/components/Status/Status.vue";
import Button from "@/components/Button/Button.vue";
import Connectivity from "@/components/Connectivity/Connectivity.vue";

export default defineComponent({
  name: "TableCharger",
  props: {
    charger: {
      type: Object as PropType<Charger>,
      required: true,
    },
  },
  components: {
    Connectivity,
    Status,
    Button,
  },

  setup(props, { emit }) {
    const onViewSession = () => {
      emit("view-session", props.charger.id);
    };

    const onDelete = () => {
      emit("delete", props.charger.id);
    };

    return {
      ButtonStyle,
      getDateformated,
      getChargerImage,
      getChargingTime,
      onViewSession,
      onDelete,
    };
  },
});
</script>

<style scoped>
.charger--image {
  text-align: center;
}
td {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
