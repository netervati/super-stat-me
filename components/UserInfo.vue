<script lang="ts" setup>
import { UserGroupIcon } from '@heroicons/vue/24/solid/esm/index.js';

const props = defineProps({
   profile: {
     required: true,
     type: Object,
   },
   totalRepos: {
     required: true,
     type: Number,
   },
   totalStars: {
     required: true,
     type: Number,
   },
});

const {
  profile: {
    avatar_url,
    bio,
    followers,
    following,
    login,
    name,
  },
} = props;
</script>

<template>
  <div class="flex w-full">
    <section class="m-auto w-8/12">
      <article
        class="
          p-8
          rounded-2xl
          w-full
        "
      >
        <ImgAvatar :avatar_url="avatar_url" />
        <div class="h-24"></div>
        <h3
          class="
            font-bold
            text-4xl
            text-center
          "
        >
          {{name}}
        </h3>
        <div class="mt-2 text-center w-full">
          <a
            class="hover:underline text-3xl"
            :href="`https://github.com/${login}`"
          >
            @{{login}}
          </a>
        </div>
        <p class="mt-8 text-center text-xl">{{bio}}</p>
        <div class="flex mt-4">
          <article class="m-auto">
            <Pill
              :label="totalRepos"
              type="code-bracket-square"
            />
            <Pill
              :label="totalStars"
              type="star"
            />
            <Pill
              :label="followers"
              type="user-group"
            />
            <Pill
              :label="following"
              type="user-plus"
            />
          </article>
        </div>
      </article>
    </section>
  </div>
</template>
