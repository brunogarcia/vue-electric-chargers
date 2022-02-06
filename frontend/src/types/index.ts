export enum ConnectivityType {
  Wifi = "wifi",
  Ethernet = "ethernet",
  Unknown = "unknown",
}

export enum NameStatus {
  Charging = "charging",
  Ready = "ready",
  Error = "error",
  Unknown = "unknown",
}

export type ChargerStatus = 10 | 11 | 20 | 45 | 50 | 51 | 52 | 53 | 55;

export type ButtonStyle = "primary" | "danger";
