<template>
  <div class="fixed inset-0 modal text-black z-1  flex justify-center items-center">
    <div class="bg-white   p-5 rounded-[30px]">
      <h1 class="text-xl font-bold border-b h-10 border-gray-400">{{ goalLabel }}</h1>
      <p class="text-sm mt-2 text-gray-600">Click remove to delete / remove specified goal</p>
      <div class="flex justify-center gap-5">
        <button @click="closeModal" class="mt-10 flex px-9 py-2 bg-green-500 cursor-pointer hover:bg-green-600 rounded-[10px] text-white font-bold"><IconCircleXFilled />Close</button>
        <button @click="removeGoal" class="mt-10 px-9 py-2  bg-red-500 cursor-pointer flex hover:bg-red-600 rounded-[10px] text-white font-bold"><IconTrashXFilled />Remove</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { Data } from './goals';
import { useGoalsStore } from './goals';
import { IconTrashXFilled, IconCircleXFilled } from '@tabler/icons-vue'
// import { useToast } from 'vue-Toastification'

// const toast = useToast()

const store = useGoalsStore()

const prop = defineProps<{
  data: Data;
}>();

const { id, goalLabel } = toRefs(prop.data);

const closeModal = () => {
  store.toggleModal(false)
}

const removeGoal = () => {
  store.removeGoal(id.value)
  store.toggleModal(false)
  // toast.error("Goal removed ")
}
</script>

<style scoped>
.modal {
  background: rgba(7, 7, 7, 0.3);
  backdrop-filter: blur(2px);
}

button {
  transition: 0.3s ease-in;
}

button:hover {
  transform: translate(0, -5px)
}
</style>
