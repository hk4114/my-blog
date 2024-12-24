# 软件插件

## 浏览器插件
  - [code-box](https://github.com/027xiguapi/code-box) 一个开源的浏览器插件，用来解除 CSDN/知乎/脚本之家/博客园/博客园/51CTO 博客等网站的限制（比如要求登录）。
  - [wechat-article-exporter](https://github.com/jooooock/wechat-article-exporter) 微信公众号文章批量下载工具
  - [Cloud Document Converter](https://github.com/lujunji4113/cloud-document-converter) 开源的飞书文档下载 Chrome 插件


## AI 编程资源汇总
### 现阶段的工具
|                                名称                                 | 魔法  |                             介绍                             |
| :-----------------------------------------------------------------: | :---: | :----------------------------------------------------------: |
|                             智能编辑器                              |       |                                                              |
|                  [Cursor](https://www.cursor.com/)                  |  否   |   基于AI的代码编辑器，提供实时代码补全、重构建议和错误检测   |
|                [MarsCode](https://www.marscode.cn/)                 |  否   |                           个人免费                           |
|   [github Copilot](https://docs.github.com/zh/copilot/quickstart)   |  否   |      集成于VS Code等主流IDE，提供智能代码建议和自动补全      |
|              [Windsurf](https://codeium.com/windsurf)               |  是   | 专注于代码重构和优化的智能编辑器，提供代码质量分析和优化建议 |
|                           代码生成与转换                            |       |                                                              |
|                      [v0.dev](https://v0.dev/)                      |  是   |     专注于前端开发的AI工具，可直接将设计转换为React代码      |
|                    [bolt.new](https://bolt.new/)                    |  是   |                 可视化编辑、小网站、一键部署                 |
|                            开发辅助插件                             |       |                                                              |
|            [通义灵码](https://tongyi.aliyun.com/lingma)             |  否   |                           个人免费                           |
|               [文心快码](https://comate.baidu.com/zh)               |  否   |                           个人免费                           |
| [Amazon CodeWhisperer](https://aws.amazon.com/cn/pm/codewhisperer/) |  是   |                             免费                             |


## Cursor

### 快捷键
1.  全局AI。在Cursor的AI输入框中(如`Cmd K`、`Cmd L`或Terminal `Cmd K`)，你只需输入 `@` 符号，就会弹出一个建议列表，显示可引用的上下文信息。这个列表会根据你的输入自动过滤，只显示最相关的建议。
2.  Tab功能。代码补全、并且是多行补全。
3.  提示框功能(Cmd + K)
4.  聊天功能（Cmd + L）适合学习新技术或框架、获取代码建议和最佳实践

### 如何使用 Composer
1. 打开 Cursor 设置，找到"Beta"部分，激活"Composer"、
2.  composer（Ctrl/⌘ + I）打开 Composer 进行更复杂的 AI 辅助任务

### 快速回答

在提示栏中按`Option/Alt Enter`，立即回答关于选中内容和相关上下文的任何问题，在这个过程中不会生成或修改代码。

### `@web` 联网检索

`Cmd + L` 在输入框输入 `@web` 可以联网检索。

### rules
可以理解为 system prompt。指导 Cursor 如何工作。可以参考 [cursor directory](https://cursor.directory/)  上的推荐。

#### 设置全局规则
1. 打开设置
2. 导航至 `General` > `Rules for AI`
3. 在提供的文本区域输入您的自定义指令
4. 点击"保存"以应用您的全局规则，记得启用 `include .cursorrules file` 。

#### 创建项目特定规则(推荐)
1. 在项目根目录创建一个 .cursorrules 文件
2. 将自定义指令添加到此文件中


### 【场景】快速生成 git commit message

1.  `git diff | cat` 获取最近修改
2.  `git add .` 把所有修改添加到暂存区
3.  `Cmd K` 提示栏中输入 `git commit message`
4.  `Cmd + Enter` 确认
5.  `Cmd + I` 唤起 Cursor Composer 窗口，输入需求对文件和文件夹进行调整。

### 参考资料
- [cursor 视频](https://space.bilibili.com/351969226/video)
- [cursor directory](https://cursor.directory/) cursor 提示词库，在上面分享了很多 cursor rules 以及 使用教程。
- [AI 编程云课堂](https://bytedance.larkoffice.com/docx/Bd5HdlklBocDt5xXpQCc6Lkdnmc)