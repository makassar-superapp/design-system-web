import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent } from "vue";

const Shadows = defineComponent({
  name: "Shadows",
  template: `
    <div class="max-w-7xl mx-auto p-8 space-y-16">
      <!-- Box Shadow -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Box Shadow</h2>
        <p class="text-text-medium mb-6">Utilities for controlling the box shadow of an element.</p>
        
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
                <td class="py-4 px-4">
                  <code class="text-sm font-mono text-blue-600">shadow-sm</code>
                </td>
                <td class="py-4 px-4">
                  <code class="text-xs font-mono text-text-medium">box-shadow: 0 1px 2px 0 rgba(10, 13, 18, 0.05);</code>
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4">
                  <code class="text-sm font-mono text-blue-600">shadow</code>
                </td>
                <td class="py-4 px-4">
                  <code class="text-xs font-mono text-text-medium">box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);</code>
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4">
                  <code class="text-sm font-mono text-blue-600">shadow-md</code>
                </td>
                <td class="py-4 px-4">
                  <code class="text-xs font-mono text-text-medium">box-shadow: 0 2px 4px -2px rgba(10, 13, 18, 0.05), 0 2px 4px -1px rgba(10, 13, 18, 0.05);</code>
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4">
                  <code class="text-sm font-mono text-blue-600">shadow-lg</code>
                </td>
                <td class="py-4 px-4">
                  <code class="text-xs font-mono text-text-medium">box-shadow: 0 10px 15px -3px rgba(10, 13, 18, 0.06), 0 4px 6px -4px rgba(10, 13, 18, 0.06);</code>
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4">
                  <code class="text-sm font-mono text-blue-600">shadow-xl</code>
                </td>
                <td class="py-4 px-4">
                  <code class="text-xs font-mono text-text-medium">box-shadow: 0 20px 25px -5px rgba(10, 13, 18, 0.06), 0 8px 10px -6px rgba(10, 13, 18, 0.06);</code>
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4">
                  <code class="text-sm font-mono text-blue-600">shadow-2xl</code>
                </td>
                <td class="py-4 px-4">
                  <code class="text-xs font-mono text-text-medium">box-shadow: 0 25px 50px -12px rgba(10, 13, 18, 0.2);</code>
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4">
                  <code class="text-sm font-mono text-blue-600">shadow-none</code>
                </td>
                <td class="py-4 px-4">
                  <code class="text-xs font-mono text-text-medium">box-shadow: 0 0 #0000;</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Visual Examples -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Examples</h2>
        <p class="text-text-medium mb-6">Visual preview of shadow utilities.</p>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div class="space-y-2">
            <div class="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-24">
              <p class="text-sm font-medium text-text-high">shadow-sm</p>
            </div>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded inline-block">shadow-sm</code>
          </div>

          <div class="space-y-2">
            <div class="bg-white p-8 rounded-lg shadow flex items-center justify-center h-24">
              <p class="text-sm font-medium text-text-high">shadow</p>
            </div>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded inline-block">shadow</code>
          </div>

          <div class="space-y-2">
            <div class="bg-white p-8 rounded-lg shadow-md flex items-center justify-center h-24">
              <p class="text-sm font-medium text-text-high">shadow-md</p>
            </div>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded inline-block">shadow-md</code>
          </div>

          <div class="space-y-2">
            <div class="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center h-24">
              <p class="text-sm font-medium text-text-high">shadow-lg</p>
            </div>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded inline-block">shadow-lg</code>
          </div>

          <div class="space-y-2">
            <div class="bg-white p-8 rounded-lg shadow-xl flex items-center justify-center h-24">
              <p class="text-sm font-medium text-text-high">shadow-xl</p>
            </div>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded inline-block">shadow-xl</code>
          </div>

          <div class="space-y-2">
            <div class="bg-white p-8 rounded-lg shadow-2xl flex items-center justify-center h-24">
              <p class="text-sm font-medium text-text-high">shadow-2xl</p>
            </div>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded inline-block">shadow-2xl</code>
          </div>
        </div>
      </section>
    </div>
  `,
});

const meta = {
  title: "Design Tokens/Shadows",
  component: Shadows,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Shadows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllShadows: Story = {};
