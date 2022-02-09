export enum ConnectivityType {
  Wifi = "wifi",
  Ethernet = "ethernet",
  Unknown = "unknown",
}

export enum ChargerType {
  Cooper = "Cooper",
  Commander = "Commander",
  Pulsar = "Pulsar",
}

export type ChargerStatus = 20 | 10 | 11 | 45 | 50 | 51 | 52 | 53 | 55;

export enum ChargerStatusName {
  All = "all",
  Charging = "charging",
  Ready = "ready",
  Error = "error",
  Unknown = "unknown",
}

export interface Charger {
  id: number;
  type: ChargerType;
  name: string;
  serialNumber: string;
  chargingTime: number;
  energySupplied: number;
  currentCharging: number;
  wifiSignal: number;
  status: ChargerStatus;
  manufacturedDate: string;
  connectivityType: ConnectivityType;
}

export enum ButtonStyle {
  Primary = "primary",
  Danger = "danger",
}