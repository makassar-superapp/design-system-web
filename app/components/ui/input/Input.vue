<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    v-bind="$attrs"
    :data-slot="$attrs['data-slot'] ?? 'input'"
    :class="
      cn(
        'border-gray-200 flex h-9 w-full min-w-0 rounded-lg border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none',
        'file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'placeholder:text-gray-300',
        'selection:bg-primary selection:text-primary-foreground',
        'dark:bg-input/30',
        'focus-visible:border-ring focus-visible:ring-primary-40 focus-visible:ring-1',
        'hover:border-gray-300',
        'active:border-primary',
        'invalid:border-red-500 invalid:text-red-500 invalid:placeholder:text-red-500',
        'aria-invalid:ring-red-500 dark:aria-invalid:ring-red-500 aria-invalid:border-red-500 aria-invalid:placeholder:text-red-500',
        props.class
      )
    "
  />
</template>
