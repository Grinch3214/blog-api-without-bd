<template>
  <FormPost
    button-name="Edit Post"
    title="Edit Post"
    :post-data="singlePost"
    @form-data="formData"
  />
</template>

<script setup lasng="ts">
import FormPost from '@/components/FormPost.vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const router = useRouter();
const route = useRoute();

const url = 'http://127.0.0.1:5000/posts';

const singlePost = ref({});

function homePage() {
  router.push('/');
}

async function formData(data) {
  const res = await updateSinglePost(data, route.params.id);
  if (res) {
    homePage();
  }
}

async function getSinglePost(id) {
  try {
    const response = await axios.get(`${url}/${id}`);
    singlePost.value = response.data;
    return response;
  } catch (err) {
    console.error(err);
  }
}

async function updateSinglePost(body, id) {
  try {
    const response = await axios.patch(`${url}/${id}`, body);
    return response;
  } catch (err) {
    console.error(err);
  }
}

onMounted(async () => {
  await getSinglePost(route.params.id);
});
</script>
