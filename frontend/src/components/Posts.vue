<template>
  <div class="max-w-3xl mx-auto">
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-center text-3xl uppercase font-bold">All posts</h2>
      <button
        class="px-8 py-1.5 bg-indigo-950 text-white rounded-md cursor-pointer hover:bg-indigo-950/80 transition-colors"
        @click="createNewPost"
      >
        Create new post
      </button>
    </div>
    <div class="grid gap-6 py-6">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import axios from 'axios';
import Post from './Post.vue';
import { useRouter } from 'vue-router';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}
const router = useRouter();

const posts = ref<Post[]>([]);

function createNewPost() {
  console.log(router);
  router.push('/new-post');
}

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
