import type { Meta, StoryObj } from "@storybook/vue3";
import Separator from "./Separator.vue";

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the separator",
    },
    decorative: {
      control: "boolean",
      description: "Whether the separator is decorative",
    },
  },
  args: {
    orientation: "horizontal",
    decorative: true,
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Separator />`,
      },
    },
  },
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-full max-w-md space-y-4">
        <div>
          <h4 class="text-sm font-medium">Radix Primitives</h4>
          <p class="text-sm text-muted-foreground">An open-source UI component library.</p>
        </div>
        <Separator />
        <div>
          <h4 class="text-sm font-medium">Vue Components</h4>
          <p class="text-sm text-muted-foreground">Built with Headless UI and Tailwind CSS.</p>
        </div>
      </div>
    `,
  }),
};

export const Vertical: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Separator orientation="vertical" class="h-16" />`,
      },
    },
  },
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex items-center space-x-4">
        <span class="text-sm">Item 1</span>
        <Separator orientation="vertical" class="h-6" />
        <span class="text-sm">Item 2</span>
        <Separator orientation="vertical" class="h-6" />
        <span class="text-sm">Item 3</span>
      </div>
    `,
  }),
};

export const InList: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="space-y-2">
  <div>Item 1</div>
  <Separator />
  <div>Item 2</div>
  <Separator />
  <div>Item 3</div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-full max-w-sm">
        <div class="space-y-1">
          <div class="px-4 py-2">
            <h4 class="text-sm font-medium leading-none">Settings</h4>
          </div>
          <Separator />
          <div class="px-4 py-2 text-sm">Profile</div>
          <Separator />
          <div class="px-4 py-2 text-sm">Billing</div>
          <Separator />
          <div class="px-4 py-2 text-sm">Notifications</div>
          <Separator />
          <div class="px-4 py-2 text-sm">Privacy</div>
        </div>
      </div>
    `,
  }),
};

export const InFlex: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>Source</div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    `,
  }),
};
