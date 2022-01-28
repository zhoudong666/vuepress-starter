const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  // plugins: ["@vuepress/back-to-top"], //此处是添加返回顶部的插件
  plugins: ["demo-container"], // demo-container 是个插件
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
              { text: "aa", link: "/demo/aa" },
              { text: "bb", link: "/demo/bb" },
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
        title: "DEMO",
        path: "",
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 4, // 可选的, 默认值是 1
        children: [
          { title: "内置样式等", path: "/demo/内置样式等" },
          { title: "test-aa", path: "/demo/aa" },
          { title: "test-bb", path: "/demo/bb" },
          { title: "test-demo-container", path: "/demo/test-demo-container" },
          { title: "test-自定义模板", path: "/demo/myself-template" },
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
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("/src"));
  },
};
