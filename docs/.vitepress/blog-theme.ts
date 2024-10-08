// 主题独有配置
import { getThemeConfig } from "@sugarat/theme/node";

// 全局配置 https://theme.sugarat.top/config/global.html
const baseUrl = "/my-blog/";

const blogTheme = getThemeConfig({
  // markdown 图表支持（会增加一定的构建耗时）
  mermaid: true,

  // 页脚
  footer: {
    version: true,
    copyright: 'MIT License | 粥里有勺糖'
  },

  // 主题色修改
  themeColor: "el-green",

  // 文章默认作者
  author: "kanelogger",

  // 热门文章
  hotArticle: false,

  // 评论 https://giscus.app/zh-CN
  comment: {
    type: "giscus",
    options: {
      repo: "hk4114/my-blog",
      repoId: "R_kgDOMI2Z3g",
      category: "Announcements",
      categoryId: "DIC_kwDOMI2Z3s4CgMXS",
      inputPosition: "top",
    },
    // 自定义展示内容
    label: "发表意见",
    mobileMinify: false,
  },

  // 推荐文章
  recommend: {
    showSelf: true,
    nextText: "下一页",
    pageSize: 9,
    style: "sidebar",
  },

  // 友链
  friend: [
    {
      nickname: "粥里有勺糖",
      des: "你的指尖用于改变世界的力量",
      avatar:
        "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
      url: "https://sugarat.top",
    },
    {
      nickname: "@sugarat/theme",
      des: "基于 vitepress 的定制主题",
      avatar:
        "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
      url: "https://theme.sugarat.top/",
    },
    {
      nickname: "Vitepress",
      des: "Vite & Vue Powered Static Site Generator",
      avatar: "https://vitepress.dev/vitepress-logo-large.webp",
      url: "https://vitepress.dev/",
    },
    {
      nickname: "mac 教程",
      des: "mac 教程",
      avatar: "https://cdn-fusion.imgimg.cc/i/2024/V0dcRHCStxC0mLBy.png",
      url: "https://44maker.github.io/wiki/Mac/index.html",
    },
    {
      nickname: "44maker",
      des: "mac & kali",
      avatar: "https://cdn-fusion.imgimg.cc/i/2024/a2940be08601cf50.png",
      url: "https://44maker.github.io/",
    }
  ],

  article: {
    // 是否展示文章的预计阅读时间
    readingTime: true,
    // 是否隐藏文章页的封面展示
    hiddenCover: false,
    // 阅读时间分析展示位置
    readingTimePosition: "inline",
  },

  // 公告
  popover: {
    title: "公告",
    body: [
      { type: "text", content: "👇公众号👇--------👇 微信 👇" },
      {
        type: "image",
        src: baseUrl + "qrcode.jpg",
        style: "display: inline-block;width:46%;",
      },
      {
        type: "image",
        src: baseUrl + "qrcode_wexin.jpg",
        style: "display: inline-block;width:46%;padding-left:16px",
      },
      {
        type: "text",
        content: "欢迎大家关注公众号",
      },
    ],
    duration: 0,
  },

  // 赞赏
  buttonAfterArticle: {
    openTitle: "赞赏",
    closeTitle: "下次一定",
    size: "small",
    content: `<img src="${baseUrl}admiration.png">`,
    icon: "wechatPay",
  },

  // 作品集
  works: {
    title: "个人项目/线上作品",
    description: "记录开发的点点滴滴",
    topTitle: "举些🌰",
    list: [
      {
        title: "博客",
        description: "个人博客",
        time: {
          start: "2024/06/29",
        },
        github: {
          owner: "hk4114",
          repo: "my-blog",
          branch: "main",
          path: "docs",
        },
        status: {
          text: "在运行",
        },
        url: "https://hk4114.github.io/my-blog",
        cover: [
          baseUrl + "projects/blog1.png",
          baseUrl + "projects/blog2.png",
        ],
        tags: ["Vitepress", "Vue"],
        links: [
          {
            title: "地址",
            url: "https://hk4114.github.io/my-blog",
          },
          {
            title: "投资",
            url: "https://hk4114.github.io/investment/",
          },
        ],
      },
    ],
  },
});

export { blogTheme };
