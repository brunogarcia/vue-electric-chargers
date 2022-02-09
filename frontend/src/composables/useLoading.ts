import { ComputedRef, computed } from "vue";
import { useStore } from "@/store";
import { GETTERS } from "@/store/store.types";

interface ComposableLoading {
  loading: ComputedRef<boolean>;
}

export default function useLoading(): ComposableLoading {
  const store = useStore();

  const loading = computed((): boolean => store.getters[GETTERS.LOADING]);

  return {
    loading,
  };
}
