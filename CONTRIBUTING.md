# Contributing to TDM Design System Web

Thank you for your interest in contributing to `@tdm-digitalteam/design-system-web`! This document provides guidelines for contributing to this project.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [How to Contribute](#how-to-contribute)
  - [Reporting Issues](#reporting-issues)
  - [Suggesting Features](#suggesting-features)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Component Development Guidelines](#component-development-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Style Guide](#style-guide)
- [Publishing Package](#publishing-package)

---

## Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in your interactions.

---

## Getting Started

### Prerequisites

- **Node.js**: v20 or higher
- **pnpm**: v10.19.0 (recommended package manager)
- **Git**: For version control

### Installation

1. **Fork and Clone the Repository**

   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/design-system-web.git
   cd design-system-web
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Run Storybook in Development Mode**

   ```bash
   pnpm run storybook
   ```

   This will start Storybook at `http://localhost:6006`.

4. **Prepare Nuxt Layer**

   ```bash
   pnpm run dev:prepare
   ```

---

## Development Workflow

### Available Scripts

| Command                    | Description                                     |
| -------------------------- | ----------------------------------------------- |
| `pnpm run dev`             | Start Nuxt dev server                           |
| `pnpm run storybook`       | Start Storybook dev server on port 6006         |
| `pnpm run build-storybook` | Build Storybook for production                  |
| `pnpm run dev:prepare`     | Prepare Nuxt layer (generates `.nuxt` folder)   |
| `pnpm run pack:test`       | Test what files will be included in npm package |

### Project Structure

```
design-system-web/
├── app/
│   ├── assets/         # CSS, images, fonts
│   ├── components/     # Vue components
│   │   └── ui/         # UI components (Avatar, Button, etc.)
│   ├── lib/            # Utility libraries (e.g., utils.ts for cn())
│   ├── utils/          # Helper utilities
│   └── plugins/        # Nuxt plugins
├── stories/            # Storybook stories (not published to npm)
├── .storybook/         # Storybook configuration
├── nuxt.config.ts      # Nuxt layer configuration
├── package.json        # Package metadata
├── README.md           # User documentation
├── CONTRIBUTING.md     # This file
└── PUBLISHING.md       # Publishing guide for maintainers
```

---

## How to Contribute

### Reporting Issues

If you encounter a bug or have a question, please [open an issue](https://github.com/makassar-superapp/design-system-web/issues) with the following information:

- **Title**: Clear and descriptive title
- **Description**: Detailed description of the issue
- **Steps to Reproduce**: Step-by-step instructions to reproduce the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**:
  - Node.js version
  - pnpm version
  - Nuxt version
  - Browser (if applicable)
- **Screenshots/Videos**: If applicable

**Example:**

```markdown
### Bug: Avatar component doesn't display fallback text

**Description:**
The Avatar component fails to show fallback initials when no image is provided.

**Steps to Reproduce:**

1. Import Avatar component
2. Use without `src` prop
3. Observe that fallback is not displayed

**Expected:**
Should display initials "JD" for "John Doe"

**Actual:**
Shows blank avatar

**Environment:**

- Node: v20.10.0
- pnpm: 10.19.0
- Nuxt: 4.1.3
```

---

### Suggesting Features

We welcome feature suggestions! Please [open an issue](https://github.com/makassar-superapp/design-system-web/issues) with:

- **Title**: `[Feature Request] Your feature title`
- **Description**: Clear description of the feature
- **Use Case**: Why this feature would be useful
- **Proposed Solution**: How you envision this working
- **Alternatives**: Any alternative solutions you've considered

---

### Submitting Pull Requests

We follow a standard Git workflow for contributions.

#### For Internal Contributors (TDM Team)

1. **Create a Feature Branch**

   ```bash
   # Always branch from main
   git checkout main
   git pull origin main

   # Create feature branch
   git checkout -b feature/component-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Make Your Changes**

   - Follow the [Component Development Guidelines](#component-development-guidelines)
   - Write meaningful commit messages (see [Commit Message Guidelines](#commit-message-guidelines))
   - Test your changes in Storybook

3. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "feat: add new Avatar component"
   ```

4. **Push to GitHub**

   ```bash
   git push origin feature/component-name
   ```

5. **Open a Pull Request**

   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template with:
     - Description of changes
     - Related issue numbers (e.g., `Closes #123`)
     - Screenshots/videos (if UI changes)
     - Checklist confirmation

6. **Code Review**

   - At least one team member must review and approve
   - Address any requested changes
   - Once approved, squash and merge into `main`

#### For External Contributors

1. **Fork the Repository**

   Click the "Fork" button on GitHub to create your own copy.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/design-system-web.git
   cd design-system-web
   ```

3. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

   - Follow all guidelines in this document
   - Add Storybook stories for new components
   - Test thoroughly

5. **Commit and Push**

   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**

   - Navigate to the original repository
   - Click "New Pull Request"
   - Select "compare across forks"
   - Select your fork and branch
   - Fill in the PR template

7. **Wait for Review**

   - A maintainer will review your PR
   - Be responsive to feedback
   - Make requested changes if needed

---

### Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```bash
feat(avatar): add online status indicator
fix(button): resolve disabled state styling
docs(readme): update installation instructions
chore: bump version to 1.1.0
```

---

## Component Development Guidelines

When creating or modifying components:

### 1. Component Structure

```vue
<script setup lang="ts">
// Imports
import { cn } from "@/lib/utils";

// Props interface
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

// Props with defaults
const props = withDefaults(defineProps<AvatarProps>(), {
  size: "md",
});
</script>

<template>
  <div :class="cn('avatar', avatarVariants({ size }))">
    <!-- Component markup -->
  </div>
</template>
```

### 2. Use Class Variance Authority (CVA)

For variant-based styling:

```typescript
import { cva } from "class-variance-authority";

const avatarVariants = cva("rounded-full", {
  variants: {
    size: {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
```

### 3. Create Storybook Stories

Every component should have corresponding `.stories.ts` files:

```typescript
// Avatar.stories.ts
import type { Meta, StoryObj } from "@storybook/vue3";
import Avatar from "./Avatar.vue";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/avatar.jpg",
    alt: "User Avatar",
  },
};
```

### 4. TypeScript Best Practices

- Always define prop types with TypeScript interfaces
- Use proper type annotations
- Avoid `any` type
- Export types that might be used by consumers

### 5. Accessibility

- Use semantic HTML
- Add ARIA labels where necessary
- Ensure keyboard navigation works
- Test with screen readers

---

## Testing Guidelines

### Manual Testing

1. **Visual Testing in Storybook**

   - Test all component variants
   - Check responsive behavior
   - Verify dark mode (if applicable)

2. **Integration Testing**
   - Test in a real Nuxt application
   - Verify auto-imports work
   - Check that styles are applied correctly

### Before Submitting PR

- [ ] All Storybook stories render without errors
- [ ] Component works in dark mode (if applicable)
- [ ] TypeScript types are correctly defined
- [ ] No console errors or warnings
- [ ] Code follows project style guide

---

## Style Guide

### Code Formatting

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for strings
- **Semicolons**: Optional (project uses ESLint config)
- **Line Length**: 100 characters maximum

### Naming Conventions

- **Components**: PascalCase (e.g., `Avatar.vue`, `AvatarFallback.vue`)
- **Props**: camelCase (e.g., `isOnline`, `showBadge`)
- **Events**: kebab-case (e.g., `@update-value`)
- **CSS Classes**: kebab-case (e.g., `avatar-container`)

### File Naming

- **Components**: `ComponentName.vue`
- **Stories**: `ComponentName.stories.ts`
- **Utils**: `kebab-case.ts`

---

## Publishing Package

For maintainers with NPM publish access, please refer to [PUBLISHING.md](./PUBLISHING.md) for detailed instructions on how to publish this package to NPM.

---

## Questions?

If you have any questions about contributing, please:

- Open an issue on GitHub
- Contact the TDM team directly

Thank you for contributing to TDM Design System! 🎉
