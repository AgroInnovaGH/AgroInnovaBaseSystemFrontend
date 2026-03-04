<script setup lang="ts">
import { toRefs } from 'vue'
import { type CountryData } from '../../composables/countryData';
const prop = defineProps<{
  item: CountryData
}>()
const {item} = toRefs(prop)
const {label } = item.value
</script>

<template>
  <button class="
          flex flex-row  items-center justify-center gap-3
          p-4 rounded-xl bg-gray-200 border border-gray-200
          hover:border-gray-300 hover:bg-gray-300
          transition-all duration-200 group/item
        ">
          <div class="w-20 h-8 rounded-full  flex flex-row items-center justify-center text-md ">
            {{ label }}
          </div>
        </button>
</template>
