<script lang="ts" setup>
definePageMeta({
  middleware: ['profile'],
});

const route = useRoute();

const {
  data: profile,
  error,
  pending,
  refresh,
} = await useFetch(`/api/profile?username=${route.params.id}`);

let repositories;

if (error.value) {
  console.log('Navigate to not found page.');
  // Add { redirect: '/profile/not-found' }
  clearError();
} else {
  repositories = await useFetch(`/api/repo?username=${route.params.id}`);
}
</script>

<template>
  <div class="bg-white" v-if="!error && pending === false">
    <section class="bg-emerald-500 rounded-b-3xl h-48 w-screen"></section>
    <UserInfo
      :profile="profile"
      :totalRepos="repositories.data.value.totalRepos"
      :totalStars="repositories.data.value.totalStars"
    />
  </div>
</template>
