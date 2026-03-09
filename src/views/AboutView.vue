<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()


</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="counterStore.increment()">+</button>
  </div>
  <div>
    {{ counterStore.count }}
  </div>
</template>

