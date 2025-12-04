import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { RadioGroup, RadioGroupItem } from ".";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    modelValue: {
      control: "text",
      description: "The controlled value of the radio group",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio group is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const FullExample: Story = {
  args: {
    modelValue: "option1",
    disabled: false,
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <RadioGroup v-bind="args" v-model="value">
        <div class="flex items-center gap-2">
          <RadioGroupItem value="option1" id="r1" />
          <Label for="r1">Option 1</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem value="option2" id="r2" />
          <Label for="r2">Option 2</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem value="option3" id="r3" />
          <Label for="r3">Option 3</Label>
        </div>
      </RadioGroup>
    `,
  }),
};

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<RadioGroup>
  <div class="flex items-center gap-2">
    <RadioGroupItem value="option1" id="r1" />
    <Label for="r1">Option 1</Label>
  </div>
  <div class="flex items-center gap-2">
    <RadioGroupItem value="option2" id="r2" />
    <Label for="r2">Option 2</Label>
  </div>
</RadioGroup>`,
      },
    },
  },
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    template: `
      <RadioGroup>
        <div class="flex items-center gap-2">
          <RadioGroupItem value="option1" id="r1" />
          <Label for="r1">Option 1</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem value="option2" id="r2" />
          <Label for="r2">Option 2</Label>
        </div>
      </RadioGroup>
    `,
  }),
};

export const DefaultValue: Story = {
  parameters: {
    docs: {
      source: {
        code: `<RadioGroup :default-value="'comfortable'">
  <div class="flex items-center gap-2">
    <RadioGroupItem value="default" id="default" />
    <Label for="default">Default</Label>
  </div>
  <div class="flex items-center gap-2">
    <RadioGroupItem value="comfortable" id="comfortable" />
    <Label for="comfortable">Comfortable</Label>
  </div>
  <div class="flex items-center gap-2">
    <RadioGroupItem value="compact" id="compact" />
    <Label for="compact">Compact</Label>
  </div>
</RadioGroup>`,
      },
    },
  },
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    template: `
      <RadioGroup :default-value="'comfortable'">
        <div class="flex items-center gap-2">
          <RadioGroupItem value="default" id="default" />
          <Label for="default">Default</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem value="comfortable" id="comfortable" />
          <Label for="comfortable">Comfortable</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem value="compact" id="compact" />
          <Label for="compact">Compact</Label>
        </div>
      </RadioGroup>
    `,
  }),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      source: {
        code: `<RadioGroup disabled>
  <div class="flex items-center gap-2">
    <RadioGroupItem value="option1" id="disabled1" />
    <Label for="disabled1" class="opacity-50">Option 1</Label>
  </div>
  <div class="flex items-center gap-2">
    <RadioGroupItem value="option2" id="disabled2" />
    <Label for="disabled2" class="opacity-50">Option 2</Label>
  </div>
</RadioGroup>`,
      },
    },
  },
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    template: `
      <RadioGroup disabled>
        <div class="flex items-center gap-2">
          <RadioGroupItem value="option1" id="disabled1" />
          <Label for="disabled1" class="opacity-50">Option 1</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem value="option2" id="disabled2" />
          <Label for="disabled2" class="opacity-50">Option 2</Label>
        </div>
      </RadioGroup>
    `,
  }),
};

export const WithDescription: Story = {
  parameters: {
    docs: {
      source: {
        code: `<RadioGroup :default-value="'card'">
  <div class="flex items-start gap-2">
    <RadioGroupItem value="card" id="card" />
    <div class="grid gap-1.5 leading-none">
      <Label for="card" class="text-sm font-medium">
        Credit Card
      </Label>
      <p class="text-sm text-muted-foreground">
        Pay with your credit or debit card
      </p>
    </div>
  </div>
  <div class="flex items-start gap-2">
    <RadioGroupItem value="paypal" id="paypal" />
    <div class="grid gap-1.5 leading-none">
      <Label for="paypal" class="text-sm font-medium">
        PayPal
      </Label>
      <p class="text-sm text-muted-foreground">
        Pay securely with PayPal
      </p>
    </div>
  </div>
</RadioGroup>`,
      },
    },
  },
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    template: `
      <RadioGroup :default-value="'card'">
        <div class="flex items-start gap-2">
          <RadioGroupItem value="card" id="card" />
          <div class="grid gap-1.5 leading-none">
            <Label for="card" class="text-sm font-medium">
              Credit Card
            </Label>
            <p class="text-sm text-muted-foreground">
              Pay with your credit or debit card
            </p>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <RadioGroupItem value="paypal" id="paypal" />
          <div class="grid gap-1.5 leading-none">
            <Label for="paypal" class="text-sm font-medium">
              PayPal
            </Label>
            <p class="text-sm text-muted-foreground">
              Pay securely with PayPal
            </p>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <RadioGroupItem value="bank" id="bank" />
          <div class="grid gap-1.5 leading-none">
            <Label for="bank" class="text-sm font-medium">
              Bank Transfer
            </Label>
            <p class="text-sm text-muted-foreground">
              Direct bank transfer
            </p>
          </div>
        </div>
      </RadioGroup>
    `,
  }),
};

export const Interactive: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const selectedOption = ref('option1');
</script>

<div class="flex flex-col gap-4">
  <RadioGroup v-model="selectedOption">
    <div class="flex items-center gap-2">
      <RadioGroupItem value="option1" id="int1" />
      <Label for="int1">Option 1</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="option2" id="int2" />
      <Label for="int2">Option 2</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="option3" id="int3" />
      <Label for="int3">Option 3</Label>
    </div>
  </RadioGroup>
  <p class="text-sm text-muted-foreground">
    Selected: {{ selectedOption }}
  </p>
</div>`,
      },
    },
  },
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const selectedOption = ref("option1");
      return { selectedOption };
    },
    template: `
      <div class="flex flex-col gap-4">
        <RadioGroup v-model="selectedOption">
          <div class="flex items-center gap-2">
            <RadioGroupItem value="option1" id="int1" />
            <Label for="int1">Option 1</Label>
          </div>
          <div class="flex items-center gap-2">
            <RadioGroupItem value="option2" id="int2" />
            <Label for="int2">Option 2</Label>
          </div>
          <div class="flex items-center gap-2">
            <RadioGroupItem value="option3" id="int3" />
            <Label for="int3">Option 3</Label>
          </div>
        </RadioGroup>
        <p class="text-sm text-muted-foreground">
          Selected: {{ selectedOption }}
        </p>
      </div>
    `,
  }),
};

export const NotificationSettings: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const notifyMethod = ref('email');
</script>

<div class="flex flex-col gap-4">
  <div>
    <h3 class="text-sm font-semibold mb-3">Notification Method</h3>
    <RadioGroup v-model="notifyMethod">
      <div class="flex items-center gap-2">
        <RadioGroupItem value="email" id="email" />
        <Label for="email">Email</Label>
      </div>
      <div class="flex items-center gap-2">
        <RadioGroupItem value="sms" id="sms" />
        <Label for="sms">SMS</Label>
      </div>
      <div class="flex items-center gap-2">
        <RadioGroupItem value="push" id="push" />
        <Label for="push">Push Notification</Label>
      </div>
      <div class="flex items-center gap-2">
        <RadioGroupItem value="none" id="none" />
        <Label for="none">None</Label>
      </div>
    </RadioGroup>
  </div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const notifyMethod = ref("email");
      return { notifyMethod };
    },
    template: `
      <div class="flex flex-col gap-4">
        <div>
          <h3 class="text-sm font-semibold mb-3">Notification Method</h3>
          <RadioGroup v-model="notifyMethod">
            <div class="flex items-center gap-2">
              <RadioGroupItem value="email" id="email" />
              <Label for="email">Email</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem value="sms" id="sms" />
              <Label for="sms">SMS</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem value="push" id="push" />
              <Label for="push">Push Notification</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem value="none" id="none" />
              <Label for="none">None</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    `,
  }),
};
