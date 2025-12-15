# TDM Design System Web

Design system berbasis Nuxt Layer dengan komponen UI yang siap pakai, built dengan shadcn-vue dan Tailwind CSS 4.

📚 **[Lihat Dokumentasi Lengkap & Contoh Komponen](https://design-system.digitalteam.id/)**

## Installation

### Via npm

```bash
# npm
npm install @tdm/design-system-web

# pnpm
pnpm add @tdm/design-system-web

# yarn
yarn add @tdm/design-system-web
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

## ⚠️ Important: TypeScript Requirement

**TypeScript wajib diinstall** di consumer project Anda:

```bash
pnpm add -D typescript
```

## Quick Start

### 1. Extend Layer di Nuxt Config

`nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  extends: ["@tdm/design-system-web"],
});
```

### 2. Gunakan Components (Auto-imported)

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

### 3. Gunakan Utilities

```vue
<script setup lang="ts">
import { cn } from "@tdm/design-system-web/lib/utils";

const classes = cn("base-class", condition && "conditional-class");
</script>
```

## Available Components

**50+ komponen siap pakai**, termasuk:

- **Form**: Button, Input, Select, Checkbox, RadioGroup, Switch, DatePicker, Upload
- **Layout**: Dialog, Popover, Tabs, Table, Divider
- **Feedback**: Alert, Badge, Loader, Snackbar, Sonner (Toast)
- **Advanced**: Calendar, Command, Pagination, Avatar, Chips

📖 **[Lihat semua komponen dengan contoh di Storybook](https://design-system.digitalteam.id/)**

## Design Tokens

Design tokens otomatis tersedia di consumer project:

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

Install TypeScript di **consumer app**:

```bash
pnpm add -D typescript
pnpm run dev
```

### 🔧 Components Tidak Auto-Import

1. Pastikan layer di-extend di `nuxt.config.ts`
2. Jalankan `pnpm run dev`
3. Restart IDE/dev server

### 🎨 Styles Tidak Muncul

```bash
rm -rf .nuxt node_modules/.cache node_modules/.vite
pnpm run dev
```

### 🌊 Hydration Errors (DatePicker, Calendar)

Wrap dengan `<ClientOnly>`:

```vue
<ClientOnly>
  <DatePicker v-model="date" />
</ClientOnly>
```

## Development

```bash
# Install dependencies
pnpm install

# Development mode
pnpm dev

# Playground (testing layer)
pnpm run dev:playground

# Storybook
pnpm storybook
```

## Documentation

- 📚 [Component Documentation & Storybook](https://design-system.digitalteam.id/)
- 📘 [**Setup via GitHub** - Installation Guide](./GITHUB_SETUP.md)
- 📙 [Nuxt Layer Setup Guide](./LAYER_SETUP_GUIDE.md)
- 📗 [Package Publishing Guide](./PUBLISHING.md)

## License

MIT
