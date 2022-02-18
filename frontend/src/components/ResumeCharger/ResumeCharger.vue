<template>
  <div class="resume-charger--container">
    <div class="resume-charger--first">
      <div>
        <img :src="data.image" />
      </div>
      <div class="resume-charger--text color-gray">
        <p class="font-size-medium">{{ data.type }} {{ data.name }}</p>
        <p class="font-size-small">{{ data.serialNumber }}</p>
        <p class="font-size-medium color-dark">Time {{ data.chargingTime }}</p>
      </div>
    </div>
    <div>
      <Status :chargerStatus="data.status" />
    </div>
    <div>
      <CurrentCharging :currentCharging="data.currentCharging" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Charger } from "@/types";
import getChargeData from "@/utils/getChargeData";
import Status from "@/components/Status/Status.vue";
import CurrentCharging from "@/components/CurrentCharging/CurrentCharging.vue";

export default defineComponent({
  name: "ResumeCharger",
  props: {
    charger: {
      type: Object as PropType<Charger>,
      required: true,
    },
  },
  components: {
    Status,
    CurrentCharging,
  },
  setup(props) {
    const data = getChargeData(props.charger);

    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
.resume-charger--container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .resume-charger--first {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .resume-charger--text {
    margin-left: 15px;
    p {
      margin-bottom: 3px;
    }
  }
}
</style>
