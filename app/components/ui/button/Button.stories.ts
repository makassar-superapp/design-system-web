import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";
import { Plus, Trash2, Pencil } from "lucide-vue-next";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "destructive",
        "outline",
        "ghost",
        "secondary",
        "tertiary",
        "link",
        "text",
      ],
      description: "The visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "icon", "icon-sm", "icon-lg"],
      description: "The size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    loading: {
      control: "boolean",
      description: "Whether the button is in loading state",
    },
  },
  args: {
    disabled: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FullExample: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
    loading: false,
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Example Button</Button>',
  }),
};

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Primary Button</Button>',
  }),
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "md",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Delete</Button>',
  }),
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "md",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Outline Button</Button>',
  }),
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Ghost Button</Button>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Secondary Button</Button>',
  }),
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "md",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Tertiary Button</Button>',
  }),
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "md",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Link Button</Button>',
  }),
};

export const Text: Story = {
  args: {
    variant: "text",
    size: "md",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Text Button</Button>',
  }),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`,
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>
    `,
  }),
};

export const WithIcons: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary">
  <Plus class="size-4" />
  Add Item
</Button>

<Button variant="destructive">
  <Trash2 class="size-4" />
  Delete
</Button>

<Button variant="outline">
  <Pencil class="size-4" />
  Edit
</Button>`,
      },
    },
  },
  render: () => ({
    components: { Button, Plus, Trash2, Pencil },
    template: `
      <div class="flex flex-wrap gap-3">
        <Button variant="primary">
          <Plus class="size-4" />
          Add Item
        </Button>
        <Button variant="destructive">
          <Trash2 class="size-4" />
          Delete
        </Button>
        <Button variant="outline">
          <Pencil class="size-4" />
          Edit
        </Button>
      </div>
    `,
  }),
};

export const IconOnly: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" size="icon-sm">
  <Plus class="size-4" />
</Button>

<Button variant="primary" size="icon">
  <Plus class="size-4" />
</Button>

<Button variant="primary" size="icon-lg">
  <Plus class="size-5" />
</Button>`,
      },
    },
  },
  render: () => ({
    components: { Button, Plus },
    template: `
      <div class="flex items-center gap-3">
        <Button variant="primary" size="icon-sm">
          <Plus class="size-4" />
        </Button>
        <Button variant="primary" size="icon">
          <Plus class="size-4" />
        </Button>
        <Button variant="primary" size="icon-lg">
          <Plus class="size-5" />
        </Button>
      </div>
    `,
  }),
};

export const LoadingStates: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" :loading="true">Loading</Button>
<Button variant="destructive" :loading="true">Deleting</Button>
<Button variant="outline" :loading="true">Processing</Button>
<Button variant="secondary" :loading="true">Saving</Button>`,
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-3">
        <Button variant="primary" :loading="true">Loading</Button>
        <Button variant="destructive" :loading="true">Deleting</Button>
        <Button variant="outline" :loading="true">Processing</Button>
        <Button variant="secondary" :loading="true">Saving</Button>
      </div>
    `,
  }),
};

export const DisabledStates: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" :disabled="true">Disabled Primary</Button>
<Button variant="destructive" :disabled="true">Disabled Destructive</Button>
<Button variant="outline" :disabled="true">Disabled Outline</Button>
<Button variant="secondary" :disabled="true">Disabled Secondary</Button>`,
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-3">
        <Button variant="primary" :disabled="true">Disabled Primary</Button>
        <Button variant="destructive" :disabled="true">Disabled Destructive</Button>
        <Button variant="outline" :disabled="true">Disabled Outline</Button>
        <Button variant="secondary" :disabled="true">Disabled Secondary</Button>
      </div>
    `,
  }),
};
