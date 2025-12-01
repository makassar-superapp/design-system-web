<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { LoaderCircleVariants } from "."
import { loaderCircleVariants } from "."
import { cn } from "@/lib/utils"

interface Props {
  size?: LoaderCircleVariants["size"]
  color?: LoaderCircleVariants["color"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  color: "brand",
})
</script>

<template>
  <span :class="cn(loaderCircleVariants({ size: props.size, color: props.color }), props.class)" role="status" aria-live="polite">
    <span class="block w-full h-full rounded-full border-2 border-current opacity-30" />
    <span class="absolute inset-0 rounded-full border-2 border-r-transparent border-current animate-spin" />
  </span>
</template>