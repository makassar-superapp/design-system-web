import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as LoaderCircle } from "./Circle.vue";

export const loaderCircleVariants = cva("relative inline-block", {
  variants: {
    size: {
      sm: "size-5",
      md: "size-6",
    },
    color: {
      primary: "text-primary",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export type LoaderCircleVariants = VariantProps<typeof loaderCircleVariants>;
