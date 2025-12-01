<script setup lang="ts">
import type { RadioGroupItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { CircleIcon } from "lucide-vue-next";
import { RadioGroupIndicator, RadioGroupItem, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
  RadioGroupItemProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RadioGroupItem
    data-slot="radio-group-item"
    v-bind="forwardedProps"
    :class="
      cn(
        'peer border-gray-200 text-primary aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none',
        'data-[state=checked]:bg-primary',
        'data-[state=checked]:border-primary',
        // 'data-[state=checked]:text-white',

        // focus state
        'focus-visible:border-ring',
        'focus-visible:ring-primary-40',
        'focus-visible:ring-1',
        'focus-visible:ring-offset-1',

        // error state
        'aria-invalid:ring-red-500',
        'aria-invalid:border-red-500',
        'aria-invalid:text-red-500',

        // hover state
        'hover:border-gray-300',
        'data-[[state=checked]:hover]:bg-secondary',

        // disabled state
        'disabled:cursor-not-allowed',
        'disabled:pointer-events-none',
        'disabled:bg-gray-200',
        'disabled:opacity-90',

        // dark mode
        'dark:aria-invalid:ring-destructive/40',
        'dark:bg-input/30',
        props.class
      )
    "
  >
    <RadioGroupIndicator
      data-slot="radio-group-indicator"
      class="relative flex items-center justify-center"
    >
      <slot>
        <CircleIcon
          class="absolute top-1/2 left-1/2 size-1.75 -translate-x-1/2 -translate-y-1/2 fill-white"
        />
      </slot>
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
