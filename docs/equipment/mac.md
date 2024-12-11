---
title: Mac
description: mac 的常用命令集合
---

# Mac 教程

> https://44maker.netlify.app/wiki/mac/test

## 验机

- [设备序列号](https://checkcoverage.apple.com/?locale=zh_CN)
- 开机 -> 苹果按钮，点击关于本机 -> 系统报告 -> 核对型号参数 -> 点击电源，核对效能信息中的循环计数 10 次以下为正常

## 系统设置

## 常用软件

### 软件商店

- [appstorrent](https://appstorrent.ru/) 俄罗斯网站
- [MacYY](https://maczz.net/)
- [第一个网站的资源](https://xmac.app/app?page=2)
- [Mac 软件下载](https://www.downpj.com/)

### 前置工作

1. 安装 Xcode Command Line Tools `xcode-select --install`

#### 安装任意来源的 App

1. 允许安装任意来源的 App `sudo spctl --master-disable`
2. 系统偏好设置 -> 安全性与隐私 -> 点击左下角的小锁

#### Homebrew

安装

```sh
# 正常
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# 国内环境
/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"

# 卸载
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
# 国内
/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/uninstall.sh)"
```

**如果**出现卡顿`==> Tapping homebrew/core Cloning into ‘/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core’…`需要先换源，然后再安装：

```sh
cd "$(brew --repo)/Library/Taps/"
mkdir homebrew && cd homebrew
git clone https://mirrors.ustc.edu.cn/homebrew-core.git
# 再执行
/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
# 安装完成后根据提示运行
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

安装 cask `brew install cask`

**常用命令**

```sh
# 下载
brew install {keyword}
brew install --cask {keyword}
# 更新
brew update
# 搜索相关包
brew search {keyword}
# 卸载
brew uninstall {keyword}
# 查看已安装的软件
brew list
```

### 日常软件
- LuLu 开源，免费。附上常见的阻止规则 [blockyouxlist](https://ceadd.ca/blockyouxlist.txt)，勾选然后粘贴链接即可.`brew install --cask lulu`.
- Keka 压缩解压工具。`brew install --cask keka`
- IINA 视频播放器。`brew install --cask iina`
- ishot 多功能截屏工具.应用商店下载
- QuickRecorder 屏幕录制工具。`brew install lihaoyun6/tap/quickrecorder`
- [TTime](https://ttime.timerecord.cn/) 翻译软件
- KeyboardHolder 记住语言输入场景，自动切换 `brew install --cask keyboardholder`
- [keycastr](https://github.com/keycastr/keycastr) 显示输入的按键，开源免费
- 微信
- 飞书
- chrome

## 开发配置
- Docker `brew install --cask docker`
- tree 文件夹结构
- Vscode

### jenv

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

### volta node 版本管理

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

### yrm 镜像源管理工具

```sh
# 查看可用源
yrm ls
# 添加源
yrm add taobao https://registry.npmmirror.com
# 切换源
yrm use npm
```


### pyenv

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

### Miniconda
pyenv管理的python用于python开发。conda用于机器学习、深度学习。安装Miniconda 后，打开终端默认会激活 base 环境，所以通过命令取消掉。

``

下载地址：
- 官方：https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh
- 镜像：https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-MacOSX-arm64.sh

```sh
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh
sh Miniconda3-latest-MacOSX-arm64.sh

# 安装最后出现
Do you wish the installer to initialize Miniconda3 by running conda init? [yes|no]
# yes
# 之后自动会在 ~/.zshrc 执行初始化
```
常用命令
```sh
# 查看版本
conda -V

# 取消自动激活环境
conda config --set auto_activate_base False

# 激活自动激活环境 
conda config --set auto_activate_base True

# 列出所有环境
conda env list

# 创建虚拟环境
conda create -n py38 python=3.8
conda activate py38
conda activate base[虚拟环境名]

# 退出当前环境
deactivate 环境名字

# 删除环境
conda remove -n 环境名字 --all

# 换源
conda config --add default_channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
conda config --set 'custom_channels.conda-forge' https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud

# 设置 conda 使用更快的 libmamab solver
conda install -n base conda-libmamba-solver
conda config --set solver libmamba

# conda-forge 为 conda 增加 conda-forge 通道，可以安装更多的软件包
conda config --add channels conda-forge
conda config --set channel_priority true

# 显示通道地址
conda config --set show_channel_urls true

```

## 常见问题

### Mac 无法连接 wifi 的处理方法

先尝试这种办法

1. 在设置里找到网络“wifi”右击“删除服务”
2. 右下角三个点 ➡️“添加服务”
3. 接口选择为“wifi”

或者这种方法

1. 设置 ➡️ 网络 ➡️ 右下角三个点 ➡️“位置”➡️“编辑位置”
2. 点 ➕ 号，名称随意

再试试这个办法

1. 打开「访达」
2. 在菜单栏中选取“前往”>“前往文件夹”（用快捷键：Command+Shift+G）
3. 输入：`/Library/Preferences/SystemConfiguration`
4. 删除 `SystemConfiguration` 文件夹下除 `com.apple.boot.plist` 以外所有文件（最好也备份一下删除的文件）
5. 重新启动电脑，重新配置网络，操作完成
