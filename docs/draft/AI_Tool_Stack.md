
各种AI工具眼花缭乱，其实用好豆包、即梦、剪映这三个就已经覆盖日常场景了。


## 观点
1. 当老板给你发token的时候，就是你即将被裁掉的时候。正确的做法应该是：你现在要主动去买token，早日开掉老板。
1. AI 让软件的成本从代码转移到测试和文档，一套好的测试套件的价值可能比编写代码本身更高。设计和验收，这两头比重变大了。
2. AI 做不到的事。没法对人类负责，能对我们自己负责只有我们自己。我们可以采取烈度更强的方案和决定。

从“缺乏好工具”的瓶颈，转变为“缺乏使用好工具的技能”和“缺乏调动足够算力/Token资源”的瓶颈。竞争维度发生了切换。
从“替代焦虑”到“增强思维”：认识到AI当前主要是增强工具，重点思考如何用它提升自己核心任务的效率和质量，而非被动恐惧。
启动“人机协作”实验：即使非技术岗位，也可以从利用AI处理信息摘要、报告生成、日程优化等开始，积累与AI协作的“感觉”（vibe）
重新评估岗位价值，减少对“执行量”的考核，增加对“问题定义能力”、“流程设计能力”和“对AI输出判断力”的考核。团队结构可能向“少量指挥者+大量智能体资源”演变。

技能转型的紧迫性与方向：必须立刻开始培养“智能体指挥”技能，学习使用Claw等工具，从编写代码转向编写任务描述、设计工作流和审核宏观输出。
拥抱“可验证的自动化”：像Auto Research展示的那样，将自己的研究或开发过程中可量化的部分（如参数调优、代码性能测试）尽可能自动化，将自己解放出来思考更高层次的问题。
关注系统架构的“Agent-first”特性：在设计新系统时，思考其API是否足够清晰、结构化，以便未来能被智能体轻易理解和调用，这正在成为软件长期价值的关键。




## 工作栈
Stitch 设计 + OpenCode 生成 + Trae 审查
NotebookLM 做 PPT
Obsidian 知识库
OpenClaw 杂活 + 收敛


- Obsidian Web Clipper 拿到 youtube 字幕 markdown 文件，交给 Claude Code 调用 excalidraw MCP 出图，把一个视频拆成手绘白板图，只要 3 分钟。


## opencode

1. https://opencode.ai/docs/zh-cn
2. https://www.opencodecn.com/docs/intro
3. https://learn-claude-agents.vercel.app/zh/s01/

## code 原理和技巧
/clear 清空重来
/copy 复制回复
/compact 或 /handoff 生成一份摘要文档压缩上下文
1. 涉及不同目录下的文件时，用 realpath 命令生成完整绝对路径，消除歧义，省去不必要的麻烦。
2. realpath 给 AI 绝对路径
3. Ctrl+A/E 跳到行首/行尾
4. Ctrl+W/U/K 删词/删到行首/删到行尾
5. 创建一个全局自定义斜杠命令"/handover"：当结束会话时（例如上下文窗口即将填满），生成一份" HANDOVER.md"文档，总结本次会话中的所有工作内容，包括决策、遇到的陷阱、经验教训等。转换为PreCompact hook 自动完成
我想让 AI 告诉我怎么使用一种全新的、AI 也不会用的工具，就会提示 AI "执行 xxx-tool --help 来了解该工具"（假定工具名字是 xxx-tool），然后 AI 就学会用了。

- [从 0 到 1 复刻一个 Claude Code 这样的 Agent](https://plantegg.github.io/2026/03/05/%E4%BB%8E0%E5%88%B01%E5%A4%8D%E5%88%BB%E4%B8%80%E4%B8%AAClaude_Code%E8%BF%99%E6%A0%B7%E7%9A%84Agent/)
- [你不知道的 Claude Code：架构、治理与工程实践](https://tw93.fun/2026-03-12/claude.html)
- Anthropic刚刚推出了一套全新的AI大师课程。最核心的亮点是：课程涵盖都是当前的热点比如Claude Code实战，Agent skill ，完全免费，花费0.00美元，学完还可获得证书加在简历中。http://anthropic.skilljar.com 而且门槛极低，不需要拥有Anthropic账号，就能直接访问并学习所有内容。


- Vitest 测试
- Playwright E2E 测试
- tsgo 完整的 TypeScript 类型检查与 oxlint 代码检查
- 对于浏览器级别的测试，我使用 agent-browser 来验证实际渲染输出、客户端导航与 hydration 行为。单元测试会遗漏许多细微的浏览器问题，而这套方案能将捕获到它们。


## code skill & mcp
https://agentskills.me/specification

[gstack](https://github.com/garrytan/gstack)
- `/plan-ceo-review` - 创始人/CEO 模式：重新思考问题，发现 10 星级产品
- `/plan-eng-review` - 工程经理模式：锁定架构、数据流、边界情况
- `/review` - 偏执的高级工程师模式：发现生产环境的隐患
- `/ship` - 发布工程师模式：同步、测试、推送、开 PR
- `/browse` - 测试工程师模式：浏览器自动化、截图、QA
- `/qa` - QA + 修复工程师模式：测试、发现 bug、修复、验证
- `/qa-only` - 仅报告的 QA 测试模式
- `/setup-browser-cookies` - 会话管理器：导入浏览器 Cookie
- `/retro` - 工程经理模式：团队复盘和数据分析
- `/gstack-upgrade` - 升级 gstack

如果 gstack 技能不工作，运行：这将重新构建二进制文件并注册技能。

```bash
cd ~/.claude/skills/gstack && ./setup
```

[pua-skill](https://pua-skill.pages.dev/)
[baoyu-skills](https://github.com/JimLiu/baoyu-skills)
[chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) 支持通过 `--autoConnect`/`--browser-url` 或 WebSocket 连接已有浏览器实例，以便在人工测试和代理测试之间共享登录态和页面状态；还提供 “slim” 模式只暴露少量导航与脚本工具，用于基础浏览任务。


MiniMax的官方Skills库
github.com/MiniMax-AI/skills/
面向 AI 编程工具的开发技能库。接入你常用的 AI 编程工具，获得结构化的、生产级质量的前端、全栈、Android、iOS 和着色器开发指导。
目前已有的skill如图

## Q&A 
- 【关键概念】Subagent 和主agent的区别是啥？
- 【关键概念】上下文污染上下文截断，开发过程中怎么解决？claude code中 compact和handoff有什么区别



## openclaw skill
https://skillsmp.com/zh
https://skills.sh/
https://skillhub.tencent.com/#categories
https://my.feishu.cn/wiki/Mqsuw5G4ViNpCokHP5FcoPrWnYe

[AI Search Hub](https://github.com/minsight-ai-info/AI-Search-Hub) 一次提问，全域搜索
我们知道各个AI的web搜索能力其实取决于它背后的平台，比如搜推特那肯定是grok，搜公众号则用元宝最好。
而这个 AI Search Hub ，就是用来把分散在不同 AI 平台里的搜索能力、网页抽取能力，以及它们背后各自公司的原生数据世界，整理成一个可复用的搜索与抽取中枢。
你可以通过这些 AI 平台去拿微信公众号、抖、微等它们更容易触达的数据，再让它们替你完成搜集、清洗、整理，最后统一接进自己的 Agent 与工作流。

[飞书官方插件](https://github.com/larksuite/openclaw-lark)

```sh
npx -y @larksuite/openclaw-lark-tools install

npx -y @larksuite/openclaw-lark-tools update
```
接下来我们可以在手机上输入命令 `/feishu auth` 批量给机器人授权。
1. `创建一个飞书多维表格，用来记账，需要包含金额、商品名称、消费地点，还有类型这些字段。`
2. `你把这个表格写入你的长期记忆，如果我发你的截图是个账单，你就把这个信息存入多维表格。`










## Code Agent

### Harness Engineering
当AI Agent成为软件开发的核心参与者时，其瓶颈不在于模型智能本身，而在于传统的、为人类设计的软件工程系统（Human-first system）无法有效约束和协同AI；因此，必须通过构建一套新的工程实践体系——Harness Engineering，将工程系统进化为Agent-aware system，通过提升系统可读性、建立防御机制和构建高频反馈回路，来安全、高效地驾驭AI的编码能力。

Harness Engineering：为Coding Agent构建可控工程系统的实践。其目标是“让AI能：理解系统、执行任务、获得反馈、持续改进”。
可读性：使系统易于被AI理解，将隐性知识（架构、领域规则）显性化、结构化，为AI提供一张“导航地图”而非庞杂的说明书。
防御：收敛AI的行动空间，通过自动化工具（Linter、架构约束、测试）设立“硬性约束”和“反熵增机制”，防止AI引入系统腐化。
反馈：为AI打造高频、自动化的工程反馈回路（如IDE提示、CI结果），使其能形成“观察-思考-行动-反馈”的闭环，实现持续自我修正。

引出问题：从AI编码实践中的现实困境（代码生成速度远超复杂度控制能力）切入，指出根本原因在于工程系统不匹配。
提出核心转变：明确需要从“Human-first”转向“Agent-aware”。
提出解决方案框架：详细阐述Harness Engineering的三大核心能力（可读性、防御、反馈）模型，并逐一解释其原则和实践方法。
提供实证案例：以Stripe的Agent Engineering和开源项目Routa.js为例，具体说明Harness Engineering在现实中的落地形态。
升华与展望：将观点提升到软件开发范式转变的层面（双循环模型），并总结Harness Engineering作为未来人机协同基础设施的意义。

引入AI编码的战略重点不应只是采购最好的AI模型，而是优先投资于适配AI的工程基础设施升级。需要像对待 DevOps、云原生转型一样，有规划地推动工程系统向Agent-aware演进。管理重心应从管理“人”的产出，部分转向设计和管理“人机协同系统”的规则与反馈循环。

从纯粹的“编码实现者”转向 “系统设计者”和“规则制定者” 。核心竞争力将更侧重于：1）提炼领域知识并机器可读化；2）设计稳健的架构约束和质量门禁；3）构建和维护高效的自动化反馈流水线。编码本身将更多成为一种“与AI协同设计并验证规则”的活动。

### Spec Coding


### 提示词
这样做能帮助 Codex 聚焦范围、减少臆测，并产出更容易审查的成果。包含以下四个要素：
- 目标：你想要更改或构建什么？
- 上下文：哪些文件、文件夹、文档、示例或错误信息与本次任务相关？你可以 @ 提及特定文件作为上下文。
- 约束条件：Codex 需要遵守哪些标准、架构要求、安全规范或编码惯例？
- 完成标准：任务完成时应满足什么条件？比如测试通过、行为发生变化，或某个 Bug 不再复现。

### AGENTS.md
沉淀可复用的规范，涵盖：
- 仓库结构和重要目录说明
- 项目的运行方式
- 构建、测试和 lint 命令
- 工程约定和 PR 期望
- 约束和禁止规则
- 完成意味着什么以及如何验证工作




- 制作skill
  - prompt-optimizer 一句话目标 + 必要背景 + 约束 + 期望输出格式。这样更干净、更可控，也更贴近你真实的日常使用场景。[skills](https://github.com/chujianyun/skills/tree/main/skills) MIPROv2 + DSPY 实现 APO（自动提示优化）
  - 把这个爬虫工具做成一个 skill [爬虫](https://github.com/D4Vinci/Scrapling)。这一条信息也可以加到这个skills中: 绝大多数网站都不需要爬了，在网址前面加上 markdown.new/ 会自动显示markdown版本。一般用cloudflare的网站都能显示。我建议加到 scrapling skill中
- 新增 `/write` 命令：输出在文件上

降低GEO投毒程度：
给出来源链接，检索置信度阈值，抛给3个不同生态的模型，请同时列出反对这个观点的3个理由。

# 我的 AI 产品

- kane_vault 自制知识库
- my-reports AI对话生成报告
- hk-skills 技能库
- prompt-strategy 提示策略库
- week-report 周报系统


## 翻译
1. 45条Claude Code技巧：从基础到高级 https://github.com/ykdojo/claude-code-tips
2. OpenAI：使用 GPT-5.4 设计前端的实用技巧，最后附官方前端 skill https://developers.openai.com/blog/designing-delightful-frontends-with-gpt-5-4





