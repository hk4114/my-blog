# DeepSeek 资源整理

## 可以直接使用的资源

- 【搜索】秘塔搜索 https://metaso.cn/
- 【搜索】Perplexity AI https://www.perplexity.ai/
- 【聚合】Monica https://poe.com/DeepSeek-R1
- 【聚合】POE https://poe.com/DeepSeek-R1

### 【搜索】 秘塔搜索

> https://metaso.cn/

缺点：

1. 需要登陆。
2. 不支持多轮对话，主要功能是搜索，不具备上下文记忆的功能。

### 【搜索】 Perplexity AI

> https://www.perplexity.ai/

缺点：

1. 需要登陆
2. 需要访问外网。
3. 有次数限制

### 【聚合】Monica

> https://monica.im/home/chat/Monica/monica

缺点：

1. 贵。

### 【聚合】POE

> https://poe.com/DeepSeek-R1

缺点：

1. 要钱，贵

## 本地部署

### LMStudio

利用 LMStudio 本地部署 DeepSeek-R1 模型，并部署 API 可以接入到 IDE 中（修改配置）。

下载地址：https://lmstudio.ai/docs

LMStudio 的默认模型下载地址为 Hugging Face 平台，但由于众所周知的原因，我们需要设置一下国内可访问的 HF 镜像源。

一共需要修改两个文件。

- `LMStudio文件位置\resources\app\.webpack\renderer\main_window.js`
- `LMStudio文件位置\resources\app\.webpack\main\index.js`

将 `https://huggingface.co/` 全部替换为 `https://hf-mirror.com/`，然后重新打开 LMStudio 即可。

修改完成之后重新打开 LMStudio，首先点击左侧的放大镜按钮，在搜索框搜索 r1，然后点击下面的搜索结果，进行下载即可。

#### 部署 r1 api

1. 点击 LMStudio 主界面的第二个按钮，可以进入开发者界面，打开此处的 api 部署服务，并在 Setting 中选择全部打开，这样就算 windows 部署 LMStudio 之后也可以在 wsl 中访问到服务。

### Ollama

下载地址：https://ollama.com/download

1. 验证安装。在命令行输入 ollama，如果出现以下信息，说明 Ollama 已经成功安装。
2. 拉取模型
   1. 从命令行，参考 [Ollama 模型列表](https://ollama.com/library) 和 [文本嵌入模型列表](https://python.langchain.com/v0.2/docs/integrations/text_embedding/) 拉取模型。
   2. deepseek-r1:1.5b 和 nomic-embed-text 为例: 命令行输入 `ollama pull deepseek-r1:1.5b`、 `ollama pull nomic-embed-text` 拉取 [文本嵌入模型 nomic-embed-text](https://ollama.com/search?c=embedding)

当应用运行时，所有模型将自动在 localhost:11434 上启动。

3. 部署模型，命令行窗口运行以下命令，部署模型。　`ollama run deepseek-r1:1.5b`

## 利用 api（推荐）
本地部署的参数都比较少，知道怎么去部署就行了，具体到实际工作生活场景，更推荐使用 api 接口的方式，从以下几种软件中挑选自己喜欢的工具。

### 本地工具
- anything llm：https://anythingllm.com/desktop 自己在用，没感觉有啥问题。
- cherry studio：https://cherry-ai.com/ 风格挺喜欢的。
- chatbox: https://chatboxai.app/zh 


### 提供接口平台
- 硅基流动：https://cloud.siliconflow.cn/models
- 火山引擎: https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat
- open router: https://openrouter.ai/
- 阿里云百炼： https://api.together.ai/playground/chat/deepseek-ai/DeepSeek-R1
- 腾讯云：https://console.cloud.tencent.com.cn/tione/v2/aimarket
- Groq：https://groq.com/ 蒸馏 ollama 70b
- nvidia nim: https://build.nvidia.com/deepseek-ai/deepseek-r1 不稳定

基本操作逻辑都是：注册 - 生成key - 填入本地工具 - 选择模型 - 开始对话。

#### 硅基流动
> https://cloud.siliconflow.cn/models

缺点：
1. 有限额（免费赠送的额度大概可以对话 1000 次）
2. 在线体验的是试验场，无法保留历史信息

#### 火山引擎

> https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat

优点：上下文够长，反应稳定。

缺点：
1. 有限额

#### open router

> https://openrouter.ai/

优点：免费

缺点：

1. 无法联网
2. 需要注册
3. 不稳定

### 案例（推荐）

> 工具：[cherry studio](https://cherry-ai.com/)
> 
> 接口：[火山引擎-火山方舟](https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat)


## 接入联网搜索
开发环境：


## 测试是否满血

### 测试一
每局随机抽取四张扑克牌，可以重复使用。

仅允许使用加法（+）、减法（-）、乘法（×）、除法（÷）四种运算符。

每张牌必须使用且只能使用一次。

目标是通过这些运算使四张牌的计算结果等于 24。

第一组：3, 6, 7, 5

第二组：9, 1, 5, 4

### 测试二
网络梗 什么你太美 用一个字回答 禁止搜索。

## DeepSeek 应用集成

> https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/README_cn.md
