<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const isOpen = ref(true)
const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <Navbar :isOpen="isOpen" :toggleSidebar="toggleSidebar" />
  <div class="flex">
    <Sidebar :class="isOpen ? '' : 'w-0'" :isOpen="isOpen" />
    <RouterView class="border-red-500" />
  </div>
</template>
