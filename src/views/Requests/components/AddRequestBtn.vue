<script lang="ts" setup>
import { IconPlus } from '@tabler/icons-vue';
import { useRoute } from 'vue-router';

const route = useRoute();
// getting the pathname of the request
const path = route.path;
const split = path.split('/');
const pathName = split[split.length - 1];

const name = route.name;
</script>
<template>
  <div class="flex justify-between items-center m-4">
    <div>
      <h2 class="table_title text-gray-800">{{ name }} Requests</h2>
      <p class="table_subtitle">Manage and track poultry financial requests and deliveries.</p>
    </div>
    <button class="bg-(--accent-color) rounded-(--radius) text-white w-fit flex items-center gap-2">
      <IconPlus :size="18" />
      <RouterLink :to="`/admin/create_request/${pathName}`"> Add Request </RouterLink>
    </button>
  </div>
</template>

<style scoped>
button:hover {
  background-color: hsla(from var(--accent-color) h s l / 0.9);
}

.table_title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.table_subtitle {
  color: #6b7280;
  font-size: 0.875rem;
}
</style>
