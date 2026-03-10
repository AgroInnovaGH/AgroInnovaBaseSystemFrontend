<script setup lang="ts">
import { IconPencil, IconSend, IconShoppingBag, IconTag } from '@tabler/icons-vue';
import BreadCrumbsWrapper from '@/components/breadcrumbs/BreadCrumbsWrapper.vue';
import ServiceCard from './ServiceCard.vue';
import BarChart from './BarChart.vue';
import CampaignsWrapper from './Campaigns/CampaignsWrapper.vue';
</script>

<template>
  <BreadCrumbsWrapper />

  <div class="px-4 py-6 space-y-6">
    <div
      class="services grid gap-4 min-h-max min-[764px]:grid-cols-2 min-[1400px]:grid-cols-4 bg-(--alt-primary-color)"
    >
      <ServiceCard :icon="IconSend" :progress="10" label="Total Requests" />
      <ServiceCard :icon="IconTag" :progress="63" progress-color="red" label="Total Sales" />
      <ServiceCard
        :icon="IconShoppingBag"
        :progress="43"
        progress-color="blue"
        label="Total Buys"
      />
      <ServiceCard :icon="IconPencil" :progress="50" progress-color="green" label="Inputs" />
    </div>

    <BarChart />
    <CampaignsWrapper />
  </div>
</template>

<style scoped></style>
