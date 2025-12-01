<script setup lang="ts">
import type { SelectTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronDown } from "lucide-vue-next";
import { SelectIcon, SelectTrigger, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<
    SelectTriggerProps & {
      class?: HTMLAttributes["class"];
      size?: "sm" | "default";
    }
  >(),
  { size: "default" }
);

const delegatedProps = reactiveOmit(props, "class", "size");
const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectTrigger
    data-slot="select-trigger"
    :data-size="size"
    v-bind="forwardedProps"
    :class="
      cn(
        'border-gray-200 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none',

        // focus state
        'focus-visible:border-ring',
        'focus-visible:ring-primary-40',
        'focus-visible:ring-1',
        'focus-visible:ring-offset-1',

        // error state
        'aria-invalid:ring-red-500',
        'aria-invalid:border-red-500',
        'aria-invalid:text-red-500',
        'dark:aria-invalid:ring-red-500',

        // hover state
        'hover:border-gray-300',

        // disabled state
        'disabled:cursor-not-allowed',
        'disabled:pointer-events-none',
        'disabled:bg-gray-100',
        'disabled:opacity-90',

        // dark mode
        'dark:bg-input/30',
        'dark:hover:bg-input/50',

        'data-[size=default]:h-9',
        'data-[size=sm]:h-8',
        'data-[placeholder]:text-muted-foreground',
        '*:data-[slot=select-value]:line-clamp-1',
        '*:data-[slot=select-value]:flex',
        '*:data-[slot=select-value]:items-center',
        '*:data-[slot=select-value]:gap-2',
        '[&_svg]:pointer-events-none',
        '[&_svg]:shrink-0',
        '[&_svg:not([class*=\'size-\'])]:size-4',
        '[&_svg:not([class*=\'text-\'])]:text-muted-foreground',
        props.class
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="size-4 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
