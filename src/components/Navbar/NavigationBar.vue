<script setup lang="ts">
import { useComponentsState } from '@/stores/components_state';
import ListItems from './ListItems.vue';
import { storeToRefs } from 'pinia';
import NavHeader from './NavHeader.vue';

const store = useComponentsState();
const { toggleNavbar } = store;
const { navIsExpanded, showHoverSideBar } = storeToRefs(store);
</script>

<template>
  <aside
    :class="` ${navIsExpanded ? 'expanded' : ''} sidebar border-r border-r-gray-200  overflow-x-hidden overflow-y-scroll h-dvh`"
  >
    <!-- for large screen only -->
    <ListItems :class_name="`hover_side_nav ${showHoverSideBar ? 'visible' : ''}`" />
    <ListItems class_name="default_sidebar" />
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
  scrollbar-width: none;
  max-height: calc(100vh - var(--header-height));
  width: 80px;
  transition: width 200ms ease-in-out;

  &.expanded {
    width: 20%;
  }

  @media (width < 992px) {
    display: none;
  }
}

.expanded_listitems {
  @media (width > 992px) {
    width: 80px;
    overflow-x: hidden;
    transition: width 200ms ease-in-out;

    &.expanded {
      width: 20%;
    }

    &.shrink {
      width: 80px;
    }
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
      min-height: 100vh;
      padding-top: 1rem;
      box-shadow: 0px 4px 4px rgba(0 0 0 / 0.4);
    }
  }
}
/* for large screens only  */
.hover_side_nav {
  @media (width > 992px) {
    position: fixed;
    translate: var(--slide_to_view, -100%) 0;
    width: 300px;
    left: 0;
    top: var(--header-height);
    overflow-y: scroll;
    height: 100vh;
    transition: 500ms;
    scrollbar-width: none;
    border-right: 1px solid rgba(0 0 0 / 0.1);
    background-color: white;

    &.visible {
      --slide_to_view: 0;
    }
  }
}
</style>
