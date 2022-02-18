import CurrentCharging from "./CurrentCharging.vue";

export default {
  title: "Components/CurrentCharging",
  component: CurrentCharging,
};

const Template = (args) => ({
  components: { CurrentCharging },
  setup() {
    return { args };
  },
  template: '<CurrentCharging v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  currentCharging: 20,
};
