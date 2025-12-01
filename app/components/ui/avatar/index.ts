import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Avatar } from "./Avatar.vue";
export { default as OnlineIndicator } from "./OnlineIndicator.vue";
export { default as VerifiedIndicator } from "./VerifiedIndicator.vue";

export const avatarVariants = cva(
  "inline-flex items-center justify-center overflow-hidden border border-border bg-muted text-muted-foreground select-none",
  {
    variants: {
      size: {
        xs: "size-6 text-[10px]",
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-14 text-lg",
        "2xl": "size-16 text-xl",
      },
      shape: {
        circle: "rounded-full",
        base: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
    },
  }
);

export type AvatarVariants = VariantProps<typeof avatarVariants>;
