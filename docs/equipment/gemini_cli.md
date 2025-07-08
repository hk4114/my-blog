# 赛博保姆出列！Gemini CLI 手把手教程

## 准备环境

安装 [node.js](https://nodejs.org/en/download/)

推荐使用 [volta](https://volta.sh/) 或者 [nvm](https://nvm.uihtm.com/doc/guide.html) 进行 node.js 环境管理。

## 安装设置

1. 安装

```bash
npm install -g @google/gemini-cli
```

2. 设置

```bash
npx @google/gemini-cli
# 选择主题并授权，登录个人谷歌账号进行授权，即可开始使用。
```

如果需要使用特定模型，或者免费额度不够用，可以去 [Google AI Studio](https://aistudio.google.com/apikey) 生成一个 API Key。

通过环境变量配置：`export GEMINI_API_KEY="apiKey"`

如遇 Google Cloud 项目认证问题，在 Google Cloud 创建一个项目得到 project_id。
在终端中执行下面的指令，将 project_id 写入到环境变量中：

```sh
echo 'export GOOGLE_CLOUD_PROJECT=<你的 project_id>' >>
~/.zshrc
# 刷新生效
source ~/.zshrc
```

## 测试效果

```md
<!-- 问答能力 -->

java lambda 表达式是对什么传统实现方法的升级

<!-- 搜索能力 -->

请使用 Google 搜索功能，今天的日期，以及今天是什么节日？

<!-- 代码生成与网页搭建 -->

创建一个贪吃蛇游戏，使用 html+css+js 代码实现

<!-- 多模态-视频 -->

选择对应的视频文件，输入提示词：这个视频主要讲了什么

<!-- 多模态-图片 -->

选择对应的图片文件，输入提示词：这个图片是什么风格的，给这个图片打一个标签。

<!-- 多模态-文件 -->

选择要分析的文件，输入提示词：分析一下这个文件，这个文件的内容主要是什么，包含了哪些信息。
```

## 其他设置

### memory

可以为项目设置自定义记忆文件，遵循我们设置的规则进行编程开发。

当使用`/memory show`的时候可以看到，需要我们在 GEMINI.md 的文件中设置对应的规则

创建 GEMINI.md 文件并添加相应规则后，执行 `/memory refresh` 即可使设置生效。此后，再次执行命令时，Gemini CLI 会自动根据配置的规则进行响应。

### mcp

`cd ~/.gemini/` 在这个目录下显示如下的文件，settings.json 是 Gemini-CLI 的配置文件。

```sh
{
  "theme": "Default",
  "selectedAuthType": "oauth-personal",
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

## 为什么我会看好 Gemini CLI

现阶段各个厂商在模型和场景方面各有优劣。
比如：

- OpenAI 和 Anthropic 有模型没场景
- 苹果 和 微软 有场景没模型
- 只有 Meta 和 Google 有模型有场景

但 Meta 的技术底蕴比 Google 还是差点，Transformer 架构是 Google 提出来的，预训练语言模型范式是 Google 提出来的，场景上也是 Google 更丰富。

## 拓展阅读

- [Gemini CLI 内置命令](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/commands.md)
