<script setup>
import { ref } from 'vue'
import PageContent from '@/components/PageContent.vue'

const pageTitle = ref('Welcome to Independa')
const pageContent = ref([
  {
    heading: 'Docs all in one place',
    text: ['Organize how to`s and dev help.'],
  },
  {
    heading: 'What We Offer',
    text: [
      'Our platform includes remote caregiving tools, health tracking, and engagement features.',
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
