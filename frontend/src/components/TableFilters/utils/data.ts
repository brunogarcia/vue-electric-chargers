import { ChargerStatusName } from "@/types";

interface Data {
  id: ChargerStatusName;
}

export default function tableFilters(): Data[] {
  return [
    {
      id: ChargerStatusName.All,
    },
    {
      id: ChargerStatusName.Ready,
    },
    {
      id: ChargerStatusName.Charging,
    },
    {
      id: ChargerStatusName.Error,
    },
  ];
}
