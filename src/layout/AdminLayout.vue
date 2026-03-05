<template>
  <div class="min-h-screen">
    <div>
      <Header />
      <Navbar />
    </div>

    <div :class="`main ${navIsExpanded ? 'expanded' : ''}`">
      <div class="sidebar_space max-[992px]:hidden"></div>
      <main class="mt-(--header_height) min-h-screen bg-(--alt-primary-color)">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar/NavigationBar.vue';
import Header from '@/components/header/Header.vue';
import { useComponentsState } from '@/stores/components_state';
import { storeToRefs } from 'pinia';

const store = useComponentsState();
const { navIsExpanded } = storeToRefs(store);
</script>

<style scoped>
.main {
  @media (width > 922px) {
    display: grid;
    grid-template-columns: 80px 1fr;
    transition: grid-template-columns 500ms;

    &.expanded {
      grid-template-columns: 20% 1fr;
    }
  }
}
</style>
