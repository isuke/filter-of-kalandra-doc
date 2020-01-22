module.exports = {
  title: 'Filter of Kalandra Doc',
  description: "'Filter of Kalandra' is Next level 'Path of Exile' filter editor.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    /* nav */
    logo: '/img/icon-512x512.png',
    nav: [
      {
        text: 'Usage',
        link: '/usage/'
      },
      {
        text: 'Change Log',
        link: '/change_log/'
      },
      {
        text: 'Filter of Kalandra',
        link: 'https://filter-of-kalandra.xyz',
        target:'_self',
        rel:''
      }
    ],

    /* sidebar */
    sidebar: {
      '/usage/': [
        '',
        'unorganized'
      ],
      '/change_log/': [
        ''
      ],
      '/': [
        ''
      ]
    },
    displayAllHeaders: true,
    activeHeaderLinks: true,

    /* contents */
    lastUpdated: 'Last Updated',
    markdown: {
      lineNumbers: true
    }
  }
}
