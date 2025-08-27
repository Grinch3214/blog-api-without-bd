<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/new-post">New Post page</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
