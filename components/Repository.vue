<script lang="ts" setup>
defineProps({
  data: {
    required: true,
    type: Array,
  },
});
</script>

<template>
  <div class="gap-4 grid grid-cols-3 p-4">
    <Card
      :description="card.description"
      :forks="card.forks"
      :fullName="card.fullName"
      :key="card"
      :url="card.url"
      v-for="card of data"
    />
  </div>
</template>
