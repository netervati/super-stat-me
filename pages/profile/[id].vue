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

if (error.value) {
  console.log('Navigate to not found page.');
  // Add { redirect: '/profile/not-found' }
  clearError();
}
</script>

<template>
  <div v-if="!error && pending === false">
    <UserInfo :profile="profile" />
  </div>
</template>
