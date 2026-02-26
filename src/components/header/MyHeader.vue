<template>
  <nav class="fixed h-20 top-0 left-0 right-0 z-50 bg-[#0f172a] border-b border-slate-200 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center">
        <!-- Div 1: Logo + Mobile Hamburger -->
        <div class="flex items-center gap-4 lg:gap-8 head w-80 h-20">
          <a href="/" class="text-xl md:text-2xl font-bold tracking-tight text-green-400">
            AkokoMarket
          </a>
          <button
            class="md:hidden text-gray-300 hover:text-white focus:outline-none"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle menu"
          >
            <svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Div 2: + button + Right icons with hover dropdowns -->
        <div class="hidden md:flex items-center gap-6 justify-between w-full h-20 px-4">
          <!-- Div 2a: + Circle Button -->
          <div class="relative group">
            <button
              class="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Add new / Mega options"
            >
              <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
              </svg>
            </button>

            <div class="absolute left-0 top-full mt-3 w-60 bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-left">
              <div class="py-1">
                <div class="relative"
                     @mouseenter="cancelHideDashboard(); showDashboard = true"
                     @mouseleave="startHideDashboard()">
            <a
              href="#"
              class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition"
            >
              <div class="flex items-center gap-4 text-black">
                <IconDeviceDesktopAnalytics class="text-gray-400" />
                Dashboard
              </div>
              <span class="text-gray-500 text-sm">></span>
            </a>

            <!-- Dashboard-specific dropdown (only on hover of Dashboard or its menu) -->
            <div
              class="absolute left-60 top-5 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-2xl transition-all duration-200 transform origin-top-left z-10"
              v-show="showDashboard"
              @mouseenter="cancelHideDashboard(); showDashboard = true"
              @mouseleave="startHideDashboard()"
            >
              <div class="py-1">
                <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">
                  CRM
                </a>
                <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">
                  Analytics
                </a>
              </div>
            </div>
          </div>

          <!-- Other menu items (Request, Deliveries, Farms, etc.) -->
          <div class="relative"
               @mouseenter="cancelHideReports(); showReports = true"
               @mouseleave="startHideReports()">
            <a href="#" class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition">
              <div class="flex items-center gap-4 text-black">
                <IconCast class="text-gray-400" />
                Reports
              </div>
              <span class="text-gray-500 text-sm">></span>
            </a>
            <!-- Reports dropdown -->
            <div
              class="absolute left-60 top-5 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-2xl transition-all duration-200 transform origin-top-left z-10"
              v-show="showReports"
              @mouseenter="cancelHideReports(); showReports = true"
              @mouseleave="startHideReports()"
            >
              <div class="py-1">
                <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">
                  Sales
                </a>
                <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">
                  Marketing
                </a>
                <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">
                  Operations
                </a>
              </div>
            </div>
          </div>

          <!-- ... add your remaining items: Deliveries, Farms, Processing, Storage, Messaging, Services, Users, Settings, Help Center ... -->


                <div class="relative"
                     @mouseenter="cancelHideRequest(); showRequest = true"
                     @mouseleave="startHideRequest()">
                  <a href="#" class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition">
                    <div class="flex items-center gap-4 text-black">
                      <IconSend class="text-gray-400" />
                      Request
                    </div>
                    <span class="text-gray-500 text-sm">></span>
                  </a>
                  <!-- Request dropdown -->
                  <div
                    class="absolute left-60 top-5 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-2xl transition-all duration-200 transform origin-top-left z-10"
                    v-show="showRequest"
                    @mouseenter="cancelHideRequest(); showRequest = true"
                    @mouseleave="startHideRequest()"
                  >
                    <div class="py-1">
                      <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">Buying</a>
                      <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">Selling</a>
                      <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">Akoko Sika</a>
                      <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">Inputs</a>
                    </div>
                  </div>
                </div>

                <a href="#" class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition">
                  <div class="flex items-center gap-4 text-black">
                    <IconTruckDelivery class="text-gray-400" />
                    Deliveries
                  </div>
                  <span class="text-gray-500 text-sm"></span>
                </a>

                <a href="#" class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition">
                  <div class="flex items-center gap-4 text-black">
                    <IconTractor class="text-gray-400" />
                    Farms
                  </div>
                  <span class="text-gray-500 text-sm"></span>
                </a>

                <a href="#" class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition">
                  <div class="flex items-center gap-4 text-black">
                    <IconRecycle class="text-gray-400" />
                    Processing
                  </div>
                  <span class="text-gray-500 text-sm"></span>
                </a>

                <div class="relative"
                     @mouseenter="cancelHideStorage(); showStorage = true"
                     @mouseleave="startHideStorage()">
                  <a href="#" class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition">
                    <div class="flex items-center gap-4 text-black">
                      <IconHomeShield class="text-gray-400" />
                      Storage
                    </div>
                    <span class="text-gray-500 text-sm">></span>
                  </a>
                  <!-- Storage dropdown -->
                  <div
                    class="absolute left-60 top-5 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-2xl transition-all duration-200 transform origin-top-left z-10"
                    v-show="showStorage"
                    @mouseenter="cancelHideStorage(); showStorage = true"
                    @mouseleave="startHideStorage()"
                  >
                    <div class="py-1">
                      <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">Chickens</a>
                      <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">Eggs</a>
                      <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">Maize</a>
                      <a href="#" class="block px-5 py-3 text-gray-700 hover:bg-slate-100 transition">Soybeans</a>
                    </div>
                  </div>
                </div>

                <a href="#" class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition">
                  <div class="flex items-center gap-4 text-black">
                    <IconMessageChatbot class="text-gray-400" />
                    Messaging
                  </div>
                  <span class="text-gray-500 text-sm"></span>
                </a>

                <a href="#" class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition">
                  <div class="flex items-center gap-4 text-black">
                    <IconWorld class="text-gray-400" />
                    Services
                  </div>
                  <span class="text-gray-500 text-sm"></span>
                </a>

                <a href="#" class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition">
                  <div class="flex items-center gap-4 text-black">
                    <IconUsers class="text-gray-400" />
                    Users
                  </div>
                  <span class="text-gray-500 text-sm"></span>
                </a>

                <a href="#" class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition">
                  <div class="flex items-center gap-4 text-black">
                    <IconSettings class="text-gray-400" />
                    Settings
                  </div>
                  <span class="text-gray-500 text-sm"></span>
                </a>

                <a href="#" class="flex items-center justify-between px-5 py-2 text-gray-300 hover:bg-slate-200 transition">
                  <div class="flex items-center gap-4 text-black">
                    <IconHeadset class="text-gray-400" />
                    Help Center
                  </div>
                  <span class="text-gray-500 text-sm"></span>
                </a>
              </div>
            </div>
          </div>

          <!-- Div 2b: Right icons with hover dropdowns -->
          <div class="hidden md:flex items-center gap-4 lg:gap-5 w-90 h-20 justify-between p-4">
            <!-- Search Dropdown -->
            <div class="relative group hover:bg-green-200 w-9 h-9 flex items-center justify-center rounded-full transition">
              <button class="text-gray-500 hover:text-gray-400 transition" aria-label="Search">
                <svg class="h-5 w-5 hover:text-green-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-4.35-4.35M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                </svg>
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
                  <div class="flex flex-wrap gap-2 mb-6 search-tags">
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

            <!-- Language Dropdown -->
            <div class="relative group hover:bg-green-200 w-9 h-9 flex items-center justify-center rounded-full transition">
              <button class="text-xl leading-none" aria-label="Language">🇺🇸</button>
              <div class="absolute right-0 top-full mt-3 w-96 bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-right">
                <div class="p-4 border-b border-slate-300">
                  <h3 class="text-lg font-semibold text-black">Select Language</h3>
                  <p class="text-sm text-gray-400">12 languages available!</p>
                </div>
                <div class="grid grid-cols-3 gap-3 p-4 country">
                  <button class="flex flex-row items-center gap-1 p-3 rounded-lg hover:bg-slate-200 transition border-dashed border-gray-500">
                    <span class="text-2xl rounded-full">🇸🇦</span>
                    <span class="text-sm text-black-300">Arabic</span>
                  </button>
                  <button class="flex flex-row items-center gap-1 p-3 rounded-lg hover:bg-slate-200 transition">
                    <span class="text-2xl rounded-full">🇮🇳</span>
                    <span class="text-sm text-gray-300">India</span>
                  </button>
                  <button class="flex flex-row items-center gap-1 p-3 rounded-lg hover:bg-slate-200 transition">
                    <span class="text-2xl rounded-full">🇨🇳</span>
                    <span class="text-sm text-gray-300">Chinese</span>
                  </button>
                  <button class="flex flex-row items-center gap-1 p-3 rounded-lg hover:bg-slate-200 transition">
                    <span class="text-2xl rounded-full">🇩🇪</span>
                    <span class="text-sm text-gray-300">German</span>
                  </button>
                  <button class="flex flex-row items-center gap-1 p-3 rounded-lg hover:bg-slate-200 transition">
                    <span class="text-2xl rounded-full">🇹🇭</span>
                    <span class="text-sm text-gray-300">Thai</span>
                  </button>
                  <button class="flex flex-row items-center gap-1 p-3 rounded-lg hover:bg-slate-200 transition">
                    <span class="text-2xl rounded-full">🇵🇹</span>
                    <span class="text-sm text-gray-300">Portugese</span>
                  </button>
                  <button class="flex flex-row items-center gap-1 p-3 rounded-lg hover:bg-slate-200 transition">
                    <span class="text-2xl rounded-full">🇳🇱</span>
                    <span class="text-sm text-gray-300">Dutch</span>
                  </button>
                  <button class="flex flex-row items-center gap-1 p-3 rounded-lg hover:bg-slate-200 transition">
                    <span class="text-2xl rounded-full ">🇬🇭</span>
                    <span class="text-sm text-gray-300">Twi</span>
                  </button>
                  <button class="relative flex flex-row items-center gap-1 p-3 rounded-lg bg-slate-300">
                    <span class="text-2xl rounded-full flag">🇺🇸</span>
                    <span class="text-sm text-gray-300">English</span>
                    <svg class="absolute top-1 right-1 h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <!-- add more languages -->
                </div>
              </div>
            </div>

            <!-- Timesheets Dropdown -->
            <div class="relative group hover:bg-green-200 w-7 h-7 flex items-center justify-center rounded-full transition">
              <button class="text-gray-300 hover:text-white transition" aria-label="Timesheets">
                <svg class="h-6 w-6 text-gray-500 hover:text-green-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
              </button>
              <div class="absolute right-0 top-full mt-3 w-96 bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-right p-5 text-center">
                <div class="border-b border-slate-200 flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-black mb-1">Timesheets</h3>
                  <p class="text-sm text-green-400 mb-4">3 Upcoming</p>
                </div>
                <svg class="h-16 w-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-gray-400 mb-6">No started timers found yet!</p>
                <button class="bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-blue-400 transition hover:bg-slate-400 transition border-b border-slate-800">
                  STARTED TIMER
                </button>
                <p class="mt-6 text-sm text-gray-500">All Timesheets</p>
              </div>
            </div>

            <!-- Notifications Dropdown -->
            <div class="relative group hover:bg-green-200 w-9 h-9 flex items-center justify-center rounded-full transition">
              <button class="relative text-gray-300 hover:text-white transition" aria-label="Notifications">
                <svg class="h-6 w-6 text-gray-500 hover:text-green-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span class="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">3</span>
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
                    <button class="text-red-500 hover:text-red-400">×</button>
                  </div>
                  <div class="p-4 border-b border-slate-200 flex items-start gap-4 hover:bg-slate-200">
                    <img src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?semt=ais_user_personalization&w=740&q=80" alt="" class="h-10 w-10 rounded-full object-cover" />
                    <div class="flex-1">
                      <p class="text-sm text-black">Valentine Maytine You can download the latest invoices....</p>
                      <p class="text-xs text-gray-500 mt-1">38 minutes ago</p>
                    </div>
                    <button class="text-red-500 hover:text-red-400">×</button>
                  </div>
                  <div class="p-4 border-b border-slate-200 flex items-start gap-4 hover:bg-slate-200">
                    <img src="https://media.istockphoto.com/id/1455343282/photo/portrait-of-an-indian-man.jpg?s=612x612&w=0&k=20&c=v0FUUguRBJLKtsSW2kFwVqqieKfTT7ULKHpe6n7MwvE=" alt="" class="h-10 w-10 rounded-full object-cover" />
                    <div class="flex-1">
                      <p class="text-sm text-black">Archie Cantones Don't forget to pickup Jeremy after school!</p>
                      <p class="text-xs text-gray-500 mt-1">50 minutes ago</p>
                    </div>
                    <button class="text-red-500 hover:text-red-400">×</button>
                  </div>
                  <!-- Add more notification items -->
                </div>
                <div class="p-4 text-center text-sm text-gray-400 border-t border-slate-200">
                  All Notifications
                </div>
              </div>
            </div>

            <!-- User Avatar Dropdown -->
            <div class="relative group">
              <button class="flex items-center focus:outline-none" aria-label="User menu">
                <div class="h-9 w-9 rounded-full overflow-hidden border-2 border-slate-600">
                  <IconUser class="h-full w-full object-cover" />
                </div>
              </button>
              <div class="absolute right-0 top-full mt-3 w-90 bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-right overflow-hidden">
                <!-- Profile Header -->
                <div class="p-5 border-b border-slate-200 flex items-center gap-4">
                  <div class="relative">
                    <IconUserCircle class="h-12 w-12 rounded-full object-cover" />
                    <span class="absolute bottom-0 right-0 h-4 w-4 bg-green-500 rounded-full border-1 border-[#0f172a]"></span>
                  </div>
                  <div>
                    <p class="text-black font-semibold flex items-center gap-2">
                      Alexandra Della
                      <span class="bg-green-600/30 text-green-500 text-xs px-2 py-0.5 rounded-full font-medium">PRO</span>
                    </p>
                    <p class="text-sm text-gray-400 mt-0.5">alex@example.com</p>
                  </div>
                </div>

                <!-- Menu Items -->
                <div class="py-2">
                  <a href="#" class="flex items-center justify-between px-5 py-3.5 text-gray-300 hover:bg-slate-200 transition border-b border-slate-200">
                    <div class="flex items-center gap-3 text-black">
                      <span class="text-green-400 text-lg"><iconPointFilled class="text-green-400" /></span>
                      Active
                    </div>
                    <span class="text-gray-500 text-sm">></span>
                  </a>

                  <a href="#" class="flex items-center justify-between px-5 py-3.5 text-gray-300 hover:bg-slate-200 transition border-b border-slate-200">
                    <div class="flex items-center gap-3 text-black">
                      <span class="text-yellow-400 text-lg">$</span>
                      Subscriptions
                    </div>
                    <span class="text-gray-500 text-sm">></span>
                  </a>

                  <a href="#" class="flex items-center justify-between px-5 py-3.5 text-gray-300 hover:bg-slate-200 transition  border-slate-200">
                    <div class="flex items-center gap-3 text-black">
                      <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Profile Details
                    </div>
                  </a>

                  <a href="#" class="flex items-center justify-between px-5 py-3.5 text-gray-300 hover:bg-slate-200 transition border-slate-200">
                    <div class="flex items-center gap-3 text-black">
                      <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Activity Feed
                    </div>
                  </a>
                  <a href="#" class="flex items-center justify-between px-5 py-3.5 text-gray-300 hover:bg-slate-200 transition border-slate-200">
                    <div class="flex items-center gap-3 text-black">
                      <IconSettings class="text-gray-500" />
                      Account Settings
                    </div>
                  </a>


                  <!-- Add more items like Billing Details, Notifications, Account Settings -->

                  <hr class="border-slate-200 my-2 mx-4" />

                  <a href="#" class="flex items-center justify-between px-5 py-3.5 text-red-500 hover:bg-slate-200 transition font-medium">
                    <div class="flex items-center gap-3">
                      <IconLogout2 class="text-red-500" />
                      Logout
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileOpen" class="md:hidden bg-[#0f172a] border-t border-slate-700 px-4 py-5 space-y-4">
      <!-- Simplified mobile menu – expand with your links/icons -->
      <p class="text-gray-400 text-center">Mobile navigation</p>
      <!-- You can copy some of the desktop items here in a vertical layout -->
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconDeviceDesktopAnalytics } from '@tabler/icons-vue';
import { IconCast } from '@tabler/icons-vue';
import { IconSend } from '@tabler/icons-vue';
import { IconTruckDelivery } from '@tabler/icons-vue';
import { IconTractor } from '@tabler/icons-vue';
import { IconRecycle } from '@tabler/icons-vue';
import { IconHomeShield } from '@tabler/icons-vue';
import { IconMessageChatbot } from '@tabler/icons-vue';
import { IconWorld } from '@tabler/icons-vue';
import { IconUsers } from '@tabler/icons-vue';
import { IconSettings } from '@tabler/icons-vue';
import { IconHeadset } from '@tabler/icons-vue';
import { IconUser } from '@tabler/icons-vue';
import { IconUserCircle } from '@tabler/icons-vue';
import { IconPointFilled } from '@tabler/icons-vue';
import { IconLogout2 } from '@tabler/icons-vue';


const mobileOpen = ref(false)
// reactive flags for submenu visibility
const showDashboard = ref(false)
const showReports = ref(false)
const showRequest = ref(false)
const showStorage = ref(false)

// timers to delay hiding when mouse passes between link and panel
let dashboardHideTimer: ReturnType<typeof setTimeout> | null = null
let reportsHideTimer: ReturnType<typeof setTimeout> | null = null
let requestHideTimer: ReturnType<typeof setTimeout> | null = null
let storageHideTimer: ReturnType<typeof setTimeout> | null = null

const startHideDashboard = () => {
  dashboardHideTimer = setTimeout(() => {
    showDashboard.value = false
  }, 15)
}
const cancelHideDashboard = () => {
  if (dashboardHideTimer) {
    clearTimeout(dashboardHideTimer)
    dashboardHideTimer = null
  }
}

const startHideReports = () => {
  reportsHideTimer = setTimeout(() => {
    showReports.value = false
  }, 15)
}
const cancelHideReports = () => {
  if (reportsHideTimer) {
    clearTimeout(reportsHideTimer)
    reportsHideTimer = null
  }
}

const startHideRequest = () => {
  requestHideTimer = setTimeout(() => {
    showRequest.value = false
  }, 15)
}
const cancelHideRequest = () => {
  if (requestHideTimer) {
    clearTimeout(requestHideTimer)
    requestHideTimer = null
  }
}

const startHideStorage = () => {
  storageHideTimer = setTimeout(() => {
    showStorage.value = false
  }, 150)
}
const cancelHideStorage = () => {
  if (storageHideTimer) {
    clearTimeout(storageHideTimer)
    storageHideTimer = null
  }
}
</script>

<style lang="css" scoped>
.search-tags span {
  border: 1px solid #c2bbbb;
  color: gray;
}
.search-tags span:hover {
  background-color: #e2e8f0;
  color: black;
}
.head {
  border-right: 1px solid #ccc8c88f;
}
.country button span {
  color: black;
}
</style>
