<script setup lang="ts">
import { cn } from '@/lib/utils'
type Props = { class?: string }
const props = defineProps<Props>()
</script>

<template>
  <th :class="cn('text-left font-semibold text-gray-900 border-b border-gray-200 p-3', props.class)"><slot /></th>
</template>