import { ChargerErrorName } from "@/types";

export default function getChargingTime(chargingTime: number | null): string {
  if (!chargingTime) {
    return ChargerErrorName.NoApplied;
  }

  const minutes = Math.floor((chargingTime / (1000 * 60)) % 60);
  const hoursLabel = Math.floor((chargingTime / (1000 * 60 * 60)) % 24);
  const minutesLabel = minutes < 10 ? `0${minutes}` : minutes;

  return `${hoursLabel}h ${minutesLabel}m`;
}
