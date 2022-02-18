<template>
  <div><img :src="data.image" /></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Charger } from "@/types";
import getChargeData from "@/utils/getChargeData";

export default defineComponent({
  name: "ResumeCharger",
  props: {
    charger: {
      type: Object as PropType<Charger>,
      required: true,
    },
  },
  setup(props) {
    const data = getChargeData(props.charger);

    return {
      data,
    };
  },
});
</script>
