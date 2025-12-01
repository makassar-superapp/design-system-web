<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { AlertVariants } from ".";
import { cn } from "@/lib/utils";
import { alertVariants } from ".";
import { Text as UiText } from "@/components/ui/text";
import { X, Layers, Info, AlertTriangle, CheckCircle2 } from "lucide-vue-next";

interface Props {
  variant?: AlertVariants["variant"];
  title?: string;
  description?: string;
  closable?: boolean;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "neutral",
  title: "",
  description: "",
  closable: false,
});

const emit = defineEmits<{ (e: "close"): void }>();
</script>

<template>
  <div :class="cn(alertVariants({ variant: props.variant }), props.class)">
    <div class="inline-flex items-center gap-2 rounded-full p-0.5">
      <slot name="icon">
        <!-- ICONS BUTUH PENYESUAIAN -->
        <Layers
          v-if="props.variant === 'neutral' || props.variant === 'subNeutral'"
          class="size-4 text-gray-700"
        />
        <Info
          v-else-if="props.variant === 'info'"
          class="size-4 text-blue-700"
        />
        <AlertTriangle
          v-else-if="props.variant === 'warning'"
          class="size-4 text-orange-700"
        />
        <CheckCircle2
          v-else-if="props.variant === 'success'"
          class="size-4 text-green-700"
        />
        <Info v-else class="size-4 text-red-700" />
      </slot>
    </div>

    <div class="flex-1">
      <UiText kind="body" size="14" weight="semibold">{{ props.title }}</UiText>
      <UiText kind="body" size="14">{{ props.description }}</UiText>
    </div>

    <div>
      <slot name="action" />
    </div>

    <button
      v-if="props.closable"
      type="button"
      aria-label="Close"
      class="inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-100"
      @click="emit('close')"
    >
      <slot name="close-icon">
        <X class="size-4" />
      </slot>
    </button>
  </div>
</template>
