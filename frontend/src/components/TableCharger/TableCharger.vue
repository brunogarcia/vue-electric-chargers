<template>
  <td class="charger--image">
    <img :src="getChargerImage(charger.type)" />
  </td>
  <td data-label="Device">
    {{ charger.type }}<br />
    {{ charger.serialNumber }}
  </td>
  <td data-label="Connectivity">
    <Connectivity :connectivityType="charger.connectivityType" />
  </td>
  <td data-label="Status"><Status :chargerStatus="charger.status" /></td>
  <td data-label="Charging Time">
    {{ getChargingTime(charger.chargingTime) }}
  </td>
  <td data-label="Energy Supplied">{{ charger.energySupplied || "n.a." }}</td>
  <td data-label="Charging Current">{{ charger.currentCharging || "n.a." }}</td>
  <td data-label="Manufactured Date">
    {{ getDateformated(charger.manufacturedDate) }}
  </td>
  <td data-label="Action">
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

@media screen and (max-width: 1024px) {
  td {
    display: block;
    font-size: 0.8em;
    text-align: right;
    padding: 10px;
  }

  td::before {
    content: attr(data-label);
    float: left;
    text-transform: uppercase;
  }

  td:last-child {
    border-bottom: 0;
  }
}
</style>
