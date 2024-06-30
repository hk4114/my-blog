import type { NavData } from "./types";

// type?: "info" | "tip" | "warning" | "danger";
export const NAV_DATA: NavData[] = [
  {
    title: "摄影",
    items: [
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
    title: "学习资料",
    items: [
      {
        title: "经济学季刊",
        desc: "经济学季刊",
        link: "https://www.nsd.pku.edu.cn/cbw/jjxjk/qkml/index.htm",
      },
      {
        title: "Quick Reference",
        desc: "开发人员分享快速参考备忘清单",
        link: "https://wangchujiang.com/reference/index.html",
      },
      {
        title: "编程导航",
        desc: "编程导航",
        link: "https://www.code-nav.cn/recommend",
      },
      {
        title: "exercism",
        desc: "编程学习网站",
        link: "https://exercism.org/",
      },
      {
        title: "阿里云知行动手实验室",
        desc: "阿里云知行动手实验室",
        link: "https://start.aliyun.com/",
      },
      {
        title: "阿里云体验动手实验室",
        desc: "阿里云体验动手实验室",
        link: "https://developer.aliyun.com/adc/labs",
      },
      {
        title: "华为沙箱实验室",
        desc: "华为沙箱实验室",
        link: "https://lab.huaweicloud.com/",
      },
      {
        title: "腾讯动手实验室",
        desc: "腾讯动手实验室",
        link: "https://cloud.tencent.com/developer/labs/gallery",
      },
      {
        title: "crashcourse",
        desc: "crashcourse",
        link: "https://crashcourse.club/category/",
      },
      {
        title: "KuangStudy 编程学习资料",
        desc: "KuangStudy 编程学习资料",
        link: "https://www.kuangstudy.com/course",
      },
      {
        title: "终身教育平台",
        desc: "终身教育平台",
        link: "https://le.ouchn.cn/home",
      },
    ],
  },
  {
    title: "AI 工具",
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
        desc: "没怎么用过",
        link: "https://www.coze.cn/",
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
        desc: "源网址",
        link: "https://chat.openai.com/",
      },
      {
        title: "gpt4o.so",
        icon: "https://cdn.lbbai.com/links/images/2.png",
        badge: {
          text: "镜像",
          type: "info",
        },
        desc: "用来当gpt镜像",
        link: "https://gpt4o.so/zh-CN",
      },
      {
        title: "老北鼻",
        badge: {
          text: "镜像",
          type: "info",
        },
        icon: "https://lbbai.com/wp-content/uploads/2023/04/54x54.png",
        desc: "常用, gpt镜像",
        link: "https://lj.lbbai.com/#url=lbbdh",
      },
      {
        title: "gpt 镜像",
        badge: {
          text: "镜像",
          type: "info",
        },
        desc: "gpt镜像",
        link: "https://chat18.aichatos8.com/",
      },
      {
        title: "百小应",
        icon: "https://cdn.baichuan-ai.com/build/_next/static/media/logo.ce66885d.png",
        badge: {
          text: "搜索",
          type: "tip",
        },
        desc: "【需登陆】",
        link: "https://ying.baichuan-ai.com",
      },
      {
        title: "perplexity",
        badge: {
          text: "搜索",
          type: "tip",
        },
        desc: "【需魔法】",
        link: "https://www.perplexity.ai/",
      },
      {
        title: "秘塔",
        icon: "https://metaso.cn/apple-touch-icon.png",
        badge: {
          text: "搜索",
          type: "tip",
        },
        desc: "【需登陆】学术模式很不错，交互友好",
        link: "https://metaso.cn/",
      },
      {
        title: "开搜AI",
        icon: "https://img.kaisouai.com/img/browserLogo.png",
        badge: {
          text: "搜索",
          type: "tip",
        },
        desc: "【需登陆】",
        link: "https://kaisouai.com/",
      },
      {
        title: "globe",
        badge: {
          text: "搜索",
          type: "tip",
        },
        desc: "不需要登陆，带图片搜索",
        link: "https://explorer.globe.engineer/",
      },
      {
        title: "consensus",
        icon: "https://consensus.app/images/logo-min.svg",
        badge: {
          text: "搜索",
          type: "tip",
        },
        desc: "【需登陆】答案完全来自论文",
        link: "https://consensus.app/search/",
      },
      {
        title: "duckduckgo",
        icon: "https://duckduckgo.com/assets/logo_header.v109.svg",
        badge: {
          text: "搜索",
          type: "tip",
        },
        desc: "【需魔法】比较老牌的搜索引擎，个人体验不怎么样",
        link: "https://duckduckgo.com/?q=DuckDuckGo&ia=chat",
      },
      {
        title: "brainstorm",
        badge: {
          text: "搜索",
          type: "tip",
        },
        desc: "【需登陆】备用",
        link: "https://brainstorm.cool",
      },
      {
        title: "devv ai",
        badge: {
          text: "搜索",
          type: "tip",
        },
        desc: "【需魔法】面向程序员",
        link: "https://devv.ai/",
      },
      {
        title: "lepton",
        icon: "https://avatars.githubusercontent.com/u/124112888?s=200&v=4",
        badge: {
          text: "搜索",
          type: "tip",
        },
        desc: "【备用】如果不设置返回的结果是英文，体验不怎么样",
        link: "https://search.lepton.run/",
      },
      {
        title: "Luma AI Video Generator",
        desc: "Luma AI 视频生成器免费在线使用",
        link: "https://lunaai.video/zh-CN",
      },
      {
        title: "DeepSeek-Coder-V2",
        desc: "代码助手，需要登陆",
        link: "https://chat.deepseek.com/coder",
      },
      {
        title: "Stable Diffusion 3 AI 图像生成器",
        desc: "通过文本生成图像，无需注册",
        link: "https://stablediffusion3.net/zh-CN",
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
        title: "七夜导航",
        desc: "类似门户网站",
        link: "https://nav.qinight.com/",
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
    title: "代码助手",
    items: [
      {
        title: "通义灵码",
        desc: "基于通义大模型的代码开发工具，插件形式",
        link: "https://tongyi.aliyun.com/lingma",
      },
      {
        title: "MarsCode",
        desc:
          "字节跳动发布了基于豆包大模型打造的智能开发工具，面向国内开发者免费开放",
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
    title: "工具",
    items: [
      {
        icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
        title: "IconPark 图标库",
        desc: "IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标",
        link: "https://iconpark.oceanengine.com/official",
      },
      {
        title: "TexttoSpeech.im",
        desc: "文字转语音",
        link: "https://texttospeech.im/zh-CN",
      },
      {
        title: "markdown 编辑器",
        desc: "markdown 编辑器",
        link: "https://md.openwrite.cn/",
      },
      {
        title: "process on",
        desc: "ProcessOn流程图和思维导图工具",
        link: "https://www.processon.com/",
      },
      {
        title: "Online books",
        desc: "Online books",
        link: "https://onlinebooks.library.upenn.edu/",
      },
      {
        title: "沉浸式翻译",
        desc: "沉浸式翻译工具，支持pdf转EPUB",
        link: "https://immersivetranslate.com/",
      },
      {
        title: "calibre",
        desc: "pdf 转 EPUB 工具",
        link: "https://calibre-ebook.com/",
      },
      {
        title: "语音转字幕工具",
        desc: "AI 自动生成语音字幕，免费且可本地离线运行",
        link: "https://godlucky.net/whisperapp/",
      },
      {
        title: "DeepL 翻译",
        desc: "全世界最准确的翻译",
        link: "https://www.deepl.com/translator",
      },
      {
        title: "pdf 处理",
        desc: "pdf 处理工具",
        link: "https://tools.pdf24.org/zh/",
      },
      {
        title: "在线格式转换",
        desc: "在线格式转换工具",
        link: "https://www.aconvert.com/",
      },
      {
        title: "标准地图服务",
        desc: "标准地图服务",
        link: "http://bzdt.ch.mnr.gov.cn/",
      },
      {
        title: "MyFakeInfo",
        desc: "生成假信息，无法律风险",
        link: "https://www.myfakeinfo.com/",
      },
      {
        title: "APIVault",
        desc: "API的搜索引擎，收集了大量公共API",
        link: "https://apivault.dev/",
      },
      {
        title: "awesome-cloudflare",
        desc: "基于 Cloudflare 的开源工具/服务仓库",
        link: "https://github.com/zhuima/awesome-cloudflare",
      },
      {
        title: "可画",
        desc: "可画",
        link: "https://www.canva.cn/",
      },
      {
        title: "切九图",
        desc: "切九图",
        link: "https://v.magiconch.com/sns-image",
      },
      {
        title: "BgSub",
        desc: "消除或者替换图像背景，无需上传图像",
        link: "https://bgsub.cn/",
      },
      {
        title: "waifu2x",
        desc: "图片无损放大工具",
        link: "https://waifu2x.udp.jp/",
      },
      {
        title: "照片清除背景",
        desc: "照片清除背景",
        link: "https://cleanupphotos.com/",
      },
      {
        title: "Reshot",
        desc: "免费图标和插图",
        link: "https://www.reshot.com/",
      },
      {
        title: "万能视频图片解析下载",
        desc: "万能视频图片解析下载",
        link: "https://snapany.com/zh",
      },
      {
        title: "favicon",
        desc: "favicon",
        link: "https://favicon.io/",
      },
      {
        title: "生日那天的星星",
        desc: "Hubble 望远镜在你生日那天拍摄的照片",
        link: "https://science.nasa.gov/mission/hubble/multimedia/what-did-hubble-see-on-your-birthday",
      },
    ],
  },
  {
    title: "搜书",
    items: [
      {
        title: "鸠摩搜书",
        badge: {
          text: "搜书",
          type: "info",
        },
        desc: "",
        link: "https://www.jiumodiary.com/",
      },
      {
        title: "资源帝电子书导航",
        badge: {
          text: "搜书",
          type: "info",
        },
        desc: "",
        link: "https://shu.ziyuandi.cn/",
      },
    ],
  },

  {
    title: "影视资源",
    items: [
      {
        title: "ikanbot",
        icon: "https://v.ikanbot.com/resources/logo.svg",
        desc: "免登陆，影视资源的聚合，挺全的",
        link: "https://www.ikanbot.com/",
      },
      {
        title: "低端影视",
        icon: "https://ddys.pro/apple-touch-icon.png",
        desc: "资源比较可靠稳定",
        link: "https://ddys.pro/",
      },
      {
        title: "anime1",
        desc: "动画线上看",
        link: "https://anime1.me/",
      },
      {
        title: "包子漫画",
        desc: "包子漫画",
        link: "https://cn.baozimh.com/",
      },
      {
        title: "动漫狂",
        desc: "动漫狂",
        link: "https://www.cartoonmad.com/",
      },
    ],
  },

  {
    title: "vpn",
    items: [
      {
        title: "sockboom",
        desc: "sockboom",
        link: "https://sockboom.link",
      },
      {
        title: "leensa",
        desc: "leensa",
        link: "https://leensa.com",
      },
      {
        title: "备用 woccloud",
        desc: "备用 woccloud",
        link: "https://www.woccloud.pro/",
      },
      {
        title: "备用 ikuuu",
        desc: "备用 ikuuu",
        link: "https://ikuuu.eu/auth/login",
      },
    ],
  },
  {
    title: "官方信息源",
    items: [
      {
        title: "国家统计局官网",
        desc: "国家统计局官网",
        link: "http://www.stats.gov.cn/",
      },
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
        title: "工信部，申诉运营商",
        desc: "工信部，申诉运营商",
        link: "https://yhssglxt.miit.gov.cn/web",
      },
      {
        title: "国家邮政局申诉网站",
        desc: "快递申诉",
        link: "https://sswz.spb.gov.cn/",
      },
      {
        title: "信用信息公示系统-查企业",
        desc: "信用信息公示系统-查企业",
        link: "https://www.gsxt.gov.cn/index.html",
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
        title: "商务部《对外投资合作国别（地区）指南》",
        desc: "商务部《对外投资合作国别（地区）指南》",
        link: "http://fec.mofcom.gov.cn/article/gbdqzn/",
      },
      {
        title: "发现报告",
        desc: "发现报告",
        link: "https://www.fxbaogao.com/",
      },
      {
        title: "医学微视",
        desc: "医学微视",
        link: "https://www.mvyxws.com/?from=timeline&isappinstalled=0",
      },
      {
        title: "国家数字图书馆",
        desc: "国家数字图书馆",
        link: "http://www.nlc.cn/",
      },
      {
        title: "合同示范文本",
        desc: "合同示范文本",
        link: "https://cont.12315.cn/",
      },
    ],
  },
];
