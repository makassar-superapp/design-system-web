import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Switch from "./Switch.vue";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const FullExample: Story = {
  args: {
    disabled: false,
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { Switch, Label },
    setup() {
      const checked = ref(args);
      return { args };
    },
    template: `
      <div class="flex items-center gap-2">
        <Switch v-bind="args" v-model:checked="checked" id="switch-full" />
        <Label for="switch-full">Toggle Switch</Label>
      </div>
    `,
  }),
};

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label for="airplane-mode">Airplane Mode</Label>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Switch, Label },
    template: `
      <div class="flex items-center gap-2">
        <Switch id="airplane-mode" />
        <Label for="airplane-mode">Airplane Mode</Label>
      </div>
    `,
  }),
};

export const DefaultChecked: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="flex items-center gap-2">
  <Switch checked id="notifications" />
  <Label for="notifications">Notifications</Label>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Switch, Label },
    data() {
      return {
        notificationsEnabled: true, // canvas terlihat "checked"
      };
    },
    template: `
      <div class="flex items-center gap-2">
        <Switch v-model="notificationsEnabled" id="notifications" />
        <Label for="notifications">Notifications</Label>
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
    <Switch disabled id="disabled-off" />
    <Label for="disabled-off" class="opacity-50">Disabled (Off)</Label>
  </div>
  <div class="flex items-center gap-2">
    <Switch disabled checked id="disabled-on" />
    <Label for="disabled-on" class="opacity-50">Disabled (On)</Label>
  </div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Switch, Label },
    data() {
      return {
        off: false,
        on: true, // canvas terlihat "checked"
      };
    },
    template: `
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <Switch disabled id="disabled-off" v-model="off" />
          <Label for="disabled-off" class="opacity-50">Disabled (Off)</Label>
        </div>
        <div class="flex items-center gap-2">
          <Switch disabled id="disabled-on" v-model="on" />
          <Label for="disabled-on" class="opacity-50">Disabled (On)</Label>
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
  <Switch checked id="marketing" />
  <div class="grid gap-1.5 leading-none">
    <Label for="marketing" class="text-sm font-medium">
      Marketing emails
    </Label>
    <p class="text-sm text-muted-foreground">
      Receive emails about new products, features, and more.
    </p>
  </div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Switch, Label },
    data() {
      return {
        marketingEmails: true, // canvas terlihat "checked"
      };
    },
    template: `
      <div class="flex items-start gap-2">
        <Switch v-model="marketingEmails" id="marketing" />
        <div class="grid gap-1.5 leading-none">
          <Label for="marketing" class="text-sm font-medium">
            Marketing emails
          </Label>
          <p class="text-sm text-muted-foreground">
            Receive emails about new products, features, and more.
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
const isEnabled = ref(true);
</script>

<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <Switch v-model:checked="isEnabled" id="interactive" />
    <Label for="interactive">Toggle Feature</Label>
  </div>
  <p class="text-sm text-muted-foreground">
    Feature is {{ isEnabled ? 'enabled' : 'disabled' }}
  </p>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Switch, Label },
    setup() {
      const isEnabled = ref(true);
      return { isEnabled };
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Switch v-model:checked="isEnabled" id="interactive" />
          <Label for="interactive">Toggle Feature</Label>
        </div>
        <p class="text-sm text-muted-foreground">
          Feature is {{ isEnabled ? 'enabled' : 'disabled' }}
        </p>
      </div>
    `,
  }),
};

export const SettingsPanel: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const settings = ref({
  notifications: true,
  autoSave: true,
  darkMode: false,
  analytics: false,
});
</script>

<div class="flex flex-col gap-4">
  <h3 class="text-sm font-semibold">Settings</h3>
  <div class="flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <div class="flex items-start gap-2">
        <Switch 
          v-model:checked="settings.notifications" 
          id="setting-notifications" 
        />
        <div class="grid gap-1.5 leading-none">
          <Label for="setting-notifications" class="text-sm font-medium">
            Notifications
          </Label>
          <p class="text-sm text-muted-foreground">
            Receive push notifications
          </p>
        </div>
      </div>
    </div>
    
    <div class="flex items-center justify-between">
      <div class="flex items-start gap-2">
        <Switch 
          v-model:checked="settings.autoSave" 
          id="setting-autosave" 
        />
        <div class="grid gap-1.5 leading-none">
          <Label for="setting-autosave" class="text-sm font-medium">
            Auto-save
          </Label>
          <p class="text-sm text-muted-foreground">
            Automatically save changes
          </p>
        </div>
      </div>
    </div>
    
    <div class="flex items-center justify-between">
      <div class="flex items-start gap-2">
        <Switch 
          v-model:checked="settings.darkMode" 
          id="setting-darkmode" 
        />
        <div class="grid gap-1.5 leading-none">
          <Label for="setting-darkmode" class="text-sm font-medium">
            Dark Mode
          </Label>
          <p class="text-sm text-muted-foreground">
            Use dark theme
          </p>
        </div>
      </div>
    </div>
    
    <div class="flex items-center justify-between">
      <div class="flex items-start gap-2">
        <Switch 
          v-model:checked="settings.analytics" 
          id="setting-analytics" 
        />
        <div class="grid gap-1.5 leading-none">
          <Label for="setting-analytics" class="text-sm font-medium">
            Analytics
          </Label>
          <p class="text-sm text-muted-foreground">
            Help improve our service
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Switch, Label },
    setup() {
      const settings = ref({
        notifications: true,
        autoSave: true,
        darkMode: false,
        analytics: false,
      });
      return { settings };
    },
    template: `
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Settings</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <div class="flex items-start gap-2">
              <Switch 
                v-model:checked="settings.notifications" 
                id="setting-notifications" 
              />
              <div class="grid gap-1.5 leading-none">
                <Label for="setting-notifications" class="text-sm font-medium">
                  Notifications
                </Label>
                <p class="text-sm text-muted-foreground">
                  Receive push notifications
                </p>
              </div>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-start gap-2">
              <Switch 
                v-model:checked="settings.autoSave" 
                id="setting-autosave" 
              />
              <div class="grid gap-1.5 leading-none">
                <Label for="setting-autosave" class="text-sm font-medium">
                  Auto-save
                </Label>
                <p class="text-sm text-muted-foreground">
                  Automatically save changes
                </p>
              </div>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-start gap-2">
              <Switch 
                v-model:checked="settings.darkMode" 
                id="setting-darkmode" 
              />
              <div class="grid gap-1.5 leading-none">
                <Label for="setting-darkmode" class="text-sm font-medium">
                  Dark Mode
                </Label>
                <p class="text-sm text-muted-foreground">
                  Use dark theme
                </p>
              </div>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-start gap-2">
              <Switch 
                v-model:checked="settings.analytics" 
                id="setting-analytics" 
              />
              <div class="grid gap-1.5 leading-none">
                <Label for="setting-analytics" class="text-sm font-medium">
                  Analytics
                </Label>
                <p class="text-sm text-muted-foreground">
                  Help improve our service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
