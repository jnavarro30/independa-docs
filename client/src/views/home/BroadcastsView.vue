<script setup>
import { ref } from 'vue'
import PageContent from '@/components/PageContent.vue'

const pageTitle = ref('Broadcasts')
const pageContent = ref([
  {
    heading: 'How to use Broadcasts',
    text: [
      "Send a broadcast message to all your care recipients using Independa's Broadcast Events. Click the +Add Broadcast Message button to create the message and the time for it to appear on all of your Care Recipients’ calendars and become part of their Angela reminders.",
      'Live Stream - Notify your care recipients for a scheduled Live Video Stream via Youtube',
      'Recorded Videos - Notify your care recipients about an available pre-recorded video to view',
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
