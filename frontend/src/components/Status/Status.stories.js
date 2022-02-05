import Status from "./Status.vue";

export default {
  title: "Components/Status",
  component: Status,
};

const Template = (args) => ({
  components: { Status },
  setup() {
    return { args };
  },
  template: '<Status v-bind="args" />',
});

export const Ready = Template.bind({});
Ready.args = {
  chargerStatus: 10,
};

export const Charging = Template.bind({});
Charging.args = {
  chargerStatus: 20,
};

export const Error = Template.bind({});
Error.args = {
  chargerStatus: 50,
};

export const Unknown = Template.bind({});
Unknown.args = {
  chargerStatus: 99,
};
