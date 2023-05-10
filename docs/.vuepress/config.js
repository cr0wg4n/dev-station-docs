import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Dev Station Extension',
  description: 'The definitive Swiss Knife for developers!',
  head: [['link', { rel: 'icon', href: '/images/index.png' }]],
  theme: defaultTheme({
    logo: '/images/index.png',
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
  })
})

