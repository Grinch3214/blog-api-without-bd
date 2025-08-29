<template>
  <FormPost
    button-name="Create Post"
    title="Create Post"
    @form-data="formData"
  />
</template>

<script setup lasng="ts">
import FormPost from './FormPost.vue';

function formData(data) {
  console.log(data);
}
</script>
