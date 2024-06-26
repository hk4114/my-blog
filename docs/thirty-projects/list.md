---
title: 30 个项目
description: 用30个有趣的项目成长为有趣的全栈工程师
categories:
 - 项目
top: 2
---

[[toc]]

## 博客

- 本站点，写字的地方，内容种类比较丰富
- [投资博客](https://hk4114.github.io/investment/) 简单部署，适用于内容较为单一的场景。

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

## WeChatRobot
> 项目地址: https://github.com/hk4114/WeChatBot
>
> 基于 https://github.com/lich0821/WeChatRobot 开发而来

### 环境准备
- python v3.11.9
- vscode

```sh
git clone https://github.com/lich0821/WeChatRobot.git
# 升级 pip
python -m pip install -U pip
# 安装必要依赖
pip install -r requirements.txt
# ChatGLM 还需要安装一个 kernel
ipython kernel install --name chatglm3 --user
```

### 安装微信
- [微信 3.9.2.23](https://github.com/lich0821/WeChatFerry/releases/latest)

安装依赖 `Pymem`，`pip install pymem`。

新建文件 `mock.py`
```py
#! /usr/bin/env python3
# -*- coding: utf-8 -*-

from pymem import Pymem


ADDRS = [0x2FFEAF8, 0x3020E1C, 0x3021AEC, 0x303C4D8, 0x303FEF4, 0x3040FA4, 0x30416EC]


def fix_version(pm: Pymem):
    WeChatWindll_base = 0
    for m in list(pm.list_modules()):
        path = m.filename
        if path.endswith("WeChatWin.dll"):
            WeChatWindll_base = m.lpBaseOfDll
            break

    for offset in ADDRS:
        addr = WeChatWindll_base + offset
        v = pm.read_uint(addr)
        print(v)
        if v == 0x63090A13:  # 已经修复过了
            continue
        elif v != 0x63090217:  # 不是 3.9.2.23 修复也没用
            raise Exception("别修了，版本不对，修了也没啥用。")

        pm.write_uint(addr, 0x63090A13)

    print("好了，可以扫码登录了")


if __name__ == "__main__":
    try:
        pm = Pymem("WeChat.exe")
        fix_version(pm)
    except Exception as e:
        print(f"{e}，请确认微信程序已经打开！")
```

运行微信，执行脚本 `python mock.py`

登录微信。

### 运行机器人
执行两次 `python main.py`。在文件传输助手里有 `机器人启动成功！`则启动成功。

### 接入 http 协议

```sh
pip3 install --upgrade wcfhttp -i https://mirrors.aliyun.com/pypi/simple/
```

3. 在项目仓库中修改 Settings -> Pages -> Source 为 GitHub Actions。成功
