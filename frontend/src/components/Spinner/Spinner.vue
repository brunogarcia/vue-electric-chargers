<template>
  <div class="spinner-container" role="alert" aria-busy="true">
    <div class="spinner"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Spinner",
});
</script>

<style scoped>
.spinner-container {
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: var(--color-primary);
  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
