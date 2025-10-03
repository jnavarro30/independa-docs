import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/independa-docs/",
  title: "Home",
  description: "",
  head: [
      ['link', {rel: 'icon', href: '/independa-docs/favicon.ico', type: 'image/x-icon'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/development/guidelines' },
    ],

    sidebar: [
      // {
      //   text: 'General',
      //   items: [
      //     // { text: 'Overview', link: '/docs/general/overview' },
      //     { text: 'Roles', link: '/docs/general/roles' },
      //     { text: 'Contacts', link: '/docs/general/contacts' },
      //     { text: 'Availability', link: '/docs/general/availability' },
      //     { text: 'Features', link: '/docs/general/features' },
      //   ]
      // },
      {
        text: 'Development',
        items: [
          { text: 'Guidelines', link: '/docs/development/guidelines' },
          { text: 'Architecture', link: '/docs/development/architecture' },
          // { text: 'Overview', link: '/docs/developer/overview' },
          // { text: 'Health Hub', link: '/docs/developer/health-hub' },
          // { text: 'Companion', link: '/docs/developer/companion' },
          { text: 'Partners', link: '/docs/development/partners' },
          { text: 'AWS', link: '/docs/development/aws' },
          { text: 'Notificaion API', link: '/docs/development/notification-api' },
          { text: 'Twilio', link: '/docs/development/twilio' },
          { text: 'DANA', link: '/docs/development/dana' },
          { text: 'Customer Support', link: '/docs/development/customer_support' },
          { text: 'Resources', link: '/docs/development/resources' },
        ]
      },
      {
        text: 'Testing',
        items: [
          { text: 'Strategy', link: '/docs/testing/strategy' },
          { text: 'EverThrive', link: '/docs/testing/everthrive' },
          { text: 'Support', link: '/docs/testing/support' },
          { text: 'Bugs', link: '/docs/testing/bugs' },
        ]
      },
      // {
      //   text: 'Enterprise',
      //   items: [
      //     { text: 'Overview', link: '/docs/enterprise/overview' },
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      // {
      //   text: 'Consumer',
      //   items: [
      //     { text: 'Overview', link: '/docs/consumer/overview' },
      //     { text: 'Health Hub', link: '/docs/consumer/health-hub' },
      //     // { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: 'Platforms',
        items: [
          { text: 'EverThrive', link: '/docs/platforms/everthrive' },
          { text: 'Health Hub', link: '/docs/platforms/health-hub' },
          { text: 'Companion', link: '/docs/platforms/companion' },
          { text: 'LG', link: '/docs/platforms/lg-tv' },
          { text: 'Patient Education', link: '/docs/platforms/patient-education' },
        ]
      },
      {
        text: 'Legacy',
        items: [
          { text: 'Overview', link: '/docs/legacy/overview' },
          { text: 'Mobile', link: '/docs/legacy/mobile' },
          { text: 'IATC', link: '/docs/legacy/iatc' },
          { text: 'Keystone', link: '/docs/legacy/keystone' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
