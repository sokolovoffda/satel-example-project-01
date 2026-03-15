<template>
  <Form @get-alert="getAlert" :title="title" />
</template>

<script setup lang="ts">
import Form from "./Form.vue";
const getAlert = (value: number) => {
  alert(`Пришло снизу:  ${value}`);
};

const title = "ФОРМА";
</script>

<style scoped></style>
