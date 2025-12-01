import type { Meta, StoryObj } from "@storybook/vue3";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
      description: "The HTML element to render",
    },
    kind: {
      control: "select",
      options: ["big-title", "title", "body", "notes"],
      description: "The typography kind",
    },
    size: {
      control: "select",
      options: [
        "72",
        "60",
        "48",
        "36",
        "30",
        "24",
        "22",
        "20",
        "18",
        "16",
        "14",
        "12",
        "10",
      ],
      description: "The font size",
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
      description: "The font weight",
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "Tertiary",
        "brand",
        "destructive",
        "success",
        "warning",
        "error",
        "white",
      ],
      description: "The text color",
    },
  },
  args: {
    as: "p",
    kind: "body",
    size: "14",
    weight: "regular",
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const FullExample: Story = {
  args: {
    as: "p",
    kind: "body",
    size: "14",
    weight: "regular",
    color: "primary",
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: '<Text v-bind="args">Placeholder Text</Text>',
  }),
};

export const BigTitle: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Text kind="big-title" size="72" weight="bold">Placeholder Text</Text>
<Text kind="big-title" size="60" weight="semibold">Placeholder Text</Text>
<Text kind="big-title" size="48" weight="medium">Placeholder Text</Text>
<Text kind="big-title" size="36" weight="regular">Placeholder Text</Text>
<Text kind="big-title" size="30" weight="bold">Placeholder Text</Text>
<Text kind="big-title" size="24" weight="bold">Placeholder Text</Text>
<Text kind="big-title" size="22" weight="bold">Placeholder Text</Text>`,
      },
    },
  },
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-2">
        <Text kind="big-title" size="72" weight="bold">Placeholder Text</Text>
        <Text kind="big-title" size="60" weight="semibold">Placeholder Text</Text>
        <Text kind="big-title" size="48" weight="medium">Placeholder Text</Text>
        <Text kind="big-title" size="36" weight="regular">Placeholder Text</Text>
        <Text kind="big-title" size="30" weight="bold">Placeholder Text</Text>
        <Text kind="big-title" size="24" weight="bold">Placeholder Text</Text>
        <Text kind="big-title" size="22" weight="bold">Placeholder Text</Text>
      </div>
    `,
  }),
};

export const Title: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Text kind="title" size="20" weight="bold">Placeholder Text</Text>
<Text kind="title" size="20" weight="semibold">Placeholder Text</Text>
<Text kind="title" size="20" weight="regular">Placeholder Text</Text>
<Text kind="title" size="18" weight="bold">Placeholder Text</Text>
<Text kind="title" size="18" weight="semibold">Placeholder Text</Text>
<Text kind="title" size="18" weight="regular">Placeholder Text</Text>
<Text kind="title" size="16" weight="bold">Placeholder Text</Text>
<Text kind="title" size="16" weight="semibold">Placeholder Text</Text>
<Text kind="title" size="16" weight="regular">Placeholder Text</Text>`,
      },
    },
  },
  render: () => ({
    components: { Text },
    template: `
      <div class="grid grid-cols-3 gap-2">
        <Text kind="title" size="20" weight="bold">Placeholder Text</Text>
        <Text kind="title" size="20" weight="semibold">Placeholder Text</Text>
        <Text kind="title" size="20" weight="regular">Placeholder Text</Text>
        <Text kind="title" size="18" weight="bold">Placeholder Text</Text>
        <Text kind="title" size="18" weight="semibold">Placeholder Text</Text>
        <Text kind="title" size="18" weight="regular">Placeholder Text</Text>
        <Text kind="title" size="16" weight="bold">Placeholder Text</Text>
        <Text kind="title" size="16" weight="semibold">Placeholder Text</Text>
        <Text kind="title" size="16" weight="regular">Placeholder Text</Text>
      </div>
    `,
  }),
};

export const Body: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Text kind="body" size="14" color="primary">Placeholder Text</Text>
<Text kind="body" size="14" color="secondary">Placeholder Text</Text>
<Text kind="body" size="14" color="Tertiary">Placeholder Text</Text>
<Text kind="body" size="14" color="brand">Placeholder Text</Text>
<Text kind="body" size="14" color="destructive">Placeholder Text</Text>
<Text kind="body" size="14" color="success">Placeholder Text</Text>
<Text kind="body" size="14" color="warning">Placeholder Text</Text>`,
      },
    },
  },
  render: () => ({
    components: { Text },
    template: `
      <div class="grid grid-cols-7 gap-2">
        <Text kind="body" size="14" color="primary">Placeholder Text</Text>
        <Text kind="body" size="14" color="secondary">Placeholder Text</Text>
        <Text kind="body" size="14" color="Tertiary">Placeholder Text</Text>
        <Text kind="body" size="14" color="brand">Placeholder Text</Text>
        <Text kind="body" size="14" color="destructive">Placeholder Text</Text>
        <Text kind="body" size="14" color="success">Placeholder Text</Text>
        <Text kind="body" size="14" color="warning">Placeholder Text</Text>
      </div>
    `,
  }),
};

export const Notes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Text kind="notes" size="12" color="primary">Placeholder Text</Text>
<Text kind="notes" size="12" color="secondary">Placeholder Text</Text>
<Text kind="notes" size="12" color="Tertiary">Placeholder Text</Text>
<Text kind="notes" size="12" color="brand">Placeholder Text</Text>
<Text kind="notes" size="12" color="destructive">Placeholder Text</Text>
<Text kind="notes" size="12" color="success">Placeholder Text</Text>
<Text kind="notes" size="12" color="warning">Placeholder Text</Text>`,
      },
    },
  },
  render: () => ({
    components: { Text },
    template: `
      <div class="grid grid-cols-7 gap-2">
        <Text kind="notes" size="12" color="primary">Placeholder Text</Text>
        <Text kind="notes" size="12" color="secondary">Placeholder Text</Text>
        <Text kind="notes" size="12" color="Tertiary">Placeholder Text</Text>
        <Text kind="notes" size="12" color="brand">Placeholder Text</Text>
        <Text kind="notes" size="12" color="destructive">Placeholder Text</Text>
        <Text kind="notes" size="12" color="success">Placeholder Text</Text>
        <Text kind="notes" size="12" color="warning">Placeholder Text</Text>
      </div>
    `,
  }),
};

export const Weights: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Text kind="body" size="14" weight="regular">Regular Weight</Text>
<Text kind="body" size="14" weight="medium">Medium Weight</Text>
<Text kind="body" size="14" weight="semibold">Semibold Weight</Text>
<Text kind="body" size="14" weight="bold">Bold Weight</Text>`,
      },
    },
  },
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-2">
        <Text kind="body" size="14" weight="regular">Regular Weight</Text>
        <Text kind="body" size="14" weight="medium">Medium Weight</Text>
        <Text kind="body" size="14" weight="semibold">Semibold Weight</Text>
        <Text kind="body" size="14" weight="bold">Bold Weight</Text>
      </div>
    `,
  }),
};

export const Colors: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Text kind="body" size="14" color="primary">Primary Color</Text>
<Text kind="body" size="14" color="secondary">Secondary Color</Text>
<Text kind="body" size="14" color="Tertiary">Tertiary Color</Text>
<Text kind="body" size="14" color="brand">Brand Color</Text>
<Text kind="body" size="14" color="destructive">Destructive Color</Text>
<Text kind="body" size="14" color="success">Success Color</Text>
<Text kind="body" size="14" color="warning">Warning Color</Text>
<div class="bg-gray-800 p-2 rounded">
  <Text kind="body" size="14" color="white">White Color</Text>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-2">
        <Text kind="body" size="14" color="primary">Primary Color</Text>
        <Text kind="body" size="14" color="secondary">Secondary Color</Text>
        <Text kind="body" size="14" color="Tertiary">Tertiary Color</Text>
        <Text kind="body" size="14" color="brand">Brand Color</Text>
        <Text kind="body" size="14" color="destructive">Destructive Color</Text>
        <Text kind="body" size="14" color="success">Success Color</Text>
        <Text kind="body" size="14" color="warning">Warning Color</Text>
        <div class="bg-gray-800 p-2 rounded">
          <Text kind="body" size="14" color="white">White Color</Text>
        </div>
      </div>
    `,
  }),
};

export const CustomElement: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Text as="h1" kind="big-title" size="48" weight="bold">Heading 1</Text>
<Text as="h2" kind="title" size="24" weight="semibold">Heading 2</Text>
<Text as="p" kind="body" size="14" weight="regular">Paragraph</Text>
<Text as="span" kind="notes" size="12" weight="regular">Span</Text>`,
      },
    },
  },
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-2">
        <Text as="h1" kind="big-title" size="48" weight="bold">Heading 1</Text>
        <Text as="h2" kind="title" size="24" weight="semibold">Heading 2</Text>
        <Text as="p" kind="body" size="14" weight="regular">Paragraph</Text>
        <Text as="span" kind="notes" size="12" weight="regular">Span</Text>
      </div>
    `,
  }),
};
