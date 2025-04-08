import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/independa-docs/",
  title: "Documentation",
  description: "For the Consumer, Enterprise & Developer",
  head: [
      ['link', {rel: 'icon', href: '/independa-docs/favicon.ico', type: 'image/x-icon'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: 'Enterprise', link: '/docs/enterprise/overview' },
      { text: 'Consumer', link: '/docs/consumer/overview' },
      { text: 'Developer', link: '/docs/developer/overview' },
      { text: 'Docs', link: '/docs/general/overview' },
    ],

    sidebar: [
      {
        text: 'General',
        items: [
          { text: 'Overview', link: '/docs/general/overview' },
          { text: 'Roles', link: '/docs/general/roles' },
          { text: 'Contacts', link: '/docs/general/contacts' },
          { text: 'Availability', link: '/docs/general/availability' },
        ]
      },
      {
        text: 'Enterprise',
        items: [
          { text: 'Overview', link: '/docs/enterprise/overview' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Consumer',
        items: [
          { text: 'Overview', link: '/docs/consumer/overview' },
          { text: 'Health Hub', link: '/docs/consumer/health-hub' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Developer',
        items: [
          { text: 'Overview', link: '/docs/developer/overview' },
          { text: 'Health Hub', link: '/docs/developer/health-hub' },
          { text: 'Companion', link: '/docs/developer/companion' },
          { text: 'Partners', link: '/docs/developer/partners' },
          { text: 'AWS', link: '/docs/developer/aws' },
          // { text: 'Legacy', link: '/docs/developer/legacy' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Legacy',
        items: [
          { text: 'Overview', link: '/docs/legacy/overview' },
          // { text: 'AWS', link: '/docs/legacy/mobile' },
          // { text: 'Legacy', link: '/docs/developer/legacy' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
          { text: 'Keystone', link: '/docs/legacy/keystone' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
