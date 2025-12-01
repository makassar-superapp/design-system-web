<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { DividerVariants } from "."
import { cn } from "@/lib/utils"
import { dividerVariants } from "."

interface Props {
  position?: "none" | "left" | "center" | "right"
  size?: DividerVariants["size"]
  label?: string
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  position: "center",
  size: "md",
})
</script>

<template>
  <div :class="cn(dividerVariants({ size }), props.class)">
    <template v-if="props.position === 'none'">
      <div class="w-full border-t border-border" />
    </template>

    <template v-else-if="props.position === 'left'">
      <span class="px-2"><slot>{{ props.label }}</slot></span>
      <div class="flex-1 border-t border-border" />
    </template>

    <template v-else-if="props.position === 'right'">
      <div class="flex-1 border-t border-border" />
      <span class="px-2"><slot>{{ props.label }}</slot></span>
    </template>

    <template v-else>
      <div class="flex-1 border-t border-border" />
      <span class="px-2"><slot>{{ props.label }}</slot></span>
      <div class="flex-1 border-t border-border" />
    </template>
  </div>
</template>