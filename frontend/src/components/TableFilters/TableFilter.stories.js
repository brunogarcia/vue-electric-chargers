import TableFilters from "./TableFilters.vue";

export default {
  title: "Components/TableFilters",
  component: TableFilters,
};

const Template = (args) => ({
  components: { TableFilters },
  setup() {
    return { args };
  },
  template: '<TableFilters v-bind="args" />',
});

export const All = Template.bind({});
All.args = {
  chargerFilter: "all",
};

export const Ready = Template.bind({});
Ready.args = {
  chargerFilter: "ready",
};

export const Charging = Template.bind({});
Charging.args = {
  chargerFilter: "charging",
};

export const Error = Template.bind({});
Error.args = {
  chargerFilter: "error",
};
