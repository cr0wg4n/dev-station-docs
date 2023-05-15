import { defineUserConfig, defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import path from 'path'
import socialSharePlugin from 'vuepress-plugin-social-share'


const description = 'The definitive Swiss Knife extension for developers! By developers, for developers'
const title = 'Dev Station Extension'
const image = 'https://dev-station.lowleveltech.com/images/banner.png'

export default defineUserConfig({
  lang: 'en-US',
  title,
  description: 'The definitive Swiss Knife for developers!',
  head: [
    ['link', { rel: 'icon', href: '/images/main_310.png' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: image }],
    ['meta', { property: 'og:url', content: 'https://dev-station.lowleveltech.com' }],
    // For twitter
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:title', content: title }],
    ['meta', { property: 'twitter:description', content: description }],
    ['meta', { property: 'twitter:image', content: image }],
    ['meta', { property: 'twitter:creator', content: '@cr0wg4n' }],
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
    }),
    socialSharePlugin()
  ]
})

