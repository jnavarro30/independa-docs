<script setup>
import { ref } from 'vue'
import PageContent from '@/components/PageContent.vue'

const pageTitle = ref('Video Clips')
const pageContent = ref([
  {
    heading: 'Android',
    text: [
      'https://workdrive.zohopublic.in/external/379ae85b0a9bcd655c0fe564436971283e7b2804f05c047eddce7386deba472e?layout=list',
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
