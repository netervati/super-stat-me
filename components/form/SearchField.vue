<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
});
</script>


<template>
  <input
    @input="$emit('update:modelValue', $event.target.value)"
    @keyup="$emit('onChange', $event.target.value)"
    @keyup.enter="$emit('onEnter', $event.target.value)"
    @value="modelValue"
    class="
      bg-slate-700
      border-0
      h-12
      outline-0
      rounded-lg
      text-2xl
      text-center
      text-white
    "
  />
</template>
