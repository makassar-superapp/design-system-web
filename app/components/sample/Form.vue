<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Search, Eye, EyeOff, CalendarIcon } from "lucide-vue-next";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Chip } from "@/components/ui/chips";
import DatePicker from "@/components/ui/date-picker/DatePicker.vue";
import Upload from "@/components/ui/upload/upload.vue";

// Define validation schema using Yup
const formSchema = toTypedSchema(
  yup.object({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
    search: yup.string().required("Search is required"),
    textarea: yup
      .string()
      .required("Textarea is required")
      .max(100, "Maximum 100 characters"),
    number: yup
      .number()
      .required("Number is required")
      .min(1, "Number must be at least 1")
      .max(100, "Number must not exceed 100")
      .typeError("Must be a number"),
    checkbox: yup
      .array()
      .min(1, "Please select at least one option")
      .required("Checkbox is required"),
    radio: yup.string().required("Please select one option"),
    switch: yup
      .mixed()
      .oneOf([true, "on"], "Please enable this option")
      .required("Switch is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    select: yup.string().required("Please select one option"),
    multiselect: yup
      .array()
      .min(1, "Please select at least one option")
      .required("Multi-select is required"),
    datepicker: yup.mixed().required("Please select a date"),
    upload: yup
      .array()
      .min(1, "Please upload at least one file")
      .required("File upload is required"),
  })
);

// Initialize form with vee-validate
const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    username: "",
    email: "",
    search: "",
    textarea: "",
    number: 0,
    checkbox: [],
    radio: "",
    switch: false,
    password: "",
    select: "",
    multiselect: [],
    datepicker: undefined,
    upload: [],
  },
});

// Handle form submission
const onSubmit = form.handleSubmit(async (values) => {
  try {
    console.log("Form submitted with values:", values);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Form submitted successfully! Check console for values.");

    // Reset form after successful submission
    form.resetForm();
  } catch (error) {
    console.error("Form submission failed:", error);
  }
});

const isSubmitting = ref(false);

// Character counter for textarea
const textareaValue = computed(() => form.values.textarea || "");
const textareaLength = computed(() => textareaValue.value.length);

// Password visibility toggle
const showPassword = ref(false);
</script>

<template>
  <div class="mx-auto max-w-2xl p-6">
    <div class="mb-6">
      <h2 class="text-2xl font-bold">Sample Form</h2>
      <p class="text-muted-foreground mt-1">
        Contoh implementasi form menggunakan validasi dengan vee-validate
      </p>
    </div>

    <form @submit="onSubmit" class="space-y-6">
      <!-- Username Field -->
      <FormField v-slot="{ componentField, errorMessage }" name="username">
        <FormItem>
          <FormLabel required>Username</FormLabel>
          <FormControl>
            <InputGroup :aria-invalid="!!errorMessage">
              <InputGroupInput
                type="text"
                placeholder="Enter your username"
                :aria-invalid="!!errorMessage"
                v-bind="componentField"
              />
            </InputGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Email Field -->
      <FormField v-slot="{ componentField, errorMessage }" name="email">
        <FormItem>
          <FormLabel required disabled>Email</FormLabel>
          <FormControl>
            <InputGroup :aria-invalid="!!errorMessage">
              <InputGroupInput
                type="email"
                placeholder="name@example.com"
                autocomplete="email"
                :aria-invalid="!!errorMessage"
                disabled
                v-bind="componentField"
              />
            </InputGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Search Field -->
      <FormField v-slot="{ componentField, errorMessage }" name="search">
        <FormItem>
          <FormLabel required>Search</FormLabel>
          <FormControl>
            <InputGroup :aria-invalid="!!errorMessage">
              <InputGroupInput
                type="text"
                placeholder="Search..."
                :aria-invalid="!!errorMessage"
                v-bind="componentField"
              />
              <InputGroupAddon>
                <Search
                  :class="[
                    'size-4 text-gray-300',
                    errorMessage && 'text-red-500',
                  ]"
                />
              </InputGroupAddon>
            </InputGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Textarea Field -->
      <FormField v-slot="{ componentField, errorMessage }" name="textarea">
        <FormItem>
          <FormLabel required>Textarea</FormLabel>
          <FormControl>
            <div class="relative">
              <InputGroup :aria-invalid="!!errorMessage">
                <InputGroupTextarea
                  placeholder="Enter text..."
                  :aria-invalid="!!errorMessage"
                  rows="4"
                  v-bind="componentField"
                />
              </InputGroup>
              <div class="absolute bottom-2 right-3 text-xs text-gray-400">
                {{ textareaLength }} / 100
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Number Field -->
      <FormField v-slot="{ componentField, errorMessage }" name="number">
        <FormItem>
          <FormLabel required>Number</FormLabel>
          <FormControl>
            <InputGroup :aria-invalid="!!errorMessage">
              <InputGroupInput
                type="number"
                placeholder="Enter number..."
                :aria-invalid="!!errorMessage"
                v-bind="componentField"
              />
            </InputGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Password Field -->
      <FormField v-slot="{ componentField, errorMessage }" name="password">
        <FormItem>
          <FormLabel required>Password</FormLabel>
          <FormControl>
            <InputGroup :aria-invalid="!!errorMessage">
              <InputGroupInput
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                :aria-invalid="!!errorMessage"
                v-bind="componentField"
              />
              <InputGroupAddon
                align="inline-end"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              >
                <Eye
                  v-if="!showPassword"
                  :class="[
                    'size-4 text-gray-300',
                    errorMessage && 'text-red-500',
                  ]"
                />
                <EyeOff
                  v-else
                  :class="[
                    'size-4 text-gray-300',
                    errorMessage && 'text-red-500',
                  ]"
                />
              </InputGroupAddon>
            </InputGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Select Field -->
      <FormField v-slot="{ componentField, errorMessage }" name="select">
        <FormItem>
          <FormLabel required>Select</FormLabel>
          <FormControl>
            <Select v-bind="componentField">
              <SelectTrigger
                class="w-full"
                :class="errorMessage && 'border-red-500'"
              >
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="i in 4"
                    :key="i"
                    :value="`placeholder${i}`"
                  >
                    Placeholder {{ i }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Multi-Select Field -->
      <FormField v-slot="{ value, errorMessage }" name="multiselect">
        <FormItem>
          <FormLabel required>Multi-Select</FormLabel>
          <FormControl>
            <Select
              :model-value="value"
              :multiple="true"
              @update:model-value="
                (newValue) =>
                  form.setFieldValue(
                    'multiselect',
                    Array.isArray(newValue) ? newValue : []
                  )
              "
            >
              <SelectTrigger
                class="w-full"
                :class="errorMessage && 'border-red-500'"
              >
                <SelectValue placeholder="Select options" :aria-label="value">
                  <div
                    v-if="value && value.length > 0"
                    class="flex flex-wrap gap-1"
                    @click.stop
                  >
                    <div
                      v-for="item in value"
                      :key="item"
                      class="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900 pointer-events-auto border border-gray-200"
                    >
                      <span>{{ item }}</span>
                      <button
                        type="button"
                        class="inline-flex items-center justify-center p-0.5 rounded-sm hover:bg-gray-200 transition-colors"
                        @click.stop="
                          form.setFieldValue(
                            'multiselect',
                            (value || []).filter((v: string) => v !== item)
                          )
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="size-3 text-gray-500"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="i in 4"
                    :key="i"
                    :value="`placeholder${i}`"
                  >
                    Placeholder {{ i }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Date Picker Field -->
      <FormField v-slot="{ componentField, errorMessage }" name="datepicker">
        <FormItem>
          <FormLabel required>Date Picker</FormLabel>
          <FormControl>
            <DatePicker v-bind="componentField" :has-error="!!errorMessage" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Checkbox Field -->
      <FormField v-slot="{ value, errorMessage }" name="checkbox">
        <FormItem>
          <FormLabel required>Checkbox</FormLabel>
          <FormMessage />
          <div class="space-y-3 mt-2">
            <div v-for="i in 4" :key="i" class="flex items-center space-x-2">
              <Checkbox
                :id="`checkbox-${i}`"
                :checked="value?.includes(`placeholder${i}`)"
                :class="
                  errorMessage &&
                  'border-red-500 data-[state=checked]:border-red-500'
                "
                @update:checked="
                  (checked: boolean) => {
                    const currentValue = value || [];
                    if (checked) {
                      form.setFieldValue('checkbox', [
                        ...currentValue,
                        `placeholder${i}`,
                      ]);
                    } else {
                      form.setFieldValue(
                        'checkbox',
                        currentValue.filter((v: string) => v !== `placeholder${i}`)
                      );
                    }
                  }
                "
              />
              <Label
                :for="`checkbox-${i}`"
                :class="[
                  'text-sm font-normal cursor-pointer',
                  errorMessage && 'text-red-500',
                ]"
              >
                Placeholder {{ i }}
              </Label>
            </div>
          </div>
        </FormItem>
      </FormField>

      <!-- Radio Field -->
      <FormField v-slot="{ componentField, errorMessage }" name="radio">
        <FormItem>
          <FormLabel required>Radio</FormLabel>
          <FormMessage />
          <FormControl>
            <RadioGroup v-bind="componentField">
              <div v-for="i in 4" :key="i" class="flex items-center space-x-2">
                <RadioGroupItem
                  :id="`radio-${i}`"
                  :value="`placeholder${i}`"
                  :aria-invalid="!!errorMessage"
                  :class="
                    errorMessage && 'border-red-500 aria-checked:border-red-500'
                  "
                />
                <Label
                  :for="`radio-${i}`"
                  :class="[
                    'text-sm font-normal cursor-pointer',
                    errorMessage && 'text-red-500',
                  ]"
                >
                  Placeholder {{ i }}
                </Label>
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>
      </FormField>

      <!-- Switch Field -->
      <FormField v-slot="{ componentField, errorMessage }" name="switch">
        <FormItem>
          <FormLabel required>Switch</FormLabel>
          <FormMessage />
          <FormControl>
            <div class="flex items-center space-x-2">
              <Switch
                id="switch-field"
                v-bind="componentField"
                :aria-invalid="!!errorMessage"
                :class="
                  errorMessage && 'border-red-500 aria-checked:border-red-500'
                "
              />
              <Label
                for="switch-field"
                :class="[
                  'text-sm font-normal cursor-pointer',
                  errorMessage && 'text-red-500',
                ]"
              >
                Placeholder Text
              </Label>
            </div>
          </FormControl>
        </FormItem>
      </FormField>

      <!-- Upload Field -->
      <FormField v-slot="{ componentField, errorMessage }" name="upload">
        <FormItem>
          <FormLabel required>Upload</FormLabel>
          <FormControl>
            <Upload
              :model-value="componentField.modelValue"
              @update:model-value="componentField['onUpdate:modelValue']"
              :has-error="!!errorMessage"
              :multiple="true"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Submit Button -->
      <div class="flex gap-4">
        <Button type="submit" :disabled="isSubmitting">
          <span v-if="isSubmitting" class="mr-2 h-4 w-4 animate-spin" />
          {{ isSubmitting ? "Submitting..." : "Submit" }}
        </Button>
        <Button type="button" variant="outline" @click="form.resetForm()">
          Reset
        </Button>
      </div>
    </form>
  </div>
</template>
