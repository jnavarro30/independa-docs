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
      // { text: 'Developer', link: '/docs/developer/overview' },
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
          { text: 'Patient Education', link: '/docs/development/patient-education' },
          { text: 'Partners', link: '/docs/development/partners' },
          { text: 'AWS', link: '/docs/development/aws' },
          { text: 'Twilio', link: '/docs/development/twilio' },
          { text: 'DANA', link: '/docs/development/dana' },
          // { text: 'LG TV', link: '/docs/developer/lg-tv' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Testing',
        items: [
          { text: 'Strategy', link: '/docs/testing/strategy' },
          { text: 'EverThrive', link: '/docs/testing/everthrive' },
          { text: 'Support', link: '/docs/testing/support' },
          { text: 'Bugs', link: '/docs/testing/bugs' },
          // { text: 'Chrome Browser', link: '/docs/developer/lg-tv' },
          // { text: 'iOS Mobile', link: '/docs/developer/lg-tv' },
          // { text: 'Android Mobile', link: '/docs/developer/lg-tv' },
          // { text: 'SONY TV', link: '/docs/developer/lg-tv' },
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
          { text: 'LG TV', link: '/docs/platforms/lg-tv' },
          // { text: 'Chrome Browser', link: '/docs/developer/lg-tv' },
          // { text: 'iOS Mobile', link: '/docs/developer/lg-tv' },
          // { text: 'Android Mobile', link: '/docs/developer/lg-tv' },
          // { text: 'SONY TV', link: '/docs/developer/lg-tv' },
        ]
      },
      {
        text: 'Legacy',
        items: [
          { text: 'Overview', link: '/docs/legacy/overview' },
          // { text: 'AWS', link: '/docs/legacy/mobile' },
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
