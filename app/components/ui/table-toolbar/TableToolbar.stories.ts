import type { Meta, StoryObj } from "@storybook/vue3";
import TableToolbar from "./TableToolbar.vue";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof TableToolbar> = {
  title: "UI/TableToolbar",
  component: TableToolbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TableToolbar>;

export const EmptyFilters: Story = {
  args: {},
};

export const FilledFilters: Story = {
  args: {
    filters: [
      { id: 1, label: "Kategori: Wisata" },
      { id: 2, label: "Status: Aktif" },
    ],
  },
};

export const WithActionButton: Story = {
  render: () => ({
    components: { TableToolbar, Button },
    template: `
      <TableToolbar>
        <template #actions>
          <Button variant="secondary">+ Button</Button>
        </template>
      </TableToolbar>
    `,
  }),
};
