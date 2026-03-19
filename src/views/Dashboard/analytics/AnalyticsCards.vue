<script setup lang="ts">
import { toRefs } from 'vue';
import type { AnalyticsData } from './analyticsData';

const prop = defineProps<{
  item: AnalyticsData
}>()

const { item } = toRefs(prop)
const { icon, label, subLabel } = item.value
</script>

<template>
  <div >
    <div class="bg-white rounded-xl w-full border border-dashed border-gray-300 p-6 text-center flex flex-col items-center justify-center">
      <div class=" text-4xl mb-3">
        <component
         :is="icon"
         :class="{
                'text-red-500': subLabel === 'Cancelled',
                'text-green-500': subLabel === 'Confirmed',
                'text-yellow-500':subLabel === 'Delivered',
                'text-purple-500' : subLabel === 'Returned',
                'text-blue-400': true,
              }"
          />
      </div>
      <div class="text-3xl font-bold text-gray-800">{{ label }}</div>
      <div class="text-sm text-gray-500 mt-1">{{ subLabel }}</div>
    </div>
  </div>
</template>



