import type { NavData } from "./types";

// type?: "info" | "tip" | "warning" | "danger";
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
        title: "编程导航",
        badge: {
          text: "会员",
          type: "info",
        },
        icon: "https://www.code-nav.cn/favicon.ico",
        link: "https://www.code-nav.cn/",
      },
    ]
  },
  {
    title: "博客专栏",
    items: [
      {
        icon: "https://paper.seebug.org/static/images/favicon.ico",
        title: "seebug",
        desc: "安全博客",
        link: "https://paper.seebug.org/",
      },
      {
        icon: "https://sspai.com/favicon.ico",
        title: "少数派",
        link: "https://sspai.com/",
      },
      {
        title: "经济学季刊",
        desc: "经济学季刊",
        link: "https://www.nsd.pku.edu.cn/cbw/jjxjk/qkml/index.htm",
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
    title: "AI 搭建平台",
    items: [
      {
        title: "Hugging Face",
        desc: "注册并多逛，有大量开源模型，数据集，以及模型的线上体验",
        link: "https://huggingface.co/",
      },
      {
        title: "飞桨",
        icon: "https://paddlepaddle-org-cn.cdn.bcebos.com/paddle-site-front/favicon-48.png",
        desc: "学习平台，可搭建模型",
        link: "https://aistudio.baidu.com/aistudio/education/dashboard",
      },
      {
        title: "魔搭",
        icon: "https://g.alicdn.com/sail-web/maas/1.12.31/favicon/128.ico",
        desc: "搭建模型",
        link: "https://www.modelscope.cn/home",
      },
      {
        title: "google colab",
        icon: "https://colab.google/static/images/favicon.ico",
        desc: "搭建模型",
        link: "https://colab.google/",
      },
      {
        title: "lepton",
        icon: "https://avatars.githubusercontent.com/u/124112888?s=200&v=4",
        desc: "搭建模型",
        link: "https://www.lepton.ai/playground",
      },
      {
        title: "Rock AI",
        desc: "运行和微调开源模型，大规模部署自定义模型，全部只需一行代码",
        link: "https://www.rockai.online/",
      },
    ],
  },
  {
    title: "代码助手",
    items: [
      {
        title: "通义灵码",
        desc: "基于通义大模型的代码开发工具，插件形式",
        link: "https://tongyi.aliyun.com/lingma",
      },
      {
        title: "cursor",
        link: "https://www.cursor.com/settings",
      },
      {
        title: "MarsCode",
        desc: "字节跳动发布了基于豆包大模型打造的智能开发工具，面向国内开发者免费开放",
        link: "https://www.marscode.cn/home",
      },
      {
        title: "文心快码",
        desc: "编程工具，插件形式，插件市场搜索：Baidu Comate",
        link: "https://comate.baidu.com/",
      },
      {
        title: "CodeWhisperer",
        desc: "Amazon 出品的开发插件",
        link: "https://aws.amazon.com/cn/pm/codewhisperer/",
      },
      {
        title: "Copilot",
        desc: "GitHub，要钱，还没用过",
        link: "https://docs.github.com/zh/copilot/quickstart",
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
    title: "书籍影视资源",
    items: [
      {
        title: "鸠摩搜书",
        badge: {
          text: "搜书",
          type: "info",
        },
        link: "https://www.jiumodiary.com/",
      },
      {
        title: "资源帝电子书导航",
        badge: {
          text: "搜书",
          type: "info",
        },
        link: "https://shu.ziyuandi.cn/",
      },
      {
        title: "Online books",
        badge: {
          text: "搜书",
          type: "info",
        },
        desc: "Listing over 3 million free books on the Web",
        link: "https://onlinebooks.library.upenn.edu/",
      },
      {
        title: "国家数字图书馆",
        badge: {
          text: "搜书",
          type: "info",
        },
        link: "http://www.nlc.cn/",
      },
      {
        title: "发现报告",
        icon: "https://static.fxbaogao.com/pub/img/logo/fxbaogao/favicon.ico",
        link: "https://www.fxbaogao.com/",
      },
      {
        title: "ikanbot",
        badge: {
          text: "影视",
          type: "tip",
        },
        icon: "https://v.ikanbot.com/resources/logo.svg",
        desc: "免登陆，影视资源的聚合，挺全的",
        link: "https://www.ikanbot.com/",
      },
      {
        title: "低端影视",
        icon: "https://ddys.pro/apple-touch-icon.png",
        badge: {
          text: "影视",
          type: "tip",
        },
        desc: "资源比较可靠稳定",
        link: "https://ddys.pro/",
      },
      {
        title: "anime1",
        desc: "动画线上看",
        badge: {
          text: "影视",
          type: "tip",
        },
        link: "https://anime1.me/",
      },
    
      {
        title: "动漫狂",
        desc: "动漫狂",
        link: "https://www.cartoonmad.com/",
      },
      {
        title: "4kvm",
        desc: "电影电视",
        badge: {
          text: "影视",
          type: "tip",
        },
        link: "https://www.4kvm.org/",
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
  {
    title: "软件工具",
    items: [
      {
        title: "pdf-to-word",
        desc: "adobe pdf 2 word",
        badge: {
          text: "需魔法",
          type: "danger",
        },
        link: "https://www.adobe.com/acrobat/online/pdf-to-word.html",
      },
      {
        title: "pdf-to-ppt",
        desc: "adobe pdf 2 ppt",
        badge: {
          text: "需魔法",
          type: "danger",
        },
        link: "https://www.adobe.com/acrobat/online/pdf-to-ppt.html",
      },
      {
        title: "pdf-to-excel",
        desc: "adobe pdf 2 excel",
        badge: {
          text: "需魔法",
          type: "danger",
        },
        link: "https://www.adobe.com/acrobat/online/pdf-to-excel.html",
      },
      {
        title: "calibre",
        desc: "pdf 转 EPUB 工具",
        badge: {
          text: "格式转换",
          type: "tip",
        },
        link: "https://calibre-ebook.com/",
      },
      {
        title: "pdf 处理",
        desc: "pdf 处理工具",
        badge: {
          text: "格式转换",
          type: "tip",
        },
        link: "https://tools.pdf24.org/zh/",
      },
      {
        title: "在线格式转换",
        desc: "在线格式转换工具",
        badge: {
          text: "格式转换",
          type: "tip",
        },
        link: "https://www.aconvert.com/",
      },
      
      {
        title: "vercel",
        badge: {
          text: "部署",
          type: "info",
        },
        desc: "部署",
        link: "https://vercel.com",
      },
      {
        title: "cloudflare",
        badge: {
          text: "部署",
          type: "info",
        },
        desc: "部署",
        link: "https://dash.cloudflare.com",
      },
      {
        title: "cloudns",
        badge: {
          text: "部署",
          type: "info",
        },
        desc: "dns",
        link: "https://www.cloudns.net/",
      },
      
      {
        title: "幕布",
        desc: "思维导图，ppt，在线形式",
        badge: {
          text: "思维导图",
          type: "danger",
        },
        icon: "https://assets.mubu.com/favicon.ico",
        link: "https://mubu.com/",
      },
      {
        title: "process on",
        icon: "https://www.processon.com/assets/imgs/logo_small.svg",
        badge: {
          text: "思维导图",
          type: "danger",
        },
        desc: "ProcessOn流程图和思维导图工具",
        link: "https://www.processon.com/",
      },
      {
        title: "excalidraw",
        icon: "https://excalidraw.com/apple-touch-icon.png",
        badge: {
          text: "思维导图",
          type: "danger",
        },
        desc: "绘图工具",
        link: "https://excalidraw.com/",
      },
      {
        title: "TexttoSpeech.im",
        desc: "文字转语音",
        link: "https://texttospeech.im/zh-CN",
      },
      {
        title: "语音转字幕工具",
        badge: {
          text: "AI",
          type: "info",
        },
        desc: "AI 自动生成语音字幕，免费且可本地离线运行",
        link: "https://godlucky.net/whisperapp/",
      },
      {
        title: "Descript",
        icon: "https://cdn.prod.website-files.com/5d761d627a6dfa6a5b28ab12/5d761d627a6dfa22d328aba1_Webclip.png",
        desc: "视频和播客编辑工具",
        link: "https://www.descript.com",
      },
      {
        title: "TikTok Voice",
        desc: "一个在线的文本转语音网站，可以选择 TikTok 内置的各种语音，支持多种语言。",
        link: "https://tiktokvoice.net/",
      },
      {
        title: "Figma",
        desc: "设计工具，更快更容易地可视化想法、创建交互式原型",
        badge: {
          text: "设计",
          type: "info",
        },
        link: "https://www.figma.com",
      },
      {
        title: "可画",
        desc: "在线设计工具",
        badge: {
          text: "设计",
          type: "info",
        },
        link: "https://www.canva.com",
      },
    ]
  },
  {
    title: "翻译",
    items: [
      {
        title: "沉浸式翻译",
        desc: "沉浸式翻译工具，支持pdf转EPUB",
        link: "https://immersivetranslate.com/",
      },
      {
        title: "DeepL 翻译",
        desc: "全世界最准确的翻译",
        link: "https://www.deepl.com/translator",
      },
    ],
  },
  {
    title: '图片处理',
    items: [
      {
        title: "DALL-E",
        badge: {
          text: "图片",
          type: "warning",
        },
        desc: "【需魔法】OpenAI开发的文本到图像生成模型",
        link: "https://openai.com/index/dall-e-3",
      },
      {
        title: "Midjourney",
        icon: "https://www.midjourney.com/favicon.ico",
        desc: "图像生成和操作工具，生成产品概念图、设计营销材料",
        link: "https://www.midjourney.com",
      },
      {
        title: "Stable Diffusion 3 AI 图像生成器",
        icon: "https://stablediffusion3.net/favicon.ico",
        desc: "通过文本生成图像，无需注册",
        link: "https://stablediffusion3.net/zh-CN",
      },
      {
        title: "万能视频图片解析下载",
        desc: "万能视频图片解析下载",
        badge: {
          text: "图片",
          type: "warning",
        },
        link: "https://snapany.com/zh",
      },
      {
        icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
        title: "IconPark 图标库",
        badge: {
          text: "图片",
          type: "info",
        },
        desc: "通过技术驱动矢量图标样式的开源图标库",
        link: "https://iconpark.oceanengine.com/official",
      },
      {
        title: "切九图",
        desc: "切九图",
        badge: {
          text: "图片",
          type: "warning",
        },
        link: "https://v.magiconch.com/sns-image",
      },
      {
        title: "BgSub",
        desc: "消除或者替换图像背景，无需上传图像",
        badge: {
          text: "图片",
          type: "warning",
        },
        link: "https://bgsub.cn/",
      },
      {
        title: "waifu2x",
        desc: "图片无损放大工具",
        badge: {
          text: "图片",
          type: "warning",
        },
        link: "https://waifu2x.udp.jp/",
      },
      {
        title: "照片清除背景",
        desc: "照片清除背景",
        badge: {
          text: "图片",
          type: "warning",
        },
        link: "https://cleanupphotos.com/",
      },
      {
        title: "Reshot",
        desc: "免费图标和插图",
        badge: {
          text: "图片",
          type: "warning",
        },
        link: "https://www.reshot.com/",
      },
      {
        title: "favicon",
        desc: "favicon",
        badge: {
          text: "图片",
          type: "warning",
        },
        link: "https://favicon.io/",
      },
    ]
  },
  {
    title: "投诉维权防诈骗",
    items: [
      {
        title: "国家药品监督管理局",
        desc: "国家药品监督管理局",
        link: "https://www.nmpa.gov.cn/",
      },
      {
        title: "商务部直销行业管理",
        desc: "可查传销还是直销",
        link: "https://zxgl.mofcom.gov.cn/front/index",
      },
      {
        title: "中国执行信息公开网",
        desc: "可以查到一个人的失信记录",
        link: "http://zxgk.court.gov.cn/",
      },
      {
        title: "全国标准信息公共服务平台",
        desc: "每个行业接触到的各种标准都能查到",
        link: "https://std.samr.gov.cn/",
      },
      {
        title: "中国裁判文书网",
        desc: "检索对方的名字，了解刑事案件、经济纠纷等",
        link: "https://wenshu.court.gov.cn/",
      },
      {
        title: "工信部，",
        desc: "申诉运营商",
        link: "https://yhssglxt.miit.gov.cn/web",
      },
      {
        title: "国家邮政局申诉网站",
        desc: "快递申诉",
        link: "https://sswz.spb.gov.cn/",
      },
      {
        title: "信用信息公示系统",
        desc: "查企业",
        link: "https://www.gsxt.gov.cn/index.html",
      },
    ],
  },
  {
    title: "其他",
    items: [
      {
        title: "art of manliness",
        desc: "挺有意思的小知识",
        link: "https://www.artofmanliness.com/",
      },
      {
        title: "NewsNow",
        desc: "开源的新闻热榜网站。",
        link: "https://github.com/ourongxing/newsnow",
      },
      {
        title: "国家统计局官网",
        desc: "国家统计局官网",
        link: "http://www.stats.gov.cn/",
      },
      {
        title: "外文局出品",
        desc: "权威发布各种重要概念热点词汇",
        link: "http://tppckte.org.cn/",
      },
      {
        title: "上海数据中心",
        desc: "上海数据中心",
        link: "http://www.sstir.cn/",
      },
      {
        title: "医学微视",
        desc: "医学微视",
        link: "https://www.mvyxws.com/?from=timeline&isappinstalled=0",
      },
      {
        title: "合同示范文本",
        desc: "合同示范文本",
        link: "https://cont.12315.cn/",
      },
      {
        title: "生日那天的星星",
        desc: "Hubble 望远镜在你生日那天拍摄的照片",
        link: "https://science.nasa.gov/mission/hubble/multimedia/what-did-hubble-see-on-your-birthday",
      },
      {
        title: "APIVault",
        desc: "API的搜索引擎，收集了大量公共API",
        link: "https://apivault.dev/",
      },
      {
        title: "Free Public APIs",
        desc: "与其他 API 列表区别在于，该网站收集的 API 会每天定时测试一次每个 API 是否可用，确保网站上收集的 API 均可用。",
        link: "https://www.freepublicapis.com/",
      },
      {
        title: "MyFakeInfo",
        desc: "生成假信息，无法律风险",
        link: "https://www.myfakeinfo.com/",
      },
      {
        title: "元素周期表",
        desc: "每一种元素都有详细介绍，包括物理特性、原子特性和其他属性，还配有照片。",
        link: "https://pt.ziziyi.com/",
      },
      {
        title: "《对外投资合作国别（地区）指南》",
        desc: "商务部",
        link: "http://fec.mofcom.gov.cn/article/gbdqzn/",
      },
    ],
  },
];
