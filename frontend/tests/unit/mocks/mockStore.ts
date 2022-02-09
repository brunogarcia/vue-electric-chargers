import App from "@/store/app";
import mockAppState from "./mockAppState";

const mockStore = {
  ...App,
  state: mockAppState(),
};

export default mockStore;
