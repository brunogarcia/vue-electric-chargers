<template>
  <td class="charger--image">
    <img :src="data.image" />
  </td>
  <td data-label="Device">
    {{ data.type }}<br />
    {{ data.serialNumber }}
  </td>
  <td data-label="Connectivity">
    <Connectivity :connectivityType="data.connectivityType" />
  </td>
  <td data-label="Status">
    <Status :chargerStatus="data.status" />
  </td>
  <td data-label="Charging Time">
    {{ data.chargingTime }}
  </td>
  <td data-label="Energy Supplied">
    {{ data.energySupplied }}
  </td>
  <td data-label="Charging Current">
    {{ data.currentCharging }}
  </td>
  <td data-label="Manufactured Date">
    {{ data.manufacturedDate }}
  </td>
  <td data-label="Action">
    <Button
      :style="ButtonStyle.Primary"
      label="View Session"
      @click="onViewSession"
    />
    <Button :style="ButtonStyle.Danger" label="Delete" @click="onDelete" />
  </td>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import getChargeData from "@/utils/getChargeData";
import { Charger, ButtonStyle, EventType } from "@/types";
import Status from "@/components/Status/Status.vue";
import Button from "@/design-system/Button/Button.vue";
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
    Status,
    Button,
    Connectivity,
  },
  emits: [EventType.VIEW_SESSION, EventType.DELETE],
  setup(props, { emit }) {
    const data = getChargeData(props.charger);

    const onViewSession = () => {
      emit(EventType.VIEW_SESSION, props.charger.id);
    };

    const onDelete = () => {
      emit(EventType.DELETE, props.charger.id);
    };

    return {
      data,
      ButtonStyle,
      onDelete,
      onViewSession,
    };
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/mixins";

@include for-desktop-down {
  td {
    display: block;
    font-size: 12px;
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

.charger--image {
  text-align: center;
}

td {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
