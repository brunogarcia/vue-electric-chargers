export default function getChargingTime(chargingTime: number): string {
  if (!chargingTime) {
    return "";
  }

  const minutes = Math.floor((chargingTime / (1000 * 60)) % 60);
  const hoursLabel = Math.floor((chargingTime / (1000 * 60 * 60)) % 24);
  const minutesLabel = minutes < 10 ? `0${minutes}` : minutes;

  return `${hoursLabel}h ${minutesLabel}m`;
}
