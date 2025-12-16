import type { Meta, StoryObj } from "@storybook/vue3";
import { defineComponent } from "vue";

// Raw CSS from app/assets/css/tailwind.css
const CSS_CONTENT = `@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
@import "tailwindcss";
@import "tw-animate-css";

@source "../../components/";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Radius Shadcn */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  /* Color Shadcn */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  /* --color-primary: var(--primary); */
  --color-primary-foreground: var(--primary-foreground);
  /* --color-secondary: var(--secondary); */
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  /* Font TDM Design System */
  --font-monteserrat: "Montserrat";
  --font-opensans: "Open Sans";

  /* Color TDM Design System */
  --color-primary: var(--tdm-primary);
  --color-secondary: var(--tdm-secondary);
  --color-primary-0: var(--tdm-primary-0);
  --color-primary-5: var(--tdm-primary-5);
  --color-primary-8: var(--tdm-primary-8);
  --color-primary-10: var(--tdm-primary-10);
  --color-primary-20: var(--tdm-primary-20);
  --color-primary-30: var(--tdm-primary-30);
  --color-primary-40: var(--tdm-primary-40);
  --color-primary-50: var(--tdm-primary-50);
  --color-primary-60: var(--tdm-primary-60);
  --color-primary-70: var(--tdm-primary-70);
  --color-primary-80: var(--tdm-primary-80);
  --color-primary-90: var(--tdm-primary-90);

  --color-white: var(--tdm-white);
  --color-white-0: var(--tdm-white-0);
  --color-white-5: var(--tdm-white-5);
  --color-white-8: var(--tdm-white-8);
  --color-white-10: var(--tdm-white-10);
  --color-white-20: var(--tdm-white-20);
  --color-white-30: var(--tdm-white-30);
  --color-white-40: var(--tdm-white-40);
  --color-white-50: var(--tdm-white-50);
  --color-white-60: var(--tdm-white-60);
  --color-white-70: var(--tdm-white-70);
  --color-white-80: var(--tdm-white-80);
  --color-white-90: var(--tdm-white-90);

  --color-gray-base-0: var(--tdm-gray-base-0);
  --color-gray-100: var(--tdm-gray-100);
  --color-gray-200: var(--tdm-gray-200);
  --color-gray-300: var(--tdm-gray-300);
  --color-gray-400: var(--tdm-gray-400);
  --color-gray-500: var(--tdm-gray-500);
  --color-gray-600: var(--tdm-gray-600);
  --color-gray-700: var(--tdm-gray-700);
  --color-gray-800: var(--tdm-gray-800);
  --color-gray-900: var(--tdm-gray-900);
  --color-gray-0: var(--tdm-gray-0);
  --color-gray-5: var(--tdm-gray-5);
  --color-gray-8: var(--tdm-gray-8);
  --color-gray-10: var(--tdm-gray-10);
  --color-gray-20: var(--tdm-gray-20);
  --color-gray-30: var(--tdm-gray-30);
  --color-gray-40: var(--tdm-gray-40);
  --color-gray-50: var(--tdm-gray-50);
  --color-gray-60: var(--tdm-gray-60);
  --color-gray-70: var(--tdm-gray-70);
  --color-gray-80: var(--tdm-gray-80);
  --color-gray-90: var(--tdm-gray-90);

  --color-red-200: var(--tdm-red-200);
  --color-red-500: var(--tdm-red-500);
  --color-red-600: var(--tdm-red-600);
  --color-red-700: var(--tdm-red-700);
  --color-red-800: var(--tdm-red-800);
  --color-red-900: var(--tdm-red-900);
  --color-red-0: var(--tdm-red-0);
  --color-red-5: var(--tdm-red-5);
  --color-red-8: var(--tdm-red-8);
  --color-red-10: var(--tdm-red-10);
  --color-red-20: var(--tdm-red-20);
  --color-red-30: var(--tdm-red-30);
  --color-red-40: var(--tdm-red-40);
  --color-red-50: var(--tdm-red-50);
  --color-red-60: var(--tdm-red-60);
  --color-red-70: var(--tdm-red-70);
  --color-red-80: var(--tdm-red-80);
  --color-red-90: var(--tdm-red-90);

  --color-green-500: var(--tdm-green-500);
  --color-green-600: var(--tdm-green-600);
  --color-green-700: var(--tdm-green-700);
  --color-green-800: var(--tdm-green-800);
  --color-green-900: var(--tdm-green-900);
  --color-green-0: var(--tdm-green-0);
  --color-green-5: var(--tdm-green-5);
  --color-green-8: var(--tdm-green-8);
  --color-green-10: var(--tdm-green-10);
  --color-green-20: var(--tdm-green-20);
  --color-green-30: var(--tdm-green-30);
  --color-green-40: var(--tdm-green-40);
  --color-green-50: var(--tdm-green-50);
  --color-green-60: var(--tdm-green-60);
  --color-green-70: var(--tdm-green-70);
  --color-green-80: var(--tdm-green-80);
  --color-green-90: var(--tdm-green-90);

  --color-blue-500: var(--tdm-blue-500);
  --color-blue-600: var(--tdm-blue-600);
  --color-blue-700: var(--tdm-blue-700);
  --color-blue-800: var(--tdm-blue-800);
  --color-blue-900: var(--tdm-blue-900);
  --color-blue-0: var(--tdm-blue-0);
  --color-blue-5: var(--tdm-blue-5);
  --color-blue-8: var(--tdm-blue-8);
  --color-blue-10: var(--tdm-blue-10);
  --color-blue-20: var(--tdm-blue-20);
  --color-blue-30: var(--tdm-blue-30);
  --color-blue-40: var(--tdm-blue-40);
  --color-blue-50: var(--tdm-blue-50);
  --color-blue-60: var(--tdm-blue-60);
  --color-blue-70: var(--tdm-blue-70);
  --color-blue-80: var(--tdm-blue-80);
  --color-blue-90: var(--tdm-blue-90);

  --color-orange-500: var(--tdm-orange-500);
  --color-orange-600: var(--tdm-orange-600);
  --color-orange-700: var(--tdm-orange-700);
  --color-orange-800: var(--tdm-orange-800);
  --color-orange-900: var(--tdm-orange-900);
  --color-orange-0: var(--tdm-orange-0);
  --color-orange-5: var(--tdm-orange-5);
  --color-orange-8: var(--tdm-orange-8);
  --color-orange-10: var(--tdm-orange-10);
  --color-orange-20: var(--tdm-orange-20);
  --color-orange-30: var(--tdm-orange-30);
  --color-orange-40: var(--tdm-orange-40);
  --color-orange-50: var(--tdm-orange-50);
  --color-orange-60: var(--tdm-orange-60);
  --color-orange-70: var(--tdm-orange-70);
  --color-orange-80: var(--tdm-orange-80);
  --color-orange-90: var(--tdm-orange-90);

  /* Spacing TDM Design System */
  /* Spacing need more adjustment and make layout existing broken, use default spacing tailwind instead */

  /* Radius TDM Design System,
  Minor adjustment, can use default tailwind foundation radius */

  /* Shadows TDM Design System */
  --shadow-sm: 0 1px 2px 0 rgba(10, 13, 18, 0.05);
  --shadow-md: 0 2px 4px -2px rgba(10, 13, 18, 0.05),
    0 2px 4px -1px rgba(10, 13, 18, 0.05);
  --shadow-lg: 0 10px 15px -3px rgba(10, 13, 18, 0.06),
    0 4px 6px -4px rgba(10, 13, 18, 0.06);
  --shadow-xl: 0 20px 25px -5px rgba(10, 13, 18, 0.06),
    0 8px 10px -6px rgba(10, 13, 18, 0.06);
  --shadow-2xl: 0 25px 50px -12px rgba(10, 13, 18, 0.2);

  --color-text-brand: var(--Brands-Primary);
  --color-text-white: var(--Text-White);
  --color-text-high: var(--Text-High);
  --color-text-medium: var(--Text-Medium);
  --color-text-low: var(--Text-Low);
  --color-text-very-low: var(--Text-Very-Low);

  --color-container-white: var(--Container-Background-White);
  --color-container-black: var(--Container-Background-Black);
  --color-container-high: var(--Container-Background-High);
  --color-container-medium: var(--Container-Background-Medium);
  --color-container-low: var(--Container-Background-Low);

  --color-border-idle: var(--General-Border-Idle);
  --color-border-hover: var(--General-Border-Hover);

  --color-info: var(--Brands-General-Info);
  --color-processing: var(--Brands-General-Processing);
  --color-success: var(--tdm-green-600);
  --color-warning: var(--tdm-orange-500);
  --color-link: var(--tdm-primary);
}

:root {
  /* Shadcn */
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);

  /* TDM Design System */
  --tdm-primary: #b21d28;
  --tdm-secondary: #951429;
  --tdm-primary-0: rgba(178, 29, 40, 0.01);
  --tdm-primary-5: rgba(178, 29, 40, 0.05);
  --tdm-primary-8: rgba(178, 29, 40, 0.08);
  --tdm-primary-10: rgba(178, 29, 40, 0.1);
  --tdm-primary-20: rgba(178, 29, 40, 0.2);
  --tdm-primary-30: rgba(178, 29, 40, 0.3);
  --tdm-primary-40: rgba(178, 29, 40, 0.4);
  --tdm-primary-50: rgba(178, 29, 40, 0.5);
  --tdm-primary-60: rgba(178, 29, 40, 0.6);
  --tdm-primary-70: rgba(178, 29, 40, 0.7);
  --tdm-primary-80: rgba(178, 29, 40, 0.8);
  --tdm-primary-90: rgba(178, 29, 40, 0.9);

  --tdm-white: #ffffff;
  --tdm-white-0: rgba(255, 255, 255, 0.01);
  --tdm-white-5: rgba(255, 255, 255, 0.05);
  --tdm-white-8: rgba(255, 255, 255, 0.08);
  --tdm-white-10: rgba(255, 255, 255, 0.1);
  --tdm-white-20: rgba(255, 255, 255, 0.2);
  --tdm-white-30: rgba(255, 255, 255, 0.3);
  --tdm-white-40: rgba(255, 255, 255, 0.4);
  --tdm-white-50: rgba(255, 255, 255, 0.5);
  --tdm-white-60: rgba(255, 255, 255, 0.6);
  --tdm-white-70: rgba(255, 255, 255, 0.7);
  --tdm-white-80: rgba(255, 255, 255, 0.8);
  --tdm-white-90: rgba(255, 255, 255, 0.9);

  --tdm-gray-base-0: #fafafa;
  --tdm-gray-100: #f5f5f5;
  --tdm-gray-200: #c9c9c9;
  --tdm-gray-300: #9b9b9b;
  --tdm-gray-400: #737373;
  --tdm-gray-500: #525252;
  --tdm-gray-600: #404040;
  --tdm-gray-700: #212121;
  --tdm-gray-800: #171717;
  --tdm-gray-900: #0a0a0a;

  --tdm-gray-0: rgba(82, 82, 82, 0.01);
  --tdm-gray-5: rgba(82, 82, 82, 0.05);
  --tdm-gray-8: rgba(82, 82, 82, 0.08);
  --tdm-gray-10: rgba(82, 82, 82, 0.1);
  --tdm-gray-20: rgba(82, 82, 82, 0.2);
  --tdm-gray-30: rgba(82, 82, 82, 0.3);
  --tdm-gray-40: rgba(82, 82, 82, 0.4);
  --tdm-gray-50: rgba(82, 82, 82, 0.5);
  --tdm-gray-60: rgba(82, 82, 82, 0.6);
  --tdm-gray-70: rgba(82, 82, 82, 0.7);
  --tdm-gray-80: rgba(82, 82, 82, 0.8);
  --tdm-gray-90: rgba(82, 82, 82, 0.9);

  --tdm-red-200: #f8c59d;
  --tdm-red-500: #c1360f;
  --tdm-red-600: #a5210a;
  --tdm-red-700: #8a1107;
  --tdm-red-800: #6f0404;
  --tdm-red-900: #5c0209;
  --tdm-red-0: rgba(193, 54, 15, 0.01);
  --tdm-red-5: rgba(193, 54, 15, 0.05);
  --tdm-red-8: rgba(193, 54, 15, 0.08);
  --tdm-red-10: rgba(193, 54, 15, 0.1);
  --tdm-red-20: rgba(193, 54, 15, 0.2);
  --tdm-red-30: rgba(193, 54, 15, 0.3);
  --tdm-red-40: rgba(193, 54, 15, 0.4);
  --tdm-red-50: rgba(193, 54, 15, 0.5);
  --tdm-red-60: rgba(193, 54, 15, 0.6);
  --tdm-red-70: rgba(193, 54, 15, 0.7);
  --tdm-red-80: rgba(193, 54, 15, 0.8);
  --tdm-red-90: rgba(193, 54, 15, 0.9);

  --tdm-green-500: #3cb231;
  --tdm-green-600: #249923;
  --tdm-green-700: #188020;
  --tdm-green-800: #0f671d;
  --tdm-green-900: #09551b;
  --tdm-green-0: rgba(60, 178, 49, 0.01);
  --tdm-green-5: rgba(60, 178, 49, 0.05);
  --tdm-green-8: rgba(60, 178, 49, 0.08);
  --tdm-green-10: rgba(60, 178, 49, 0.1);
  --tdm-green-20: rgba(60, 178, 49, 0.2);
  --tdm-green-30: rgba(60, 178, 49, 0.3);
  --tdm-green-40: rgba(60, 178, 49, 0.4);
  --tdm-green-50: rgba(60, 178, 49, 0.5);
  --tdm-green-60: rgba(60, 178, 49, 0.6);
  --tdm-green-70: rgba(60, 178, 49, 0.7);
  --tdm-green-80: rgba(60, 178, 49, 0.8);
  --tdm-green-90: rgba(60, 178, 49, 0.9);

  --tdm-blue-500: #008593;
  --tdm-blue-600: #00687e;
  --tdm-blue-700: #004e69;
  --tdm-blue-800: #003855;
  --tdm-blue-900: #002846;
  --tdm-blue-0: rgba(0, 133, 147, 0.01);
  --tdm-blue-5: rgba(0, 133, 147, 0.05);
  --tdm-blue-8: rgba(0, 133, 147, 0.08);
  --tdm-blue-10: rgba(0, 133, 147, 0.1);
  --tdm-blue-20: rgba(0, 133, 147, 0.2);
  --tdm-blue-30: rgba(0, 133, 147, 0.3);
  --tdm-blue-40: rgba(0, 133, 147, 0.4);
  --tdm-blue-50: rgba(0, 133, 147, 0.5);
  --tdm-blue-60: rgba(0, 133, 147, 0.6);
  --tdm-blue-70: rgba(0, 133, 147, 0.7);
  --tdm-blue-80: rgba(0, 133, 147, 0.8);
  --tdm-blue-90: rgba(0, 133, 147, 0.9);

  --tdm-orange-500: #f29c1f;
  --tdm-orange-600: #d67e14;
  --tdm-orange-700: #b9660e;
  --tdm-orange-800: #9a4f0a;
  --tdm-orange-900: #833b08;
  --tdm-orange-0: rgba(232, 135, 0, 0.01);
  --tdm-orange-5: rgba(232, 135, 0, 0.05);
  --tdm-orange-8: rgba(232, 135, 0, 0.08);
  --tdm-orange-10: rgba(232, 135, 0, 0.1);
  --tdm-orange-20: rgba(232, 135, 0, 0.2);
  --tdm-orange-30: rgba(232, 135, 0, 0.3);
  --tdm-orange-40: rgba(232, 135, 0, 0.4);
  --tdm-orange-50: rgba(232, 135, 0, 0.5);
  --tdm-orange-60: rgba(232, 135, 0, 0.6);
  --tdm-orange-70: rgba(232, 135, 0, 0.7);
  --tdm-orange-80: rgba(232, 135, 0, 0.8);
  --tdm-orange-90: rgba(232, 135, 0, 0.9);

  --Brands-Primary: var(--tdm-primary);
  --Text-High: var(--tdm-gray-900);
  --Text-Medium: var(--tdm-gray-400);
  --Text-Low: var(--tdm-gray-300);
  --Text-Very-Low: var(--tdm-gray-200);
  --Text-White: var(--tdm-white);

  --Container-Background-White: var(--tdm-white);
  --Container-Background-Black: var(--tdm-gray-900);
  --Container-Background-High: var(--tdm-gray-base-0);
  --Container-Background-Medium: var(--tdm-gray-100);
  --Container-Background-Low: var(--tdm-gray-200);

  --General-Border-Idle: var(--tdm-gray-200);
  --General-Border-Hover: var(--tdm-gray-300);

  --Brands-General-Info: #4485f5;
  --Brands-General-Processing: var(--tdm-blue-500);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);

  --Text-High: var(--tdm-gray-base-0);
  --Text-Medium: var(--tdm-gray-300);
  --Text-Low: var(--tdm-gray-400);
  --Text-Very-Low: var(--tdm-gray-500);

  --Container-Background-White: var(--tdm-white);
  --Container-Background-Black: var(--tdm-gray-900);
  --Container-Background-High: var(--tdm-gray-700);
  --Container-Background-Medium: var(--tdm-gray-800);
  --Container-Background-Low: var(--tdm-gray-900);

  --General-Border-Idle: var(--tdm-gray-500);
  --General-Border-Hover: var(--tdm-gray-400);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`;

const CSSCode = defineComponent({
  name: "CSSCode",
  setup() {
    const copyCode = () => {
      navigator.clipboard.writeText(CSS_CONTENT);
      alert("CSS copied!");
    };

    return { cssContent: CSS_CONTENT, copyCode };
  },
  template: `
    <div class="relative">
      <button 
        @click="copyCode" 
        class="absolute top-4 right-4 z-10 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-80 transition-colors text-sm font-medium shadow-md"
      >
        Copy CSS
      </button>
      <pre class="m-0 p-6 bg-gray-900 text-gray-100 overflow-auto min-h-screen text-sm leading-relaxed font-mono"><code>{{ cssContent }}</code></pre>
    </div>
  `,
});

const meta = {
  title: "Design Tokens/CSS Source",
  component: CSSCode,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CSSCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullCSS: Story = {};
