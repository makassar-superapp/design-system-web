<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Filter } from "@/components/ui/filter";
import { Chip } from "@/components/ui/chips";
import { Search } from "lucide-vue-next";

type FilterItem = { id: string | number; label: string };

const props = defineProps<{
  class?: HTMLAttributes["class"];
  modelValue?: string;
  placeholder?: string;
  filters?: FilterItem[];
  emptyLabel?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "openFilter"): void;
  (e: "removeFilter", id: string | number): void;
}>();
</script>

<template>
  <div :class="cn('flex items-center gap-3', props.class)">
    <div class="w-[250px]">
      <InputGroup>
        <InputGroupAddon>
          <Search class="size-4 text-gray-500" />
        </InputGroupAddon>
        <InputGroupInput
          :model-value="props.modelValue"
          :placeholder="props.placeholder ?? 'Cari'"
          @update:model-value="(v) => emit('update:modelValue', String(v))"
        />
      </InputGroup>
    </div>

    <Filter @open="emit('openFilter')" />

    <div
      class="inline-flex items-center gap-2 rounded-md bg-gray-100 px-2.5 py-1"
    >
      <template v-if="props.filters && props.filters.length">
        <Chip
          v-for="f in props.filters"
          :key="f.id"
          closable
          @close="emit('removeFilter', f.id)"
        >
          {{ f.label }}
        </Chip>
      </template>
      <template v-else>
        <span class="text-sm text-gray-400">{{
          props.emptyLabel ?? "Belum ada filter"
        }}</span>
      </template>
    </div>

    <div class="ml-auto">
      <slot name="actions" />
    </div>
  </div>
</template>
