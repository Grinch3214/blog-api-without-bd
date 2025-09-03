<template>
  <FormPost button-name="Edit Post" title="Edit Post" @form-data="formData" />
</template>

<script setup lasng="ts">
import FormPost from '@/components/FormPost.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

// function homePage() {
//   router.push('/');
// }

async function formData(data) {
  console.log(data);
  // const res = await createNewPost(data);
  // if (res) {
  //   homePage();
  // }
}

// async function createNewPost(body) {
//   const url = 'http://127.0.0.1:5000/posts';
//   try {
//     const response = await axios.post(url, body);
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }
</script>
