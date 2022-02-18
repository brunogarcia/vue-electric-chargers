import { render } from "@testing-library/vue";
import ResumeCharger from "./ResumeCharger.vue";
import { ConnectivityType, ChargerType } from "@/types";

describe("ResumeCharger.vue", () => {
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
    const { getByText } = render(ResumeCharger, {
      props: { charger },
    });

    const chargerType = getByText(/Pulsar/);
    const chargerName = getByText(/Charger 1/);
    const chargerSerialNumber = getByText(/SN-11249-1/);
    const chargerCurrentCharging = getByText(/31/);
    const chargerStatus = getByText(/ready/);
    const chargerChargingTime = getByText(/15h 37m/);

    expect(chargerType).toBeInTheDocument();
    expect(chargerName).toBeInTheDocument();
    expect(chargerSerialNumber).toBeInTheDocument();
    expect(chargerCurrentCharging).toBeInTheDocument();
    expect(chargerStatus).toBeInTheDocument();
    expect(chargerChargingTime).toBeInTheDocument();
  });
});
