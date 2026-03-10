<script lang="ts" setup>
import { useComponentsState } from '@/stores/components_state';
import { IconFilter } from '@tabler/icons-vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';

const store = useComponentsState();
const { selectedFilter } = storeToRefs(store);
const { toggleFilter } = store;
const isFilterDialogActive = ref(false);

function selectFilter(value: string) {
  toggleFilter(value);
  isFilterDialogActive.value = false;
  const capitalizeSelectedFilter =
    selectedFilter.value.charAt(0).toUpperCase() + selectedFilter.value.slice(1);
  toast.success(`(${capitalizeSelectedFilter}) Filter applied`, {
    autoClose: 1000,
    hideProgressBar: true,
  });
}
</script>

<template>
  <div class="flex justify-end py-4 filter_wrapper">
    <button
      @click="isFilterDialogActive = !isFilterDialogActive"
      class="outline flex gap-2 outline-gray-500 px-4 py-2 rounded-(--radius) cursor-pointer text-gray-500"
    >
      <IconFilter />
      Filter
    </button>

    <ul :class="`filter_dialog ${isFilterDialogActive ? 'active' : ''}`">
      <li @click="selectFilter('weekly')">Weekly Sales</li>
      <li @click="selectFilter('monthly')">Monthly Sales</li>
      <li @click="selectFilter('annual')">Annual Sales</li>
    </ul>
  </div>
</template>

<style scoped>
.filter_wrapper {
  anchor-name: --filter_wrapper;
}

.filter_dialog {
  position: absolute;
  position-anchor: --filter_wrapper;
  top: anchor(bottom);
  background-color: var(--primary-color);
  box-shadow: 0px 4px 4px rgba(0 0 0 / 0.2);
  opacity: 0;
  pointer-events: none;
  transition: 200ms linear;

  & li {
    color: rgba(0, 0, 0, 0.548);
    padding: 1cqi 5cqi;
    &:hover {
      background-color: var(--alt-primary-color);
      cursor: pointer;
    }
  }

  &.active {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
