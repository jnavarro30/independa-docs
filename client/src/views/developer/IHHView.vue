<script setup>
import { ref } from 'vue'
import PageContent from '@/components/PageContent.vue'

const pageTitle = ref('Health Hub')
const pageContent = ref([
  {
    heading: 'Accounts',
    text: ['https://tv.independa.com/'],
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
  {
    link: {
      text: 'Stage: Chris Thrice - Consumer (Chrome)',
      url: 'https://tv-stage.independa.com/home?device_id=50902A3439C3B29241422CB3ED9FE44A&device=desktop',
    },
  },
  {
    link: {
      text: 'Stage: Carol Reese - Care Recipient (Chrome)',
      url: 'https://tv-stage.independa.com/home?device_id=1211111111&device=desktop',
    },
  },
  {
    link: {
      text: 'PROD: Connie Rivers - Care Recipient (Chrome)',
      url: 'https://tv.independa.com/home?device_id=20C62DA388E472E8434C9626EC7C3751&device=desktop',
    },
  },
  {
    link: {
      text: 'PROD: James Nuñez - Care Recipient (Chrome)',
      url: 'https://tv.independa.com/home?device_id=JESSE_NAVARRO_SCREEN_2024&device=desktop',
    },
  },
])
</script>

<template>
  <PageContent :title="pageTitle" :content="pageContent" />
</template>
