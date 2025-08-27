<template>
  <nav class="flex text-3xl gap-5 font-bold justify-center text-blue-900">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/new-post">New Post page</RouterLink>
  </nav>

  <main class="container mx-auto px-4">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
