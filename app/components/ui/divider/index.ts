import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Divider } from "./Divider.vue";

export const dividerVariants = cva(
  "w-full flex items-center gap-2 text-gray-400",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type DividerVariants = VariantProps<typeof dividerVariants>;
