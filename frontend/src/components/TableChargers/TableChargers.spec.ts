import { ChargerStatusName } from "@/types";
import { ACTIONS } from "@/store/store.types";
import TableChargers from "./TableChargers.vue";

import store from "../../../tests/unit/helpers/createStore";
import renderComponent from "../../../tests/unit/helpers/renderComponent";

describe("TableChargers.vue", () => {
  it("renders the header", () => {
    const { getByText } = renderComponent(TableChargers);

    const columnDevice = getByText("Device");
    const columnConnectivity = getByText("Connectivity");
    const columnStatus = getByText("Status");
    const columnChargingTime = getByText(/Time/i);
    const columnEnergySupplied = getByText(/Energy/i);
    const columnChargingCurrent = getByText(/Current/i);
    const columnManufactured = getByText(/Manufactured/i);
    const columnAction = getByText("Action");

    expect(columnDevice).toBeInTheDocument();
    expect(columnConnectivity).toBeInTheDocument();
    expect(columnStatus).toBeInTheDocument();
    expect(columnChargingTime).toBeInTheDocument();
    expect(columnEnergySupplied).toBeInTheDocument();
    expect(columnChargingCurrent).toBeInTheDocument();
    expect(columnManufactured).toBeInTheDocument();
    expect(columnAction).toBeInTheDocument();
  });

  it("renders all the chargers", () => {
    const { getAllByTestId } = renderComponent(TableChargers);
    const chargers = getAllByTestId("table-charger");
    expect(chargers).toHaveLength(3);
  });

  it("renders the chargers filted by READY status", async () => {
    const { getAllByTestId, getByText } = renderComponent(TableChargers);

    await store.dispatch(ACTIONS.SET_TABLE_FILTER, ChargerStatusName.Ready);

    const chargers = getAllByTestId("table-charger");
    const chargerSerialNumber = getByText(/SN-11249-1/);

    expect(chargers).toHaveLength(1);
    expect(chargerSerialNumber).toBeInTheDocument();
  });

  it("renders the chargers filted by CHARGING status", async () => {
    const { getAllByTestId, getByText } = renderComponent(TableChargers);

    await store.dispatch(ACTIONS.SET_TABLE_FILTER, ChargerStatusName.Charging);

    const chargers = getAllByTestId("table-charger");
    const chargerSerialNumber = getByText(/SN-34543-2/);

    expect(chargers).toHaveLength(1);
    expect(chargerSerialNumber).toBeInTheDocument();
  });

  it("renders the chargers filted by ERROR status", async () => {
    const { getAllByTestId, getByText } = renderComponent(TableChargers);

    await store.dispatch(ACTIONS.SET_TABLE_FILTER, ChargerStatusName.Error);

    const chargers = getAllByTestId("table-charger");
    const chargerSerialNumber = getByText(/SN-45621-3/);

    expect(chargers).toHaveLength(1);
    expect(chargerSerialNumber).toBeInTheDocument();
  });
});
