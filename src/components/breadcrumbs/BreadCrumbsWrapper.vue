<script setup lang="ts">
import { useRoute } from 'vue-router';
import { menuItems } from '../Navbar/navData';

const { name } = useRoute();
const currentDate = new Date().toDateString();

const mainLabel = menuItems.find((item) =>
  item.children?.map((child) => child.label.toLowerCase() == name?.toString().toLowerCase()),
);
</script>

<template>
  <div
    class="min-h-16 border-b border-b-gray-200 bg-(--primary-color) flex items-center justify-between px-8"
  >
    <div class="routes flex gap-4 items-center">
      <h3 class="text-[1.1rem] mr-2 font-bold capitalize">
        {{ mainLabel?.id }} <span class="opacity-10">|</span>
      </h3>
      <RouterLink class="hover:text-blue-400" to="/admin/">Home </RouterLink> >
      <p class="opacity-40 capitalize">{{ name || 'Route name does not match label' }}</p>
    </div>

    <div class="time_stamp border border-gray-400 rounded-full text-[.8rem] py-2 px-3">
      {{ currentDate }}
    </div>
  </div>
</template>
