<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { AvatarVariants } from ".";
import { cn } from "@/lib/utils";
import { avatarVariants } from ".";
import OnlineIndicator from "./OnlineIndicator.vue";
import VerifiedIndicator from "./VerifiedIndicator.vue";

import { User } from "lucide-vue-next";

interface Props {
  src?: string;
  alt?: string;
  initial?: string;
  size?: AvatarVariants["size"];
  shape?: "circle" | "base";
  online?: boolean | null;
  onlineSize?: 6 | 8 | 10 | 12 | 14 | 16;
  verified?: boolean;
  verifiedSize?: 12 | 14 | 16 | 18 | 20 | 22;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  shape: "circle",
  online: null,
  onlineSize: 10,
  verified: false,
  verifiedSize: 16,
  src: undefined,
  alt: undefined,
  initial: undefined,
  class: undefined,
});
</script>

<template>
  <div class="relative w-fit">
    <figure
      :class="
        cn(
          avatarVariants({ size: props.size, shape: props.shape }),
          props.class
        )
      "
    >
      <img
        v-if="props.src"
        :src="props.src"
        :alt="props.alt"
        class="w-full h-full size-6"
      />
      <slot v-else />
      <template v-if="!props.src && !$slots.default">
        <span v-if="props.initial" class="font-medium">{{
          props.initial
        }}</span>
        <User v-else class="size-6 text-muted-foreground" />
      </template>
    </figure>

    <OnlineIndicator
      v-if="props.online !== null"
      :online="props.online ?? undefined"
      :size="props.onlineSize"
      :avatar-size="props.size"
    />
    <VerifiedIndicator
      v-if="props.verified"
      :size="props.verifiedSize"
      :avatar-size="props.size"
    />
  </div>
</template>
