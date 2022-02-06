<template>
  <td class="charger--image"><img :src="getChargerImage(charger.type)" /></td>
  <td>{{ charger.name }}</td>
  <td><Connectivity :connectivityType="charger.connectivityType" /></td>
  <td><Status :chargerStatus="charger.status" /></td>
  <td>{{ getChargingTime(charger.chargingTime) }}</td>
  <td>{{ charger.energySupplied }}</td>
  <td>{{ charger.currentCharging }}</td>
  <td>{{ getDateformated(charger.manufacturedDate) }}</td>
  <td>
    <Button label="View Session" />
    <Button :style="ButtonStyle.Danger" label="Delete" />
  </td>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ButtonStyle } from "@/types";
import { Charger } from "@/store/store.types";

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

  setup() {
    return {
      ButtonStyle,
      getDateformated,
      getChargerImage,
      getChargingTime,
    };
  },
});
</script>

<style scoped>
.charger--image {
  text-align: center;
}
</style>
