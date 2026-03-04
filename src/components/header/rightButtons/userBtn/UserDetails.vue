<template>
   <div class="relative">
        <IconUserCircle class="h-12 w-12 rounded-full object-cover" />
        <span class="absolute bottom-0 right-0 h-4 w-4 bg-green-500 rounded-full border border-[#0f172a]">
        </span>
      </div>
      <div>
        <p class="text-black font-semibold flex items-center gap-2">
          Alexandra Della
          <span class="bg-green-600/30 text-green-500 text-xs px-2 py-0.5 rounded-full font-medium">PRO</span>
        </p>
        <p class="text-sm text-gray-400 mt-0.5">alex@example.com</p>
        </div>
</template>
<script setup lang="ts">
import { IconUserCircle } from '@tabler/icons-vue';

</script>
