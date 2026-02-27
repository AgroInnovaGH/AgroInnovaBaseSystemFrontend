<template>
  <div class="flex min-h-screen">
    <Header />
    <Navbar />

    <div class="flex-1 flex flex-col">
      <main class="flex-1 p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar/NavigationBar.vue";
import Header from "@/components/header/Header.vue";
</script>