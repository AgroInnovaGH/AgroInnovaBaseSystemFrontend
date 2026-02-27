<script setup lang="ts">
import { ref, toRefs } from 'vue'
import type { NavItem } from './navData'

const openMenu = ref<string | null>(null) // 'users', 'content', 'settings', null, etc.

function toggleMenu(menu: string) {
  // If clicking the already open menu → close it
  if (openMenu.value === menu) {
    openMenu.value = null
  } else {
    // Open the clicked one (automatically closes any previous one)
    openMenu.value = menu
  }
}

const props = defineProps<{
  item: NavItem
}>()

const { item } = toRefs(props)
const { label, children, id } = item.value
</script>

<template>
  <li>
    <button
      class="nav-item dropdown-toggle"
      :class="{ active: openMenu === id }"
      @click="toggleMenu(id)"
    >
      <span class="icon">
        <component :is="item.icon" />
      </span>
      {{ label }}
      <span v-if="item.children" class="arrow">▼</span>
    </button>

    <ul v-if="item.children" class="dropdown-menu" :class="{ open: openMenu === id }">
      <li v-for="child in children" :key="child.label">
        <RouterLink :to="child.to" class="dropdown-item"> {{ child.label }} </RouterLink>
      </li>
    </ul>
  </li>
</template>

<style scoped>
li {
  font-size: 0.9rem;
}

.nav-item,
.dropdown-toggle {
  --list_btn_padding: 12px 24px;
  width: 100%;
  padding: var(--list_btn_padding);
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-item:hover,
.dropdown-toggle:hover {
  background: var(--alt-primary-color);
}

.nav-item.router-link-active,
.dropdown-toggle.active {
  background: var(--alt-primary-color);
}

.dropdown-toggle .arrow {
  margin-left: auto;
  font-size: 0.5rem;
  transition: transform 0.25s ease;
  color: var(--accent-color);
}

.dropdown-toggle.active .arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.28s ease-out;
}

.dropdown-menu.open {
  max-height: 400px; /* ← increase if you have many items */
  transition: max-height 0.32s ease-in;
  border-bottom: 1px ridge rgba(0 0 0 / 0.1);
}

.dropdown-item {
  --link_size: 0.8rem;
  display: block;
  padding: 0.5rem 3rem;
  font-size: var(--link_size);
}

.dropdown-item:hover,
.dropdown-item.router-link-active {
  background: var(--alt-primary-color);
}

.icon {
  font-size: 1rem;
  text-align: center;

  > * {
    width: 40px;
    color: var(--accent-color);
  }
}
</style>
