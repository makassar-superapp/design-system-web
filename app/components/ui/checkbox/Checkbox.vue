<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { Check } from "lucide-vue-next";
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
  CheckboxRootProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<CheckboxRootEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <CheckboxRoot
    v-slot="slotProps"
    data-slot="checkbox"
    v-bind="forwarded"
    :class="
      cn(
        'peer border-gray-200 size-4 shrink-0 rounded-sm border shadow-xs transition-shadow outline-none',
        'data-[state=checked]:bg-primary',
        'data-[state=checked]:text-primary-foreground',
        'data-[state=checked]:border-primary',

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

        // dark mode
        'dark:aria-invalid:ring-destructive/40',

        // disabled state
        'disabled:cursor-not-allowed',
        'disabled:pointer-events-none',
        'disabled:bg-gray-200',
        'disabled:opacity-90',
        props.class
      )
    "
  >
    <CheckboxIndicator
      data-slot="checkbox-indicator"
      class="grid place-content-center text-current transition-none"
    >
      <slot v-bind="slotProps">
        <Check class="size-3.5" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
