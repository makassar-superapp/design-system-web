<script lang="ts" setup>
import type { LabelProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { useFormField } from "./useFormField";
import { Lock } from "lucide-vue-next";

const props = defineProps<
  LabelProps & {
    class?: HTMLAttributes["class"];
    required?: boolean;
    disabled?: boolean;
  }
>();

const { error, formItemId } = useFormField();
</script>

<template>
  <Label
    data-slot="form-label"
    :data-error="!!error"
    :class="
      cn('flex items-center gap-1.5', disabled && 'text-gray-400', props.class)
    "
    :for="formItemId"
  >
    <span class="flex items-center">
      <slot />
      <span v-if="required && !disabled" class="ml-0.5">*</span>
    </span>
    <Lock v-if="disabled" class="size-4" />
  </Label>
</template>
