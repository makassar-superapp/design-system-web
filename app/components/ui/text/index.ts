import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Text } from "./Text.vue";

export const textVariants = cva("", {
  variants: {
    kind: {
      "big-title": "font-monteserrat",
      title: "font-opensans",
      body: "font-opensans",
      notes: "font-opensans",
    },
    size: {
      "72": "text-[72px] leading-[90px] tracking-[-2px]",
      "60": "text-[60px] leading-[72px] tracking-[-2px]",
      "48": "text-[48px] leading-[60px] tracking-[-2px]",
      "36": "text-[36px] leading-[44px] tracking-[-2px]",
      "30": "text-[30px] leading-[38px]",
      "24": "text-[24px] leading-[38px]",
      "22": "text-[22px] leading-[30px]",
      "20": "text-[20px] leading-[30px]",
      "18": "text-[18px] leading-[28px]",
      "16": "text-[16px] leading-[24px]",
      "14": "text-[14px] leading-[20px]",
      "12": "text-[12px] leading-[18px]",
      "10": "text-[10px] leading-[16px]",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      primary: "text-foreground",
      secondary: "text-muted-foreground",
      Tertiary: "text-gray-400",
      brand: "text-primary",
      destructive: "text-red-500",
      success: "text-green-600",
      warning: "text-orange-500",
      error: "text-red-500",
      white: "text-white",
    },
  },
  defaultVariants: {
    kind: "body",
    size: "14",
    weight: "regular",
    color: "primary",
  },
});

export type TextVariants = VariantProps<typeof textVariants>;
