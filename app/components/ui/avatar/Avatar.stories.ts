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
