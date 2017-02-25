self.$config = {
  title: 'Bluer',
  // true 将会默认使用 `landing.html`
  landing: true,
  // 也可以用自定义页面
  // 当然 markdown 文件也可以
  // landing: 'README.md',
  // 显示侧边栏
  sidebar: true,
  // 左下角也会有个按钮用于切换侧边栏，你也可以隐藏它:
  disableSidebarToggle: true,
  // 导航栏
  nav: {
    default: [
      {
        title: '首页', path: '/'
      },
      {
        title: '其他知识点',
        type: 'dropdown',
        // 设置后其他语言不显示，显示第一个item内容
        // exact: true,
        items: [
          { title: '', type: 'label' },
          { title: 'Git', path: '/other/git' },
          { title: 'ES6', path: '/other/es6' }
        ]
      }
    ],
    'other': [
      { title: '首页', path: '/' }
    ]
  },
  // 将 debug 设置为 true 来启用浏览器的 vue-devtools 插件:
  debug: true
}
