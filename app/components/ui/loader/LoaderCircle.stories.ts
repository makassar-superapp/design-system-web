import type { Meta, StoryObj } from "@storybook/vue3";
import { LoaderCircle } from ".";

const meta: Meta<typeof LoaderCircle> = {
  title: "UI/Loader",
  component: LoaderCircle,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "The size of the loader",
    },
    color: {
      control: "select",
      options: ["primary", "white"],
      description: "The color of the loader",
    },
  },
  args: {
    size: "md",
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof LoaderCircle>;

export const FullExample: Story = {
  args: {
    size: "md",
    color: "primary",
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { LoaderCircle },
    setup() {
      return { args };
    },
    template: '<LoaderCircle v-bind="args" />',
  }),
};

export const Primary: Story = {
  args: {
    size: "md",
    color: "primary",
  },
  render: (args) => ({
    components: { LoaderCircle },
    setup() {
      return { args };
    },
    template: '<LoaderCircle v-bind="args" />',
  }),
};

export const White: Story = {
  args: {
    size: "md",
    color: "white",
  },
  render: (args) => ({
    components: { LoaderCircle },
    setup() {
      return { args };
    },
    template:
      '<div class="bg-gray-800 p-4 rounded-md inline-block"><LoaderCircle v-bind="args" /></div>',
  }),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<LoaderCircle size="sm" />
<LoaderCircle size="md" />`,
      },
    },
  },
  render: () => ({
    components: { LoaderCircle },
    template: `
      <div class="flex items-center gap-6">
        <LoaderCircle size="sm" />
        <LoaderCircle size="md" />
      </div>
    `,
  }),
};

export const Colors: Story = {
  parameters: {
    docs: {
      source: {
        code: `<LoaderCircle color="primary" />
<div class="bg-gray-800 p-4 rounded-md">
  <LoaderCircle color="white" />
</div>`,
      },
    },
  },
  render: () => ({
    components: { LoaderCircle },
    template: `
      <div class="flex items-center gap-6">
        <LoaderCircle color="primary" />
        <div class="bg-gray-800 p-4 rounded-md inline-block">
          <LoaderCircle color="white" />
        </div>
      </div>
    `,
  }),
};
