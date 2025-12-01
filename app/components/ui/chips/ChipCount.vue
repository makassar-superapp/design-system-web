<script setup lang="ts">
import type { ChipCountVariants } from "."
import { chipCountVariants } from "."
import { cn } from "@/lib/utils"

interface Props {
  value: number | string
  size?: ChipCountVariants["size"]
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
})
</script>

<template>
  <span :class="cn(chipCountVariants({ size: props.size }))">{{ props.value }}</span>
</template>