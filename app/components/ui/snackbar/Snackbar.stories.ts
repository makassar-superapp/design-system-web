import type { Meta, StoryObj } from "@storybook/vue3";
import Snackbar from "./Snackbar.vue";
import Button from "../button/Button.vue";

const meta: Meta<typeof Snackbar> = {
  title: "UI/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["white", "black", "info", "warning", "destructive", "success"],
      description: "The visual style variant of the snackbar",
    },
    title: {
      control: "text",
      description: "The title text of the snackbar",
    },
    description: {
      control: "text",
      description: "The description text of the snackbar",
    },
  },
  args: {
    title: "Title",
    description: "Deskripsi",
  },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const FullExample: Story = {
  args: {
    variant: "white",
    title: "Notification Title",
    description: "This is a notification message.",
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { Snackbar, Button },
    setup() {
      return { args };
    },
    template: `
      <Snackbar v-bind="args">
        <template #action>
          <Button variant="text" class="text-red-600">Action</Button>
        </template>
      </Snackbar>
    `,
  }),
};

export const White: Story = {
  args: {
    variant: "white",
    title: "White Snackbar",
    description: "This is a white snackbar message.",
  },
  render: (args) => ({
    components: { Snackbar },
    setup() {
      return { args };
    },
    template: '<Snackbar v-bind="args" />',
  }),
};

export const Black: Story = {
  args: {
    variant: "black",
    title: "Black Snackbar",
    description: "This is a black snackbar message.",
  },
  render: (args) => ({
    components: { Snackbar },
    setup() {
      return { args };
    },
    template: '<Snackbar v-bind="args" />',
  }),
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    description: "This is an informational snackbar message.",
  },
  render: (args) => ({
    components: { Snackbar },
    setup() {
      return { args };
    },
    template: '<Snackbar v-bind="args" />',
  }),
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "This is a warning snackbar message.",
  },
  render: (args) => ({
    components: { Snackbar },
    setup() {
      return { args };
    },
    template: '<Snackbar v-bind="args" />',
  }),
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Error",
    description: "This is an error snackbar message.",
  },
  render: (args) => ({
    components: { Snackbar },
    setup() {
      return { args };
    },
    template: '<Snackbar v-bind="args" />',
  }),
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "This is a success snackbar message.",
  },
  render: (args) => ({
    components: { Snackbar },
    setup() {
      return { args };
    },
    template: '<Snackbar v-bind="args" />',
  }),
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar variant="white" title="Title" description="Deskripsi">
  <template #action>
    <Button variant="text" class="text-red-600">Action</Button>
  </template>
</Snackbar>

<Snackbar variant="black" title="Title" description="Deskripsi">
  <template #action>
    <Button variant="text" class="text-white">Action</Button>
  </template>
</Snackbar>

<Snackbar variant="info" title="Title" description="Deskripsi">
  <template #action>
    <Button variant="text" class="text-white">Action</Button>
  </template>
</Snackbar>

<Snackbar variant="warning" title="Title" description="Deskripsi">
  <template #action>
    <Button variant="text" class="text-white">Action</Button>
  </template>
</Snackbar>

<Snackbar variant="destructive" title="Title" description="Deskripsi">
  <template #action>
    <Button variant="text" class="text-white">Action</Button>
  </template>
</Snackbar>

<Snackbar variant="success" title="Title" description="Deskripsi">
  <template #action>
    <Button variant="text" class="text-white">Action</Button>
  </template>
</Snackbar>`,
      },
    },
  },
  render: () => ({
    components: { Snackbar, Button },
    template: `
      <div class="space-y-3">
        <Snackbar variant="white" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-red-600">Action</Button>
          </template>
        </Snackbar>
        <Snackbar variant="black" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-white">Action</Button>
          </template>
        </Snackbar>
        <Snackbar variant="info" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-white">Action</Button>
          </template>
        </Snackbar>
        <Snackbar variant="warning" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-white">Action</Button>
          </template>
        </Snackbar>
        <Snackbar variant="destructive" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-white">Action</Button>
          </template>
        </Snackbar>
        <Snackbar variant="success" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-white">Action</Button>
          </template>
        </Snackbar>
      </div>
    `,
  }),
};

export const WithAction: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Snackbar 
  variant="info" 
  title="File Uploaded" 
  description="Your file has been uploaded successfully."
>
  <template #action>
    <Button variant="text" class="text-white">View</Button>
  </template>
</Snackbar>`,
      },
    },
  },
  render: () => ({
    components: { Snackbar, Button },
    template: `
      <Snackbar 
        variant="info" 
        title="File Uploaded" 
        description="Your file has been uploaded successfully."
      >
        <template #action>
          <Button variant="text" class="text-white">View</Button>
        </template>
      </Snackbar>
    `,
  }),
};
