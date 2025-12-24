import type { Meta, StoryObj } from "@storybook/vue3";
import Skeleton from "./Skeleton.vue";

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Skeleton class="h-12 w-12 rounded-full" />
<Skeleton class="h-4 w-64" />
<Skeleton class="h-4 w-48" />`,
      },
    },
  },
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex items-center space-x-4">
        <Skeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-64" />
          <Skeleton class="h-4 w-48" />
        </div>
      </div>
    `,
  }),
};

export const CardLoading: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="space-y-2">
  <Skeleton class="h-48 w-full" />
  <Skeleton class="h-4 w-3/4" />
  <Skeleton class="h-4 w-1/2" />
</div>`,
      },
    },
  },
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="w-full max-w-sm">
        <div class="space-y-2">
          <Skeleton class="h-48 w-full rounded-lg" />
          <Skeleton class="h-4 w-3/4" />
          <Skeleton class="h-4 w-1/2" />
        </div>
      </div>
    `,
  }),
};

export const ListLoading: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="space-y-4">
  <div class="flex items-center space-x-4">
    <Skeleton class="h-12 w-12 rounded-full" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-64" />
      <Skeleton class="h-4 w-48" />
    </div>
  </div>
  <!-- Repeat for multiple items -->
</div>`,
      },
    },
  },
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="space-y-4 w-full max-w-md">
        <div v-for="i in 3" :key="i" class="flex items-center space-x-4">
          <Skeleton class="h-12 w-12 rounded-full" />
          <div class="space-y-2 flex-1">
            <Skeleton class="h-4 w-full" />
            <Skeleton class="h-4 w-4/5" />
          </div>
        </div>
      </div>
    `,
  }),
};

export const TableLoading: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="space-y-2">
  <Skeleton class="h-10 w-full" />
  <Skeleton class="h-10 w-full" />
  <Skeleton class="h-10 w-full" />
</div>`,
      },
    },
  },
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="w-full max-w-2xl">
        <div class="space-y-2">
          <Skeleton class="h-10 w-full" />
          <Skeleton class="h-10 w-full" />
          <Skeleton class="h-10 w-full" />
          <Skeleton class="h-10 w-full" />
          <Skeleton class="h-10 w-full" />
        </div>
      </div>
    `,
  }),
};

export const Shapes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<!-- Circle -->
<Skeleton class="h-12 w-12 rounded-full" />

<!-- Rounded Rectangle -->
<Skeleton class="h-12 w-48 rounded-md" />

<!-- Square -->
<Skeleton class="h-12 w-12 rounded-sm" />`,
      },
    },
  },
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex items-center gap-6">
        <div class="flex flex-col items-center gap-2">
          <Skeleton class="h-12 w-12 rounded-full" />
          <span class="text-xs text-muted-foreground">Circle</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Skeleton class="h-12 w-48 rounded-md" />
          <span class="text-xs text-muted-foreground">Rounded</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Skeleton class="h-12 w-12 rounded-sm" />
          <span class="text-xs text-muted-foreground">Square</span>
        </div>
      </div>
    `,
  }),
};

export const ComplexLayout: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="space-y-4">
  <Skeleton class="h-64 w-full" />
  <div class="grid grid-cols-3 gap-4">
    <Skeleton class="h-32" />
    <Skeleton class="h-32" />
    <Skeleton class="h-32" />
  </div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="w-full max-w-3xl space-y-4">
        <Skeleton class="h-64 w-full rounded-lg" />
        <div class="grid grid-cols-3 gap-4">
          <Skeleton class="h-32 rounded-lg" />
          <Skeleton class="h-32 rounded-lg" />
          <Skeleton class="h-32 rounded-lg" />
        </div>
        <div class="space-y-2">
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-5/6" />
          <Skeleton class="h-4 w-4/6" />
        </div>
      </div>
    `,
  }),
};
