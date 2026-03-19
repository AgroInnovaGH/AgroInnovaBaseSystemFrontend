<script setup lang="ts">
import { useGoalsStore } from './goals';
import { computed } from 'vue'

const store = useGoalsStore();
const completedGoals = computed(() =>
store.goals.filter(goal => goal.id === 100 )
);
</script>

<template>
  <div class="bg-white p-6 rounded-xl border border-gray-200 p-5">
    <h2 class="text-xl font-bold mb-4">Completed</h2>

    <div v-if="completedGoals.length === 0" class="text-gray-500">No completed goals yet</div>

    <ul class="space-y-2">
      <li
        v-for="goal in completedGoals"
        :key="goal.id"
        class="p-3 bg-green-50 rounded flex items-center gap-2"
      >
        <span class="text-green-600 font-bold">✓</span>
        {{ goal.goalLabel  }}
      </li>
    </ul>
  </div>
</template>
