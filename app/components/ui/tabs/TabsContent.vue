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

const show = computed(() => ctx?.active?.value === props.value);
</script>

<template>
  <div v-show="show" role="tabpanel" :class="cn('mt-2', props.class)">
    <slot />
  </div>
</template>
