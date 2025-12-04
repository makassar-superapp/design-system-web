import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import {
  Search,
  Mail,
  Lock,
  DollarSign,
  Eye,
  EyeOff,
  X,
} from "lucide-vue-next";
import {
  InputGroup,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupAddon,
  InputGroupText,
  InputGroupButton,
} from ".";

const meta: Meta<typeof InputGroup> = {
  title: "UI/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    ariaInvalid: {
      control: "boolean",
      description: "Whether the input is in an error state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const FullExample: Story = {
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      Search,
    },
    setup() {
      return { args };
    },
    template: `
      <InputGroup v-bind="args">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    `,
  }),
};

export const BasicInput: Story = {
  parameters: {
    docs: {
      source: {
        code: `<InputGroup>
  <InputGroupInput placeholder="Enter text..." />
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: { InputGroup, InputGroupInput },
    template: `
      <InputGroup>
        <InputGroupInput placeholder="Enter text..." />
      </InputGroup>
    `,
  }),
};

export const WithIconStart: Story = {
  parameters: {
    docs: {
      source: {
        code: `<InputGroup>
  <InputGroupAddon>
    <Search />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      Search,
    },
    template: `
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    `,
  }),
};

export const WithIconEnd: Story = {
  parameters: {
    docs: {
      source: {
        code: `<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <Search />
  </InputGroupAddon>
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      Search,
    },
    template: `
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <Search />
        </InputGroupAddon>
      </InputGroup>
    `,
  }),
};

export const WithText: Story = {
  parameters: {
    docs: {
      source: {
        code: `<InputGroup>
  <InputGroupAddon>
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="example.com" />
</InputGroup>

<InputGroup>
  <InputGroupInput placeholder="0.00" type="number" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>USD</InputGroupText>
  </InputGroupAddon>
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      InputGroupText,
    },
    template: `
      <div class="flex flex-col gap-4">
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="0.00" type="number" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    `,
  }),
};

export const WithButton: Story = {
  parameters: {
    docs: {
      source: {
        code: `<InputGroup>
  <InputGroupInput placeholder="Enter email..." />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>
      <X class="size-3.5" />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      InputGroupButton,
      X,
    },
    template: `
      <InputGroup>
        <InputGroupInput placeholder="Enter email..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <X class="size-3.5" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    `,
  }),
};

export const PasswordToggle: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const showPassword = ref(false);
</script>

<InputGroup>
  <InputGroupAddon>
    <Lock />
  </InputGroupAddon>
  <InputGroupInput 
    :type="showPassword ? 'text' : 'password'" 
    placeholder="Enter password" 
  />
  <InputGroupAddon align="inline-end">
    <InputGroupButton @click="showPassword = !showPassword">
      <Eye v-if="!showPassword" class="size-3.5" />
      <EyeOff v-else class="size-3.5" />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      InputGroupButton,
      Lock,
      Eye,
      EyeOff,
    },
    setup() {
      const showPassword = ref(false);
      return { showPassword };
    },
    template: `
      <InputGroup>
        <InputGroupAddon>
          <Lock />
        </InputGroupAddon>
        <InputGroupInput 
          :type="showPassword ? 'text' : 'password'" 
          placeholder="Enter password" 
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton @click="showPassword = !showPassword">
            <Eye v-if="!showPassword" class="size-3.5" />
            <EyeOff v-else class="size-3.5" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    `,
  }),
};

export const InputTypes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<!-- Email -->
<InputGroup>
  <InputGroupAddon>
    <Mail />
  </InputGroupAddon>
  <InputGroupInput type="email" placeholder="Email" />
</InputGroup>

<!-- Number -->
<InputGroup>
  <InputGroupAddon>
    <DollarSign />
  </InputGroupAddon>
  <InputGroupInput type="number" placeholder="0.00" />
</InputGroup>

<!-- Password -->
<InputGroup>
  <InputGroupAddon>
    <Lock />
  </InputGroupAddon>
  <InputGroupInput type="password" placeholder="Password" />
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      Mail,
      DollarSign,
      Lock,
    },
    template: `
      <div class="flex flex-col gap-4">
        <InputGroup>
          <InputGroupAddon>
            <Mail />
          </InputGroupAddon>
          <InputGroupInput type="email" placeholder="Email" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <DollarSign />
          </InputGroupAddon>
          <InputGroupInput type="number" placeholder="0.00" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <Lock />
          </InputGroupAddon>
          <InputGroupInput type="password" placeholder="Password" />
        </InputGroup>
      </div>
    `,
  }),
};

export const ErrorState: Story = {
  parameters: {
    docs: {
      source: {
        code: `<InputGroup :aria-invalid="true">
  <InputGroupAddon>
    <Mail />
  </InputGroupAddon>
  <InputGroupInput 
    type="email" 
    placeholder="Email" 
    aria-invalid="true" 
  />
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      Mail,
    },
    template: `
      <div class="flex flex-col gap-4">
        <InputGroup :aria-invalid="true">
          <InputGroupAddon>
            <Mail />
          </InputGroupAddon>
          <InputGroupInput 
            type="email" 
            placeholder="Email" 
            aria-invalid="true" 
          />
        </InputGroup>
      </div>
    `,
  }),
};

export const DisabledState: Story = {
  parameters: {
    docs: {
      source: {
        code: `<InputGroup>
  <InputGroupAddon>
    <Mail />
  </InputGroupAddon>
  <InputGroupInput disabled type="email" placeholder="Email" />
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      Mail,
    },
    template: `
      <InputGroup>
        <InputGroupAddon>
          <Mail />
        </InputGroupAddon>
        <InputGroupInput disabled type="email" placeholder="Email" />
      </InputGroup>
    `,
  }),
};

export const BasicTextarea: Story = {
  parameters: {
    docs: {
      source: {
        code: `<InputGroup>
  <InputGroupTextarea placeholder="Enter your message..." />
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: { InputGroup, InputGroupTextarea },
    template: `
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message..." />
      </InputGroup>
    `,
  }),
};

export const TextareaWithLabel: Story = {
  parameters: {
    docs: {
      source: {
        code: `<InputGroup>
  <InputGroupAddon align="block-start">
    <InputGroupText>Description</InputGroupText>
  </InputGroupAddon>
  <InputGroupTextarea placeholder="Enter description..." />
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupTextarea,
      InputGroupAddon,
      InputGroupText,
    },
    template: `
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Description</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Enter description..." />
      </InputGroup>
    `,
  }),
};

export const TextareaWithCounter: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const message = ref("");
const maxLength = 200;
</script>

<InputGroup>
  <InputGroupTextarea 
    v-model="message" 
    placeholder="Enter your message..." 
    :maxlength="maxLength"
  />
  <InputGroupAddon align="block-end">
    <InputGroupText>{{ message.length }}/{{ maxLength }}</InputGroupText>
  </InputGroupAddon>
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupTextarea,
      InputGroupAddon,
      InputGroupText,
    },
    setup() {
      const message = ref("");
      const maxLength = 200;
      return { message, maxLength };
    },
    template: `
      <InputGroup>
        <InputGroupTextarea 
          v-model="message" 
          placeholder="Enter your message..." 
          :maxlength="maxLength"
        />
        <InputGroupAddon align="block-end">
          <InputGroupText>{{ message.length }}/{{ maxLength }}</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    `,
  }),
};

export const DisabledTextarea: Story = {
  parameters: {
    docs: {
      source: {
        code: `<InputGroup>
  <InputGroupTextarea disabled placeholder="Enter your message..." />
</InputGroup>`,
      },
    },
  },
  render: () => ({
    components: { InputGroup, InputGroupTextarea },
    template: `
      <InputGroup>
        <InputGroupTextarea disabled placeholder="Enter your message..." />
      </InputGroup>
    `,
  }),
};

export const ComplexExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const email = ref("");
const message = ref("");
const maxLength = 200;
</script>

<div class="flex flex-col gap-4">
  <!-- Email with validation -->
  <InputGroup :aria-invalid="!email.includes('@')">
    <InputGroupAddon>
      <Mail />
    </InputGroupAddon>
    <InputGroupInput 
      v-model="email"
      type="email" 
      placeholder="Email" 
      :aria-invalid="!email.includes('@')"
    />
  </InputGroup>

  <!-- Message with character counter -->
  <InputGroup>
    <InputGroupAddon align="block-start">
      <InputGroupText>Message</InputGroupText>
    </InputGroupAddon>
    <InputGroupTextarea 
      v-model="message" 
      placeholder="Enter your message..." 
      :maxlength="maxLength"
    />
    <InputGroupAddon align="block-end">
      <InputGroupText>{{ message.length }}/{{ maxLength }}</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
</div>`,
      },
    },
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupTextarea,
      InputGroupAddon,
      InputGroupText,
      Mail,
    },
    setup() {
      const email = ref("");
      const message = ref("");
      const maxLength = 200;
      return { email, message, maxLength };
    },
    template: `
      <div class="flex flex-col gap-4">
        <InputGroup :aria-invalid="email && !email.includes('@')">
          <InputGroupAddon>
            <Mail />
          </InputGroupAddon>
          <InputGroupInput 
            v-model="email"
            type="email" 
            placeholder="Email" 
            :aria-invalid="email && !email.includes('@')"
          />
        </InputGroup>

        <InputGroup>
          <InputGroupAddon align="block-start">
            <InputGroupText>Message</InputGroupText>
          </InputGroupAddon>
          <InputGroupTextarea 
            v-model="message" 
            placeholder="Enter your message..." 
            :maxlength="maxLength"
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>{{ message.length }}/{{ maxLength }}</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    `,
  }),
};
