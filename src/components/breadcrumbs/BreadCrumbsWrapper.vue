<script setup lang="ts">
import { useRoute } from 'vue-router';
import { routes } from './route_data';

const { path } = useRoute();

const foundLink = routes.find((item) => item.to == path);

const currentDate = new Date().toDateString();
</script>

<template>
  <div class="min-h-16 shadow flex items-center justify-between px-8">
    <div class="routes flex items-center">
      <h3 class="text-[1.1rem] mr-2 font-bold" v-if="foundLink">
        {{ foundLink.label }} <span class="opacity-10">|</span>
      </h3>
      <RouterLink
        :class="`mr-2 text-[.9rem] ${foundLink?.to == link.to ? '' : 'opacity-30'}`"
        v-for="(link, index) in routes"
        :key="link.label"
        :to="link.to"
        >{{ link.label }} {{ routes.length > index + 1 ? '>' : '' }}
      </RouterLink>
    </div>

    <div class="time_stamp border border-gray-400 rounded-full text-[.8rem] py-2 px-3">
      {{ currentDate }}
    </div>
  </div>
</template>
