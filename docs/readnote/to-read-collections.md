---
title: 学习资料整理
sidebar: true
outline: [2, 3]
description: 涵盖各方各面
categories:
  - 读书笔记
recommend: 2
---

## 软件工程

- [软件工程师的必读书单](https://newsletter.techworld-with-milan.com/p/learn-things-that-dont-change) 作者列出一份英文书单，包括 34 本程序员的必读书籍。
- [谷歌工程实践文档](https://github.com/google/eng-practices) | [中文翻译](https://github.com/xindoo/eng-practices-cn) 目前只有开发者怎么提交代码（去评审）和评审者如何做代码评审两个章节

### 来自 MIT 的优秀的数据结构课程

- [数据结构课程 1](https://www.youtube.com/watch?v=T0yzrZL1py0&list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf) Erik Demaine 20 岁就拿到了博士学位，而且他讲课非常幽默生动，很受欢迎。课程内容包括：几何结构、动态规划、内存层次结构模型、静态树、动态图结构等。

- [数据结构课程 2](https://www.youtube.com/watch?v=ZA-tUyM_y7s&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY) 由多位 MIT 讲师一起授课的，具体内容包括广度优先搜索、深度优先搜索、二叉树、线性排序、动态规划等。

### cloudflare-saas-stack

> [github](https://github.com/Dhravya/cloudflare-saas-stack)

GitHub 上一套基于 Cloudflare 的全栈 SaaS 开发模板。利用该模板，可以快速在 Cloudflare 上构建并部署全栈应用，包括数据库、认证、样式、存储等功能。

案例：[轻松打造属于自己的 “第二大脑”！](https://github.com/supermemoryai/supermemory)

通过这个工具，你可以轻松地将所有内容导入到自己的 SuperMemory 中，然后通过 AI 快速查找和回顾已收藏的内容。
此外，它还提供了一个浏览器插件，帮助你轻松导入推文或保存网页内容。
安装完插件后，在网页的右下角会出现的「Add to memory」图标，点击即可将内容添加到 SuperMemory 中。

### 微软官方面向初学者的网络安全教程

> https://microsoft.github.io/Security-101

基本网络安全概念，如机密性、完整性、可用性三元组、风险与威胁的区别等。理解身份、网络、安全操作、基础设施和数据安全等关键概念和主题。

### 关于很多计算机历史的博客

> https://www.abortretry.fail/archive?sort=top

一个关于很多计算机历史的博客，比如 windows、linux 的老版本是怎么开发出来的，C、Basic 的起源，各种老计算机的故事等等

### Bash 编程导论

> https://github.com/bobbyiliev/introduction-to-bash-scripting

一本开源的英文电子书，介绍 Bash 脚本开发。

## 人工智能

- [清华大学的机器学习术语表](https://www.aminer.cn/ml_taxonomy) 已收录 500+ AI 术语，最全&最准确。这是清华大学 唐杰 老师组整理的一份「机器学习课程术语表」，对常见 AI 术语进行了分类、翻译。
- [MLU Explain](https://mlu-explain.github.io/) 新手入门机器学习，用超酷可视化网页解释 14 个机器学习核心概念。网站演示了 14 个机器学习的核心概念。只需要下拉页面，就可以让网页所有信息动起来！
- [A Neural Network Playground](https://playground.tensorflow.org/) | [GitHub](https://github.com/tensorflow/playground) 一个可交互的可视化网站，更确切地说是一个神经网络模拟器，高度支持自由选择和调整。通过这个网站，就能体验到神经网络设计和训练的完整过程。
- [CNN Explainer：卷积神经网络原理演示](https://poloclub.github.io/cnn-explainer)｜[GitHub](https://github.com/poloclub/cnn-explainer) ｜ [详细解读(中文) ](https://blog.csdn.net/weixin_41792162/article/details/118659253) 直观理解 CNN 的运行原理，并且理解其中卷积、激活函数、池化等操作的实现过程，可以借助这个网站工具

### LLM Visualization：用可视化 3D 页面，演示大模型的运行原理

> [github](https://github.com/karpathy/nanoGPT) | [官网](https://bbycroft.net/llm) | [中文翻译版](http://llm-viz-cn.iiiai.com/llm) | [图文教程 | The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)

目前 LLM 和 Transformer 原理可视化做得最好的网站。它把抽象的论文理论，做成了颗粒度极细微的可交互动画，还配上了文字解释。

后续，还可以丝滑衔接李沐大佬的[论文解读视频](https://www.bilibili.com/video/BV1pu411o7BE)，以及 3Blue1Brown 的[原理讲解视频](https://www.bilibili.com/video/BV1TZ421j7Ke/)等等，尝试更深层地理解 Transformer 运行原理.

### Transformer Explainer：把 gpt 原理压缩进一张 5 秒的动图

> [官网](http://poloclub.github.io/transformer-explainer) | [GitHub](https://github.com/poloclub/transformer-explainer)

展示了基于 Transformer 的 GPT-2 模型的基本构成，以及数据在组件间的传输流程。
网站提供了多个输入文本示例。点击选择或者输入自己的文本，再单击 Generate 按钮，就可以看到文本「输入-输出」的完整流程，感受信息在模型中的逐步传递。最终，GPT-2 计算输出概率，并给出下一个输出文本。

### 大型语言模型（LLM）免费学习课程

> [Github](https://github.com/decodingml/llm-twin-course)

通过 LLMOps 的最佳实践，从数据收集到部署，教授我们如何构建一个生产级别的 LLM 和基于 LLM 的检索增强生成（RAG）系统。
课程主要有 11 节，涵盖系统设计、数据工程、特征管道、训练管道和推理管道等方面。
并从实际操作中学习如何收集和存储数据、准备数据以提供 LLM 微调和 RAG、以及如何部署和监控 LLM 和 RAG 系统等。
同时，实践涉及到的代码，全部可在 GitHub 仓库上找到。最近准备学习构建 LLM 和 RAG 系统的同学，不妨看下。

### 音乐学习

> https://learningmusic.ableton.com/zh-Hans/

这是一个公益音乐基础教育网站，跟着网页的引导，一边听着美妙旋律，从节奏、音符、音阶到旋律、歌曲结构，不知不觉就能学会很多专业的音乐知识。 ​​​

### 实践大语言模型

> https://github.com/handsOnLLM/Hands-On-Large-Language-Models

电子书。共十二章，涵盖了语言模型的基础知识、文本分类、提示工程、语义搜索、多模态语言模型以及如何创建和微调文本嵌入模型等内容。

每个章节涉及到的案例代码均已开源到 GitHub，可通过 Google Colab 直接运行。

此外，书籍通过定制 250+ 精美插图，并辅以可运行的代码、时间线以及引用关键论文，帮助读者更深入理解并使用大语言模型。

### [Gridstack ｜网格布局 JS 库](https://gridstackjs.com/)

用于创建响应式、可拖拽、可调整大小网格布局的 JS 库，可以与任何框架结合使用，且支持移动端。基于他提供的强大交互性能和定制能力特别适合用于构建复杂的仪表盘和管理界面。

### 探讨如何为开源项目提交 issue

https://ryanc.cc/archives/open-source-repo-issue?continueFlag=27d8898907ae17a147d0192cb73ef10b

GitHub Issue 是 GitHub 上用于跟踪项目相关想法、反馈、任务和缺陷的工具。它是一个异步沟通系统，允许用户提交与项目相关的问题或建议。为了有效地提交 Issue，用户需要做足准备工作，包括理解问题、查阅文档、搜索相似 Issue 等。一个好的 Issue 应该包含清晰的标题、详细的描述、环境信息、复现步骤、相关日志和已尝试的解决方式。提交后，用户应耐心等待回复并保持友好的交流。项目管理员或维护者应该提供指导文档和模板，以帮助用户提交高质量的 Issue，并及时跟踪和回复。

### LLM 书签收藏方案（中文）

> https://nekonull.me/posts/llm_x_bookmark/

作者介绍了自己的书签收藏工作流：收藏书签后，自动抓取全文，并用 AI 生成页面摘要，以备未来查找和回顾。

### NotebookLM

> https://notebooklm.google/

也就是说，你上传文章后，它可以将文章转成一个英文的广播节目，内容是两个 AI 主持人一问一答介绍这篇文章，参见[官方的介绍](https://blog.google/technology/ai/notebooklm-audio-overviews/)。它甚至能将 Youtube 的视频转成播客。

下面是一篇[使用感受](https://timkellogg.me/blog/2024/09/29/notebooklm)，作者用它将一篇地质学论文，转成几分钟的播客节目，放给 8 岁的儿子听。

### 开源许可证选择器

> https://open-source-license-chooser.toolsnav.top/zh/

回答几个问题，帮你选择一个开源许可证。

### TypeRoom 类型小屋

> https://typeroom.cn/problems/all

TypeScript 题库 Type Challenge 的网页版。

### HuggingChat 上线 macOS

> https://github.com/huggingface/chat-macOS

完全免费，按下快捷键 ⌘ + Shift + Return 瞬间呼出，一键访问多个顶尖的开源大语言模型，包括 Qwen 2.5 72B、Command R+、Phi 3.5、Mistral 12B 等


### 你管这破玩意叫网络

> https://mp.weixin.qq.com/s?__biz=MzAxODI5ODMwOA==&mid=2666570007&idx=1&sn=4f852357e85961d029987eabd4fe25e7

详细介绍了计算机网络的基本概念和发展历程，从单机到多机通过网线连接，再到集线器和交换机的使用，以及路由器和 TCP 协议在网络层和传输层的作用。

文章解释了物理层、数据链路层和网络层的设备和功能，包括网线的连接作用、集线器的广播转发机制、交换机的 MAC 地址表、路由器的路由表、IP 地址和子网的概念、默认网关和 ARP 协议。

同时，文章还探讨了传输层的 TCP 协议，包括三次握手和四次挥手过程，以及端口号的作用。

此外，文章还讨论了网络传输中的各种问题，如丢包、顺序、流量和拥塞控制，以及它们的解决方案，如确认机制、序列号、滑动窗口和拥塞窗口。通过这些技术，网络传输变得更加可靠和高效。

一篇不错的科普文章。

### How to Build Your Career in AI
> https://info.deeplearning.ai/how-to-build-a-career-in-ai-book

吴恩达的新书。这是一本职业发展指导书,不是技术教程，这本书不要求读者具备技术背景。。它主要面向三类读者: 1. 想要进入AI领域的学生。2. 希望转行到AI行业的专业人士。3. AI领域的初学者和新人

这本书最大的价值在于提供了全方位的AI职业发展建议,包括:
- 如何掌握核心AI技能
- 求职面试技巧
- 如何打造个人项目作品集
- 如何建立和利用人脉网络
- 如何克服冒充者综合症

如果你想进入AI行业但不知从何开始,或者正在为职业发展感到迷茫,这本书会是一个很好的指南。

### 术语表
- 2套权威的AI术语表，从此拿捏术语翻译：机器之心+ GPT Academic + ChatPaper & 清华大学 AI术语库-人工标注版 → https://cxd03hanx97.feishu.cn/wiki/KUsQwCszAiF596khcpcc00H7nSh
- 清华唐杰 - 机器学习课程术语表 → https://www.aminer.cn/ml_taxonomy

### 牛津教授项飙：大家现在都被压扁了，压扁成了工具人
> https://mp.weixin.qq.com/s/LBS3kWiRyi2pRWwfg9zTBA

当前社会中工作的意义和好工作的定义，特别是在内卷和996工作制的背景下。文章指出，社会焦虑和对工作意义的质疑日益增多，人们开始寻求更深入的理解。被工具化的感受在大厂中尤为明显，高压的工作状态和竞争环境导致员工感到异化。文章还讨论了工具理性在中华文化中的缺失，以及城市新穷人面临的意义贫困问题。年轻人对工作重复性的抗拒和个体化趋势，使得他们越来越生活在自己的心理空间中。宠物文化的兴起反映了这种心理空间的封闭性。文章最后提出，好的工作应该是不怕重复、具有合作性、对别人有用的工作，这样的工作能够让人感受到其在社会中的价值和意义。

### Github 从小白到高手

> https://github.com/CatOneTwo/GitHub-Tutorial

### Web3 资料集合

> https://github.com/wangschang/web3.0

涵盖了 Web3 基础知识、应用及项目、相关分享博主、视频教程、相关书籍、开发资源以及工具等内容。

### skyvern

> <https://github.com/Skyvern-AI/Skyvern>

RPA（Robotic Process Automation，流程自动化，比如自批动量文写章）

在 web 端传统做的法是“基于 DOM 模拟交互”，类似 `document.querySelector(".xx").click()`

这领个域下接来的势趋是“利用 LLM 多态模的能力，用户需只描述需求，后识续别、判断、执行由 LLM 实现”，这个就是此类需求的典型项目。

### 云搭

> https://github.com/wangyuan389/yunda

开源的低代码平台，用来搭建小程序、H5、问卷、图文文章等多种应用，试用 [Demo](https://www.sunmao-design.top/sunmao/admin/#/dooring/home)。

### next-forge
> https://github.com/haydenbleasel/next-forge
>
> https://www.next-forge.com/

next-forge 是一个面向 Next.js 应用的生产级 Turborepo 模板。它的主要目标是帮助开发者快速启动和构建 SaaS 应用项目。

核心特点和优势:

1. 全面性
- 内置了完整的现代 Web 应用所需的核心功能:认证、计费、分析、SEO、数据库 ORM 等
- 提供了一站式的开发环境和工具链
- 包含多个预配置模块:应用模板、API 服务、邮件模板、网站模板等

2. 开发效率
- 采用"opinionated"(固定观点)的设计理念,通过预设最佳实践来减少决策负担
- 工具链深度整合,开箱即用
- 支持快速验证想法和迭代

3. 可扩展性与经济性
- 注重成本控制,适合从小规模起步
- 优先选择具有慷慨免费额度的服务
- 架构设计支持随业务增长平滑扩展

4. 技术现代性
- 基于 React 框架,采用 Rust 工具链
- 集成了大量流行且成熟的工具:TypeScript、Tailwind、Prisma 等
- 持续维护更新,确保技术栈的先进性

5. 安全可靠
- 端到端类型安全
- 安全的密钥管理
- 可靠的平台安全保障

使用非常简单,只需要一行命令即可初始化项目:
npx next-forge init [my-project]

常见应用场景：
- SaaS 应用开发
- 跨平台 API 服务
- 邮件营销系统
- 企业官网建设
- 技术文档网站
- 数据管理平台

如果你要基于 NextJS 快速启动一个要包含认证、支付、统计、数据管理的项目，可以试试，应该可以节约不少时间。

### Claude Prompt：概念构建

> https://mp.weixin.qq.com/s/EV2gRTeD_6NtDaaANTT7TQ

### 用 iframe 必定遇到过这六种“坑”之一（以 vue 为示例）

> https://mp.weixin.qq.com/s/HLWh6DFb7sLJcKrANhk2dw

### 年久失修的大厂系统如何做迁移？

> https://mp.weixin.qq.com/s/vmF2bUA0O3Q0Q2M16co3PA

### 深入探索 JavaScript Promises：.all、.allSettled、.race 与 .any

> https://mp.weixin.qq.com/s/YEEgM-7Nr9DjUY7I165dUQ

### 专访"Prompt 之神"李继刚 - 我想用 20 年时间，给世界留一句话。

> https://mp.weixin.qq.com/s/JT2oOG2SYw2pDYEHlEmcyQ

### Github 从小白到高手

> https://github.com/CatOneTwo/GitHub-Tutorial

### Web3 资料集合

> https://github.com/wangschang/web3.0

涵盖了 Web3 基础知识、应用及项目、相关分享博主、视频教程、相关书籍、开发资源以及工具等内容。

### 云搭

> https://github.com/wangyuan389/yunda

开源的低代码平台，用来搭建小程序、H5、问卷、图文文章等多种应用，试用 [Demo](https://www.sunmao-design.top/sunmao/admin/#/dooring/home)。

### skyvern

> <https://github.com/Skyvern-AI/Skyvern>

RPA（Robotic Process Automation，流程自动化，比如自批动量文写章）

在 web 端传统做的法是“基于 DOM 模拟交互”，类似 `document.querySelector(".xx").click()`

这领个域下接来的势趋是“利用 LLM 多态模的能力，用户需只描述需求，后识续别、判断、执行由 LLM 实现”，这个就是此类需求的典型项目。

### next-forge
> https://github.com/haydenbleasel/next-forge
>
> https://www.next-forge.com/

next-forge 是一个面向 Next.js 应用的生产级 Turborepo 模板。它的主要目标是帮助开发者快速启动和构建 SaaS 应用项目。

### Maxun 自动化网页数据爬取工具
> https://github.com/getmaxun/maxun

无需代码，通过可视化界面构建自定义机器人，实现自动化网页数据爬取，支持执行捕获列表、文本或截图等操作。
还支持数据提取、处理分页和滚动、指定机器人运行时间、将网页数据转换为 API 或导出 Excel 表格等等功能。

### 单体架构和微服务架构到底哪个好？
> https://mp.weixin.qq.com/s/XTHhcaHPcvu4qvgk6Gn8yg


### 为什么大部分人用不起来 AI？从被动到主动的范式转换
> https://mp.weixin.qq.com/s?__biz=MzIzMTcxMDMzMg==&mid=2247484334&idx=1&sn=a408e5e6adbe2436cdc24bd4edf7e456&scene=21#wechat_redirect


### [你为何“研究到位，却赚不到钱”？](https://mp.weixin.qq.com/s/FBgk0PjrveVsDs8fWkPJTA)

“研究到位，赚不到钱”的现象，非常普遍。
研究是一种能力，交易是另一种能力，这两种能力单独看都不能保证赚钱，需要拼合成一个投资闭环。
所有成功的、可持续的商业模式都要形成“闭环”。
“规模效应”是现代商业最常见的“商业闭环”，某类产品的几个竞争者，如果有一家率先达到某一个“规模临界点”，它的成本就会大幅降低，有更多的利润开拓市场，进一步扩大规模，扩大对竞争者的优势，从而持续领跑。
其他的商业闭环还包括：网络效应、专利壁垒、品牌心智……
“形成投资闭环”才是成功的投资者真正的赚钱原因。
一个投资闭环的过程可以简化为：
1. 发现了一个投资机会；
2. 列出一个投资计划，执行，并获利；
3. 回顾过程，总结出这一类投资机会的特点和交易方法；
4. 再有意识地寻找类似的机会；
5. 回到1
推动了一个可以“因果循环”的投资策略，形成一个可以自我积累、自我扩张的“投资闭环”。

这篇文章需要细看，重新整理总结。

### [哥哥](https://weibo.com/1716488301/zBYIXdosy)

如今，武松再想起，只觉得那一日的武大的身影有如顶天立地一般。靠蛮力打死老虎并不难，难的是在艰难的世道中委曲求全地活着，成为他人的倚靠。那时，武松喜欢在众人面前举起三百斤的大石博几声叫好，可是相比挑着两担炊饼当街叫卖的哥哥，自己是多么的虚弱与怯懦。

我如今才想明白，武大即是武二，武二即是武大，咱们是一人的两极，谁也离不了谁。你在时，我可以收起脾气去做一个都头、去卖炊饼。如今你死了，菩萨似的武大死了，便只剩下罗刹一般凶恶的武二在世上游荡。

生育率、儿童得到足够好的照料和保护、超长时间无弹性的贪婪工作，这三者也是一种“不可能三角”。 996 式贪婪工作加剧男女不平等

### [原中央党校副校长揭密中国官场三大定律：实权越大，通常难做大官](https://mp.weixin.qq.com/s/aE8-ee4mvO1ZUcNSfbHhfw)

中国官场三大定律：
- 第一定律：地方越穷，人们越想做官。贫穷地区何以频频出现买官呢？经济学的解释是：一定局限条件下的经济人本性。经济学讲经济人，有两层含义：一是说人是理性的；二是指人是自私的。贫穷地区，人们收入低，投资没本钱，做生意没市场。所以要改善自己，就得与政府扯上关系。贫穷地区人们想当官，多半是看透了当官与国有经济的特殊关系。时下人们想发横财，无非是两个路径：一是违法经营，如走私贩毒；二是行政垄断，以权谋私。既然当官能无本生利，大家看在眼里，明在心头。尤其是贫穷地区，人们发财无门，可又穷则思变。故千军万马往官道上挤，也就在情理之中了。
- 第二定律：实权越大，通常难做大官。实权越大，诱惑就越多。经济学的第二假定，叫资源稀缺假定。如果从经济学角度看，实权也是一种稀缺资源，实权越大，就越稀缺。市场上稀缺的东西，想得到的人就很多。用行话说，叫做供不应求。对实权越大通常难做大官的现象，经济学还有一种解释：就是民主失灵。
- 第三定律：好人，未必就是好官。这里讲的“好人”，有特定的含义，即大家都说他“好”的人。因为当官，本身就是一种责任。履行职责就得办事，可一旦办起事来，就没有不得罪人的。那些敢做事的好官，只要做事，保不准就会得罪什么人。


