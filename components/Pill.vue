<script lang="ts" setup>
// @ts-ignore
import {
  CodeBracketSquareIcon,
  StarIcon,
  UserGroupIcon,
  UserPlusIcon,
} from '@heroicons/vue/24/solid';

const props = defineProps({
  label: {
    required: true,
    type: Number,
  },
  type: {
    default: '',
    type: String,
  },
});

const numK = (num: number): string => {
  return Math.abs(num) > 999 ?
    `${String(Math.round(Math.abs(num) / 100) / 10)}k` :
    String(Math.sign(num) * Math.abs(num));
};

const setColor = (type: String): String => {
  switch(type) {
    case 'code-bracket-square':
      return 'green';
    case 'star':
      return 'yellow';
    case 'user-group':
      return 'rose';
    case 'user-plus':
      return 'blue';
    default:
      return 'slate';
  }
};

const iconClass = `icon ${setColor(props.type)}`;
</script>

<template>
  <article class="pill">
    <p class="font-bold text-4xl text-center">
      {{numK(label)}}
    </p>
    <div class="text-center">
    <span v-if="type === 'code-bracket-square'">
      <CodeBracketSquareIcon :class="iconClass" />
      Repositories
    </span>
    <span v-if="type === 'star'">
      <StarIcon :class="iconClass" />
      Stargazers
    </span>
    <span v-if="type === 'user-group'">
      <UserGroupIcon :class="iconClass" />
      Followers
    </span>
    <span v-if="type === 'user-plus'">
      <UserPlusIcon :class="iconClass" />
      Following
    </span>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .icon {
    @apply
      h-6
      inline-block
      text-slate-900
      w-6
    ;

    &.blue {
      @apply text-blue-900;
    }

    &.green {
      @apply text-green-900;
    }

    &.rose {
      @apply text-rose-900;
    }

    &.yellow {
      @apply text-yellow-900;
    }
  }

  .pill {
    @apply
      inline-block
      ml-2
      mr-2
      p-2
      w-40
    ;
  }
</style>
