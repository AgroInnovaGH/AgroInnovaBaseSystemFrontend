<script setup lang="ts">
import NavigationBar from '@/components/Navbar/NavigationBar.vue'
import { useComponentsState } from '@/stores/components_state'
import { storeToRefs } from 'pinia'
import { IconArrowNarrowLeft, IconMenu2 } from '@tabler/icons-vue'

const store = useComponentsState()
const { navIsExpanded } = storeToRefs(store)
const { toggleNavbar } = useComponentsState()
</script>

<template>
  <div :class="`${navIsExpanded ? 'dashboard expanded' : 'dashboard'}`">
    <NavigationBar />

    <div class="dashboard-content">
      <div class="top_arrows_button p-5">
        <button class="nav_toggle_btn" v-if="navIsExpanded" @click="toggleNavbar(false)">
          <IconArrowNarrowLeft color="var(--accent-color)" size="30" class="cursor-pointer" />
        </button>
        <button class="nav_toggle_btn" v-else @click="toggleNavbar(true)">
          <IconMenu2 color="var(--accent-color)" size="30" class="cursor-pointer" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 80px 1fr;
  transition: grid-template-columns 500ms;

  &.expanded {
    grid-template-columns: 20% 1fr;
  }
}
</style>
