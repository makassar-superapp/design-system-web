import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./index";

const meta: Meta<typeof Sheet> = {
  title: "UI/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Sheet>
  <SheetTrigger as-child>
    <Button variant="outline">
      Open
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div class="grid flex-1 auto-rows-min gap-6 px-4">
      <div class="grid gap-3">
        <Label for="sheet-demo-name">Name</Label>
        <Input id="sheet-demo-name" default-value="Pedro Duarte" />
      </div>
      <div class="grid gap-3">
        <Label for="sheet-demo-username">Username</Label>
        <Input id="sheet-demo-username" default-value="@peduarte" />
      </div>
    </div>
    <SheetFooter>
      <Button type="submit">
        Save changes
      </Button>
      <SheetClose as-child>
        <Button variant="outline">
          Close
        </Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
      },
    },
  },
  render: () => ({
    components: {
      Sheet,
      SheetClose,
      SheetContent,
      SheetDescription,
      SheetFooter,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
      Button,
      Input,
      Label,
    },
    template: `
      <Sheet>
        <SheetTrigger as-child>
          <Button variant="outline">
            Open
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div class="grid flex-1 auto-rows-min gap-6 px-4">
            <div class="grid gap-3">
              <Label for="sheet-demo-name">Name</Label>
              <Input id="sheet-demo-name" default-value="Pedro Duarte" />
            </div>
            <div class="grid gap-3">
              <Label for="sheet-demo-username">Username</Label>
              <Input id="sheet-demo-username" default-value="@peduarte" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">
              Save changes
            </Button>
            <SheetClose as-child>
              <Button variant="outline">
                Close
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    `,
  }),
};

export const SimpleSheet: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Sheet>
  <SheetTrigger as-child>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Welcome!</SheetTitle>
      <SheetDescription>
        This is a simple sheet example.
      </SheetDescription>
    </SheetHeader>
    <div class="px-4 py-6">
      <p class="text-sm text-muted-foreground">
        Sheet content goes here. You can add any content you want.
      </p>
    </div>
  </SheetContent>
</Sheet>`,
      },
    },
  },
  render: () => ({
    components: {
      Sheet,
      SheetClose,
      SheetContent,
      SheetDescription,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
      Button,
    },
    template: `
      <Sheet>
        <SheetTrigger as-child>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Welcome!</SheetTitle>
            <SheetDescription>
              This is a simple sheet example.
            </SheetDescription>
          </SheetHeader>
          <div class="px-4 py-6">
            <p class="text-sm text-muted-foreground">
              Sheet content goes here. You can add any content you want.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    `,
  }),
};
