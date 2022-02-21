import { render } from "@testing-library/vue";
import TableChargers from "./TableChargers.vue";
import mockAppState from "../../../tests/unit/mocks/mockAppState";

const mockChargers = mockAppState().chargers;
const props = {
  chargers: mockChargers,
};

describe("TableChargers.vue", () => {
  it("renders the table header", () => {
    const { getByText } = render(TableChargers, { props });

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
    const { getAllByTestId } = render(TableChargers, { props });
    const chargers = getAllByTestId("table-charger");
    expect(chargers).toHaveLength(3);
  });
});
