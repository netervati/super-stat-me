<script lang="ts" setup>
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
  url: {
    required: true,
    type: String,
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
        hover:text-emerald-600
        text-emerald-500
      "
    >
      <a :href="url">{{fullName}}</a>
    </h5>
    <p>{{description}}</p>
  </article>
</template>
