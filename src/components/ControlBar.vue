<template>
  <button @click="emit('add-count', 1)">Add</button>
  <button @click="emit('reset-count')">Reset</button>
</template>

<script setup lang="ts">
  import { defineEmits } from 'vue'

  const emit = defineEmits<{
    (event: 'add-count', num: number): void
    (event: 'reset-count'): void
  }>()
</script> 