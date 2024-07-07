---
title: 聊天（客服）机器人
sidebar: true
outline: [2,3]
description: 通过微信、钉钉、飞书机器人的搭建，对服务器端初步了解。
categories:
 - 项目
recommend: 3
---

[[toc]]

# 聊天（客服）机器人

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
