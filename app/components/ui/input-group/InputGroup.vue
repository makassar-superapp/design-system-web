<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  ariaInvalid?: boolean;
}>();
</script>

<template>
  <div
    data-slot="input-group"
    role="group"
    :aria-invalid="ariaInvalid"
    :class="
      cn(
        'group/input-group border-gray-200 dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none',
        'h-9 min-w-0 has-[>textarea]:h-auto',

        // Variants based on alignment.
        'has-[>[data-align=inline-start]]:[&>input]:pl-2',
        'has-[>[data-align=inline-end]]:[&>input]:pr-2',
        'has-[>[data-align=block-start]]:h-auto',
        'has-[>[data-align=block-start]]:flex-col',
        'has-[>[data-align=block-start]]:[&>input]:pb-3',
        'has-[>[data-align=block-end]]:h-auto',
        'has-[>[data-align=block-end]]:flex-col',
        'has-[>[data-align=block-end]]:[&>input]:pt-3',

        // Active state.
        'has-[[data-slot=input-group-control]:active]:border-primary!',

        // Focus state.
        'has-[[data-slot=input-group-control]:focus-visible]:border-ring',
        'has-[[data-slot=input-group-control]:focus-visible]:ring-primary-40',
        'has-[[data-slot=input-group-control]:focus-visible]:ring-1',
        'has-[[data-slot=input-group-control]:focus-visible]:ring-offset-1',

        // Error state - check both aria-invalid prop and child elements
        ariaInvalid && 'border-red-500 ring-red-500',
        'has-[[data-slot][aria-invalid=true]]:ring-red-500',
        'has-[[data-slot][aria-invalid=true]]:border-red-500',
        'has-[[data-slot=input-group-control]:invalid]:text-red-500',
        'has-[[data-slot=input-group-control]:invalid]:border-red-500',
        'dark:has-[[data-slot][aria-invalid=true]]:ring-red-500',

        // Hover state.
        'has-[[data-slot=input-group-control]:hover]:border-gray-300',

        // Disabled state.
        'has-[[data-slot=input-group-control]:disabled]:pointer-events-none',
        'has-[[data-slot=input-group-control]:disabled]:cursor-not-allowed',
        'has-[[data-slot=input-group-control]:disabled]:bg-gray-100',
        'has-[[data-slot=input-group-control]:disabled]:opacity-90',

        props.class
      )
    "
  >
    <slot />
  </div>
</template>
