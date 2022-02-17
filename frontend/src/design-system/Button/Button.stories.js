import Button from "./Button.vue";

export default {
  title: "Core/Button",
  component: Button,
  style: {
    control: { type: "select" },
    options: ["primary", "danger"],
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "View Session",
  style: "primary",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Delete",
  style: "danger",
};
