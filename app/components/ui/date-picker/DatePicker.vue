<script setup lang="ts">
import type { DateValue } from "@internationalized/date";
import type { HTMLAttributes } from "vue";
import {
  DateFormatter,
  getLocalTimeZone,
  today,
} from "@internationalized/date";

import { CalendarIcon } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
  modelValue?: DateValue;
  placeholder?: string;
  hasError?: boolean;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Pick a date",
  hasError: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: DateValue | undefined): void;
}>();

const defaultPlaceholder = today(getLocalTimeZone());

const df = new DateFormatter("en-US", {
  dateStyle: "long",
});

const handleUpdate = (value: DateValue | undefined) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="
          cn(
            'w-full !flex !justify-between text-left font-normal hover:!border-gray-300 hover:!bg-white [&>span]:w-full [&>span]:flex [&>span]:justify-between',
            !modelValue && 'text-muted-foreground',
            hasError && 'border-red-500 hover:!border-red-500',
            props.class
          )
        "
      >
        {{
          modelValue
            ? df.format(modelValue.toDate(getLocalTimeZone()))
            : placeholder
        }}
        <CalendarIcon class="size-4 shrink-0" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0" align="start">
      <Calendar
        :model-value="modelValue"
        :default-placeholder="defaultPlaceholder"
        layout="month-and-year"
        initial-focus
        @update:model-value="handleUpdate"
      />
    </PopoverContent>
  </Popover>
</template>
