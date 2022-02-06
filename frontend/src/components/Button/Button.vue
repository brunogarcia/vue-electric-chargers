<template>
  <button type="button" :class="classes" @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, PropType } from "vue";
import { ButtonStyle } from "@/types";

export default defineComponent({
  name: "Button",
  props: {
    label: {
      type: String as PropType<string>,
      required: true,
    },
    style: {
      type: String as PropType<ButtonStyle>,
      default: "primary",
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        button: true,
        "button--primary": props.style === "primary",
        "button--danger": props.style === "danger",
      })),
      onClick() {
        emit("click");
      },
    };
  },
});
</script>

<style scoped>
.button {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 500;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  background-color: transparent;
}
.button--primary {
  color: #5599ff;
}
.button--danger {
  color: #ff6363;
}
</style>
