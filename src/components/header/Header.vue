<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="` bg-white nav_and_header_wrapper border-b border-b-gray-200 sticky top-0 left-0 z-50 w-full h-(--header-height) ${navIsExpanded ? 'expanded' : ''}`"
  >
    <NavHeader />
    <nav>
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center">
          <button
            class="cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
            v-if="navIsExpanded"
            @click="toggleNavbar(false)"
          >
            <IconMenu2 size="35" />
          </button>
          <button
            class="cursor-pointer rounded-full p-1 hover:bg-gray-100 transition-colors duration-200"
            v-if="!navIsExpanded"
            @click="toggleNavbar(true)"
          >
            <IconArrowNarrowRight size="35" />
          </button>
          <!-- Div 2: + button + Right icons with hover dropdowns -->
          <div class="hidden md:flex items-center gap-6 justify-between w-full h-20 px-4">
           <AddButton />
            <!-- Div 2b: Right icons with hover dropdowns -->
            <div class="hidden md:flex items-center gap-4 lg:gap-5 w-80 h-20 justify-between p-4">
              <!-- Search Dropdown -->
              <SearchButton />
              <!-- Language Dropdown -->
              <CountryButton />
              <!-- Notifications Dropdown -->
              <NotificationBtn />
              <!-- User Avatar Dropdown -->
              <UserButton />
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div
        v-if="mobileOpen"
        class="md:hidden bg-[#0f172a] border-t border-slate-700 px-4 py-5 space-y-4"
      >
        <!-- Simplified mobile menu – expand with your links/icons -->
        <p class="text-gray-400 text-center">Mobile navigation</p>
        <!-- You can copy some of the desktop items here in a vertical layout -->
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useComponentsState } from '@/stores/components_state';
import { IconArrowNarrowRight, IconMenu2, IconShareplay } from '@tabler/icons-vue';
import NavHeader from '../Navbar/NavHeader.vue';
import AddButton from './addButton/AddButton.vue';
import SearchButton from './rightButtons/SearchButton.vue';
import CountryButton from './rightButtons/countryBtn/CountryButton.vue';
import NotificationBtn from './rightButtons/NotificationBtn.vue';
import UserButton from './rightButtons/userBtn/UserButton.vue';

const store = useComponentsState();
const { toggleNavbar } = store;
const { navIsExpanded } = storeToRefs(store);

const mobileOpen = ref(false);
</script>

<style lang="css" scoped>
.search-tags span {
  border: 1px solid #c2bbbb;
  color: gray;
}

.search-tags span:hover {
  background-color: #e2e8f0;
  color: black;
}
.head {
  border-right: 1px solid #ccc8c88f;
}
.country button span {
  color: black;
}

.nav_and_header_wrapper {
  display: grid;
  grid-template-columns: 80px 1fr;
  transition: grid-template-columns 500ms;

  &.expanded {
    grid-template-columns: 20% 1fr;
  }
}
</style>
