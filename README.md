# TDM Design System Web

A Nuxt Layer-based design system with ready-to-use UI components, built on **[Nuxt 4](https://nuxt.com)**, **[Tailwind CSS 4](https://tailwindcss.com)**, and **[shadcn-vue](https://www.shadcn-vue.com)**.

📚 **[View Complete Documentation & Component Examples](https://design-system.digitalteam.id/)**

## Installation

### Via npm

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

### Via Local Path

```bash
pnpm add file:../design-system-web
```

## 💡 Recommended Dependencies

For the best experience, install these dependencies in your consumer project:

```bash
# TypeScript (recommended for better type safety and IDE support)
pnpm add -D typescript

# Lucide Vue Next (needed if using components with built-in icons)
pnpm add lucide-vue-next
```

> **Note**: `lucide-vue-next` is used by some components for icons. You can use alternative icon libraries if preferred.

## Quick Start

### 1. Extend Layer in Nuxt Config

`nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  extends: ["@tdm-digitalteam/design-system-web"],
});
```

### 2. Use Components (Auto-imported)

```vue
<template>
  <div>
    <Button variant="default" @click="handleClick">Click me</Button>
    <Input v-model="name" placeholder="Enter name" />
  </div>
</template>

<script setup lang="ts">
const name = ref("");
const handleClick = () => console.log("Clicked!");
</script>
```

### 3. Use Utilities

```vue
<script setup lang="ts">
import { cn } from "@tdm-digitalteam/design-system-web/lib/utils";

const classes = cn("base-class", condition && "conditional-class");
</script>
```

## Available Components

**50+ ready-to-use components**, including:

- **Form**: Button, Input, Select, Checkbox, RadioGroup, Switch, DatePicker, Upload
- **Layout**: Dialog, Popover, Tabs, Table, Divider
- **Feedback**: Alert, Badge, Loader, Snackbar, Sonner (Toast)
- **Advanced**: Calendar, Command, Pagination, Avatar, Chips

📖 **[View all components with examples in Storybook](https://design-system.digitalteam.id/)**

## Design Tokens

Design tokens are automatically available in consumer projects:

```vue
<template>
  <div class="bg-primary text-white p-4 rounded-lg">
    <p class="text-text-high">High emphasis text</p>
    <p class="text-text-medium">Medium emphasis text</p>
  </div>
</template>
```

**Colors**: `primary`, `success`, `warning`, `info`, `gray-{100-900}`, `text-{high|medium|low}`  
**Typography**: `font-monteserrat`, `font-opensans`  
**Shadows**: `shadow-{sm|md|lg|xl|2xl}`

## Troubleshooting

### ❌ "Failed to load TypeScript"

Install TypeScript in your **consumer app**:

```bash
pnpm add -D typescript
pnpm run dev
```

### ❌ "Cannot find module 'lucide-vue-next'"

Install lucide-vue-next in your **consumer app**:

```bash
pnpm add lucide-vue-next
pnpm run dev
```

### 🔧 Components Not Auto-Importing

1. Ensure the layer is extended in `nuxt.config.ts`
2. Run `pnpm run dev`
3. Restart IDE/dev server

### 🎨 Styles Not Appearing

```bash
rm -rf .nuxt node_modules/.cache node_modules/.vite
pnpm run dev
```

### 🌊 Hydration Errors (DatePicker, Calendar)

Wrap with `<ClientOnly>`:

```vue
<ClientOnly>
  <DatePicker v-model="date" />
</ClientOnly>
```

## Contributing

We welcome contributions! 🎉

- **For Contributors**: Read our [Contributing Guide](./CONTRIBUTING.md) to learn how to:

  - Report bugs and suggest features
  - Submit pull requests
  - Follow our development guidelines
  - Set up your local environment

- **For Maintainers**: See [Publishing Guide](./PUBLISHING.md) for NPM publishing workflow

## Links

- 📚 [Documentation & Storybook](https://design-system.digitalteam.id/)
- 🐛 [Report Issues](https://github.com/makassar-superapp/design-system-web/issues)
- 🤝 [Contributing Guide](./CONTRIBUTING.md)
- 📦 [NPM Package](https://www.npmjs.com/package/@tdm-digitalteam/design-system-web)
