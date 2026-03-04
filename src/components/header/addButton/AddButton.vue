<script setup lang="ts">
import { headerData } from '../composables/headerData'
import AddButtonItems from './AddButtonItems.vue'
</script>

<template>
  <!-- Div 2a: + Circle Button -->
  <div class="relative group">
    <button
      class="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
      aria-label="Add new / Mega options"
    >
      <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
      </svg>
    </button>

    <div
      class="absolute left-0 top-full mt-3 w-60 bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-left"
    >
      <div class="py-1">
        <!-- Other menu items (Request, Deliveries, Farms, etc.) -->
        <AddButtonItems v-for="item in headerData" :item="item" />
      </div>
    </div>
  </div>
</template>

