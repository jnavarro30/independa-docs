import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "independa-docs",
  title: "Documentation",
  description: "For the Consumer, Enterprise & Developer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/small-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Enterprise', link: '/docs/enterprise/overview' },
      { text: 'Consumer', link: '/docs/consumer/overview' },
      { text: 'Developer', link: '/docs/developer/overview' }
    ],

    sidebar: [
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
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
