<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const isOpen = ref(true)
const toggleSidebar = () => {
  // props.isOpen.valueOf() = false
  isOpen.value = !isOpen.value
  console.log('working')
}
</script>

<template>
  <Navbar :isOpen="isOpen" :toggleSidebar="toggleSidebar" />
  <RouterView />
  <Sidebar :isOpen="isOpen" />
  <RouterView />
</template>
