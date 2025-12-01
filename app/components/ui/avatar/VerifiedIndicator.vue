<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { AvatarVariants } from ".";
import { BadgeCheck } from "lucide-vue-next";

interface Props {
  size?: 12 | 14 | 16 | 18 | 20 | 22;
  avatarSize?: AvatarVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  size: 16,
  avatarSize: "md",
  class: undefined,
});

const offsetPx = (s: AvatarVariants["size"]) =>
  s === "xs" || s === "sm"
    ? 2
    : s === "md" || s === "lg"
    ? 3
    : s === "xl"
    ? 4
    : 5;
</script>

<template>
  <span
    class="absolute"
    :class="props.class"
    :style="{
      bottom: `-${offsetPx(props.avatarSize)}px`,
      right: `-${offsetPx(props.avatarSize)}px`,
    }"
  >
    <span class="sr-only">Verified</span>
    <BadgeCheck
      class="text-background fill-primary"
      :style="{ width: `${props.size}px`, height: `${props.size}px` }"
    />
  </span>
</template>
