import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-vue-next";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./index";

const meta: Meta<typeof DropdownMenu> = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<DropdownMenu>
  <DropdownMenuTrigger as-child>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent class="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <User class="mr-2 h-4 w-4" />
        <span>Profile</span>
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CreditCard class="mr-2 h-4 w-4" />
        <span>Billing</span>
        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings class="mr-2 h-4 w-4" />
        <span>Settings</span>
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Keyboard class="mr-2 h-4 w-4" />
        <span>Keyboard shortcuts</span>
        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <Users class="mr-2 h-4 w-4" />
        <span>Team</span>
      </DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <UserPlus class="mr-2 h-4 w-4" />
          <span>Invite users</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Mail class="mr-2 h-4 w-4" />
              <span>Email</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquare class="mr-2 h-4 w-4" />
              <span>Message</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusCircle class="mr-2 h-4 w-4" />
              <span>More...</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
      <DropdownMenuItem>
        <Plus class="mr-2 h-4 w-4" />
        <span>New Team</span>
        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Github class="mr-2 h-4 w-4" />
      <span>GitHub</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <LifeBuoy class="mr-2 h-4 w-4" />
      <span>Support</span>
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
      <Cloud class="mr-2 h-4 w-4" />
      <span>API</span>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOut class="mr-2 h-4 w-4" />
      <span>Log out</span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      },
    },
  },
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuGroup,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuPortal,
      DropdownMenuSeparator,
      DropdownMenuShortcut,
      DropdownMenuSub,
      DropdownMenuSubContent,
      DropdownMenuSubTrigger,
      DropdownMenuTrigger,
      Button,
      User,
      CreditCard,
      Settings,
      Keyboard,
      Users,
      UserPlus,
      Mail,
      MessageSquare,
      PlusCircle,
      Plus,
      Github,
      LifeBuoy,
      Cloud,
      LogOut,
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User class="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard class="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings class="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard class="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users class="mr-2 h-4 w-4" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus class="mr-2 h-4 w-4" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail class="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare class="mr-2 h-4 w-4" />
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle class="mr-2 h-4 w-4" />
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Plus class="mr-2 h-4 w-4" />
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github class="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy class="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud class="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut class="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `,
  }),
};

export const WithRadioGroup: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup lang="ts">
import { ref } from 'vue'

const position = ref('bottom')
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">Position</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model:model-value="position">
        <DropdownMenuRadioItem value="top">
          Top
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="bottom">
          Bottom
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="right">
          Right
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>`,
      },
    },
  },
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuLabel,
      DropdownMenuRadioGroup,
      DropdownMenuRadioItem,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
      Button,
    },
    setup() {
      const position = ref("bottom");

      return {
        position,
      };
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup v-model:model-value="position">
            <DropdownMenuRadioItem value="top">
              Top
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">
              Bottom
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">
              Right
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    `,
  }),
};

export const Simple: Story = {
  parameters: {
    docs: {
      source: {
        code: `<DropdownMenu>
  <DropdownMenuTrigger as-child>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      },
    },
  },
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
      Button,
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `,
  }),
};
