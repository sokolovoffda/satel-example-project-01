<template>
  <div class="border p-5 mx-auto rounded-2xl mt-10 w-2/5">
    <div class="mb-2">{{ props.title }}</div>
    <form class="flex flex-col gap-2" @submit.prevent="handleSubmit">
      <input v-model="form.fio" type="text" class="border rounded p-1" placeholder="ФИО" />
      <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.fio }}</span>

      <input v-model="form.email" type="text" class="border rounded p-1" placeholder="e-mail" />
      <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>

      <div class="w-full relative">
        <input
          v-model="form.password"
          class="border rounded p-1 w-full"
          placeholder="пароль"
          :type="check ? 'password' : 'text'"
        />
        <div
          @click="check = !check"
          class="absolute right-2 top-2 font-light text-sm cursor-pointer"
        >
          {{ check ? "показать" : "скрыть" }}
        </div>
        <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.password }}</span>
      </div>

      <input v-model="form.age" type="text" class="border rounded p-1" placeholder="возраст" />
      <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.age }}</span>

      <input v-model="form.stage" type="text" class="border rounded p-1" placeholder="стаж" />
      <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.stage }}</span>
      <button
        class="bg-gray-300 will-change-contents mx-auto mt-3 rounded-xl p-2 hover:bg-gray-400 transition-all duration-300 cursor-pointer"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { UserAuth } from "./types/auth";

const check = ref<boolean>(true);

const form = reactive<UserAuth>({
  fio: "",
  email: "",
  age: null,
  stage: null,
  password: "",
});

const errors = reactive({
  fio: "",
  email: "",
  age: null,
  stage: null,
  password: "",
});

const validateForm = () => {
  let isValid = true;
  errors.fio = "";
  errors.email = "";

  if (!form.fio.trim()) {
    errors.fio = "Имя обязательно";
    isValid = false;
  }
  if (!form.email.trim()) {
    errors.email = "Email обязателен";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Введите корректный email";
    isValid = false;
  }
  return isValid;
};

const handleSubmit = () => {
  if (!validateForm()) return;
  emit("get-alert", 123);
  console.log(form);
};

const emit = defineEmits<{
  (e: "get-alert", v: number): void;
}>();

const props = defineProps<{
  title?: string;
}>();
</script>

<style scoped></style>
