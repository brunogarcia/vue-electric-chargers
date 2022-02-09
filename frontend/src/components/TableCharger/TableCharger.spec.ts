import { render, fireEvent } from "@testing-library/vue";
import TableCharger from "./TableCharger.vue";
import { ConnectivityType, ChargerType } from "@/types";

describe("TableCharger.vue", () => {
  const charger = {
    id: 12345,
    type: ChargerType.Pulsar,
    name: "Charger 1",
    serialNumber: "SN-11249-1",
    chargingTime: 229074000,
    energySupplied: 21,
    currentCharging: 31,
    wifiSignal: 50,
    status: 10,
    manufacturedDate: "2016-02-01T02:48:54.858Z",
    connectivityType: ConnectivityType.Wifi,
  };

  it("renders the charger data", () => {
    const { getByText } = render(TableCharger, {
      props: { charger },
    });

    const chargerType = getByText(/Pulsar/);
    const chargerSerialNumber = getByText(/SN-11249-1/);
    const chargerConnectivityType = getByText(/wifi/);
    const chargerStatus = getByText(/ready/);
    const chargerChargingTime = getByText(/15h 37m/);
    const chargerEnergySupplied = getByText(/21/);
    const chargerCurrentCharging = getByText(/31/);
    const chargerManufacturedDate = getByText(/01 Feb 2016/);

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
    const { getByRole } = render(TableCharger, {
      props: { charger },
    });

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
    const { getByRole, emitted } = render(TableCharger, {
      props: { charger },
    });

    const viewButton = getByRole("button", {
      name: /View Session/i,
    });

    await fireEvent.click(viewButton);

    const event = emitted();

    expect(event["view-session"]).toBeTruthy();
    expect(event["view-session"][0]).toStrictEqual([12345]);
  });

  it("click on the delete button should emit the delete event", async () => {
    const { getByRole, emitted } = render(TableCharger, {
      props: { charger },
    });

    const deleteButton = getByRole("button", {
      name: /Delete/i,
    });

    await fireEvent.click(deleteButton);

    const event = emitted();

    expect(event["delete"]).toBeTruthy();
    expect(event["delete"][0]).toStrictEqual([12345]);
  });
});
