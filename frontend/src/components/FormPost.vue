<template>
  <div
    class="flex flex-col my-4 gap-3 shadow-2xl rounded-md bg-gray-100 px-5 py-6 max-w-3xl mx-auto text-indigo-950"
  >
    <h2 class="text-2xl font-medium">{{ title }}</h2>
    <input
      v-model="formData.title"
      type="text"
      name="title"
      class="basic-input"
      placeholder="Post title"
    />

    <textarea
      v-model="formData.content"
      name="description"
      class="basic-input min-h-24"
      placeholder="Post description"
    />

    <input
      v-model="formData.author"
      type="text"
      name="author"
      class="basic-input"
      placeholder="Post author"
    />

    <button
      class="px-8 self-start py-1.5 bg-indigo-950 text-white rounded-md cursor-pointer hover:bg-indigo-950/80 transition-colors"
      @click="formDataHandler"
    >
      {{ buttonName }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';

const {
  title = 'Post',
  buttonName = 'Action',
  postData,
} = defineProps<{
  postData?: {
    id?: number | string;
    title: string;
    content: string;
    author: string;
    date?: string;
  };
  title?: string;
  buttonName?: string;
}>();

const emit = defineEmits(['form-data']);

const formData = ref({
  title: '',
  content: '',
  author: '',
});

function clearFormData() {
  formData.value = {
    title: '',
    content: '',
    author: '',
  };
}

function formDataHandler() {
  if (
    !formData.value.title ||
    !formData.value.content ||
    !formData.value.author
  ) {
    return;
  }

  emit('form-data', formData.value);

  clearFormData();
}

watch(
  () => postData,
  (newData) => {
    if (newData && newData.id) {
      formData.value.title = newData.title;
      formData.value.content = newData.content;
      formData.value.author = newData.author;
    }
  },
  { immediate: true }
);
</script>

<style scoped>
@reference "tailwindcss";
.basic-input {
  @apply px-4 py-1.5 border border-indigo-950 rounded-md focus:bg-gray-200 focus:border-b-blue-900;
}
</style>
