<script setup>
import { ref, defineProps } from 'vue'
// import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

defineProps({
  isOpen: Boolean,
})
// const isOpen = ref(true)
const openIndex = ref(null)

const menuItems = ref([
  {
    title: 'General',
    links: [
      { name: 'Contacts', to: '/home/contacts' },
      { name: 'Roles', to: '/home/roles' },
    ],
  },
  {
    title: 'Social',
    links: [
      { name: 'Audio Clips', to: '/home/audio-clips' },
      { name: 'Messages', to: '/home/messages' },
      { name: 'Photos', to: '/home/photos' },
      { name: 'Video Call', to: '/home/video-call' },
      { name: 'Video Clips', to: '/home/video-clips' },
    ],
  },
  {
    title: 'Manage Apps',
    links: [
      { name: 'Broadcasts', to: '/home/broadcasts' },
      { name: 'Calendar', to: '/home/calendar' },
      { name: 'Digital Signage', to: '/home/digital-signage' },
      { name: 'Dining', to: '/home/dining' },
      { name: 'Maintenance', to: '/home/maintenance' },
      { name: 'Surveys', to: '/home/surveys' },
    ],
  },
  {
    title: 'Administration',
    links: [
      { name: 'Care Recipients', to: '/home/care-recipients' },
      { name: 'Staff', to: '/home/staff' },
    ],
  },
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
