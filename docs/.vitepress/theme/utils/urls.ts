import type { NavData } from "./types";

export const NAV_DATA: NavData[] = [
  {
    title: "编程学习",
    items: [
      {
        title: "Quick Reference",
        desc: "开发人员分享快速参考备忘清单",
        link: "https://wangchujiang.com/reference/index.html",
      },
      {
        title: "阿里云体验动手实验室",
        link: "https://developer.aliyun.com/adc/labs",
      },
      {
        title: "KuangStudy 编程学习资料",
        link: "https://www.kuangstudy.com/course",
      },
      {
        title: "exercism",
        desc: "代码学习的测试题",
        icon: "https://assets.exercism.org/meta/favicon-32x32.png",
        link: "https://exercism.org/",
      },
      {
        title: "tldr",
        desc: "浏览器中的命令行手册浏览器中的命令行手册",
        link: "https://tldr.inbrowser.app/",
      },
      {
        title: "编程导航",
        badge: {
          text: "会员",
          type: "info",
        },
        icon: "https://www.code-nav.cn/favicon.ico",
        link: "https://www.code-nav.cn/",
      },
    ],
  },
  {
    title: "基于文本的 AI 工具",
    items: [
      {
        title: "kimi.ai",
        icon: "https://statics.moonshot.cn/kimi-chat/favicon.ico",
        desc: "目前我最常用的AI工具",
        link: "https://kimi.moonshot.cn/",
      },
      {
        title: "文心一言",
        icon: "https://nlp-eb.cdn.bcebos.com/static/eb/asset/logo.8a6b508d.png",
        desc: "偶尔会用，无法联网",
        link: "https://yiyan.baidu.com/",
      },
      {
        title: "通义全家桶",
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01FOwagl1XBpyVA2QVy_!!6000000002886-2-tps-512-512.png",
        desc: "有全家桶，包含了图片文本，但是效果乏善可陈，但是总比没有好",
        link: "https://tongyi.aliyun.com/",
      },
      {
        title: "coze扣子",
        icon: "https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png",
        link: "https://www.coze.cn/",
      },
      {
        title: "豆包",
        icon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png",
        desc: "没怎么用过",
        link: "https://www.doubao.com/chat/",
      },
      {
        title: "智谱",
        icon: "https://chatglm.cn/img/icons/favicon-32x32.png",
        desc: "没怎么用过",
        link: "https://chatglm.cn/",
      },
      {
        title: "chatGPT",
        icon: "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.82af6fe1.png",
        desc: "OpenAI开发的对话式AI聊天机器人",
        badge: {
          text: "需魔法",
          type: "danger",
        },
        link: "https://chat.openai.com/",
      },
      {
        title: "gpt4o.so",
        icon: "https://cdn.lbbai.com/links/images/2.png",
        desc: "chatGPT 镜像",
        link: "https://gpt4o.so/zh-CN",
      },
      {
        title: "老北鼻",
        icon: "https://lbbai.com/wp-content/uploads/2023/04/54x54.png",
        desc: "chatGPT 镜像",
        link: "https://lj.lbbai.com/#url=lbbdh",
      },
      {
        title: "gpt 镜像",
        desc: "chatGPT 镜像",
        link: "https://chat18.aichatos8.com/",
      },
      {
        title: "Gemini",
        badge: {
          text: "需魔法",
          type: "danger",
        },
        desc: "Google开发的对话式AI聊天机器人",
        link: "https://gemini.google.com/app",
      },
      {
        title: "google AIStudio",
        badge: {
          text: "需魔法",
          type: "danger",
        },
        desc: "可以上传图片、视频、文件等，与ai交互。",
        link: "https://aistudio.google.com",
      }
    ],
  },
  {
    title: "搜索",
    items: [
      {
        title: "百小应",
        icon: "https://cdn.baichuan-ai.com/build/_next/static/media/logo.ce66885d.png",
        badge: {
          text: "需登陆",
          type: "warning",
        },
        desc: "",
        link: "https://ying.baichuan-ai.com",
      },
      {
        title: "perplexity",
        badge: {
          text: "需魔法",
          type: "danger",
        },
        desc: "好用，爱用，常用",
        link: "https://www.perplexity.ai/",
      },
      {
        title: "秘塔",
        icon: "https://metaso.cn/apple-touch-icon.png",
        badge: {
          text: "需登陆",
          type: "warning",
        },
        desc: "学术模式很不错，交互友好",
        link: "https://metaso.cn/",
      },
      {
        title: "开搜AI",
        icon: "https://img.kaisouai.com/img/browserLogo.png",
        badge: {
          text: "需登陆",
          type: "warning",
        },
        desc: "体验一般",
        link: "https://kaisouai.com/",
      },
      {
        title: "globe",
        desc: "不需要登陆，带图片搜索",
        link: "https://explorer.globe.engineer/",
      },
      {
        title: "consensus",
        icon: "https://consensus.app/images/logo-min.svg",
        badge: {
          text: "需登陆",
          type: "warning",
        },
        desc: "【需登陆】答案完全来自论文",
        link: "https://consensus.app/search/",
      },
      {
        title: "brainstorm",
        badge: {
          text: "需登陆",
          type: "danger",
        },
        desc: "备用",
        link: "https://brainstorm.cool",
      },
      {
        title: "devv ai",
        badge: {
          text: "需魔法",
          type: "danger",
        },
        desc: "面向程序员",
        link: "https://devv.ai/",
      },
      {
        title: "lepton",
        icon: "https://avatars.githubusercontent.com/u/124112888?s=200&v=4",
        desc: "【备用】如果不设置返回的结果是英文，体验不怎么样",
        link: "https://search.lepton.run/",
      },
      {
        title: "ImageSearch",
        badge: {
          text: "图片",
          type: "warning",
        },
        desc: "一个以图搜图的网站，聚合了百度和谷歌的结果",
        link: "https://picfind.top/",
      },
    ],
  },
  {
    title: "摄影",
    items: [
      {
        icon: "https://my.nikon.com.cn/favicon.ico",
        title: "尼康",
        desc: "尼康论坛",
        link: "https://my.nikon.com.cn/",
      },
      {
        title: "大疆 天空之城",
        desc: "大疆 天空之城",
        badge: {
          text: "无人机",
          type: "tip",
        },
        link: "https://www.skypixel.com/",
      },
      {
        title: "大疆 开发者平台",
        desc: "大疆 开发者平台",
        badge: {
          text: "无人机",
          type: "tip",
        },
        link: "https://developer.dji.com/cn/",
      },
      {
        title: "大疆 BBS 社区",
        desc: "大疆 BBS 社区",
        badge: {
          text: "无人机",
          type: "tip",
        },
        link: "https://bbs.dji.com/",
      },
      {
        title: "小米社区",
        link: "https://www.xiaomi.cn/",
      },
      {
        title: "FPV 帮",
        badge: {
          text: "无人机",
          type: "tip",
        },
        desc: "FPV 帮安全指南",
        link: "http://wiki.fpvbang.com/safety_instruction/safety_instruction/",
      },
    ],
  },
  {
    title: "工具箱",
    items: [
      {
        title: "独立开发者出海工具箱",
        desc: "独立开发者出海工具箱",
        link: "https://indiehackertools.net/",
      },
      {
        title: "IT Tools: 工程师工具箱",
        desc: "提供各类编码工具，包括加解密、常用转换等",
        link: "https://it-tools.tech/",
      },
      {
        title: "即时工具 ：在线工具箱",
        desc: "即时工具在线工具箱",
        link: "https://www.67tool.com/",
      },
      {
        title: "MikuTools",
        desc: "工具集合",
        link: "https://tools.miku.ac/",
      },
      {
        icon: "https://tool.lu/favicon.ico",
        title: "在线工具",
        desc: "开发人员的工具箱",
        link: "https://tool.lu",
      },
      {
        icon: "https://devtool.tech/logo.svg",
        title: "开发者武器库",
        desc: "开发者武器库，做开发者最专业最好用的专业工具箱",
        link: "https://devtool.tech",
      },
    ],
  },
];
