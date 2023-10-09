import { defineConfig } from 'vitepress';
import { SidebarBuilder } from '@stuyk/vitepress-sidebar-builder';

export default defineConfig({
  base: '/',
  title: 'Alpha Handbook',
  lastUpdated: true,
  head: [
    [
      'script',
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-7ND32MWZ66',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-##########');",
    ],
  ],
  themeConfig: {
    repo: 'leightonhughes/alpha-handbook',
    docsDir: 'docs',
    base: "/contents/",
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },
    footer: {
      message: '© Good Shepherd Parish, Gladstone Park 2023',
      copyright: 'Development by <a href="https://leightonhughes.co" target="_blank">Leighton Hughes</a>'
    },
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/introduction/getting-started' }
    ],
    outline: {
      label: "In this Chapter",
      level: [2, 3]
    },
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: SidebarBuilder.get.filesAndOrder('./docs/introduction')
      },
      {
        text: 'Chapters',
        collapsed: false,
        items: SidebarBuilder.get.filesAndOrder('./docs/contents')
      },
      {
        items: SidebarBuilder.get.filesAndOrder('./docs/pages', ['handbook-formatting'])
      },
    ]
  },
})
