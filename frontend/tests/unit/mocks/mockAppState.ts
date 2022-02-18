import { StateRoot } from "@/store/store.types";
import { ConnectivityType, ChargerType, ChargerStatusName } from "@/types";

export default function mockAppState(): StateRoot {
  return {
    loading: false,
    isModalDisplayed: false,
    tableFilter: ChargerStatusName.All,
    chargers: [
      {
        id: 1,
        type: ChargerType.Pulsar,
        name: "Charger 1",
        serialNumber: "SN-11249-1",
        chargingTime: 229074000,
        energySupplied: 20,
        currentCharging: 20,
        wifiSignal: 50,
        status: 10, // ready
        manufacturedDate: "2016-02-01T02:48:54.858Z",
        connectivityType: ConnectivityType.Wifi,
      },
      {
        id: 2,
        type: ChargerType.Pulsar,
        name: "Charger 2",
        serialNumber: "SN-34543-2",
        chargingTime: 29074000,
        energySupplied: 15,
        currentCharging: 32,
        wifiSignal: 25,
        status: 20, // charging
        manufacturedDate: "2017-08-29T20:23:07.677Z",
        connectivityType: ConnectivityType.Wifi,
      },
      {
        id: 3,
        type: ChargerType.Cooper,
        name: "Charger 3",
        serialNumber: "SN-45621-3",
        chargingTime: null,
        energySupplied: null,
        currentCharging: null,
        wifiSignal: 25,
        status: 50, // error
        manufacturedDate: "2018-04-06T17:25:13.045Z",
        connectivityType: ConnectivityType.Wifi,
      },
    ],
  };
}
