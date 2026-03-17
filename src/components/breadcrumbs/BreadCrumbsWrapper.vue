<script setup lang="ts">
import { useRoute } from 'vue-router';
import { menuItems } from '../Navbar/navData';
import FilterButton from './FilterButton.vue';
import { computed } from 'vue';

const route = useRoute();
const name = route.name as string;
const currentDate = new Date().toDateString();

const parentItem = computed(() => {
  return menuItems.find(
    (item) => item.label === name || item.children?.some((child) => child.label === name),
  );
});
</script>

<template>
  <div
    class="min-h-16 border-b border-b-gray-200 bg-(--primary-color) flex items-center justify-between px-8"
  >
    <div class="routes flex gap-4 items-center">
      <h3 class="text-[1.1rem] mr-2 font-bold capitalize">
        {{ parentItem?.label }} <span class="opacity-10">|</span>
      </h3>
      <RouterLink class="hover:text-blue-400" to="/admin/">Home </RouterLink> >
      <p class="opacity-40 capitalize">{{ name || 'Route name does not match label' }}</p>
    </div>

    <div class="flex items-center gap-4">
      <div class="time_stamp border border-gray-400 rounded-(--radius) text-[.8rem] py-2 px-3">
        {{ currentDate }}
      </div>
      <FilterButton />
    </div>
  </div>
</template>
