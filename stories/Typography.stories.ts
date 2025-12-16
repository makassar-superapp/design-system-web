import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent } from "vue";

const Typography = defineComponent({
  name: "Typography",
  template: `
    <div class="max-w-7xl mx-auto p-8 space-y-16">
      <!-- Font Families -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Font Families</h2>
        <p class="text-text-medium mb-6">Typography scale using Montserrat and Open Sans.</p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Preview</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="py-3 px-4">
                  <code class="text-sm font-mono text-blue-600">font-montserrat</code>
                </td>
                <td class="py-3 px-4">
                  <p class="font-montserrat text-lg">The quick brown fox jumps over the lazy dog</p>
                </td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <code class="text-sm font-mono text-blue-600">font-opensans</code>
                </td>
                <td class="py-3 px-4">
                  <p class="font-opensans text-lg">The quick brown fox jumps over the lazy dog</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Font Weights -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Font Weights</h2>
        <p class="text-text-medium mb-6">Available font weight utilities.</p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Weight</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Preview</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">font-light</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">300</td>
                <td class="py-3 px-4"><span class="font-light">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">font-normal</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">400</td>
                <td class="py-3 px-4"><span class="font-normal">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">font-medium</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">500</td>
                <td class="py-3 px-4"><span class="font-medium">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">font-semibold</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">600</td>
                <td class="py-3 px-4"><span class="font-semibold">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">font-bold</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">700</td>
                <td class="py-3 px-4"><span class="font-bold">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">font-extrabold</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">800</td>
                <td class="py-3 px-4"><span class="font-extrabold">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">font-black</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">900</td>
                <td class="py-3 px-4"><span class="font-black">The quick brown fox</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Text Sizes -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Text Sizes</h2>
        <p class="text-text-medium mb-6">Font size scale for text hierarchy.</p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Size</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Preview</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-xs</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">0.75rem / 12px</td>
                <td class="py-3 px-4"><span class="text-xs">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-sm</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">0.875rem / 14px</td>
                <td class="py-3 px-4"><span class="text-sm">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-base</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">1rem / 16px</td>
                <td class="py-3 px-4"><span class="text-base">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-lg</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">1.125rem / 18px</td>
                <td class="py-3 px-4"><span class="text-lg">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-xl</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">1.25rem / 20px</td>
                <td class="py-3 px-4"><span class="text-xl">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-2xl</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">1.5rem / 24px</td>
                <td class="py-3 px-4"><span class="text-2xl">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-3xl</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">1.875rem / 30px</td>
                <td class="py-3 px-4"><span class="text-3xl">The quick brown fox</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-4xl</code></td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">2.25rem / 36px</td>
                <td class="py-3 px-4"><span class="text-4xl">The quick brown fox</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Text Emphasis -->
      <section>
        <h2 class="text-3xl font-bold mb-2">Text Emphasis</h2>
        <p class="text-text-medium mb-6">Semantic text colors for content hierarchy.</p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-border">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-3 px-4 text-sm font-semibold">Class</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Usage</th>
                <th class="text-left py-3 px-4 text-sm font-semibold">Preview</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-text-brand</code></td>
                <td class="py-3 px-4 text-sm text-text-medium">Brand color</td>
                <td class="py-3 px-4"><span class="text-text-brand">Sample text</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-text-high</code></td>
                <td class="py-3 px-4 text-sm text-text-medium">Primary content</td>
                <td class="py-3 px-4"><span class="text-text-high">Sample text</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-text-medium</code></td>
                <td class="py-3 px-4 text-sm text-text-medium">Secondary content</td>
                <td class="py-3 px-4"><span class="text-text-medium">Sample text</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-text-low</code></td>
                <td class="py-3 px-4 text-sm text-text-medium">Helper text</td>
                <td class="py-3 px-4"><span class="text-text-low">Sample text</span></td>
              </tr>
              <tr>
                <td class="py-3 px-4"><code class="text-sm font-mono text-blue-600">text-text-very-low</code></td>
                <td class="py-3 px-4 text-sm text-text-medium">Disabled state</td>
                <td class="py-3 px-4"><span class="text-text-very-low">Sample text</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
});

const meta = {
  title: "Design Tokens/Typography",
  component: Typography,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontsAndEmphasis: Story = {};
