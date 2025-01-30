<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const isOpen = ref(true)
</script>

<template>
  <Navbar :isOpen="isOpen" />
  <RouterView />
  <Sidebar :isOpen="isOpen" />
  <RouterView />
</template>
