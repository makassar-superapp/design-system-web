import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent } from "vue";

const Shadows = defineComponent({
  name: "Shadows",
  template: `
    <div class="p-8 space-y-12 bg-gray-50 min-h-screen">
      <div>
        <h2 class="text-3xl font-bold mb-2">Shadows</h2>
        <p class="text-text-medium mb-8">Shadow tokens provide visual depth and hierarchy to UI elements.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="space-y-4">
            <div class="bg-white p-8 rounded-lg shadow-sm h-32 flex items-center justify-center">
              <p class="text-lg font-semibold text-text-high">shadow-sm</p>
            </div>
            <div class="space-y-2">
              <p class="font-medium text-sm">Small Shadow</p>
              <code class="text-xs bg-white px-3 py-1 rounded border border-border inline-block">class="shadow-sm"</code>
              <p class="text-xs text-text-medium">Subtle shadow for slight elevation</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-white p-8 rounded-lg shadow h-32 flex items-center justify-center">
              <p class="text-lg font-semibold text-text-high">shadow</p>
            </div>
            <div class="space-y-2">
              <p class="font-medium text-sm">Default Shadow</p>
              <code class="text-xs bg-white px-3 py-1 rounded border border-border inline-block">class="shadow"</code>
              <p class="text-xs text-text-medium">Standard shadow for basic elevation</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-white p-8 rounded-lg shadow-md h-32 flex items-center justify-center">
              <p class="text-lg font-semibold text-text-high">shadow-md</p>
            </div>
            <div class="space-y-2">
              <p class="font-medium text-sm">Medium Shadow</p>
              <code class="text-xs bg-white px-3 py-1 rounded border border-border inline-block">class="shadow-md"</code>
              <p class="text-xs text-text-medium">Medium shadow for cards and panels</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-white p-8 rounded-lg shadow-lg h-32 flex items-center justify-center">
              <p class="text-lg font-semibold text-text-high">shadow-lg</p>
            </div>
            <div class="space-y-2">
              <p class="font-medium text-sm">Large Shadow</p>
              <code class="text-xs bg-white px-3 py-1 rounded border border-border inline-block">class="shadow-lg"</code>
              <p class="text-xs text-text-medium">Large shadow for prominent elements</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-white p-8 rounded-lg shadow-xl h-32 flex items-center justify-center">
              <p class="text-lg font-semibold text-text-high">shadow-xl</p>
            </div>
            <div class="space-y-2">
              <p class="font-medium text-sm">Extra Large Shadow</p>
              <code class="text-xs bg-white px-3 py-1 rounded border border-border inline-block">class="shadow-xl"</code>
              <p class="text-xs text-text-medium">XL shadow for floating elements</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-white p-8 rounded-lg shadow-2xl h-32 flex items-center justify-center">
              <p class="text-lg font-semibold text-text-high">shadow-2xl</p>
            </div>
            <div class="space-y-2">
              <p class="font-medium text-sm">2XL Shadow</p>
              <code class="text-xs bg-white px-3 py-1 rounded border border-border inline-block">class="shadow-2xl"</code>
              <p class="text-xs text-text-medium">Maximum shadow for modals and overlays</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-6">Usage Examples</h2>
        
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="font-semibold text-lg mb-2">Flat Card (shadow-sm)</h3>
            <p class="text-text-medium">Used for cards that need minimal elevation, like list items or inline content.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold text-lg mb-2">Standard Card (shadow-md)</h3>
            <p class="text-text-medium">Perfect for content cards, dashboard panels, and form containers.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="font-semibold text-lg mb-2">Elevated Card (shadow-lg)</h3>
            <p class="text-text-medium">Great for featured content, call-to-action sections, or important notifications.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-2xl">
            <h3 class="font-semibold text-lg mb-2">Floating Element (shadow-2xl)</h3>
            <p class="text-text-medium">Ideal for modals, dropdowns, popovers, and elements that float above other content.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-6">Interactive Example</h2>
        
        <div class="bg-white p-8 rounded-lg shadow-md">
          <p class="text-text-medium mb-4">Hover over the cards below to see shadow transitions:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-border">
              <div class="w-12 h-12 bg-primary rounded-lg mb-4"></div>
              <h4 class="font-semibold mb-2">Hover Effect</h4>
              <p class="text-sm text-text-medium">sm → lg</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-border">
              <div class="w-12 h-12 bg-success rounded-lg mb-4"></div>
              <h4 class="font-semibold mb-2">Hover Effect</h4>
              <p class="text-sm text-text-medium">md → xl</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-border">
              <div class="w-12 h-12 bg-info rounded-lg mb-4"></div>
              <h4 class="font-semibold mb-2">Hover Effect</h4>
              <p class="text-sm text-text-medium">lg → 2xl</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-6">CSS Values</h2>
        
        <div class="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 font-semibold">Token</th>
                <th class="text-left py-3 px-4 font-semibold">CSS Value</th>
              </tr>
            </thead>
            <tbody class="font-mono text-xs">
              <tr class="border-b border-border">
                <td class="py-3 px-4">shadow-sm</td>
                <td class="py-3 px-4 text-text-medium">0 1px 2px 0 rgba(10, 13, 18, 0.05)</td>
              </tr>
              <tr class="border-b border-border">
                <td class="py-3 px-4">shadow-md</td>
                <td class="py-3 px-4 text-text-medium">0 2px 4px -2px rgba(10, 13, 18, 0.05), 0 2px 4px -1px rgba(10, 13, 18, 0.05)</td>
              </tr>
              <tr class="border-b border-border">
                <td class="py-3 px-4">shadow-lg</td>
                <td class="py-3 px-4 text-text-medium">0 10px 15px -3px rgba(10, 13, 18, 0.06), 0 4px 6px -4px rgba(10, 13, 18, 0.06)</td>
              </tr>
              <tr class="border-b border-border">
                <td class="py-3 px-4">shadow-xl</td>
                <td class="py-3 px-4 text-text-medium">0 20px 25px -5px rgba(10, 13, 18, 0.06), 0 8px 10px -6px rgba(10, 13, 18, 0.06)</td>
              </tr>
              <tr>
                <td class="py-3 px-4">shadow-2xl</td>
                <td class="py-3 px-4 text-text-medium">0 25px 50px -12px rgba(10, 13, 18, 0.2)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
