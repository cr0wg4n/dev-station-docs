import { defineUserConfig, defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import path from 'path'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Dev Station Extension',
  description: 'The definitive Swiss Knife for developers!',
  head: [
    ['link', { rel: 'icon', href: '/images/main_310.png' }],
    ['meta', { property: 'og:title', content: 'Dev Station Extension'}],
    ['meta', { property: 'og:description', content: 'The definitive Swiss Knife for developers!'}],
    ['meta', { property: 'og:image', content: '/images/banner.png'}],
    ['meta', { property: 'og:url', content: 'https://dev-station.lowleveltech.com'}],
  ],
  theme: defaultTheme({
    contributors: false,
    logo: '/images/main.png',
    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      { 
        text: 'Privacy policy',
        link: '/privacy-policy'
      },
      {
        text: 'Contribute',
        link: 'https://github.com/cr0wg4n/dev-station-extension'
      }
    ]
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    googleAnalyticsPlugin({
      id: 'G-EESH637XWJ'
    })
  ]
})

