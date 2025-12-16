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
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-gray-100 ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-gray-100</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#F5F5F5</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-gray-200 ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-gray-200</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#C9C9C9</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-gray-300 ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-gray-300</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#9B9B9B</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-gray-400 ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-gray-400</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#737373</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-gray-500 ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-gray-500</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#525252</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-gray-600 ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-gray-600</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#404040</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-gray-700 ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-gray-700</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#212121</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-gray-800 ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-gray-800</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#171717</td>
              </tr>
              <tr>
                <td class="py-3 px-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded bg-gray-900 ring-1 ring-black/5"></div>
                    <code class="text-sm font-mono text-blue-600">bg-gray-900</code>
                  </div>
                </td>
                <td class="py-3 px-4 font-mono text-sm text-text-medium">#0A0A0A</td>
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
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-red-200 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-red-200</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#F8C59D</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-red-500 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-red-500</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#C1360F</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-red-600 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-red-600</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#A5210A</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-red-700 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-red-700</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#8A1107</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-red-800 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-red-800</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#6F0404</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-red-900 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-red-900</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#5C0209</td>
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
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-green-500 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-green-500</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#3CB231</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-green-600 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-green-600</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#249923</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-green-700 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-green-700</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#188020</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-green-800 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-green-800</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#0F671D</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-green-900 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-green-900</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#09551B</td>
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
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-blue-500 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-blue-500</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#008593</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-blue-600 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-blue-600</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#00687E</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-blue-700 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-blue-700</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#004E69</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-blue-800 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-blue-800</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#003855</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-blue-900 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-blue-900</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#002846</td>
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
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-orange-500 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-orange-500</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#F29C1F</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-orange-600 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-orange-600</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#D67E14</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-orange-700 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-orange-700</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#B9660E</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-orange-800 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-orange-800</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#9A4F0A</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-orange-900 ring-1 ring-black/5"></div>
                      <code class="text-sm font-mono text-blue-600">bg-orange-900</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">#833B08</td>
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
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-0" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-0</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">1%</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-5" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-5</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">5%</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-8" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-8</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">8%</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-10" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-10</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">10%</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-20" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-20</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">20%</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-30" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-30</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">30%</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-40" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-40</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">40%</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-50" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-50</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">50%</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-60" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-60</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">60%</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-70" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-70</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">70%</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-80" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-80</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">80%</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-primary-90" style="background-image: repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%); background-size: 6px 6px;"></div>
                      <code class="text-sm font-mono text-blue-600">bg-primary-90</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-text-medium">90%</td>
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
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-0 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-0</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">1%</td>
                </tr>
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-5 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-5</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">5%</td>
                </tr>
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-8 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-8</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">8%</td>
                </tr>
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-10 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-10</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">10%</td>
                </tr>
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-20 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-20</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">20%</td>
                </tr>
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-30 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-30</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">30%</td>
                </tr>
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-40 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-40</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">40%</td>
                </tr>
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-50 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-50</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">50%</td>
                </tr>
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-60 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-60</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">60%</td>
                </tr>
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-70 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-70</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">70%</td>
                </tr>
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-80 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-80</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">80%</td>
                </tr>
                <tr class="border-gray-700">
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded bg-white-90 ring-1 ring-white/20"></div>
                      <code class="text-sm font-mono text-blue-400">bg-white-90</code>
                    </div>
                  </td>
                  <td class="py-3 px-4 font-mono text-sm text-gray-400">90%</td>
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
