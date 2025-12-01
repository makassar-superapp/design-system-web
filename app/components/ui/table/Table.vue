<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

type Props = {
  class?: HTMLAttributes['class']
}
const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('w-full overflow-x-auto', props.class)">
    <table class="w-full text-sm border-separate border-spacing-0">
      <slot />
    </table>
  </div>
</template>