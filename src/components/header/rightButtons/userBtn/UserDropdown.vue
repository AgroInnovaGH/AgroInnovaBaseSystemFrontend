<script setup lang="ts">
import { userData } from '../../composables/userData'
import UserItems from './UserItems.vue';
import UserDetails from './UserDetails.vue'
</script>

<template>
  <div class="p-5 border-b border-slate-200 flex items-center gap-4">
    <UserDetails />
  </div>

    <ul class="py-2">
      <UserItems v-for="item in userData" :item="item" :key="item.label" />
    </ul>

</template>
