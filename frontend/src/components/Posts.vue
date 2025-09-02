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
    <div class="grid gap-6 py-6" v-if="posts.length">
      <Post
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @delete="openModal"
      />
    </div>

    <div
      v-else
      class="py-6 text-center text-2xl font-medium uppercase min-h-48 flex items-center justify-center"
    >
      Create your first post
    </div>

    <NativeDialog
      v-model:isOpen="isModalOpen"
      title="Do you want delete this post?"
      @confirm="deletePostId"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import axios from 'axios';
import Post from './Post.vue';
import { useRouter } from 'vue-router';
import NativeDialog from './NativeDialog.vue';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}
const router = useRouter();

const posts = ref<Post[]>([]);
const isModalOpen = ref<boolean>(false);
const currentPostId = ref<number | null>(null);

function createNewPost() {
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

async function deletePostId() {
  const url = 'http://127.0.0.1:5000/posts';
  try {
    const response = await axios.delete(`${url}/${currentPostId.value}`);

    if (response.data) {
      const deletedId = response.data.deletedPost.id;
      posts.value = posts.value.filter((post) => post.id !== deletedId);
      currentPostId.value = null;
      isModalOpen.value = false;
    }
  } catch (err) {
    console.error(err);
  }
}

async function openModal(id) {
  isModalOpen.value = true;
  currentPostId.value = id;
}

onMounted(async () => {
  await getData();
});
</script>
