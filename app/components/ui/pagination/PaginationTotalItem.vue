<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  page: number;
  pageSize: number;
  totalItems: number;
}>();

const start = computed(() =>
  props.totalItems === 0 ? 0 : (props.page - 1) * props.pageSize + 1
);
const end = computed(() =>
  Math.min(props.totalItems, props.page * props.pageSize)
);
</script>

<template>
  <div :class="cn('inline-flex items-center gap-1 text-xs', props.class)">
    <span class="text-gray-900">{{ start }}</span>
    <span class="text-gray-600">-</span>
    <span class="text-gray-900">{{ end }}</span>
    <span class="text-gray-600">dari</span>
    <span class="text-gray-900">{{ totalItems }}</span>
    <span class="text-gray-600">Item</span>
  </div>
</template>
