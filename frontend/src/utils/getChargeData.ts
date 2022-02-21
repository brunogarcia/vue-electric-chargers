import getDateformated from "@/utils/getDateformated";
import getChargerImage from "@/utils/getChargerImage";
import getChargingTime from "@/utils/getChargingTime";
import { Charger, AugmentedCharger, ChargerErrorName } from "@/types";

export default function getChargeData(charger: Charger): AugmentedCharger {
  return {
    id: charger.id,
    type: charger.type,
    image: getChargerImage(charger.type),
    name: charger.name,
    serialNumber: charger.serialNumber,
    chargingTime: getChargingTime(charger.chargingTime),
    energySupplied: charger.energySupplied || ChargerErrorName.NoApplied,
    currentCharging: charger.currentCharging || ChargerErrorName.NoApplied,
    wifiSignal: charger.wifiSignal,
    status: charger.status,
    manufacturedDate: getDateformated(charger.manufacturedDate),
    connectivityType: charger.connectivityType,
  };
}
