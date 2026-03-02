<script setup lang="ts">
import { menuItems } from './navData';
import ListButton from './ListButton.vue';
import { useComponentsState } from '@/stores/components_state';
import { storeToRefs } from 'pinia';

const store = useComponentsState();
const { toggleHoverNavbarState } = store;
const { navIsExpanded } = storeToRefs(store);

defineProps({
  class_name: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <ul
    @mouseover="!navIsExpanded ? toggleHoverNavbarState(true) : null"
    @mouseleave="toggleHoverNavbarState(false)"
    :class="class_name"
  >
    <div class="flex item-center px-4 py-6">
      <small class="px-4 text-[10px] text-gray-500 font-bold uppercase tracking-[.15em]">{{
        navIsExpanded ? 'Navigation' : '....'
      }}</small>
    </div>
    <ListButton v-for="item in menuItems" :key="item.id" :item="item" />
  </ul>
</template>
