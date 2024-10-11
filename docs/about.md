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

### 通往 AGI 之路
> https://www.waytoagi.com

帮助了解 AI 的从概念到应用等各方面知识