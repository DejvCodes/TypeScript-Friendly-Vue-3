<template>
  <p>{{ count }}</p>
  <br>
  <ControlBar @add-count="addCount" @reset-count="count = 0" />
</template>

<script setup lang="ts">
  import ControlBar from '../components/ControlBar.vue';
  import fetchCount from '../services/fetchCount';
  import { onMounted, ref } from 'vue';

  interface Props {
    limit: number;
    alertMessageOnLimit?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    alertMessageOnLimit: 'Can not go any higher'
  })

  const count = ref<number | null>(null)

  onMounted(() => {
    fetchCount((initialCount) => {
      count.value = initialCount
    })
  })

  const addCount = (num: number) => {
    if (count.value !== null) {
      if (count.value >= props.limit) {
        alert(props.alertMessageOnLimit)
      }
      count.value += num
    }
  }
</script>