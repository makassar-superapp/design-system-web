<script setup lang="ts">
import type { HTMLAttributes } from "vue";

interface Props {
  online?: boolean;
  size?: 6 | 8 | 10 | 12 | 14 | 16;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  online: true,
  size: 10,
  class: undefined,
});
</script>

<template>
  <span
    class="absolute -bottom-1 right-[calc(10%+1px)] rounded-full border-2 border-background"
    :class="props.class"
    :style="{
      width: `${props.size}px`,
      height: `${props.size}px`,
      transform: 'translate(50%, -50%)',
      backgroundColor: props.online ? 'rgb(34 197 94)' : 'rgb(251 191 36)',
    }"
  >
    <span class="sr-only">{{ props.online ? "Online" : "Away" }}</span>
  </span>
</template>
