import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Checkbox from "./Checkbox.vue";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label for="terms">Accept terms and conditions</Label>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Checkbox, Label },
    template: `
      <div class="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    `,
  }),
};

export const DefaultChecked: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="flex items-center gap-2">
  <Checkbox checked id="subscribe" />
  <Label for="subscribe">Subscribe to newsletter</Label>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Checkbox, Label },
    data() {
      return {
        subscribeChecked: true, // canvas terlihat "checked"
      };
    },
    template: `
      <div class="flex items-center gap-2">
        <Checkbox v-model="subscribeChecked" id="subscribe" />
        <Label for="subscribe">Subscribe to newsletter</Label>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="flex flex-col gap-3">
  <div class="flex items-center gap-2">
    <Checkbox disabled id="disabled-off" />
    <Label for="disabled-off" class="opacity-50">Disabled (Unchecked)</Label>
  </div>
  <div class="flex items-center gap-2">
    <Checkbox disabled checked id="disabled-on" />
    <Label for="disabled-on" class="opacity-50">Disabled (Checked)</Label>
  </div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Checkbox, Label },
    data() {
      return {
        off: false,
        on: true, // canvas terlihat "checked"
      };
    },
    template: `
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <Checkbox disabled id="disabled-off" v-model="off" />
          <Label for="disabled-off" class="opacity-50">Disabled (Unchecked)</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox disabled id="disabled-on" v-model="on" />
          <Label for="disabled-on" class="opacity-50">Disabled (Checked)</Label>
        </div>
      </div>
    `,
  }),
};

export const WithDescription: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="flex items-start gap-2">
  <Checkbox checked id="emails" />
  <div class="grid gap-1.5 leading-none">
    <Label for="emails" class="text-sm font-medium">
      Email notifications
    </Label>
    <p class="text-sm text-muted-foreground">
      Receive email updates about your account activity.
    </p>
  </div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Checkbox, Label },
    data() {
      return {
        emailsEnabled: true, // canvas terlihat "checked"
      };
    },
    template: `
      <div class="flex items-start gap-2">
        <Checkbox v-model="emailsEnabled" id="emails" />
        <div class="grid gap-1.5 leading-none">
          <Label for="emails" class="text-sm font-medium">
            Email notifications
          </Label>
          <p class="text-sm text-muted-foreground">
            Receive email updates about your account activity.
          </p>
        </div>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const isChecked = ref(true);
</script>

<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <Checkbox v-model:checked="isChecked" id="interactive" />
    <Label for="interactive">Enable feature</Label>
  </div>
  <p class="text-sm text-muted-foreground">
    Feature is {{ isChecked ? 'enabled' : 'disabled' }}
  </p>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const isChecked = ref(true);
      return { isChecked };
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model:checked="isChecked" id="interactive" />
          <Label for="interactive">Enable feature</Label>
        </div>
        <p class="text-sm text-muted-foreground">
          Feature is {{ isChecked ? 'enabled' : 'disabled' }}
        </p>
      </div>
    `,
  }),
};

export const MultipleSelection: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const preferences = ref({
  newsletter: true,
  updates: false,
  promotions: false,
  surveys: true,
});
</script>

<div class="flex flex-col gap-4">
  <h3 class="text-sm font-semibold">Email Preferences</h3>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <Checkbox 
        v-model:checked="preferences.newsletter" 
        id="newsletter" 
      />
      <Label for="newsletter">Newsletter</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox 
        v-model:checked="preferences.updates" 
        id="updates" 
      />
      <Label for="updates">Product Updates</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox 
        v-model:checked="preferences.promotions" 
        id="promotions" 
      />
      <Label for="promotions">Promotions</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox 
        v-model:checked="preferences.surveys" 
        id="surveys" 
      />
      <Label for="surveys">Surveys</Label>
    </div>
  </div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const preferences = ref({
        newsletter: true,
        updates: false,
        promotions: false,
        surveys: true,
      });
      return { preferences };
    },
    template: `
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Email Preferences</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <Checkbox 
              v-model:checked="preferences.newsletter" 
              id="newsletter" 
            />
            <Label for="newsletter">Newsletter</Label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox 
              v-model:checked="preferences.updates" 
              id="updates" 
            />
            <Label for="updates">Product Updates</Label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox 
              v-model:checked="preferences.promotions" 
              id="promotions" 
            />
            <Label for="promotions">Promotions</Label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox 
              v-model:checked="preferences.surveys" 
              id="surveys" 
            />
            <Label for="surveys">Surveys</Label>
          </div>
        </div>
      </div>
    `,
  }),
};

export const FormExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const formData = ref({
  agreeToTerms: false,
  subscribeNewsletter: true,
  over18: true,
});
</script>

<div class="flex flex-col gap-4">
  <h3 class="text-sm font-semibold">Registration Form</h3>
  <div class="flex flex-col gap-3">
    <div class="flex items-start gap-2">
      <Checkbox 
        v-model:checked="formData.agreeToTerms" 
        id="terms-form" 
      />
      <div class="grid gap-1.5 leading-none">
        <Label for="terms-form" class="text-sm font-medium">
          I agree to the terms and conditions
        </Label>
        <p class="text-sm text-muted-foreground">
          You must agree to continue with the registration.
        </p>
      </div>
    </div>
    
    <div class="flex items-center gap-2">
      <Checkbox 
        v-model:checked="formData.subscribeNewsletter" 
        id="newsletter-form" 
      />
      <Label for="newsletter-form">Subscribe to newsletter</Label>
    </div>
    
    <div class="flex items-center gap-2">
      <Checkbox 
        v-model:checked="formData.over18" 
        id="age-form" 
      />
      <Label for="age-form">I am over 18 years old</Label>
    </div>
  </div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const formData = ref({
        agreeToTerms: false,
        subscribeNewsletter: true,
        over18: true,
      });
      return { formData };
    },
    template: `
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Registration Form</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-start gap-2">
            <Checkbox 
              v-model:checked="formData.agreeToTerms" 
              id="terms-form" 
            />
            <div class="grid gap-1.5 leading-none">
              <Label for="terms-form" class="text-sm font-medium">
                I agree to the terms and conditions
              </Label>
              <p class="text-sm text-muted-foreground">
                You must agree to continue with the registration.
              </p>
            </div>
          </div>
          
          <div class="flex items-center gap-2">
            <Checkbox 
              v-model:checked="formData.subscribeNewsletter" 
              id="newsletter-form" 
            />
            <Label for="newsletter-form">Subscribe to newsletter</Label>
          </div>
          
          <div class="flex items-center gap-2">
            <Checkbox 
              v-model:checked="formData.over18" 
              id="age-form" 
            />
            <Label for="age-form">I am over 18 years old</Label>
          </div>
        </div>
      </div>
    `,
  }),
};
