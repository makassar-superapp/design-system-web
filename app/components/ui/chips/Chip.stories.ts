import type { Meta, StoryObj } from "@storybook/vue3";
import { Chip, ChipClose, ChipCount } from ".";

const meta: Meta<typeof Chip> = {
  title: "UI/Chips",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the chip",
    },
    closable: {
      control: "boolean",
      description: "Whether the chip can be closed",
    },
  },
  args: {
    size: "md",
    closable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const FullExample: Story = {
  args: {
    size: "md",
    closable: true,
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: '<Chip v-bind="args">Label</Chip>',
  }),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Chip size="sm">Label</Chip>
<Chip size="md">Label</Chip>
<Chip size="lg">Label</Chip>`,
      },
    },
  },
  render: () => ({
    components: { Chip },
    template: `
      <div class="flex flex-wrap gap-4 items-center">
        <Chip size="sm">Label</Chip>
        <Chip size="md">Label</Chip>
        <Chip size="lg">Label</Chip>
      </div>
    `,
  }),
};

export const Closable: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Chip size="sm" closable>Label</Chip>
<Chip size="md" closable>Label</Chip>
<Chip size="lg" closable>Label</Chip>`,
      },
    },
  },
  render: () => ({
    components: { Chip },
    template: `
      <div class="flex flex-wrap gap-4 items-center">
        <Chip size="sm" closable>Label</Chip>
        <Chip size="md" closable>Label</Chip>
        <Chip size="lg" closable>Label</Chip>
      </div>
    `,
  }),
};

export const ChipCloseComponent: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ChipClose size="sm" />
<ChipClose size="sm" class="bg-gray-200" />
<ChipClose size="md" />
<ChipClose size="md" class="bg-gray-200" />`,
      },
    },
  },
  render: () => ({
    components: { ChipClose },
    template: `
      <div class="flex items-center gap-6">
        <ChipClose size="sm" />
        <ChipClose size="sm" class="bg-gray-200" />
        <ChipClose size="md" />
        <ChipClose size="md" class="bg-gray-200" />
      </div>
    `,
  }),
};

export const ChipCountComponent: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ChipCount size="sm" :value="2" />
<ChipCount size="md" :value="5" />
<ChipCount size="md" :value="99" />`,
      },
    },
  },
  render: () => ({
    components: { ChipCount },
    template: `
      <div class="flex items-center gap-6">
        <ChipCount size="sm" :value="2" />
        <ChipCount size="md" :value="5" />
        <ChipCount size="md" :value="99" />
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Chip size="sm">Small</Chip>
<Chip size="md">Medium</Chip>
<Chip size="lg">Large</Chip>
<Chip size="sm" closable>Small Closable</Chip>
<Chip size="md" closable>Medium Closable</Chip>
<Chip size="lg" closable>Large Closable</Chip>`,
      },
    },
  },
  render: () => ({
    components: { Chip },
    template: `
      <div class="flex flex-wrap gap-4 items-center">
        <Chip size="sm">Small</Chip>
        <Chip size="md">Medium</Chip>
        <Chip size="lg">Large</Chip>
        <Chip size="sm" closable>Small Closable</Chip>
        <Chip size="md" closable>Medium Closable</Chip>
        <Chip size="lg" closable>Large Closable</Chip>
      </div>
    `,
  }),
};
