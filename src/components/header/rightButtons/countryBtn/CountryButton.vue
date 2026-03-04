<script setup lang="ts">
import { countryData } from '../../composables/countryData'
import CountryBtnItems from './CountryBtnItems.vue'
</script>

<template>
  <div class="relative group inline-block">

    <!-- Trigger button -->
    <button class="
      w-11 h-11 flex items-center justify-center rounded-full
     border border-gray-700 text-white text-2xl
      hover:bg-green-200 transition-colors cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-green-500/50
    ">
      🇬🇭
    </button>

    <!-- Dropdown content – appears on hover -->
    <div class="
      absolute right-0 top-full mt-2
      w-105 bg-white border border-gray-300 rounded-2xl
      shadow-2xl overflow-hidden
      opacity-0 invisible pointer-events-none
      group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
      transition-all duration-200 scale-95 group-hover:scale-100 origin-top-right
      z-50
    ">

      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-300">
        <div>
          <h3 class="text-lg font-semibold text-black">Select Language</h3><br/>
          <p class="text-sm text-black mt-0.5">12 languages available!</p>
        </div>
        <button class="
          w-12 h-12 flex items-center justify-center rounded-full
          text-gray-400 hover:text-black cursor-pointer hover:bg-gray-200
          transition-colors text-xl font-medium
        ">
          +
        </button>
      </div>

      <!-- Grid of languages -->
      <div class="grid grid-cols-3 gap-4 p-6">
        <template v-for="item in countryData" :key="item.id">
          <CountryBtnItems :item="item" />
        </template>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* No extra scoped styles needed here – all in classes */
</style>
