<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { ChipVariants } from "."
import { chipVariants } from "."
import { cn } from "@/lib/utils"
import ChipClose from "./ChipClose.vue"

interface Props {
  size?: ChipVariants["size"]
  closable?: boolean
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  closable: false,
})

const emit = defineEmits<{ (e: "close"): void }>()
</script>

<template>
  <span :class="cn(chipVariants({ size: props.size }), props.class)">
    <slot />
    <ChipClose v-if="props.closable" :size="props.size === 'sm' ? 'sm' : 'md'" @click="emit('close')" />
  </span>
</template>