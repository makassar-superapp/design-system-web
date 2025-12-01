<script setup lang="ts">
import { provide, ref, watch } from "vue";
import { cn } from "@/lib/utils";
import { TabsInjectionKey } from "./context";

export type TabsVariant = "line" | "segmented";

type Props = {
  modelValue?: string;
  defaultValue?: string;
  variant?: TabsVariant;
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  variant: "line",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const active = ref<string>(props.modelValue ?? props.defaultValue ?? "");

watch(
  () => props.modelValue,
  (v) => {
    if (typeof v === "string") active.value = v;
  }
);

function setActive(v: string) {
  active.value = v;
  emit("update:modelValue", v);
}

provide(TabsInjectionKey, {
  active,
  setActive,
  variant: props.variant,
});
</script>

<template>
  <div :class="cn('w-full space-y-3', props.class)">
    <slot />
  </div>
</template>
