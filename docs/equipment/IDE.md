# AI 编程工具大盘点

|                                名称                                 |     类型      | 是否梯子 |             介绍              |
| :-----------------------------------------------------------------: | :-----------: | :------: | :---------------------------: |
|                  [Cursor](https://www.cursor.com/)                  |    编辑器     |    否    | 免费试用 2 周，之后每个月 $20 |
|                [MarsCode](https://www.marscode.cn/)                 | webIDE + 插件 |    否    |           个人免费            |
|              [Windsurf](https://codeium.com/windsurf)               |    编辑器     |    是    |       8 周免费，Pro 每月$10       |
|            [通义灵码](https://tongyi.aliyun.com/lingma)             |     插件      |    否    |           个人免费            |
|               [文心快码](https://comate.baidu.com/zh)               |     插件      |    否    |           个人免费            |
|   [github Copilot](https://docs.github.com/zh/copilot/quickstart)   |     插件      |    是    |       每月$10，每年$100       |
| [Amazon CodeWhisperer](https://aws.amazon.com/cn/pm/codewhisperer/) |     插件      |    是    |             免费              |
|                      [v0.dev](https://v0.dev/)                      |     网站      |    是    | 发送设计稿截图生成网页、组件  |
|                    [bolt.new](https://bolt.new/)                    |     网站      |    是    | 可视化编辑、小网站、一键部署  |

## Cursor
常用操作
1. 全局AI。在Cursor的AI输入框中(如`Cmd K`、`Cmd L`或Terminal `Cmd K`)，你只需输入 `@` 符号，就会弹出一个建议列表，显示可引用的上下文信息。这个列表会根据你的输入自动过滤，只显示最相关的建议。
2. Tab功能。代码补全、并且是多行补全。
3. 提示框功能(Cmd + K)
4. 聊天功能（Cmd + L）适合学习新技术或框架、获取代码建议和最佳实践

### 快速生成 git commit message
1. `git diff | cat` 获取最近修改
2. `git add .` 把所有修改添加到暂存区
3. `Cmd K` 提示栏中输入 `git commit message`
4. `Cmd + Enter` 确认
5. `Cmd + I` 唤起 Cursor Composer 窗口，输入需求对文件和文件夹进行调整。

### 快速回答
在提示栏中按`Option/Alt Enter`，立即回答关于选中内容和相关上下文的任何问题，在这个过程中不会生成或修改代码。

### `@web` 联网检索
`Cmd + L` 在输入框输入 `@web` 可以联网检索。

### 快速构建 demo
1. 打开 Cursor 编辑器，创建一个新文件夹并打开，作为 Cursor 的工程目录。
2. 通过 Ctrl + I 唤起 Cursor Composer 窗口，描述你的想法或需求，比如：`帮我生成一个个人作品展示网站，包含两个页面，首页显示我所有的作品，about 页面显示我的个人介绍。网站主题色使用蓝色，要求兼容手机端访问。`
3. 点 Submit 提交需求，Cursor Composer 会根据你的需求生成一个项目结构，并生成基本的代码逻辑。等代码生成完，你只需要点 Apply all，就可以把生成的代码应用到工程目录中。
4. 在浏览器打开项目的入口文件：index.html，预览生成的网站。
5. 在 Cursor Composer 对话框继续调整你的需求，比如 “一栏显示五个作品，配图使用真实的图片“，点 Submit 提交，Cursor Composer 会根据你的需求修改代码。

重复这个过程：Submit 提需求 -> Apply all 应用修改 -> 预览修改效果。直到你对生成的网站满意为止。

## MarsCode
常用命令
- `ctrl/Cmd + i` 打开行内交互面板
- `Ctrl/Cmd + Space` 触发代码自动补全
- `Ctrl/Cmd + U` 打开侧边对话框

## 参考资料
- [AI编程云课堂](https://bytedance.larkoffice.com/docx/Bd5HdlklBocDt5xXpQCc6Lkdnmc)
- [Cursor 案例](https://space.bilibili.com/351969226/video)
- [无需翻墙的智能代码编辑器Cursor](https://blog.csdn.net/2301_79270724/article/details/136071749)
- [Cursor 101](https://cursor101.com/zh)
- [mars code](https://docs.marscode.cn/docs/introduction-to-marscode-ide)