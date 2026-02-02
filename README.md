# my-blog

根据 [主题](https://theme.sugarat.top/) 进行配置生成的页面。







```sh
./
├── rules/
│   ├── code-style.aonerule           # 代码风格规范
│   ├── project-structure.aonerule    # 项目结构规范
│   └── features.aonerule              # 功能实现规范
└── tech/
    ├── xx-技术方案.md      # 具体需求的技术方案
    └── xx模块-技术方案.md
```


```sh
# 代码风格规范

## Java代码规范
/类名使用大驼峰命名法（PascalCase）
/方法名和变量名使用小驼峰命名法（camelCase）
/常量使用全大写，单词间用下划线分隔（CONSTANT_CASE）

## 空值判断
- 集合判空统一使用：CollectionUtils.isEmpty() 或 isNotEmpty()
- 字符串判空统一使用：StringUtils.isBlank() 或 isNotBlank()
- 对象判空统一使用：Objects.isNull() 或 Objects.nonNull()

## 日志规范
- 使用 LogUtil 工具类记录日志
- 错误日志格式：LogUtil.error("类名, 方法名, 错误描述, 关键参数={}", param, exception)

## 注解使用
- Service类使用 @Component 注解
- 数据服务实现 DataService<T> 接口
- 模块构建器继承 BaseModuleBuilder<T>
```


```sh
# 项目结构规范
## 包结构
com.alibaba.aladdin.app/
├── module/              # 模块构建器
│   ├── nn/             # NN业务模块
│   ├── seckill/        # 秒杀业务模块
│   └── common/         # 通用模块
├── domain/             # 领域对象
│   ├── module/         # 模块VO（继承ModuleObject）
│   └── [业务名]/       # 业务领域对象（BO、DTO）
├── dataservice/impl/   # 数据服务实现
└── provider/           # 外部服务提供者
## 命名规范
- 数据服务：[业务名]DataService（如 NnRedPacketDataService）
- 模块构建器：[业务名]ModuleBuilder（如 NnFeedsModuleBuilder）
- 模块VO：[业务名]VO（如 NnRedPacketVO）
- 业务BO：[业务名]BO（如 NnRoundFeatureBO）
```

```sh
# 功能实现规范
## 数据服务层
- 必须实现 DataService<T> 接口
- 使用 @Component 注解
- execute方法的第一个参数是 InvocationContext
- execute方法的第二个参数是 JSONObject businessReq
示例：
```java
@Component
public class NnRedPacketDataService implements DataService<List<FundQueryDTO>> {
    @Override
    public List<FundQueryDTO> execute(InvocationContext context, JSONObject businessReq) {
        // 实现逻辑
    }
}
```
## 模块构建器
- 必须继承 BaseModuleBuilder
- 使用 @Component 注解
- 实现 getName()、doBuild()、bottomTransform() 三个方法
- 通过 ContextUtils.getBizResult() 获取数据服务结果
示例：
```
@Component
public class NnRedPacketModuleBuilder extends BaseModuleBuilder<NnRedPacketVO> {
    @Override
    public String getName() {
        return "nnRedPacket";
    }
    @Override
    protected NnRedPacketVO doBuild(InvocationContext context) {
        List<FundQueryDTO> funds = ContextUtils
            .<List<FundQueryDTO>>getBizResult(
                NnRedPacketDataService.class.getSimpleName(),
                context,
                500
            )
            .orElse(Collections.emptyList());
        // 构建逻辑
    }
}
```
```


技术方案模板
除了Rules文件，我们还为每个需求创建技术方案文档，明确定义需要生成的代码：
技术方案示例（NN模块-技术方案.md）

```md
## 业务定义
NN红包模块用于展示用户在NN业务场景下可用的红包列表。
## 业务领域对象
无（复用 FundQueryDTO）
## 模块领域对象
| 对象含义     | 实现方案 | 属性及类型                                                                                                              |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| NN红包模块VO | 新增     | 1. redPacketList：List<RedPacketItem> - 红包列表<br>2. totalAmount：String - 总金额<br>3. expandText：String - 展开文案 |
## 数据服务层
| 数据服务定义   | 实现方案 | execute                                                                                                            |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| NN红包查询服务 | 新增     | 1. 从配置获取红包池ID列表<br>2. 调用FpProvider查询用户红包<br>3. 过滤可用红包（状态=2，未过期）<br>4. 返回红包列表 |
## 模块构建器
| 模块构建器定义   | 实现方案 | doBuild逻辑                                                                     |
| ---------------- | -------- | ------------------------------------------------------------------------------- |
| NN红包模块构建器 | 新增     | 1. 获取红包数据<br>2. 过滤门槛>20元的红包<br>3. 按门槛从小到大排序<br>4. 构建VO |
```


Spec Kit工具链
我们主要使用了两种工具：
1. iflow + qwen3 coder plus + spec kit
2. qwen + qwen3 coder plus + spec kit
```md

├── .specify/
│   ├── memory/
│   │   └── constitution.md # 制定整个项目的原则
│   ├── scripts/
│   └── templates/
├── specs/
│   └── 001-nn-redpacket-module/
│       ├── checklists/
│       │   └── requirements.md
│       ├── contracts/
│       │   └── api-contract.md
│       ├── data-model.md
│       ├── plan.md
│       ├── quickstart.md
│       ├── research.md
│       └── spec.md
└── req/
    └── nn-redpacket.md
```

```md
<!-- constitution -->
## 核心原则

### I. 模块化服务架构
所有服务必须遵循模块化设计原则，具有明确的关注点分离和定义良好的接口。每个模块应具有单一职责并可独立部署。模块必须以松耦合和高内聚的方式设计，以增强可维护性和可扩展性，遵循最小依赖原则。
### II. 阿里巴巴开发标准
所有代码必须遵循阿里巴巴Java开发指南（基于阿里巴巴Java编码规范）。这包括命名约定、异常处理实践、日志标准、安全最佳实践和性能优化模式。代码必须遵守样式一致性要求，以保持代码库的统一性。
### III. 质量保证实践
全面测试是强制性的：对所有业务逻辑进行单元测试，对服务交互进行集成测试，对API兼容性进行合同测试。代码覆盖率必须保持在80％以上，特别关注关键业务路径。代码质量工具必须集成到CI/CD管道中以执行标准，遵循阿里巴巴开发规范以确保质量和可靠性。
### IV. 模块设计原则
遵循单一职责原则，每个模块都有一个明确的目的。模块必须以松耦合和高内聚的方式设计，遵循关注点分离原则。模块边界应与业务能力和领域上下文对齐。所有模块都遵循最小依赖原则，仅导入必要的依赖项以减少系统复杂性。
### V. 项目架构设计原则
本项目采用分层架构设计，通过模块化组织代码，支持淘特投放业务的各种场景需求。架构层次包括：
1. **接入层**：处理请求接入和协议转换
2. **解决方案层**：业务解决方案的统一入口
3. **子解决方案层**：细粒度的业务处理能力
4. **模块构建层**：按业务功能划分的模块构建器
5. **数据服务层**：负责各种业务数据的获取、处理和封装
6. **外部服务层**：负责调用外部服务并进行模型转换
7. **领域模型层**：定义核心业务对象和数据传输对象
8. **基础设施层**：包含基础组件和框架封装
9. **通用模块层**：公共组件和工具类
### VI. 依赖管理
遵循最小依赖原则：每个模块应只拥有其实际需要的依赖项。避免模块之间的循环依赖。使用依赖注入实现松耦合。定期审核和更新依赖项以最小化安全漏洞。这确保了可维护和高效的代码结构。
### VII. 代码风格一致性
在整个项目中保持一致的代码风格，使用标准化的格式化规则。所有代码在合并前必须通过静态分析检查。一致地遵循设计模式，并对与标准实践的任何偏差提供清晰的证明。这确保了统一的代码规范和样式，符合项目标准。
### VIII. Speckit中文本地化
所有speckit相关文件、文档和配置都应使用中文，以支持本地开发团队。`.specify/`和`specs/`目录中的文件和相关speckit构件必须使用中文，以便本地开发人员更好地理解和维护，同时应为可能服务国际市场面向用户的组件保留国际化支持。
## 安全和合规要求
所有代码必须符合阿里巴巴的安全标准，并在部署前进行强制性安全审查。必须为所有暴露的端点实现适当的身份验证和授权。敏感数据必须根据内部合规要求进行处理。必须扫描依赖项中的安全漏洞。
## 开发工作流程
1. 所有代码更改必须遵循标准的阿里巴巴开发工作流程：功能分支、代码审查、自动化测试和CI/CD管道验证。拉取请求必须通过所有测试并获得指定审阅者的批准后才能合并。除非明确批准进行具有迁移计划的破坏性更改，否则所有更改必须向后兼容。每次更改都必须遵循模块设计原则并保持代码风格一致性。
2. 所有操作不要创建新分支，而是在当前分支下进行
3. 代码生成必须遵循code-generation-prompt.aonerule文件
## 治理
```