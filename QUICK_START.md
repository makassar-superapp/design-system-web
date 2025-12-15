# Quick Start - TDM Design System

## 🚀 Setup di Consumer Project

### 1. Install Layer

Pilih salah satu:

```bash
# Via npm (recommended untuk production)
pnpm add @tdm/design-system-web

# Via GitHub
pnpm add github:rayfajars/testing-nuxt-layers#main

# Via Local (untuk development/testing)
pnpm add file:../design-system-web
```

### 2. ⚠️ Install Required Peer Dependencies

**WAJIB!** Tanpa ini akan muncul error "module not found":

```bash
# TypeScript (required untuk type resolution)
pnpm add -D typescript

# Lucide Vue Next (required untuk icons di UI components)
pnpm add lucide-vue-next
```

### 3. Extend di nuxt.config.ts

```typescript
export default defineNuxtConfig({
  extends: ["@tdm/design-system-web"], // atau path lain sesuai instalasi
});
```

### 4. Gunakan Components

Semua components auto-imported, langsung pakai:

```vue
<template>
  <div>
    <Button variant="default">Click Me</Button>
    <Input v-model="name" placeholder="Enter name" />
    <Alert>Success message</Alert>
  </div>
</template>

<script setup lang="ts">
const name = ref("");
</script>
```

### 5. Import Icons (jika perlu)

```vue
<script setup lang="ts">
import { Calculator, Calendar, SearchIcon } from "lucide-vue-next";
</script>

<template>
  <Button>
    <Calculator class="mr-2 h-4 w-4" />
    Calculate
  </Button>
</template>
```

## 🔧 Troubleshooting

### Error: "Cannot find module 'lucide-vue-next'"

**Penyebab**: Peer dependency belum terinstall  
**Solusi**:

```bash
pnpm add lucide-vue-next
```

### Error: "Failed to load TypeScript"

**Penyebab**: TypeScript belum terinstall  
**Solusi**:

```bash
pnpm add -D typescript
```

### Components tidak auto-import

1. Clear cache:

```bash
rm -rf .nuxt node_modules/.cache node_modules/.vite
```

2. Restart dev server:

```bash
pnpm dev
```

## 📚 Resources

- [Dokumentasi Lengkap](./LAYER_SETUP_GUIDE.md)
- [Storybook](https://design-system.digitalteam.id/)
- [GitHub](https://github.com/rayfajars/testing-nuxt-layers)
