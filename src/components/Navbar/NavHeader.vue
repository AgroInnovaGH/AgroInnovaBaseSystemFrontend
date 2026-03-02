<script setup lang="ts">
import { useComponentsState } from '@/stores/components_state';
import { storeToRefs } from 'pinia';
import router from '@/router';

const store = useComponentsState();
const { toggleHoverNavbarState } = store;
const { navIsExpanded } = storeToRefs(store);
</script>
<template>
  <div
    @mouseover="!navIsExpanded ? toggleHoverNavbarState(true) : null"
    @mouseleave="toggleHoverNavbarState(false)"
    class="sidebar-header border-r border-r-gray-200 border-b-gray-200 cursor-pointer flex items-center justify-center"
  >
    <figure class="w-max larger_screens_logo max-[992px]:hidden" @click="router.push('/admin')">
      <img
        class="w-[inherit] h-10"
        v-if="!navIsExpanded"
        src="../../assets/akokomarket.png"
        alt="Akoko Market Logo"
      />
      <img
        class="w-[inherit] h-10"
        v-if="navIsExpanded"
        src="../../assets/akokologo.png"
        alt="Akoko Logo"
      />
    </figure>

    <figure class="w-max mobile_screen_logo min-[992px]:hidden">
      <img src="../../assets/akokomarket.png" alt="Akoko Market Logo" class="w-[inherit] h-10" />
    </figure>
  </div>
</template>
