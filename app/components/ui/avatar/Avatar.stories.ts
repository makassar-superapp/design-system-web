import type { Meta, StoryObj } from "@storybook/vue3";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "The size of the avatar",
    },
    shape: {
      control: "select",
      options: ["circle", "base"],
      description: "The shape of the avatar",
    },
    src: {
      control: "text",
      description: "The image source URL",
    },
    alt: {
      control: "text",
      description: "The alt text for the image",
    },
    initial: {
      control: "text",
      description: "The initial letter(s) to display when no image is provided",
    },
    online: {
      control: "boolean",
      description: "Whether to show online indicator",
    },
    verified: {
      control: "boolean",
      description: "Whether to show verified badge",
    },
  },
  args: {
    size: "md",
    shape: "circle",
    online: null,
    verified: false,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const FullExample: Story = {
  args: {
    size: "md",
    shape: "circle",
    src: "https://picsum.photos/id/1027/40/40",
    alt: "User Avatar",
    online: true,
    verified: true,
    onlineSize: 10,
    verifiedSize: 16,
  },
  parameters: {
    actions: { disable: false },
    controls: { disable: false },
  },
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: '<Avatar v-bind="args" />',
  }),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Avatar size="xs" src="https://picsum.photos/id/64/24/24" alt="A1" />
<Avatar size="sm" src="https://picsum.photos/id/1025/32/32" alt="A2" />
<Avatar size="md" src="https://picsum.photos/id/1027/40/40" alt="A3" />
<Avatar size="lg" src="https://picsum.photos/id/103/48/48" alt="A4" />
<Avatar size="xl" src="https://picsum.photos/id/104/56/56" alt="A5" />
<Avatar size="2xl" src="https://picsum.photos/id/105/64/64" alt="A6" />`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar size="xs" src="https://picsum.photos/id/64/24/24" alt="A1" />
        <Avatar size="sm" src="https://picsum.photos/id/1025/32/32" alt="A2" />
        <Avatar size="md" src="https://picsum.photos/id/1027/40/40" alt="A3" />
        <Avatar size="lg" src="https://picsum.photos/id/103/48/48" alt="A4" />
        <Avatar size="xl" src="https://picsum.photos/id/104/56/56" alt="A5" />
        <Avatar size="2xl" src="https://picsum.photos/id/105/64/64" alt="A6" />
      </div>
    `,
  }),
};

export const Shapes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Avatar shape="circle" src="https://picsum.photos/id/1027/40/40" alt="Circle" />
<Avatar shape="base" src="https://picsum.photos/id/1027/40/40" alt="Rounded" />`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar shape="circle" src="https://picsum.photos/id/1027/40/40" alt="Circle" />
        <Avatar shape="base" src="https://picsum.photos/id/1027/40/40" alt="Rounded" />
      </div>
    `,
  }),
};

export const WithInitials: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Avatar size="xs" initial="A" />
<Avatar size="sm" initial="A" />
<Avatar size="md" initial="AB" />
<Avatar size="lg" initial="AB" />
<Avatar size="xl" initial="ABC" />
<Avatar size="2xl" initial="ABC" />`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar size="xs" initial="A" />
        <Avatar size="sm" initial="A" />
        <Avatar size="md" initial="AB" />
        <Avatar size="lg" initial="AB" />
        <Avatar size="xl" initial="ABC" />
        <Avatar size="2xl" initial="ABC" />
      </div>
    `,
  }),
};

export const Fallback: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Avatar size="xs" />
<Avatar size="sm" />
<Avatar size="md" />
<Avatar size="lg" />
<Avatar size="xl" />
<Avatar size="2xl" />`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar size="xs" />
        <Avatar size="sm" />
        <Avatar size="md" />
        <Avatar size="lg" />
        <Avatar size="xl" />
        <Avatar size="2xl" />
      </div>
    `,
  }),
};

export const Verified: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size="xs"
  src="https://picsum.photos/id/64/24/24"
  alt="A1"
  verified
  :verified-size="12"
/>
<Avatar
  size="sm"
  src="https://picsum.photos/id/1025/32/32"
  alt="A2"
  verified
  :verified-size="14"
/>
<Avatar
  size="md"
  src="https://picsum.photos/id/1027/40/40"
  alt="A3"
  verified
  :verified-size="16"
/>
<Avatar
  size="lg"
  src="https://picsum.photos/id/103/48/48"
  alt="A4"
  verified
  :verified-size="18"
/>
<Avatar
  size="xl"
  src="https://picsum.photos/id/104/56/56"
  alt="A5"
  verified
  :verified-size="20"
/>
<Avatar
  size="2xl"
  src="https://picsum.photos/id/105/64/64"
  alt="A6"
  verified
  :verified-size="22"
/>`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar
          size="xs"
          src="https://picsum.photos/id/64/24/24"
          alt="A1"
          verified
          :verified-size="12"
        />
        <Avatar
          size="sm"
          src="https://picsum.photos/id/1025/32/32"
          alt="A2"
          verified
          :verified-size="14"
        />
        <Avatar
          size="md"
          src="https://picsum.photos/id/1027/40/40"
          alt="A3"
          verified
          :verified-size="16"
        />
        <Avatar
          size="lg"
          src="https://picsum.photos/id/103/48/48"
          alt="A4"
          verified
          :verified-size="18"
        />
        <Avatar
          size="xl"
          src="https://picsum.photos/id/104/56/56"
          alt="A5"
          verified
          :verified-size="20"
        />
        <Avatar
          size="2xl"
          src="https://picsum.photos/id/105/64/64"
          alt="A6"
          verified
          :verified-size="22"
        />
      </div>
    `,
  }),
};

export const Online: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size="xs"
  src="https://picsum.photos/id/64/24/24"
  alt="A1"
  :online="true"
  :online-size="6"
/>
<Avatar
  size="sm"
  src="https://picsum.photos/id/1025/32/32"
  alt="A2"
  :online="true"
  :online-size="8"
/>
<Avatar
  size="md"
  src="https://picsum.photos/id/1027/40/40"
  alt="A3"
  :online="true"
  :online-size="10"
/>
<Avatar
  size="lg"
  src="https://picsum.photos/id/103/48/48"
  alt="A4"
  :online="true"
  :online-size="12"
/>
<Avatar
  size="xl"
  src="https://picsum.photos/id/104/56/56"
  alt="A5"
  :online="true"
  :online-size="14"
/>
<Avatar
  size="2xl"
  src="https://picsum.photos/id/105/64/64"
  alt="A6"
  :online="true"
  :online-size="16"
/>`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar
          size="xs"
          src="https://picsum.photos/id/64/24/24"
          alt="A1"
          :online="true"
          :online-size="6"
        />
        <Avatar
          size="sm"
          src="https://picsum.photos/id/1025/32/32"
          alt="A2"
          :online="true"
          :online-size="8"
        />
        <Avatar
          size="md"
          src="https://picsum.photos/id/1027/40/40"
          alt="A3"
          :online="true"
          :online-size="10"
        />
        <Avatar
          size="lg"
          src="https://picsum.photos/id/103/48/48"
          alt="A4"
          :online="true"
          :online-size="12"
        />
        <Avatar
          size="xl"
          src="https://picsum.photos/id/104/56/56"
          alt="A5"
          :online="true"
          :online-size="14"
        />
        <Avatar
          size="2xl"
          src="https://picsum.photos/id/105/64/64"
          alt="A6"
          :online="true"
          :online-size="16"
        />
      </div>
    `,
  }),
};

export const OnlineAway: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size="xs"
  src="https://picsum.photos/id/64/24/24"
  alt="A1"
  :online="false"
  :online-size="6"
/>
<Avatar
  size="sm"
  src="https://picsum.photos/id/1025/32/32"
  alt="A2"
  :online="false"
  :online-size="8"
/>
<Avatar
  size="md"
  src="https://picsum.photos/id/1027/40/40"
  alt="A3"
  :online="false"
  :online-size="10"
/>
<Avatar
  size="lg"
  src="https://picsum.photos/id/103/48/48"
  alt="A4"
  :online="false"
  :online-size="12"
/>
<Avatar
  size="xl"
  src="https://picsum.photos/id/104/56/56"
  alt="A5"
  :online="false"
  :online-size="14"
/>
<Avatar
  size="2xl"
  src="https://picsum.photos/id/105/64/64"
  alt="A6"
  :online="false"
  :online-size="16"
/>`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar
          size="xs"
          src="https://picsum.photos/id/64/24/24"
          alt="A1"
          :online="false"
          :online-size="6"
        />
        <Avatar
          size="sm"
          src="https://picsum.photos/id/1025/32/32"
          alt="A2"
          :online="false"
          :online-size="8"
        />
        <Avatar
          size="md"
          src="https://picsum.photos/id/1027/40/40"
          alt="A3"
          :online="false"
          :online-size="10"
        />
        <Avatar
          size="lg"
          src="https://picsum.photos/id/103/48/48"
          alt="A4"
          :online="false"
          :online-size="12"
        />
        <Avatar
          size="xl"
          src="https://picsum.photos/id/104/56/56"
          alt="A5"
          :online="false"
          :online-size="14"
        />
        <Avatar
          size="2xl"
          src="https://picsum.photos/id/105/64/64"
          alt="A6"
          :online="false"
          :online-size="16"
        />
      </div>
    `,
  }),
};

export const VerifiedOnline: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size="md"
  src="https://picsum.photos/id/1027/40/40"
  alt="User 1"
  verified
  :verified-size="16"
  :online="true"
  :online-size="10"
/>
<Avatar
  size="md"
  src="https://picsum.photos/id/1025/40/40"
  alt="User 2"
  verified
  :verified-size="16"
  :online="false"
  :online-size="10"
/>
<Avatar
  size="lg"
  src="https://picsum.photos/id/103/48/48"
  alt="User 3"
  verified
  :verified-size="18"
  :online="true"
  :online-size="12"
/>
<Avatar
  size="xl"
  src="https://picsum.photos/id/104/56/56"
  alt="User 4"
  verified
  :verified-size="20"
  :online="true"
  :online-size="14"
/>`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar
          size="md"
          src="https://picsum.photos/id/1027/40/40"
          alt="User 1"
          verified
          :verified-size="16"
          :online="true"
          :online-size="10"
        />
        <Avatar
          size="md"
          src="https://picsum.photos/id/1025/40/40"
          alt="User 2"
          verified
          :verified-size="16"
          :online="false"
          :online-size="10"
        />
        <Avatar
          size="lg"
          src="https://picsum.photos/id/103/48/48"
          alt="User 3"
          verified
          :verified-size="18"
          :online="true"
          :online-size="12"
        />
        <Avatar
          size="xl"
          src="https://picsum.photos/id/104/56/56"
          alt="User 4"
          verified
          :verified-size="20"
          :online="true"
          :online-size="14"
        />
      </div>
    `,
  }),
};

export const InitialsVerified: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Avatar
  size="md"
  initial="JD"
  verified
  :verified-size="16"
/>
<Avatar
  size="md"
  initial="AB"
  verified
  :verified-size="16"
  :online="true"
  :online-size="10"
/>
<Avatar
  size="lg"
  initial="CD"
  verified
  :verified-size="18"
  :online="false"
  :online-size="12"
/>`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar
          size="md"
          initial="JD"
          verified
          :verified-size="16"
        />
        <Avatar
          size="md"
          initial="AB"
          verified
          :verified-size="16"
          :online="true"
          :online-size="10"
        />
        <Avatar
          size="lg"
          initial="CD"
          verified
          :verified-size="18"
          :online="false"
          :online-size="12"
        />
      </div>
    `,
  }),
};

export const AvatarGroup: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="flex -space-x-4">
  <Avatar size="md" src="https://picsum.photos/id/1027/40/40" alt="User 1" class="ring-2 ring-background" />
  <Avatar size="md" src="https://picsum.photos/id/1025/40/40" alt="User 2" class="ring-2 ring-background" />
  <Avatar size="md" src="https://picsum.photos/id/103/40/40" alt="User 3" class="ring-2 ring-background" />
  <Avatar size="md" src="https://picsum.photos/id/104/40/40" alt="User 4" class="ring-2 ring-background" />
  <Avatar size="md" initial="+5" class="ring-2 ring-background bg-muted" />
</div>`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex -space-x-4">
        <Avatar size="md" src="https://picsum.photos/id/1027/40/40" alt="User 1" class="ring-2 ring-background" />
        <Avatar size="md" src="https://picsum.photos/id/1025/40/40" alt="User 2" class="ring-2 ring-background" />
        <Avatar size="md" src="https://picsum.photos/id/103/40/40" alt="User 3" class="ring-2 ring-background" />
        <Avatar size="md" src="https://picsum.photos/id/104/40/40" alt="User 4" class="ring-2 ring-background" />
        <Avatar size="md" initial="+5" class="ring-2 ring-background bg-muted" />
      </div>
    `,
  }),
};

export const WithText: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div class="flex items-center gap-3">
  <Avatar
    size="md"
    src="https://picsum.photos/id/1027/40/40"
    alt="John Doe"
    verified
    :verified-size="16"
    :online="true"
    :online-size="10"
  />
  <div>
    <p class="text-sm font-medium">John Doe</p>
    <p class="text-xs text-muted-foreground">@johndoe</p>
  </div>
</div>

<div class="flex items-center gap-3">
  <Avatar
    size="lg"
    initial="AB"
    :online="false"
    :online-size="12"
  />
  <div>
    <p class="text-base font-medium">Alice Brown</p>
    <p class="text-sm text-muted-foreground">Away</p>
  </div>
</div>`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <Avatar
            size="md"
            src="https://picsum.photos/id/1027/40/40"
            alt="John Doe"
            verified
            :verified-size="16"
            :online="true"
            :online-size="10"
          />
          <div>
            <p class="text-sm font-medium">John Doe</p>
            <p class="text-xs text-muted-foreground">@johndoe</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <Avatar
            size="lg"
            initial="AB"
            :online="false"
            :online-size="12"
          />
          <div>
            <p class="text-base font-medium">Alice Brown</p>
            <p class="text-sm text-muted-foreground">Away</p>
          </div>
        </div>
      </div>
    `,
  }),
};

export const FallbackStates: Story = {
  parameters: {
    docs: {
      source: {
        code: `<!-- With Image -->
<Avatar size="md" src="https://picsum.photos/id/1027/40/40" alt="User" />

<!-- With Initial -->
<Avatar size="md" initial="AB" />

<!-- Default Fallback (User Icon) -->
<Avatar size="md" />

<!-- With Online Status -->
<Avatar size="md" :online="true" :online-size="10" />

<!-- With Verified Badge -->
<Avatar size="md" verified :verified-size="16" />

<!-- All Combined -->
<Avatar
  size="md"
  verified
  :verified-size="16"
  :online="true"
  :online-size="10"
/>`,
      },
    },
  },
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4 flex-wrap">
        <div class="flex flex-col items-center gap-2">
          <Avatar size="md" src="https://picsum.photos/id/1027/40/40" alt="User" />
          <span class="text-xs text-muted-foreground">With Image</span>
        </div>

        <div class="flex flex-col items-center gap-2">
          <Avatar size="md" initial="AB" />
          <span class="text-xs text-muted-foreground">With Initial</span>
        </div>

        <div class="flex flex-col items-center gap-2">
          <Avatar size="md" />
          <span class="text-xs text-muted-foreground">Default</span>
        </div>

        <div class="flex flex-col items-center gap-2">
          <Avatar size="md" :online="true" :online-size="10" />
          <span class="text-xs text-muted-foreground">Online</span>
        </div>

        <div class="flex flex-col items-center gap-2">
          <Avatar size="md" verified :verified-size="16" />
          <span class="text-xs text-muted-foreground">Verified</span>
        </div>

        <div class="flex flex-col items-center gap-2">
          <Avatar
            size="md"
            verified
            :verified-size="16"
            :online="true"
            :online-size="10"
          />
          <span class="text-xs text-muted-foreground">All</span>
        </div>
      </div>
    `,
  }),
};
