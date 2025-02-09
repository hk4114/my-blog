# 一文掌握 DeepSeek 全部使用方案：从免费资源到本地部署，再到 API 调用

随着 DeepSeek 的日益火热，官网经常出现繁忙状态。为了方便大家使用 DeepSeek R1，本文整理了多种使用途径，包括直接使用、本地部署、API 调用以及联网搜索等方案。其中，API 调用方式是最推荐的使用方式。

## 可以直接使用的资源

- 【搜索】秘塔搜索 https://metaso.cn/
- 【搜索】Perplexity AI https://www.perplexity.ai/
- 【聚合】Monica https://poe.com/DeepSeek-R1
- 【聚合】POE https://poe.com/DeepSeek-R1

### 【搜索】 秘塔搜索

> https://metaso.cn/

秘塔搜索提供了基于 DeepSeek 的搜索服务，但存在以下限制：

1. 需要登录才能使用
2. 仅支持单轮对话，主要用于搜索，不具备上下文记忆功能

### 【搜索】Perplexity AI

> https://www.perplexity.ai/

作为一个强大的 AI 搜索引擎，但有以下使用限制：

1. 需要登录账号
2. 需要科学上网
3. 免费版有使用次数限制

### 【聚合】Monica

> https://monica.im/home/chat/Monica/monica

提供多模型聚合服务，但主要缺点是：

- 付费较贵

### 【聚合】POE

> https://poe.com/DeepSeek-R1

同样提供多模型聚合服务，但：

- 付费价格较高

## 本地部署方案

### LMStudio

LMStudio 支持本地部署 DeepSeek-R1 模型，并可以部署 API 接入 IDE。

下载地址：https://lmstudio.ai/docs

由于 LMStudio 默认使用 Hugging Face 平台下载模型，国内用户需要配置镜像源：

1. 需要修改的文件：
   - `LMStudio文件位置\resources\app\.webpack\renderer\main_window.js`
   - `LMStudio文件位置\resources\app\.webpack\main\index.js`

2. 将所有 `https://huggingface.co/` 替换为 `https://hf-mirror.com/`

3. 重启 LMStudio 后：
   - 点击左侧放大镜按钮
   - 搜索框输入 "r1"
   - 选择搜索结果进行下载

#### API 部署步骤

1. 点击主界面第二个按钮进入开发者界面
2. 开启 API 部署服务
3. 在 Settings 中启用所有选项（确保 Windows WSL 可访问）

### Ollama

下载地址：https://ollama.com/download

部署步骤：

1. 安装验证：命令行输入 `ollama` 确认安装成功

2. 拉取模型：
```bash
# 拉取 DeepSeek R1 模型
ollama pull deepseek-r1:1.5b
# 拉取文本嵌入模型
ollama pull nomic-embed-text
```

3. 启动服务：
   - 模型将在 localhost:11434 上自动启动
   - 运行命令：`ollama run deepseek-r1:1.5b`

## API 调用方案（推荐）

相比本地部署，API 调用方式更适合实际工作场景。以下是推荐的工具和平台：

### 本地工具

- Anything LLM：https://anythingllm.com/desktop（个人使用体验良好）
- Cherry Studio：https://cherry-ai.com/（界面设计优雅）
- Chatbox：https://chatboxai.app/zh

### API 服务提供商

- 硅基流动：https://cloud.siliconflow.cn/models
- 火山引擎：https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat
- OpenRouter：https://openrouter.ai/
- 阿里云百炼：https://api.together.ai/playground/chat/deepseek-ai/DeepSeek-R1
- 腾讯云：https://console.cloud.tencent.com.cn/tione/v2/aimarket
- Groq：https://groq.com/（基于 Ollama 70B 模型蒸馏）
- NVIDIA NIM：https://build.nvidia.com/deepseek-ai/deepseek-r1（服务稳定性有待提升）

使用流程：注册账号 → 生成 API Key → 配置本地工具 → 选择模型 → 开始对话

##### 硅基流动
> https://cloud.siliconflow.cn/models

特点：
- 免费额度：约 1000 次对话
- 在线试验场不支持保存历史记录

##### 火山引擎
> https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat

优势：
- 上下文长度充足
- 响应稳定

限制：
- 使用额度有限

##### OpenRouter
> https://openrouter.ai/

优势：
- 免费使用

限制：
- 不支持联网
- 需要注册
- 服务稳定性待改善

### 推荐组合

> 推荐搭配：
> - 工具：[Cherry Studio](https://cherry-ai.com/)
> - 接口：[火山引擎-火山方舟](https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat)

## 联网搜索配置

> 环境要求：Miniconda/pyenv

配置步骤：

1. 使用 Conda 创建 Python 3.11 环境：
   ```bash
   conda create -n webui python=3.11
   conda activate webui
   pip install open-webui
   ```

2. 启动服务：
   ```bash
   open-webui serve
   ```

## 模型能力测试

### 测试一：24点游戏

规则：
- 随机抽取 4 张扑克牌（可重复）
- 仅可使用加(+)、减(-)、乘(×)、除(÷)运算
- 每张牌必须且只能使用一次
- 计算结果需等于 24

测试数据：
- 第一组：3, 6, 7, 5
- 第二组：9, 1, 5, 4

### 测试二：网络梗理解

要求：用一个字回答"什么你太美"（禁止搜索）

## 更多集成方案

> 详见：[DeepSeek 官方集成方案](https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/README_cn.md)
