import type { Meta, StoryObj } from "@storybook/vue3";
import { Badge } from ".";
import { User } from "lucide-vue-next";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    status: {
      control: "select",
      options: [
        "default",
        "processing",
        "success",
        "warning",
        "failed",
        "brand",
      ],
      description: "The status/color variant of the badge",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the badge",
    },
    shape: {
      control: "select",
      options: ["rounded", "pill"],
      description: "The shape of the badge",
    },
  },
  args: {
    status: "default",
    size: "md",
    shape: "rounded",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const FullExample: Story = {
  args: {
    status: "default",
    size: "md",
    shape: "rounded",
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: '<Badge v-bind="args">Label</Badge>',
  }),
};

export const Statuses: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Badge status="default" size="md">Label</Badge>
<Badge status="processing" size="md">Label</Badge>
<Badge status="success" size="md">Label</Badge>
<Badge status="warning" size="md">Label</Badge>
<Badge status="failed" size="md">Label</Badge>
<Badge status="brand" size="md">Label</Badge>`,
      },
    },
  },
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="md">Label</Badge>
        <Badge status="processing" size="md">Label</Badge>
        <Badge status="success" size="md">Label</Badge>
        <Badge status="warning" size="md">Label</Badge>
        <Badge status="failed" size="md">Label</Badge>
        <Badge status="brand" size="md">Label</Badge>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Badge status="default" size="sm">Label</Badge>
<Badge status="processing" size="md">Label</Badge>
<Badge status="success" size="lg">Label</Badge>`,
      },
    },
  },
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="sm">Label</Badge>
        <Badge status="processing" size="md">Label</Badge>
        <Badge status="success" size="lg">Label</Badge>
      </div>
    `,
  }),
};

export const Shapes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Badge status="default" size="md" shape="rounded">Label</Badge>
<Badge status="processing" size="md" shape="pill">Label</Badge>
<Badge status="success" size="md" shape="pill">Label</Badge>`,
      },
    },
  },
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="md" shape="rounded">Label</Badge>
        <Badge status="processing" size="md" shape="pill">Label</Badge>
        <Badge status="success" size="md" shape="pill">Label</Badge>
      </div>
    `,
  }),
};

export const WithDot: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Badge status="default" size="md" shape="pill">
  <template #icon>
    <span class="h-1.5 w-1.5 bg-primary rounded-full me-1" />
  </template>
  Label
</Badge>
<Badge status="processing" size="md" shape="pill">
  <template #icon>
    <span class="h-1.5 w-1.5 bg-primary rounded-full me-1" />
  </template>
  Label
</Badge>
<Badge status="success" size="md" shape="pill">
  <template #icon>
    <span class="h-1.5 w-1.5 bg-primary rounded-full me-1" />
  </template>
  Label
</Badge>`,
      },
    },
  },
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="md" shape="pill">
          <template #icon>
            <span class="h-1.5 w-1.5 bg-primary rounded-full me-1" />
          </template>
          Label
        </Badge>
        <Badge status="processing" size="md" shape="pill">
          <template #icon>
            <span class="h-1.5 w-1.5 bg-primary rounded-full me-1" />
          </template>
          Label
        </Badge>
        <Badge status="success" size="md" shape="pill">
          <template #icon>
            <span class="h-1.5 w-1.5 bg-primary rounded-full me-1" />
          </template>
          Label
        </Badge>
      </div>
    `,
  }),
};

export const WithIcon: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Badge status="default" size="md" shape="pill">
  <template #icon><User class="size-4" /></template>
  Label
</Badge>
<Badge status="processing" size="md" shape="pill">
  <template #icon><User class="size-4" /></template>
  Label
</Badge>
<Badge status="success" size="md" shape="pill">
  <template #icon><User class="size-4" /></template>
  Label
</Badge>`,
      },
    },
  },
  render: () => ({
    components: { Badge, User },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="md" shape="pill">
          <template #icon><User class="size-4" /></template>
          Label
        </Badge>
        <Badge status="processing" size="md" shape="pill">
          <template #icon><User class="size-4" /></template>
          Label
        </Badge>
        <Badge status="success" size="md" shape="pill">
          <template #icon><User class="size-4" /></template>
          Label
        </Badge>
      </div>
    `,
  }),
};

export const WithAvatar: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Badge status="default" size="md" shape="pill">
  <template #avatar>
    <img
      src="https://picsum.photos/id/64/16/16"
      class="size-4 rounded-full border"
    />
  </template>
  Label
</Badge>
<Badge status="processing" size="md" shape="pill">
  <template #avatar>
    <img
      src="https://picsum.photos/id/1025/16/16"
      class="size-4 rounded-full border"
    />
  </template>
  Label
</Badge>
<Badge status="success" size="md" shape="pill">
  <template #avatar>
    <img
      src="https://picsum.photos/id/1027/16/16"
      class="size-4 rounded-full border"
    />
  </template>
  Label
</Badge>`,
      },
    },
  },
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="md" shape="pill">
          <template #avatar>
            <img
              src="https://picsum.photos/id/64/16/16"
              class="size-4 rounded-full border"
            />
          </template>
          Label
        </Badge>
        <Badge status="processing" size="md" shape="pill">
          <template #avatar>
            <img
              src="https://picsum.photos/id/1025/16/16"
              class="size-4 rounded-full border"
            />
          </template>
          Label
        </Badge>
        <Badge status="success" size="md" shape="pill">
          <template #avatar>
            <img
              src="https://picsum.photos/id/1027/16/16"
              class="size-4 rounded-full border"
            />
          </template>
          Label
        </Badge>
      </div>
    `,
  }),
};
