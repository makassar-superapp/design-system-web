# Testing Guide

Comprehensive testing guide for the TDM Design System Web.

---

## Table of Contents

- [Testing Philosophy](#testing-philosophy)
- [Storybook for Visual Testing](#storybook-for-visual-testing)
- [Running Storybook](#running-storybook)
- [Creating Stories](#creating-stories)
- [Story Best Practices](#story-best-practices)
- [Accessibility Testing](#accessibility-testing)
- [Testing in Consumer Projects](#testing-in-consumer-projects)
- [Manual Testing Checklist](#manual-testing-checklist)

---

## Testing Philosophy

The TDM Design System Web uses **Storybook** as the primary testing and documentation tool. Storybook provides:

- ✅ **Visual Testing** - See components in isolation
- ✅ **Documentation** - Interactive component documentation
- ✅ **Development Environment** - Rapid component development
- ✅ **Accessibility Testing** - Built-in a11y checks
- ✅ **Responsive Testing** - Test across viewport sizes

---

## Storybook for Visual Testing

### What is Storybook?

Storybook is an open-source tool for building UI components in isolation. It allows you to:

- Develop components in isolation
- Document component variants
- Test different states
- Share components with team
- Catch visual regressions

### Benefits

1. **Isolation** - Components can be developed without running the full app
2. **Documentation** - Auto-generated documentation from stories
3. **Testing** - Visual and interaction testing
4. **Collaboration** - Share components with designers and stakeholders
5. **Debugging** - Easier to debug component issues

---

## Running Storybook

### Development Mode

Start Storybook in development mode:

```bash
pnpm run storybook
```

This will start Storybook at `http://localhost:6006`.

### Building Storybook

Build Storybook for production deployment:

```bash
pnpm run build-storybook
```

This creates a static Storybook site in `storybook-static/` directory.

### Environment Variables

Storybook uses the same environment variables as your Nuxt app:

```bash
# .env
NUXT_PUBLIC_BASE_API_URL=https://api.example.com/v1
```

---

## Creating Stories

### Basic Story Structure

Create a `.stories.ts` file next to your component:

```typescript
// Button.stories.ts
import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: "Click me",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    default: "Delete",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    default: "Outline",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    default: "Small Button",
  },
};
```

### Story with Actions

Test component events:

```typescript
import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";
import Button from "./Button.vue";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithClick: Story = {
  args: {
    default: "Click me",
    onClick: action("clicked"),
  },
};
```

### Story with Slots

Document component slots:

```typescript
export const WithIcon: Story = {
  render: () => ({
    components: { Button },
    template: `
      <Button>
        <Icon name="plus" />
        Add Item
      </Button>
    `,
  }),
};
```

### Story with Multiple States

```typescript
export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex gap-2">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
};
```

### Story with Form

```typescript
export const InForm: Story = {
  render: () => ({
    components: {
      Form,
      FormField,
      FormItem,
      FormLabel,
      FormControl,
      Button,
      Input,
    },
    setup() {
      const onSubmit = action("submit");
      return { onSubmit };
    },
    template: `
      <Form @submit="onSubmit">
        <FormField v-slot="{ field }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input v-bind="field" type="email" />
            </FormControl>
          </FormItem>
        </FormField>
        <Button type="submit">Submit</Button>
      </Form>
    `,
  }),
};
```

---

## Story Best Practices

### 1. Use Descriptive Names

✅ **Do:**

```typescript
export const Default: Story = {
  /* ... */
};
export const WithIcon: Story = {
  /* ... */
};
export const LoadingState: Story = {
  /* ... */
};
export const DisabledState: Story = {
  /* ... */
};
```

❌ **Don't:**

```typescript
export const Story1: Story = {
  /* ... */
};
export const Story2: Story = {
  /* ... */
};
```

### 2. Cover All Variants

Create stories for all component variants:

```typescript
export const Default: Story = {
  /* ... */
};
export const Primary: Story = {
  /* ... */
};
export const Secondary: Story = {
  /* ... */
};
export const Destructive: Story = {
  /* ... */
};
export const Outline: Story = {
  /* ... */
};
export const Ghost: Story = {
  /* ... */
};
```

### 3. Document Edge Cases

```typescript
export const LongText: Story = {
  args: {
    default: "This is a very long button text that might cause layout issues",
  },
};

export const Empty: Story = {
  args: {
    default: "",
  },
};

export const WithEmoji: Story = {
  args: {
    default: "🎉 Click me!",
  },
};
```

### 4. Use Controls Wisely

```typescript
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline"],
      description: "Button variant style",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
};
```

### 5. Add Documentation

```typescript
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A customizable button component with multiple variants and sizes.",
      },
    },
  },
};
```

---

## Accessibility Testing

### Enable a11y Addon

Storybook includes accessibility testing via the `@storybook/addon-a11y` addon.

### Check Accessibility Issues

1. Open Storybook
2. Navigate to your component story
3. Open the "Accessibility" tab in the addons panel
4. Review any violations or warnings

### Common Accessibility Checks

- ✅ Color contrast
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Semantic HTML

### Example: Accessible Form

```typescript
export const AccessibleForm: Story = {
  render: () => ({
    components: {
      Form,
      FormField,
      FormItem,
      FormLabel,
      FormControl,
      Input,
      Button,
    },
    template: `
      <Form>
        <FormField v-slot="{ field }" name="email">
          <FormItem>
            <FormLabel for="email">Email Address</FormLabel>
            <FormControl>
              <Input 
                id="email" 
                v-bind="field" 
                type="email"
                aria-required="true"
                aria-describedby="email-description"
              />
            </FormControl>
            <p id="email-description" class="text-sm text-gray-500">
              We'll never share your email.
            </p>
          </FormItem>
        </FormField>
        <Button type="submit">Submit</Button>
      </Form>
    `,
  }),
};
```

---

## Testing in Consumer Projects

### Manual Testing

Test components in your consumer application:

```vue
<template>
  <div class="p-6 space-y-4">
    <h1>Component Testing</h1>

    <!-- Test component -->
    <Button variant="default" @click="handleClick"> Test Button </Button>

    <!-- Test with different states -->
    <Button :disabled="true">Disabled</Button>
    <Button :loading="isLoading">Loading</Button>
  </div>
</template>

<script setup lang="ts">
const isLoading = ref(false);

const handleClick = () => {
  console.log("Button clicked!");
};
</script>
```

### Integration Testing

Test component integration:

```vue
<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <FormField v-slot="{ field }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input v-bind="field" type="email" />
        </FormControl>
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

const onSubmit = (values: any) => {
  // Test form submission
  console.log("Form submitted:", values);
};
</script>
```

### Responsive Testing

Test responsive behavior:

```bash
# Test on different viewport sizes
# Desktop: 1920x1080
# Tablet: 768x1024
# Mobile: 375x667
```

---

## Manual Testing Checklist

### Component Development

- [ ] Component renders correctly in Storybook
- [ ] All variants are documented in stories
- [ ] Props work as expected
- [ ] Events are emitted correctly
- [ ] Slots render properly
- [ ] Accessibility checks pass
- [ ] No console errors/warnings

### Visual Testing

- [ ] Component looks correct on desktop
- [ ] Component looks correct on tablet
- [ ] Component looks correct on mobile
- [ ] Dark mode works (if applicable)
- [ ] Hover states work
- [ ] Focus states work
- [ ] Active states work

### Functionality Testing

- [ ] Click events work
- [ ] Form submission works
- [ ] Validation works
- [ ] Loading states work
- [ ] Disabled states work
- [ ] Error states work

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators are visible
- [ ] ARIA labels are correct

### Cross-Browser Testing

- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge

---

## Continuous Integration

### GitHub Actions (Example)

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  storybook:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 10
      - uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: "pnpm"
      - run: pnpm install
      - run: pnpm run build-storybook
      - name: Upload Storybook
        uses: actions/upload-artifact@v3
        with:
          name: storybook
          path: storybook-static
```

---

## Additional Resources

- 📚 [Storybook Documentation](https://storybook.js.org/docs)
- ♿ [Accessibility Guide](https://storybook.js.org/docs/vue/writing-tests/accessibility-testing)
- 🎨 [Component Guide](COMPONENTS.md)
- 💡 [Usage Guide](USAGE.md)
- 📖 [Storybook Setup](STORYBOOK.md)
