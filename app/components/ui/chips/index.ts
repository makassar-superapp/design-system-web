import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Chip } from "./Chip.vue"
export { default as ChipClose } from "./ChipClose.vue"
export { default as ChipCount } from "./ChipCount.vue"

export const chipVariants = cva(
  "inline-flex items-center gap-2 border border-gray-200 bg-gray-100 text-gray-700 rounded-md",
  {
    variants: {
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-2.5 py-0.5",
        lg: "text-sm px-3 py-1",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

export const chipCloseVariants = cva(
  "inline-flex items-center justify-center rounded hover:bg-gray-200",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
)

export const chipCountVariants = cva(
  "inline-flex items-center justify-center rounded bg-gray-500/10 text-gray-500",
  {
    variants: {
      size: {
        sm: "min-w-[16px] h-4 text-xs px-1",
        md: "min-w-[20px] h-5 text-sm px-1",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

export type ChipVariants = VariantProps<typeof chipVariants>
export type ChipCloseVariants = VariantProps<typeof chipCloseVariants>
export type ChipCountVariants = VariantProps<typeof chipCountVariants>