<template>
  <MainLayout>
    <div class="section" v-if="!loading">
      <router-view />
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useAppInit from "@/composables/useAppInit";
import useLoading from "@/composables/useLoading";
import MainLayout from "@/layouts/MainLayout.vue";

export default defineComponent({
  name: "App",

  components: {
    MainLayout,
  },

  setup() {
    useAppInit();
    const { loading } = useLoading();

    return {
      loading,
    };
  },
});
</script>
