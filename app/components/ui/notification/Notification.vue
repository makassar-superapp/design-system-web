<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { NotificationVariants } from ".";
import { cn } from "@/lib/utils";
import { notificationVariants } from ".";
import { Text as UiText } from "@/components/ui/text";
import {
  X,
  CheckCircle2,
  Info,
  AlertTriangle,
  AlertCircle,
} from "lucide-vue-next";

interface Props {
  variant?: NotificationVariants["variant"];
  title?: string;
  description?: string;
  closable?: boolean;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "success",
  title: "",
  description: "",
  closable: false,
});

const emit = defineEmits<{ (e: "close"): void }>();
</script>

<template>
  <div
    :class="cn(notificationVariants({ variant: props.variant }), props.class)"
  >
    <div class="inline-flex items-center gap-2">
      <slot name="icon">
        <CheckCircle2
          v-if="props.variant === 'success'"
          class="size-4 text-green-600"
        />
        <Info
          v-else-if="props.variant === 'info'"
          class="size-4 text-blue-600"
        />
        <AlertTriangle
          v-else-if="props.variant === 'warning'"
          class="size-4 text-orange-600"
        />
        <AlertCircle v-else class="size-4 text-red-600" />
      </slot>
    </div>
    <div class="flex-1">
      <UiText kind="body" size="14" weight="semibold">{{ props.title }}</UiText>
      <UiText kind="body" size="14">{{ props.description }}</UiText>
      <slot name="action" />
    </div>
    <button
      v-if="props.closable"
      type="button"
      aria-label="Close"
      class="inline-flex items-center justify-center rounded-md p-1 text-muted-foreground hover:bg-gray-100"
      @click="emit('close')"
    >
      <slot name="close-icon">
        <X class="size-4" />
      </slot>
    </button>
  </div>
</template>
