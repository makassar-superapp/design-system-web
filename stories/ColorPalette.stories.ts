import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent } from "vue";

const ColorPalette = defineComponent({
  name: "ColorPalette",
  template: `
    <div class="p-8 space-y-12">
      <!-- Primary Colors -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Primary Colors</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="space-y-3">
            <div class="bg-primary h-32 rounded-lg"></div>
            <div>
              <p class="font-semibold mb-1">primary</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">bg-primary</code>
              <p class="text-xs text-gray-500 mt-1">#B21D28</p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-secondary h-32 rounded-lg"></div>
            <div>
              <p class="font-semibold mb-1">secondary</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">bg-secondary</code>
              <p class="text-xs text-gray-500 mt-1">#951429</p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-gray-900 h-32 rounded-lg flex items-center justify-center">
              <p class="text-primary-foreground text-lg font-medium">Text Sample</p>
            </div>
            <div>
              <p class="font-semibold mb-1">primary-foreground</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">text-primary-foreground</code>
              <p class="text-xs text-gray-500 mt-1">Text color untuk primary bg</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Primary Opacity -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Primary Opacity Variants</h2>
        <div class="grid grid-cols-4 md:grid-cols-6 gap-4">
          <div v-for="opacity in [0, 5, 8, 10, 20, 30, 40, 50, 60, 70, 80, 90]" :key="opacity" class="space-y-2">
            <div :class="'bg-primary-' + opacity + ' h-20 rounded-lg'" style="background-image: repeating-linear-gradient(45deg, #ddd 0, #ddd 1px, transparent 0, transparent 50%); background-size: 10px 10px;"></div>
            <div>
              <p class="text-xs font-medium">primary-{{ opacity }}</p>
              <code class="text-xs bg-gray-100 px-1 py-0.5 rounded block mt-1">bg-primary-{{ opacity }}</code>
            </div>
          </div>
        </div>
      </div>

      <!-- Semantic Colors -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Semantic Colors</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="space-y-3">
            <div class="bg-success h-28 rounded-lg"></div>
            <div>
              <p class="font-semibold mb-1">success</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">bg-success</code>
              <p class="text-xs text-gray-500 mt-1">#249923</p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-warning h-28 rounded-lg"></div>
            <div>
              <p class="font-semibold mb-1">warning</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">bg-warning</code>
              <p class="text-xs text-gray-500 mt-1">#F29C1F</p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-info h-28 rounded-lg"></div>
            <div>
              <p class="font-semibold mb-1">info</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">bg-info</code>
              <p class="text-xs text-gray-500 mt-1">#4485F5</p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-destructive h-28 rounded-lg"></div>
            <div>
              <p class="font-semibold mb-1">destructive</p>
              <code class="text-xs bg-gray-100 px-2 py-1 rounded">bg-destructive</code>
              <p class="text-xs text-gray-500 mt-1">Error states</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Gray Scale -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Gray Scale</h2>
        <div class="space-y-3">
          <div class="grid grid-cols-5 md:grid-cols-10 gap-3">
            <div>
              <div class="bg-gray-base-0 h-16 rounded border border-gray-300"></div>
              <p class="text-xs font-medium mt-1">base-0</p>
              <code class="text-xs bg-gray-100 px-1 rounded">gray-base-0</code>
            </div>
            <div v-for="shade in [100, 200, 300, 400, 500, 600, 700, 800, 900]" :key="shade">
              <div :class="'bg-gray-' + shade + ' h-16 rounded'"></div>
              <p class="text-xs font-medium mt-1">{{ shade }}</p>
              <code class="text-xs bg-gray-100 px-1 rounded">gray-{{ shade }}</code>
            </div>
          </div>
        </div>
      </div>

      <!-- Red Scale -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Red Scale</h2>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
          <div>
            <div class="bg-red-200 h-20 rounded"></div>
            <p class="text-xs font-medium mt-1">red-200</p>
            <code class="text-xs bg-gray-100 px-1 rounded">bg-red-200</code>
          </div>
          <div v-for="shade in [500, 600, 700, 800, 900]" :key="shade">
            <div :class="'bg-red-' + shade + ' h-20 rounded'"></div>
            <p class="text-xs font-medium mt-1">red-{{ shade }}</p>
            <code class="text-xs bg-gray-100 px-1 rounded">bg-red-{{ shade }}</code>
          </div>
        </div>
      </div>

      <!-- Green Scale -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Green Scale</h2>
        <div class="grid grid-cols-3 md:grid-cols-5 gap-4">
          <div v-for="shade in [500, 600, 700, 800, 900]" :key="shade">
            <div :class="'bg-green-' + shade + ' h-20 rounded'"></div>
            <p class="text-xs font-medium mt-1">green-{{ shade }}</p>
            <code class="text-xs bg-gray-100 px-1 rounded">bg-green-{{ shade }}</code>
          </div>
        </div>
      </div>

      <!-- Blue Scale -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Blue Scale</h2>
        <div class="grid grid-cols-3 md:grid-cols-5 gap-4">
          <div v-for="shade in [500, 600, 700, 800, 900]" :key="shade">
            <div :class="'bg-blue-' + shade + ' h-20 rounded'"></div>
            <p class="text-xs font-medium mt-1">blue-{{ shade }}</p>
            <code class="text-xs bg-gray-100 px-1 rounded">bg-blue-{{ shade }}</code>
          </div>
        </div>
      </div>

      <!-- Orange Scale -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Orange Scale</h2>
        <div class="grid grid-cols-3 md:grid-cols-5 gap-4">
          <div v-for="shade in [500, 600, 700, 800, 900]" :key="shade">
            <div :class="'bg-orange-' + shade + ' h-20 rounded'"></div>
            <p class="text-xs font-medium mt-1">orange-{{ shade }}</p>
            <code class="text-xs bg-gray-100 px-1 rounded">bg-orange-{{ shade }}</code>
          </div>
        </div>
      </div>

      <!-- Text Colors -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Text Colors</h2>
        <div class="bg-white p-6 rounded-lg border space-y-4">
          <div class="flex items-center justify-between py-3 border-b">
            <p class="text-text-brand text-lg">text-brand</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">text-text-brand</code>
          </div>
          <div class="flex items-center justify-between py-3 border-b">
            <p class="text-text-high text-lg">text-high</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">text-text-high</code>
          </div>
          <div class="flex items-center justify-between py-3 border-b">
            <p class="text-text-medium text-lg">text-medium</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">text-text-medium</code>
          </div>
          <div class="flex items-center justify-between py-3 border-b">
            <p class="text-text-low text-lg">text-low</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">text-text-low</code>
          </div>
          <div class="flex items-center justify-between py-3">
            <p class="text-text-very-low text-lg">text-very-low</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">text-text-very-low</code>
          </div>
        </div>
        <div class="bg-gray-900 p-6 rounded-lg mt-4">
          <div class="flex items-center justify-between">
            <p class="text-text-white text-lg">text-white</p>
            <code class="text-xs bg-gray-700 px-2 py-1 rounded text-white">text-text-white</code>
          </div>
        </div>
      </div>

      <!-- Container Colors -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Container Colors</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="space-y-2">
            <div class="bg-container-white h-24 rounded border border-gray-300"></div>
            <p class="text-sm font-medium">container-white</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">bg-container-white</code>
          </div>
          <div class="space-y-2">
            <div class="bg-container-black h-24 rounded"></div>
            <p class="text-sm font-medium">container-black</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">bg-container-black</code>
          </div>
          <div class="space-y-2">
            <div class="bg-container-high h-24 rounded border border-gray-300"></div>
            <p class="text-sm font-medium">container-high</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">bg-container-high</code>
          </div>
          <div class="space-y-2">
            <div class="bg-container-medium h-24 rounded border border-gray-300"></div>
            <p class="text-sm font-medium">container-medium</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">bg-container-medium</code>
          </div>
          <div class="space-y-2">
            <div class="bg-container-low h-24 rounded border border-gray-300"></div>
            <p class="text-sm font-medium">container-low</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">bg-container-low</code>
          </div>
        </div>
      </div>

      <!-- Border Colors -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Border Colors</h2>
        <div class="grid grid-cols-2 gap-6">
          <div>
            <div class="h-24 rounded border-4 border-border-idle bg-white"></div>
            <p class="font-medium mt-2">border-idle</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">border-border-idle</code>
          </div>
          <div>
            <div class="h-24 rounded border-4 border-border-hover bg-white"></div>
            <p class="font-medium mt-2">border-hover</p>
            <code class="text-xs bg-gray-100 px-2 py-1 rounded">border-border-hover</code>
          </div>
        </div>
      </div>

      <!-- White Opacity -->
      <div class="bg-primary p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-6 text-white">White Opacity Variants</h2>
        <div class="grid grid-cols-4 md:grid-cols-6 gap-4">
          <div v-for="opacity in [0, 5, 8, 10, 20, 30, 40, 50, 60, 70, 80, 90]" :key="opacity" class="space-y-2">
            <div :class="'bg-white-' + opacity + ' h-20 rounded border border-white-30'"></div>
            <p class="text-xs font-medium text-white">white-{{ opacity }}</p>
            <code class="text-xs bg-white-20 px-1 py-0.5 rounded text-white block">bg-white-{{ opacity }}</code>
          </div>
        </div>
      </div>
    </div>
  `,
});

const meta = {
  title: "Design Tokens/Colors",
  component: ColorPalette,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Complete color palette for TDM Design System including primary, semantic, grayscale, and opacity variants.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
  render: () => ColorPalette,
};
