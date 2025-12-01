import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Snackbar } from "./Snackbar.vue";

export const snackbarVariants = cva(
  "flex items-center gap-3 w-full rounded-lg px-4 py-2",
  {
    variants: {
      variant: {
        white: "bg-gray-100 text-foreground",
        black: "bg-gray-900 text-white",
        info: "bg-blue-500 text-white", //#4485F5
        warning: "bg-orange-500 text-white", //#E88700
        destructive: "bg-red-500 text-white", //#C1360F
        success: "bg-green-500 text-white",
      },
    },
    defaultVariants: {
      variant: "white",
    },
  }
);

export type SnackbarVariants = VariantProps<typeof snackbarVariants>;
