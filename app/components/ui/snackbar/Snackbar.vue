<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { SnackbarVariants } from ".";
import { cn } from "@/lib/utils";
import { snackbarVariants } from ".";
import { Text as UiText } from "@/components/ui/text";
import { Info } from "lucide-vue-next";

interface Props {
  variant?: SnackbarVariants["variant"];
  title?: string;
  description?: string;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "white",
  title: "",
  description: "",
});
</script>

<template>
  <div :class="cn(snackbarVariants({ variant: props.variant }), props.class)">
    <div class="inline-flex items-center gap-2 rounded-full p-0.5">
      <slot name="icon">
        <Info
          :class="
            cn(
              props.variant === 'white' ? 'text-blue-700' : 'text-white',
              'size-4'
            )
          "
        />
      </slot>
    </div>
    <div class="flex-1">
      <UiText
        kind="body"
        size="14"
        :color="props.variant === 'white' ? 'primary' : 'white'"
        weight="semibold"
        >{{ props.title }}</UiText
      >
      <UiText
        kind="body"
        size="14"
        :color="props.variant === 'white' ? 'primary' : 'white'"
        >{{ props.description }}</UiText
      >
    </div>
    <div>
      <slot name="action" />
    </div>
  </div>
</template>
