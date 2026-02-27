<script setup lang="ts">
import { useComponentsState } from '@/stores/components_state'
import { storeToRefs } from 'pinia'
import router from '@/router'

const store = useComponentsState()
const { navIsExpanded } = storeToRefs(store)
</script>
<template>
  <div class="sidebar-header">
    <figure class="cursor-pointer" @click="router.push('/admin')">
      <img v-if="!navIsExpanded" src="../../assets/akokoLogo.png" alt="" />
      <img v-if="navIsExpanded" src="../../assets/akokomarket.png" class="w-2.5" alt="" />
    </figure>
  </div>
</template>

<style scoped>
.sidebar-header {
  padding: 20px 1rem;
  border-bottom: 1px ridge rgba(0 0 0 / 0.1);

  figure {
    width: max-content;
    & img {
      width: inherit;
      height: 40px;
    }
  }
}
</style>
