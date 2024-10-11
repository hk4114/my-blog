---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
hidden: true
outline: [2, 3, 4]
title: 关于我
description: 终生学习者
---

<style src="/.vitepress/theme/style.scss"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/utils/urls'
</script>

# 关于我

### 技术资讯

- [宝玉的博客](https://baoyu.io/) 宝玉老师的博客，现在主要更新 AIGC 相关的内容
- [buzzing](https://www.buzzing.cc/) 用中文浏览国外社交媒体
- [changelog](https://changelog.com/) News and podcasts for developers
- [阮一峰: 科技爱好者周刊](https://www.ruanyifeng.com/blog/archives.html) 记录每周值得分享的科技内容，周五发布
- [ShowMeAI](https://juejin.cn/user/554605767047053/posts) 为AI硬核资料库(cool)而生
- [FRE123 技术周刊精选](https://www.fre321.com/weekly) 前后端技术周刊精选推荐信息流

## 工具箱

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

- 文字工作
  + notion
  + 语雀

- 代码工作
  + vscode + 通义灵码
  + IDEA
  + cursor 
  + MarsCode

- 浏览器插件
  + [code-box](https://github.com/027xiguapi/code-box) 一个开源的浏览器插件，用来解除 CSDN/知乎/脚本之家/博客园/博客园/51CTO博客等网站的限制（比如要求登录）。


### 音乐学习
> https://learningmusic.ableton.com/zh-Hans/

这是一个公益音乐基础教育网站，跟着网页的引导，一边听着美妙旋律，从节奏、音符、音阶到旋律、歌曲结构，不知不觉就能学会很多专业的音乐知识。 ​​​

### 实践大语言模型
> https://github.com/handsOnLLM/Hands-On-Large-Language-Models

电子书。共十二章，涵盖了语言模型的基础知识、文本分类、提示工程、语义搜索、多模态语言模型以及如何创建和微调文本嵌入模型等内容。

每个章节涉及到的案例代码均已开源到 GitHub，可通过 Google Colab 直接运行。

此外，书籍通过定制 250+ 精美插图，并辅以可运行的代码、时间线以及引用关键论文，帮助读者更深入理解并使用大语言模型。

### 代码安全指南
> https://github.com/Tencent/secguide

腾讯出品的代码安全指南，一份面向开发人员梳理的代码安全指南，旨在梳理API层面的风险点并提供详实可行的安全编码方案。
分C/C++安全指南、JavaScript安全指南、Node安全指南、Go安全指南、Java安全指南、Python安全指南。
代码安全指引可用于以下场景：
* 开发人员日常参考
* 编写安全系统扫描策略
* 安全组件开发
* 漏洞修复指引

### [ScrapeGraphAI](https://github.com/VinciGit00/Scrapegraph-ai)
基于 AI 的网页爬虫工具
通过使用大语言模型（LLM）和直接图逻辑为网站和本地文档（XML、HTML、JSON 等）创建爬取管道。
只要你说出需要什么信息，该工具就能轻松为你自动爬取。
主要有三种爬取管道：
- SmartScraperGraph: 单页爬虫，只需用户提示和输入源；
- SearchGraph: 多页爬虫，从搜索引擎的前 n 个搜索结果中提取信息；
- SpeechGraph: 单页爬虫，从网站提取信息并生成音频文件；
- SmartScraperMultiGraph: 多页爬虫，给定一个提示 可以通过 API 使用不同的 LLM。
另外，支持使用 OpenAI，Groq，Azure、Gemini 以及 Ollama 的本地模型。

### [WiseFlow](https://github.com/TeamWiseFlow/wiseflow)
信息挖掘开源免费工具，帮助你从网站、公众号、社交平台等渠道中爬取相关信息，尤其擅长从公众号文章中提取信息。而你可以对爬取到的信息进行筛选、提炼、贴标签等自动化处理完再上传到数据库，甚至你还可以轻松将它整合到任意 Agent 项目中作为动态知识库。另外，工具可完全本地部署，对硬件基本无要求，无需 GPU，适合任何硬件环境。

### [Gridstack｜网格布局 JS 库](https://gridstackjs.com/)
用于创建响应式、可拖拽、可调整大小网格布局的JS库，可以与任何框架结合使用，且支持移动端。基于他提供的强大交互性能和定制能力特别适合用于构建复杂的仪表盘和管理界面。