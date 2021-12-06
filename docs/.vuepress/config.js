module.exports = {
  plugins: ["@vuepress/back-to-top"], //此处是添加返回顶部的插件
  title: "前端开发知识整理",
  base: "/",
  themeConfig: {
    logo: "/logo.png", // 必须放在 .vuepress/puclic/ 之下
    // 右上角搜索框后面的菜单导航
    nav: [
      { text: "首页", link: "/" },
      { text: "序言", link: "/guide/" },
      {
        text: "素材",
        items: [
          {
            text: "此为下拉",
            link: "/",
            items: [
              { text: "base", link: "/html/base" },
              { text: "topic", link: "/html/topic" },
            ],
          },
        ],
      },
      { text: "gitee", link: "https://gitee.com/zhoudong666" },
    ],

    //左侧菜单
    sidebar: [
      {
        title: "序言",
        path: "/guide/",
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
      },
      {
        title: "HTML",
        path: "",
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 4, // 可选的, 默认值是 1
        children: [
          {
            title: "HTML基础知识",
            path: "/html/base",
          },
          {
            title: "HTML面试题",
            path: "/html/topic",
          },
        ],
      },
      // {
      //   title: "CSS",
      //   path: "",
      //   collapsable: true, // 可选的, 默认值是 true,
      //   sidebarDepth: 2, // 可选的, 默认值是 1
      //   children: [
      //     {
      //       title: "CSS基础知识",
      //       path: "/css/base",
      //     },
      //     {
      //       title: "CSS面试题",
      //       path: "/css/topic",
      //     },
      //   ],
      // },
      // {
      //   title: "Javascript",
      //   path: "",
      //   collapsable: true, // 可选的, 默认值是 true,
      //   sidebarDepth: 4, // 可选的, 默认值是 1
      //   children: [
      //     {
      //       title: "Javascript基础知识",
      //       path: "/javascript/base",
      //     },
      //     {
      //       title: "Javascript面试题",
      //       path: "/javascript/topic",
      //     },
      //     {
      //       title: "Javascript面试题_001",
      //       path: "/javascript/topic_001",
      //     },
      //     {
      //       title: "Javascript笔试题_002",
      //       path: "/javascript/topic_002",
      //     },
      //     {
      //       title: "JavaScript 实用工具函数",
      //       path: "/javascript/toolFn",
      //     },
      //   ],
      // },
      // {
      //   title: "VUE",
      //   path: "",
      //   collapsable: true, // 可选的, 默认值是 true,
      //   sidebarDepth: 1, // 可选的, 默认值是 1
      //   children: [
      //     {
      //       title: "vue基础知识",
      //       path: "/vue/base",
      //     },
      //     {
      //       title: "vue面试题",
      //       path: "/vue/topic",
      //     },
      //   ],
      // },
      // {
      //   title: "学习资源",
      //   path: "/sites/",
      //   collapsable: true, // 可选的, 默认值是 true,
      //   sidebarDepth: 1, // 可选的, 默认值是 1
      // },
    ],
  },
};
