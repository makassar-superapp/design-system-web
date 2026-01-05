# Usage Guide

Comprehensive guide for using the TDM Design System Web in your projects.

---

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Using Components](#using-components)
- [Design Tokens](#design-tokens)
- [Form Validation](#form-validation)
- [Toast Notifications](#toast-notifications)
- [Theming and Customization](#theming-and-customization)
- [Best Practices](#best-practices)
- [Common Patterns](#common-patterns)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)

---

## Installation

### NPM Installation

```bash
# Using pnpm (recommended)
pnpm add @tdm-digitalteam/design-system-web

# Using npm
npm install @tdm-digitalteam/design-system-web

# Using yarn
yarn add @tdm-digitalteam/design-system-web
```

### Peer Dependencies

Install required peer dependencies:

```bash
pnpm add lucide-vue-next
pnpm add -D typescript
```

---

## Configuration

### Basic Setup

**1. Extend the Nuxt Layer:**

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  extends: ["@tdm-digitalteam/design-system-web"],
});
```

**2. (Optional) Environment Variables:**

Create `.env` file:

```bash
# Copy from example
cp node_modules/@tdm-digitalteam/design-system-web/.env.example .env

# Or create manually
NUXT_PUBLIC_BASE_API_URL=https://api.example.com/v1
```

**3. Start Development Server:**

```bash
pnpm run dev
```

### Advanced Configuration

**Override Tailwind Configuration:**

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  extends: ["@tdm-digitalteam/design-system-web"],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            // Add custom colors
            brand: "#FF0000",
          },
        },
      },
    },
  },
});
```

**Add Custom Components Path:**

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  extends: ["@tdm-digitalteam/design-system-web"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
```

---

## Using Components

### Auto-Import

All components are automatically imported:

```vue
<template>
  <!-- No import needed! -->
  <Button>Click me</Button>
  <Input v-model="text" />
  <Select v-model="selected">
    <!-- ... -->
  </Select>
</template>

<script setup lang="ts">
const text = ref("");
const selected = ref("");
</script>
```

### Component Props

Components accept standard props:

```vue
<template>
  <Button
    variant="outline"
    size="lg"
    :disabled="isLoading"
    @click="handleClick"
  >
    {{ isLoading ? "Loading..." : "Submit" }}
  </Button>
</template>

<script setup lang="ts">
const isLoading = ref(false);

const handleClick = async () => {
  isLoading.value = true;
  await someAsyncOperation();
  isLoading.value = false;
};
</script>
```

### Compound Components

Many components use the compound component pattern:

```vue
<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>Dialog description</DialogDescription>
      </DialogHeader>

      <!-- Content -->

      <DialogFooter>
        <Button variant="outline" @click="isOpen = false">Cancel</Button>
        <Button @click="handleConfirm">Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
const isOpen = ref(false);

const handleConfirm = () => {
  // Handle confirmation
  isOpen.value = false;
};
</script>
```

---

## Design Tokens

### Color System

**Primary Colors:**

```vue
<template>
  <div class="bg-primary text-white p-4">Primary</div>
  <div class="bg-secondary text-white p-4">Secondary</div>
  <div class="bg-success text-white p-4">Success</div>
  <div class="bg-warning text-white p-4">Warning</div>
  <div class="bg-error text-white p-4">Error</div>
  <div class="bg-info text-white p-4">Info</div>
</template>
```

**Gray Scale:**

```vue
<template>
  <div class="bg-gray-100">Gray 100</div>
  <div class="bg-gray-200">Gray 200</div>
  <div class="bg-gray-300">Gray 300</div>
  <!-- ... gray-100 to gray-900 -->
  <div class="bg-gray-900 text-white">Gray 900</div>
</template>
```

**Text Emphasis:**

```vue
<template>
  <p class="text-text-high">High emphasis (87% opacity)</p>
  <p class="text-text-medium">Medium emphasis (60% opacity)</p>
  <p class="text-text-low">Low emphasis (38% opacity)</p>
</template>
```

### Typography

**Font Families:**

```vue
<template>
  <h1 class="font-montserrat text-4xl font-bold">Montserrat for Headings</h1>
  <p class="font-opensans text-base">Open Sans for body text</p>
</template>
```

**Font Sizes:**

```vue
<template>
  <p class="text-xs">Extra small</p>
  <p class="text-sm">Small</p>
  <p class="text-base">Base</p>
  <p class="text-lg">Large</p>
  <p class="text-xl">Extra large</p>
  <p class="text-2xl">2XL</p>
  <p class="text-4xl">4XL</p>
</template>
```

### Spacing

Use Tailwind's spacing scale:

```vue
<template>
  <!-- Padding -->
  <div class="p-4">Padding 1rem</div>
  <div class="px-6 py-3">Padding X: 1.5rem, Y: 0.75rem</div>

  <!-- Margin -->
  <div class="m-4">Margin 1rem</div>
  <div class="mx-auto">Centered</div>

  <!-- Gap (for flex/grid) -->
  <div class="flex gap-4">
    <span>Item 1</span>
    <span>Item 2</span>
  </div>
</template>
```

### Shadows

```vue
<template>
  <div class="shadow-sm">Small shadow</div>
  <div class="shadow-md">Medium shadow</div>
  <div class="shadow-lg">Large shadow</div>
  <div class="shadow-xl">Extra large shadow</div>
  <div class="shadow-2xl">2XL shadow</div>
</template>
```

### Border Radius

```vue
<template>
  <div class="rounded-sm">Small radius</div>
  <div class="rounded">Default radius</div>
  <div class="rounded-md">Medium radius</div>
  <div class="rounded-lg">Large radius</div>
  <div class="rounded-full">Full radius (circle/pill)</div>
</template>
```

---

## Form Validation

### Using vee-validate with Yup

```vue
<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <FormField v-slot="{ field }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input v-bind="field" type="email" placeholder="email@example.com" />
        </FormControl>
        <FormDescription>We'll never share your email.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ field }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input v-bind="field" type="password" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">Sign In</Button>
  </Form>
</template>

<script setup lang="ts">
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const onSubmit = (values: any) => {
  console.log("Form values:", values);
  // Handle form submission
};
</script>
```

### Using vee-validate with Zod

```vue
<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <!-- Same template as above -->
  </Form>
</template>

<script setup lang="ts">
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const onSubmit = (values: any) => {
  console.log("Form values:", values);
};
</script>
```

### Custom Validation

```vue
<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <FormField v-slot="{ field }" name="username">
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input v-bind="field" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
  </Form>
</template>

<script setup lang="ts">
import * as yup from "yup";

const schema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must not exceed 20 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .test("is-available", "Username is already taken", async (value) => {
      // Custom async validation
      const isAvailable = await checkUsernameAvailability(value);
      return isAvailable;
    }),
});

const onSubmit = (values: any) => {
  console.log(values);
};

async function checkUsernameAvailability(username: string): Promise<boolean> {
  // API call to check availability
  return true;
}
</script>
```

---

## Toast Notifications

### Using Sonner

**Basic Usage:**

```vue
<template>
  <div class="flex gap-2">
    <Button @click="showSuccess">Success Toast</Button>
    <Button @click="showError">Error Toast</Button>
    <Button @click="showInfo">Info Toast</Button>
    <Button @click="showWarning">Warning Toast</Button>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

const showSuccess = () => {
  toast.success("Success!", {
    description: "Your changes have been saved.",
  });
};

const showError = () => {
  toast.error("Error!", {
    description: "Something went wrong. Please try again.",
  });
};

const showInfo = () => {
  toast.info("Information", {
    description: "This is an informational message.",
  });
};

const showWarning = () => {
  toast.warning("Warning", {
    description: "Please review your input.",
  });
};
</script>
```

**Advanced Options:**

```vue
<script setup lang="ts">
import { toast } from "vue-sonner";

// With action button
const showWithAction = () => {
  toast("Event created", {
    description: "Your event has been scheduled.",
    action: {
      label: "Undo",
      onClick: () => console.log("Undo clicked"),
    },
  });
};

// With custom duration
const showCustomDuration = () => {
  toast.success("Quick message", {
    duration: 2000, // 2 seconds
  });
};

// Promise toast (for async operations)
const showPromiseToast = async () => {
  const promise = fetch("/api/data");

  toast.promise(promise, {
    loading: "Loading data...",
    success: "Data loaded successfully!",
    error: "Failed to load data",
  });
};

// With custom position
const showCustomPosition = () => {
  toast("Positioned toast", {
    position: "top-center",
  });
};
</script>
```

---

## Theming and Customization

### Dark Mode

The design system supports dark mode via CSS variables:

```vue
<template>
  <div :class="isDark ? 'dark' : ''">
    <Button @click="toggleDark"> Toggle Dark Mode </Button>
  </div>
</template>

<script setup lang="ts">
const isDark = ref(false);

const toggleDark = () => {
  isDark.value = !isDark.value;
};
</script>
```

### Custom Theme Colors

Override CSS variables in your app:

```css
/* assets/css/main.css */
@layer base {
  :root {
    --color-primary: #0066ff;
    --color-secondary: #6c63ff;
  }

  .dark {
    --color-primary: #4d9fff;
    --color-secondary: #8b84ff;
  }
}
```

### Component Customization

**Via Props:**

```vue
<Button variant="outline" size="lg" class="custom-button-class">
  Custom Button
</Button>
```

**Via CSS:**

```vue
<template>
  <Button class="my-custom-button">Styled Button</Button>
</template>

<style scoped>
.my-custom-button {
  background: linear-gradient(to right, #ff6b6b, #ee5a6f);
  border: none;
}

.my-custom-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
```

---

## Best Practices

### 1. Component Composition

✅ **Do:**

```vue
<template>
  <Card>
    <CardHeader>
      <CardTitle>User Profile</CardTitle>
      <CardDescription>Manage your profile</CardDescription>
    </CardHeader>
    <CardContent>
      <!-- Content -->
    </CardContent>
  </Card>
</template>
```

❌ **Don't:**

```vue
<!-- Avoid creating wrapper components unnecessarily -->
<template>
  <CustomCard title="User Profile">
    <!-- Content -->
  </CustomCard>
</template>
```

### 2. Form Validation

✅ **Do:**

```vue
<!-- Use FormField for each input -->
<FormField v-slot="{ field }" name="email">
  <FormItem>
    <FormLabel>Email</FormLabel>
    <FormControl>
      <Input v-bind="field" type="email" />
    </FormControl>
    <FormMessage />
  </FormItem>
</FormField>
```

❌ **Don't:**

```vue
<!-- Don't skip form field wrapper -->
<Input v-model="email" type="email" />
```

### 3. Accessibility

✅ **Do:**

```vue
<Label for="email">Email Address</Label>
<Input id="email" v-model="email" type="email" />
```

❌ **Don't:**

```vue
<Input v-model="email" type="email" placeholder="Email" />
```

### 4. Styling

✅ **Do:**

```vue
<!-- Use design tokens -->
<div class="bg-primary text-white p-4 rounded-lg shadow-md">
  Content
</div>
```

❌ **Don't:**

```vue
<!-- Avoid arbitrary values -->
<div class="bg-[#0066FF] text-white p-[16px] rounded-[8px]">
  Content
</div>
```

---

## Common Patterns

### CRUD Form

```vue
<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <div class="space-y-4">
      <FormField v-slot="{ field }" name="name">
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input v-bind="field" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ field }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input v-bind="field" type="email" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ field }" name="role">
        <FormItem>
          <FormLabel>Role</FormLabel>
          <Select v-model="field.value">
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="flex justify-end gap-2">
        <Button type="button" variant="outline" @click="cancel">Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </div>
  </Form>
</template>
```

### Data Table with Actions

```vue
<template>
  <div class="space-y-4">
    <TableToolbar>
      <Input v-model="search" placeholder="Search..." class="max-w-sm" />
      <Button @click="handleCreate">Create New</Button>
    </TableToolbar>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="user in filteredUsers" :key="user.id">
          <TableCell>{{ user.name }}</TableCell>
          <TableCell>{{ user.email }}</TableCell>
          <TableCell>
            <Badge :variant="user.active ? 'default' : 'secondary'">
              {{ user.active ? "Active" : "Inactive" }}
            </Badge>
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" size="icon">⋮</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem @click="handleEdit(user)">
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem @click="handleDelete(user)">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Pagination :total="total" :per-page="perPage" v-model:page="page" />
  </div>
</template>
```

### Confirmation Dialog

```vue
<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button variant="destructive">Delete Account</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline" @click="isOpen = false">Cancel</Button>
        <Button variant="destructive" @click="confirmDelete">
          Yes, delete account
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

const isOpen = ref(false);

const confirmDelete = async () => {
  try {
    await deleteAccount();
    toast.success("Account deleted successfully");
    isOpen.value = false;
  } catch (error) {
    toast.error("Failed to delete account");
  }
};
</script>
```

---

## Performance Optimization

### 1. Lazy Loading Components

```vue
<script setup lang="ts">
// Lazy load heavy components
const HeavyComponent = defineAsyncComponent(
  () => import("./components/HeavyComponent.vue")
);
</script>
```

### 2. ClientOnly for Time-Sensitive Components

```vue
<template>
  <ClientOnly>
    <DatePicker v-model="date" />
    <Calendar v-model="selectedDate" />
  </ClientOnly>
</template>
```

### 3. Optimize Large Lists

```vue
<template>
  <!-- Use virtual scrolling for large lists -->
  <div v-for="item in visibleItems" :key="item.id">
    {{ item.name }}
  </div>
</template>

<script setup lang="ts">
const visibleItems = computed(() => {
  // Only render visible items
  return items.value.slice(0, 50);
});
</script>
```

---

## Troubleshooting

### Common Issues

**1. Components not auto-importing**

Solution: Ensure layer is extended in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  extends: ["@tdm-digitalteam/design-system-web"],
});
```

**2. Styles not appearing**

Solution: Clear cache and rebuild:

```bash
rm -rf .nuxt node_modules/.cache
pnpm install
pnpm run dev
```

**3. TypeScript errors**

Solution: Install TypeScript peer dependency:

```bash
pnpm add -D typescript
```

**4. Hydration errors with DatePicker/Calendar**

Solution: Wrap in `<ClientOnly>`:

```vue
<ClientOnly>
  <DatePicker v-model="date" />
</ClientOnly>
```

**5. Build errors with vee-validate/reka-ui**

Solution: Add to transpile list:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  build: {
    transpile: ["reka-ui", "vee-validate"],
  },
});
```

---

## Additional Resources

- 📚 [Component Reference](COMPONENTS.md)
- 🏗️ [Architecture](ARCHITECTURE.md)
- 🧪 [Testing Guide](TESTING.md)
- 📖 [Storybook Documentation](https://design-system.digitalteam.id/)
