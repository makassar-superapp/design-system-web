import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, computed } from 'vue'
import { Pagination } from './index'
import { Table, TableHeader, TableRow, TableHeadCell, TableBody, TableCell } from '@/components/ui/table'

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Basic: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const page = ref(1)
      const pageSize = ref(10)
      const totalItems = ref(100)
      return { page, pageSize, totalItems }
    },
    template: `
      <Pagination :page="page" :page-size="pageSize" :total-items="totalItems" 
        @update:page="(p) => page = p" 
        @update:pageSize="(s) => pageSize = s" />
    `,
  }),
}

export const WithTable: Story = {
  render: () => ({
    components: { Pagination, Table, TableHeader, TableRow, TableHeadCell, TableBody, TableCell },
    setup() {
      const all = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}`, category: 'Wisata' }))
      const page = ref(1)
      const pageSize = ref(10)
      const totalItems = computed(() => all.length)
      const rows = computed(() => {
        const start = (page.value - 1) * pageSize.value
        return all.slice(start, start + pageSize.value)
      })
      return { page, pageSize, totalItems, rows }
    },
    template: `
      <div class="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeadCell>Nama</TableHeadCell>
              <TableHeadCell>Kategori</TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="r in rows" :key="r.id">
              <TableCell>{{ r.name }}</TableCell>
              <TableCell>{{ r.category }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Pagination :page="page" :page-size="pageSize" :total-items="totalItems" 
          @update:page="(p) => page = p" 
          @update:pageSize="(s) => pageSize = s" />
      </div>
    `,
  }),
}
