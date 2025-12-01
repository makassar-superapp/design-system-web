import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Alert } from "./Alert.vue";

export const alertVariants = cva(
  "flex items-center gap-4 w-full rounded-lg px-3 py-2",
  {
    variants: {
      variant: {
        neutral: "border border-gray-200 bg-white text-foreground",
        subNeutral: "border-0 bg-gray-100 text-foreground",
        info: "border border-blue-600 bg-blue-10 text-blue-700", //bg-[#F0F6FF]
        warning: "border border-orange-600 bg-orange-10 text-orange-700", //bg-[#FFF9F0]
        success: "border border-green-600 bg-green-10 text-green-700", //bg-[#F5FFF4]
        error: "border border-red-600 bg-red-10 text-red-700", //bg-[#FFF5F2]
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;
