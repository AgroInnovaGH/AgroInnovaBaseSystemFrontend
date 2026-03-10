<script setup lang="ts">
import { ref } from 'vue';
import { IconCancel } from '@tabler/icons-vue';
import CampaignModal from './CampaignModal.vue';
import type { CampaignFields } from './types';
import { useCampaignsState } from '@/stores/campaigns_state';
import { storeToRefs } from 'pinia';

const selectedCampaign = ref<CampaignFields | null>(null);
const isModalOpen = ref(false);

const openCampaignModal = (campaign: CampaignFields) => {
  selectedCampaign.value = campaign;
  isModalOpen.value = true;
};

const closeCampaignModal = () => {
  isModalOpen.value = false;
  selectedCampaign.value = null;
};

const store = useCampaignsState();
const { cancelledCampaigns } = storeToRefs(store);
</script>

<template>
  <article class="campaigns-card bg-white rounded-(--radius) border border-gray-200">
    <header
      class="campaigns-card__header px-6 py-4 flex items-center justify-between border-b border-b-gray-200 mb-4"
    >
      <h3 class="text-gray-700 font-semibold">Cancelled Campaigns</h3>
      <button type="button" class="campaigns-card__menu" aria-label="Upcoming schedule menu">
        ...
      </button>
    </header>

    <div v-if="cancelledCampaigns.length == 0" class="text-center text-gray-600 text-[1rem]">
      No Cancelled Campaigns Yet
    </div>
    <div class="campaigns-card__list px-6 pb-4 space-y-3">
      <section
        v-for="campaign in cancelledCampaigns"
        :key="`${campaign.day}-${campaign.title}`"
        class="campaigns-card__item flex hover:bg-gray-200 items-center gap-4 p-3 rounded-md border border-gray-200 cursor-pointer"
        @click="openCampaignModal(campaign)"
      >
        <div
          :style="`background-color: hsla(from ${campaign.date_color || 'green'} h s l / .3 )`"
          class="campaigns-card__date grid place-items-center w-12 h-12 rounded-md text-center text-xs font-semibold"
        >
          <span
            :style="`color: ${campaign.date_color || 'green'}`"
            class="text-base leading-none"
            >{{ campaign.day }}</span
          >
          <span :style="`color:  ${campaign.date_color || 'green'}`" class="tracking-wide">{{
            campaign.month
          }}</span>
        </div>

        <div class="flex-1 min-w-0">
          <h4 class="text-gray-700 font-semibold text-sm truncate">{{ campaign.title }}</h4>
          <p class="text-gray-400 text-xs mt-1">{{ campaign.time }}</p>
        </div>

        <div class="flex gap-4 items-center">
          <h2 class="text-gray-600">{{ campaign.personnel }}</h2>
          <button type="button" class="campaigns-card__item-menu" aria-label="Campaign options">
            ...
          </button>
          <IconCancel class="text-red-700 w-5" />
        </div>
      </section>
    </div>

    <div class="campaigns-card__footer px-6 py-3 border-t border-gray-200">
      <h2
        type="button"
        class="campaigns-card__cta text-center text-gray-600 text-[1rem] tracking-wide font-semibold"
      >
        CANCELLED CAMPAIGNS
      </h2>
    </div>
  </article>

  <CampaignModal
    v-if="isModalOpen && selectedCampaign"
    :data="selectedCampaign"
    type-of-campaign="Cancelled"
    @close="closeCampaignModal"
  />
</template>

<style scoped>
.campaigns-card__menu,
.campaigns-card__item-menu {
  background: transparent;
  border: none;
  color: #9ca3af;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
}
</style>
