<script lang="ts" setup>
// @ts-ignore
import { ArrowPathIcon } from '@heroicons/vue/24/solid';

defineProps({
  modelValue: {
    type: String,
    required: true
  },
  loading: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  }
});
</script>


<template>
  <article>
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup="$emit('onChange', $event.target.value)"
      @keyup.enter="$emit('onEnter', $event.target.value)"
      :readonly="readonly"
      @value="modelValue"
      class="
        bg-emerald-600
        border-0
        h-12
        outline-0
        read-only:bg-emerald-700
        read-only:text-emerald-300
        rounded-lg
        text-2xl
        text-center
        text-emerald-200
      "
    />
    <ArrowPathIcon
      class="
        -mt-8
        animate-spin
        ml-2
        h-5
        text-white
        w-5
      "
      v-if="loading === true"
    />
  </article>
</template>
