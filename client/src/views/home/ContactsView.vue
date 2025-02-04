<script setup>
import { ref } from 'vue'
import PageContent from '@/components/PageContent.vue'

const pageTitle = ref('Contacts')
const pageContent = ref([
  {
    heading: 'Social Contact',
    text: [
      'Can see who has sent their CR photos/messages, including admins',
      'Can delete those photos/messages and send more to the CR',
      'To see their own info, they have to click on help and then their name will pop-up on the dashboard. Not a fan of that. Should have name at the top on the main dashboard',
      'Also clicking help, about us, privacy policy, terms and conditions redirects users to a page where the Social bar is hidden and the regular dashboard is shown but greyed out. Should just show the social bar',
      'Sent an e-mail welcoming them to signup',
    ],
  },
  {
    heading: 'Personal Caregiver',
    text: [
      'Can edit everything about a CR but they can’t delete the CR or change the CR’s tv',
      'Access to everything in the Manage CR dashboard',
      'Has access to a CR’s dashboard with all the health info, social options, care journal, med info, etc.',
      'Cannot create an Alpha contact or edit an Alpha contact',
      'Cannot delete the TV of a CR or delete a CR',
    ],
  },
  {
    heading: 'Alpha Contact',
    text: [
      'Can edit, add, and delete other types of contacts',
      'Can use direct connect enabled functionality',
      'Access to everything in the Manage CR dashboard',
      'Can edit everything about a CR except deleting it or changing the CR’s TV',
    ],
  },
  {
    heading: 'Other Contact',
    text: ['Does not have an Independa account', 'Can only be contacted for alerts, not calls'],
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
