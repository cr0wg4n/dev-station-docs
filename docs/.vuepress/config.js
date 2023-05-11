import { defineUserConfig, defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import path from 'path'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Dev Station Extension',
  description: 'The definitive Swiss Knife for developers!',
  head: [
    ['link', { rel: 'icon', href: '/images/main_310.png' }]
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
    })
  ]
})

