<script setup lang="ts">
import type { SwitchRootEmits, SwitchRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { SwitchRoot, SwitchThumb, useForwardPropsEmits } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
  SwitchRootProps & { class?: HTMLAttributes["class"] }
>();

const emits = defineEmits<SwitchRootEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SwitchRoot
    v-slot="slotProps"
    data-slot="switch"
    v-bind="forwarded"
    :class="
      cn(
        'peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none',
        'data-[state=checked]:bg-primary',
        'data-[state=unchecked]:bg-gray-200',

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
        'data-[[state=checked]:hover]:border-secondary',

        // disabled state
        'disabled:cursor-not-allowed',
        'disabled:opacity-50',

        // dark mode
        'dark:data-[state=unchecked]:bg-input/80',
        props.class
      )
    "
  >
    <SwitchThumb
      data-slot="switch-thumb"
      :class="
        cn(
          'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
        )
      "
    >
      <slot name="thumb" v-bind="slotProps" />
    </SwitchThumb>
  </SwitchRoot>
</template>
