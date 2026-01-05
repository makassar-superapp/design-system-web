# Component Library Reference

Complete reference for all 40+ components in the TDM Design System Web.

---

## Table of Contents

- [Form Components](#form-components)
- [Layout Components](#layout-components)
- [Feedback Components](#feedback-components)
- [Advanced Components](#advanced-components)
- [Component Composition Patterns](#component-composition-patterns)

---

## Form Components

### Button

Customizable button component with multiple variants and sizes.

**Import:** Auto-imported

**Props:**

- `variant` - `'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'`
- `size` - `'default' | 'sm' | 'lg' | 'icon'`
- `disabled` - `boolean`
- `type` - `'button' | 'submit' | 'reset'`

**Example:**

```vue
<template>
  <div class="flex gap-2">
    <Button variant="default">Default</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost" size="sm">Small Ghost</Button>
    <Button variant="destructive">Delete</Button>
  </div>
</template>
```

---

### Input

Text input with validation support and various types.

**Import:** Auto-imported

**Props:**

- `type` - `'text' | 'email' | 'password' | 'number' | 'tel' | 'url'`
- `placeholder` - `string`
- `disabled` - `boolean`
- `readonly` - `boolean`
- `modelValue` - `string | number`

**Events:**

- `@update:modelValue` - Emitted on input change

**Example:**

```vue
<template>
  <div class="space-y-4">
    <Input v-model="email" type="email" placeholder="Enter email" />
    <Input v-model="password" type="password" placeholder="Password" />
    <Input v-model="search" placeholder="Search..." />
  </div>
</template>

<script setup lang="ts">
const email = ref("");
const password = ref("");
const search = ref("");
</script>
```

---

### Select

Dropdown select component with search functionality.

**Import:** Auto-imported

**Components:**

- `Select` - Main wrapper
- `SelectTrigger` - Trigger button
- `SelectValue` - Selected value display
- `SelectContent` - Dropdown content
- `SelectItem` - Individual option
- `SelectGroup` - Option group
- `SelectLabel` - Group label
- `SelectSeparator` - Visual separator

**Example:**

```vue
<template>
  <Select v-model="selected">
    <SelectTrigger>
      <SelectValue placeholder="Select option" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
const selected = ref("");
</script>
```

---

### NativeSelect

Native HTML select element styled to match the design system.

**Import:** Auto-imported

**Props:**

- `options` - `Array<{ value: string, label: string }>`
- `modelValue` - `string`
- `placeholder` - `string`
- `disabled` - `boolean`

**Example:**

```vue
<template>
  <NativeSelect
    v-model="country"
    :options="countries"
    placeholder="Select country"
  />
</template>

<script setup lang="ts">
const country = ref("");
const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "id", label: "Indonesia" },
];
</script>
```

---

### Checkbox

Checkbox input with label support.

**Import:** Auto-imported

**Props:**

- `modelValue` - `boolean`
- `disabled` - `boolean`
- `required` - `boolean`

**Example:**

```vue
<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" v-model="accepted" />
    <Label for="terms">Accept terms and conditions</Label>
  </div>
</template>

<script setup lang="ts">
const accepted = ref(false);
</script>
```

---

### RadioGroup

Radio button group for single selection.

**Import:** Auto-imported

**Components:**

- `RadioGroup` - Group wrapper
- `RadioGroupItem` - Individual radio button

**Example:**

```vue
<template>
  <RadioGroup v-model="selectedPlan">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="free" value="free" />
      <Label for="free">Free</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="pro" value="pro" />
      <Label for="pro">Pro</Label>
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
const selectedPlan = ref("free");
</script>
```

---

### Switch

Toggle switch component.

**Import:** Auto-imported

**Props:**

- `modelValue` - `boolean`
- `disabled` - `boolean`

**Example:**

```vue
<template>
  <div class="flex items-center space-x-2">
    <Switch id="notifications" v-model="notificationsEnabled" />
    <Label for="notifications">Enable notifications</Label>
  </div>
</template>

<script setup lang="ts">
const notificationsEnabled = ref(true);
</script>
```

---

### DatePicker

Date selection with calendar popup.

**Import:** Auto-imported

**Props:**

- `modelValue` - `Date | undefined`
- `placeholder` - `string`
- `disabled` - `boolean`

**Example:**

```vue
<template>
  <ClientOnly>
    <DatePicker v-model="selectedDate" placeholder="Pick a date" />
  </ClientOnly>
</template>

<script setup lang="ts">
const selectedDate = ref<Date>();
</script>
```

> **Note:** Wrap DatePicker in `<ClientOnly>` to avoid hydration errors.

---

### Upload

File upload component with drag and drop.

**Import:** Auto-imported

**Props:**

- `accept` - `string` (file types)
- `multiple` - `boolean`
- `maxSize` - `number` (in bytes)

**Events:**

- `@change` - Emitted when files are selected

**Example:**

```vue
<template>
  <Upload
    accept="image/*"
    :multiple="true"
    :maxSize="5 * 1024 * 1024"
    @change="handleFileUpload"
  />
</template>

<script setup lang="ts">
const handleFileUpload = (files: File[]) => {
  console.log("Uploaded files:", files);
};
</script>
```

---

### Textarea

Multi-line text input.

**Import:** Auto-imported

**Props:**

- `modelValue` - `string`
- `placeholder` - `string`
- `disabled` - `boolean`
- `rows` - `number`

**Example:**

```vue
<template>
  <Textarea v-model="description" placeholder="Enter description" :rows="5" />
</template>

<script setup lang="ts">
const description = ref("");
</script>
```

---

### Label

Form field label component.

**Import:** Auto-imported

**Props:**

- `for` - `string` (input ID)

**Example:**

```vue
<template>
  <div class="space-y-2">
    <Label for="email">Email Address</Label>
    <Input id="email" v-model="email" type="email" />
  </div>
</template>
```

---

### Form

Form wrapper with validation support (vee-validate).

**Import:** Auto-imported

**Components:**

- `Form` - Form wrapper
- `FormField` - Field wrapper with validation
- `FormItem` - Field item container
- `FormLabel` - Field label
- `FormControl` - Input wrapper
- `FormDescription` - Field description
- `FormMessage` - Validation error message

**Example:**

```vue
<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <FormField v-slot="{ field }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input v-bind="field" type="email" />
        </FormControl>
        <FormDescription>We'll never share your email.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">Submit</Button>
  </Form>
</template>

<script setup lang="ts">
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
});

const onSubmit = (values) => {
  console.log(values);
};
</script>
```

---

### InputGroup

Input with prefix and suffix support.

**Import:** Auto-imported

**Components:**

- `InputGroup` - Wrapper
- `InputGroupPrefix` - Left prefix
- `InputGroupSuffix` - Right suffix
- `InputGroupInput` - Main input

**Example:**

```vue
<template>
  <InputGroup>
    <InputGroupPrefix>$</InputGroupPrefix>
    <InputGroupInput v-model="price" type="number" placeholder="0.00" />
    <InputGroupSuffix>USD</InputGroupSuffix>
  </InputGroup>
</template>
```

---

## Layout Components

### Dialog

Modal dialog component.

**Import:** Auto-imported

**Components:**

- `Dialog` - Main wrapper
- `DialogTrigger` - Trigger element
- `DialogContent` - Modal content
- `DialogHeader` - Header section
- `DialogTitle` - Dialog title
- `DialogDescription` - Dialog description
- `DialogFooter` - Footer section
- `DialogClose` - Close button

**Example:**

```vue
<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogDescription>
          Are you sure you want to proceed?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
```

---

### Sheet

Slide-out panel component.

**Import:** Auto-imported

**Components:**

- `Sheet` - Main wrapper
- `SheetTrigger` - Trigger element
- `SheetContent` - Panel content
- `SheetHeader` - Header section
- `SheetTitle` - Panel title
- `SheetDescription` - Panel description
- `SheetFooter` - Footer section

**Props (SheetContent):**

- `side` - `'top' | 'right' | 'bottom' | 'left'`

**Example:**

```vue
<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">Open Sheet</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Settings</SheetTitle>
        <SheetDescription>Configure your preferences</SheetDescription>
      </SheetHeader>
      <!-- Content here -->
    </SheetContent>
  </Sheet>
</template>
```

---

### Popover

Floating popover component.

**Import:** Auto-imported

**Components:**

- `Popover` - Main wrapper
- `PopoverTrigger` - Trigger element
- `PopoverContent` - Popover content

**Example:**

```vue
<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <p>Popover content goes here</p>
    </PopoverContent>
  </Popover>
</template>
```

---

### Tabs

Tabbed interface component.

**Import:** Auto-imported

**Components:**

- `Tabs` - Main wrapper
- `TabsList` - Tab list container
- `TabsTrigger` - Individual tab
- `TabsContent` - Tab panel content

**Example:**

```vue
<template>
  <Tabs default-value="tab1">
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Tab 1 content</TabsContent>
    <TabsContent value="tab2">Tab 2 content</TabsContent>
    <TabsContent value="tab3">Tab 3 content</TabsContent>
  </Tabs>
</template>
```

---

### Table

Data table component.

**Import:** Auto-imported

**Components:**

- `Table` - Table wrapper
- `TableHeader` - Table header
- `TableBody` - Table body
- `TableFooter` - Table footer
- `TableRow` - Table row
- `TableHead` - Header cell
- `TableCell` - Body cell
- `TableCaption` - Table caption

**Example:**

```vue
<template>
  <Table>
    <TableCaption>List of users</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in users" :key="user.id">
        <TableCell>{{ user.name }}</TableCell>
        <TableCell>{{ user.email }}</TableCell>
        <TableCell>{{ user.role }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
```

---

### TableToolbar

Table filtering and action toolbar.

**Import:** Auto-imported

**Example:**

```vue
<template>
  <TableToolbar>
    <Input placeholder="Search..." class="max-w-sm" />
    <Button variant="outline">Filter</Button>
  </TableToolbar>
</template>
```

---

### Divider

Visual separator component.

**Import:** Auto-imported

**Props:**

- `orientation` - `'horizontal' | 'vertical'`

**Example:**

```vue
<template>
  <div>
    <p>Section 1</p>
    <Divider />
    <p>Section 2</p>
  </div>
</template>
```

---

### Separator

Content separator (alias to Divider).

**Import:** Auto-imported

---

### Collapsible

Expandable/collapsible section.

**Import:** Auto-imported

**Components:**

- `Collapsible` - Main wrapper
- `CollapsibleTrigger` - Trigger element
- `CollapsibleContent` - Collapsible content

**Example:**

```vue
<template>
  <Collapsible>
    <CollapsibleTrigger as-child>
      <Button variant="ghost">Toggle Details</Button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <p>Hidden content goes here</p>
    </CollapsibleContent>
  </Collapsible>
</template>
```

---

### Sidebar

Navigation sidebar component.

**Import:** Auto-imported

**Components:**

- `Sidebar` - Main sidebar wrapper
- `SidebarContent` - Content container
- `SidebarGroup` - Group container
- `SidebarGroupLabel` - Group label
- `SidebarGroupContent` - Group content
- `SidebarMenu` - Menu container
- `SidebarMenuItem` - Menu item
- `SidebarMenuButton` - Menu button
- And more...

**Example:**

```vue
<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <a href="/dashboard">Dashboard</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
```

---

## Feedback Components

### Alert

Alert message component.

**Import:** Auto-imported

**Components:**

- `Alert` - Alert wrapper
- `AlertTitle` - Alert title
- `AlertDescription` - Alert description

**Props:**

- `variant` - `'default' | 'destructive'`

**Example:**

```vue
<template>
  <Alert>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>

  <Alert variant="destructive">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Your session has expired. Please log in again.
    </AlertDescription>
  </Alert>
</template>
```

---

### Badge

Status badge component.

**Import:** Auto-imported

**Props:**

- `variant` - `'default' | 'secondary' | 'destructive' | 'outline'`

**Example:**

```vue
<template>
  <div class="flex gap-2">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Error</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
</template>
```

---

### Loader

Loading indicator component.

**Import:** Auto-imported

**Props:**

- `size` - `'sm' | 'md' | 'lg'`
- `variant` - `'spinner' | 'dots' | 'pulse'`

**Example:**

```vue
<template>
  <Loader size="lg" />
</template>
```

---

### Snackbar

Toast notification component (legacy).

**Import:** Auto-imported

> **Note:** Consider using Sonner for modern toast notifications.

---

### Sonner

Modern toast notification system.

**Import:** Manual import required

**Usage:**

```vue
<template>
  <Button @click="showToast">Show Toast</Button>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

const showToast = () => {
  toast.success("Success!", {
    description: "Your action was completed.",
  });

  // Other variants
  toast.error("Error occurred");
  toast.info("Information");
  toast.warning("Warning message");
};
</script>
```

---

### Notification

System notification component.

**Import:** Auto-imported

---

### Skeleton

Loading placeholder component.

**Import:** Auto-imported

**Props:**

- `class` - Custom classes

**Example:**

```vue
<template>
  <div class="space-y-2">
    <Skeleton class="h-4 w-[250px]" />
    <Skeleton class="h-4 w-[200px]" />
    <Skeleton class="h-4 w-[150px]" />
  </div>
</template>
```

---

### Tooltip

Contextual tooltip component.

**Import:** Auto-imported

**Components:**

- `Tooltip` - Main wrapper
- `TooltipTrigger` - Trigger element
- `TooltipContent` - Tooltip content
- `TooltipProvider` - Context provider

**Example:**

```vue
<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip content</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

---

## Advanced Components

### Calendar

Full calendar component.

**Import:** Auto-imported

**Props:**

- `modelValue` - `Date | undefined`
- `mode` - `'single' | 'multiple' | 'range'`

**Example:**

```vue
<template>
  <ClientOnly>
    <Calendar v-model="selectedDate" mode="single" />
  </ClientOnly>
</template>

<script setup lang="ts">
const selectedDate = ref<Date>();
</script>
```

---

### Command

Command palette component.

**Import:** Auto-imported

**Components:**

- `Command` - Main wrapper
- `CommandInput` - Search input
- `CommandList` - Results list
- `CommandEmpty` - Empty state
- `CommandGroup` - Result group
- `CommandItem` - Individual result
- `CommandSeparator` - Separator

**Example:**

```vue
<template>
  <Command>
    <CommandInput placeholder="Search commands..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="calendar">Calendar</CommandItem>
        <CommandItem value="emoji">Emoji</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>
```

---

### Pagination

Page navigation component.

**Import:** Auto-imported

**Components:**

- `Pagination` - Main wrapper
- `PaginationList` - Page list
- `PaginationFirst` - First page button
- `PaginationPrev` - Previous page button
- `PaginationNext` - Next page button
- `PaginationLast` - Last page button
- `PaginationListItem` - Page item

**Example:**

```vue
<template>
  <Pagination :total="100" :per-page="10" v-model:page="currentPage" />
</template>

<script setup lang="ts">
const currentPage = ref(1);
</script>
```

---

### Avatar

User avatar with fallback.

**Import:** Auto-imported

**Components:**

- `Avatar` - Main wrapper
- `AvatarImage` - Avatar image
- `AvatarFallback` - Fallback content

**Example:**

```vue
<template>
  <Avatar>
    <AvatarImage src="/avatar.jpg" alt="User Name" />
    <AvatarFallback>UN</AvatarFallback>
  </Avatar>
</template>
```

---

### Chips

Tag/chip component.

**Import:** Auto-imported

**Props:**

- `variant` - `'default' | 'outlined'`
- `closable` - `boolean`

**Events:**

- `@close` - Emitted when close icon is clicked

**Example:**

```vue
<template>
  <div class="flex gap-2">
    <Chips>Tag 1</Chips>
    <Chips :closable="true" @close="handleClose">Tag 2</Chips>
  </div>
</template>
```

---

### Breadcrumb

Navigation breadcrumb component.

**Import:** Auto-imported

**Components:**

- `Breadcrumb` - Main wrapper
- `BreadcrumbList` - Breadcrumb list
- `BreadcrumbItem` - Breadcrumb item
- `BreadcrumbLink` - Breadcrumb link
- `BreadcrumbPage` - Current page
- `BreadcrumbSeparator` - Separator

**Example:**

```vue
<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/products">Products</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Current Product</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
```

---

### DropdownMenu

Dropdown menu component.

**Import:** Auto-imported

**Components:**

- `DropdownMenu` - Main wrapper
- `DropdownMenuTrigger` - Trigger element
- `DropdownMenuContent` - Menu content
- `DropdownMenuItem` - Menu item
- `DropdownMenuLabel` - Menu label
- `DropdownMenuSeparator` - Separator
- `DropdownMenuGroup` - Menu group
- `DropdownMenuCheckboxItem` - Checkbox item
- `DropdownMenuRadioGroup` - Radio group
- `DropdownMenuRadioItem` - Radio item

**Example:**

```vue
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

---

### Filter

Data filtering component.

**Import:** Auto-imported

---

### Text

Typography component.

**Import:** Auto-imported

**Props:**

- `as` - `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'`
- `variant` - Typography variant

**Example:**

```vue
<template>
  <Text as="h1" class="text-4xl font-bold">Heading 1</Text>
  <Text as="p" class="text-base">Paragraph text</Text>
</template>
```

---

## Component Composition Patterns

### Form with Validation

```vue
<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <FormField v-slot="{ field }" name="username">
      <FormItem>
        <Form Label>Username</FormLabel>
        <FormControl>
          <Input v-bind="field" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">Submit</Button>
  </Form>
</template>

<script setup lang="ts">
import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().required().min(3),
});

const onSubmit = (values) => {
  console.log(values);
};
</script>
```

### Dialog with Form

```vue
<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button>Create User</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create New User</DialogTitle>
      </DialogHeader>
      <Form @submit="handleSubmit">
        <FormField v-slot="{ field }" name="name">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input v-bind="field" />
            </FormControl>
          </FormItem>
        </FormField>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  </Dialog>
</template>
```

### Data Table with Toolbar

```vue
<template>
  <div>
    <TableToolbar>
      <Input placeholder="Search..." class="max-w-sm" />
      <Button variant="outline">Export</Button>
    </TableToolbar>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="item in items" :key="item.id">
          <TableCell>{{ item.name }}</TableCell>
          <TableCell>
            <Badge>{{ item.status }}</Badge>
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" size="icon">⋮</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
```

---

## Accessibility

All components are built with accessibility in mind:

- ✅ **WCAG 2.1 AA Compliant**
- ✅ **Keyboard Navigation** - Full keyboard support
- ✅ **Screen Reader Support** - Proper ARIA labels and roles
- ✅ **Focus Management** - Visible focus indicators
- ✅ ** Color Contrast** - Meets contrast requirements

---

## Additional Resources

- 📚 [View Live Examples in Storybook](https://design-system.digitalteam.id/)
- 📖 [Usage Guide](USAGE.md)
- 🏗️ [Architecture Documentation](ARCHITECTURE.md)
- 🤝 [Contributing Guide](CONTRIBUTING.md)
