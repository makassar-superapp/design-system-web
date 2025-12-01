import type { Meta, StoryObj } from "@storybook/vue3";
import Alert from "./Alert.vue";
import Button from "../button/Button.vue";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "subNeutral", "info", "warning", "success", "error"],
      description: "The visual style variant of the alert",
    },
    title: {
      control: "text",
      description: "The title text of the alert",
    },
    description: {
      control: "text",
      description: "The description text of the alert",
    },
    closable: {
      control: "boolean",
      description: "Whether the alert can be closed",
    },
  },
  args: {
    title: "Alert Title",
    description: "Alert description.",
    closable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const FullExample: Story = {
  args: {
    variant: "neutral",
    title: "Alert Title",
    description: "Alert description.",
    closable: true,
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { Alert, Button },
    setup() {
      return { args };
    },
    template: `
      <Alert v-bind="args">
        <template #action>
          <Button variant="text">Action</Button>
        </template>
      </Alert>
    `,
  }),
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    title: "Neutral Alert",
    description: "This is a neutral alert message.",
  },
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
};

export const SubNeutral: Story = {
  args: {
    variant: "subNeutral",
    title: "Sub Neutral Alert",
    description: "This is a sub neutral alert message.",
  },
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    description: "This is an informational alert message.",
  },
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "This is a warning alert message.",
  },
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "This is a success alert message.",
  },
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    description: "This is an error alert message.",
  },
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Alert variant="neutral" title="Alert Title" description="Alert description." closable>
  <template #action>
    <Button variant="text">Button</Button>
  </template>
</Alert>

<Alert variant="subNeutral" title="Alert Title" description="Alert description." closable>
  <template #action>
    <Button variant="text">Button</Button>
  </template>
</Alert>

<Alert variant="info" title="Alert Title" description="Alert description." closable>
  <template #action>
    <Button variant="text">Button</Button>
  </template>
</Alert>

<Alert variant="warning" title="Alert Title" description="Alert description." closable>
  <template #action>
    <Button variant="text">Button</Button>
  </template>
</Alert>

<Alert variant="success" title="Alert Title" description="Alert description." closable>
  <template #action>
    <Button variant="text">Button</Button>
  </template>
</Alert>

<Alert variant="error" title="Alert Title" description="Alert description." closable>
  <template #action>
    <Button variant="text">Button</Button>
  </template>
</Alert>`,
      },
    },
  },
  render: () => ({
    components: { Alert, Button },
    template: `
      <div class="space-y-3">
        <Alert
          variant="neutral"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
        <Alert
          variant="subNeutral"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
        <Alert
          variant="info"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
        <Alert
          variant="warning"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
        <Alert
          variant="success"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
        <Alert
          variant="error"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
      </div>
    `,
  }),
};

export const WithAction: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  variant="info" 
  title="Update Available" 
  description="A new version is available."
  closable
>
  <template #action>
    <Button variant="text">Update Now</Button>
  </template>
</Alert>`,
      },
    },
  },
  render: () => ({
    components: { Alert, Button },
    template: `
      <Alert 
        variant="info" 
        title="Update Available" 
        description="A new version is available."
        closable
      >
        <template #action>
          <Button variant="text">Update Now</Button>
        </template>
      </Alert>
    `,
  }),
};

export const Closable: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  variant="success" 
  title="Success" 
  description="Your changes have been saved."
  closable
/>`,
      },
    },
  },
  render: () => ({
    components: { Alert },
    template: `
      <Alert 
        variant="success" 
        title="Success" 
        description="Your changes have been saved."
        closable
      />
    `,
  }),
};
