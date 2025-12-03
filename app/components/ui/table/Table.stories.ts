import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, computed } from "vue";
import Table from "./Table.vue";
import TableHeader from "./TableHeader.vue";
import TableBody from "./TableBody.vue";
import TableRow from "./TableRow.vue";
import TableHeadCell from "./TableHeadCell.vue";
import TableCell from "./TableCell.vue";
import TableSelection from "./TableSelection.vue";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-vue-next";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    actions: { disable: true },
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data for the table stories
const sampleUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "inactive",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Editor",
    status: "active",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "User",
    status: "pending",
  },
];

export const BasicTable: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>Email</TableHeadCell>
      <TableHeadCell>Role</TableHeadCell>
      <TableHeadCell>Status</TableHeadCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow v-for="user in users" :key="user.id">
      <TableCell>{{ user.name }}</TableCell>
      <TableCell>{{ user.email }}</TableCell>
      <TableCell>{{ user.role }}</TableCell>
      <TableCell>{{ user.status }}</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
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
    },
    setup() {
      return { users: sampleUsers };
    },
    template: `
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Role</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="user in users" :key="user.id">
            <TableCell>{{ user.name }}</TableCell>
            <TableCell>{{ user.email }}</TableCell>
            <TableCell>{{ user.role }}</TableCell>
            <TableCell>{{ user.status }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
};

export const WithCheckboxes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHeadCell class="w-12">
        <Checkbox />
      </TableHeadCell>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>Email</TableHeadCell>
      <TableHeadCell>Role</TableHeadCell>
      <TableHeadCell>Status</TableHeadCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow v-for="user in users" :key="user.id">
      <TableCell>
        <Checkbox />
      </TableCell>
      <TableCell>{{ user.name }}</TableCell>
      <TableCell>{{ user.email }}</TableCell>
      <TableCell>{{ user.role }}</TableCell>
      <TableCell>{{ user.status }}</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
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
      Checkbox,
    },
    setup() {
      return { users: sampleUsers };
    },
    template: `
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeadCell class="w-12">
              <Checkbox />
            </TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Role</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="user in users" :key="user.id">
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>{{ user.name }}</TableCell>
            <TableCell>{{ user.email }}</TableCell>
            <TableCell>{{ user.role }}</TableCell>
            <TableCell>{{ user.status }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
};

export const WithBadges: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>Email</TableHeadCell>
      <TableHeadCell>Role</TableHeadCell>
      <TableHeadCell>Status</TableHeadCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow v-for="user in users" :key="user.id">
      <TableCell>{{ user.name }}</TableCell>
      <TableCell>{{ user.email }}</TableCell>
      <TableCell>
        <Badge :variant="user.role === 'Admin' ? 'default' : 'secondary'">
          {{ user.role }}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge 
          :variant="user.status === 'active' ? 'success' : user.status === 'inactive' ? 'destructive' : 'warning'"
        >
          {{ user.status }}
        </Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`,
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
      Badge,
    },
    setup() {
      return { users: sampleUsers };
    },
    template: `
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Role</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="user in users" :key="user.id">
            <TableCell>{{ user.name }}</TableCell>
            <TableCell>{{ user.email }}</TableCell>
            <TableCell>
              <Badge :variant="user.role === 'Admin' ? 'default' : 'secondary'">
                {{ user.role }}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge 
                :variant="user.status === 'active' ? 'success' : user.status === 'inactive' ? 'destructive' : 'warning'"
              >
                {{ user.status }}
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
};

export const WithActions: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>Email</TableHeadCell>
      <TableHeadCell>Role</TableHeadCell>
      <TableHeadCell>Status</TableHeadCell>
      <TableHeadCell class="text-right">Actions</TableHeadCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow v-for="user in users" :key="user.id">
      <TableCell>{{ user.name }}</TableCell>
      <TableCell>{{ user.email }}</TableCell>
      <TableCell>{{ user.role }}</TableCell>
      <TableCell>{{ user.status }}</TableCell>
      <TableCell class="text-right">
        <div class="flex justify-end gap-2">
          <Button variant="ghost" size="icon-sm">
            <Pencil class="size-4" />
          </Button>
          <Button variant="ghost" size="icon-sm">
            <Trash2 class="size-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`,
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
      Button,
      Pencil,
      Trash2,
    },
    setup() {
      return { users: sampleUsers };
    },
    template: `
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Role</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
            <TableHeadCell class="text-right">Actions</TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="user in users" :key="user.id">
            <TableCell>{{ user.name }}</TableCell>
            <TableCell>{{ user.email }}</TableCell>
            <TableCell>{{ user.role }}</TableCell>
            <TableCell>{{ user.status }}</TableCell>
            <TableCell class="text-right">
              <div class="flex justify-end gap-2">
                <Button variant="ghost" size="icon-sm">
                  <Pencil class="size-4" />
                </Button>
                <Button variant="ghost" size="icon-sm">
                  <Trash2 class="size-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
};

export const WithSelection: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue'

const selectedCount = ref(2)
const handleClearSelection = () => {
  selectedCount.value = 0
}
</script>

<template>
  <div class="space-y-4">
    <TableSelection 
      :selected="selectedCount" 
      @clear="handleClearSelection" 
    />
    
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeadCell class="w-12">
            <Checkbox />
          </TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>Role</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="user in users" :key="user.id">
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>{{ user.name }}</TableCell>
          <TableCell>{{ user.email }}</TableCell>
          <TableCell>{{ user.role }}</TableCell>
          <TableCell>{{ user.status }}</TableCell>
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
      TableSelection,
      Checkbox,
    },
    setup() {
      const selectedCount = { value: 2 };
      const handleClearSelection = () => {
        selectedCount.value = 0;
      };
      return { users: sampleUsers, selectedCount, handleClearSelection };
    },
    template: `
      <div class="space-y-4">
        <TableSelection 
          :selected="selectedCount.value" 
          @clear="handleClearSelection" 
        />
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeadCell class="w-12">
                <Checkbox />
              </TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Role</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in users" :key="user.id">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>{{ user.role }}</TableCell>
              <TableCell>{{ user.status }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `,
  }),
};

export const CompleteExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref } from 'vue'

const selectedCount = ref(3)
const handleClearSelection = () => {
  selectedCount.value = 0
}
</script>

<template>
  <div class="space-y-4">
    <TableSelection 
      :selected="selectedCount" 
      @clear="handleClearSelection" 
    />
    
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeadCell class="w-12">
            <Checkbox />
          </TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>Role</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell class="text-right">Actions</TableHeadCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="user in users" :key="user.id">
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell class="font-medium">{{ user.name }}</TableCell>
          <TableCell class="text-gray-600">{{ user.email }}</TableCell>
          <TableCell>
            <Badge :variant="user.role === 'Admin' ? 'default' : 'secondary'">
              {{ user.role }}
            </Badge>
          </TableCell>
          <TableCell>
            <Badge 
              :variant="user.status === 'active' ? 'success' : user.status === 'inactive' ? 'destructive' : 'warning'"
            >
              {{ user.status }}
            </Badge>
          </TableCell>
          <TableCell class="text-right">
            <div class="flex justify-end gap-2">
              <Button variant="ghost" size="icon-sm">
                <Pencil class="size-4" />
              </Button>
              <Button variant="ghost" size="icon-sm">
                <Trash2 class="size-4" />
              </Button>
            </div>
          </TableCell>
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
      TableSelection,
      Checkbox,
      Badge,
      Button,
      Pencil,
      Trash2,
    },
    setup() {
      const selectedCount = { value: 3 };
      const handleClearSelection = () => {
        selectedCount.value = 0;
      };
      return { users: sampleUsers, selectedCount, handleClearSelection };
    },
    template: `
      <div class="space-y-4">
        <TableSelection 
          :selected="selectedCount.value" 
          @clear="handleClearSelection" 
        />
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeadCell class="w-12">
                <Checkbox />
              </TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Role</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell class="text-right">Actions</TableHeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in users" :key="user.id">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell class="font-medium">{{ user.name }}</TableCell>
              <TableCell class="text-gray-600">{{ user.email }}</TableCell>
              <TableCell>
                <Badge :variant="user.role === 'Admin' ? 'default' : 'secondary'">
                  {{ user.role }}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge 
                  :variant="user.status === 'active' ? 'success' : user.status === 'inactive' ? 'destructive' : 'warning'"
                >
                  {{ user.status }}
                </Badge>
              </TableCell>
              <TableCell class="text-right">
                <div class="flex justify-end gap-2">
                  <Button variant="ghost" size="icon-sm">
                    <Pencil class="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon-sm">
                    <Trash2 class="size-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `,
  }),
};

export const EmptyState: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>Email</TableHeadCell>
      <TableHeadCell>Role</TableHeadCell>
      <TableHeadCell>Status</TableHeadCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell colspan="4" class="text-center py-8 text-gray-500">
        No data available
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`,
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
    },
    template: `
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Role</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colspan="4" class="text-center py-8 text-gray-500">
              No data available
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
};

export const CompactTable: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHeadCell class="p-2">Name</TableHeadCell>
      <TableHeadCell class="p-2">Email</TableHeadCell>
      <TableHeadCell class="p-2">Role</TableHeadCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow v-for="user in users" :key="user.id">
      <TableCell class="p-2">{{ user.name }}</TableCell>
      <TableCell class="p-2">{{ user.email }}</TableCell>
      <TableCell class="p-2">{{ user.role }}</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
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
    },
    setup() {
      return { users: sampleUsers.slice(0, 3) };
    },
    template: `
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeadCell class="p-2">Name</TableHeadCell>
            <TableHeadCell class="p-2">Email</TableHeadCell>
            <TableHeadCell class="p-2">Role</TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="user in users" :key="user.id">
            <TableCell class="p-2">{{ user.name }}</TableCell>
            <TableCell class="p-2">{{ user.email }}</TableCell>
            <TableCell class="p-2">{{ user.role }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
};

export const SortableColumns: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup>
import { ref, computed } from 'vue'

const sort = ref({ key: null, direction: 'asc' })
const onSort = (p) => { sort.value = p }
const sortedUsers = computed(() => {
  if (!sort.value.key) return users
  const dir = sort.value.direction === 'asc' ? 1 : -1
  return [...users].sort((a, b) => String(a[sort.value.key]).localeCompare(String(b[sort.value.key])) * dir)
})
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeadCell sortable sort-key="name" :sort-direction="sort.key==='name'?sort.direction:null" @sort="onSort">Name</TableHeadCell>
        <TableHeadCell sortable sort-key="email" :sort-direction="sort.key==='email'?sort.direction:null" @sort="onSort">Email</TableHeadCell>
        <TableHeadCell sortable sort-key="role" :sort-direction="sort.key==='role'?sort.direction:null" @sort="onSort">Role</TableHeadCell>
        <TableHeadCell sortable sort-key="status" :sort-direction="sort.key==='status'?sort.direction:null" @sort="onSort">Status</TableHeadCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in sortedUsers" :key="user.id">
        <TableCell>{{ user.name }}</TableCell>
        <TableCell>{{ user.email }}</TableCell>
        <TableCell>{{ user.role }}</TableCell>
        <TableCell>{{ user.status }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>`,
      },
    },
  },
  render: () => ({
    components: { Table, TableHeader, TableBody, TableRow, TableHeadCell, TableCell },
    setup() {
      const users = sampleUsers.slice()
      const sort = ref<{ key: 'name' | 'email' | 'role' | 'status' | null; direction: 'asc' | 'desc' }>({ key: null, direction: 'asc' })
      const onSort = (p: { key?: 'name' | 'email' | 'role' | 'status'; direction: 'asc' | 'desc' }) => {
        sort.value = { key: p.key ?? null, direction: p.direction }
      }
      const sortedUsers = computed(() => {
        const s = sort.value
        if (!s.key) return users
        const dir = s.direction === 'asc' ? 1 : -1
        return [...users].sort((a, b) => String(a[s.key!]).localeCompare(String(b[s.key!])) * dir)
      })
      return { sortedUsers, sort, onSort }
    },
    template: `
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeadCell
              sortable
              sort-key="name"
              :sort-direction="sort.key==='name'?sort.direction:null"
              @sort="onSort"
            >Name</TableHeadCell>
            <TableHeadCell
              sortable
              sort-key="email"
              :sort-direction="sort.key==='email'?sort.direction:null"
              @sort="onSort"
            >Email</TableHeadCell>
            <TableHeadCell
              sortable
              sort-key="role"
              :sort-direction="sort.key==='role'?sort.direction:null"
              @sort="onSort"
            >Role</TableHeadCell>
            <TableHeadCell
              sortable
              sort-key="status"
              :sort-direction="sort.key==='status'?sort.direction:null"
              @sort="onSort"
            >Status</TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="user in sortedUsers" :key="user.id">
            <TableCell>{{ user.name }}</TableCell>
            <TableCell>{{ user.email }}</TableCell>
            <TableCell>{{ user.role }}</TableCell>
            <TableCell>{{ user.status }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
}
