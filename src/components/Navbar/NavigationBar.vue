<script setup lang="ts">
import { useComponentsState } from '@/stores/components_state'
import ListItems from './ListItems.vue'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import NavHeader from './NavHeader.vue'

const store = useComponentsState()
const { toggleNavbar } = store
const { navIsExpanded } = storeToRefs(store)

const showHoverSideBar = ref(false)
</script>

<template>
  <aside
    class="sidebar"
    @mouseover="!navIsExpanded ? (showHoverSideBar = true) : null"
    @mouseleave="showHoverSideBar = false"
  >
    <NavHeader />

    <!-- for large screen only -->
    <ListItems :class="`hover_side_nav ${showHoverSideBar ? 'active' : ''}`" />
    <ListItems />
  </aside>
  <!-- for mobile screena only -->
  <div :class="`mobile_screen_sidebar ${navIsExpanded ? 'expanded' : ''}`">
    <NavHeader @click="toggleNavbar(false)" class="mobile_nav_header" />
    <div class="mobile_nav_listitems_wrapper">
      <ListItems class="mobile_nav_listItems" />
      <div class="space_to_close_sidebar bg-black opacity-10" @click="toggleNavbar(false)"></div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  --shadow-width: 0.2;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  box-shadow: 0px 4px 4px rgba(0 0 0 / var(--shadow-width));

  @media (width < 992px) {
    display: none;
  }
}

/* for mobile screens only */
.mobile_screen_sidebar {
  display: none;

  @media (width < 992px) {
    display: block;
    position: fixed;
    inset: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    translate: -100% 0;
    transition: translate 200ms;

    &.expanded {
      translate: 0 0;
    }

    .mobile_nav_listitems_wrapper {
      display: grid;
      grid-template-columns: 70% 30%;
    }

    .mobile_nav_listItems {
      height: 100vh;
      padding-top: 1rem;
      box-shadow: 0px 4px 4px rgba(0 0 0 / 0.4);
    }
  }
}
/* for large screens only  */
.hover_side_nav {
  position: fixed;
  translate: var(--slide_to_view, -100%) 0;
  left: 0;
  width: 300px;
  top: 90px;
  overflow-y: scroll;
  height: 100vh;
  background-color: white;
  transition: translate 500ms;
  box-shadow: 0px 4px 4px rgba(0 0 0 / var(--shadow-width));

  &.active {
    --slide_to_view: 0;
    display: block;
  }
}
</style>
