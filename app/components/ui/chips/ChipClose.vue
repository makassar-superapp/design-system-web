<script setup lang="ts">
import type { ChipCloseVariants } from "."
import { chipCloseVariants } from "."
import { cn } from "@/lib/utils"
import { X } from "lucide-vue-next"

interface Props {
  size?: ChipCloseVariants["size"]
}

const props = withDefaults(defineProps<Props>(), {
  size: "sm",
})
</script>

<template>
  <button type="button" :class="cn(chipCloseVariants({ size: props.size }))">
    <X :class="props.size === 'sm' ? 'size-2.5 text-gray-500' : 'size-3 text-gray-500'" />
  </button>
</template>