import type { Meta, StoryObj } from "@storybook/vue3";
import Filter from "./Filter.vue";

const meta: Meta<typeof Filter> = {
  title: "UI/Filter",
  component: Filter,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Basic: Story = {
  args: {},
};

export const CustomLabel: Story = {
  args: {
    label: "Saring",
  },
};
