# 现阶段值得推荐的AI模型与产品清单

> **说明**: AI领域发展迅速，本清单基于当前阶段推荐，建议定期关注产品更新

## 模型

### LLM 模型
| 推荐程度 | 名称                 | 特点/备注                              | 使用门槛 | 价格/限制         |
| -------- | -------------------- | -------------------------------------- | -------- | ----------------- |
| 最常用   | Gemini 2.5 Pro/flash | 综合性能优秀，响应速度快，支持多模态   | 低       | 有限额，Pro版付费 |
| 其他推荐 | 豆包 Seed 1.6        | 中文优化，本土化体验，支持语音对话     | 低       |                   |
| 其他推荐 | Claude 4 sonnet      | 推理能力强，适合复杂任务，代码能力突出 | 低       |                   |
| 其他推荐 | Qwen 3               | 小尺寸版本，适合本地部署，开源免费     | 中       | 开源本地部署      |

想要对比体验的话，可以在 [lmarena](https://lmarena.ai/) 大模型竞技场上体验。找到"Direct Chat"功能进行直接对话。
还提供Arena模式，允许用户同时与两个不同的AI模型对话并进行比较评价。
通过点击顶部的Leaderboard，可以查看所有大模型的当前评分排名。

#### AI 对话应用
由于模型和 AI 的对话应用有直接相关，所以这块直接介绍 AI 对话应用

| 推荐程度 | 名称     | 链接                          | 特点/备注            | 使用门槛 | 价格/限制          |
| -------- | -------- | ----------------------------- | -------------------- | -------- | ------------------ |
| 最常用   | 腾讯元宝 | https://yuanbao.tencent.com   | 能搜公众号和微信生态 | 低       |                    |
| 其他推荐 | 豆包     | https://www.doubao.com/chat   |                      | 低       |                    |
| 其他推荐 | Gemini   | https://gemini.google.com/app |                      | 低       | 有限额，Pro版付费  |
| 其他推荐 | ChatGPT  | https://chatgpt.com           |                      | 低       | 免费阉割，会员付费 |
| 其他推荐 | kimi     | https://www.kimi.com          |                      | 低       |                    |

其中 `Gemini 2.5 Pro` 作为目前最强的模型，所以详细介绍如何使用

|           网页端            |         定位         |                       特点                        |    适用人群     |
| :-------------------------: | :------------------: | :-----------------------------------------------: | :-------------: |
| https://aistudio.google.com | 面向开发者的研究平台 | 功能简陋，高级模型免费无限量，有文生图/视频等功能 | 开发者/研究人员 |
|  https://gemini.google.com  |    面向用户的产品    |              功能丰富，高级模型限量               |    普通用户     |

可以结合本地应用使用：
1. 在 https://aistudio.google.com 上获取 API Key
2. cherry studio https://www.cherry-ai.com/ 安装后配置模型

### 文生图
| 推荐程度 | 名称     | 链接                                     | 特点/备注 | 使用门槛 | 价格/限制 |
| -------- | -------- | ---------------------------------------- | --------- | -------- | --------- |
| 最常用   | 豆包生图 | https://www.doubao.com/chat/create-image |           | 低       |           |
| 其他推荐 | Imagen   | https://labs.google/fx/zh/tools/image-fx |           | 低       |           |
| 其他推荐 | 即梦     | https://jimeng.jianying.com/ai-tool/home | 剪映生态  | 低       |           |

### 文生视频
| 推荐程度 | 名称  | 链接                                                     | 特点/备注 | 使用门槛 | 价格/限制 |
| -------- | ----- | -------------------------------------------------------- | --------- | -------- | --------- |
| 最常用   | 可灵  | https://app.klingai.com/cn/image-to-video/frame-mode/new |           | 低       | 有限额    |
| 其他推荐 | Veo 3 | https://labs.google/fx/zh/tools/flow                     | 谷歌      | 低       | 有限额    |
| 其他推荐 | 即梦  | https://jimeng.jianying.com/ai-tool/home                 | 剪映生态  | 低       |           |

### 文生音频
| 推荐程度 | 名称               | 链接                                        | 特点/备注                                    | 使用门槛 | 价格/限制 |
| -------- | ------------------ | ------------------------------------------- | -------------------------------------------- | -------- | --------- |
| 最常用   | 豆包app 语音通话   | -                                           | 集成度高，使用便捷，支持实时对话             | 低       |           |
| 其他推荐 | MiniMax            | https://www.minimax.io/audio/text-to-speech | 音质优秀，支持多种语言和情感                 | 低       | 有限额    |
| 其他推荐 | memoai             | https://memo.ac/                            | 支持音频视频转文本、字幕并翻译、合成新的语音 | 中       | 有限额    |
| 其他推荐 | Azure 在线配音工具 | https://tts.femoon.top/cn                   | 支持2000字，多种语言可选                     | 低       |           |
| 其他推荐 | TikTok Voice       | https://tiktokvoice.net/                    | 在线的文本转语音，操作简单                   | 低       |           |

转播客的话，[NoteBookLM](https://notebooklm.google.com/) 和 [扣子空间](https://space.coze.cn/) 也可以实现。

### 音视频转文案

音视频转文案字幕也是一个比较常见的场景，可以使用：

| 推荐程度 | 名称                  | 链接                                             | 特点/备注 | 使用门槛 | 价格/限制            |
| -------- | --------------------- | ------------------------------------------------ | --------- | -------- | -------------------- |
| 最常用   | 腾讯文档 音视频转文字 | https://docs.qq.com/open/toolkit/av-to-text.html |           | 低       | 有文件大小限制       |
| 最常用   | 通义听悟              | https://tingwu.aliyun.com/                       |           | 低       | 有限额，付费按量计费 |
| 其他推荐 | 讯飞听见              | https://www.iflyrec.com/                         |           | 低       | 付费服务，按时长计费 |
| 其他推荐 | 飞书妙记              | https://www.feishu.cn/product/minutes            |           | 低       |                      |
| 其他推荐 | 钉钉闪记              | https://shanji.dingtalk.com/                     |           | 低       |                      |
| 其他推荐 | NoteBookLM            | https://notebooklm.google.com/                   |           | 中       | 有限额               |
| 其他推荐 | memoai                | https://memo.ac/                                 |           | 中       | 有限额               |

### 服务厂商
没啥推荐不推荐的，说不定都用不上，只是列一下，有备无患。

| 名称         | 链接                                | 特点/备注                                    | 适用场景       | 价格模式  |
| ------------ | ----------------------------------- | -------------------------------------------- | -------------- | --------- |
| 硅基流动     | https://cloud.siliconflow.cn        | 国产 AI 云平台，支持模型训练和部署           | 企业级AI开发   | 按量付费  |
| 火山引擎     | https://www.volcengine.com          | 字节跳动 AI 基础设施，提供全栈 AI 服务       | 企业级AI服务   | 按量付费  |
| OpenRouter   | https://openrouter.ai/              | 统一 API 接口，支持多个主流模型，按量付费    | 开发者/企业    | 免费      |
| 阿里云百炼   | https://bailian.console.aliyun.com/ | 阿里云AI平台，提供模型训练和推理服务         | 企业级AI开发   | 按量付费  |
| 腾讯云       | https://cloud.tencent.com           | 提供全面的 AI 开发环境和框架                 | 企业级AI开发   | 按量付费  |
| Groq         | https://groq.com/                   | 高性能 AI 推理服务，支持主流大模型           | 高性能推理需求 | 按量付费  |
| 魔搭         | https://www.modelscope.cn           | 阿里开源的模型即服务平台                     | 开源模型部署   | 免费+付费 |
| Hugging Face | https://huggingface.co/             | 最大的开源模型社区，支持模型训练、部署和分享 | 开源AI生态     | 免费+付费 |

## 产品

### Agent Deep Research
这块因为 Deep Research 产品比较多，所以单独列一项目。

| 推荐程度 | 名称                 | 链接                                                          | 特点/备注            | 使用门槛 | 价格/限制 |
| -------- | -------------------- | ------------------------------------------------------------- | -------------------- | -------- | --------- |
| 最常用   | ithy.com             | https://ithy.com/                                             | 界面简洁，搜索能力强 | 低       |           |
| 最常用   | Perplexity           | https://www.perplexity.ai                                     | 实时搜索，多源整合   | 低       | 有限额    |
| 其他推荐 | Gemini Deep Research | https://gemini.google.com/deepresearch?redirect=home&hl=en-GB | 谷歌技术，多模态支持 | 低       | 有限额    |
| 其他推荐 | 秘塔 深度探索        | https://metaso.cn/                                            | 中文优化，本土化体验 | 低       |           |
| 其他推荐 | 智谱沉思             | https://chatglm.cn/main/autoglm?lang=zh                       | 国产模型，中文友好   | 低       |           |
| 其他推荐 | kimi 探索版          | https://www.kimi.com/kimiplus/cu52bqh7l5gqdkncdtnk            | 文档分析能力强       | 低       |           |

Gemini Deep Research 有限额，但是有免费的方案，[免费DeepResearch](https://github.com/u14app/deep-research)，只需要提供 api key，选择对应模型，即可使用。在线体验：https://research.u14.app/

### Agent
| 推荐程度 | 名称          | 链接                         | 特点/备注                                                                      | 使用门槛 | 价格/限制            |
| -------- | ------------- | ---------------------------- | ------------------------------------------------------------------------------ | -------- | -------------------- |
| 最常用   | 扣子          | https://www.coze.cn/         | 选择扣子空间或者工作流，功能丰富，生态完善                                     | 中       |                      |
| 最常用   | 豆包          | https://www.doubao.com/chat/ | 本土化体验，语音交互，集成度高                                                 | 低       |                      |
| 其他推荐 | Manus         | https://www.manus.ai/        | 界面美观，操作简单，支持多种工作流                                             | 低       |                      |
| 其他推荐 | dify          | https://dify.ai/             | 无法直接使用，可视化构建 LLM 应用的开发平台                                    | 高       | 开源免费，企业版付费 |
| 其他推荐 | n8n           | https://n8n.io/              | 无法直接使用，开源可视化工作流工具，通过拖放节点连接应用与服务，实现自动化任务 | 高       | 开源免费，云版付费   |
| 其他推荐 | cherry studio | https://www.cherry-ai.com/   | 无法直接使用，需要配参数，适合开发者                                           | 高       |                      |

Manus 体验渠道 - https://manus.im/invitation/UVTDGHVDIQLRC 这是个邀请链接，每人可得 500 积分

### AI 编程工具
严格来说应该属于 Agent，但是场景过于垂直，就单独列一项。

| 推荐程度 | 名称       | 链接                                        | 特点/备注                              | 使用门槛 | 价格/限制          |
| -------- | ---------- | ------------------------------------------- | -------------------------------------- | -------- | ------------------ |
| 最常用   | Cursor     | https://www.cursor.com/                     | 基于VSCode，AI编程助手，代码生成能力强 | 中       |                    |
| 其他推荐 | 通义灵码   | https://lingma.aliyun.com/                  | 阿里出品，中文友好，集成度高           | 中       |                    |
| 其他推荐 | Gemini CLI | https://github.com/google-gemini/gemini-cli | 命令行工具，轻量级，适合开发者         | 高       | 需要API Key        |
| 了解跟进 | Trae       | https://www.trae.ai/                        | 字节                                   | 中       | 免费阉割，会员付费 |
| 了解跟进 | CodeBuddy  | https://copilot.tencent.com/                | 腾讯                                   | 中       |                    |

### 多模态

#### AI 辅助学习
- [秘塔 AI 今天学点啥](https://metaso.cn/study)
  - 辅助培训课件+音频+ppt
  - 英文 pdf 转中文讲解视频
  - **特点**: 专门针对学习场景优化，支持多种学习材料格式
  - **使用门槛**: 低



## 使用建议

### 新手入门推荐
1. **对话应用**: 豆包或腾讯元宝
2. **文生图**: 豆包生图
3. **音视频转文字**: 腾讯文档或通义听悟

### 进阶用户推荐
1. **模型**: Gemini 2.5 Pro
2. **Agent**: 扣子或者豆包（功能最全面）
3. **编程工具**: Cursor（AI编程体验最佳）
4. **深度研究**: Perplexity（搜索能力最强）和 Gemini DeepResearch

