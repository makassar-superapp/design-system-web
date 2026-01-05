# Deployment Guide

Deployment and publishing procedures for the TDM Design System Web.

---

## Table of Contents

- [Overview](#overview)
- [NPM Publishing](#npm-publishing)
- [Versioning Strategy](#versioning-strategy)
- [Release Workflow](#release-workflow)
- [Storybook Deployment](#storybook-deployment)
- [Rollback Procedures](#rollback-procedures)
- [CI/CD Pipeline](#cicd-pipeline)

---

## Overview

The TDM Design System Web is distributed as an NPM package and documented via a deployed Storybook site.

**Deployment Targets:**

- 📦 **NPM Registry** - `@tdm-digitalteam/design-system-web`
- 📚 **Storybook Site** - `https://design-system.digitalteam.id/`

---

## NPM Publishing

### Prerequisites

- NPM account with `@tdm-digitalteam` organization access
- Logged in via `npm login`
- Clean git working directory
- All tests pass
- Storybook builds successfully

### Publishing Workflow

#### 1. Update Version

Use semantic versioning to update the package version:

```bash
# Patch version (bug fixes): 1.0.0 -> 1.0.1
npm version patch

# Minor version (new features): 1.0.0 -> 1.1.0
npm version minor

# Major version (breaking changes): 1.0.0 -> 2.0.0
npm version major
```

This automatically:

- Updates `package.json` version
- Creates a git commit
- Creates a git tag

#### 2. Test Package Locally

Verify what will be published:

```bash
# Dry run to see what files will be included
pnpm run pack:test

# Create test package
npm pack
```

Test the package in a consumer project:

```bash
# In your test project
pnpm add /path/to/design-system-web/tdm-digitalteam-design-system-web-X.X.X.tgz

# Test components work
pnpm run dev
```

Verify:

- ✅ Components auto-import
- ✅ Styling works correctly
- ✅ No TypeScript errors
- ✅ No console errors/warnings

#### 3. Publish to NPM

```bash
# Login to NPM (if not already logged in)
npm login

# Publish the package
npm publish
```

The `prepublishOnly` script will automatically run `pnpm run dev:prepare`.

#### 4. Post-Publish

```bash
# Push git tags to GitHub
git push --follow-tags

# Or push tags separately
git push --tags
```

Verify publication:

- ✅ Check [NPM package page](https://www.npmjs.com/package/@tdm-digitalteam/design-system-web)
- ✅ Test installation: `pnpm add @tdm-digitalteam/design-system-web`

#### 5. Create GitHub Release

1. Go to [GitHub Releases](https://github.com/makassar-superapp/design-system-web/releases)
2. Click "Draft a new release"
3. Select the version tag
4. Add release title: `v1.0.0`
5. Add release notes (see [Release Notes Template](#release-notes-template))
6. Publish release

---

## Versioning Strategy

Follow [Semantic Versioning](https://semver.org/) (SemVer):

### MAJOR Version (X.0.0)

Breaking changes that require consumer apps to update their code:

**Examples:**

- Renaming components
- Removing components
- Changing prop names
- Removing props
- Changing default behavior

**Migration Guide Required:** Yes

### MINOR Version (1.X.0)

New features that are backward compatible:

**Examples:**

- Adding new components
- Adding new props (with defaults)
- Adding new variants
- New utilities/composables

**Migration Guide Required:** No (optional for new features)

### PATCH Version (1.0.X)

Bug fixes and minor improvements:

**Examples:**

- Fixing bugs
- Improving styling
- Performance improvements
- Documentation updates

**Migration Guide Required:** No

---

## Release Workflow

### Complete Release Process

```bash
# 1. Ensure clean working directory
git status

# 2. Pull latest changes
git checkout main
git pull origin main

# 3. Run tests
pnpm run storybook  # Verify Storybook works
pnpm run build-storybook  # Verify build succeeds

# 4. Update CHANGELOG.md (if not automated)
# Add release notes for the new version

# 5. Update version
npm version [patch|minor|major]

# 6. Test package
pnpm run pack:test
npm pack

# 7. Test in consumer app
cd /path/to/test-app
pnpm add /path/to/design-system-web/tdm-digitalteam-design-system-web-X.X.X.tgz
pnpm run dev
# Test components...

# 8. Publish to NPM
cd /path/to/design-system-web
npm publish

# 9. Push to GitHub
git push --follow-tags

# 10. Create GitHub Release
# (via GitHub UI)

# 11. Deploy Storybook
pnpm run build-storybook
# Deploy storybook-static/ directory
```

### Release Notes Template

````markdown
## v1.1.0 (2026-01-05)

### ✨ New Features

- Added `Sidebar` component for navigation layouts
- Added `Chips` component for tags and labels
- Added dark mode support to all components

### 🐛 Bug Fixes

- Fixed Button focus state in Safari
- Fixed DatePicker hydration error
- Fixed Select dropdown positioning

### 🎨 Improvements

- Improved accessibility for Dialog component
- Enhanced mobile responsiveness for Table component
- Optimized bundle size (reduced by 15%)

### 🔧 Dependencies

- Updated Tailwind CSS to v4.1.15
- Updated Nuxt to v4.1.3
- Updated Reka UI to v2.6.0

### 📚 Documentation

- Added ARCHITECTURE.md
- Added COMPONENTS.md
- Improved README with better examples

### ⚠️ Breaking Changes (if major version)

- Renamed `ModalDialog` to `Dialog`
- Removed deprecated `LegacyButton` component
- Changed `Select` v-model to use value instead of object

### 🔄 Migration Guide (if major version)

```typescript
// Before
<ModalDialog>...</ModalDialog>

// After
<Dialog>...</Dialog>
```
````

````

---

## Storybook Deployment

### Build Storybook

```bash
pnpm run build-storybook
````

This creates a production build in `storybook-static/` directory.

### Deploy to Static Hosting

#### Option 1: GitHub Pages

```bash
# Build Storybook
pnpm run build-storybook

# Deploy to gh-pages branch
npx gh-pages -d storybook-static
```

#### Option 2: Netlify

1. Connect GitHub repository to Netlify
2. Configure build settings:
   - Build command: `pnpm run build-storybook`
   - Publish directory: `storybook-static`
3. Deploy

#### Option 3: Vercel

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build command: `pnpm run build-storybook`
   - Output directory: `storybook-static`
3. Deploy

#### Option 4: Custom Server

```bash
# Build Storybook
pnpm run build-storybook

# Upload storybook-static/ to your server
scp -r storybook-static/ user@server:/var/www/design-system/

# Or use rsync
rsync -avz storybook-static/ user@server:/var/www/design-system/
```

---

## Rollback Procedures

### Rollback NPM Version

If a release has critical issues:

```bash
# Option 1: Deprecate the version (recommended)
npm deprecate @tdm-digitalteam/design-system-web@1.1.0 "Critical bug, use 1.0.9 instead"

# Option 2: Unpublish (only within 72 hours)
npm unpublish @tdm-digitalteam/design-system-web@1.1.0
```

### Rollback Git Tag

```bash
# Delete local tag
git tag -d v1.1.0

# Delete remote tag
git push origin :refs/tags/v1.1.0
```

### Hotfix Process

For critical bugs in production:

```bash
# 1. Create hotfix branch from the problematic version tag
git checkout -b hotfix/1.1.1 v1.1.0

# 2. Fix the bug
# ... make changes ...

# 3. Commit fix
git add .
git commit -m "fix: critical bug in Dialog component"

# 4. Update version (patch)
npm version patch

# 5. Merge to main
git checkout main
git merge hotfix/1.1.1

# 6. Publish
npm publish

# 7. Push
git push --follow-tags

# 8. Delete hotfix branch
git branch -d hotfix/1.1.1
```

---

## CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/publish.yml
name: Publish Package

on:
  push:
    tags:
      - "v*"

jobs:
  publish-npm:
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
          registry-url: "https://registry.npmjs.org"

      - name: Install dependencies
        run: pnpm install

      - name: Build Storybook
        run: pnpm run build-storybook

      - name: Publish to NPM
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

      - name: Deploy Storybook
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

### Continuous Deployment Strategy

**Development:**

- Push to `main` branch
- Auto-deploy Storybook to staging environment
- No NPM publish

**Staging:**

- Create release candidate tag (e.g., `v1.1.0-rc.1`)
- Auto-deploy Storybook to staging
- Test thoroughly

**Production:**

- Create release tag (e.g., `v1.1.0`)
- Auto-publish to NPM
- Auto-deploy Storybook to production
- Create GitHub Release

---

## Pre-Release Checklist

Before publishing a new version:

- [ ] All tests pass in Storybook
- [ ] Storybook builds successfully
- [ ] CHANGELOG.md is updated
- [ ] Documentation is updated
- [ ] No console errors/warnings
- [ ] Tested in a consumer app
- [ ] All new components have stories
- [ ] Accessibility checks pass
- [ ] Responsive design verified
- [ ] Cross-browser tested
- [ ] Git working directory is clean
- [ ] Version number is correct
- [ ] Package.json metadata is accurate

---

## Monitoring and Analytics

### NPM Package Stats

Monitor package usage:

- Weekly downloads: https://www.npmjs.com/package/@tdm-digitalteam/design-system-web
- Use `npm-stat` for detailed analytics

### Storybook Analytics

Add analytics to deployed Storybook:

```javascript
// .storybook/preview.ts
import { addons } from "@storybook/preview-api";

if (typeof window !== "undefined") {
  // Add your analytics here
  // Example: Google Analytics, Plausible, etc.
}
```

---

## Security

### Dependency Audits

Run security audits regularly:

```bash
# Check for vulnerabilities
pnpm audit

# Fix vulnerabilities
pnpm audit --fix
```

### NPM Two-Factor Authentication

Enable 2FA for NPM account:

```bash
npm profile enable-2fa auth-and-writes
```

---

## Additional Resources

- 📖 [Publishing Guide (Maintainers)](PUBLISHING.md)
- 🏗️ [Architecture Documentation](ARCHITECTURE.md)
- 🧪 [Testing Guide](TESTING.md)
- 📚 [NPM Publishing Docs](https://docs.npmjs.com/cli/v10/commands/npm-publish)
- 🔖 [Semantic Versioning](https://semver.org/)
