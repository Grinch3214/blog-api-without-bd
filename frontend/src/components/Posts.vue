<template>
  <div>{{ posts }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const posts = ref<Post[]>([]);

async function getData() {
  const url = 'http://127.0.0.1:5000/posts';
  try {
    const response = await axios.get(url);
    posts.value = response.data;
  } catch (err) {
    console.error(err);
  }
}

onMounted(async () => {
  await getData();
});
</script>
