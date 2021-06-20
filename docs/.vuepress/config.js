const moment = require('moment');
module.exports = {
    base: "/blog/",
    title: "薛定谔的时光猫",
    description: "猫的两面性",
    head: [
      ['link', { rel: 'icon', href: './皮卡丘.ico' }],
      ['meta', { name: 'author', content: '狸花猫介绍,狸花猫是中华田园猫' }],
      ['meta', { name: 'keywords', content: '狸花猫介绍,狸花猫是中华田园猫' }]
    ],
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
            const moment = require('moment')
            moment.locale("zh-cn")
            return moment(timestamp).format("LLLL")
          }
        }
      ]
    ],
    themeConfig: {
      lastUpdated: '更新时间',
      logo: 'assets/img/hero.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        { text: 'External', link: 'https://google.com' },
        {
            text: 'Languages',
            items: [
              { text: 'Group1', items: [        
                  { text: 'Home', link: '/' },
                  { text: 'Guide', link: '/about' }
                ] },
              { text: 'Group2', items: [ 
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] }
            ]
          }
      ],
      sidebar: [
        {
          title: '夏洛',   // 必要的
          path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/',
            '/css/cssa',
            '/css/cssb'
          ]
        },
        {
          title: '冬梅',   // 必要的
          path: '/css2/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/',
            '/css2/cssa2',
            '/css2/cssb2'
          ]
        },
      ]
    }
  }