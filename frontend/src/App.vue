<template>
  <nav
    class="text-3xl gap-5 font-bold bg-indigo-950 text-white py-5 px-8 sticky top-0"
  >
    <RouterLink to="/">Home</RouterLink>
  </nav>

  <main class="container mx-auto px-4 pt-8">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
