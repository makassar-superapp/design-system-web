import type { Meta, StoryObj } from "@storybook/vue3";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from ".";
import Button from "../button/Button.vue";

const meta: Meta<typeof Collapsible> = {
  title: "UI/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Basic: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Collapsible>
  <CollapsibleTrigger as-child>
    <Button variant="outline">Toggle</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div class="rounded-md border px-4 py-3 text-sm">
      Content that can be collapsed
    </div>
  </CollapsibleContent>
</Collapsible>`,
      },
    },
  },
  render: () => ({
    components: { Collapsible, CollapsibleContent, CollapsibleTrigger, Button },
    template: `
      <Collapsible class="w-full max-w-md">
        <CollapsibleTrigger as-child>
          <Button variant="outline" class="w-full justify-between">
            Toggle Content
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent class="mt-2">
          <div class="rounded-md border border-border px-4 py-3 text-sm">
            This content can be collapsed and expanded by clicking the toggle button.
          </div>
        </CollapsibleContent>
      </Collapsible>
    `,
  }),
};

export const WithIcon: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<Collapsible v-model:open="isOpen">
  <CollapsibleTrigger as-child>
    <Button variant="ghost">
      <ChevronRight :class="isOpen ? 'rotate-90' : ''" />
      <span>@peduarte starred 3 repositories</span>
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div class="space-y-2">
      <!-- Repository items -->
    </div>
  </CollapsibleContent>
</Collapsible>`,
      },
    },
  },
  render: () => ({
    components: { Collapsible, CollapsibleContent, CollapsibleTrigger, Button },
    data() {
      return {
        isOpen: false,
      };
    },
    template: `
      <Collapsible v-model:open="isOpen" class="w-full max-w-md space-y-2">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger as-child>
            <Button variant="ghost" size="sm" class="w-9 p-0">
              <svg 
                class="h-4 w-4 transition-transform duration-200"
                :class="isOpen ? 'rotate-90' : ''"
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <span class="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div class="rounded-md border px-4 py-3 text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent class="space-y-2">
          <div class="rounded-md border border-border px-4 py-3 text-sm">
            @radix-ui/colors
          </div>
          <div class="rounded-md border border-border px-4 py-3 text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    `,
  }),
};

export const DefaultOpen: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Collapsible :default-open="true">
  <CollapsibleTrigger as-child>
    <Button variant="outline">Toggle</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div class="rounded-md border px-4 py-3">
      This is open by default
    </div>
  </CollapsibleContent>
</Collapsible>`,
      },
    },
  },
  render: () => ({
    components: { Collapsible, CollapsibleContent, CollapsibleTrigger, Button },
    template: `
      <Collapsible :default-open="true" class="w-full max-w-md">
        <CollapsibleTrigger as-child>
          <Button variant="outline" class="w-full justify-between">
            Toggle Content (Open by Default)
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent class="mt-2">
          <div class="rounded-md border border-border px-4 py-3 text-sm">
            This collapsible section is open by default. You can close it by clicking the button.
          </div>
        </CollapsibleContent>
      </Collapsible>
    `,
  }),
};

export const Multiple: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="space-y-4">
  <Collapsible>
    <CollapsibleTrigger>Section 1</CollapsibleTrigger>
    <CollapsibleContent>Content 1</CollapsibleContent>
  </Collapsible>
  <Collapsible>
    <CollapsibleTrigger>Section 2</CollapsibleTrigger>
    <CollapsibleContent>Content 2</CollapsibleContent>
  </Collapsible>
  <Collapsible>
    <CollapsibleTrigger>Section 3</CollapsibleTrigger>
    <CollapsibleContent>Content 3</CollapsibleContent>
  </Collapsible>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Collapsible, CollapsibleContent, CollapsibleTrigger, Button },
    template: `
      <div class="w-full max-w-md space-y-2">
        <Collapsible v-for="i in 3" :key="i">
          <CollapsibleTrigger as-child>
            <Button variant="outline" class="w-full justify-between">
              Section {{ i }}
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent class="mt-2">
            <div class="rounded-md border border-border px-4 py-3 text-sm">
              This is the content for section {{ i }}. Each collapsible works independently.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    `,
  }),
};
