<script setup lang="ts">
import { computed, type Component } from 'vue';

interface Props {
  icon: Component;
  progress: number;
  label: string;
  progressColor?: string;
}

const props = defineProps<Props>();

const clampedProgress = computed(() => Math.max(0, Math.min(100, props.progress)));
</script>

<template>
  <article
    class="service-card h-fit p-4 rounded-[10px] bg-(--primary-color) border border-gray-200"
  >
    <div class="service-card__header flex gap-4 items-center">
      <div class="service-card__icon-wrap">
        <component :is="icon" :size="24" class="service-card__icon text-gray-600" />
      </div>

      <h3 class="service-card__label font-bold text-gray-600 flex-1">{{ label }}</h3>

      <button class="service-card__menu" type="button" aria-label="Service card menu">...</button>
    </div>

    <div
      class="service-card__meta mt-[2.7rem] flex justify-between items-center gap-4 text-gray-500 text-[.8rem]"
    >
      <span>{{ label }}</span>
      <span>{{ clampedProgress }}% Completed</span>
    </div>

    <div
      class="service-card__track mt-[0.7rem] h-0.75 w-full bg-(--alt-primary-color) overflow-hidden"
      role="progressbar"
      :aria-valuenow="clampedProgress"
      aria-valuemin="0"
      aria-valuemax="100"
     >
      <div
        class="service-card__fill h-full transition duration-200"
        :style="{ width: `${clampedProgress}%`, backgroundColor: `${progressColor || 'orange'}` }"
      />
    </div>
  </article>
</template>

<style scoped>
.service-card__icon-wrap {
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 9999px;
  border: 1px solid #d1d5db;
  background-color: #f3f4f6;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.service-card__menu {
  background: transparent;
  border: none;
  color: #6b7280;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
}
</style>
