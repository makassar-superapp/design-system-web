import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Notification } from "./Notification.vue";

export const notificationVariants = cva(
  "flex items-start gap-4 w-full rounded-lg border bg-white px-4 py-3 shadow-md",
  {
    variants: {
      variant: {
        success: "border-gray-200",
        info: "border-gray-200",
        warning: "border-gray-200",
        error: "border-gray-200",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

export type NotificationVariants = VariantProps<typeof notificationVariants>;
