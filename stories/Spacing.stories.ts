import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent } from "vue";

const Spacing = defineComponent({
  name: "Spacing",
  template: `
    <div class="max-w-7xl mx-auto p-8 space-y-16">
      <!-- Border Radius -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Border Radius</h2>
        <p class="text-text-medium mb-6">Utilities for controlling the border radius of an element.</p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Styles</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="py-4 px-4"><code class="text-sm font-mono text-blue-600">rounded-none</code></td>
                <td class="py-4 px-4"><code class="text-xs font-mono text-text-medium">border-radius: 0px;</code></td>
              </tr>
              <tr>
                <td class="py-4 px-4"><code class="text-sm font-mono text-blue-600">rounded-sm</code></td>
                <td class="py-4 px-4"><code class="text-xs font-mono text-text-medium">border-radius: 0.125rem; /* 2px */</code></td>
              </tr>
              <tr>
                <td class="py-4 px-4"><code class="text-sm font-mono text-blue-600">rounded</code></td>
                <td class="py-4 px-4"><code class="text-xs font-mono text-text-medium">border-radius: 0.25rem; /* 4px */</code></td>
              </tr>
              <tr>
                <td class="py-4 px-4"><code class="text-sm font-mono text-blue-600">rounded-md</code></td>
                <td class="py-4 px-4"><code class="text-xs font-mono text-text-medium">border-radius: 0.375rem; /* 6px */</code></td>
              </tr>
              <tr>
                <td class="py-4 px-4"><code class="text-sm font-mono text-blue-600">rounded-lg</code></td>
                <td class="py-4 px-4"><code class="text-xs font-mono text-text-medium">border-radius: 0.5rem; /* 8px */</code></td>
              </tr>
              <tr>
                <td class="py-4 px-4"><code class="text-sm font-mono text-blue-600">rounded-xl</code></td>
                <td class="py-4 px-4"><code class="text-xs font-mono text-text-medium">border-radius: 0.75rem; /* 12px */</code></td>
              </tr>
              <tr>
                <td class="py-4 px-4"><code class="text-sm font-mono text-blue-600">rounded-2xl</code></td>
                <td class="py-4 px-4"><code class="text-xs font-mono text-text-medium">border-radius: 1rem; /* 16px */</code></td>
              </tr>
              <tr>
                <td class="py-4 px-4"><code class="text-sm font-mono text-blue-600">rounded-3xl</code></td>
                <td class="py-4 px-4"><code class="text-xs font-mono text-text-medium">border-radius: 1.5rem; /* 24px */</code></td>
              </tr>
              <tr>
                <td class="py-4 px-4"><code class="text-sm font-mono text-blue-600">rounded-full</code></td>
                <td class="py-4 px-4"><code class="text-xs font-mono text-text-medium">border-radius: 9999px;</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Spacing Scale -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Spacing Scale</h2>
        <p class="text-text-medium mb-6">Spacing scale for padding, margin, and gap utilities (1 unit = 0.25rem = 4px).</p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Size</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr v-for="size in [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64]" :key="size">
                <td class="py-3 px-4">
                  <div class="flex gap-2">
                    <code class="text-sm font-mono text-blue-600">p-{{ size }}</code>
                    <code class="text-sm font-mono text-blue-600">m-{{ size }}</code>
                    <code class="text-sm font-mono text-blue-600">gap-{{ size }}</code>
                  </div>
                </td>
                <td class="py-3 px-4">
                  <code class="text-xs font-mono text-text-medium">{{ size * 0.25 }}rem ({{ size * 4 }}px)</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
});

const meta = {
  title: "Design Tokens/Spacing",
  component: Spacing,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadiusAndScale: Story = {};
