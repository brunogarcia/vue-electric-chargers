type Modify<T, R> = Omit<T, keyof R> & R;

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

export enum ChargerStyle {
  Active = "active",
}

export enum ChargerErrorName {
  NoApplied = "n.a.",
}

export interface Charger {
  id: number;
  type: ChargerType;
  name: string;
  serialNumber: string;
  chargingTime: number | null;
  energySupplied: number | null;
  currentCharging: number | null;
  wifiSignal: number;
  status: ChargerStatus;
  manufacturedDate: string;
  connectivityType: ConnectivityType;
}

type ChargerUpdated = Modify<
  Charger,
  {
    chargingTime: string;
    energySupplied: number | ChargerErrorName;
    currentCharging: number | ChargerErrorName;
  }
>;

export interface AugmentedCharger extends ChargerUpdated {
  image: string;
}

export enum ButtonStyle {
  Primary = "primary",
  Danger = "danger",
}

export enum EventType {
  CLICK = "click",
  HIDE_MODAL = "hide-modal",
  VIEW_SESSION = "view-session",
  DELETE = "delete",
  SET_CHARGER_FILTER = "set-charger-filter",
}
