<script lang="ts" setup>
// @ts-ignore
import VLazyImage from "v-lazy-image";

defineProps({
  avatar_url: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <VLazyImage
    :src="avatar_url"
    class="
      -mt-28
      absolute
      left-0
      h-40
      ml-auto
      mr-auto
      right-0
      rounded-2xl
      w-40
    "
  />
</template>

<style scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
