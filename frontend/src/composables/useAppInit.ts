import { onMounted } from "vue";
import { useStore } from "@/store";
import { ACTIONS } from "@/store/chargers/chargers.types";

export default function useAppInit(): void {
  const store = useStore();

  onMounted(() => {
    const initApp = (): Promise<void> => store.dispatch(ACTIONS.FETCH_CHARGERS);
    initApp();
  });
}
