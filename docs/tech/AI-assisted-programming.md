# AI 辅助编程

## AI 编程资源汇总
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

### 【场景】 Figma 转换为代码

1. 使用 Visual Copilot 插件导出 Figma 设计
2. 从 Builder.io 复制生成的指令
3. 将该指令直接粘贴到 Cursor 的终端机并生成代码


### 参考资料
- [cursor directory](https://cursor.directory/) cursor 提示词库，在上面分享了很多 cursor rules 以及 使用教程。
- [AI 编程云课堂](https://bytedance.larkoffice.com/docx/Bd5HdlklBocDt5xXpQCc6Lkdnmc)

- https://juejin.cn/post/7444022992777527348
- [新功能 | 告别复制粘贴，一键 Apply 让你编程效率再提升！](https://mp.weixin.qq.com/s/jszvVZAdD1n-gyLtIot3Aw)
- [Task3：学AI编程做项目的方法论，构建自己的应用](https://www.datawhale.cn/activity/116/23/96?rankingPage=1&_refluxos=a10)
- [「人人皆是开发者」的大模型时代来了，5大开发者利器](https://mp.weixin.qq.com/s/gH5krrn6b2nd3ha1WaravA)
- [Cursor 生产力指南](https://c6k.app/posts/cursor-guide)
- https://www.bilibili.com/video/BV1GSDZYpEY1/
- https://space.bilibili.com/351969226/video

1. [MarsCode快速理解开源项目](https://live.marscode.cn/7116/8728899)
2. [入门到进阶，用豆包MarsCode 学习大模型｜Vol.2 检索增强](https://live.marscode.cn/7116/601669) [课程文档](https://bytedance.larkoffice.com/docx/O598dmlIOocSsjxLO1ec2uLMn8e)
3. [用豆包 MarsCode 让飞书个性签名动起来](https://live.byteoc.com/2333/9955066) / [课程文档](https://bytedance.larkoffice.com/docx/Qh68dUEmzoVpsOxkT9tcKa55nkh) / [作业提交](https://bytedance.larkoffice.com/share/base/form/shrcni6hfJjAFIWCC8ZNE0cYN5c)
4. [用MarsCode快速打造公众号排版工具](https://live.marscode.cn/7116/1217602)


辅助编程
最近用 AI 辅助编程比较多，对于复杂的算法和程序设计我是这么搭配使用的：
● OpenAI o1：架构设计师、算法高手
● Cursor/Claude 3.5 Sonnet：码农
● v0/Claude 3.5 Sonnet: 网页设计制作
● Gemini：反编译、反向工程师
o1 能力最强，但是上下文不够长，并且次数有限，复杂的算法最适合它，或者一些难一点的问题也可以咨询它，让它充当一个架构师的角色出一些点子，有时候甚至会超出我的期望，因为我自己可能会犯一些经验主义错误，或者在某些领域并不熟悉，这时候 o1 的广博知识和强大推理能力就发挥作用了。
Claude 写代码能力非常强、出活快，并且上下文很长，但是算法还不够好，有时候写程序的思路并不是很清晰，但是在 o1 的指导下可以发挥的更好。比如我就会让 o1 给出思路或者设计方案，让 Claude 去生成代码。IDE 我还是喜欢用 Cursor 一点，主要是它上下文控制比较好，当然很多人喜欢的 Windsurf 也是很不错的，至于 GitHub Copilot，已经由一个领先者变成了追赶者了，但用来写单元测试还是不错的。
要做前端网页的话，v0.dev 是很有优势的，直接浏览器可以预览，把设计稿截图发过去就能生成个类似的网页。但如果从无到有设计个网页或者网站，Claude 的网页版我觉得比 v0 效果还好，你把一些基本的想法告诉它，它就能给你做出来个不错的网页。持续提要求甚至一个简单的网站都可以搭出来了。v0 可能提示词太长要处理的情况太多，有时候反而不如 Claude 网页上做出来效果好。当然还有些人喜欢用 bolt.new，也是很好的。
Gemini 可能被很多人低估，一直被笼罩在 OpenAI 和 Claude 的光环下，但最近一直在升级迭代，编码能力已经相当不错了，尤其是支持视频和2M Tokens的长上下文窗口。所以有时候我需要反向分析别人混淆后的代码的时候，就会把完整的几万行甚至十几万行代码扔过去，让它帮我分析。
不得不说，充分利用好这些 AI 模型，真的是可以事半功倍的，唯一的问题是每个月花在 AI 上的钱越来越多了。