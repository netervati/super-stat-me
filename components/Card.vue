<script lang="ts" setup>
// @ts-ignore
import {
  BookmarkSquareIcon,
  EyeIcon,
  ShareIcon,
  StarIcon,
} from '@heroicons/vue/24/outline';

defineProps({
  description: {
    required: true,
    type: String,
  },
  forks: {
    required: true,
    type: Number,
  },
  fullName: {
    required: true,
    type: String,
  },
  stars: {
    required: true,
    type: Number,
  },
  url: {
    required: true,
    type: String,
  },
  watchers: {
    required: true,
    type: Number,
  },
});
</script>

<template>
  <article
    class="
      border
      border-slate-300
      hover:shadow-xl
      p-4
      rounded-lg
      shadow-lg
    "
  >
    <h5
      class="
        font-medium
        mb-2
        text-xl
      "
    >
      <BookmarkSquareIcon
        class="
          h-5
          inline-block
          m-3
          w-5
        "
      />
      <a
        :href="url"
        class="
          hover:text-emerald-600
          text-emerald-500
        "
      >
        {{fullName}}
      </a>
    </h5>
    <div class="h-24">
      <p>{{description}}</p>
    </div>
    <div>
      <span class="mr-3">
        <StarIcon class="h-4 inline-block w-4" /> {{stars}}
      </span>
      <span>
        <ShareIcon class="h-4 inline-block w-4" /> {{forks}}
      </span>
      <span class="float-right">
        <EyeIcon class="h-4 inline-block w-4" /> {{watchers}}
      </span>
    </div>
  </article>
</template>
