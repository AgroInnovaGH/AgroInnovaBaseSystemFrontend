<script setup lang="ts">
import { menuItems } from './navData'
import ListButton from './ListButton.vue'
</script>
<template>
  <ul>
    <ListButton v-for="item in menuItems" :key="item.id" :item="item" />
  </ul>
</template>
