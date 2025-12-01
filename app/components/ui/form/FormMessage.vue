<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { ErrorMessage } from "vee-validate";
import { toValue } from "vue";
import { cn } from "@/lib/utils";
import { useFormField } from "./useFormField";
import { CircleAlert } from "lucide-vue-next";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { name, formMessageId } = useFormField();
</script>

<template>
  <ErrorMessage
    :id="formMessageId"
    data-slot="form-message"
    :name="toValue(name)"
    v-slot="{ message }"
  >
    <p
      v-if="message"
      :class="cn('text-red-500 text-sm flex items-center gap-1.5', props.class)"
    >
      <CircleAlert
        class="size-4 flex-shrink-0 fill-red-500 stroke-white"
        :stroke-width="2"
      />
      <span>{{ message }}</span>
    </p>
  </ErrorMessage>
</template>
