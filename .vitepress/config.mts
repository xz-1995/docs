import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/docs/',
  title: "薛壮的前端纪录",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家', link: '/' },
          {
              text: '前端基础',
              items: [
                  {
                      text: 'markdown',
                      link: '/base/markdown'
                    }
                ]
          },
      { text: '工程化', link: '/framework' },
          {
              text: '框架',
              items: [
                {text: 'vue',link: '/framework/vue/index.md'},
              ]
          },
          {
              text: '关于我',
              link: '/about/'
          }
    ],

      sidebar: {
          '/base/': [
            {
                  text: 'markdown',
                  link: '/base/markdown/index.md',
                items: [
                    {
                        text: 'emoji',
                        link: '/base/markdown/emoji.md'

                    }
                ]
              },
              {
                text: 'html',
                link: '/base/html/'
              }
          ],
          '/framework/': [
            {
                  text: 'vue原理相关',
                  link: '/framework/vue/index.md',
                  items: [
                      {
                          text: '响应式原理',
                          link: '/framework/vue/响应式原理.md'
                      }
                  ]
              },
        ]
      },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
