<template>
  <teleport to="body">
    <transition name="modal">
      <focus-trap v-model:active="isModalDisplayed">
        <div role="dialog" aria-labelledby="modalTitle" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <p id="modalTitle" class="font-size-large">{{ title }}</p>
                <Button @click="hideModal">
                  <template v-slot:icon>
                    <img :src="closeIcon" alt="close" />
                  </template>
                </Button>
              </div>
              <div class="modal-body">
                <slot name="body" />
              </div>
            </div>
          </div>
        </div>
      </focus-trap>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EventType } from "@/types";
import useModal from "@/composables/useModal";
import closeIcon from "@/assets/icons/close.svg";
import Button from "@/design-system/Button/Button.vue";

export default defineComponent({
  name: "Modal",

  components: {
    Button,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
  },

  emits: [EventType.HIDE_MODAL],

  setup(props, { emit }) {
    const hideModal = () => {
      emit(EventType.HIDE_MODAL);
    };

    const { isModalDisplayed } = useModal();

    return {
      closeIcon,
      hideModal,
      isModalDisplayed,
    };
  },
});
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 460px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
