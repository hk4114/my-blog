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
- AskManyAI：https://askmanyai.cn/login 免费，联网搜索 + 图片对话 + 文件上传
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
>
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

### 测试一：24 点游戏

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

## SFT 模型 vs RL 模型

想象在教一个学生学习：

- SFT 模型就像手把手教学，一步步告诉学生该怎么做。我们需要清晰地表达自己的思路，通过引入 Few-shots 来示范我们想要的结果。
- RL 模型则像给出考试题目和评分标准，让学生自己思考如何从问题（Q）得出答案（A）。通过假设 → 验证 → 排除的链条逼近真相。

|            | SFT 模型         | RL 模型                            |
| ---------- | ---------------- | ---------------------------------- |
| 教学方式   | 手把手教具体步骤 | 只给目标让学生自己思考             |
| 最佳提示词 | 详细的分步指南   | 清晰的目标和关键要求               |
| 生活比喻   | 菜谱式教学       | 开放式解题，只给作文题目和评分标准 |

## 为什么要了解这两种模型？

| 维度     | SFT 模型（监督微调）          | RL 模型（强化学习）            |
| -------- | ----------------------------- | ------------------------------ |
| 技术原理 | 基于标注数据的指令微调        | 通过奖励机制优化策略网络       |
| 训练方式 | 分步教学：输入-输出的精确对齐 | 目标导向：定义奖励函数自主探索 |
| 数据依赖 | 依赖高质量标注指令数据        | 需要偏好数据构建奖励模型       |

早期的 AI 助手（如 GPT-3）主要采用 SFT（监督式微调）训练。使用这类模型时，我们需要像写菜谱一样详细说明每一步该怎么做。

但现在的 AI（如 GPT-4）更多采用 RL（强化学习）训练，它们更像一个会独立思考的助手。只需要说明目标，它就能自己规划路径，通过不断尝试找到最佳解决方案。

这就像教小朋友做题，SFT 模型需要老师给出完整解题步骤，而 RL 模型只需要告诉对错，让小朋友自己摸索解题方法。

## 如何编写提示词

简单来说，就是给模型一个起点（Q）和一个终点（A），就像告诉它 “我要从家去公司”，至于中间怎么走，让模型自己去推理规划。

起点即任务信息，要求越详细，得到的结果越具体。经常使用之后发现写提示词的时候把握三个要点能提升质量：

|          | 要点                     | 举例                              |
| -------- | ------------------------ | --------------------------------- |
| 说清起点 | 你现在要解决什么问题？   | 我需要向高中生解释量子力学        |
| 明确终点 | 你希望得到什么样的回答？ | 用生活案例比喻，控制在 500 字以内 |
| 设置界限 | 绝对不能出现什么？       | 不要用专业术语，拒绝分点陈述      |

### 实践案例对比

**基础版提示词**（不够清晰）
"请解释量子隧穿效应"

**优化版提示词**（更有指导性）

```
扮演角色：著名物理学家费曼
目标听众：对物理感兴趣的高中生
任务要求：
1. 用穿墙的足球来解释量子隧穿（200字）
2. 联系日常生活解释不确定性原理（100字）
3. 用一句话引发思考

表达要求：
- 多用生活化的比喻
- 避免专业公式
- 重点突出"概率"这个核心概念
```

## 更多集成方案

> 详见：[DeepSeek 官方集成方案](https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/README_cn.md)
