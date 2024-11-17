---
title: Mac 
description: mac 的常用命令集合
---

# Mac 教程
> https://44maker.github.io/wiki/Mac/index.html

## 软件商店
- [appstorrent](https://appstorrent.ru/) 俄罗斯网站
- [MacYY](https://maczz.net/)
- [第一个网站的资源](https://xmac.app/app?page=2)
- [Mac 软件下载](https://www.downpj.com/)

## Homebrew
常用命令
```sh
# 更新
brew update 
# 搜索相关包
brew search {keyword}
# 卸载
brew uninstall {keyword}
# 查看已安装的软件
brew list
```

## pyenv
```sh
# 查看可安装的版本
pyenv install -l
# 安装与卸载
pyenv install {version}
pyenv uninstall {version}
#当前版本
pyenv version
#查看已经安装的Python版本
pyenv versions
# shell 会话设置 只影响当前的shell会话
pyenv shell {python版本}
# 取消 shell 会话的设置
pyenv shell --unset
# local 本地设置 只影响所在文件夹
pyenv local {python版本}
# global 全局设置 一般不建议改变全局设置
pyenv global {python版本}
```

## jenv
```sh
#查看当前的 Java 版本
jenv version
#列出目前 jenv 所有可切换管理的版本
jenv versions

#手动添加本地的 Java Home 路径
jenv add /Library/Java/JavaVirtualMachines/jdk-20.jdk/Contents/Home/
jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_291.jdk/Contents/Home/
jenv add /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home/

#global 全局设置 一般不建议改变全局设置
jenv global {java 版本}

#shell 会话设置 只影响当前的shell会话
jenv shell {java 版本}
#取消 shell 会话的设置
jenv shell --unset

#local 本地设置 只影响所在文件夹
jenv local {java 版本}
```

## volta node版本管理
```sh
# 查看已安装版本
volta list node
# 安装目标版本
volta install node@18.16.0
# 切换全局默认版本
volta install node@version
# 设置项目默认版本
volta pin node@16
```

## yrm 镜像源管理工具
```sh
# 查看可用源
yrm ls
# 添加源
yrm add taobao https://registry.npmmirror.com
# 切换源
yrm use npm
```

## MacBook无法连接WI-FI的处理方法
先尝试这种办法
1. 在设置里找到网络“Wi-Fi”右击“删除服务”
2. 右下角三个点➡️“添加服务”
3. 接口选择为“Wi-Fi”

或者这种方法
1. 设置➡️网络➡️右下角三个点➡️“位置”➡️“编辑位置”
2. 点➕号，名称随意

再试试这个办法
1. 打开「访达」
2. 在菜单栏中选取“前往”>“前往文件夹”（用快捷键：Command+Shift+G）
3. 输入：`/Library/Preferences/SystemConfiguration`
4. 删除 `SystemConfiguration` 文件夹下除 `com.apple.boot.plist` 以外所有文件（最好也备份一下删除的文件）
5. 重新启动电脑，重新配置网络，操作完成
