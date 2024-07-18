---
title: 【译】揭开 Cookie 和 Token 的神秘面纱
description: 本文将帮助你理解网页 Cookie 和 Token 的基本概念和用途，并介绍它们的常见类型。
---

# [译]揭开 Cookie 和 Token 的神秘面纱
> 作者: Tommi Hovi

> 翻译: kanelogger

> 原文: https://tommihovi.com/2024/05/demystifying-cookies-and-tokens/

最近，我深入探索了 Cookie 和 Token 的世界。一位客户想要防止它们的被盗用，这促使我挖掘了更多信息。你可能每天都在使用这些技术，但它们的不同类型和使用场景，我们还需要更深入地了解。

## 阅读目的
本文将帮助你理解网页 Cookie 和 Token 的基本概念和用途，并介绍它们的常见类型。我们不会深入如何防止滥用，这将留待后续讨论。

## Cookie

### 什么是 Cookie？
简单来说，Cookie 就是网站在你设备上存储的小文本文件。
几乎每个网站都会用 Cookie 来“迎接”你。Cookie 的作用取决于它的类型，比如记录你在网站上的行为，或者你选择的语言、浏览的商品等。
当你再次访问时，网站可以通过 Cookie 继续你的操作。

下面的图片在非常高的层面上解释了 Cookie 是如何工作的。


### 为什么需要 Cookie？
因为 HTTP 协议本身不记录状态，所以需要 Cookie 来记住用户的状态。当你请求网站时，服务器会发送一个包含会话 ID 的 Cookie。这个会话 ID 帮助网站识别你。
当客户端从 Web 服务器请求网站时，Web 服务器响应 '200 OK' 并通过 Set-Cookie 头发送一个 Cookie 到客户端。Cookie 包含会话 ID 并且通常还包含其他属性。Web 服务器还在服务器端跟踪已发放给客户端的会话 ID。

### Cookie 的用途
主要用于：
- HTTP 会话管理
- 个性化
- 跟踪

Cookie 存储在你的浏览器中。更准确地说，它们存储在硬盘上的浏览器的临时目录中。存储 Cookie 的确切位置和方法取决于浏览器和操作系统。你通常会通过浏览器界面来管理、查看或删除 Cookie，方法是进入设置，但是不同操作系统和浏览器的文件夹路径可以在互联网上找到。例如，Microsoft Edge 在以下路径存储 Cookie：

`C:\Users\[用户名]\AppData\Local\Microsoft\Edge\User Data\Default\Network`

你通常会使用浏览器的界面来管理、查看或删除 Cookie。

### Cookie 属性

Cookie 有一些重要的属性，比如会话 ID、过期时间、适用的域名和路径，以及是否只通过 HTTPS 发送等。

- 会话 ID 是一个用于标识和匹配客户端和 Web 服务器之间会话的唯一随机字符串

- Expires 定义了 Cookie 设置为过期的日期

- Domain 指定了 Cookie 有效的域或域

- Path 指定了 Cookie 有效的资源或路径

- HttpOnly 当启用时，将阻止客户端端 API 例如 JavaScript 访问 Cookie。这减轻了跨站脚本（XSS）的威胁。

- Secure 当启用时，将要求 Cookie 仅在使用 HTTPS 时发送，不允许使用未加密的连接如 HTTP，这使得 Cookie 不太容易被盗。

- Session 定义了 Cookie 是一个临时 Cookie，当浏览器关闭时过期

- SameSite 可以有 strict、lax 或 none 的值

- Strict = 浏览器仅向与原始域相同的目标域发送 Cookie

- Lax = 即使目标域与原始域不同，浏览器也会向目标域发送 Cookie，但仅限于安全请求（如 GET）且不是第三方 Cookie。

- None = 允许第三方 Cookie（跨站 Cookie）

你可以通过右键单击并选择“检查” > “应用程序” > “存储” > “Cookie”来查看你正在浏览的站点的 Cookie。当你选择一行时，你可以在页面底部看到值（见图 5）。

### Cookie 类型
我们可以根据是否必要，将 Cookie 分为基本和非基本两类。基本 Cookie 是网站正常运行所必需的，而非基本 Cookie 则用于分析用户行为或投放广告等。
#### 基本 Cookie
基本 Cookie 对网站正常运行是必要的，通常也会使用户的浏览体验更加方便。
- 会话 Cookie
- 第一方 Cookie
- 认证 Cookie
- 用户中心安全 Cookie
- 用户输入 Cookie

##### 会话 Cookie（也称为非持久性 Cookie、内存 Cookie、临时 Cookie）

会话 Cookie 是临时的 Cookie 文件，在用户关闭浏览器或他们的会话变得不活跃时（如果用户注销，会话将结束）被删除。它们是单一会话的 Cookie。当用户重新启动他们的浏览器并返回到创建 Cookie 的网站时，网站将无法识别用户，因为用户的浏览器中没有网站可以读取的 Cookie。用户将不得不重新登录（如果网站需要登录）。登录后，将生成一个新的会话 Cookie，它将存储用户的浏览信息，并在用户离开网站并关闭浏览器之前一直有效。由于会话 Cookie 有自己的唯一 ID，它也可以用来跟踪网站访问者的数量。如果你计划去度假旅行，你一天多次访问旅行社的网站，Cookie 的会话 ID 将向网站显示你只是一个独特的访客。

##### 第一方 Cookie（也称为持久性 Cookie、永久性 Cookie、存储的 Cookie）

第一方 Cookie 将保留在浏览器中，直到用户删除它们或浏览器根据持久性 Cookie 文件中包含的持续期间自动删除它们。这种类型的 Cookie 可以以其他术语引用，如持久性 Cookie、永久性 Cookie 或存储的 Cookie，因此它们在单个会话期间具有持久性。大多数第一方 Cookie 如果在那段时间内没有访问该网站，将在 1-2 年内过期。当 Cookie 过期时，浏览器将自动删除它们。第一方 Cookie 最著名的用途是帮助用户保持他们在网站的账户登录状态，从而避免每次访问网站时都需要重新输入凭据。

##### 认证 Cookie

认证 Cookie 是会话 Cookie 的一个变体。它们在用户成功登录后识别用户，并携带身份验证信息，当用户在网站上导航时，内容被授权给已登录的用户。例如，当用户对在线银行进行身份验证时，他们被授权查看他们的银行账户余额。如果他们转到另一页查看他们的贷款，认证 Cookie 确保用户不必为该页面提供新的身份验证。

##### 用户中心安全 Cookie

用户中心安全 Cookie 可以跟踪身份验证错误，并通过对登录页面上尝试了多少次不正确的登录凭据来检测可能的身份验证滥用。

##### 用户输入 Cookie

用户输入 Cookie 是第一方会话 Cookie，用于跟踪用户自己在网站上输入的操作和项目，如填写表单或点击一些按钮（如添加到购物车）。

#### 非基本 Cookie

非基本 Cookie 对用户的浏览体验或网站的正常运行不是必要的。
- 分析和定制 Cookie
- 广告 Cookie
- 第三方 Cookie
- 超级 Cookie

##### 分析和定制 Cookie

分析和定制 Cookie 跟踪用户活动，以便网站管理员更好地了解他们的网站是如何被使用的。网站管理员可以使用分析的一个例子是，网站上的一些信息可能真的很“冷”，这意味着用户很少打开该页面（不感兴趣）或找不到进入它的路。

##### 广告 Cookie

广告 Cookie 只是用来定制用户在网页上看到的广告。它们使用用户的浏览历史使广告“更相关”。这就是为什么我们开始看到我们之前搜索过的某些东西的广告。

##### 第三方 Cookie（也称为跟踪 Cookie）

第三方 Cookie 是“Cookie 世界”中的“坏人”。这些是我们不喜欢的 Cookie，也是 Cookie 有如此糟糕声誉的原因。第三方 Cookie 来自用户访问的不同域，因此它们不提供会话 Cookie 或第一方 Cookie 的任何好处。这些 Cookie 的唯一目的是跟踪你。

##### 超级 Cookie

超级 Cookie 技术上不是 Cookie，并且在某些情况下不会存储在用户的设备上。而“普通” Cookie 可以容纳高达 4 KB 的数据，超级 Cookie 可以容纳 100 KB。超级 Cookie 为跟踪 Cookie 提供类似功能，但它们不像其他 Cookie 那样受到控制。在某些情况下，超级 Cookie 被发现存储在浏览器缓存中，一些形式的超级 Cookie 被注入到 UIDH（唯一标识符头）中，ISP 只控制它们。由于超级 Cookie 的特性，它们更难以识别，并且在 UIDH 超级 Cookie 的情况下，你没有办法清除它们。

## Token

### 什么是 Token
Token 是一种信息交换的载体，通常是 JSON 格式的对象。它们在客户端和服务器之间传递，用于身份验证和授权。

### Token 解释

与存储用户在 Web 会话中的活动信息的 Cookie 不同，Token 用于在软件之间传输信息。Token 中存储的信息取决于 Token 的类型。例如，ID Token 携带有关已认证用户的信息。访问 Token 通常包含有关安全主体以及其授权访问的信息。这里 Token 和 Cookie 交叉：一些 Token 存储在客户端，要么在称为 Local Storage 的地方，要么在 Cookie 中。出于安全原因，最可取的是存储在 HttpOnly Cookie 中。我不是 Web 开发者，但我让自己明白，开发社区倾向于使用 Cookie，因为 Local Storage 被认为是不太安全的选择。还值得一提的是，Token 用作协议的一部分，并非所有 Token 都是同一协议的一部分。

我将在这里提到并简要解释的协议是 OAuth 2.0 和 OpenID Connect（OIDC），因为它们由 Microsoft Identity Platform 使用。

OAuth 是 Open Authorization 的缩写，它是一个标准，旨在处理应用程序或网站代表用户访问资源的授权流程。简单来说，OAuth 主要用于 Web 平台的授权协议。OAuth 使用访问 Token，这些 Token 通常（但不限于）是 JSON Web Tokens。在 Microsoft Identity Platform 中的 OAuth 协议使用格式为 JWT 的访问 Token（承载者 Token）。OAuth 2.0 有多种不同的授权流程。

OpenID Connect 扩展了 OAuth 2.0 授权协议，使其也用作使用 ID Token 的认证协议。OpenID Connect 登录流程用于获取 ID Token，该 Token 发送到应用程序以验证用户身份。

### Token 的作用
Token 可以减少服务器的数据库查询，通过包含用户信息和签名来验证身份，而不需要每次都查询数据库。

让我们描述一个传统的认证和授权场景，其中不存在 Token。用户首先登录，Web 服务器通过检查从其数据库中输入的凭据来认证用户。一旦凭据匹配，服务器就会发出一个唯一的会话标识符并将其发送到客户端。用户的客户端在设备上存储会话 ID。对于客户端向服务器发出的每个后续请求，会话 ID 都会在 Cookie 或 HTTP 请求头中发送。服务器需要再次从其数据库中查找会话 ID 以识别用户并检查授权级别。

上述场景的问题是，对于客户端的每个请求，服务器都需要对数据库进行往返，这使得应用程序使用起来更慢。

而 Token 的场景通过发出包含用户信息和验证 Token 内容真实性的签名的 JWT 来解决后续的数据库查找。JWT 发送到客户端，客户端再次存储它。对于客户端向服务器发出的每个请求，客户端包括 JWT。服务器只需要验证 Token 的签名以确保其真实性，一旦检查通过，服务器就可以从 Token 中提取身份和授权详情，而无需数据库查找。

### Token 的类型
常见的 Token 类型包括 ID Token、访问 Token、刷新 Token 和承载者 Token。它们在不同的情况下发挥作用，比如认证、调用 API 等。
#### ID Token
ID Token 是使用 OpenID Connect（OIDC）登录流程获取的，这是分散认证的开放标准。ID Token 必须以 JSON Web Token 格式存在。它们由授权服务器（Microsoft Entra ID）发放给客户端应用程序。ID Token 包含有关用户或安全主体的声明，并且可以包含有关 MFA 状态的声明等。客户端应用程序可以使用 ID Token 中的信息和声明来验证用户是否是他们声称的那个人。默认情况下，在 Microsoft Identity Platform 中 ID Token 的有效期为一小时。ID Token 不用于调用受保护的 API。

Microsoft 有两个版本的 ID Token，它们都有不同的端点。两个版本之间的差异在于它们可以包含的信息和声明。

v1.0 https://login.microsoftonline.com/common/oauth2/authorize

v2.0 https://login.microsoftonline.com/common/oauth2/v2.0/authorize

#### 访问 Token

访问 Token 是由授权服务器签名的短命期（JWT）Token，它使客户端能够安全地调用受保护的 Web API。访问 Token 不一定需要格式化为 JSON Web Tokens，但在 Microsoft Identity Platform 中它们是 JWT 格式。访问 Token 包含在客户端向服务器发出的每个 HTTP 请求中。这通常通过 HTTP 请求中的 Authorization 头使用 'Bearer' 架构来完成。这样做将避免服务器在每个请求上都需要对用户进行身份验证。客户端将访问 Token 存储在 Cookie 或本地存储中。像 ID Token 一样，访问 Token 也有两个版本，它们都有不同的端点。访问 Token 旨在在服务器端使用。客户端不需要也不应该用来读取访问 Token 的内容。

#### 刷新 Token
刷新 Token 通常与访问 Token 一起获取。它用于在之前的访问 Token 过期时获取新的访问 Token，以及新的刷新 Token。在 Microsoft Identity Platform 中，刷新 Token 是加密的，除了它们自己外，没有人能读取。客户端将访问 Token 存储在 Cookie 或本地存储中。刷新 Token 的默认生命周期是 90 天，单页应用程序的默认生命周期是 24 小时。

#### 承载者 Token

承载者 Token 是一个术语，用于可以由任何拥有 Token 的人使用的 Token。Token 持有者不需要证明他们拥有加密密钥的所有权。把它想象成酒店房间的钥匙卡。如果你遗失了钥匙卡，别人得到了它，他们可以使用它进入酒店房间，而不需要证明他们是房间的合法所有者。

#### JSON Web Token (JWT)

JSON Web Tokens 是用于在两方之间安全发送数据的标准化对象。为了确保 JWT 的内容在传输过程中没有被更改或篡改，JWT 使用加密密钥进行签名。这需要重复：JWT 是签名的，而不是加密的。签名验证数据的发送者，而加密将数据从纯文本转换为未经授权的接收者无法读取的密文。如果签名的 Token 内容在传输过程中被更改，公钥（这是用于签名 Token 的私钥的配对）将无法再验证签名。强烈建议使用诸如 HTTPS 等协议与 JWT 一起使用，以在传输过程中保护 Token 内容的保密性。

互联网工程任务组（IETF）在 RFC 7519 中描述了 JWT 标准。

JSON Web Token 由三部分组成：头部、负载、签名。

头部：通常头部由两部分构成，描述 Token 的类型和签名算法。

负载：负载部分包含所有实际信息，例如声明。在 RFC 7519 的第 4 章中，注册声明定义如下：

“iss” = 发行人声明。发行人声明标识发行 JWT 的主体

“sub” = 主题声明。主题声明标识 JWT 的主题主体

“aud” = 受众声明。受众声明标识 JWT 打算的接收者

“exp” = 过期时间声明。过期声明标识 JWT 不得在接受处理之前或之后的过期时间

“nbf” = 不早于声明。NFB 声明标识 JWT 不得在接受处理之前的时间

“iat” = 签发时间声明。签发时间声明标识 JWT 签发的时间

“jti” = JWT ID 声明。JWT ID 声明为 JWT 提供唯一标识符

标准不强制使用注册声明，因此它们是可选的。其他类型的声明是公共声明名称和私有声明名称。

签名：头部和负载都被 Base64Url 编码。要签名 Token，使用编码的头部和编码的负载以及密钥和签名算法来完成签名。

以下截图显示了左侧的签名 JWT 和右侧的头部、负载和签名。

示例 Token

查看 JWT 的最简单方法是前往 Microsoft Graph Explorer https://developer.microsoft.com/en-us/graph/graph-explorer 并登录。登录后，运行 'GET my profile' 查询，打开访问 Token 标签并复制 Token。

然后我们前往 https://jwt.ms 并粘贴 Token。

我们在粘贴的 Token 下面看到的是解码后的 Token 内容和 'Claims' 标签，它解释了诸如 “oid”，“uti” 等声明的缩写。从下面的 Token 我们可以推断出：

“typ”: “JWT” 表示 Token 类型是 JSON Web Token

“alg”: “RS256” 表示此 Token 的签名使用 RSA 签名与 SHA-256 算法

“aud”: “00000003-0000-0000-c000-000000000000” 表示 Token 接收者（受众）是 Microsoft Graph

“iss”: “https://sts.windows.net/f77b793c-9409-XXXX-XXXX-b793feaadb48/” 表示 Token 的发行人是 Azure Active Directory v1 端点

“appid”: “de8bc8b5-d9f9-48b1-a8ad-b748da725064” 表示使用 Token 的客户端是 Graph Explorer，因为它使用 Token 调用 Microsoft Graph API

“scp”: “openid profile User.Read email” 列出了应用程序（Graph Explorer）请求并已同意以及 Microsoft Graph 公开的 API 范围

“ver”: “1.0” 表示 Token 版本

**JWT 的安全问题**

像任何技术解决方案一样，JSON Web Token 也有其缺点。

**大小限制和存储**

一些复杂的应用程序需要在 Token 中存储大量信息。当 Token 存储在 Cookie 中时，这可能会增加每个请求的开销，甚至超过 Cookie 允许的大小（4 KB）。当这种情况发生时，一个常见的解决方法是将 JWT 存储在 Local Storage 中，它有自己的安全问题，主要是 Local Storage 中的数据可以被页面中的任何脚本访问。这可能导致跨站脚本（XSS）攻击能够访问 Token。Local Storage 本身并不提供像 Cookie 那样的安全属性。不要误解，如果 Token 存储在没有正确保护的 Cookie 中，我们同样容易受到 XSS 攻击。但是 Cookie 有机制来保护 Token 免受这类攻击，这也是 OWASP 社区推荐使用 Cookie 存储 Token 的原因。

**失效问题**

正如开头所述，Token 是自包含的。没有中央机构跟踪和管理 Token。当尝试使 Token 失效时，这成为一个挑战。默认情况下，访问 Token 的生命周期是一小时，过期的详细信息包含在 Token 中。

**未加密**

记住，Token 是签名的，但不是加密的。因此，如果 Token 没有通过 HTTPS 得到适当的保护，Token 内容可能会暴露给未经授权的方。

**总结**

通过本文，我们了解了 Cookie 和 Token 的基本概念和应用场景，以及它们在提升网络体验中的作用。下一篇文章，我们将探讨如何保护 Cookie 和 Token，防止它们被滥用。

保持安全！
