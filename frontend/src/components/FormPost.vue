<template>
  <form
    class="flex flex-col my-4 gap-3 shadow-2xl rounded-md bg-gray-100 px-4 py-6 max-w-3xl mx-auto text-indigo-950"
    @click.prevent
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
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const {
  title = 'Post',
  buttonName = 'Action',
  postData,
} = defineProps<{
  postData?: { title: string; content: string; author: string };
  title?: string;
  buttonName?: string;
}>();

const emit = defineEmits(['form-data']);

const router = useRouter();

const formData = ref({
  title: '',
  content: '',
  author: '',
});

function homePage() {
  router.push('/');
}

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
  homePage();
}
</script>

<style scoped>
@reference "tailwindcss";
.basic-input {
  @apply px-4 py-1.5 border border-indigo-950 rounded-md focus:bg-gray-200 focus:border-b-blue-900;
}
</style>
