<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header class="flex gap-1">  
        <RouterLink 
          to="/"
          active-class="bg-blue-500 text-white hover:bg-blue-600"
        >
          Home
        </RouterLink>

        <RouterLink 
          to="/about"
          active-class="bg-blue-500 text-white hover:bg-blue-600"
         >
          About
        </RouterLink>

         <RouterLink 
            to="/form"
            active-class="bg-blue-500 text-white hover:bg-blue-600"
          >
            Form
        </RouterLink>
    </header>
    
  </div>
      

  <RouterView />
</template>

<style scoped>

</style>
