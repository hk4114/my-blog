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

## 👋 Hi 向你介绍我自己

### 🏃 我在做什么？

### 📍 我的价值观

### 🏅 一些个人 Title

### 💫 快速了解我的轨迹

## 🟢 我擅长做些什么

> 📞 如果你刚好有兴趣/需求，也欢迎和我聊聊

## 🔍 我在这些地方发声

| 🏖️ 在这里  |                                   📍 如何找我                                   |                         📝 主要内容                          |
| :--------: | :-----------------------------------------------------------------------------: | :----------------------------------------------------------: |
| 微信公众号 |                                                                                 | 认真思考，努力创作。发布自己对技术的理解，定期发布科技周刊。 |
|    语雀    |                   [kanelogger](https://www.yuque.com/huakang)                   |                                                              |
|    微博    |                  [kanelogger](https://weibo.com/u/2272877934)                   |                                                              |
|   小红书   | [kanelogger](https://www.xiaohongshu.com/user/profile/563f7147484fb61dedd8f784) |                                                              |
|    掘金    |              [kanelogger](https://juejin.cn/user/3650034333917031)              |                                                              |
|  Bilibili  |                 [kanelogger](https://space.bilibili.com/578904)                 |                                                              |
|     X      |                    [kanelogger](https://x.com/pieinthewind)                     |                                                              |
|   github   |                     [kanelogger](https://github.com/hk4114)                     |                                                              |

## 💎 分享我满意的创作

<UserWorksPage />

## 工具箱

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

- 文字工作

  - notion
  - 语雀

- 代码工作

  - cursor
  - vscode + 通义灵码
  - IDEA
  - MarsCode

- 浏览器插件
  - [code-box](https://github.com/027xiguapi/code-box) 一个开源的浏览器插件，用来解除 CSDN/知乎/脚本之家/博客园/博客园/51CTO 博客等网站的限制（比如要求登录）。