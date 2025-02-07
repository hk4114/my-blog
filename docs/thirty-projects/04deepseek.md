# DeepSeek 本地部署

## 【本地部署】LMStudio

利用 LMStudio 本地部署 DeepSeek-R1 模型，并部署 API 可以接入到 IDE 中（修改配置）。

下载地址：https://lmstudio.ai/docs

LMStudio 的默认模型下载地址为 Hugging Face 平台，但由于众所周知的原因，我们需要设置一下国内可访问的 HF 镜像源。

一共需要修改两个文件。

- `LMStudio文件位置\resources\app\.webpack\renderer\main_window.js`
- `LMStudio文件位置\resources\app\.webpack\main\index.js`

将 `https://huggingface.co/` 全部替换为 `https://hf-mirror.com/`，然后重新打开 LMStudio 即可。

修改完成之后重新打开 LMStudio，首先点击左侧的放大镜按钮，在搜索框搜索 r1，然后点击下面的搜索结果，进行下载即可。

部署 r1 api

1. 点击 LMStudio 主界面的第二个按钮，可以进入开发者界面，打开此处的 api 部署服务，并在 Setting 中选择全部打开，这样就算 windows 部署 LMStudio 之后也可以在 wsl 中访问到服务。

## 【本地部署】Ollama

下载地址：https://ollama.com/download

1. 验证安装。在命令行输入 ollama，如果出现以下信息，说明 Ollama 已经成功安装。
2. 拉取模型
   1. 从命令行，参考 [Ollama 模型列表](https://ollama.com/library) 和 [文本嵌入模型列表](https://python.langchain.com/v0.2/docs/integrations/text_embedding/) 拉取模型。
   2. deepseek-r1:1.5b 和 nomic-embed-text 为例: 命令行输入 `ollama pull deepseek-r1:1.5b`、 `ollama pull nomic-embed-text` 拉取 [文本嵌入模型 nomic-embed-text](https://ollama.com/search?c=embedding)

当应用运行时，所有模型将自动在 localhost:11434 上启动。

3. Step4：部署模型，命令行窗口运行以下命令，部署模型。　`ollama run deepseek-r1:1.5b`

## 【api】chatbox

硅基流动：https://cloud.siliconflow.cn/models 获取密钥

chat-box: https://chatboxai.app/zh

## 【api】anything llm

下载地址：https://anythingllm.com/desktop

## deepseek 使用渠道

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

### 【试验场】SiliconFlow

> https://siliconflow.cn/zh-cn/

缺点：

1. 有限额（免费赠送的额度大概可以对话 1000 次）
2. 在线体验的是试验场，无法保留历史信息
3. 无法联网。

### 【试验场】open router

> https://openrouter.ai/

缺点：

1. 无法联网
2. 需要注册
3. 免费，不稳定

### 【试验场】火山引擎

> https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat

### 【试验场】阿里云百炼

> https://api.together.ai/playground/chat/deepseek-ai/DeepSeek-R1

### 【试验场】腾讯云

> https://console.cloud.tencent.com.cn/tione/v2/aimarket

### Groq

> https://groq.com/

### nvidia nim

> https://build.nvidia.com/deepseek-ai/deepseek-r1

缺点：

1. 英文。

### github playground

> https://github.com/marketplace/models/azureml-deepseek/DeepSeek-R1/playground

### AskManyAI

> https://askmanyai.cn/login

### DeepSeek 实用集成

> https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/README_cn.md

## 接 api 工具

### chatbox

> https://chatboxai.app/zh

缺点：ui 有点丑

### anything llm

> https://anythingllm.com/desktop

自己在用，没感觉有啥问题。

### cherry studio

> https://cherry-ai.com/

风格挺喜欢的。

## 测试

每局随机抽取四张扑克牌，可以重复使用。

仅允许使用加法（+）、减法（-）、乘法（×）、除法（÷）四种运算符。

每张牌必须使用且只能使用一次。

目标是通过这些运算使四张牌的计算结果等于 24。

第一组：3, 6, 7, 5

第二组：9, 1, 5, 4
