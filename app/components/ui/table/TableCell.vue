<script setup lang="ts">
import { cn } from '@/lib/utils'
type Props = { class?: string }
const props = defineProps<Props>()
</script>

<template>
  <td :class="cn('border-b border-gray-200 p-3 align-middle', props.class)"><slot /></td>
</template>