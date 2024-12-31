# 软件插件

## 浏览器插件
  - [code-box](https://github.com/027xiguapi/code-box) 一个开源的浏览器插件，用来解除 CSDN/知乎/脚本之家/博客园/博客园/51CTO 博客等网站的限制（比如要求登录）。
  - [wechat-article-exporter](https://github.com/jooooock/wechat-article-exporter) 微信公众号文章批量下载工具
  - [Cloud Document Converter](https://github.com/lujunji4113/cloud-document-converter) 开源的飞书文档下载 Chrome 插件

## VsCode Debug Vue项目
1. 开启sourcemap `vue.config.js`

```js
configureWebpack: {
    devtool: process.env.NODE_ENV !== "production" ? "source-map" : '',
}
```

2. 启动项目 记录下访问端口
3. 点击左侧栏目-debug。新建debug配置，创建`launch.json`文件。
```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Edge",
      "request": "launch",
      "type": "msedge",
      "url": "http://localhost:8081",
      "webRoot": "${workspaceFolder}",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${workspaceFolder}/src/*"
      }
    }
  ]
}
```
4. 调试操作，通过debug打开的浏览器，按需操作。在 vscode 代码里
