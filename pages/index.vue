<script lang="ts" setup>
const searchUser = ref('');
const isBlank = ref(false);

const handleChange = (value: string): void => {
  if (value !== "") {
    isBlank.value = false;
  }
};

const handleEnter = (value: string): void => {
  if (value === "") {
    isBlank.value = true;

    return;
  }

  console.log(value);
};
</script>

<template>
  <div class="flex h-screen w-screen">
    <section class="m-auto">
      <h3 class="mb-4 text-2xl text-center text-white">
        Your GitHub username:
      </h3>
      <FormSearchField
        @onChange="handleChange"
        @onEnter="handleEnter"
        v-model="searchUser"
      />
      <p
        class="mt-2 text-slate-400"
        v-if="isBlank"
      >
        Please input a username.
      </p>
    </section>
  </div>
</template>
