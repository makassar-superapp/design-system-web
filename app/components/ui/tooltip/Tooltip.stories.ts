import type { Meta, StoryObj } from "@storybook/vue3";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from ".";
import Button from "../button/Button.vue";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
      },
    },
  },
  render: () => ({
    components: {
      TooltipProvider,
      Tooltip,
      TooltipTrigger,
      TooltipContent,
      Button,
    },
    template: `
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    `,
  }),
};

export const Positions: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button>Top</Button>
    </TooltipTrigger>
    <TooltipContent side="top">
      <p>Tooltip on top</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
      },
    },
  },
  render: () => ({
    components: {
      TooltipProvider,
      Tooltip,
      TooltipTrigger,
      TooltipContent,
      Button,
    },
    template: `
      <TooltipProvider>
        <div class="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Tooltip on top</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Tooltip on right</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Tooltip on bottom</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Tooltip on left</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `,
  }),
};

export const OnIcon: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger as-child>
      <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2">
        <svg class="h-4 w-4" />
      </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Settings</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
      },
    },
  },
  render: () => ({
    components: { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent },
    template: `
      <TooltipProvider>
        <div class="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger as-child>
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger as-child>
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Billing</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `,
  }),
};

export const WithDelay: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TooltipProvider :delay-duration="500">
  <Tooltip>
    <TooltipTrigger as-child>
      <Button variant="outline">Hover (500ms delay)</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Tooltip with delay</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
      },
    },
  },
  render: () => ({
    components: {
      TooltipProvider,
      Tooltip,
      TooltipTrigger,
      TooltipContent,
      Button,
    },
    template: `
      <div class="flex gap-4">
        <TooltipProvider :delay-duration="0">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">No delay</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Instant tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider :delay-duration="500">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">500ms delay</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delayed tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    `,
  }),
};

export const RichContent: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button variant="outline">Hover for details</Button>
    </TooltipTrigger>
    <TooltipContent class="max-w-xs">
      <div class="space-y-1">
        <p class="font-semibold">Feature Name</p>
        <p class="text-sm text-muted-foreground">
          This is a detailed description of the feature.
        </p>
      </div>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
      },
    },
  },
  render: () => ({
    components: {
      TooltipProvider,
      Tooltip,
      TooltipTrigger,
      TooltipContent,
      Button,
    },
    template: `
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="outline">Hover for details</Button>
          </TooltipTrigger>
          <TooltipContent class="max-w-xs">
            <div class="space-y-1">
              <p class="font-semibold">Pro Feature</p>
              <p class="text-sm text-muted-foreground">
                This feature is only available for Pro users. Upgrade your plan to unlock it.
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    `,
  }),
};
