import { render, fireEvent } from "@testing-library/vue";
import TableCharger from "./TableCharger.vue";
import mockAppState from "../../../tests/unit/mocks/mockAppState";

const mockChargers = mockAppState().chargers;

describe("TableCharger.vue", () => {
  const props = {
    charger: mockChargers[1],
  };

  it("renders the charger data", () => {
    const { getByText } = render(TableCharger, { props });

    const chargerType = getByText(/Pulsar/);
    const chargerSerialNumber = getByText(/SN-34543-2/);
    const chargerConnectivityType = getByText(/wifi/);
    const chargerStatus = getByText(/charging/);
    const chargerChargingTime = getByText(/8h 04m/);
    const chargerEnergySupplied = getByText(/15/);
    const chargerCurrentCharging = getByText(/32/);
    const chargerManufacturedDate = getByText(/29 Aug 2017/);

    expect(chargerType).toBeInTheDocument();
    expect(chargerSerialNumber).toBeInTheDocument();
    expect(chargerConnectivityType).toBeInTheDocument();
    expect(chargerStatus).toBeInTheDocument();
    expect(chargerChargingTime).toBeInTheDocument();
    expect(chargerEnergySupplied).toBeInTheDocument();
    expect(chargerCurrentCharging).toBeInTheDocument();
    expect(chargerManufacturedDate).toBeInTheDocument();
  });

  it("renders the action buttons", () => {
    const { getByRole } = render(TableCharger, { props });

    const viewButton = getByRole("button", {
      name: /View Session/i,
    });
    const deleteButton = getByRole("button", {
      name: /Delete/i,
    });

    expect(viewButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it("click on the view session button should emit the view-session event", async () => {
    const { getByRole, emitted } = render(TableCharger, { props });

    const viewButton = getByRole("button", {
      name: /View Session/i,
    });

    await fireEvent.click(viewButton);

    const event = emitted();

    expect(event["view-session"]).toBeTruthy();
    expect(event["view-session"][0]).toStrictEqual([2]);
  });

  it("click on the delete button should emit the delete event", async () => {
    const { getByRole, emitted } = render(TableCharger, { props });

    const deleteButton = getByRole("button", {
      name: /Delete/i,
    });

    await fireEvent.click(deleteButton);

    const event = emitted();

    expect(event["delete"]).toBeTruthy();
    expect(event["delete"][0]).toStrictEqual([2]);
  });
});
