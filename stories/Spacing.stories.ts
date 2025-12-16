import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent } from "vue";

const Spacing = defineComponent({
  name: "Spacing",
  template: `
    <div class="p-8 space-y-12 max-w-7xl mx-auto">
      <div>
        <h2 class="text-3xl font-bold mb-2">Border Radius</h2>
        <p class="text-text-medium mb-8">Border radius tokens for consistent rounded corners across components.</p>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div class="space-y-3">
            <div class="bg-primary h-24 rounded-none"></div>
            <div class="space-y-1">
              <p class="font-medium text-sm">rounded-none</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">0px</code>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-primary h-24 rounded-sm"></div>
            <div class="space-y-1">
              <p class="font-medium text-sm">rounded-sm</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">0.125rem (2px)</code>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-primary h-24 rounded"></div>
            <div class="space-y-1">
              <p class="font-medium text-sm">rounded</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">0.25rem (4px)</code>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-primary h-24 rounded-md"></div>
            <div class="space-y-1">
              <p class="font-medium text-sm">rounded-md</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">0.375rem (6px)</code>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-primary h-24 rounded-lg"></div>
            <div class="space-y-1">
              <p class="font-medium text-sm">rounded-lg</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">0.5rem (8px)</code>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-primary h-24 rounded-xl"></div>
            <div class="space-y-1">
              <p class="font-medium text-sm">rounded-xl</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">0.75rem (12px)</code>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-primary h-24 rounded-2xl"></div>
            <div class="space-y-1">
              <p class="font-medium text-sm">rounded-2xl</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">1rem (16px)</code>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-primary h-24 rounded-3xl"></div>
            <div class="space-y-1">
              <p class="font-medium text-sm">rounded-3xl</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">1.5rem (24px)</code>
            </div>
          </div>

          <div class="space-y-3">
            <div class="bg-primary h-24 w-full rounded-full"></div>
            <div class="space-y-1">
              <p class="font-medium text-sm">rounded-full</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">9999px</code>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-6">Radius Usage Examples</h2>
        
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-md border border-border">
            <h3 class="font-semibold text-lg mb-4">Cards & Panels (rounded-lg)</h3>
            <div class="flex flex-wrap gap-4">
              <div class="bg-container-high p-4 rounded-lg min-w-[200px]">
                <p class="text-sm">Card content</p>
              </div>
              <div class="bg-container-high p-4 rounded-lg min-w-[200px]">
                <p class="text-sm">Card content</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md border border-border">
            <h3 class="font-semibold text-lg mb-4">Buttons & Inputs (rounded-md)</h3>
            <div class="flex flex-wrap gap-4">
              <button class="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">Button</button>
              <input type="text" placeholder="Input field" class="border border-border px-4 py-2 rounded-md" />
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md border border-border">
            <h3 class="font-semibold text-lg mb-4">Pills & Tags (rounded-full)</h3>
            <div class="flex flex-wrap gap-3">
              <span class="bg-primary text-white px-4 py-1.5 rounded-full text-sm">Badge</span>
              <span class="bg-success text-white px-4 py-1.5 rounded-full text-sm">Tag</span>
              <span class="bg-info text-white px-4 py-1.5 rounded-full text-sm">Label</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-6">Spacing Scale</h2>
        <p class="text-text-medium mb-6">Consistent spacing scale based on Tailwind CSS defaults (1 unit = 0.25rem = 4px)</p>
        
        <div class="bg-white p-6 rounded-lg shadow-md border border-border">
          <div class="space-y-4">
            <div v-for="size in [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64]" :key="size" class="flex items-center gap-4">
              <div class="w-24 text-sm font-mono text-text-medium">{{ size }}</div>
              <div :class="'h-6 bg-primary rounded'" :style="{ width: (size * 4) + 'px' }"></div>
              <div class="text-xs text-text-medium font-mono">{{ size * 0.25 }}rem ({{ size * 4 }}px)</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-6">Spacing Utilities</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md border border-border">
            <h3 class="font-semibold text-lg mb-4">Padding Examples</h3>
            <div class="space-y-4">
              <div class="bg-container-high p-2 rounded">
                <div class="bg-primary text-white p-2 rounded text-sm">p-2 (0.5rem / 8px)</div>
              </div>
              <div class="bg-container-high p-2 rounded">
                <div class="bg-primary text-white p-4 rounded text-sm">p-4 (1rem / 16px)</div>
              </div>
              <div class="bg-container-high p-2 rounded">
                <div class="bg-primary text-white p-6 rounded text-sm">p-6 (1.5rem / 24px)</div>
              </div>
              <div class="bg-container-high p-2 rounded">
                <div class="bg-primary text-white p-8 rounded text-sm">p-8 (2rem / 32px)</div>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md border border-border">
            <h3 class="font-semibold text-lg mb-4">Gap Examples (Flexbox)</h3>
            <div class="space-y-4">
              <div class="flex gap-2">
                <div class="bg-primary text-white px-4 py-2 rounded text-sm">gap-2</div>
                <div class="bg-primary text-white px-4 py-2 rounded text-sm">8px</div>
              </div>
              <div class="flex gap-4">
                <div class="bg-primary text-white px-4 py-2 rounded text-sm">gap-4</div>
                <div class="bg-primary text-white px-4 py-2 rounded text-sm">16px</div>
              </div>
              <div class="flex gap-6">
                <div class="bg-primary text-white px-4 py-2 rounded text-sm">gap-6</div>
                <div class="bg-primary text-white px-4 py-2 rounded text-sm">24px</div>
              </div>
              <div class="flex gap-8">
                <div class="bg-primary text-white px-4 py-2 rounded text-sm">gap-8</div>
                <div class="bg-primary text-white px-4 py-2 rounded text-sm">32px</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-6">Common Spacing Patterns</h2>
        
        <div class="bg-white p-6 rounded-lg shadow-md border border-border space-y-6">
          <div>
            <p class="font-semibold mb-2">Component Internal Spacing</p>
            <div class="bg-container-high p-4 rounded-lg">
              <p class="text-sm text-text-medium">Use p-4 or p-6 for card/panel internal padding</p>
            </div>
          </div>

          <div>
            <p class="font-semibold mb-2">Stack Spacing (Vertical)</p>
            <div class="space-y-4 bg-container-high p-4 rounded-lg">
              <div class="bg-white p-3 rounded shadow-sm">Item 1</div>
              <div class="bg-white p-3 rounded shadow-sm">Item 2</div>
              <div class="bg-white p-3 rounded shadow-sm">Item 3</div>
            </div>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded inline-block mt-2">class="space-y-4"</code>
          </div>

          <div>
            <p class="font-semibold mb-2">Inline Spacing (Horizontal)</p>
            <div class="flex gap-3 bg-container-high p-4 rounded-lg">
              <button class="bg-primary text-white px-4 py-2 rounded-md">Action 1</button>
              <button class="bg-secondary text-white px-4 py-2 rounded-md">Action 2</button>
              <button class="bg-gray-600 text-white px-4 py-2 rounded-md">Action 3</button>
            </div>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded inline-block mt-2">class="flex gap-3"</code>
          </div>
        </div>
      </div>
    </div>
  `,
});

const meta = {
  title: "Design Tokens/Spacing",
  component: Spacing,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Spacing and border radius tokens for consistent layout and component styling in TDM Design System.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpacingAndRadius: Story = {
  render: () => Spacing,
};
