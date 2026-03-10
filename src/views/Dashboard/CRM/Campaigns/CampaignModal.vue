<script setup lang="ts">
import { toRefs } from 'vue';
import type { CampaignFields } from './types';
import { useCampaignsState } from '@/stores/campaigns_state';

const props = defineProps<{
  data: CampaignFields;
  typeOfCampaign: 'Upcoming' | 'Completed' | 'Cancelled';
}>();

const emit = defineEmits<{
  (event: 'close'): void;
}>();

const { day, month, personnel, time, title, date_color, description } = toRefs(props.data);

const store = useCampaignsState();
const { addToCancelledCampaigns, addToCompletedCampaigns } = store;
</script>
<template>
  <div class="modal_wrapper" @click.self="emit('close')">
    <div class="details_modal">
      <header class="details_header">
        <div>
          <p class="details_kicker">Campaign Details</p>
          <h2 class="details_title">{{ title }}</h2>
        </div>
        <span class="details_tag">{{ typeOfCampaign }}</span>
      </header>

      <div class="details_body">
        <div
          class="details_date"
          :style="`background-color: hsla(from ${date_color || 'green'} h s l / .2 )`"
        >
          <span class="details_day" :style="`color: ${date_color || 'green'}`">{{ day }}</span>
          <span class="details_month" :style="`color: ${date_color || 'green'}`">{{ month }}</span>
        </div>

        <dl class="details_grid">
          <div>
            <dt>Schedule</dt>
            <dd>{{ day }} {{ month }}</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{{ time }}</dd>
          </div>
          <div>
            <dt>Personnel</dt>
            <dd>{{ personnel }}</dd>
          </div>
        </dl>

        <section class="details_description">
          <h3>Description</h3>
          <p>{{ description }}</p>
        </section>
      </div>
      <div v-if="typeOfCampaign === 'Upcoming'" class="details_actions mt-4">
        <button
          class="details_action details_action--complete"
          type="button"
          @click="
            addToCompletedCampaigns(props.data);
            emit('close');
          "
        >
          Mark as completed
        </button>
        <button
          class="details_action details_action--cancel"
          type="button"
          @click="
            addToCancelledCampaigns(props.data);
            emit('close');
          "
        >
          Mark as cancelled
        </button>
      </div>
      <button class="details_close" type="button" @click="emit('close')">Close</button>
    </div>
  </div>
</template>

<style scoped>
.modal_wrapper {
  background-color: rgba(0 0 0 / 0.2);
  display: grid;
  position: fixed;
  inset: 0;
  place-items: center;
}

.details_modal {
  background-color: white;
  width: max(35%, 350px);
  min-height: 50vh;
  padding: 1.25rem;
  margin-inline: auto;
  border-radius: var(--radius-lg);
}

.details_header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.75rem;
}

.details_kicker {
  color: #6b7280;
  font-size: 0.85rem;
  margin-bottom: 0.2rem;
}

.details_title {
  color: #111827;
  font-size: 1.1rem;
  font-weight: 600;
}

.details_tag {
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  background-color: #f3f4f6;
  color: #4b5563;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.details_body {
  display: grid;
  gap: 1rem;
  padding-top: 1rem;
}

.details_date {
  width: 4rem;
  height: 4rem;
  border-radius: 0.6rem;
  display: grid;
  place-items: center;
  text-align: center;
  font-weight: 700;
}

.details_day {
  font-size: 1.2rem;
  line-height: 1;
}

.details_month {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
}

.details_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.8rem 1.2rem;
}

.details_grid dt {
  color: #9ca3af;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.details_grid dd {
  color: #374151;
  font-weight: 600;
  margin-top: 0.25rem;
}

.details_description h3 {
  color: #6b7280;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
}

.details_description p {
  color: #374151;
  line-height: 1.5;
}

.details_close {
  margin-top: 1.2rem;
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 0.6rem;
  padding: 0.6rem 1rem;
  color: #374151;
  background: #f9fafb;
  font-weight: 600;
  cursor: pointer;
}

.details_actions {
  display: flex;
  gap: 0.75rem;
}

.details_action {
  flex: 1;
  border: 1px solid transparent;
  border-radius: 0.6rem;
  padding: 0.55rem 0.9rem;
  font-weight: 600;
  cursor: pointer;
}

.details_action--complete {
  background: #ecfdf3;
  color: #0f766e;
  border-color: #bbf7d0;
}

.details_action--cancel {
  background: #fef2f2;
  color: #b91c1c;
  border-color: #fecaca;
}
</style>
