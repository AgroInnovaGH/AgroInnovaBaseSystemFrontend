<script setup lang="ts">

</script>

<template>
  <div class="relative group hover:bg-green-200 w-9 h-9 flex items-center justify-center rounded-full transition">
              <button class="relative text-gray-300 hover:text-white transition" aria-label="Notifications">
                <svg class="h-6 w-6 text-gray-500 hover:text-green-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span class="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
              </button>
              <div class="absolute right-0 top-full mt-3 w-96 bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-right overflow-hidden">
                <div class="p-4 border-b border-slate-200 flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-black">Notifications</h3>
                  <button class="text-green-500 text-sm hover:underline">✓ Make as Read</button>
                </div>
                <div class="max-h-96 overflow-y-auto">
                  <div class="p-4 border-b border-slate-200 flex items-start gap-4 hover:bg-slate-200">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="" class="h-10 w-10 rounded-full object-cover" />
                    <div class="flex-1">
                      <p class="text-sm text-black">Malanie Harvey We should talk about that at lunch!</p>
                      <p class="text-xs text-gray-500 mt-1">2 minutes ago</p>
                    </div>
                    <button class="cursor-pointer text-red-500 hover:text-red-400">×</button>
                  </div>
                  <div class="p-4 border-b border-slate-200 flex items-start gap-4 hover:bg-slate-200">
                    <img src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?semt=ais_user_personalization&w=740&q=80" alt="" class="h-10 w-10 rounded-full object-cover" />
                    <div class="flex-1">
                      <p class="text-sm text-black">Valentine Maytine You can download the latest invoices....</p>
                      <p class="text-xs text-gray-500 mt-1">38 minutes ago</p>
                    </div>
                    <button class="cursor-pointer text-red-500 hover:text-red-400">×</button>
                  </div>
                  <div class="p-4 border-b border-slate-200 flex items-start gap-4 hover:bg-slate-200">
                    <img src="https://media.istockphoto.com/id/1455343282/photo/portrait-of-an-indian-man.jpg?s=612x612&w=0&k=20&c=v0FUUguRBJLKtsSW2kFwVqqieKfTT7ULKHpe6n7MwvE=" alt="" class="h-10 w-10 rounded-full object-cover" />
                    <div class="flex-1">
                      <p class="text-sm text-black">Archie Cantones Don't forget to pickup Jeremy after school!</p>
                      <p class="text-xs text-gray-500 mt-1">50 minutes ago</p>
                    </div>
                    <button class="cursor-pointer text-red-500 hover:text-red-400">×</button>
                  </div>
                  <!-- Add more notification items -->
                </div>
                <div class="p-4 text-center text-sm text-gray-400 border-t border-slate-200">
                  All Notifications
                </div>
              </div>
            </div>
</template>
