<template>
  <div>
    {{ result }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const result = ref([]);

async function getData() {
  const url = 'http://127.0.0.1:5000/';
  try {
    const response = await axios.get(url);
    result.value = response.data;
  } catch (err) {
    console.error(err);
  }
}

onMounted(async () => {
  await getData();
});
</script>
