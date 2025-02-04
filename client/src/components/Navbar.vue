<script setup>
import { defineProps } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

defineProps({
  isOpen: Boolean,
  toggleSidebar: Object,
  selectTab: Object,
})

const route = useRoute()
// const fullPath = ref(route.fullPath)
// console.log(route.fullPath, 'hahahhahaha')

// const toggleAccordion = (index) => {
//   openIndex.value = openIndex.value === index ? null : index
// }
</script>

<template>
  <nav class="bg-blue-700 border-b border-blue-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Sidebar Toggle Button -->
          <button @click="toggleSidebar" class="text-white flex items-center mr-4">
            <i v-if="!isOpen" :class="`pi pi-bars text-2xl`"></i>
            <i v-else :class="`pi pi-times text-2xl`"></i>
          </button>
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center" to="/">
            <span class="hidden md:block text-white text-2xl font-bold">Independa Docs</span>
          </RouterLink>
        </div>
        <div class="md:ml-auto">
          <div class="flex space-x-2">
            <RouterLink
              to="/home"
              @click="selectTab('home')"
              :class="`text-white ${/home/.test(route.fullPath) ? 'bg-blue-900' : ''} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`"
              >Home</RouterLink
            >
            <RouterLink
              to="/developer"
              @click="selectTab('developer')"
              :class="`text-white ${/developer/.test(route.fullPath) ? 'bg-blue-900' : ''} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`"
              >Developer</RouterLink
            >
            <RouterLink
              to="/legacy"
              @click="selectTab('legacy')"
              :class="`text-white ${/legacy/.test(route.fullPath) ? 'bg-blue-900' : ''} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`"
              >Legacy</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
