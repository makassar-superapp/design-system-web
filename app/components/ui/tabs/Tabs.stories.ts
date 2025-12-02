import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Tabs, TabsList, TabsTrigger, TabsContent } from ".";
import { User } from "lucide-vue-next";
import { ChipCount } from "@/components/ui/chips";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["line", "segmented"],
      description: "The visual style variant of the tabs",
    },
    modelValue: {
      control: "text",
      description: "The value of the currently active tab",
    },
    defaultValue: {
      control: "text",
      description: "The default active tab value",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const FullExample: Story = {
  args: {
    variant: "line",
    defaultValue: "tab1",
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Content for Tab 1
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Content for Tab 2
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Content for Tab 3
          </div>
        </TabsContent>
      </Tabs>
    `,
  }),
};

export const LineVariant: Story = {
  args: {
    variant: "line",
    defaultValue: "overview",
  },
  render: (args) => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Overview content
          </div>
        </TabsContent>
        <TabsContent value="details">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Details content
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Settings content
          </div>
        </TabsContent>
      </Tabs>
    `,
  }),
};

export const SegmentedVariant: Story = {
  args: {
    variant: "segmented",
    defaultValue: "profile",
  },
  render: (args) => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Profile content
          </div>
        </TabsContent>
        <TabsContent value="security">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Security content
          </div>
        </TabsContent>
      </Tabs>
    `,
  }),
};

export const WithIcons: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Tabs variant="line" defaultValue="one">
  <TabsList>
    <TabsTrigger value="one">
      <span class="inline-flex items-center gap-2">
        <User class="size-4" />
        <span>Tab Title</span>
      </span>
    </TabsTrigger>
    <TabsTrigger value="two">
      <span class="inline-flex items-center gap-2">
        <User class="size-4" />
        <span>Tab Title</span>
      </span>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="one">Content for Tab 1</TabsContent>
  <TabsContent value="two">Content for Tab 2</TabsContent>
</Tabs>`,
      },
    },
  },
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent, User },
    template: `
      <Tabs variant="line" defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">
            <span class="inline-flex items-center gap-2">
              <User class="size-4 text-gray-900 group-aria-selected:text-red-700" />
              <span>Tab Title</span>
            </span>
          </TabsTrigger>
          <TabsTrigger value="two">
            <span class="inline-flex items-center gap-2">
              <User class="size-4 text-gray-900 group-aria-selected:text-red-700" />
              <span>Tab Title</span>
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="one">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Content for Tab 1
          </div>
        </TabsContent>
        <TabsContent value="two">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Content for Tab 2
          </div>
        </TabsContent>
      </Tabs>
    `,
  }),
};

export const WithIconsAndChips: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Tabs variant="segmented" defaultValue="one">
  <TabsList>
    <TabsTrigger value="one">
      <span class="inline-flex items-center justify-center gap-2">
        <User class="size-4" />
        <span>Tab Title</span>
        <ChipCount size="sm" :value="2" />
      </span>
    </TabsTrigger>
    <TabsTrigger value="two">
      <span class="inline-flex items-center justify-center gap-2">
        <User class="size-4" />
        <span>Tab Title</span>
        <ChipCount size="sm" :value="5" />
      </span>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="one">Content for Tab 1</TabsContent>
  <TabsContent value="two">Content for Tab 2</TabsContent>
</Tabs>`,
      },
    },
  },
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent, User, ChipCount },
    template: `
      <Tabs variant="segmented" defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">
            <span class="inline-flex items-center justify-center gap-2">
              <User class="size-4 text-gray-900 group-aria-selected:text-red-700" />
              <span>Tab Title</span>
              <ChipCount size="sm" :value="2" class="ml-2" />
            </span>
          </TabsTrigger>
          <TabsTrigger value="two">
            <span class="inline-flex items-center justify-center gap-2">
              <User class="size-4 text-gray-900 group-aria-selected:text-red-700" />
              <span>Tab Title</span>
              <ChipCount size="sm" :value="5" class="ml-2" />
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="one">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Content for Tab 1
          </div>
        </TabsContent>
        <TabsContent value="two">
          <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
            Content for Tab 2
          </div>
        </TabsContent>
      </Tabs>
    `,
  }),
};

export const Controlled: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue';

const activeTab = ref('first');
</script>

<template>
  <Tabs v-model="activeTab" variant="line">
    <TabsList>
      <TabsTrigger value="first">First</TabsTrigger>
      <TabsTrigger value="second">Second</TabsTrigger>
      <TabsTrigger value="third">Third</TabsTrigger>
    </TabsList>
    <TabsContent value="first">First tab content</TabsContent>
    <TabsContent value="second">Second tab content</TabsContent>
    <TabsContent value="third">Third tab content</TabsContent>
  </Tabs>
</template>`,
      },
    },
  },
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      const activeTab = ref("first");
      return { activeTab };
    },
    template: `
      <div>
        <p class="mb-4 text-sm text-gray-600">Active tab: {{ activeTab }}</p>
        <Tabs v-model="activeTab" variant="line">
          <TabsList>
            <TabsTrigger value="first">First</TabsTrigger>
            <TabsTrigger value="second">Second</TabsTrigger>
            <TabsTrigger value="third">Third</TabsTrigger>
          </TabsList>
          <TabsContent value="first">
            <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
              First tab content
            </div>
          </TabsContent>
          <TabsContent value="second">
            <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
              Second tab content
            </div>
          </TabsContent>
          <TabsContent value="third">
            <div class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500">
              Third tab content
            </div>
          </TabsContent>
        </Tabs>
      </div>
    `,
  }),
};
