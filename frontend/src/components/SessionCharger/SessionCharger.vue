<template>
  <Modal title="Current Session">
    <template v-slot:body>
      <p>Hi! {{ chargerId }}</p>
    </template>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "@/components/Modal/Modal.vue";

export default defineComponent({
  name: "SessionCharger",
  props: {
    chargerId: {
      type: Number,
      required: true,
    },
  },
  components: {
    Modal,
  },
});
</script>
