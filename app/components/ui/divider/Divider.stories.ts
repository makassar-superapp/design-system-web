import type { Meta, StoryObj } from "@storybook/vue3";
import Divider from "./Divider.vue";

const meta: Meta<typeof Divider> = {
  title: "UI/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    position: {
      control: "select",
      options: ["none", "left", "center", "right"],
      description: "The position of the label text",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the label text",
    },
    label: {
      control: "text",
      description: "The label text to display",
    },
  },
  args: {
    position: "center",
    size: "md",
    label: "",
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const FullExample: Story = {
  args: {
    position: "center",
    size: "md",
    label: "Label",
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: '<Divider v-bind="args" />',
  }),
};

export const None: Story = {
  args: {
    position: "none",
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: '<Divider v-bind="args" />',
  }),
};

export const LeftAligned: Story = {
  args: {
    position: "left",
    label: "Label",
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: '<Divider v-bind="args" />',
  }),
};

export const Centered: Story = {
  args: {
    position: "center",
    label: "Label",
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: '<Divider v-bind="args" />',
  }),
};

export const RightAligned: Story = {
  args: {
    position: "right",
    label: "Label",
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: '<Divider v-bind="args" />',
  }),
};

export const AllPositions: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Divider position="none" />
<Divider position="left" label="Label" />
<Divider position="center" label="Label" />
<Divider position="right" label="Label" />`,
      },
    },
  },
  render: () => ({
    components: { Divider },
    template: `
      <div class="space-y-4">
        <Divider position="none" />
        <Divider position="left" label="Label" />
        <Divider position="center" label="Label" />
        <Divider position="right" label="Label" />
      </div>
    `,
  }),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Divider position="center" size="sm" label="Small" />
<Divider position="center" size="md" label="Medium" />
<Divider position="center" size="lg" label="Large" />`,
      },
    },
  },
  render: () => ({
    components: { Divider },
    template: `
      <div class="space-y-4">
        <Divider position="center" size="sm" label="Small" />
        <Divider position="center" size="md" label="Medium" />
        <Divider position="center" size="lg" label="Large" />
      </div>
    `,
  }),
};

export const WithSlot: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Divider position="center">
  Custom Label Content
</Divider>`,
      },
    },
  },
  render: () => ({
    components: { Divider },
    template: `
      <Divider position="center">
        Custom Label Content
      </Divider>
    `,
  }),
};
