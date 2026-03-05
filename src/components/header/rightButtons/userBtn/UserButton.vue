<script setup lang="ts">
import { IconUser } from '@tabler/icons-vue';
import UserItems from './UserDropdown.vue';
</script>

<template>
  <div class="relative group">
    <button class="flex items-center focus:outline-none" aria-label="User menu">
      <div class="h-9 w-9 rounded-full overflow-hidden border-2 border-slate-600">
        <IconUser class="h-full w-full object-cover" />
      </div>
    </button>
    <div
      class="absolute right-0 top-full mt-3 w-90 bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-right overflow-hidden"
    >
      <UserItems />
    </div>
  </div>
</template>
