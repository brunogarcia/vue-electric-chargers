<template>
  <button type="button" :class="classes" @click="onClick">
    <slot name="icon" />
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, PropType } from "vue";
import { ButtonStyle, EventType } from "@/types";

export default defineComponent({
  name: "Button",
  props: {
    label: {
      type: String as PropType<string>,
      default: "",
    },
    style: {
      type: String as PropType<ButtonStyle>,
      default: ButtonStyle.Primary,
    },
  },

  emits: [EventType.CLICK],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        button: true,
        "button--primary": props.style === ButtonStyle.Primary,
        "button--danger": props.style === ButtonStyle.Danger,
      })),

      onClick() {
        emit(EventType.CLICK);
      },
    };
  },
});
</script>

<style scoped>
.button {
  font-family: var(--font-family-roboto);
  font-weight: 500;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  background-color: transparent;
}
.button--primary {
  color: var(--color-primary);
}
.button--danger {
  color: var(--color-danger);
}
</style>
