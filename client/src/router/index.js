import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import ContactsView from '@/views/home/ContactsView.vue'
import RolesView from '@/views/home/RolesView.vue'
import BroadcastsView from '@/views/home/BroadcastsView.vue'
import CalendarView from '@/views/home/CalendarView.vue'
import DigitalSignageView from '@/views/home/DigitalSignageView.vue'
import DiningView from '@/views/home/DiningView.vue'
import MaintenanceView from '@/views/home/MaintenanceView.vue'
import SurveysView from '@/views/home/SurveysView.vue'
import CareRecipientsView from '@/views/home/CareRecipientsView.vue'
import StaffView from '@/views/home/StaffView.vue'
import DeveloperView from '@/views/developer/DeveloperView.vue'
import AndroidView from '@/views/developer/AndroidView.vue'
// SOCIAL
import AudioClipsView from '@/views/home/AudioClipsView.vue'
import MessagesView from '@/views/home/MessagesView.vue'
import PhotosView from '@/views/home/PhotosView.vue'
import VideoCallView from '@/views/home/VideoCallView.vue'
import VideoClipsView from '@/views/home/VideoClipsView.vue'
// DEVELOPER
import SheetsView from '@/views/developer/SheetsView.vue'
import QualityAssuranceView from '@/views/developer/QualityAssuranceView.vue'
import IHHView from '@/views/developer/IHHView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // HOME
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home/contacts',
      name: 'contacts',
      component: ContactsView,
    },
    {
      path: '/home/roles',
      name: 'roles',
      component: RolesView,
    },
    // SOCIAL
    {
      path: '/home/audio-clips',
      name: 'audio-clips',
      component: AudioClipsView,
    },
    {
      path: '/home/messages',
      name: 'messages',
      component: MessagesView,
    },
    {
      path: '/home/photos',
      name: 'photos',
      component: PhotosView,
    },
    {
      path: '/home/video-call',
      name: 'video-call',
      component: VideoCallView,
    },
    {
      path: '/home/video-clips',
      name: 'video-clips',
      component: VideoClipsView,
    },
    // Manage Apps
    {
      path: '/home/broadcasts',
      name: 'broadcasts',
      component: BroadcastsView,
    },
    {
      path: '/home/calendar',
      name: 'calendar',
      component: CalendarView,
    },
    {
      path: '/home/digital-signage',
      name: 'digital-signage',
      component: DigitalSignageView,
    },
    {
      path: '/home/dining',
      name: 'dining',
      component: DiningView,
    },
    {
      path: '/home/maintenance',
      name: 'maintenance',
      component: MaintenanceView,
    },
    {
      path: '/home/surveys',
      name: 'surveys',
      component: SurveysView,
    },
    // Administration
    {
      path: '/home/care-recipients',
      name: 'care-recipients',
      component: CareRecipientsView,
    },
    {
      path: '/home/staff',
      name: 'staff',
      component: StaffView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    // DEVELOPER TAB
    {
      path: '/developer',
      name: 'developer',
      component: DeveloperView,
    },
    {
      path: '/developer/android',
      name: 'android',
      component: AndroidView,
    },
    {
      path: '/developer/sheets',
      name: 'sheets',
      component: SheetsView,
    },
    {
      path: '/developer/quality-assurance',
      name: 'sheets',
      component: QualityAssuranceView,
    },
    // Health Hub
    {
      path: '/developer/ihh',
      name: 'ihh',
      component: IHHView,
    },

    // {
    //   path: '/developer/conscio-tech',
    //   name: 'conscio-tech',
    //   component: ConscioTechView,
    // },
    // LEGACY TAB
    {
      path: '/legacy',
      name: 'legacy',
      component: DeveloperView,
    },
  ],
})

export default router
