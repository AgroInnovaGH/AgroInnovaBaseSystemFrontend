<script setup lang="ts">
import { toRefs } from 'vue';
import type { ChartData } from './chartData';


const prop = defineProps<{
  item: ChartData
}>()

const { item } = toRefs(prop)
const { icon, label } = item.value

</script>

<template>
  <div >
    <a
      href="#"
      class="flex w-full items-center justify-between px-5 py-5 text-gray-300 hover:bg-slate-200 transition"
    >
      <div class="flex items-center gap-4 text-black">
        <component 
        :is="icon" 
        :class="{
          'text-red-500': label === 'Deleted',
          'text-green-700': true
        }" />
        {{ label }}
      </div>
    </a>
  </div>
</template>