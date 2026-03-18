<script lang="ts" setup>
import { toRefs } from 'vue'
import type { HeaderData } from '../composables/headerData'

const prop = defineProps<{
  item: HeaderData
}>()

const { item } = toRefs(prop)
const { label, icon, children } = item.value
</script>

<template>
  <div :class="`relative   ${item.children ? 'dropdown_parent' : ''}`">
    <a
      href="#"
      class="flex w-full items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition"
    >
      <div class="flex items-center gap-4 text-black">
        <component :is="icon" class="text-green-800" />
        {{ label }}
      </div>
      <span v-if="item.children" class="arrow">▼</span>
    </a>
    <!-- Storage dropdown -->

    <div class="dropdown">
      <div v-if="item.children" class="py-1">
        <RouterLink
          v-for="item in children"
          :key="item.label"
          class="block px-5 py-3 text-black hover:bg-slate-200 transition"
          :to="item.to"
          >{{ item.label }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown_parent:hover .dropdown {
  display: block;
}

.dropdown {
  position: absolute;
  background-color: white;
  width: 200px;
  top: 0;
  right: -84%;
  min-height: 10rem;
  display: none;
  border: 1px solid #c5bfbfab;
  border-radius: 15px;
}

.dropdown_parent .arrow {
  margin-left: auto;
  font-size: 0.5rem;
  transition: transform 0.25s ease;
  color: var(--accent-color);
}

.dropdown_parent:hover .arrow {
  transform: rotate(-90deg);
}
</style>


