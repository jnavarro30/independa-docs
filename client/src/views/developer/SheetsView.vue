<script setup>
import { ref } from 'vue'
import PageContent from '@/components/PageContent.vue'

const pageTitle = ref('ConscioTech')
const pageContent = ref([
  {
    heading: 'Resources',
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
  {
    // text: 'Learn more about our services and features.',
    link: {
      text: 'Personal Bug Sheet',
      url: 'https://docs.google.com/spreadsheets/d/1fFi3a_prdoibGsh7318o27VqEcWjke08JmL1zX8ijbM/edit?gid=0#gid=0',
    },
  },
  {
    // text: 'Learn more about our services and features.',
    link: {
      text: 'Team Bug Sheet',
      url: 'https://docs.google.com/spreadsheets/d/16vHQ72EMRUSPpaPtAAF3GGleShR60CiR5p3B50LJ9fQ/edit?gid=1565282104#gid=1565282104',
    },
  },
])
</script>

<template>
  <PageContent :title="pageTitle" :content="pageContent" />
</template>
