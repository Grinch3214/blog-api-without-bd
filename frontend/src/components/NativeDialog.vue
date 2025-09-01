<template>
  <dialog
    ref="dialogRef"
    class="backdrop:pointer-events-none backdrop:bg-black/50"
    @click="handleBackdropClick"
    @close="handleClose"
  >
    <div
      class="max-w-[450px] w-full fixed top-1/2 left-1/2 -translate-1/2 bg-white p-6 rounded-md"
    >
      <div class="flex items-start text-indigo-950">
        <h2 v-if="title" class="pr-2 text-xl font-medium">
          {{ title }}
        </h2>
        <button
          class="ml-auto w-8 h-8 rounded-md flex items-center justify-center cursor-pointer text-lg shrink-0 relative before:content-[''] before:w-3 before:h-[1px] before:bg-black after:content-[''] after:w-3 after:h-[1px] after:bg-black before:absolute after:absolute before:top-1/2 after:top-1/2 before:left-1/2 after:left-1/2 before:-translate-1/2 after:-translate-1/2 before:rotate-45 after:-rotate-45 hover:bg-gray-100"
          @click="close"
        ></button>
      </div>
      <p v-if="body" class="mt-4">{{ body }}</p>

      <div class="flex gap-2 items-center mt-4 justify-end">
        <button
          class="px-8 py-1.5 bg-indigo-950 text-white rounded-md cursor-pointer hover:bg-indigo-950/80 transition-colors"
          @click="confirmHandler"
        >
          {{ confirm }}
        </button>
        <button
          class="px-8 py-1.5 bg-red-700 text-white rounded-md cursor-pointer hover:bg-red-700/80 transition-colors"
          @click="close"
        >
          {{ cancel }}
        </button>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

const {
  isOpen,
  title,
  body,
  confirm = 'Apply',
  cancel = 'Cancel',
} = defineProps<{
  isOpen: boolean;
  title?: string;
  body?: string;
  confirm?: string;
  cancel?: string;
}>();

const emit = defineEmits(['update:isOpen', 'confirm']);

const dialogRef = ref<HTMLDialogElement>();

const close = () => {
  dialogRef.value?.close();
  emit('update:isOpen', false);
};

function confirmHandler() {
  emit('confirm', true);
}

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === dialogRef.value) {
    close();
  }
};

const handleClose = () => {
  emit('update:isOpen', false);
};

watch(
  () => isOpen,
  (newValue) => {
    if (newValue) {
      dialogRef.value?.showModal();
    } else {
      dialogRef.value?.close();
    }
  }
);

onMounted(() => {
  if (isOpen) {
    dialogRef.value?.showModal();
  }
});
</script>
