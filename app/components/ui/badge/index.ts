import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"

export const badgeVariants = cva(
  "inline-flex items-center gap-2 border font-medium select-none",
  {
    variants: {
      status: {
        default: "border-gray-200 bg-gray-100 text-gray-700",
        processing: "border-blue-600 bg-blue-10 text-blue-700",
        success: "border-green-600 bg-green-10 text-green-700",
        warning: "border-orange-600 bg-orange-10 text-orange-700",
        failed: "border-red-600 bg-red-10 text-red-700",
        brand: "border-primary bg-primary-10 text-primary",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
        lg: "text-base px-4 py-1.5",
      },
      shape: {
        rounded: "rounded-md",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      status: "default",
      size: "md",
      shape: "rounded",
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>