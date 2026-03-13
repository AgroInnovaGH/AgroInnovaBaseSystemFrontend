<template>
  <div class="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-10 rounded-[20px] mt-30 items-start">
    <GoalsTabContent />
    <ProgressTabContent />
    <CompletedTabContent />
  </div>
</template>

<script setup lang="ts">
import GoalsTabContent from './GoalsTabContent.vue';
import ProgressTabContent from './ProgressTabContent.vue';
import CompletedTabContent from './CompletedTabContent.vue';
</script>


