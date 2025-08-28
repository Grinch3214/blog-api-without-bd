<template>
  <article class="grid gap-3 shadow-2xl rounded-md bg-gray-100 px-4 py-6">
    <h2 class="text-2xl font-medium uppercase">{{ post.title }}</h2>
    <p class="text-gray-600 text-sm font-medium">{{ formatDate(post.date) }}</p>

    <p class="text-justify">{{ post.content }}</p>

    <p class="text-gray-600 text-sm font-medium">{{ post.author }}</p>

    <div class="flex gap-2">
      <button
        class="px-8 py-1.5 bg-indigo-950 text-white rounded-md cursor-pointer hover:bg-indigo-950/80 transition-colors"
      >
        Edit
      </button>
      <button
        class="px-5 py-1.5 bg-red-700 text-white rounded-md cursor-pointer hover:bg-red-700/80 transition-colors"
      >
        Delete
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const props = defineProps<{
  post: Post;
}>();

function formatDate(isoDateString) {
  const date = new Date(isoDateString);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
</script>
