# Package Publishing Guide

Panduan untuk memastikan hanya file yang diperlukan yang di-publish/consume ke consumer app.

## Strategi Inclusion/Exclusion

Package ini menggunakan **`.npmignore` approach** (bukan `files` whitelist) untuk kontrol yang lebih baik:

### ✅ File yang AKAN Di-include

Semua file di root dan `app/` folder, **KECUALI** yang ada di `.npmignore`:

- `app/` - Components, utils, composables, assets (tanpa `*.stories.*`)
- `nuxt.config.ts` - Layer configuration
- `components.json` - shadcn-vue config
- `README.md` - Documentation
- `package.json` - Package metadata

### ❌ File yang TIDAK Di-include

File `.npmignore` mengexclude file development yang tidak diperlukan:

### Development & Build Files

- `.storybook/` - Storybook configuration
- `*.stories.*` - Storybook stories
- `.playground/` - Testing playground
- `.nuxt/`, `.output/` - Nuxt build artifacts

### Lock Files

- `pnpm-lock.yaml`, `package-lock.json`, `yarn.lock`
- Consumer app harus pakai lock file mereka sendiri

### Documentation (Internal)

- `docs/` - Internal documentation
- `LAYER_SETUP_GUIDE.md` - Technical guide (optional)
- `README.md` **tetap di-include** untuk dokumentasi package

### Config Files

- ESLint, Prettier config
- `.env` files
- Test files (`*.test.ts`, `*.spec.ts`)

## Testing Package

### Option 1: Test Locally (Recommended)

```bash
# Di consumer app
pnpm add file:../design-system-web
```

### Option 2: Test dengan npm pack

```bash
# Di design-system-web directory
npm pack

# Check isi package
tar -tzf tdm-design-system-web-0.1.0.tgz

# Install di consumer app
pnpm add ../design-system-web/tdm-design-system-web-0.1.0.tgz
```

### Option 3: Via GitHub

```bash
pnpm add github:rayfajars/testing-nuxt-layers#main
```

## Verifikasi

Untuk memastikan file yang benar yang di-include:

```bash
# Dry-run publish (tidak akan benar-benar publish)
npm publish --dry-run

# Akan show list file yang akan di-publish
```

## Publishing ke npm

```bash
# Login ke npm (sekali saja)
npm login

# Publish
npm publish --access public

# Atau untuk scoped package
npm publish --access public @tdm/design-system-web
```

## Best Practices

1. ✅ **Gunakan `files` field** di `package.json` sebagai whitelist
2. ✅ **Gunakan `.npmignore`** untuk extra safety
3. ✅ **Test dengan `npm pack`** sebelum publish
4. ✅ **Version bump** sebelum publish (`npm version patch/minor/major`)
5. ✅ **Keep README.md** untuk npm registry documentation
6. ❌ **Jangan include** lock files, storybook, playground, atau dev config

---

**Made with ❤️ by TDM Team**
