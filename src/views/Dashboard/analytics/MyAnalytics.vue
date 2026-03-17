<template>
  <div class=" relative bg-gray-100 contain p-7 z-2">
    <div class="section relative border bg-white border-slate-200 top-5 p-5">
      <div class="flex flex-row  items-center justify-between h-10">
        <div class="tracking-wide">
          <h1 class="font-bold text-l">Email Request</h1>
          <p class="text-sm text-gray-400">Email Campaign Request</p>
        </div>
        <button type="submit" class="btn text-[10px] font-bold" >VIEW ALLS</button>
      </div>
      <div class="mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        <AnalyticsCards v-for="item in analyticsData" :item="item" :key="item.label" />
      </div>
    </div>
    <div class="section relative border bg-white border-slate-200 top-20 p-7 ">
      <header class="flex justify-between border-b border-gray-300 p-2 mb-10">
        <div>
          <h1 class="font-extrabold">Visitors Overview</h1>
        </div>
        <div class="relative group">
      <button
        class="bg-gray-200 hover:bg-gray-300 px-[3px] py-[3px] cursor-pointer rounded-full"
      >
        <IconDotsVertical class="text-sm text-gray-500" />
      </button>

      <!-- Dropdown menu -->
      <div
        class="
          absolute right-0 top-5 mt-2 w-48 bg-white border border-slate-200
          rounded-xl shadow-2xl z-50
          opacity-0 scale-95 pointer-events-none
          group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
          transition-all duration-200 origin-top-right
        "
      >
        <div class="py-1 divide-y divide-gray-100 ">
          <DropDown v-for="item in chartData" :item="item" :key="item.label" />
        </div>
      </div>
     </div>
      </header>
      <LineChart />
    </div>
    <GoalsTab />
  </div>
</template>

<script setup lang="ts">
import { chartData } from './chart/chartData';
import { analyticsData } from './analyticsData';
import { IconDotsVertical } from '@tabler/icons-vue';
import AnalyticsCards from './AnalyticsCards.vue';
import LineChart from './chart/LineChart.vue';
import DropDown from './chart/DropDown.vue';
import GoalsTab from './goals/GoalsTab.vue';





</script>

<style lang="css" scoped>
.contain {
  min-height: 88vh;
}

.section {
  border-radius: 20px;
  box-shadow: 0 0 15px rgb(228, 224, 224);
  bottom: 5px;
}

.btn {
  border: 1px solid #beb7b7;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  font-family: sans-serif;
}
</style>
