import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent } from "vue";

const Typography = defineComponent({
  name: "Typography",
  template: `
    <div class="p-8 space-y-12 max-w-7xl mx-auto">
      <!-- Font Families -->
      <div>
        <h2 class="text-3xl font-bold mb-6">Font Families</h2>
        
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-bold mb-4">Montserrat</h3>
             <code class="text-xs bg-gray-100 px-2 py-1 rounded mb-4 inline-block">font-montserrat</code>
            <div class="space-y-3">
              <p class="font-montserrat text-3xl font-bold">Bold: The quick brown fox</p>
              <p class="font-montserrat text-2xl font-semibold">Semibold: The quick brown fox</p>
              <p class="font-montserrat text-xl font-medium">Medium: The quick brown fox jumps</p>
              <p class="font-montserrat text-lg">Regular: The quick brown fox jumps over</p>
             <p class="font-montserrat text-base">Body: The quick brown fox jumps over the lazy dog. 0123456789</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-lg font-bold mb-4">Open Sans</h3>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded mb-4 inline-block">font-opensans</code>
            <div class="space-y-3">
              <p class="font-opensans text-3xl font-bold">Bold: The quick brown fox</p>
              <p class="font-opensans text-2xl font-semibold">Semibold: The quick brown fox</p>
              <p class="font-opensans text-xl font-medium">Medium: The quick brown fox jumps</p>
              <p class="font-opensans text-lg">Regular: The quick brown fox jumps over</p>
              <p class="font-opensans text-base">Body: The quick brown fox jumps over the lazy dog. 0123456789</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Text Emphasis -->
      <div>
        <h2 class="text-3xl font-bold mb-6">Text Emphasis Levels</h2>
        
        <div class="bg-white p-6 rounded-lg border space-y-3">
          <div class="flex items-center justify-between py-3 border-b">
            <p class="text-text-brand text-xl">text-brand - Brand color</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">text-text-brand</code>
          </div>

          <div class="flex items-center justify-between py-3 border-b">
            <p class="text-text-high text-xl">text-high - Primary content</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">text-text-high</code>
          </div>

          <div class="flex items-center justify-between py-3 border-b">
            <p class="text-text-medium text-xl">text-medium - Secondary content</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">text-text-medium</code>
          </div>

          <div class="flex items-center justify-between py-3 border-b">
            <p class="text-text-low text-xl">text-low - Helper text</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">text-text-low</code>
          </div>

          <div class="flex items-center justify-between py-3">
            <p class="text-text-very-low text-xl">text-very-low - Disabled</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">text-text-very-low</code>
          </div>
        </div>

        <div class="bg-gray-900 p-6 rounded-lg mt-4">
          <div class="flex items-center justify-between">
            <p class="text-text-white text-xl">text-white - For dark backgrounds</p>
            <code class="text-xs bg-gray-700 px-2 py-1 rounded text-white">text-text-white</code>
          </div>
        </div>
      </div>

      <!-- Usage Example -->
      <div>
        <h2 class="text-3xl font-bold mb-6">Usage Example</h2>
        
        <div class="bg-white p-6 rounded-lg border">
          <h3 class="font-montserrat text-text-high text-2xl font-bold mb-3">Card Title (Montserrat Bold)</h3>
          <p class="font-opensans text-text-medium text-base mb-2">Body text using Open Sans with medium emphasis for readable content.</p>
          <p class="font-opensans text-text-low text-sm">Supporting text with low emphasis for additional context or metadata.</p>
        </div>
      </div>

      <!-- Font Weights -->
      <div>
        <h2 class="text-3xl font-bold mb-6">Available Font Weights</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-base font-bold mb-4">Montserrat</h3>
            <div class="space-y-2 text-sm">
              <div class="font-montserrat font-light">Light (300) - <code class="bg-gray-100 px-1">font-light</code></div>
              <div class="font-montserrat font-normal">Regular (400) - <code class="bg-gray-100 px-1">font-normal</code></div>
              <div class="font-montserrat font-medium">Medium (500) - <code class="bg-gray-100 px-1">font-medium</code></div>
              <div class="font-montserrat font-semibold">Semibold (600) - <code class="bg-gray-100 px-1">font-semibold</code></div>
              <div class="font-montserrat font-bold">Bold (700) - <code class="bg-gray-100 px-1">font-bold</code></div>
              <div class="font-montserrat font-extrabold">Extrabold (800) - <code class="bg-gray-100 px-1">font-extrabold</code></div>
              <div class="font-montserrat font-black">Black (900) - <code class="bg-gray-100 px-1">font-black</code></div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg border">
            <h3 class="text-base font-bold mb-4">Open Sans</h3>
            <div class="space-y-2 text-sm">
              <div class="font-opensans font-light">Light (300) - <code class="bg-gray-100 px-1">font-light</code></div>
              <div class="font-opensans font-normal">Regular (400) - <code class="bg-gray-100 px-1">font-normal</code></div>
              <div class="font-opensans font-medium">Medium (500) - <code class="bg-gray-100 px-1">font-medium</code></div>
              <div class="font-opensans font-semibold">Semibold (600) - <code class="bg-gray-100 px-1">font-semibold</code></div>
              <div class="font-opensans font-bold">Bold (700) - <code class="bg-gray-100 px-1">font-bold</code></div>
              <div class="font-opensans font-extrabold">Extrabold (800) - <code class="bg-gray-100 px-1">font-extrabold</code></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const meta = {
  title: "Design Tokens/Typography",
  component: Typography,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Typography system including font families (Montserrat, Open Sans) and text emphasis levels for TDM Design System.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontFamilies: Story = {
  render: () => Typography,
};
