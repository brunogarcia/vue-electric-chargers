import ResumeCharger from "./ResumeCharger.vue";
import { ConnectivityType, ChargerType } from "@/types";

export default {
  title: "Components/ResumeCharger",
  component: ResumeCharger,
};

const Template = (args) => ({
  components: { ResumeCharger },
  setup() {
    return { args };
  },
  template:
    '<div style="width:460px;padding: 20px 30px;"><ResumeCharger v-bind="args" /></div>',
});

const Charger = {
  id: 12345,
  type: ChargerType.Pulsar,
  name: "Charger 1",
  serialNumber: "SN-11249-1",
  chargingTime: 229074000,
  energySupplied: 21,
  currentCharging: 31,
  wifiSignal: 50,
  manufacturedDate: "2016-02-01T02:48:54.858Z",
  connectivityType: ConnectivityType.Wifi,
};

export const Ready = Template.bind({});
Ready.args = {
  charger: {
    ...Charger,
    status: 10,
  },
};

export const Charging = Template.bind({});
Charging.args = {
  charger: {
    ...Charger,
    status: 20,
  },
};

export const Error = Template.bind({});
Error.args = {
  charger: {
    ...Charger,
    status: 45,
  },
};
