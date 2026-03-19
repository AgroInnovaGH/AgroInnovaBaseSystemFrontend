<script setup lang="ts">
import { ref } from 'vue';
import { useGoalsStore, type Data } from './goals';
import MyModal from './MyModal.vue';
import { storeToRefs } from 'pinia';
// import { useToast } from 'vue3-toastify'


// const toast = useToast()

const store = useGoalsStore();

const { isActive } = storeToRefs(store);
const { toggleModal } = store;

const newGoalName = ref('');

const addGoal = () => {
  if (!newGoalName.value.trim()) return;
  store.addGoal(newGoalName.value.trim());
  // toast.success("Goal added successfully 🎉");
  newGoalName.value = '';
};

function showModal(value: Data) {
  data.value = value;
  toggleModal(true);
}

const data = ref<Data>({ id: 0, goalLabel: '' });

const { goals } = storeToRefs(store)
</script>

<template>
  <MyModal :data="data" v-if="isActive" />
  <div class="bg-white rounded-xl border border-gray-200 p-5">
    <h2 class="text-xl h-10 font-bold border-b border-gray-400 mb-4">Goals</h2>

    <form @submit.prevent class="flex mb-9">
      <input
        v-model="newGoalName"
        placeholder="New goal..."
        class="flex-1 border-none p-2 rounded-l w-50"
      />
      <button
        @click="addGoal"
        class="bg-green-500 hover:bg-green-600 cursor-pointer text-white px-2 py-2 rounded-r"
      >
        Add
      </button>
    </form>

    <ul class="space-y-3">
      <li
        v-for="goal in goals"
        :key="goal.id"
        class="p-3 hover:bg-gray-200 border border-gray-300 border-dashed rounded-full"
        @click="showModal(goal)"
      >
        {{ goal.goalLabel }}
      </li>
    </ul>
  </div>
</template>
