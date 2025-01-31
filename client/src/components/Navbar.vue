<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  isOpen: Boolean,
  toggleSidebar: Object,
})

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
              to="/"
              class="text-white bg-blue-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
              >Home</RouterLink
            >
            <RouterLink
              to="/jobs"
              class="text-white hover:bg-blue-900 hover:text-white rounded-md px-3 py-2"
              >Jobs</RouterLink
            >
            <RouterLink
              to="/about"
              class="text-white hover:bg-blue-900 hover:text-white rounded-md px-3 py-2"
              >About</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
