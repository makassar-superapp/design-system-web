<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { TextVariants } from ".";
import { cn } from "@/lib/utils";
import { textVariants } from ".";

interface Props {
  as?: string;
  kind?: TextVariants["kind"];
  size?: TextVariants["size"];
  weight?: TextVariants["weight"];
  color?: TextVariants["color"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  as: "p",
  kind: "body",
  size: "14",
  weight: "regular",
  color: "primary",
});
</script>

<template>
  <component
    :is="props.as"
    :class="
      cn(
        textVariants({
          kind: props.kind,
          size: props.size,
          weight: props.weight,
          color: props.color,
        }),
        props.class
      )
    "
  >
    <slot />
  </component>
</template>
