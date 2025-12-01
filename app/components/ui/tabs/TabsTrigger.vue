<script setup lang="ts">
import { inject, computed } from "vue";
import { cn } from "@/lib/utils";
import { TabsInjectionKey } from "./context";

type Props = {
  value: string;
  class?: string;
};
const props = defineProps<Props>();
const ctx = inject<any>(TabsInjectionKey);

const isActive = computed(() => ctx?.active?.value === props.value);

function onClick() {
  ctx?.setActive?.(props.value);
}

const classes = computed(() => {
  if (ctx?.variant === "segmented") {
    return cn(
      "group flex-1 text-center rounded-lg px-3 py-2 text-sm cursor-pointer",
      isActive.value
        ? "bg-white text-red-700 font-semibold"
        : "text-gray-900 hover:bg-primary-5 hover:rounded-lg"
    );
  }
  return cn(
    "group px-4 py-2 text-sm -mb-px border-b cursor-pointer",
    isActive.value
      ? "border-red-700 text-red-700 font-semibold"
      : "border-transparent text-gray-900 hover:bg-primary-5 hover:rounded-lg"
  );
});
</script>

<template>
  <button
    role="tab"
    :aria-selected="isActive"
    :class="cn(classes, props.class)"
    type="button"
    @click="onClick"
  >
    <slot />
  </button>
</template>
