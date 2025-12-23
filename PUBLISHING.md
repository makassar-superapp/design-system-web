# Publishing Guide

> **⚠️ For Maintainers Only**  
> This guide is for core maintainers with NPM publish access to `@tdm-digitalteam/design-system-web`.

---

## Quick Reference

```bash
# 1. Update version
npm version [patch|minor|major]

# 2. Test package
pnpm run pack:test
npm pack

# 3. Publish
npm publish

# 4. Push tags
git push --tags
```

---

## Prerequisites

- NPM account with `@tdm-digitalteam` organization access
- Logged in via `npm login`
- Clean git working directory

---

## Version Management

Follow [Semantic Versioning](https://semver.org/):

- **PATCH** (1.0.X): Bug fixes
- **MINOR** (1.X.0): New features (backward compatible)
- **MAJOR** (X.0.0): Breaking changes

### Automatic (Recommended)

```bash
npm version patch   # 1.0.0 -> 1.0.1
npm version minor   # 1.0.0 -> 1.1.0
npm version major   # 1.0.0 -> 2.0.0
```

This will automatically:

- Update `package.json` version
- Create git commit
- Create git tag

### Manual

If you prefer to update version manually:

1. **Update `package.json`**:

   ```json
   {
     "version": "1.0.1"
   }
   ```

2. **Commit changes**:

   ```bash
   git add package.json
   git commit -m "chore: bump version to 1.0.1"
   ```

3. **Create git tag**:
   ```bash
   git tag v1.0.1
   ```

---

## Publishing Workflow

### 1. Pre-Publish Checklist

- [ ] All changes committed and pushed
- [ ] Storybook builds: `pnpm run build-storybook`
- [ ] Version updated in package.json

### 2. Test Package Locally

```bash
# Check what will be published
pnpm run pack:test

# Create test package
npm pack

# Test in a consumer project
cd /path/to/test-project
pnpm add /path/to/design-system-web/tdm-digitalteam-design-system-web-X.X.X.tgz
```

Verify:

- ✅ Components auto-import
- ✅ Styling works
- ✅ No TypeScript errors

### 3. Publish to NPM

```bash
npm login
npm publish
```

The `prepublishOnly` script will run `pnpm run dev:prepare` automatically.

### 4. Post-Publish

```bash
# Push git tags
git push --tags

# Verify on NPM
# https://www.npmjs.com/package/@tdm-digitalteam/design-system-web

# Create GitHub release
# https://github.com/makassar-superapp/design-system-web/releases
```

---

## Troubleshooting

### "You do not have permission to publish"

```bash
npm whoami  # Verify logged in user
npm login   # Re-authenticate
```

### "Version already exists"

```bash
npm version patch  # Bump version
npm publish
```

### Package too large

```bash
pnpm run pack:test  # Check what's included
# Update .npmignore if needed
```

### Emergency: Unpublish (within 72 hours only)

```bash
npm unpublish @tdm-digitalteam/design-system-web@1.0.0

# Better: deprecate instead
npm deprecate @tdm-digitalteam/design-system-web@1.0.0 "Use 1.0.1 instead"
```

---

## What Gets Published?

✅ **Included:**

- `app/assets/`
- `app/components/` (Vue & TS files, excluding stories)
- `app/lib/`, `app/utils/`, `app/plugins/`
- `nuxt.config.ts`, `tsconfig.json`
- `README.md`

❌ **Excluded:**

- `stories/`, `.storybook/`
- `*.stories.ts`, `*.stories.vue`
- `node_modules/`, `.git/`

Check via: `pnpm run pack:test`

---

## Need Help?

- Contact TDM maintainers team
- [NPM Publish Docs](https://docs.npmjs.com/cli/v10/commands/npm-publish)
