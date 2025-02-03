import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '@/views/ContactsView.vue'
import RolesView from '@/views/RolesView.vue'
import BroadcastsView from '@/views/BroadcastsView.vue'
import CalendarView from '@/views/CalendarView.vue'
import DigitalSignageView from '@/views/DigitalSignageView.vue'
import DiningView from '@/views/DiningView.vue'
import MaintenanceView from '@/views/MaintenanceView.vue'
import SurveysView from '@/views/SurveysView.vue'
import CareRecipientsView from '@/views/CareRecipientsView.vue'
import StaffView from '@/views/StaffView.vue'
import DeveloperView from '@/views/DeveloperView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    },
    {
      path: '/roles',
      name: 'roles',
      component: RolesView,
    },
    // Manage Apps
    {
      path: '/broadcasts',
      name: 'broadcasts',
      component: BroadcastsView,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView,
    },
    {
      path: '/digital-signage',
      name: 'digital-signage',
      component: DigitalSignageView,
    },
    {
      path: '/dining',
      name: 'dining',
      component: DiningView,
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: MaintenanceView,
    },
    {
      path: '/surveys',
      name: 'surveys',
      component: SurveysView,
    },
    // Administration
    {
      path: '/care-recipients',
      name: 'care-recipients',
      component: CareRecipientsView,
    },
    {
      path: '/staff',
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
  ],
})

export default router
