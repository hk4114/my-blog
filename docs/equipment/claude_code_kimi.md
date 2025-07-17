# 赛博保姆出列！Claude Code + Kimi 手把手教程
1. 进入 [kimi](https://www.kimi.com) 输入提示词
```md
参考以下网页，一步步指导我在 {Windows Mac Linux} 终端中安装该程序：https://docs.anthropic.com/zh-CN/docs/claude-code/setup
```
2. 申请 [API Key](https://platform.moonshot.cn/console/api-keys)
3. 修改环境变量
```sh
cd ~/desktop/claude
```
Mac/Linux/WSL 把这两行追加到 `~/.zshrc` 或 `~/.bashrc` 就是永久生效。
```SH
# 1. 写入环境变量（请把 sk-xxx 换成你的真实 Kimi Key）
echo 'export ANTHROPIC_AUTH_TOKEN="sk-你的KimiKey"' >> ~/.zshrc
echo 'export ANTHROPIC_BASE_URL="https://api.moonshot.cn/anthropic"' >> ~/.zshrc
source ~/.zshrc

# 2. 启动 Claude Code
claude
```
windows 终端执行
```sh
# 永久写入用户环境变量
setx ANTHROPIC_AUTH_TOKEN  "sk-你的KimiKey"
setx ANTHROPIC_BASE_URL    "https://api.moonshot.cn/anthropic"
# 重新开一个 PowerShell 窗口
claude
```

在终端用 git bash 执行就仅当前会话生效。
```bash
export ANTHROPIC_AUTH_TOKEN=[替换为你的 Moonshot API Key]
export ANTHROPIC_BASE_URL=https://api.moonshot.cn/anthropic
//  moonshot.ai（海外站）生成
// export ANTHROPIC_BASE_URL=https://api.moonshot.ai/anthropic
```
4. 运行 `claude`