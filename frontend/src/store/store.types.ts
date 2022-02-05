export interface Charger {
  id: number;
  type: string;
  name: string;
  serialNumber: string;
  chargingTime: number;
  energySupplied: number;
  currentCharging: number;
  wifiSignal: number;
  status: number;
  manufacturedDate: string;
  connectivityType: string;
}

export interface StateRoot {
  chargers: Charger[];
}
