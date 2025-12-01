<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { BadgeVariants } from "."
import { cn } from "@/lib/utils"
import { badgeVariants } from "."

interface Props {
  status?: BadgeVariants["status"]
  size?: BadgeVariants["size"]
  shape?: BadgeVariants["shape"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  status: "default",
  size: "md",
  shape: "rounded",
})
</script>

<template>
  <span :class="cn(badgeVariants({ status: props.status, size: props.size, shape: props.shape }), props.class)">
    <slot name="icon" />
    <slot name="avatar" />
    <slot />
  </span>
</template>