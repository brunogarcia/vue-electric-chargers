<template>
  <Modal title="Current Session">
    <template v-slot:body>
      <ResumeCharger :charger="charger" />
    </template>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Charger } from "@/types";
import Modal from "@/design-system/Modal/Modal.vue";
import ResumeCharger from "@/components/ResumeCharger/ResumeCharger.vue";

export default defineComponent({
  name: "ModalCharger",
  props: {
    charger: {
      type: Object as PropType<Charger>,
      required: true,
    },
  },
  components: {
    Modal,
    ResumeCharger,
  },
});
</script>
