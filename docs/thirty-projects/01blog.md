---
title: 搭建个人博客
sidebar: true
outline: [2,3]
description: 就像一家单位走向互联网的第一步是搭建官网，程序员走向世界的第一步是拥有自己的博客
categories:
 - 项目
recommend: 2
---

[[toc]]

# 搭建个人博客

## 背景
就像一家单位走向互联网的第一步是搭建官网，程序员走向世界的第一步是拥有自己的博客，所以我们第一个项目是搭建自己的博客。

比较经典的搭建方式 wordpress，是由php写的，需要配置 MySQL，配置也需要很多，搭建官网还好说，如果是搭建博客则是过于繁琐。

后面介绍几种比较简单的，只需要吧 md 文件放到指定文件夹就可以的框架。

## 框架

### hexo
> [官网](https://hexo.io/zh-cn/index.html) · 

有中文文档。虽说可以写官网，但实际使用的话，还是需要开发进行改动代码，而不是运营人员通过后台配置实现功能。

推荐主题 [stellar](https://github.com/xaoxuu/hexo-theme-stellar) | [预览](https://xaoxuu.com/)

## vitepress
> https://vitepress.dev/

有中文文档。基于 Vue 和 Vite，由 Vue 团队开发，之前有类似的产品 Vuepress，后续会更侧重于 vitepress。

因为开发比较简单，部署也方便，所以就选了这个作为我主要的博客开发框架。

## CMS 框架

日常也会有开发企业官网的需求。

### Hugo
> [官网](https://gohugo.io/)

没有中文文档，但是确实好用，适合搭建官网。

### halo
> [github](https://github.com/halo-dev/halo) | [官网](https://www.halo.run/)

有中文文档。

### strapi
> [github](https://github.com/strapi/strapi) [live demo 前台](https://strapi.io/demo) [live demo 后台](https://api-hf0em.strapidemo.com/admin)

无中文文档，有前台有后台。开源的cms系统，100%使用 JS/TS 写的，适合前端接活。

### tinacms
> [github](https://github.com/tinacms/tinacms)

这个我还没用过，但是看效果挺好的，打算以后有机会尝试下。

## 搭建

本博客和 [投资博客](https://hk4114.github.io/investment/) 都是通过 vitepress 搭建的。

前者较为综合，内容比较杂；后者则是类似小册，内容较为单一。

### 如何部署一个博客

1. 初始化项目
```sh
pnpm add -D vitepress
pnpm vitepress init
# 有啥填啥，反正后面可以改
```

2. 创建 `git-actions`。actions -> new workflow -> set up a workflow yourself

:::details
```yml
# name名称可以任意取
name: 部署到GithubPages

on:
  # 执行 'push' 到 'main' 时触发，根据自己仓库的分支名修改
  push:
    branches: [main]

  # 允许从“操作”选项卡手动运行此工作流
  workflow_dispatch:

# 设置GITHUB_TOKEN的权限
permissions:
  contents: read
  pages: write
  id-token: write

# 设置属于'pages'组下的工作流并发，设置后只运行首个和最新的工作流，中间等待状态的工作流将被取消
concurrency:
  group: pages
  # 取消首个工作流的运行，这样在并发时就只会运行最新的
  cancel-in-progress: true

jobs:
  # 打包流程
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 检出代码到打包环境中
        uses: actions/checkout@v3
        with:
          # 获取全部提交记录，如果未启用lastUpdated，则不需要
          fetch-depth: 0
      - name: 安装PNPM
        uses: pnpm/action-setup@v2
      - name: 安装Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm
      - name: 启用Github Pages并读取文档元数据
        uses: actions/configure-pages@v3
      - name: 安装依赖
        run: pnpm install
      - name: 打包
        run: pnpm build
      - name: 上传项目
        uses: actions/upload-pages-artifact@v2
        with:
          path: docs/.vitepress/dist

  # 部署流程
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: 部署到 GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```
:::
