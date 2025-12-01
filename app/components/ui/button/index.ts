import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-primary focus-visible:ring-primary-40 focus-visible:ring-[2px] focus-visible:ring-offset-[2px] focus-visible:ring-offset-background aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-secondary",
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-secondary",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-gray-200 bg-white text-foreground shadow-xs hover:bg-primary-10 hover:border-primary",
        ghost:
          "border border-primary bg-white text-primary shadow-xs hover:bg-primary-10 hover:border-primary",
        secondary:
          "bg-gray-base-0 text-gray-900 shadow-xs hover:bg-gray-100 border border-gray-200",
        tertiary: "text-primary hover:bg-primary-10 hover:border-primary",
        link: "text-primary underline-offset-4 hover:underline",
        text: "text-primary hover:bg-primary-10 hover:border-primary !h-0 !rounded",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        md: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-9 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-11 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-md px-7 has-[>svg]:px-5",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      loading: {
        true: "relative cursor-wait pointer-events-none opacity-70",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
