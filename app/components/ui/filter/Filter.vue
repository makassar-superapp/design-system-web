<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Filter as FilterIcon, ChevronRight } from 'lucide-vue-next'

const props = defineProps<{ class?: HTMLAttributes['class']; label?: string }>()
const emit = defineEmits<{ (e: 'open'): void }>()
</script>

<template>
  <Button
    variant="secondary"
    size="sm"
    :class="cn('rounded-lg', props.class)"
    @click="emit('open')"
  >
    <FilterIcon class="size-4" />
    {{ props.label ?? 'Filter' }}
    <ChevronRight class="size-4" />
  </Button>
</template>

