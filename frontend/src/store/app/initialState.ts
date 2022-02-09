import { StateRoot } from "@/store/store.types";
import { ChargerStatusName } from "@/types";

const initialState: StateRoot = {
  tableFilter: ChargerStatusName.All,
  loading: true,
  chargers: [],
};

export default initialState;
