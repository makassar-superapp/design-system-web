import type { Meta, StoryObj } from "@storybook/vue3";
import { Home, Inbox, Settings, User } from "lucide-vue-next";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "./index";

const meta: Meta<typeof Sidebar> = {
  title: "UI/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg">
            <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <Home class="size-4" />
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">Acme Inc</span>
              <span class="truncate text-xs">Enterprise</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <a href="#">
                  <Home />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <a href="#">
                  <Inbox />
                  <span>Inbox</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <a href="#">
                  <Settings />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter />
    <SidebarRail />
  </Sidebar>
  <SidebarInset>
    <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div class="flex items-center gap-2 px-4">
        <SidebarTrigger class="-ml-1" />
      </div>
    </header>
    <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div class="grid auto-rows-min gap-4 md:grid-cols-3">
        <div class="aspect-video rounded-xl bg-muted/50" />
        <div class="aspect-video rounded-xl bg-muted/50" />
        <div class="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  </SidebarInset>
</SidebarProvider>`,
      },
    },
  },
  render: () => ({
    components: {
      Sidebar,
      SidebarContent,
      SidebarFooter,
      SidebarGroup,
      SidebarGroupContent,
      SidebarGroupLabel,
      SidebarHeader,
      SidebarInset,
      SidebarMenu,
      SidebarMenuButton,
      SidebarMenuItem,
      SidebarProvider,
      SidebarRail,
      SidebarTrigger,
      Home,
      Inbox,
      Settings,
    },
    template: `
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Home class="size-4" />
                  </div>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">Acme Inc</span>
                    <span class="truncate text-xs">Enterprise</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton as-child>
                      <a href="#">
                        <Home />
                        <span>Home</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton as-child>
                      <a href="#">
                        <Inbox />
                        <span>Inbox</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton as-child>
                      <a href="#">
                        <Settings />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter />
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div class="flex items-center gap-2 px-4">
              <SidebarTrigger class="-ml-1" />
            </div>
          </header>
          <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div class="grid auto-rows-min gap-4 md:grid-cols-3">
              <div class="aspect-video rounded-xl bg-muted/50" />
              <div class="aspect-video rounded-xl bg-muted/50" />
              <div class="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    `,
  }),
};

export const WithFooter: Story = {
  parameters: {
    docs: {
      source: {
        code: `<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg">
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">My Application</span>
              <span class="truncate text-xs">v1.0.0</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <a href="#">
                  <Home />
                  <span>Dashboard</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton as-child>
            <a href="#">
              <User />
              <span>Profile</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
  <SidebarInset>
    <header class="flex h-16 shrink-0 items-center gap-2 px-4">
      <SidebarTrigger />
      <h1 class="text-lg font-semibold">Dashboard</h1>
    </header>
    <div class="flex flex-1 flex-col gap-4 p-4">
      <div class="rounded-xl bg-muted/50 p-8">
        <p class="text-muted-foreground">Main content area</p>
      </div>
    </div>
  </SidebarInset>
</SidebarProvider>`,
      },
    },
  },
  render: () => ({
    components: {
      Sidebar,
      SidebarContent,
      SidebarFooter,
      SidebarGroup,
      SidebarGroupContent,
      SidebarGroupLabel,
      SidebarHeader,
      SidebarInset,
      SidebarMenu,
      SidebarMenuButton,
      SidebarMenuItem,
      SidebarProvider,
      SidebarRail,
      SidebarTrigger,
      Home,
      User,
    },
    template: `
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">My Application</span>
                    <span class="truncate text-xs">v1.0.0</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton as-child>
                      <a href="#">
                        <Home />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <a href="#">
                    <User />
                    <span>Profile</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <header class="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger />
            <h1 class="text-lg font-semibold">Dashboard</h1>
          </header>
          <div class="flex flex-1 flex-col gap-4 p-4">
            <div class="rounded-xl bg-muted/50 p-8">
              <p class="text-muted-foreground">Main content area</p>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    `,
  }),
};

export const MultipleGroups: Story = {
  parameters: {
    docs: {
      source: {
        code: `<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Main</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <a href="#">
                  <Home />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Settings</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <a href="#">
                  <Settings />
                  <span>Preferences</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <a href="#">
                  <User />
                  <span>Account</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
  <SidebarInset>
    <header class="flex h-16 shrink-0 items-center gap-2 px-4">
      <SidebarTrigger />
    </header>
    <div class="flex flex-1 flex-col gap-4 p-4">
      <p class="text-muted-foreground">Content goes here</p>
    </div>
  </SidebarInset>
</SidebarProvider>`,
      },
    },
  },
  render: () => ({
    components: {
      Sidebar,
      SidebarContent,
      SidebarGroup,
      SidebarGroupContent,
      SidebarGroupLabel,
      SidebarInset,
      SidebarMenu,
      SidebarMenuButton,
      SidebarMenuItem,
      SidebarProvider,
      SidebarRail,
      SidebarTrigger,
      Home,
      Settings,
      User,
    },
    template: `
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton as-child>
                      <a href="#">
                        <Home />
                        <span>Home</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton as-child>
                      <a href="#">
                        <Settings />
                        <span>Preferences</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton as-child>
                      <a href="#">
                        <User />
                        <span>Account</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <header class="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger />
          </header>
          <div class="flex flex-1 flex-col gap-4 p-4">
            <p class="text-muted-foreground">Content goes here</p>
          </div>
        </SidebarInset>
      </SidebarProvider>
    `,
  }),
};
