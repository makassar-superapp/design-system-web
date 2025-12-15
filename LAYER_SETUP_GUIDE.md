# TDM Design System - Nuxt Layer Setup Guide

This guide explains how to use the TDM Design System as a Nuxt Layer in your projects, following the best practices from the shadcn-vue and Nuxt Layer integration.

## 📚 Table of Contents

- [Prerequisites](#prerequisites)
- [Layer Configuration](#layer-configuration)
- [Using the Layer in Your Project](#using-the-layer-in-your-project)
- [Development](#development)
- [Features](#features)

## Prerequisites

Make sure you have installed the following:

- Node.js (v18 or higher)
- npm, pnpm, yarn, or bun
- TypeScript (v5.0 or higher) - **Required for type resolution**
- A Nuxt 3 project (or create a new one)

## Layer Configuration

This layer is configured following the official Nuxt Layer best practices with the following key setup:

### 1. **Absolute Path Resolution**

The layer uses `currentDir` pattern with `fileURLToPath` to ensure components and assets are resolved correctly:

```typescript
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDir = dirname(fileURLToPath(import.meta.url));
```

This ensures that when the layer is consumed by another project, all paths point to the layer directory, not the consuming app.

### 2. **Tailwind CSS v4 Configuration**

The layer includes Tailwind CSS v4 with proper source configuration:

```css
@import "tailwindcss";
@import "tw-animate-css";

@source "../../components/";

@custom-variant dark (&:is(.dark *));
```

The `@source` directive tells Tailwind where to scan for classes within the layer.

### 3. **Component Auto-Import**

All UI components from `shadcn-vue` are automatically imported and available globally in consuming projects.

### 4. **Dependency Transpilation**

External dependencies like `reka-ui` and `vee-validate` are transpiled to prevent hydration errors:

```typescript
build: {
  transpile: ["reka-ui", "vee-validate"],
}
```

## Using the Layer in Your Project

### Option 1: Local Development (File Path)

1. **Create a new Nuxt app** (if you don't have one):

```bash
pnpm create nuxt my-app
cd my-app
```

2. **Extend your app** to use the TDM Design System layer by modifying `nuxt.config.ts`:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  extends: ["../design-system-web"], // Path to the layer
});
```

3. **Use the components** in your app:

```vue
<!-- app.vue -->
<template>
  <div>
    <Button>Click Me</Button>
    <Card>
      <CardHeader>
        <CardTitle>Welcome to TDM Design System</CardTitle>
      </CardHeader>
      <CardContent> All shadcn-vue components are available! </CardContent>
    </Card>
  </div>
</template>
```

4. **Run your app**:

```bash
pnpm dev
```

### Option 2: From npm Package

Once published to npm, you can install it:

```bash
pnpm add @tdm/design-system-web
```

And extend in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  extends: ["@tdm/design-system-web"],
});
```

### Option 3: From GitHub

You can also use it directly from GitHub:

```typescript
export default defineNuxtConfig({
  extends: ["github:makassar-superapp/design-system-web"],
});
```

## Development

### Running the Layer Locally

The layer includes two development modes:

1. **Root directory** (Layer mode):

```bash
pnpm run dev
```

This runs the layer itself at the root directory, useful for developing the layer.

2. **Playground directory** (Testing mode):

```bash
pnpm run dev:playground
```

This runs the `.playground` folder which can be used to test the layer in isolation.

### Scripts Available

- `pnpm run dev` - Run the layer in development mode
- `pnpm run dev:playground` - Run the playground for testing
- `pnpm run dev:prepare` - Prepare the Nuxt types
- `pnpm run build` - Build the layer
- `pnpm run storybook` - Run Storybook for component documentation

## Features

### ✨ What's Included

- **shadcn-vue Components**: Complete set of pre-built UI components
- **Tailwind CSS v4**: Modern utility-first CSS framework
- **Design Tokens**: TDM brand colors, typography, spacing, and shadows
- **Dark Mode**: Built-in dark mode support
- **TypeScript**: Full TypeScript support
- **Auto-Import**: Components, composables, and utilities are auto-imported
- **Form Validation**: Integrated with vee-validate and zod

### 🎨 Available Components

All shadcn-vue components are available including:

- Button, Badge, Alert
- Card, Dialog, Drawer
- Input, Textarea, Select
- Form components with validation
- Date Picker, Calendar
- And many more...

### 🎯 Design Tokens

The layer includes TDM-specific design tokens:

```css
--tdm-primary: #b21d28
--tdm-secondary: #951429
--tdm-gray-[100-900]
--tdm-red-[500-900]
--tdm-green-[500-900]
--tdm-blue-[500-900]
--tdm-orange-[500-900]
```

### 🔧 Utilities & Composables

Auto-imported utilities and composables are available from:

- `app/utils/` - Utility functions
- `app/composables/` - Vue composables
- `app/lib/` - Core library functions

## Important Notes

### CSS Linter Warnings

You may see CSS linter warnings for Tailwind CSS v4 directives like `@source`, `@theme`, `@apply`. These are **normal** and can be safely ignored. The Tailwind CSS Vite plugin processes these directives correctly.

### Hydration Errors

If you encounter hydration errors with components using `reka-ui` or `vee-validate`, you have two options:

1. **Wrap in ClientOnly** (already configured in layer):

```vue
<ClientOnly>
  <DatePicker />
</ClientOnly>
```

2. **Transpile dependencies** (already configured in layer):

```typescript
build: {
  transpile: ["reka-ui", "vee-validate"],
}
```

## Troubleshooting

### Import Resolution Errors

If you see errors like `Failed to resolve import "@/lib/utils"` when consuming the layer:

**Cause**: The layer uses `@` alias to reference internal modules. This is handled automatically by the layer configuration.

**Solution 1** (Recommended): Clear cache and restart:

```bash
# In your consumer app directory
rm -rf .nuxt node_modules/.cache node_modules/.vite
pnpm run dev
```

**Solution 2**: If still having issues, check that your consumer app's `nuxt.config.ts` correctly extends the layer:

```typescript
export default defineNuxtConfig({
  extends: ["../design-system-web"], // or "@tdm/design-system-web"
});
```

The layer configuration already includes both Nuxt and Vite alias resolution:

```typescript
// Layer's nuxt.config.ts (already configured)
vite: {
  resolve: {
    alias: {
      "@": join(currentDir, "./app"),
    },
  },
},
alias: {
  "@": join(currentDir, "./app"),
}
```

### Styles Not Applying

If styles are not applying in your consuming project, ensure you're not overriding the layer's CSS. The layer's Tailwind configuration should be sufficient.

### Components Not Found

Make sure you've run `nuxt prepare` or started the dev server at least once to generate the auto-import types.

```bash
pnpm run dev:prepare
```

### TypeScript Not Found Error

If you see an error like `Failed to load TypeScript, which is required for resolving imported types`:

**Cause**: Consumer apps must have TypeScript installed as a peer dependency.

**Solution**: Install TypeScript in your consumer app:

```bash
# pnpm
pnpm add -D typescript

# npm
npm install -D typescript

# yarn
yarn add -D typescript

# bun
bun add -D typescript
```

Then restart your dev server:

```bash
pnpm run dev
```

### TypeScript Errors

If you see TypeScript errors, ensure your `tsconfig.json` extends the Nuxt-generated config:

```json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

## References

This setup is based on:

- [Nuxt Layers Documentation](https://nuxt.com/docs/getting-started/layers)
- [shadcn-vue Documentation](https://www.shadcn-vue.com/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)
- [Real-World Nuxt — Shadcn-vue and Nuxt Layers](https://medium.com/@davidrodriguezpolancodev/real-world-nuxt-shadcn-vue-and-nuxt-layers-72cb67da3f8c)

## License

MIT

---

**Made with ❤️ by TDM Team**
