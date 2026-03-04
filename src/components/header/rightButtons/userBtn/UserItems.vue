<script setup lang="ts">
import { toRefs } from 'vue'
import type { UserData } from '../../composables/userData'

const props = defineProps<{
  item: UserData
}>()

const { item } = toRefs(props)
const { label, icon, to } = item.value
</script>

<template>
  <li>
    <RouterLink :to="to" class="flex items-center justify-between px-5 py-3.5 text-gray-300 hover:bg-slate-200 transition border-b border-slate-200">
      <div class="flex items-center gap-3 text-black">
        <span class="text-green-400 text-lg"
            ><component
             :is="icon"
             :class="{
                'text-red-500': label === 'Logout',
                'text-green-500': label === 'Active',
                'text-yellow-500':label === 'Subscription',
                'text-gray-400': true 
              }"
             /></span>
            {{ label }}
        </div>
        <span v-if="item.children" class="text-gray-500 text-sm">></span>
    </RouterLink>
  </li>
</template>

<style scoped>

</style>
