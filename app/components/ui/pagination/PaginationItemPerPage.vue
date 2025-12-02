<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  pageSize: number
  options?: number[]
}>(), {
  options: () => [10, 20, 50, 100],
})

const emit = defineEmits<{ (e: 'update:pageSize', value: number): void }>()
</script>

<template>
  <div :class="cn('inline-flex items-center gap-2', props.class)">
    <span class="text-xs text-gray-600">Tampilkan</span>
    <NativeSelect :model-value="String(props.pageSize)" @update:modelValue="(v) => emit('update:pageSize', Number(v))">
      <NativeSelectOption v-for="opt in props.options" :key="opt" :value="String(opt)">{{ opt }}</NativeSelectOption>
    </NativeSelect>
    <span class="text-xs text-gray-600">item</span>
  </div>
</template>
