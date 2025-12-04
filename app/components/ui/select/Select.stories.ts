import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from ".";
import { Label } from "@/components/ui/label";
import Chip from "@/components/ui/chips/Chip.vue";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled",
    },
    multiple: {
      control: "boolean",
      description: "Whether multiple selection is enabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const FullExample: Story = {
  args: {
    disabled: false,
    multiple: false,
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectGroup,
      SelectLabel,
      SelectItem,
      Label,
    },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Label for="select-full">Choose a fruit</Label>
        <Select v-bind="args">
          <SelectTrigger id="select-full" class="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    `,
  }),
};

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Select>
  <SelectTrigger class="w-full">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
      },
    },
  },
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectGroup,
      SelectLabel,
      SelectItem,
    },
    template: `
      <Select>
        <SelectTrigger class="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    `,
  }),
};

export const SingleSelect: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const selected = ref('');
</script>

<Select v-model="selected">
  <SelectTrigger class="w-full">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
      },
    },
  },
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectGroup,
      SelectLabel,
      SelectItem,
    },
    setup() {
      const selected = ref("");
      return { selected };
    },
    template: `
      <div class="flex flex-col gap-3">
        <Select v-model="selected">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p class="text-sm text-muted-foreground">Selected: {{ selected || 'none' }}</p>
      </div>
    `,
  }),
};

export const MultipleSelect: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const selected = ref([]);
</script>

<Select v-model="selected" :multiple="true">
  <SelectTrigger class="w-full">
    <SelectValue placeholder="Select fruits" :aria-label="selected">
      <div v-for="item in selected" :key="item">
        <Chip size="sm">{{ item }}</Chip>
      </div>
    </SelectValue>
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
      },
    },
  },
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectGroup,
      SelectLabel,
      SelectItem,
      Chip,
    },
    setup() {
      const selected = ref([]);
      return { selected };
    },
    template: `
      <div class="flex flex-col gap-3">
        <Select v-model="selected" :multiple="true">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select fruits" :aria-label="selected">
              <div v-for="item in selected" :key="item">
                <Chip size="sm">{{ item }}</Chip>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p class="text-sm text-muted-foreground">
          Selected: {{ selected.length > 0 ? selected.join(', ') : 'none' }}
        </p>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Select disabled>
  <SelectTrigger class="w-full">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
      },
    },
  },
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectGroup,
      SelectLabel,
      SelectItem,
    },
    template: `
      <Select disabled>
        <SelectTrigger class="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    `,
  }),
};

export const WithLabel: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const selected = ref('');
</script>

<div class="flex flex-col gap-2">
  <Label for="fruit-select">Choose your favorite fruit</Label>
  <Select v-model="selected">
    <SelectTrigger id="fruit-select" class="w-full">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>`,
      },
    },
  },
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectGroup,
      SelectLabel,
      SelectItem,
      Label,
    },
    setup() {
      const selected = ref("");
      return { selected };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Label for="fruit-select">Choose your favorite fruit</Label>
        <Select v-model="selected">
          <SelectTrigger id="fruit-select" class="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    `,
  }),
};

export const MultipleGroups: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const selected = ref('');
</script>

<Select v-model="selected">
  <SelectTrigger class="w-full">
    <SelectValue placeholder="Select a food" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="broccoli">Broccoli</SelectItem>
      <SelectItem value="spinach">Spinach</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Meat</SelectLabel>
      <SelectItem value="chicken">Chicken</SelectItem>
      <SelectItem value="beef">Beef</SelectItem>
      <SelectItem value="fish">Fish</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
      },
    },
  },
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectGroup,
      SelectLabel,
      SelectItem,
    },
    setup() {
      const selected = ref("");
      return { selected };
    },
    template: `
      <Select v-model="selected">
        <SelectTrigger class="w-full">
          <SelectValue placeholder="Select a food" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="spinach">Spinach</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Meat</SelectLabel>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="fish">Fish</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    `,
  }),
};

export const FormExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const formData = ref({
  country: '',
  language: '',
  timezone: '',
});
</script>

<div class="flex flex-col gap-4">
  <h3 class="text-sm font-semibold">User Preferences</h3>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <Label for="country">Country</Label>
      <Select v-model="formData.country">
        <SelectTrigger id="country" class="w-full">
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="id">Indonesia</SelectItem>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="jp">Japan</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    
    <div class="flex flex-col gap-2">
      <Label for="language">Language</Label>
      <Select v-model="formData.language">
        <SelectTrigger id="language" class="w-full">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="id">Bahasa Indonesia</SelectItem>
            <SelectItem value="ja">日本語</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    
    <div class="flex flex-col gap-2">
      <Label for="timezone">Timezone</Label>
      <Select v-model="formData.timezone">
        <SelectTrigger id="timezone" class="w-full">
          <SelectValue placeholder="Select timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="wib">WIB (UTC+7)</SelectItem>
            <SelectItem value="est">EST (UTC-5)</SelectItem>
            <SelectItem value="jst">JST (UTC+9)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</div>`,
      },
    },
  },
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectGroup,
      SelectLabel,
      SelectItem,
      Label,
    },
    setup() {
      const formData = ref({
        country: "",
        language: "",
        timezone: "",
      });
      return { formData };
    },
    template: `
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">User Preferences</h3>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <Label for="country">Country</Label>
            <Select v-model="formData.country">
              <SelectTrigger id="country" class="w-full">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="id">Indonesia</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="jp">Japan</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div class="flex flex-col gap-2">
            <Label for="language">Language</Label>
            <Select v-model="formData.language">
              <SelectTrigger id="language" class="w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="id">Bahasa Indonesia</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div class="flex flex-col gap-2">
            <Label for="timezone">Timezone</Label>
            <Select v-model="formData.timezone">
              <SelectTrigger id="timezone" class="w-full">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="wib">WIB (UTC+7)</SelectItem>
                  <SelectItem value="est">EST (UTC-5)</SelectItem>
                  <SelectItem value="jst">JST (UTC+9)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    `,
  }),
};
