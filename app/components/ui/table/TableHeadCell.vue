<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronUp, ChevronDown } from 'lucide-vue-next'

type SortDirection = 'asc' | 'desc'

const props = defineProps<{
  class?: HTMLAttributes['class']
  sortable?: boolean
  sortKey?: string | number
  sortDirection?: SortDirection | null
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'sort', payload: { key?: string | number; direction: SortDirection }): void
}>()

function handleSort() {
  if (!props.sortable || props.disabled) return
  const next: SortDirection = props.sortDirection === 'asc' ? 'desc' : 'asc'
  emit('sort', { key: props.sortKey, direction: next })
}
</script>

<template>
  <th :class="cn('text-left font-semibold text-gray-900 border-b border-gray-200 p-3', props.class)">
    <div :class="cn(props.sortable ? 'flex items-center gap-1' : '')">
      <button
        v-if="props.sortable"
        type="button"
        :disabled="props.disabled"
        class="inline-flex items-center gap-1 disabled:opacity-50"
        @click="handleSort"
      >
        <span><slot /></span>
        <span class="inline-flex flex-col items-center justify-center ml-1">
          <ChevronUp :class="cn('size-3.5', props.sortDirection === 'asc' ? 'text-gray-900' : 'text-gray-400')" />
          <ChevronDown :class="cn('size-3.5 -mt-0.5', props.sortDirection === 'desc' ? 'text-gray-900' : 'text-gray-400')" />
        </span>
      </button>
      <template v-else>
        <slot />
      </template>
    </div>
  </th>
</template>
