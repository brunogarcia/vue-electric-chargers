import { onMounted } from "vue";
import { useStore } from "@/store";
import { ACTIONS } from "@/store/store.types";

export default function useAppInit(): void {
  const store = useStore();

  onMounted(() => {
    const initApp = (): Promise<void> => store.dispatch(ACTIONS.FETCH_CHARGERS);
    initApp();
  });
}
