<script setup>
import { ref, defineProps } from 'vue'
// import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

defineProps({
  isOpen: Boolean,
})
// const isOpen = ref(true)
const openIndex = ref(null)

const menuItems = ref([
  // {
  //   title: 'General',
  //   links: [
  //     { name: 'Contacts', to: '/contacts' },
  //     { name: 'Roles', to: '/roles' },
  //   ],
  // },
  // {
  //   title: 'Dashboard',
  //   links: [
  //     { name: 'Home', to: '/' },
  //     { name: 'Stats', to: '/stats' },
  //   ],
  // },
  {
    title: 'Angela',
    links: [{ name: 'IHH', to: '/legacy/angela' }],
  },
  {
    title: 'Caregiver',
    links: [
      { name: 'Android', to: '/legacy/android' },
      { name: 'iOS', to: '/legacy/ios' },
    ],
  },
  {
    title: 'V1 Portal',
    links: [{ name: 'Site', to: '/legacy/portal' }],
  },
  // {
  //   title: 'IATC',
  //   links: [{ name: 'IATC', to: '/developer/iatc' }],
  // },
  // {
  //   title: 'Companion',
  //   links: [
  //     { name: 'Home', to: '/' },
  //     { name: 'Stats', to: '/stats' },
  //   ],
  // },
  // {
  //   title: 'Portal',
  //   links: [
  //     { name: 'Home', to: '/' },
  //     { name: 'Stats', to: '/stats' },
  //   ],
  // },
  // {
  //   title: 'Platforms',
  //   links: [
  //     { name: 'Chrome', to: '/' },
  //     { name: 'Android', to: '/android' },
  //   ],
  // },
  // {
  //   title: 'Manage Apps',
  //   links: [
  //     { name: 'Broadcasts', to: '/broadcasts' },
  //     { name: 'Calendar', to: '/calendar' },
  //     { name: 'Digital Signage', to: '/digital-signage' },
  //     { name: 'Dining', to: '/dining' },
  //     { name: 'Maintenance', to: '/maintenance' },
  //     { name: 'Surveys', to: '/surveys' },
  //   ],
  // },
  // {
  //   title: 'Administration',
  //   links: [
  //     { name: 'Care Recipients', to: '/care-recipients' },
  //     { name: 'Staff', to: '/staff' },
  //   ],
  // },
  // {
  //   title: 'Settings',
  //   links: [
  //     { name: 'Profile', to: '/profile' },
  //     { name: 'Preferences', to: '/preferences' },
  //   ],
  // },
  // {
  //   title: 'Help',
  //   links: [
  //     { name: 'FAQ', to: '/faq' },
  //     { name: 'Support', to: '/support' },
  //   ],
  // },
])

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="flex">
    <!-- Sidebar Drawer -->
    <div
      class="w-64 bg-gray-900 text-white min-h-screen p-4 transition-transform duration-300 border-red-950"
      :class="{ '-translate-x-full': !isOpen }"
    >
      <!-- Menu -->
      <div v-for="(section, index) in menuItems" :key="index" class="mb-2">
        <button
          @click="toggleAccordion(index)"
          class="w-full flex justify-between items-center bg-gray-800 p-2 rounded"
        >
          <span>{{ section.title }}</span>
          <i v-if="openIndex === index" class="pi pi-chevron-right"></i>
          <i v-else class="pi pi-chevron-down"></i>
        </button>

        <!-- Accordion Content -->
        <div v-show="openIndex === index" class="mt-1 bg-gray-700 rounded transition-all">
          <RouterLink
            v-for="(link, i) in section.links"
            :key="i"
            :to="link.to"
            class="block px-4 py-2 text-sm hover:bg-gray-600"
          >
            {{ link.name }}
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-4">
      <slot></slot>
    </div>
  </div>
</template>
