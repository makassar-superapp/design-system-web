<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChipCount } from '@/components/ui/chips'
import { X, Plus } from 'lucide-vue-next'

type Props = {
  selected: number
  class?: string
}
const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'clear'): void }>()
</script>

<template>
  <div :class="cn('flex items-center gap-3 border border-gray-200 rounded-lg bg-gray-100 px-3 py-2', props.class)">
    <div class="flex items-center gap-2">
      <ChipCount size="md" :value="props.selected" />
      <span class="text-sm">Terpilih</span>
    </div>
    <div class="w-px h-6 bg-gray-300" />
    <div class="flex flex-wrap items-center gap-2">
      <Button variant="secondary"><Plus class="size-4" /> Button</Button>
      <Button variant="secondary"><Plus class="size-4" /> Button</Button>
    </div>
    <div class="w-px h-6 bg-gray-300" />
    <button type="button" class="p-1 rounded" @click="emit('clear')">
      <X class="size-4 text-gray-500" />
    </button>
  </div>
</template>