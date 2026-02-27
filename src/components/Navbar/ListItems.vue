<script setup lang="ts">
import { menuItems } from './navData'
import ListButton from './ListButton.vue'
</script>
<template>
  <ul>
    <div class="flex item-center px-4 py-6">
      <small class="px-4 text-[10px] text-gray-500 font-bold uppercase tracking-[.15em]">Navigation</small>
    </div>
    <ListButton v-for="item in menuItems" :key="item.id" :item="item" />
  </ul>
</template>
