import { ChargerStatus, ChargerStatusName } from "@/types";

const chargerStatusCharging: ChargerStatus[] = [20];
const chargerStatusReady: ChargerStatus[] = [10, 11];
const chargerStatusError: ChargerStatus[] = [45, 50, 51, 52, 53, 55];

const isChargeStatusCharging = (chargerStatus: ChargerStatus): boolean =>
  chargerStatusCharging.includes(chargerStatus);
const isChargeStatusReady = (chargerStatus: ChargerStatus): boolean =>
  chargerStatusReady.includes(chargerStatus);
const isChargeStatusError = (chargerStatus: ChargerStatus): boolean =>
  chargerStatusError.includes(chargerStatus);

const getChargeStatusName = (
  chargerStatus: ChargerStatus
): ChargerStatusName => {
  return isChargeStatusCharging(chargerStatus)
    ? ChargerStatusName.Charging
    : isChargeStatusReady(chargerStatus)
    ? ChargerStatusName.Ready
    : isChargeStatusError(chargerStatus)
    ? ChargerStatusName.Error
    : ChargerStatusName.Unknown;
};

const isSameChargerStatus = (
  chargerStatus: ChargerStatus,
  chargerStatusName: ChargerStatusName
): boolean => getChargeStatusName(chargerStatus) === chargerStatusName;

export default {
  isChargeStatusCharging,
  isChargeStatusReady,
  isChargeStatusError,
  getChargeStatusName,
  isSameChargerStatus,
};
