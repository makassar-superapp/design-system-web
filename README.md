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
npm install github:rayfajars/testing-nuxt-layers#main

# pnpm
pnpm add github:rayfajars/testing-nuxt-layers#main

# yarn
yarn add github:rayfajars/testing-nuxt-layers#main
```

### Via Local Path

```bash
pnpm add file:../design-system-web
```

## ⚠️ Important: Required Peer Dependencies

**Pastikan dependencies berikut terinstal** di consumer project Anda:

```bash
# TypeScript (required)
pnpm add -D typescript

# Lucide Vue Next untuk icons (required)
pnpm add lucide-vue-next
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

### ❌ "Cannot find module 'lucide-vue-next'"

Install lucide-vue-next di **consumer app**:

```bash
pnpm add lucide-vue-next
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

## Links

- 📚 [Dokumentasi & Storybook](https://design-system.digitalteam.id/)

## License

MIT
