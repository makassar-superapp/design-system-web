# Storybook Development Guide

Complete guide for developing and documenting components with Storybook.

---

## Table of Contents

- [Overview](#overview)
- [Setup and Configuration](#setup-and-configuration)
- [Running Storybook](#running-storybook)
- [Project Structure](#project-structure)
- [Creating Stories](#creating-stories)
- [Story Organization](#story-organization)
- [Args and Controls](#args-and-controls)
- [Actions and Events](#actions-and-events)
- [Decorators and Parameters](#decorators-and-parameters)
- [Addons](#addons)
- [Design Tokens Documentation](#design-tokens-documentation)
- [Best Practices](#best-practices)
- [Deploying Storybook](#deploying-storybook)

---

## Overview

Storybook is the primary tool for:

- 🎨 Developing components in isolation
- 📚 Documenting component APIs
- ✅ Visual testing
- 🎭 Exploring component states
- 🤝 Collaborating with designers

**Current Version:** Storybook 8.4.7

---

## Setup and Configuration

### Installation

Storybook is already configured in the project. Dependencies include:

```json
{
  "@storybook/addon-essentials": "^8.4.7",
  "@storybook/addon-interactions": "^8.4.7",
  "@storybook/addon-links": "^8.4.7",
  "@storybook/blocks": "^8.4.7",
  "@storybook/test": "^8.4.7",
  "@storybook/vue3": "^8.4.7",
  "@storybook/vue3-vite": "^8.4.7",
  "storybook": "^8.4.7"
}
```

### Configuration Files

**.storybook/main.ts:**

```typescript
import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
};

export default config;
```

**.storybook/preview.ts:**

```typescript
import type { Preview } from "@storybook/vue3";
import "../app/assets/css/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
```

---

## Running Storybook

### Development Mode

Start Storybook development server:

```bash
pnpm run storybook
```

Access at: `http://localhost:6006`

### Production Build

Build static Storybook:

```bash
pnpm run build-storybook
```

Output directory: `storybook-static/`

---

## Project Structure

```
design-system-web/
├── .storybook/
│   ├── main.ts              # Storybook configuration
│   └── preview.ts           # Global preview settings
├── stories/
│   ├── ColorPalette.stories.ts
│   ├── Typography.stories.ts
│   ├── Shadows.stories.ts
│   ├── Spacing.stories.ts
│   ├── CSSSource.stories.ts
│   └── Installation.mdx
└── app/components/ui/
    ├── button/
    │   ├── Button.vue
    │   └── Button.stories.ts  # Component story
    ├── input/
    │   ├── Input.vue
    │   └── Input.stories.ts
    └── ...
```

### Story File Naming

- Component stories: `ComponentName.stories.ts`
- Documentation: `TopicName.stories.ts` or `TopicName.mdx`
- Location: Next to component or in `stories/` directory

---

## Creating Stories

### Basic Story

```typescript
// Button.stories.ts
import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta: Meta<typeof Button> = {
  title: "Components/Form/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: "Click me",
  },
};
```

### Multiple Variants

```typescript
export const Primary: Story = {
  args: {
    variant: "default",
    default: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    default: "Secondary Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    default: "Delete",
  },
};
```

### Custom Render Function

```typescript
export const WithIcon: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        {{ args.default || 'Add Item' }}
      </Button>
    `,
  }),
};
```

### Composition Example

```typescript
export const DialogExample: Story = {
  render: () => ({
    components: {
      Dialog,
      DialogTrigger,
      DialogContent,
      DialogHeader,
      DialogTitle,
      DialogDescription,
      DialogFooter,
      Button,
    },
    template: `
      <Dialog>
        <DialogTrigger as-child>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a dialog description.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
};
```

---

## Story Organization

### Folder Structure

Organize stories by category:

```
Components/
├── Form/
│   ├── Button
│   ├── Input
│   ├── Select
│   └── ...
├── Layout/
│   ├── Dialog
│   ├── Sheet
│   └── ...
├── Feedback/
│   ├── Alert
│   ├── Badge
│   └── ...
└── Advanced/
    ├── Calendar
    ├── Command
    └── ...
```

### Naming Convention

```typescript
const meta: Meta<typeof Component> = {
  title: "Category/Subcategory/ComponentName",
  // Examples:
  // 'Components/Form/Button'
  // 'Components/Layout/Dialog'
  // 'Design Tokens/Colors'
};
```

---

## Args and Controls

### Define ArgTypes

```typescript
const meta: Meta<typeof Button> = {
  title: "Components/Form/Button",
  component: Button,
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
      description: "Button visual variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "radio",
      options: ["sm", "default", "lg", "icon"],
      description: "Button size",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
    default: {
      control: "text",
      description: "Button text content",
    },
  },
};
```

### Control Types

Available control types:

- `boolean` - Checkbox
- `number` - Number input
- `range` - Slider
- `text` - Text input
- `color` - Color picker
- `date` - Date picker
- `select` - Dropdown select
- `radio` - Radio buttons
- `inline-radio` - Inline radio buttons
- `check` - Multi-select checkboxes
- `inline-check` - Inline checkboxes
- `object` - JSON editor

---

## Actions and Events

### Basic Actions

```typescript
import { action } from "@storybook/addon-actions";

export const WithClick: Story = {
  args: {
    default: "Click me",
    onClick: action("button-clicked"),
  },
};
```

### Multiple Events

```typescript
export const AllEvents: Story = {
  args: {
    default: "Hover and Click",
    onClick: action("clicked"),
    onMouseenter: action("mouse-enter"),
    onMouseleave: action("mouse-leave"),
    onFocus: action("focused"),
    onBlur: action("blurred"),
  },
};
```

### Form Events

```typescript
export const FormExample: Story = {
  render: () => ({
    components: { Form, Input, Button },
    setup() {
      const handleSubmit = action("form-submitted");
      const handleChange = action("input-changed");
      return { handleSubmit, handleChange };
    },
    template: `
      <Form @submit="handleSubmit">
        <Input @update:modelValue="handleChange" placeholder="Enter text" />
        <Button type="submit">Submit</Button>
      </Form>
    `,
  }),
};
```

---

## Decorators and Parameters

### Global Decorators

Add padding/margin to all stories:

```typescript
// .storybook/preview.ts
export default {
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-6"><story /></div>',
    }),
  ],
};
```

### Story-Specific Decorators

```typescript
export const Centered: Story = {
  decorators: [
    () => ({
      template:
        '<div class="flex items-center justify-center min-h-screen"><story /></div>',
    }),
  ],
};
```

### Parameters

```typescript
export const DocumentedStory: Story = {
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates a specific use case.",
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#333" },
        { name: "light", value: "#fff" },
      ],
    },
  },
};
```

---

## Addons

### Installed Addons

1. **@storybook/addon-essentials**

   - Controls
   - Actions
   - Viewport
   - Backgrounds
   - Toolbars
   - Measure & Outline

2. **@storybook/addon-interactions**

   - Interactive testing

3. **@storybook/addon-links**
   - Link between stories

### Using Backgrounds

```typescript
export const DarkBackground: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
```

### Using Viewport

```typescript
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
```

---

## Design Tokens Documentation

### Color Palette Story

```typescript
// ColorPalette.stories.ts
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
  title: "Design Tokens/Colors",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <div class="w-20 h-20 bg-primary rounded-lg"></div>
          <div>
            <div class="font-bold">Primary</div>
            <div class="text-sm text-gray-500">--color-primary</div>
          </div>
        </div>
        <!-- More colors -->
      </div>
    `,
  }),
};
```

### Typography Story

```typescript
// Typography.stories.ts
export const FontFamilies: Story = {
  render: () => ({
    template: `
      <div class="space-y-6">
        <div>
          <h2 class="font-montserrat text-3xl font-bold mb-2">Montserrat</h2>
          <p class="text-sm text-gray-500">For headings and emphasis</p>
        </div>
        <div>
          <p class="font-opensans text-base mb-2">Open Sans</p>
          <p class="text-sm text-gray-500">For body text and labels</p>
        </div>
      </div>
    `,
  }),
};
```

---

## Best Practices

### 1. Name Stories Descriptively

✅ **Good:**

```typescript
export const Default: Story = {};
export const WithIcon: Story = {};
export const LoadingState: Story = {};
export const LongTextOverflow: Story = {};
```

❌ **Bad:**

```typescript
export const Story1: Story = {};
export const Test: Story = {};
export const Example: Story = {};
```

### 2. Document All Variants

Create stories for each variant:

```typescript
export const Default: Story = { args: { variant: "default" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Link: Story = { args: { variant: "link" } };
```

### 3. Use Tags

```typescript
const meta: Meta<typeof Button> = {
  tags: ["autodocs"], // Generate automatic documentation
};
```

### 4. Add Descriptions

```typescript
const meta: Meta<typeof Button> = {
  parameters: {
    docs: {
      description: {
        component:
          "A versatile button component with multiple variants and sizes.",
      },
    },
  },
};
```

### 5. Test Edge Cases

```typescript
export const VeryLongText: Story = {
  args: {
    default:
      "This is an extremely long button text that might cause layout issues in various scenarios",
  },
};

export const EmptyState: Story = {
  args: {
    default: "",
  },
};
```

---

## Deploying Storybook

### Build for Production

```bash
pnpm run build-storybook
```

### Deploy Options

**GitHub Pages:**

```bash
npx gh-pages -d storybook-static
```

**Netlify:**

- Build command: `pnpm run build-storybook`
- Publish directory: `storybook-static`

**Vercel:**

- Build command: `pnpm run build-storybook`
- Output directory: `storybook-static`

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

---

## Troubleshooting

### Storybook Won't Start

```bash
# Clear cache
rm -rf .storybook-cache node_modules/.cache

# Reinstall dependencies
pnpm install

# Try again
pnpm run storybook
```

### Build Errors

```bash
# Clear Nuxt cache as well
rm -rf .nuxt

# Prepare Nuxt
pnpm run dev:prepare

# Build Storybook
pnpm run build-storybook
```

### Stories Not Appearing

Check story file is in the correct location and matches the pattern in `.storybook/main.ts`:

```typescript
stories: [
  '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  '../app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
],
```

---

## Additional Resources

- 📚 [Storybook Documentation](https://storybook.js.org/docs)
- 🎨 [Vue 3 Storybook Guide](https://storybook.js.org/docs/vue)
- 🧪 [Testing Guide](TESTING.md)
- 🏗️ [Architecture](ARCHITECTURE.md)
- 📦 [Deployment](DEPLOYMENT.md)
