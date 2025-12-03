<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "@/lib/utils";
import {
  PaginationItemPerPage,
  PaginationTotalItem,
  PaginationPageController,
} from ".";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    page: number;
    pageSize: number;
    totalItems: number;
    pageSizeOptions?: number[];
  }>(),
  {
    pageSizeOptions: () => [10, 20, 50, 100],
  }
);

const emit = defineEmits<{
  "update:page": [value: number];
  "update:pageSize": [value: number];
}>();

const totalPages = computed(() => {
  return Math.max(1, Math.ceil(props.totalItems / props.pageSize));
});
function handleUpdatePageSize(v: number) {
  emit("update:pageSize", v);
}
function handleUpdatePage(p: number) {
  emit("update:page", p);
}
</script>

<template>
  <div :class="cn('flex items-center justify-between w-full', props.class)">
    <PaginationItemPerPage
      :page-size="props.pageSize"
      :options="props.pageSizeOptions"
      @update:page-size="handleUpdatePageSize"
    />
    <div class="flex items-center gap-4">
      <PaginationTotalItem
        :page="props.page"
        :page-size="props.pageSize"
        :total-items="props.totalItems"
      />
      <PaginationPageController
        :page="props.page"
        :total-pages="totalPages"
        @update:page="handleUpdatePage"
      />
    </div>
  </div>
</template>
