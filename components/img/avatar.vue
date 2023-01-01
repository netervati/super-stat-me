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
      -mt-20
      absolute
      border-8
      border-white
      left-0
      ml-auto
      mr-auto
      right-0
      rounded-full
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
