<script setup>
import { ref } from 'vue'
import PageContent from '@/components/PageContent.vue'

const pageTitle = ref('Roles')
const pageContent = ref([
  {
    heading: 'Enterprise Admin',
    text: [
      'Admin all (except instances)',
      'Automatically assigned the roles of Administrator and Care Manager',
      'With the two additional roles, they have access to everything on the web and mobile apps',
      'They can also choose which options will show up on Angela',
    ],
  },
  {
    heading: 'Independa Admin',
    text: [
      'Create instances',
      'What is the location relevance? (Independa QA)',
      'Creates Instances and Enterprise admin',
    ],
  },
  {
    heading: 'Location Admin',
    text: ['All access to the selected location'],
  },
  {
    heading: 'Activity Manager',
    text: [
      'Activities (Calendar Activities)',
      'Can manage broadcasts, surveys, and maintenance',
      'Has access to the Manage CR page but is not shown the CRs',
    ],
  },
  {
    heading: 'Care Manager',
    text: [
      'CR’s',
      'Has access to maintenance, surveys, and manage CR dashboard',
      'Has access to everything about a CR except they cannot access the CR’s photos and messages',
    ],
  },
  {
    heading: 'Dining Manager',
    text: ['Manage Dining and menus'],
  },
  {
    heading: 'Maintenance Manager',
    text: ['Handle maintenance'],
  },
  {
    heading: 'Care Receiver',
    text: [
      'On the web app, you can only edit your personal info',
      'On Angela, a CR can see their photos, messages, and community calendars, etc',
      'On the web app, it disables add care recipient feature, disables manage apps, administration, and reports',
    ],
  },
  // {
  //   image: 'https://via.placeholder.com/800x400', // Replace with an actual image
  //   imageAlt: 'Example Image',
  // },
  // {
  //   text: 'Learn more about our services and features.',
  //   link: { text: 'Visit Our Website', url: 'https://independa.com' },
  // },
])
</script>

<template>
  <PageContent :title="pageTitle" :content="pageContent" />
</template>
