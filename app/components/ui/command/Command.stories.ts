import type { Meta, StoryObj } from "@storybook/vue3";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from ".";
import {
  Calendar,
  Calculator,
  Smile,
  User,
  CreditCard,
  Settings,
  Music,
  Tv,
  Radio,
  MessageCircle,
  Mail,
  Bell,
  Clock,
  Search,
} from "lucide-vue-next";

const meta: Meta<typeof Command> = {
  title: "UI/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof Command>;

export const FullExample: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Complete interactive command palette example with search and keyboard shortcuts.",
      },
      source: {
        code: `<Command class="rounded-lg border shadow-md md:min-w-[450px]">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem value="calendar">
        <Calendar />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem value="emoji">
        <Smile />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem disabled value="calculator">
        <Calculator />
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem value="profile">
        <User />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem value="billing">
        <CreditCard />
        <span>Billing</span>
        <CommandShortcut>⌘B</CommandShortcut>
      </CommandItem>
      <CommandItem value="settings">
        <Settings />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
      },
    },
  },
  render: () => ({
    components: {
      Command,
      CommandInput,
      CommandList,
      CommandEmpty,
      CommandGroup,
      CommandItem,
      CommandSeparator,
      CommandShortcut,
      Calendar,
      Calculator,
      Smile,
      User,
      CreditCard,
      Settings,
    },
    template: `
      <Command class="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem value="calendar">
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem value="emoji">
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem disabled value="calculator">
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem value="profile">
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem value="billing">
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem value="settings">
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `,
  }),
};

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Command class="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem value="calendar">
        <Calendar />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem value="emoji">
        <Smile />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem value="calculator">
        <Calculator />
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
      },
    },
  },
  render: () => ({
    components: {
      Command,
      CommandInput,
      CommandList,
      CommandEmpty,
      CommandGroup,
      CommandItem,
      Calendar,
      Calculator,
      Smile,
    },
    template: `
      <Command class="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem value="calendar">
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem value="emoji">
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem value="calculator">
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `,
  }),
};

export const WithKeyboardShortcuts: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Command class="rounded-lg border shadow-md">
  <CommandInput placeholder="Search commands..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem value="search">
        <Search />
        <span>Search</span>
        <CommandShortcut>⌘K</CommandShortcut>
      </CommandItem>
      <CommandItem value="profile">
        <User />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem value="settings">
        <Settings />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
      },
    },
  },
  render: () => ({
    components: {
      Command,
      CommandInput,
      CommandList,
      CommandEmpty,
      CommandGroup,
      CommandItem,
      CommandShortcut,
      Search,
      User,
      Settings,
    },
    template: `
      <Command class="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Search commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem value="search">
              <Search />
              <span>Search</span>
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
            <CommandItem value="profile">
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem value="settings">
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `,
  }),
};

export const MultipleGroups: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Command class="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Media">
      <CommandItem value="music">
        <Music />
        <span>Music</span>
      </CommandItem>
      <CommandItem value="tv">
        <Tv />
        <span>TV Shows</span>
      </CommandItem>
      <CommandItem value="radio">
        <Radio />
        <span>Radio</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Communication">
      <CommandItem value="messages">
        <MessageCircle />
        <span>Messages</span>
      </CommandItem>
      <CommandItem value="mail">
        <Mail />
        <span>Mail</span>
      </CommandItem>
      <CommandItem value="notifications">
        <Bell />
        <span>Notifications</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
      },
    },
  },
  render: () => ({
    components: {
      Command,
      CommandInput,
      CommandList,
      CommandEmpty,
      CommandGroup,
      CommandItem,
      CommandSeparator,
      Music,
      Tv,
      Radio,
      MessageCircle,
      Mail,
      Bell,
    },
    template: `
      <Command class="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Media">
            <CommandItem value="music">
              <Music />
              <span>Music</span>
            </CommandItem>
            <CommandItem value="tv">
              <Tv />
              <span>TV Shows</span>
            </CommandItem>
            <CommandItem value="radio">
              <Radio />
              <span>Radio</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Communication">
            <CommandItem value="messages">
              <MessageCircle />
              <span>Messages</span>
            </CommandItem>
            <CommandItem value="mail">
              <Mail />
              <span>Mail</span>
            </CommandItem>
            <CommandItem value="notifications">
              <Bell />
              <span>Notifications</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `,
  }),
};

export const WithDisabledItems: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Command class="rounded-lg border shadow-md">
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem value="profile">
        <User />
        <span>Profile</span>
      </CommandItem>
      <CommandItem value="settings" disabled>
        <Settings />
        <span>Settings (Disabled)</span>
      </CommandItem>
      <CommandItem value="notifications">
        <Bell />
        <span>Notifications</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
      },
    },
  },
  render: () => ({
    components: {
      Command,
      CommandInput,
      CommandList,
      CommandEmpty,
      CommandGroup,
      CommandItem,
      User,
      Settings,
      Bell,
    },
    template: `
      <Command class="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem value="profile">
              <User />
              <span>Profile</span>
            </CommandItem>
            <CommandItem value="settings" disabled>
              <Settings />
              <span>Settings (Disabled)</span>
            </CommandItem>
            <CommandItem value="notifications">
              <Bell />
              <span>Notifications</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `,
  }),
};

export const WithoutIcons: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Command class="rounded-lg border shadow-md">
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Quick Actions">
      <CommandItem value="action1">
        <span>Action One</span>
      </CommandItem>
      <CommandItem value="action2">
        <span>Action Two</span>
      </CommandItem>
      <CommandItem value="action3">
        <span>Action Three</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
      },
    },
  },
  render: () => ({
    components: {
      Command,
      CommandInput,
      CommandList,
      CommandEmpty,
      CommandGroup,
      CommandItem,
    },
    template: `
      <Command class="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick Actions">
            <CommandItem value="action1">
              <span>Action One</span>
            </CommandItem>
            <CommandItem value="action2">
              <span>Action Two</span>
            </CommandItem>
            <CommandItem value="action3">
              <span>Action Three</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `,
  }),
};

export const WithCustomWidth: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Command class="rounded-lg border shadow-md w-[600px]">
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Recent">
      <CommandItem value="recent1">
        <Clock />
        <span>Recently viewed item 1</span>
      </CommandItem>
      <CommandItem value="recent2">
        <Clock />
        <span>Recently viewed item 2</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
      },
    },
  },
  render: () => ({
    components: {
      Command,
      CommandInput,
      CommandList,
      CommandEmpty,
      CommandGroup,
      CommandItem,
      Clock,
    },
    template: `
      <Command class="rounded-lg border shadow-md w-[600px]">
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Recent">
            <CommandItem value="recent1">
              <Clock />
              <span>Recently viewed item 1</span>
            </CommandItem>
            <CommandItem value="recent2">
              <Clock />
              <span>Recently viewed item 2</span>
            </CommandItem>
            <CommandItem value="recent3">
              <Clock />
              <span>Recently viewed item 3</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `,
  }),
};

export const SearchableList: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
const items = [
  { value: "apple", label: "Apple", icon: "🍎" },
  { value: "banana", label: "Banana", icon: "🍌" },
  { value: "orange", label: "Orange", icon: "🍊" },
  { value: "grape", label: "Grape", icon: "🍇" },
  { value: "watermelon", label: "Watermelon", icon: "🍉" },
  { value: "strawberry", label: "Strawberry", icon: "🍓" },
];
</script>

<Command class="rounded-lg border shadow-md">
  <CommandInput placeholder="Search fruits..." />
  <CommandList>
    <CommandEmpty>No fruits found.</CommandEmpty>
    <CommandGroup heading="Fruits">
      <CommandItem 
        v-for="item in items" 
        :key="item.value"
        :value="item.value"
      >
        <span>{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
      },
    },
  },
  render: () => ({
    components: {
      Command,
      CommandInput,
      CommandList,
      CommandEmpty,
      CommandGroup,
      CommandItem,
    },
    setup() {
      const items = [
        { value: "apple", label: "Apple", icon: "🍎" },
        { value: "banana", label: "Banana", icon: "🍌" },
        { value: "orange", label: "Orange", icon: "🍊" },
        { value: "grape", label: "Grape", icon: "🍇" },
        { value: "watermelon", label: "Watermelon", icon: "🍉" },
        { value: "strawberry", label: "Strawberry", icon: "🍓" },
      ];
      return { items };
    },
    template: `
      <Command class="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Search fruits..." />
        <CommandList>
          <CommandEmpty>No fruits found.</CommandEmpty>
          <CommandGroup heading="Fruits">
            <CommandItem 
              v-for="item in items" 
              :key="item.value"
              :value="item.value"
            >
              <span>{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `,
  }),
};
