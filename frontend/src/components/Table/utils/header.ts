interface Data {
  name: string;
  width: string;
}

export default function tableHeader(): Data[] {
  return [
    {
      name: "",
      width: "5%",
    },
    {
      name: "Device",
      width: "10%",
    },
    {
      name: "Connectivity",
      width: "10%",
    },
    {
      name: "Status",
      width: "10%",
    },
    {
      name: "Charging<br/>Time",
      width: "10%",
    },
    {
      name: "Energy<br/>Supplied",
      width: "10%",
    },
    {
      name: "Charging<br/>Current",
      width: "10%",
    },
    {
      name: "Manufactured<br/>Date",
      width: "10%",
    },
    {
      name: "Action",
      width: "20%",
    },
  ];
}
