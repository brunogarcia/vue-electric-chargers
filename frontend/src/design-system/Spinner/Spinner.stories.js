import Spinner from "./Spinner.vue";

export default {
  title: "Core/Spinner",
  component: Spinner,
};

const Template = (args) => ({
  components: { Spinner },
  setup() {
    return { args };
  },
  template: '<Spinner v-bind="args" />',
});

export const Default = Template.bind({});
