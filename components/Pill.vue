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
    type: String,
  },
  type: {
    default: '',
    type: String,
  },
});

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
  <span :class="`pill ${setColor(type)}`">
    <CodeBracketSquareIcon
      :class="iconClass"
      v-if="type === 'code-bracket-square'"
    />
    <StarIcon
      :class="iconClass"
      v-if="type === 'star'"
    />
    <UserGroupIcon
      :class="iconClass"
      v-if="type === 'user-group'"
    />
    <UserPlusIcon
      :class="iconClass"
      v-if="type === 'user-plus'"
    />
    {{label}}
  </span>
</template>

<style lang="scss" scoped>
  .icon {
    @apply inline-block text-slate-900 h-6 w-6;

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
    @apply ml-2 mr-2 p-2 rounded-full;

    &.blue {
      @apply bg-blue-200;
    }

    &.green {
      @apply bg-green-200;
    }

    &.rose {
      @apply bg-rose-200;
    }

    &.yellow {
      @apply bg-yellow-200;
    }
  }
</style>
