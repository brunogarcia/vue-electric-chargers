import Connectivity from "./Connectivity.vue";
import { ConnectivityType } from "../../types";

export default {
  title: "Components/Connectivity",
  component: Connectivity,
};

const Template = (args) => ({
  components: { Connectivity },
  setup() {
    return { args };
  },
  template: '<Connectivity v-bind="args" />',
});

export const Wifi = Template.bind({});
Wifi.args = {
  connectivityType: ConnectivityType.Wifi,
};

export const Ethernet = Template.bind({});
Ethernet.args = {
  connectivityType: ConnectivityType.Ethernet,
};

export const Unknown = Template.bind({});
Unknown.args = {
  connectivityType: ConnectivityType.Unknown,
};
