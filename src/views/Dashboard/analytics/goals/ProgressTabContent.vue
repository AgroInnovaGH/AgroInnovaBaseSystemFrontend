<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useGoalsStore } from './goals';

const store = useGoalsStore();
const { goals } = storeToRefs(store);

function randomColor(): string {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 50%)`;
}

const goalColors = computed(() => {
  const map: Record<number, string> = {};
  for (const goal of goals.value) {
    map[goal.id] = randomColor();
  }
  return map;
});
</script>

<template>
  <div class="bg-white p-6 rounded-xl shadow">
    <h2 class="text-xl font-bold mb-6 border-b border-gray-400 pb-3">
      In Progress
    </h2>

    <div v-if="goals.length === 0" class="text-center py-10 text-gray-500 italic">
      No goals in progress yet
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      <div
        v-for="goal in goals"
        :key="goal.id"
        class="flex flex-col items-center rounded-xl border border-dashed border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:shadow-green-300 p-3"
      >
        <div class="relative w-20 h-20 mb-4">
          <div class="absolute inset-1 rounded-full bg-gray-200"></div>

          <div
            class="absolute inset-1 rounded-full transition-all duration-1000 ease-out"
            :style="{
              background: `conic-gradient(
                ${goalColors[goal.id]} ${goal.id * 3.6}deg,
                transparent ${goal.id * 3.6}deg 360deg
              )`
            }"
          ></div>

          <div class="absolute inset-3 rounded-full bg-white flex items-center justify-center">
            <span class="text-lg text-sm font-medium text-gray-600">
              {{ goal.id }}%
            </span>
          </div>
        </div>

        <div class="text-center font-bold text-sm text-gray-800 mb-4 px-2">
          {{ goal.goalLabel }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
