import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Upload from "./upload.vue";
import type { UploadFile } from "./upload.vue";

const meta: Meta<typeof Upload> = {
  title: "UI/Upload",
  component: Upload,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        code: `<script setup lang="ts">
import { ref, computed } from "vue";
import { Upload, X, Eye, CheckCircle2, XCircle } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

export interface UploadFile {
  id: string;
  name: string;
  size: number;
  progress?: number;
  status?: "uploading" | "success" | "failed";
  file?: File;
}

interface Props {
  modelValue?: UploadFile[];
  accept?: string;
  maxSize?: number; // in bytes
  multiple?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  supportedFormats?: string;
  maxSizeLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  accept: "image/jpeg,image/png",
  maxSize: 5 * 1024 * 1024, // 5MB
  multiple: false,
  disabled: false,
  hasError: false,
  supportedFormats: "JPG / PNG",
  maxSizeLabel: "5MB",
});

const emit = defineEmits<{
  "update:modelValue": [files: UploadFile[]];
}>();

const fileInputRef = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);
const files = computed(() => props.modelValue || []);

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    processFiles(Array.from(target.files));
  }
};

const handleDrop = (event: DragEvent) => {
  isDragging.value = false;
  if (props.disabled) return;

  const droppedFiles = event.dataTransfer?.files;
  if (droppedFiles) {
    processFiles(Array.from(droppedFiles));
  }
};

const processFiles = (newFiles: File[]) => {
  const uploadFiles: UploadFile[] = newFiles.map((file) => ({
    id: Math.random().toString(36).substring(7),
    name: file.name,
    size: file.size,
    status: "uploading" as const,
    progress: 0,
    file,
  }));

  const currentFiles = props.modelValue || [];

  if (props.multiple) {
    emit("update:modelValue", [...currentFiles, ...uploadFiles]);
  } else {
    emit("update:modelValue", uploadFiles);
  }

  setTimeout(() => {
    uploadFiles.forEach((uploadFile) => {
      simulateUpload(uploadFile);
    });
  }, 10);
};

const simulateUpload = (uploadFile: UploadFile) => {
  const interval = setInterval(() => {
    const currentFiles = props.modelValue || [];
    const fileIndex = currentFiles.findIndex((f) => f.id === uploadFile.id);

    if (fileIndex === -1) {
      clearInterval(interval);
      return;
    }

    const currentFile = currentFiles[fileIndex];
    if (!currentFile) {
      clearInterval(interval);
      return;
    }

    const newProgress = (currentFile.progress || 0) + 10;

    if (newProgress >= 100) {
      clearInterval(interval);
      const success = Math.random() > 0.3;

      const updatedFiles = [...currentFiles];
      updatedFiles[fileIndex] = {
        id: currentFile.id,
        name: currentFile.name,
        size: currentFile.size,
        file: currentFile.file,
        progress: 100,
        status: success ? "success" : "failed",
      };
      emit("update:modelValue", updatedFiles);
    } else {
      const updatedFiles = [...currentFiles];
      updatedFiles[fileIndex] = {
        id: currentFile.id,
        name: currentFile.name,
        size: currentFile.size,
        status: currentFile.status,
        file: currentFile.file,
        progress: newProgress,
      };
      emit("update:modelValue", updatedFiles);
    }
  }, 300);
};

const removeFile = (fileId: string) => {
  const currentFiles = props.modelValue || [];
  emit(
    "update:modelValue",
    currentFiles.filter((f) => f.id !== fileId)
  );
};

const retryUpload = (fileId: string) => {
  const currentFiles = props.modelValue || [];
  const fileIndex = currentFiles.findIndex((f) => f.id === fileId);
  if (fileIndex === -1) return;

  const fileToRetry = currentFiles[fileIndex];
  if (!fileToRetry) return;

  const updatedFiles = [...currentFiles];
  updatedFiles[fileIndex] = {
    id: fileToRetry.id,
    name: fileToRetry.name,
    size: fileToRetry.size,
    file: fileToRetry.file,
    status: "uploading",
    progress: 0,
  };
  emit("update:modelValue", updatedFiles);

  setTimeout(() => {
    const retryFile = updatedFiles[fileIndex];
    if (retryFile) {
      simulateUpload(retryFile);
    }
  }, 10);
};

const openFileDialog = () => {
  if (!props.disabled) {
    fileInputRef.value?.click();
  }
};
</script>

<template>
  <div class="space-y-3">
    <!-- Upload Area -->
    <div
      :class="[
        'relative rounded-lg border-2 border-dashed transition-colors',
        'flex flex-col items-center justify-center p-8',
        {
          'border-gray-200 hover:border-gray-300': !hasError && !disabled,
          'border-red-500': hasError && !disabled,
          'border-red-300': isDragging && hasError,
          'border-gray-300': isDragging && !hasError,
          'border-gray-100 bg-gray-100 cursor-not-allowed': disabled,
          'cursor-pointer': !disabled,
        },
      ]"
      @click="openFileDialog"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="handleDrop"
    >
      <input
        ref="fileInputRef"
        type="file"
        :accept="accept"
        :multiple="multiple"
        :disabled="disabled"
        class="hidden"
        @change="handleFileSelect"
      />

      <div
        :class="[
          'mb-3',
          {
            'text-gray-400': !disabled,
            'text-gray-300': disabled,
          },
        ]"
      >
        <Upload :class="['size-6']" />
      </div>

      <div
        :class="[
          'text-sm font-medium mb-2',
          {
            'text-red-600': hasError && !disabled,
            'text-gray-900': !hasError && !disabled,
            'text-gray-400': disabled,
          },
        ]"
      >
        Button
      </div>

      <div
        :class="[
          'text-xs mb-1',
          {
            'text-gray-500': !disabled,
            'text-gray-400': disabled,
          },
        ]"
      >
        File yang di support:
        <span class="font-medium">{{ supportedFormats }}</span>
      </div>
      <div
        :class="[
          'text-xs mb-4',
          {
            'text-gray-500': !disabled,
            'text-gray-400': disabled,
          },
        ]"
      >
        Ukuran file maksimal:
        <span class="font-medium">{{ maxSizeLabel }}</span>
      </div>

      <div class="flex items-center w-full max-w-xs mb-4">
        <div class="flex-1 border-t border-gray-200"></div>
        <span
          :class="[
            'px-3 text-xs',
            {
              'text-gray-400': !disabled,
              'text-gray-300': disabled,
            },
          ]"
          >atau</span
        >
        <div class="flex-1 border-t border-gray-200"></div>
      </div>

      <Button
        type="button"
        variant="secondary"
        size="md"
        :disabled="disabled"
        @click.stop="openFileDialog"
      >
        Button
      </Button>

      <div v-if="disabled" class="absolute top-3 right-3 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
    </div>

    <!-- File Items List -->
    <div v-if="files.length > 0" class="space-y-2">
      <div
        v-for="file in files"
        :key="file.id"
        :class="[
          'flex items-center gap-3 p-3 rounded-lg border transition-colors',
          {
            'border-gray-200 bg-white': file.status !== 'failed',
            'border-red-500 bg-red-50': file.status === 'failed',
          },
        ]"
      >
        <div
          :class="[
            'shrink-0 w-10 h-10 rounded-lg flex items-center justify-center',
            {
              'bg-gray-100': file.status !== 'failed',
              'bg-red-100': file.status === 'failed',
            },
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="[
              {
                'text-gray-600': file.status !== 'failed',
                'text-red-600': file.status === 'failed',
              },
            ]"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ file.name }}
            </p>
          </div>
          <div class="flex items-center gap-2 mt-0.5">
            <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>

            <template v-if="file.status === 'uploading'">
              <div
                class="w-8 h-8 rounded-full border-2 border-red-500 border-t-transparent animate-spin"
              ></div>
              <span class="text-xs text-gray-900">{{ file.progress }}%</span>
            </template>

            <template v-else-if="file.status === 'success'">
              <CheckCircle2 class="size-4 text-green-600" />
              <span class="text-xs text-green-600 font-medium">Selesai</span>
            </template>

            <template v-else-if="file.status === 'failed'">
              <XCircle class="size-4 text-red-600" />
              <span class="text-xs text-red-600 font-medium">Gagal</span>
            </template>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button
            v-if="file.status === 'success'"
            type="button"
            class="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            @click.stop="() => {}"
          >
            <Eye class="size-4" />
          </button>

          <button
            v-if="file.status === 'failed'"
            type="button"
            class="text-xs text-red-600 font-medium hover:text-red-700 transition-colors px-2"
            @click.stop="retryUpload(file.id)"
          >
            Coba lagi
          </button>

          <div
            v-if="file.status === 'failed'"
            class="w-px h-4 bg-gray-300"
          ></div>

          <button
            type="button"
            :class="[
              'p-2 transition-colors',
              {
                'text-gray-400 hover:text-gray-600': file.status !== 'failed',
                'text-red-400 hover:text-red-600': file.status === 'failed',
              },
            ]"
            @click.stop="removeFile(file.id)"
          >
            <X class="size-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>`,
      },
    },
  },
  argTypes: {
    modelValue: {
      control: false,
      description: "Array of uploaded files",
    },
    accept: {
      control: "text",
      description: "Accepted file types",
    },
    maxSize: {
      control: "number",
      description: "Maximum file size in bytes",
    },
    multiple: {
      control: "boolean",
      description: "Allow multiple file upload",
    },
    disabled: {
      control: "boolean",
      description: "Disable upload",
    },
    hasError: {
      control: "boolean",
      description: "Show error state",
    },
    supportedFormats: {
      control: "text",
      description: "Supported formats label",
    },
    maxSizeLabel: {
      control: "text",
      description: "Max size label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([]);
      return { files, args };
    },
    template: `
      <div class="max-w-md">
        <Upload 
          v-model="files"
          v-bind="args"
        />
      </div>
    `,
  }),
};

export const Multiple: Story = {
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([]);
      return { files, args };
    },
    template: `
      <div class="max-w-md">
        <Upload 
          v-model="files"
          :multiple="true"
          v-bind="args"
        />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([]);
      return { files, args };
    },
    template: `
      <div class="max-w-md">
        <Upload 
          v-model="files"
          :disabled="true"
          v-bind="args"
        />
      </div>
    `,
  }),
};

export const WithError: Story = {
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([]);
      return { files, args };
    },
    template: `
      <div class="max-w-md">
        <Upload 
          v-model="files"
          :has-error="true"
          v-bind="args"
        />
      </div>
    `,
  }),
};

export const WithUploadedFiles: Story = {
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([
        {
          id: "1",
          name: "document.pdf",
          size: 1024000,
          status: "success",
          progress: 100,
        },
        {
          id: "2",
          name: "image.jpg",
          size: 2048000,
          status: "uploading",
          progress: 45,
        },
        {
          id: "3",
          name: "failed-upload.png",
          size: 512000,
          status: "failed",
          progress: 100,
        },
      ]);
      return { files, args };
    },
    template: `
      <div class="max-w-md">
        <Upload 
          v-model="files"
          :multiple="true"
          v-bind="args"
        />
      </div>
    `,
  }),
};
