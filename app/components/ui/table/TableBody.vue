<script setup lang="ts">
import { cn } from '@/lib/utils'
type Props = { class?: string }
const props = defineProps<Props>()
</script>

<template>
  <tbody :class="cn('', props.class)"><slot /></tbody>
</template>