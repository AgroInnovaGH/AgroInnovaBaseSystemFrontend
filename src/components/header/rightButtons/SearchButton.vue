<template>
  <div class="relative group hover:bg-green-200 w-9 h-9 flex items-center justify-center rounded-full transition"
  @mouseenter="searchHide.start()"
  @mouseleave="searchHide.cancel( )"
  >
              <button class="text-gray-500 hover:text-gray-400 transition" aria-label="Search">
                <IconSearch />
              </button>
              <div class="absolute right-0 top-full mt-3 w-100 bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-right overflow-hidden">
                <div class="p-4 border-b border-slate-200">
                  <div class="relative">
                    <input
                      type="text"
                      placeholder="Search...."
                      class="w-full text-black placeholder-gray-400 pl-10 pr-12 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
                    />
                    <svg class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-4.35-4.35M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                    </svg>
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">ESC</span>
                  </div>
                </div>
                <div class="p-4">
                  <p class="text-sm text-gray-400 mb-3">I'm searching for...</p>
                  <div class="flex flex-wrap gap-2 mb-6 search-tags subs">
                    <span class="px-3 py-1 text-gray-300 text-xs rounded-md">Projects</span>
                    <span class="px-3 py-1 text-gray-300 text-xs rounded-md">Leads</span>
                    <span class="px-3 py-1 text-gray-300 text-xs rounded-md">Contacts</span>
                    <span class="px-3 py-1 text-gray-300 text-xs rounded-md">Inboxs</span>
                    <span class="px-3 py-1 text-gray-300 text-xs rounded-md">Tasks</span>
                    <span class="px-3 py-1 text-gray-300 text-xs rounded-md">Customer</span>
                    <span class="px-3 py-1 text-gray-300 text-xs rounded-md">Notes</span>
                    <span class="px-3 py-1 text-gray-300 text-xs rounded-md">Storage</span>
                    <span class="px-3 py-1 text-gray-300 text-xs rounded-md">Calender</span>
                    <!-- add more -->
                  </div>
                  <p class="text-sm text-gray-400 mb-2">Recent 3</p>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between text-sm text-black hover:bg-slate-200 p-2 rounded">
                      <div class="flex items-center gap-3">
                        <div class="h-8 w-8 bg-slate-700 rounded"></div>
                        <div>
                          <p>CRM dashboard redesign</p>
                          <p class="text-xs text-gray-500">Home / project / crm</p>
                        </div>
                      </div>
                      <span class="text-gray-500"># /**</span>
                    </div>
                    <!-- more recent items -->
                  </div>
                </div>
              </div>
            </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { IconSearch } from '@tabler/icons-vue';
import { useHideWithDelay } from '../composables/useHideWithDelays';

const isSearchOpen = ref(false);
const searchHide = useHideWithDelay(isSearchOpen, 200)

</script>

<style scoped>
.subs span {
  border: 1px solid #bebcbc;
  color: gray;
}

.subs span:hover {
  background: #4fda3c93;
  color: #0d6805;
  cursor: pointer;
}
</style>



<!-- class="flex items-center justify-between px-5 py-3.5 text-gray-300 hover:bg-slate-200 transition border-b border-slate-200" -->
<!-- <div class="py-2">
                    <a
                      href="#"
                      class="flex items-center justify-between px-5 py-3.5 text-gray-300 hover:bg-slate-200 transition border-b border-slate-200"
                    >
                      <div class="flex items-center gap-3 text-black">
                        <span class="text-green-400 text-lg"
                          ><iconPointFilled class="text-green-400"
                        /></span>
                        Active
                      </div>
                      <span class="text-gray-500 text-sm">></span>
                    </a> -->
