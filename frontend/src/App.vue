<template>
  <MainLayout>
    <Spinner v-if="loading" />
    <router-view v-else />
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useAppInit from "@/composables/useAppInit";
import useLoading from "@/composables/useLoading";
import MainLayout from "@/layouts/MainLayout.vue";
import Spinner from "@/design-system/Spinner/Spinner.vue";

export default defineComponent({
  name: "App",

  components: {
    MainLayout,
    Spinner,
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
