import { defineConfig } from "vitepress";

// 导入主题的配置
import { blogTheme } from "./blog-theme";

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
const base = "/my-blog/";

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: blogTheme,
  base,
  lang: "zh-cn",
  title: "kane's blog",
  description: "个人博客",
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    ["link", { rel: "icon", href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "目录",
    },
    // 默认文案修改
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "相关文章",
    lastUpdatedText: "上次更新于",

    // 设置logo
    logo: "/logo.jpeg",
    editLink: {
      pattern: "https://github.com/hk4114/my-blog/tree/main/docs/:path",
      text: "去 GitHub 上编辑内容",
    },
    nav: [
      { text: "关于我", link: "/about.html" },
      { text: "导航", link: "/navigator.html" },
      {
        text: "我的周刊",
        items: [{ text: "索引", link: "/weekly/index.html" }],
      },
      {
        text: "技术笔记",
        items: [
          { text: "mac 命令", link: "/tech/mac.html" },
          { text: "prompt 工程", link: "/tech/prompt.html" },
        ],
      },
      {
        text: "方法论集锦",
        items: [
          {
            text: "学习方法论",
            link: "https://www.yuque.com/huakang/hanadostar/oh4qnzlnk496g2gn",
          },
          {
            text: "我的为人处事",
            link: "https://www.yuque.com/huakang/hanadostar/vubs5smhenoy1na0",
          },
        ],
      },
      {
        text: "项目",
        link: "/thirty-projects/list.html",
      },
      // {
      //   text: "阅读",
      //   items: [{ text: "我的周刊", link: "/weekly/index.html" }],
      // },
      // {
      //   text: "生活",
      //   items: [{ text: "我的周刊", link: "/weekly/index.html" }],
      // },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/hk4114",
      },
      {
        icon: "x",
        link: "https://x.com/pieinthewind",
      },
    ],
  },
});
