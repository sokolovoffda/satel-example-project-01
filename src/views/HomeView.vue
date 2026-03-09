<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';


const counterStore = useCounterStore()
</script>

<template>
  <main>
    <div>{{counterStore.count}}</div>
  </main>
</template>
