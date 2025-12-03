<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { PaginationPageItem } from ".";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    page: number;
    totalPages: number;
    siblingCount?: number;
    boundaryCount?: number;
  }>(),
  {
    siblingCount: 1,
    boundaryCount: 1,
  }
);

const emit = defineEmits<{ (e: "update:page", value: number): void }>();

function clampPage(p: number) {
  return Math.min(Math.max(1, p), props.totalPages);
}

function setPage(p: number) {
  emit("update:page", clampPage(p));
}

function createItems(): Array<number | "ellipsis"> {
  const total = props.totalPages;
  const current = props.page;
  const siblings = props.siblingCount!;
  const boundaries = props.boundaryCount!;
  const items: Array<number | "ellipsis"> = [];
  if (total <= 0) return items;

  const startPages = Array.from(
    { length: Math.min(boundaries, total) },
    (_, i) => i + 1
  );
  const endPages = Array.from(
    { length: Math.min(boundaries, total) },
    (_, i) => total - i
  ).reverse();

  const left = Math.max(current - siblings, boundaries + 1);
  const right = Math.min(current + siblings, total - boundaries);

  items.push(...startPages);
  if (left > boundaries + 1) items.push("ellipsis");
  for (let p = left; p <= right; p++) items.push(p);
  if (right < total - boundaries) items.push("ellipsis");
  items.push(...endPages.filter((p) => p > right));
  // Deduplicate while preserving order
  return items.filter((v, i, a) => i === 0 || v !== a[i - 1]);
}

const items = computed(createItems);
</script>

<template>
  <div :class="cn('inline-flex items-center gap-3', props.class)">
    <button
      type="button"
      class="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:bg-gray-100 disabled:cursor-not-allowed"
      :disabled="props.page <= 1"
      @click="setPage(props.page - 1)"
    >
      <ChevronLeft class="size-4" />
    </button>

    <div class="inline-flex items-center gap-2">
      <template v-for="(it, idx) in items" :key="idx">
        <PaginationPageItem
          v-if="it !== 'ellipsis'"
          :label="it"
          :active="it === props.page"
          @click="setPage(Number(it))"
        />
        <span v-else class="text-sm text-gray-900">…</span>
      </template>
    </div>

    <button
      type="button"
      class="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:bg-gray-100 disabled:cursor-not-allowed"
      :disabled="props.page >= props.totalPages"
      @click="setPage(props.page + 1)"
    >
      <ChevronRight class="size-4" />
    </button>
  </div>
</template>
