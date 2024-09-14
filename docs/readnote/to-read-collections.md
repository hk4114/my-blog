---
title: 学习资料整理
sidebar: true
outline: [2,3]
description: 涵盖各方各面
categories:
 - 读书笔记
recommend: 2
---

## 软件工程
- [软件工程师的必读书单](https://newsletter.techworld-with-milan.com/p/learn-things-that-dont-change) 作者列出一份英文书单，包括34本程序员的必读书籍。
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

- [清华大学的机器学习术语表](https://www.aminer.cn/ml_taxonomy) 已收录 500+ AI术语，最全&最准确。这是清华大学 唐杰 老师组整理的一份「机器学习课程术语表」，对常见AI术语进行了分类、翻译。
- [MLU Explain](https://mlu-explain.github.io/) 新手入门机器学习，用超酷可视化网页解释 14 个机器学习核心概念。网站演示了 14 个机器学习的核心概念。只需要下拉页面，就可以让网页所有信息动起来！
- [A Neural Network Playground](https://playground.tensorflow.org/) | [GitHub](https://github.com/tensorflow/playground) 一个可交互的可视化网站，更确切地说是一个神经网络模拟器，高度支持自由选择和调整。通过这个网站，就能体验到神经网络设计和训练的完整过程。
- [CNN Explainer：卷积神经网络原理演示](https://poloclub.github.io/cnn-explainer)｜[GitHub](https://github.com/poloclub/cnn-explainer) ｜ [详细解读(中文) ](https://blog.csdn.net/weixin_41792162/article/details/118659253) 直观理解 CNN 的运行原理，并且理解其中卷积、激活函数、池化等操作的实现过程，可以借助这个网站工具

### 通往 AGI 之路
> https://www.waytoagi.com

帮助了解 AI 的从概念到应用等各方面知识

### LLM Visualization：用可视化 3D 页面，演示大模型的运行原理
> [github](https://github.com/karpathy/nanoGPT) |  [官网](https://bbycroft.net/llm) |  [中文翻译版](http://llm-viz-cn.iiiai.com/llm) | [图文教程 | The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)

目前 LLM 和 Transformer 原理可视化做得最好的网站。它把抽象的论文理论，做成了颗粒度极细微的可交互动画，还配上了文字解释。

后续，还可以丝滑衔接李沐大佬的[论文解读视频](https://www.bilibili.com/video/BV1pu411o7BE)，以及 3Blue1Brown 的[原理讲解视频](https://www.bilibili.com/video/BV1TZ421j7Ke/)等等，尝试更深层地理解 Transformer 运行原理.

### Transformer Explainer：把 gpt 原理压缩进一张5秒的动图
> [官网](http://poloclub.github.io/transformer-explainer) |  [GitHub](https://github.com/poloclub/transformer-explainer) 

展示了基于 Transformer 的 GPT-2 模型的基本构成，以及数据在组件间的传输流程。
网站提供了多个输入文本示例。点击选择或者输入自己的文本，再单击 Generate 按钮，就可以看到文本「输入-输出」的完整流程，感受信息在模型中的逐步传递。最终，GPT-2 计算输出概率，并给出下一个输出文本。

### 大型语言模型（LLM）免费学习课程
> [Github](https://github.com/decodingml/llm-twin-course)

通过 LLMOps 的最佳实践，从数据收集到部署，教授我们如何构建一个生产级别的 LLM 和基于 LLM 的检索增强生成（RAG）系统。
课程主要有 11 节，涵盖系统设计、数据工程、特征管道、训练管道和推理管道等方面。
并从实际操作中学习如何收集和存储数据、准备数据以提供 LLM 微调和 RAG、以及如何部署和监控 LLM 和 RAG 系统等。
同时，实践涉及到的代码，全部可在 GitHub 仓库上找到。最近准备学习构建 LLM 和 RAG 系统的同学，不妨看下。