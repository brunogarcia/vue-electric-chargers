import { StateRoot } from "@/store/store.types";
import { ChargerStatusName } from "@/types";

const initialState: StateRoot = {
  chargers: [],
  loading: true,
  isModalDisplayed: false,
  tableFilter: ChargerStatusName.All,
};

export default initialState;
