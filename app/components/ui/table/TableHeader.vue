<script setup lang="ts">
import { cn } from "@/lib/utils";
type Props = { class?: string };
const props = defineProps<Props>();
</script>

<template>
  <thead :class="cn('bg-gray-base-0', props.class)">
    <slot />
  </thead>
</template>
