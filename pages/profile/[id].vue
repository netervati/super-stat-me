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
  console.log(repositories.data.value);
}
</script>

<template>
  <div v-if="!error && pending === false">
    <UserInfo
      :profile="profile"
      :totalStars="repositories.data.value.totalStars"
    />
  </div>
</template>
