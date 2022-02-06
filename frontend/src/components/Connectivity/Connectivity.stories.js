import Connectivity from "./Connectivity.vue";

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
  connectivityType: "wifi",
};

export const Ethernet = Template.bind({});
Ethernet.args = {
  connectivityType: "ethernet",
};

export const Unknown = Template.bind({});
Unknown.args = {
  connectivityType: "unknown",
};
