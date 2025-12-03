<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<{
    label: string | number;
    active?: boolean;
    disabled?: boolean;
    class?: HTMLAttributes["class"];
  }>(),
  {
    active: false,
    disabled: false,
  }
);

const emit = defineEmits<{ (e: "click"): void }>();
</script>

<template>
  <button
    type="button"
    :disabled="props.disabled"
    :class="
      cn(
        'inline-flex items-center justify-center h-8 w-8 rounded-md transition-colors text-sm',
        props.active
          ? 'bg-gray-100 border-gray-200 text-primary font-semibold'
          : 'bg-transparent border-gray-200 text-gray-900 hover:bg-gray-100 hover:text-primary hover:font-semibold',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        props.class
      )
    "
    @click="emit('click')"
  >
    {{ props.label }}
  </button>
</template>
