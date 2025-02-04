<script setup>
import { ref } from 'vue'
import PageContent from '@/components/PageContent.vue'

const pageTitle = ref('Maintenance')
const pageContent = ref([
  {
    heading: 'Manage Maintenance',
    text: [
      'This page provides access to your maintenance information and gives you the ability to change your maintenance settings at any time.',
      "All maintenance requests will be sent to the provided email in the Maintenance Request Contact Info below, and you can specify phone numbers to receive text messages for 'High' and 'URGENT' requests.",
    ],
  },
  // {
  //   heading: 'What We Offer',
  //   text: 'Our platform includes remote caregiving tools, health tracking, and engagement features.',
  // },
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
