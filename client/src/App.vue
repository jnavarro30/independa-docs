<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import SidebarDeveloper from './components/SidebarDeveloper.vue'

const selectedTab = ref('home')
const selectTab = (tab = 'home') => {
  selectedTab.value = tab
}

const isOpen = ref(true)
const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <Navbar :isOpen="isOpen" :toggleSidebar="toggleSidebar" :selectTab="selectTab" />
  <div class="flex">
    <Sidebar v-if="selectedTab === 'home'" :class="isOpen ? '' : 'w-0'" :isOpen="isOpen" />
    <SidebarDeveloper
      v-else-if="selectedTab === 'developer'"
      :class="isOpen ? '' : 'w-0'"
      :isOpen="isOpen"
    />
    <RouterView class="border-red-500" />
  </div>
</template>
