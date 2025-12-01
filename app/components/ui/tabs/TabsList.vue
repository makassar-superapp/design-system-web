<script setup lang="ts">
import { inject, computed } from "vue";
import { cn } from "@/lib/utils";
import { TabsInjectionKey } from "./context";

type Props = {
  class?: string;
};
const props = defineProps<Props>();

const ctx = inject<any>(TabsInjectionKey);

const base = computed(() => {
  if (ctx?.variant === "segmented") {
    return "flex items-center gap-2 rounded-xl bg-gray-100 p-1";
  }
  return "flex items-center gap-6 border-b border-gray-300";
});
</script>

<template>
  <div role="tablist" :class="cn(base, props.class)">
    <slot />
  </div>
</template>
