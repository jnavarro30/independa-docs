<script setup>
import { ref } from 'vue'
import PageContent from '@/components/PageContent.vue'

const pageTitle = ref('Audio Clips')
const pageContent = ref([
  {
    heading: 'Android',
    text: [
      'Record Audio',
    ],
  },
  // {
  //   heading: 'iOS',
  //   text: [
  //     'Our platform includes remote caregiving tools, health tracking, and engagement features.',
  //   ],
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
