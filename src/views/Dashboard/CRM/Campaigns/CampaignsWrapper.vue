<script setup lang="ts">
import ClosedCampaigns from './ClosedCampaigns.vue';
import CompletedCampaigns from './CompletedCampaigns.vue';
import UpcomingCampaigns from './UpcomingCampaigns.vue';
</script>
<template>
  <div class="grid items-start gap-4 min-[1400px]:grid-cols-3">
    <UpcomingCampaigns />
    <CompletedCampaigns />
    <ClosedCampaigns />
  </div>
</template>
