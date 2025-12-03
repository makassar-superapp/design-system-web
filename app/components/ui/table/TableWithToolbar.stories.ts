import type { Meta, StoryObj } from "@storybook/vue3";
import Table from "./Table.vue";
import TableHeader from "./TableHeader.vue";
import TableBody from "./TableBody.vue";
import TableRow from "./TableRow.vue";
import TableHeadCell from "./TableHeadCell.vue";
import TableCell from "./TableCell.vue";
import TableToolbar from "@/components/ui/table-toolbar/TableToolbar.vue";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Table> = {
  title: "UI/Table/WithToolbar",
  component: Table,
  tags: ["autodocs"],
  parameters: { actions: { disable: true }, controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Table>;

const rows = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: "Cell Content",
  category: "Cell Content",
  date: "12 Nov 2025",
  time: "08:00 WITA",
}));

export const Basic: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup lang="ts">
import { Table, TableHeader, TableBody, TableRow, TableHeadCell, TableCell } from '@/components/ui/table'
import { TableToolbar } from '@/components/ui/table-toolbar'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

const rows = [
  { id: 1, name: 'Cell Content', category: 'Cell Content', date: '12 Nov 2025', time: '08:00 WITA' },
  { id: 2, name: 'Cell Content', category: 'Cell Content', date: '12 Nov 2025', time: '08:00 WITA' },
  // ... more rows
]

const filters = []
</script>

<template>
  <div class="space-y-4">
    <TableToolbar :filters="filters">
      <template #actions>
        <Button variant="secondary">+ Button</Button>
      </template>
    </TableToolbar>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHeadCell class="w-12"><Checkbox /></TableHeadCell>
          <TableHeadCell>Header</TableHeadCell>
          <TableHeadCell>Kategori</TableHeadCell>
          <TableHeadCell>Tanggal</TableHeadCell>
          <TableHeadCell>Kategori</TableHeadCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="r in rows" :key="r.id">
          <TableCell><Checkbox /></TableCell>
          <TableCell>{{ r.name }}</TableCell>
          <TableCell>{{ r.category }}</TableCell>
          <TableCell>{{ r.date }}<div class="text-gray-400">{{ r.time }}</div></TableCell>
          <TableCell>{{ r.category }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>`,
      },
    },
  },
  render: () => ({
    components: {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHeadCell,
      TableCell,
      TableToolbar,
      Checkbox,
      Button,
    },
    setup() {
      const filters = [] as { id: number; label: string }[];
      return { rows, filters };
    },
    template: `
      <div class="space-y-4">
        <TableToolbar :filters="filters">
          <template #actions>
            <Button variant="secondary">+ Button</Button>
          </template>
        </TableToolbar>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeadCell class="w-12"><Checkbox /></TableHeadCell>
              <TableHeadCell>Header</TableHeadCell>
              <TableHeadCell>Kategori</TableHeadCell>
              <TableHeadCell>Tanggal</TableHeadCell>
              <TableHeadCell>Kategori</TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="r in rows" :key="r.id">
              <TableCell><Checkbox /></TableCell>
              <TableCell>{{ r.name }}</TableCell>
              <TableCell>{{ r.category }}</TableCell>
              <TableCell>{{ r.date }}<div class="text-gray-400">{{ r.time }}</div></TableCell>
              <TableCell>{{ r.category }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `,
  }),
};

export const WithFilters: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup lang="ts">
import { Table, TableHeader, TableBody, TableRow, TableHeadCell, TableCell } from '@/components/ui/table'
import { TableToolbar } from '@/components/ui/table-toolbar'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

const rows = [
  { id: 1, name: 'Cell Content', category: 'Cell Content', date: '12 Nov 2025', time: '08:00 WITA' },
  { id: 2, name: 'Cell Content', category: 'Cell Content', date: '12 Nov 2025', time: '08:00 WITA' },
  // ... more rows
]

const filters = [
  { id: 1, label: 'Kategori: Wisata' },
  { id: 2, label: 'Tanggal: 12 Nov 2025' },
]
</script>

<template>
  <div class="space-y-4">
    <TableToolbar :filters="filters">
      <template #actions>
        <Button variant="secondary">+ Button</Button>
      </template>
    </TableToolbar>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHeadCell class="w-12"><Checkbox /></TableHeadCell>
          <TableHeadCell>Header</TableHeadCell>
          <TableHeadCell>Kategori</TableHeadCell>
          <TableHeadCell>Tanggal</TableHeadCell>
          <TableHeadCell>Kategori</TableHeadCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="r in rows" :key="r.id">
          <TableCell><Checkbox /></TableCell>
          <TableCell>{{ r.name }}</TableCell>
          <TableCell>{{ r.category }}</TableCell>
          <TableCell>{{ r.date }}<div class="text-gray-400">{{ r.time }}</div></TableCell>
          <TableCell>{{ r.category }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>`,
      },
    },
  },
  render: () => ({
    components: {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHeadCell,
      TableCell,
      TableToolbar,
      Checkbox,
      Button,
    },
    setup() {
      const filters = [
        { id: 1, label: "Kategori: Wisata" },
        { id: 2, label: "Tanggal: 12 Nov 2025" },
      ];
      return { rows, filters };
    },
    template: `
      <div class="space-y-4">
        <TableToolbar :filters="filters">
          <template #actions>
            <Button variant="secondary">+ Button</Button>
          </template>
        </TableToolbar>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeadCell class="w-12"><Checkbox /></TableHeadCell>
              <TableHeadCell>Header</TableHeadCell>
              <TableHeadCell>Kategori</TableHeadCell>
              <TableHeadCell>Tanggal</TableHeadCell>
              <TableHeadCell>Kategori</TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="r in rows" :key="r.id">
              <TableCell><Checkbox /></TableCell>
              <TableCell>{{ r.name }}</TableCell>
              <TableCell>{{ r.category }}</TableCell>
              <TableCell>{{ r.date }}<div class="text-gray-400">{{ r.time }}</div></TableCell>
              <TableCell>{{ r.category }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `,
  }),
};
