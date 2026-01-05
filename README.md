# TDM Design System Web

A comprehensive Nuxt Layer-based design system with 40+ production-ready UI components, built on **[Nuxt 4](https://nuxt.com)**, **[Tailwind CSS 4](https://tailwindcss.com)**, and **[shadcn-vue](https://www.shadcn-vue.com)**.

[![NPM Version](https://img.shields.io/npm/v/@tdm-digitalteam/design-system-web?style=flat&logo=npm&color=CB3837)](https://www.npmjs.com/package/@tdm-digitalteam/design-system-web)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](LICENSE)
[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

📚 **[View Complete Documentation & Component Examples](https://design-system.digitalteam.id/)**

---

## 📖 Table of Contents

- [Features](#-features)
- [Documentation](#-documentation)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Available Components](#-available-components)
- [Design Tokens](#-design-tokens)
- [Usage Examples](#-usage-examples)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Links](#-links)

---

## ✨ Features

### Core Capabilities

- 🎨 **40+ Production-Ready Components** - Comprehensive UI component library
- 🔌 **Auto-Import** - Zero configuration component imports
- 🎭 **Full TypeScript Support** - Complete type safety with intelligent autocomplete
- 🌗 **Dark Mode Ready** - Built-in dark mode support with CSS variables
- ♿ **Accessible** - WCAG compliant components with ARIA attributes
- 📱 **Responsive** - Mobile-first design approach
- 🎯 **CVA Variants** - Type-safe component variants with Class Variance Authority
- 🧩 **Composable** - Flexible component composition patterns

### Technical Features

- 🚀 **Nuxt Layer Architecture** - Extend and customize with ease
- 🎨 **Tailwind CSS 4** - Utility-first styling with modern CSS features
- 🧱 **shadcn-vue Integration** - High-quality component primitives
- 📦 **Tree-Shakeable** - Optimized bundle size
- 🔄 **Form Validation** - Built-in vee-validate + yup/zod support
- 🎭 **Storybook** - Interactive component documentation
- 🌐 **SSR Compatible** - Server-side rendering support

---

## 📚 Documentation

- **[ARCHITECTURE.md](ARCHITECTURE.md)** - System architecture, Nuxt Layer structure, and design patterns
- **[COMPONENTS.md](COMPONENTS.md)** - Complete component library reference with examples
- **[USAGE.md](USAGE.md)** - Detailed usage guide, best practices, and recipes
- **[TESTING.md](TESTING.md)** - Testing strategy and Storybook development guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment and publishing procedures
- **[STORYBOOK.md](STORYBOOK.md)** - Storybook setup and story development
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines and development workflow
- **[PUBLISHING.md](PUBLISHING.md)** - NPM publishing guide (for maintainers)
- **[.env.example](.env.example)** - Environment configuration reference

---

## 🚀 Quick Start

### 1. Install Package

```bash
# npm
npm install @tdm-digitalteam/design-system-web

# pnpm (recommended)
pnpm add @tdm-digitalteam/design-system-web

# yarn
yarn add @tdm-digitalteam/design-system-web
```

### 2. Extend Nuxt Layer

`nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  extends: ["@tdm-digitalteam/design-system-web"],
});
```

### 3. Use Components

```vue
<template>
  <div class="p-6">
    <Button variant="default" @click="handleClick"> Click me </Button>
    <Input v-model="name" placeholder="Enter name" />
  </div>
</template>

<script setup lang="ts">
const name = ref("");
const handleClick = () => console.log("Clicked!");
</script>
```

That's it! 🎉 Components are auto-imported and ready to use.

---

## 📦 Installation

### Via NPM Registry

```bash
# npm
npm install @tdm-digitalteam/design-system-web

# pnpm
pnpm add @tdm-digitalteam/design-system-web

# yarn
yarn add @tdm-digitalteam/design-system-web
```

### Via GitHub

```bash
# npm
npm install github:makassar-superapp/design-system-web#main

# pnpm
pnpm add github:makassar-superapp/design-system-web#main

# yarn
yarn add github:makassar-superapp/design-system-web#main
```

### Via Local Path (Development)

```bash
pnpm add file:../design-system-web
```

### 💡 Recommended Dependencies

For the best experience, install these peer dependencies:

```bash
# TypeScript (recommended for better type safety)
pnpm add -D typescript

# Lucide Vue Next (required for icon-based components)
pnpm add lucide-vue-next
```

> **Note**: `lucide-vue-next` is used by some components for icons. You can use alternative icon libraries if preferred.

---

## 🧩 Available Components

**40+ production-ready components** organized by category:

### Form Components

- **Button** - Customizable buttons with variants
- **Input** - Text input with validation support
- **Select** - Dropdown select with search
- **NativeSelect** - Native HTML select
- **Checkbox** - Checkbox with label
- **RadioGroup** - Radio button groups
- **Switch** - Toggle switch
- **DatePicker** - Date selection with calendar
- **Upload** - File upload component
- **Textarea** - Multi-line text input
- **Label** - Form field labels
- **Form** - Form wrapper with validation
- **InputGroup** - Input with prefix/suffix

### Layout Components

- **Dialog** - Modal dialogs
- **Sheet** - Slide-out panels
- **Popover** - Floating content
- **Tabs** - Tabbed interfaces
- **Table** - Data tables
- **TableToolbar** - Table filtering and actions
- **Divider** - Visual separators
- **Separator** - Content dividers
- **Collapsible** - Expandable sections
- **Sidebar** - Navigation sidebars

### Feedback Components

- **Alert** - Alert messages
- **Badge** - Status badges
- **Loader** - Loading indicators
- **Snackbar** - Toast notifications
- **Sonner** - Advanced toast system
- **Notification** - System notifications
- **Skeleton** - Loading placeholders
- **Tooltip** - Contextual tooltips

### Advanced Components

- **Calendar** - Full calendar component
- **Command** - Command palette
- **Pagination** - Page navigation
- **Avatar** - User avatars with fallback
- **Chips** - Tag chips
- **Breadcrumb** - Navigation breadcrumbs
- **DropdownMenu** - Dropdown menus
- **Filter** - Data filtering
- **Text** - Typography component

📖 **[View all components with live examples in Storybook](https://design-system.digitalteam.id/)**

---

## 🎨 Design Tokens

Design tokens are automatically available in consumer projects via Tailwind CSS:

### Colors

```vue
<template>
  <div class="bg-primary text-white p-4 rounded-lg">
    <p class="text-text-high">High emphasis text</p>
    <p class="text-text-medium">Medium emphasis text</p>
    <p class="text-text-low">Low emphasis text</p>
  </div>
</template>
```

**Available Colors:**

- `primary`, `secondary`
- `success`, `warning`, `info`, `error`
- `gray-{100-900}`
- `text-{high|medium|low}`

### Typography

```vue
<template>
  <h1 class="font-montserrat text-4xl font-bold">Heading</h1>
  <p class="font-opensans text-base">Body text</p>
</template>
```

**Font Families:**

- `font-montserrat` - Headings
- `font-opensans` - Body text

### Shadows

```vue
<template>
  <div class="shadow-md hover:shadow-lg transition-shadow">
    Card with shadow
  </div>
</template>
```

**Shadow Utilities:**

- `shadow-{sm|md|lg|xl|2xl}`

> **For more details**, see [USAGE.md](USAGE.md) for complete design token reference.

---

## 💻 Usage Examples

### Form with Validation

```vue
<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <FormField v-slot="{ field }" name="email">
      <Label>Email</Label>
      <Input v-bind="field" type="email" placeholder="Enter email" />
    </FormField>

    <FormField v-slot="{ field }" name="password">
      <Label>Password</Label>
      <Input v-bind="field" type="password" />
    </FormField>

    <Button type="submit">Submit</Button>
  </Form>
</template>

<script setup lang="ts">
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const onSubmit = (values) => {
  console.log(values);
};
</script>
```

### Toast Notifications

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
};
</script>
```

### Utility Function

```vue
<script setup lang="ts">
import { cn } from "@tdm-digitalteam/design-system-web/lib/utils";

const buttonClass = cn(
  "base-button-class",
  isActive && "active-class",
  isDisabled && "disabled-class"
);
</script>
```

> **More examples**: See [USAGE.md](USAGE.md) for comprehensive usage guide and recipes.

---

## 🔧 Troubleshooting

### ❌ "Failed to load TypeScript"

**Solution:** Install TypeScript in your consumer app:

```bash
pnpm add -D typescript
pnpm run dev
```

### ❌ "Cannot find module 'lucide-vue-next'"

**Solution:** Install lucide-vue-next in your consumer app:

```bash
pnpm add lucide-vue-next
pnpm run dev
```

### 🔧 Components Not Auto-Importing

**Steps to resolve:**

1. Ensure the layer is extended in `nuxt.config.ts`
2. Run `pnpm run dev`
3. Restart your IDE/dev server
4. Clear `.nuxt` folder: `rm -rf .nuxt`

### 🎨 Styles Not Appearing

**Solution:** Clear cache and restart:

```bash
rm -rf .nuxt node_modules/.cache node_modules/.vite
pnpm install
pnpm run dev
```

### 🌊 Hydration Errors (DatePicker, Calendar)

**Solution:** Wrap time-sensitive components with `<ClientOnly>`:

```vue
<ClientOnly>
  <DatePicker v-model="date" />
</ClientOnly>
```

### 📦 Build Errors

**Solution:** Ensure `reka-ui` and `vee-validate` are transpiled:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  build: {
    transpile: ["reka-ui", "vee-validate"],
  },
});
```

> **More help**: See [USAGE.md](USAGE.md) troubleshooting section or [open an issue](https://github.com/makassar-superapp/design-system-web/issues).

---

## 🤝 Contributing

We welcome contributions! 🎉

### For Contributors

Read our **[Contributing Guide](./CONTRIBUTING.md)** to learn how to:

- Report bugs and suggest features
- Submit pull requests
- Follow our development guidelines
- Set up your local environment
- Run Storybook for development

### For Maintainers

See **[Publishing Guide](./PUBLISHING.md)** for NPM publishing workflow.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes following our [coding standards](CONTRIBUTING.md#style-guide)
4. Test in Storybook: `pnpm run storybook`
5. Submit a pull request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 👥 Team

**TDM Digital Team**

Maintained by the Makassar Superapp Development Team.

For support and questions:

- 🐛 [Report Issues](https://github.com/makassar-superapp/design-system-web/issues)
- 💬 Contact TDM team directly

---

## 🔗 Links

- 📚 [Documentation & Storybook](https://design-system.digitalteam.id/)
- 📦 [NPM Package](https://www.npmjs.com/package/@tdm-digitalteam/design-system-web)
- 🐙 [GitHub Repository](https://github.com/makassar-superapp/design-system-web)
- 🐛 [Report Issues](https://github.com/makassar-superapp/design-system-web/issues)
- 🤝 [Contributing Guide](./CONTRIBUTING.md)
- 📖 [Architecture Documentation](./ARCHITECTURE.md)
- 🧩 [Component Reference](./COMPONENTS.md)
- 💡 [Usage Guide](./USAGE.md)

---

## 🔗 Additional Resources

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [shadcn-vue](https://www.shadcn-vue.com/)
- [Reka UI](https://reka-ui.com/)
- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Storybook Documentation](https://storybook.js.org/)
