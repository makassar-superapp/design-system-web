import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent } from "vue";

const ColorPalette = defineComponent({
  name: "ColorPalette",
  template: `
    <div class="max-w-7xl mx-auto p-8 space-y-16">
      <!-- Primary Colors -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Primary Colors</h2>
        <p class="text-text-medium mb-6">Core brand colors for primary actions and branding.</p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Value</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-primary ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-primary</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#B21D28</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-secondary ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-secondary</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#951429</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <code class="text-sm font-mono text-blue-600">text-primary-foreground</code>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">White text on primary background</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Semantic Colors -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Semantic Colors</h2>
        <p class="text-text-medium mb-6">Colors for communicating status and feedback.</p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Value</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-success ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-success</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#249923</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-warning ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-warning</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#F29C1F</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-info ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-info</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#4485F5</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-destructive ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-destructive</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">Error states</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Gray Scale -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Gray Scale</h2>
        <p class="text-text-medium mb-6">Neutral colors for backgrounds, borders, and text.</p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Value</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-gray-base-0 ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-gray-base-0</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#FAFAFA</td>
              </tr>
              <tr v-for="shade in [100, 200, 300, 400, 500, 600, 700, 800, 900]" :key="shade">
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div :class="'w-10 h-10 rounded bg-gray-' + shade + ' ring-1 ring-black/5'"></div>
                    <code class="text-sm font-mono text-blue-600">bg-gray-{{ shade }}</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">
                  {{ shade === 100 ? '#F5F5F5' : shade === 200 ? '#C9C9C9' : shade === 300 ? '#9B9B9B' : 
                     shade === 400 ? '#737373' : shade === 500 ? '#525252' : shade === 600 ? '#404040' :
                     shade === 700 ? '#212121' : shade === 800 ? '#171717' : '#0A0A0A' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Text Colors -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Text Colors</h2>
        <p class="text-text-medium mb-6">Text emphasis levels for content hierarchy.</p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Description</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="py-3 px-4">
                  <code class="text-sm font-mono text-blue-600">text-text-brand</code>
                </td>
                <td class="py-3 px-4">
                  <span class="text-text-brand">Brand color text</span>
                </td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <code class="text-sm font-mono text-blue-600">text-text-high</code>
                </td>
                <td class="py-3 px-4">
                  <span class="text-text-high">Primary content (highest emphasis)</span>
                </td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <code class="text-sm font-mono text-blue-600">text-text-medium</code>
                </td>
                <td class="py-3 px-4">
                  <span class="text-text-medium">Secondary content</span>
                </td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <code class="text-sm font-mono text-blue-600">text-text-low</code>
                </td>
                <td class="py-3 px-4">
                  <span class="text-text-low">Helper text, metadata</span>
                </td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <code class="text-sm font-mono text-blue-600">text-text-very-low</code>
                </td>
                <td class="py-3 px-4">
                  <span class="text-text-very-low">Disabled state</span>
                </td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <code class="text-sm font-mono text-blue-600">text-text-white</code>
                </td>
                <td class="py-3 px-4">
                  <span class="bg-gray-900 text-text-white px-2 py-1 rounded">White text for dark backgrounds</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Color Scales -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Color Scales</h2>
        <p class="text-text-medium mb-6">Extended color palette for various use cases.</p>
        
        <!-- Red Scale -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-3">Red</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-border">
              <thead>
                <tr class="border-b border-border">
                  <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                  <th class="text-left py-3 px-4 text-sm font-semibold">Value</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border">
                <tr v-for="shade in [200, 500, 600, 700, 800, 900]" :key="'red-' + shade">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div :class="'w-10 h-10 rounded bg-red-' + shade + ' ring-1 ring-black/5'"></div>
                      <code class="text-sm font-mono text-blue-600">bg-red-{{ shade }}</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">
                    {{ shade === 200 ? '#F8C59D' : shade === 500 ? '#C1360F' : shade === 600 ? '#A5210A' :
                       shade === 700 ? '#8A1107' : shade === 800 ? '#6F0404' : '#5C0209' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Green Scale -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-3">Green</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-border">
              <thead>
                <tr class="border-b border-border">
                  <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                  <th class="text-left py-3 px-4 text-sm font-semibold">Value</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border">
                <tr v-for="shade in [500, 600, 700, 800, 900]" :key="'green-' + shade">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div :class="'w-10 h-10 rounded bg-green-' + shade + ' ring-1 ring-black/5'"></div>
                      <code class="text-sm font-mono text-blue-600">bg-green-{{ shade }}</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">
                    {{ shade === 500 ? '#3CB231' : shade === 600 ? '#249923' : shade === 700 ? '#188020' :
                       shade === 800 ? '#0F671D' : '#09551B' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Blue Scale -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-3">Blue</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-border">
              <thead>
                <tr class="border-b border-border">
                  <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                  <th class="text-left py-3 px-4 text-sm font-semibold">Value</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border">
                <tr v-for="shade in [500, 600, 700, 800, 900]" :key="'blue-' + shade">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div :class="'w-10 h-10 rounded bg-blue-' + shade + ' ring-1 ring-black/5'"></div>
                      <code class="text-sm font-mono text-blue-600">bg-blue-{{ shade }}</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">
                    {{ shade === 500 ? '#008593' : shade === 600 ? '#00687E' : shade === 700 ? '#004E69' :
                       shade === 800 ? '#003855' : '#002846' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Orange Scale -->
        <div>
          <h3 class="text-lg font-semibold mb-3">Orange</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-border">
              <thead>
                <tr class="border-b border-border">
                  <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                  <th class="text-left py-3 px-4 text-sm font-semibold">Value</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border">
                <tr v-for="shade in [500, 600, 700, 800, 900]" :key="'orange-' + shade">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div :class="'w-10 h-10 rounded bg-orange-' + shade + ' ring-1 ring-black/5'"></div>
                      <code class="text-sm font-mono text-blue-600">bg-orange-{{ shade }}</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">
                    {{ shade === 500 ? '#F29C1F' : shade === 600 ? '#D67E14' : shade === 700 ? '#B9660E' :
                       shade === 800 ? '#9A4F0A' : '#833B08' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Opacity Variants -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Opacity Variants</h2>
        <p class="text-text-medium mb-6">Transparent versions of primary and white colors.</p>
        
        <!-- Primary Opacity -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-3">Primary Opacity</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-border">
              <thead>
                <tr class="border-b border-border">
                  <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                  <th class="text-left py-3 px-4 text-sm font-semibold">Opacity</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border">
                <tr v-for="opacity in [0, 5, 8, 10, 20, 30, 40, 50, 60, 70, 80, 90]" :key="'primary-' + opacity">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div :class="'w-10 h-10 rounded bg-primary-' + opacity" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-{{ opacity }}</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">{{ opacity === 0 ? '1%' : opacity }}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- White Opacity -->
        <div>
          <h3 class="text-lg font-semibold mb-3">White Opacity</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-border">
              <thead>
                <tr class="border-b border-border">
                  <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                  <th class="text-left py-3 px-4 text-sm font-semibold">Opacity</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border bg-gray-900">
                <tr v-for="opacity in [0, 5, 8, 10, 20, 30, 40, 50, 60, 70, 80, 90]" :key="'white-' + opacity" class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div :class="'w-10 h-10 rounded bg-white-' + opacity + ' ring-1 ring-white/20'"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-{{ opacity }}</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">{{ opacity === 0 ? '1%' : opacity }}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  `,
});

const meta = {
  title: "Design Tokens/Colors",
  component: ColorPalette,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {};
