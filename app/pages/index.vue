<script setup lang="ts">
import { showErrorToast } from "~/utils/sonnerHelpers";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeadCell,
  TableCell,
  TableSelection,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, VerifiedIndicator } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Chip, ChipClose, ChipCount } from "@/components/ui/chips";
import { Text } from "@/components/ui/text";
import { LoaderCircle } from "@/components/ui/loader";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Alert } from "@/components/ui/alert";
import { Snackbar } from "@/components/ui/snackbar";
import { Notification } from "@/components/ui/notification";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useMagicKeys, whenever } from "@vueuse/core";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Plus,
  SearchIcon,
} from "lucide-vue-next";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const open = ref(false);
const keys = useMagicKeys();
const meta_j = toRef(keys, "meta_j");
whenever(meta_j, () => {
  open.value = true;
});

const valueLine = ref("overview");
const valueSegmented = ref("profile");
const valueItemsLine = ref("one");
const valueItemsSegmented = ref("one");
const tableRows = ref([
  {
    id: 1,
    name: "Invoice INV-001",
    status: "Paid",
    tags: ["Retail", "Priority"],
    enabled: true,
    selected: false,
  },
  {
    id: 2,
    name: "Invoice INV-002",
    status: "Pending",
    tags: ["Wholesale"],
    enabled: false,
    selected: false,
  },
  {
    id: 3,
    name: "Invoice INV-003",
    status: "Failed",
    tags: ["Retail"],
    enabled: false,
    selected: false,
  },
  {
    id: 4,
    name: "Invoice INV-004",
    status: "Paid",
    tags: ["B2B", "Promo"],
    enabled: true,
    selected: false,
  },
  {
    id: 5,
    name: "Invoice INV-005",
    status: "Pending",
    tags: ["Priority"],
    enabled: false,
    selected: false,
  },
]);
const selectedCount = computed(
  () => tableRows.value.filter((r) => r.selected).length
);
const errorInput = ref("testing@gm.");

const value = ref(["banana", "apple"]);
const singleSelect = ref("");
</script>

<template>
  <div class="p-8">
    <!-- Button -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Contoh Varian Button</h2>
      <div class="flex flex-wrap gap-3 items-center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="text">Text</Button>
      </div>

      <div class="space-y-2 mt-4">
        <h3 class="text-base font-medium">Button Normal — Ukuran</h3>
        <div class="flex flex-wrap gap-3 items-center">
          <Button size="sm" variant="primary">Button</Button>
          <Button size="md" variant="primary">Button</Button>
          <Button size="lg" variant="primary">Button</Button>
          <Button size="xl" variant="primary">Button</Button>
        </div>
        <div class="flex flex-wrap gap-3 items-center">
          <Button size="sm" variant="secondary">Button</Button>
          <Button size="md" variant="secondary">Button</Button>
          <Button size="lg" variant="secondary">Button</Button>
          <Button size="xl" variant="secondary">Button</Button>
        </div>
        <div class="flex flex-wrap gap-3 items-center">
          <Button size="sm" variant="tertiary">Button</Button>
          <Button size="md" variant="tertiary">Button</Button>
          <Button size="lg" variant="tertiary">Button</Button>
          <Button size="xl" variant="tertiary">Button</Button>
        </div>
        <div class="flex flex-wrap gap-3 items-center">
          <Button size="sm" variant="ghost">Button</Button>
          <Button size="md" variant="ghost">Button</Button>
          <Button size="lg" variant="ghost">Button</Button>
          <Button size="xl" variant="ghost">Button</Button>
        </div>
        <div class="flex flex-wrap gap-3 items-center">
          <Button size="sm" variant="text">Button</Button>
          <Button size="md" variant="text">Button</Button>
          <Button size="lg" variant="text">Button</Button>
          <Button size="xl" variant="text">Button</Button>
        </div>
      </div>

      <div class="space-y-2 mt-4">
        <h3 class="text-base font-medium">Button Normal — Dengan Ikon</h3>
        <div class="flex flex-wrap gap-3 items-center">
          <Button variant="primary"><User class="size-4" /> Button</Button>
          <Button variant="secondary">Button <User class="size-4" /></Button>
          <Button variant="tertiary"><User class="size-4" /> Button</Button>
          <Button variant="ghost">Button <User class="size-4" /></Button>
          <Button variant="text"><User class="size-4" /> Button</Button>
        </div>
      </div>

      <div class="space-y-2 mt-4">
        <h3 class="text-base font-medium">Button Normal — Icon Only</h3>
        <div class="flex flex-wrap gap-3 items-center">
          <Button size="icon" variant="primary"><User /></Button>
          <Button size="icon-sm" variant="secondary"><User /></Button>
          <Button size="icon-lg" variant="tertiary"><User /></Button>
          <Button size="icon" variant="ghost"><User /></Button>
          <Button size="icon" variant="text"><User /></Button>
        </div>
      </div>

      <div class="space-y-2 mt-4">
        <h3 class="text-base font-medium">Button Normal — Disabled</h3>
        <div class="flex flex-wrap gap-3 items-center">
          <Button variant="primary" :disabled="true">Button</Button>
          <Button variant="secondary" :disabled="true">Button</Button>
          <Button variant="tertiary" :disabled="true">Button</Button>
          <Button variant="ghost" :disabled="true">Button</Button>
          <Button variant="text" :disabled="true">Button</Button>
        </div>
      </div>

      <div class="space-y-2 mt-4">
        <h3 class="text-base font-medium">Button Normal — Loading</h3>
        <div class="flex flex-wrap gap-3 items-center">
          <Button variant="primary" :loading="true">Button</Button>
          <Button variant="secondary" :loading="true">Button</Button>
          <Button variant="tertiary" :loading="true">Button</Button>
          <Button variant="ghost" :loading="true">Button</Button>
          <Button variant="text" :loading="true">Button</Button>
        </div>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Alert</h2>
      <div class="space-y-3">
        <Alert
          variant="neutral"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
        <Alert
          variant="subNeutral"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
        <Alert
          variant="info"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
        <Alert
          variant="warning"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
        <Alert
          variant="success"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
        <Alert
          variant="error"
          title="Alert Title"
          description="Alert description."
          closable
        >
          <template #action>
            <Button variant="text">Button</Button>
          </template>
        </Alert>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Snackbars</h2>
      <div class="space-y-3">
        <Snackbar variant="white" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-red-600">Action</Button>
          </template>
        </Snackbar>
        <Snackbar variant="black" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-white">Action</Button>
          </template>
        </Snackbar>
        <Snackbar variant="info" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-white">Action</Button>
          </template>
        </Snackbar>
        <Snackbar variant="warning" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-white">Action</Button>
          </template>
        </Snackbar>
        <Snackbar variant="destructive" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-white">Action</Button>
          </template>
        </Snackbar>
        <Snackbar variant="success" title="Title" description="Deskripsi">
          <template #action>
            <Button variant="text" class="text-white">Action</Button>
          </template>
        </Snackbar>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Notification</h2>
      <div class="space-y-5">
        <Notification
          variant="success"
          title="Notification title"
          description="Notification description."
          closable
        >
          <template #action>
            <Button variant="text" class="text-red-600">Button</Button>
          </template>
        </Notification>
        <Notification
          variant="info"
          title="Notification title"
          description="Notification description."
          closable
        >
          <template #action>
            <Button variant="text" class="text-red-600">Button</Button>
          </template>
        </Notification>
        <Notification
          variant="warning"
          title="Notification title"
          description="Notification description."
          closable
        >
          <template #action>
            <Button variant="text" class="text-red-600">Button</Button>
          </template>
        </Notification>
        <Notification
          variant="error"
          title="Notification title"
          description="Notification description."
          closable
        >
          <template #action>
            <Button variant="text" class="text-red-600">Button</Button>
          </template>
        </Notification>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Contoh Varian Divider</h2>
      <Divider position="none" />
      <Divider position="left" label="Label" />
      <Divider position="center">Label</Divider>
      <Divider position="right" label="Label" />

      <div class="space-y-2">
        <Divider position="center" size="sm">Label</Divider>
        <Divider position="center" size="lg">Label</Divider>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Avatar — Sizes</h2>
      <div class="flex items-center gap-4">
        <Avatar size="xs" src="https://picsum.photos/id/64/24/24" alt="A1" />
        <Avatar size="sm" src="https://picsum.photos/id/1025/32/32" alt="A2" />
        <Avatar size="md" src="https://picsum.photos/id/1027/40/40" alt="A3" />
        <Avatar size="lg" src="https://picsum.photos/id/103/48/48" alt="A4" />
        <Avatar size="xl" src="https://picsum.photos/id/104/56/56" alt="A5" />
        <Avatar size="2xl" src="https://picsum.photos/id/105/64/64" alt="A6" />
      </div>
      <h2 class="text-xl font-semibold">Avatar — Verified</h2>
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
      <div class="flex items-center gap-4">
        <Avatar size="xs" verified :verified-size="12" />
        <Avatar size="sm" verified :verified-size="14" />
        <Avatar size="md" verified :verified-size="16" />
        <Avatar size="lg" verified :verified-size="18" />
        <Avatar size="xl" verified :verified-size="20" />
        <Avatar size="2xl" verified :verified-size="22" />
      </div>
      <div class="flex items-center gap-4">
        <Avatar size="xs" initial="A" verified :verified-size="12" />
        <Avatar size="sm" initial="A" verified :verified-size="14" />
        <Avatar size="md" initial="A" verified :verified-size="16" />
        <Avatar size="lg" initial="A" verified :verified-size="18" />
        <Avatar size="xl" initial="A" verified :verified-size="20" />
        <Avatar size="2xl" initial="A" verified :verified-size="22" />
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Avatar — Online</h2>
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
      <div class="flex items-center gap-4">
        <Avatar size="xs" :online="true" :online-size="6" />
        <Avatar size="sm" :online="true" :online-size="8" />
        <Avatar size="md" :online="true" :online-size="10" />
        <Avatar size="lg" :online="true" :online-size="12" />
        <Avatar size="xl" :online="true" :online-size="14" />
        <Avatar size="2xl" :online="true" :online-size="16" />
      </div>
      <div class="flex items-center gap-4">
        <Avatar size="xs" initial="A" :online="true" :online-size="6" />
        <Avatar size="sm" initial="A" :online="true" :online-size="8" />
        <Avatar size="md" initial="A" :online="true" :online-size="10" />
        <Avatar size="lg" initial="A" :online="true" :online-size="12" />
        <Avatar size="xl" initial="A" :online="true" :online-size="14" />
        <Avatar size="2xl" initial="A" :online="true" :online-size="16" />
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Verified Indicator</h2>
      <div class="flex items-center gap-4">
        <div class="relative" style="width: 12px; height: 12px">
          <VerifiedIndicator :size="12" />
        </div>
        <div class="relative" style="width: 14px; height: 14px">
          <VerifiedIndicator :size="14" />
        </div>
        <div class="relative" style="width: 16px; height: 16px">
          <VerifiedIndicator :size="16" />
        </div>
        <div class="relative" style="width: 18px; height: 18px">
          <VerifiedIndicator :size="18" />
        </div>
        <div class="relative" style="width: 20px; height: 20px">
          <VerifiedIndicator :size="20" />
        </div>
        <div class="relative" style="width: 22px; height: 22px">
          <VerifiedIndicator :size="22" />
        </div>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Badge Label Only</h2>
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="sm">Label</Badge>
        <Badge status="processing" size="sm">Label</Badge>
        <Badge status="success" size="sm">Label</Badge>
        <Badge status="warning" size="sm">Label</Badge>
        <Badge status="failed" size="sm">Label</Badge>
        <Badge status="brand" size="sm">Label</Badge>
      </div>
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="md" shape="pill">Label</Badge>
        <Badge status="processing" size="md" shape="pill">Label</Badge>
        <Badge status="success" size="md" shape="pill">Label</Badge>
        <Badge status="warning" size="md" shape="pill">Label</Badge>
        <Badge status="failed" size="md" shape="pill">Label</Badge>
        <Badge status="brand" size="md" shape="pill">Label</Badge>
      </div>
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="lg">Label</Badge>
        <Badge status="processing" size="lg">Label</Badge>
        <Badge status="success" size="lg">Label</Badge>
        <Badge status="warning" size="lg">Label</Badge>
        <Badge status="failed" size="lg">Label</Badge>
        <Badge status="brand" size="lg">Label</Badge>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Badge Dot</h2>
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="md" shape="pill"
          ><template #icon
            ><span class="h-1.5 w-1.5 bg-primary rounded-full me-1" /></template
          >Label</Badge
        >
        <Badge status="processing" size="md" shape="pill"
          ><template #icon
            ><span class="h-1.5 w-1.5 bg-primary rounded-full me-1" /></template
          >Label</Badge
        >
        <Badge status="success" size="md" shape="pill"
          ><template #icon
            ><span class="h-1.5 w-1.5 bg-primary rounded-full me-1" /></template
          >Label</Badge
        >
        <Badge status="warning" size="md" shape="pill"
          ><template #icon
            ><span class="h-1.5 w-1.5 bg-primary rounded-full me-1" /></template
          >Label</Badge
        >
        <Badge status="failed" size="md" shape="pill"
          ><template #icon
            ><span class="h-1.5 w-1.5 bg-primary rounded-full me-1" /></template
          >Label</Badge
        >
        <Badge status="brand" size="md" shape="pill"
          ><template #icon
            ><span class="h-1.5 w-1.5 bg-primary rounded-full me-1" /></template
          >Label</Badge
        >
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Badge Icon</h2>
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="md" shape="pill"
          ><template #icon><User class="size-4" /></template>Label</Badge
        >
        <Badge status="processing" size="md" shape="pill"
          ><template #icon><User class="size-4" /></template>Label</Badge
        >
        <Badge status="success" size="md" shape="pill"
          ><template #icon><User class="size-4" /></template>Label</Badge
        >
        <Badge status="warning" size="md" shape="pill"
          ><template #icon><User class="size-4" /></template>Label</Badge
        >
        <Badge status="failed" size="md" shape="pill"
          ><template #icon><User class="size-4" /></template>Label</Badge
        >
        <Badge status="brand" size="md" shape="pill"
          ><template #icon><User class="size-4" /></template>Label</Badge
        >
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Badge Avatar</h2>
      <div class="flex flex-wrap gap-3 items-center">
        <Badge status="default" size="md" shape="pill">
          <template #avatar>
            <img
              src="https://picsum.photos/id/64/16/16"
              class="size-4 rounded-full border"
            />
          </template>
          Label
        </Badge>
        <Badge status="processing" size="md" shape="pill">
          <template #avatar>
            <img
              src="https://picsum.photos/id/1025/16/16"
              class="size-4 rounded-full border"
            />
          </template>
          Label
        </Badge>
        <Badge status="success" size="md" shape="pill">
          <template #avatar>
            <img
              src="https://picsum.photos/id/1027/16/16"
              class="size-4 rounded-full border"
            />
          </template>
          Label
        </Badge>
        <Badge status="warning" size="md" shape="pill">
          <template #avatar>
            <img
              src="https://picsum.photos/id/103/16/16"
              class="size-4 rounded-full border"
            />
          </template>
          Label
        </Badge>
        <Badge status="failed" size="md" shape="pill">
          <template #avatar>
            <img
              src="https://picsum.photos/id/104/16/16"
              class="size-4 rounded-full border"
            />
          </template>
          Label
        </Badge>
        <Badge status="brand" size="md" shape="pill">
          <template #avatar>
            <img
              src="https://picsum.photos/id/105/16/16"
              class="size-4 rounded-full border"
            />
          </template>
          Label
        </Badge>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Chip Close</h2>
      <div class="flex items-center gap-6">
        <ChipClose size="sm" />
        <ChipClose size="sm" class="bg-gray-200" />
        <ChipClose size="md" />
        <ChipClose size="md" class="bg-gray-200" />
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Chip Count</h2>
      <div class="flex items-center gap-6">
        <ChipCount size="sm" :value="2" />
        <ChipCount size="md" :value="2" />
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Chips</h2>
      <div class="flex flex-wrap gap-4 items-center">
        <Chip size="sm">Label</Chip>
        <Chip size="md">Label</Chip>
        <Chip size="lg">Label</Chip>
        <Chip size="sm" closable>Label</Chip>
        <Chip size="md" closable>Label</Chip>
        <Chip size="lg" closable>Label</Chip>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Big Title</h2>
      <div class="space-y-2">
        <Text kind="big-title" size="72" weight="bold">Placeholder Text</Text>
        <Text kind="big-title" size="60" weight="semibold"
          >Placeholder Text</Text
        >
        <Text kind="big-title" size="48" weight="medium">Placeholder Text</Text>
        <Text kind="big-title" size="36" weight="regular"
          >Placeholder Text</Text
        >
        <Text kind="big-title" size="30" weight="bold">Placeholder Text</Text>
        <Text kind="big-title" size="24" weight="bold">Placeholder Text</Text>
        <Text kind="big-title" size="22" weight="bold">Placeholder Text</Text>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Title</h2>
      <div class="grid grid-cols-3 gap-2">
        <Text kind="title" size="20" weight="bold">Placeholder Text</Text>
        <Text kind="title" size="20" weight="semibold">Placeholder Text</Text>
        <Text kind="title" size="20" weight="regular">Placeholder Text</Text>
        <Text kind="title" size="18" weight="bold">Placeholder Text</Text>
        <Text kind="title" size="18" weight="semibold">Placeholder Text</Text>
        <Text kind="title" size="18" weight="regular">Placeholder Text</Text>
        <Text kind="title" size="16" weight="bold">Placeholder Text</Text>
        <Text kind="title" size="16" weight="semibold">Placeholder Text</Text>
        <Text kind="title" size="16" weight="regular">Placeholder Text</Text>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Body</h2>
      <div class="grid grid-cols-7 gap-2">
        <Text kind="body" size="14" color="primary">Placeholder Text</Text>
        <Text kind="body" size="14" color="secondary">Placeholder Text</Text>
        <Text kind="body" size="14" color="Tertiary">Placeholder Text</Text>
        <Text kind="body" size="14" color="brand">Placeholder Text</Text>
        <Text kind="body" size="14" color="destructive">Placeholder Text</Text>
        <Text kind="body" size="14" color="success">Placeholder Text</Text>
        <Text kind="body" size="14" color="warning">Placeholder Text</Text>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Notes</h2>
      <div class="grid grid-cols-7 gap-2">
        <Text kind="notes" size="12" color="primary">Placeholder Text</Text>
        <Text kind="notes" size="12" color="secondary">Placeholder Text</Text>
        <Text kind="notes" size="12" color="Tertiary">Placeholder Text</Text>
        <Text kind="notes" size="12" color="brand">Placeholder Text</Text>
        <Text kind="notes" size="12" color="destructive">Placeholder Text</Text>
        <Text kind="notes" size="12" color="success">Placeholder Text</Text>
        <Text kind="notes" size="12" color="warning">Placeholder Text</Text>
      </div>
    </div>

    <div class="space-y-4 mt-8">
      <h2 class="text-xl font-semibold">Loader Circle</h2>
      <div class="flex items-center gap-6">
        <LoaderCircle size="sm" color="primary" />
        <div class="bg-gray-800 p-2 rounded-md">
          <LoaderCircle size="sm" color="white" />
        </div>
        <LoaderCircle size="md" />
      </div>
    </div>

    <div class="p-6 space-y-8">
      <section>
        <h2 class="text-lg font-semibold mb-3">Tab Header / Line</h2>
        <Tabs v-model="valueLine" variant="line" class="">
          <TabsList>
            <TabsTrigger value="overview">Tab Title</TabsTrigger>
            <TabsTrigger value="details">Tab Title</TabsTrigger>
            <TabsTrigger value="settings">Tab Title</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div
              class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500"
            >
              Slots
            </div>
          </TabsContent>
          <TabsContent value="details">
            <div
              class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500"
            >
              Slots
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div
              class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500"
            >
              Slots
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 class="text-lg font-semibold mb-3">Tab Header / Segmented</h2>
        <Tabs v-model="valueSegmented" variant="segmented">
          <TabsList>
            <TabsTrigger value="profile">Tab Title</TabsTrigger>
            <TabsTrigger value="security">Tab Title</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <div
              class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500"
            >
              Slots
            </div>
          </TabsContent>
          <TabsContent value="security">
            <div
              class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500"
            >
              Slots
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 class="text-lg font-semibold mb-3">Tab Items / Line</h2>
        <Tabs v-model="valueItemsLine" variant="line">
          <TabsList>
            <TabsTrigger value="one">
              <span class="inline-flex items-center gap-2">
                <User
                  class="size-4 text-gray-900 group-aria-selected:text-red-700"
                />
                <span>Tab Title</span>
                <ChipCount size="sm" :value="2" class="ml-2" />
              </span>
            </TabsTrigger>
            <TabsTrigger value="two">
              <span class="inline-flex items-center gap-2">
                <User
                  class="size-4 text-gray-900 group-aria-selected:text-red-700"
                />
                <span>Tab Title</span>
                <ChipCount size="sm" :value="2" class="ml-2" />
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="one">
            <div
              class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500"
            >
              Slots
            </div>
          </TabsContent>
          <TabsContent value="two">
            <div
              class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500"
            >
              Slots
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 class="text-lg font-semibold mb-3">Tab Items / Segmented</h2>
        <Tabs v-model="valueItemsSegmented" variant="segmented">
          <TabsList>
            <TabsTrigger value="one">
              <span class="inline-flex items-center justify-center gap-2">
                <User
                  class="size-4 text-gray-900 group-aria-selected:text-red-700"
                />
                <span>Tab Title</span>
                <ChipCount size="sm" :value="2" class="ml-2" />
              </span>
            </TabsTrigger>
            <TabsTrigger value="two">
              <span class="inline-flex items-center justify-center gap-2">
                <User
                  class="size-4 text-gray-900 group-aria-selected:text-red-700"
                />
                <span>Tab Title</span>
                <ChipCount size="sm" :value="2" class="ml-2" />
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="one">
            <div
              class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500"
            >
              Slots
            </div>
          </TabsContent>
          <TabsContent value="two">
            <div
              class="rounded-md bg-gray-100 p-4 text-center text-sm text-gray-500"
            >
              Slots
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <TableSelection
        :selected="selectedCount"
        class="mt-8"
        @clear="tableRows.forEach((r) => (r.selected = false))"
      />

      <section class="mt-4">
        <h2 class="text-lg font-semibold mb-3">Table Column</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeadCell class="w-[220px]">Header</TableHeadCell>
              <TableHeadCell class="w-[80px] text-center" />
              <TableHeadCell class="w-[80px] text-center">#</TableHeadCell>
              <TableHeadCell>Header</TableHeadCell>
              <TableHeadCell>Header</TableHeadCell>
              <TableHeadCell class="w-[120px]">Header</TableHeadCell>
              <TableHeadCell class="w-[200px]">Action</TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="r in tableRows" :key="r.id">
              <TableCell>
                {{ r.name }}
              </TableCell>
              <TableCell class="text-center">
                <input
                  v-model="r.selected"
                  type="checkbox"
                  class="size-5 appearance-none border border-gray-300 rounded-md bg-gray-100 checked:bg-primary"
                />
              </TableCell>
              <TableCell class="text-center">
                {{ r.id }}
              </TableCell>
              <TableCell>
                <Badge status="success" size="md" shape="pill">
                  <template #icon>
                    <span
                      class="h-1.5 w-1.5 rounded-full me-1"
                      :class="
                        r.status === 'Paid'
                          ? 'bg-green-600'
                          : r.status === 'Pending'
                          ? 'bg-orange-500'
                          : 'bg-red-600'
                      "
                    />
                  </template>
                  {{ r.status }}
                </Badge>
              </TableCell>
              <TableCell>
                <Chip v-for="t in r.tags" :key="t" size="md">{{ t }}</Chip>
              </TableCell>
              <TableCell>
                <button
                  type="button"
                  class="inline-flex items-center rounded-full p-0.5 w-10"
                  :class="
                    r.enabled
                      ? 'bg-green-600/40 justify-end'
                      : 'bg-gray-300 justify-start'
                  "
                  @click="r.enabled = !r.enabled"
                >
                  <span class="size-5 rounded-full bg-white shadow" />
                </button>
              </TableCell>
              <TableCell>
                <Button variant="primary"
                  ><Plus class="size-4" /> View <Plus class="size-4"
                /></Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <!-- Input -->
      <div class="space-y-4 mt-8">
        <h2 class="text-xl font-semibold">Input</h2>
        <Text kind="body" size="14" color="primary"
          >Note: Try to check pseudo-classes: hover, focus, active</Text
        >
        <Text kind="title" size="16" weight="semibold">Input with Icon</Text>
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <Text kind="title" size="16" weight="semibold">Email</Text>
        <InputGroup>
          <InputGroupInput type="email" placeholder="Email" />
        </InputGroup>
        <InputGroup>
          <InputGroupInput
            v-model="errorInput"
            type="email"
            placeholder="Email"
          />
        </InputGroup>
        <InputGroup data-disabled>
          <InputGroupInput disabled type="email" placeholder="Email" />
        </InputGroup>
        <Text kind="title" size="16" weight="semibold">Number</Text>
        <InputGroup>
          <InputGroupInput type="number" placeholder="Number" />
        </InputGroup>
        <Text kind="title" size="16" weight="semibold">Textarea</Text>
        <InputGroup>
          <InputGroupTextarea placeholder="Enter your message" />
        </InputGroup>
        <InputGroup>
          <InputGroupTextarea disabled placeholder="Enter your message" />
        </InputGroup>
        <Text kind="title" size="16" weight="semibold">Checkbox</Text>
        <div class="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label for="terms">Placeholder Text</Label>
        </div>
        <div class="flex items-start gap-3">
          <Checkbox id="terms-2" :default-value="true" />
          <div class="grid gap-2">
            <Label for="terms-2">Placeholder Text</Label>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <Checkbox id="toggle" disabled />
          <Label for="toggle">Enable notifications</Label>
        </div>
        <Text kind="title" size="16" weight="semibold">Radio</Text>
        <RadioGroup default-value="comfortable">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r1" value="default" />
            <Label for="r1">Default</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r2" value="comfortable" />
            <Label for="r2">Comfortable</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="radio" value="compact" disabled />
            <Label for="radio">Enable notifications</Label>
          </div>
        </RadioGroup>
        <Text kind="title" size="16" weight="semibold">Switch</Text>
        <div class="flex items-center space-x-2">
          <Switch id="airplane-mode" :default-value="true" />
          <Label for="airplane-mode">Placeholder Text</Label>
        </div>
        <div class="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label for="airplane-mode">Placeholder Text</Label>
        </div>
        <div class="flex items-center space-x-2">
          <Switch id="airplane-mode" disabled />
          <Label for="airplane-mode">Placeholder Text</Label>
        </div>
        <Text kind="title" size="16" weight="semibold">Select</Text>
        <Select v-model="singleSelect" :multiple="false">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple"> Apple </SelectItem>
              <SelectItem value="banana"> Banana </SelectItem>
              <SelectItem value="blueberry"> Blueberry </SelectItem>
              <SelectItem value="grapes"> Grapes </SelectItem>
              <SelectItem value="pineapple"> Pineapple </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select v-model="value" :multiple="true">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select a fruit" :aria-label="value">
              <div v-for="item in value" :key="item">
                <Chip size="sm">{{ item }}</Chip>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple"> Apple </SelectItem>
              <SelectItem value="banana"> Banana </SelectItem>
              <SelectItem value="blueberry"> Blueberry </SelectItem>
              <SelectItem value="grapes"> Grapes </SelectItem>
              <SelectItem value="pineapple"> Pineapple </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select :multiple="true" disabled>
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple"> Apple </SelectItem>
              <SelectItem value="banana"> Banana </SelectItem>
              <SelectItem value="blueberry"> Blueberry </SelectItem>
              <SelectItem value="grapes"> Grapes </SelectItem>
              <SelectItem value="pineapple"> Pineapple </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Text kind="title" size="16" weight="semibold">Command</Text>
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
        <!-- Form -->
        <SampleForm />
      </div>
    </div>
  </div>
</template>
