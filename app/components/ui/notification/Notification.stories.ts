import type { Meta, StoryObj } from "@storybook/vue3";
import Notification from "./Notification.vue";
import Button from "../button/Button.vue";

const meta: Meta<typeof Notification> = {
  title: "UI/Notification",
  component: Notification,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "info", "warning", "error"],
      description: "The visual style variant of the notification",
    },
    title: {
      control: "text",
      description: "The title text of the notification",
    },
    description: {
      control: "text",
      description: "The description text of the notification",
    },
    closable: {
      control: "boolean",
      description: "Whether the notification can be closed",
    },
  },
  args: {
    title: "Notification title",
    description: "Notification description.",
    closable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const FullExample: Story = {
  args: {
    variant: "success",
    title: "Success Notification",
    description: "This is a success notification message.",
    closable: true,
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { Notification, Button },
    setup() {
      return { args };
    },
    template: `
      <Notification v-bind="args">
        <template #action>
          <Button variant="text" class="text-red-600">Action</Button>
        </template>
      </Notification>
    `,
  }),
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "Your action was completed successfully.",
  },
  render: (args) => ({
    components: { Notification },
    setup() {
      return { args };
    },
    template: '<Notification v-bind="args" />',
  }),
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    description: "Here is some important information for you.",
  },
  render: (args) => ({
    components: { Notification },
    setup() {
      return { args };
    },
    template: '<Notification v-bind="args" />',
  }),
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "Please be aware of this important warning.",
  },
  render: (args) => ({
    components: { Notification },
    setup() {
      return { args };
    },
    template: '<Notification v-bind="args" />',
  }),
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    description: "An error occurred while processing your request.",
  },
  render: (args) => ({
    components: { Notification },
    setup() {
      return { args };
    },
    template: '<Notification v-bind="args" />',
  }),
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Notification
  variant="success"
  title="Notification title"
  description="Notification description."
  closable
>
  <template #action>
    <Button variant="text" class="text-red-600">Button</Button>
  </template>
</Notification>

<Notification
  variant="info"
  title="Notification title"
  description="Notification description."
  closable
>
  <template #action>
    <Button variant="text" class="text-red-600">Button</Button>
  </template>
</Notification>

<Notification
  variant="warning"
  title="Notification title"
  description="Notification description."
  closable
>
  <template #action>
    <Button variant="text" class="text-red-600">Button</Button>
  </template>
</Notification>

<Notification
  variant="error"
  title="Notification title"
  description="Notification description."
  closable
>
  <template #action>
    <Button variant="text" class="text-red-600">Button</Button>
  </template>
</Notification>`,
      },
    },
  },
  render: () => ({
    components: { Notification, Button },
    template: `
      <div class="space-y-5">
        <Notification
          variant="success"
          title="Notification title"
          description="Notification description."
          closable
        >
          <template #action>
            <Button variant="text" class="text-red-600">Button</Button>
          </template>
        </Notification>
        <Notification
          variant="info"
          title="Notification title"
          description="Notification description."
          closable
        >
          <template #action>
            <Button variant="text" class="text-red-600">Button</Button>
          </template>
        </Notification>
        <Notification
          variant="warning"
          title="Notification title"
          description="Notification description."
          closable
        >
          <template #action>
            <Button variant="text" class="text-red-600">Button</Button>
          </template>
        </Notification>
        <Notification
          variant="error"
          title="Notification title"
          description="Notification description."
          closable
        >
          <template #action>
            <Button variant="text" class="text-red-600">Button</Button>
          </template>
        </Notification>
      </div>
    `,
  }),
};

export const WithAction: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Notification 
  variant="info" 
  title="New Update Available" 
  description="Version 2.0 is now available."
  closable
>
  <template #action>
    <Button variant="text" class="text-red-600">Update Now</Button>
  </template>
</Notification>`,
      },
    },
  },
  render: () => ({
    components: { Notification, Button },
    template: `
      <Notification 
        variant="info" 
        title="New Update Available" 
        description="Version 2.0 is now available."
        closable
      >
        <template #action>
          <Button variant="text" class="text-red-600">Update Now</Button>
        </template>
      </Notification>
    `,
  }),
};

export const Closable: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Notification 
  variant="success" 
  title="Changes Saved" 
  description="Your changes have been saved successfully."
  closable
/>`,
      },
    },
  },
  render: () => ({
    components: { Notification },
    template: `
      <Notification 
        variant="success" 
        title="Changes Saved" 
        description="Your changes have been saved successfully."
        closable
      />
    `,
  }),
};
