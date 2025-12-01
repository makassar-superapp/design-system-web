<script setup lang="ts">
import { cn } from '@/lib/utils'
type Props = { class?: string }
const props = defineProps<Props>()
</script>

<template>
  <tr :class="cn('hover:bg-gray-50', props.class)"><slot /></tr>
</template>