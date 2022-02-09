import App from "@/store/app";
import mockShoppingState from "./mockAppState";

const mockStore = {
  ...App,
  state: mockShoppingState(),
};

export default mockStore;
