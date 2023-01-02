<script lang="ts" setup>
const searchUser = ref('');
const isBlank = ref(false);
const isSubmitting = ref(false);

const handleChange = (value: string): void => {
  if (value !== "") {
    isBlank.value = false;
  }
};

const handleEnter = async (value: string): Promise<void> => {
  if (value === "") {
    isBlank.value = true;

    return;
  }

  isSubmitting.value = true;
  await navigateTo(`/profile/${value}`);
};
</script>

<template>
  <div class="bg-emerald-500 flex h-screen w-screen">
    <section class="m-auto">
      <h3 class="mb-4 text-2xl text-center text-white">
        Your GitHub username:
      </h3>
      <FormSearchField
        :loading="isSubmitting"
        :readonly="isSubmitting"
        @onChange="handleChange"
        @onEnter="handleEnter"
        v-model="searchUser"
      />  
      <p
        class="mt-2 text-emerald-200"
        v-if="isBlank"
      >
        Please input a username.
      </p>
    </section>
  </div>
</template>
