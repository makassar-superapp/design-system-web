<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import type { ButtonVariants } from ".";
import { Primitive } from "reka-ui";
import { cn } from "@/lib/utils";
import { buttonVariants } from ".";
import { LoaderCircle } from "@/components/ui/loader";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  disabled: false,
  loading: false,
});
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
    :class="cn(buttonVariants({ variant, size, loading }), props.class)"
  >
    <span
      :class="cn(loading ? 'opacity-0' : '', 'inline-flex items-center gap-2')"
      ><slot
    /></span>
    <span
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center"
    >
      <LoaderCircle
        :color="variant === 'primary' ? 'white' : 'primary'"
        :size="size === 'sm' ? 'sm' : 'md'"
      />
    </span>
  </Primitive>
</template>
