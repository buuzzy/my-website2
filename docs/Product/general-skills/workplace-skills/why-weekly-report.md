---
sidebar_position: 3
sidebar_label: 为什么周报如此重要？
---

# 为什么周报如此重要？

## 为什么要写周报

无论在哪家公司工作、公司有怎样的要求、通过什么形式写，我一直保持着写周报的习惯。周报是一个 “清零工具”，可以定期审视优先级、策略的合理性，避免惯性思维。同时也可以提升组织沟通的效率。当然，在不同职级岗位上的周报作用也会略有不同：

### 初出茅庐阶段

对于一位刚踏上工作岗位的同学来说，一切都是未知，每天都会遇到新问题。但是如果一遇到问题就去请教，那对同事是一种打扰。好的做法是周期性的沟通，周期内尽可能自己动脑子去尝试解决，并通过一个机制把自己提问题、解答问题的闭环 share 出来，让 mentor 给你指正。这个周期建议是每日、每周。这时候的周报记录的是**你的学习进展**。当然也需要包含工作进展，只不过这时候你不会有太多复杂的工作，且你的 mentor 大概率比较清楚你的工作成果。比如：

:::tip
 **本周数据变化**

 \[近8周支付体量走势图]、\[近8周支付成功率走势图]

 **本周进展：**

 学会了利用自助取数查询支付模块的支付成功率、支付通道结构和支付异常原因等。虽然拿到了数据，但是还没有找到最近支付转化率下跌的原因。

 学会了 Report 系统的使用，包括权限申请、定义查询、数据导出等；

 发现自己的 Excel 能力太弱了，好不容易才照葫芦画瓢学会了 Vlookup 的使用。

 **下周计划：**

 继续熟悉其他数据表与报表，建立对目前产品底层数据的全貌认知；

 分析最近 8 周支付转化率偶尔出现下跌的原因，并提出解决方案。
:::

我在上家公司的时候，部门并没有强制要求写周报，但我还是坚持每天写日报、周报，并且会 Po 上自己的思考，即便没有人看... 不过在一些氛围好一些的互联网公司，前辈们都会抽时间解答同学们每天遇到的问题，整个公司都是你的 Mentor，融入速度非常快。

### 独立负责产品阶段

当已经掌握了基本的工作技能并开始独立负责产品模块、产品、甚至产品线时，**周报便成为了效率工具**。代表产品，周报代表你。除了继续分析思考外，需要实现以下几个新的目的：

#### 临场感

中大型的互联网公司往往由多个事业部、几十条甚至上百条产品线，让干系人清楚的知道你所负责产品的进展最好的方式就是周报。尤其是对应的研发、设计、运营、商务团队，他们正努力的围绕着你的产品进行工作，如何给他们透明而全面的反馈，如何让他们感觉到自己无时无刻站在产品的核心地带工作是非常重要的。这个阶段的周报大量的篇幅应该是介绍产品的完整运行状态，比起初出茅庐阶段的指标单一性，这时候的**指标应该具有完整的全貌**，增长、留存、效率、营收等方面展现。同时也应将产品功能迭代进展看全。

<br/>

例如：
:::tip
 **本周数据变化**
    * \[大盘核心指标趋势图]
    * \[增长指标趋势图]
    * \[留存指标趋势图]
    * \[产品转化效率指标趋势图]
    * \[营收指标趋势图]

 **本迭代研发进展**
    * 本迭代为 Sprint 37，预计提测时间 3 月 29 日，预计上线时间 4 月 7 日；
    * Features 进展：
        * \[正常] 类目页支持顶部类目 ICON 导航，提升切换功能渗透率；
        * \[正常] 搜索页支持对英文品牌名的切词搜索；
        * \[风险] 商品详情页猜你喜欢增加对同品类、同价格带商品的推荐
        * ...

 **下个迭代计划研发功能：**
    * 下个迭代为 Sprint 38，预计 4 月 3 日进入开发，4 月 17 日上线；
    * \[P0] 搜索支持同义词；
    * \[P0] 首页新增猜你喜欢楼层；
    * \[P1] 商品详情页猜你喜欢增加经常购买的商品；
    * \[P1] 订单页面新增预约安装功能；
    * ...
:::

如果数据发生了异常的波动、研发进展有异常，则要解释清楚原因和对策，让团队放心。例如：

:::tip
 \[本周留存指标趋势图]

 Comment：最近 2 周的周留存有阴跌现象，从 50% 缓慢下降至 45%，经过与数据分析团队的讨论分析，判断原因为：3 周前启动的**微信朋友圈广告投放来源的新客质量较低**（32%±），逐渐拉低了大盘的平均留存率。已与 市场部 @老六 同学沟通，本周二起降低该渠道预算 60%，并加紧调优投放策略。
:::

:::tip
 \[本周搜索转化率趋势图]

 Comment：本周搜索转化率上涨明显，**周搜词-结果点击转化率**环比上涨 7 个百分点，从 57% 到 64%，主要原因是**搜索算法纳入了类目**的计算，解决了大量品类词搜索结果不理想的问题。例如：之前搜 “牛奶”，只会展示商品标题中含有牛奶二字的商品（光明纯牛奶），现在会展示牛奶品类的所有商品进行 Rank，如光明优+，也会出现在 “牛奶” 结果中。

 按计划该功能希望将转化率提升至 68%，目前还 有4% 左右的 Gap，继续观察这 2 周的数据寻找算法调优的机会。
:::

:::tip
 \[风险] 商品详情页猜你喜欢增加对同品类、同价格带商品的推荐；
    * 有进展风险，算法团队本周紧急支援首页算法 S 级事故修复，无时间开发该算法；
    * 对策：调整了产品设计，不再经过算法平台取数，**直接通过业务库取数**，通过二级品类价格带选取商品，按近7天销量降序确定商品来实现该功能。预计点击率 2.5% 左右，**低于原设计的 3.5%**。但能够准时上线。
:::

关于如何搭建合理的数据体系，可以看这里：[ 数据分析体系的价值和原则](docs\Product\operations\data-analysis.md)

#### 统一设计理念

产品负责人是产品的灵魂，需要对产品有明确的设计规划、设计理念。当需求方不断提出五花八门的需求时，能够不断抽象、解耦，既能够满足需求，又能够让产品功能可持续。例如:

:::tip
**对站内资源管理功能的思考**

 近几周频繁收到运营团队对站内资源的需求，例如:

 希望在搜索首页下方增加banner广告位，为s级活动导流;.·希望能够分城市、分人群配置品类页面每个楼层的主推商品；

 希望能够在“我的”页面，针对户外运动的人群，提供一个露营专题的宣传入口；希望能够按城市、设备分析目前首页腰部banner位，各个素材的点击效果。综合来看，这些需求都是针对页面资源的利用和提效，经过多次沟通。短期内，继续采用研发hardcode的方式满足紧急的需求，支撑业绩。长期上，计划启动“站内资源位管理系统”的筹建，上线后可以通过配置实现上述需求，分钟级上线。
:::

当这份周报发出后，其他有类似需求的同事势必也会产生共鸣，但是你已经提前解答了他们疑问和诉求，也提出了最优解和预期，提高了协作效率。久而久之，大家发现你对需求的思考是全面的，也总是有最佳方案，对你的信任感自然就加强了。

#### 统一产品发展路径

需求方往往都有明确的业绩目标，因此，当理念清晰后，产品经理还需要周期性的告知产品发展计划，让需求方明确知道何时自己可以用到哪些功能。继续上面的例子，可以扩展开为：

:::tip
**对站内资源管理功能的思考**

近几周频繁收到运营团队对站内资源的需求，例如：
    * 希望在搜索首页下方增加 Banner 广告位，为 S 级活动导流；
    * 希望能够分城市、分人群配置品类页面每个楼层的主推商品；
    * 希望能够在 "我的" 页面，针对户外运动的人群，提供一个露营专题的宣传入口；
    * 希望能够按城市、设备分析目前首页腰部 Banner 位，各个素材的点击效果。

综合来看，这些需求都是针对页面资源的利用和提效，经过多次沟通。短期内，继续采用研发 hardcode 的方式满足紧急的需求，支撑业绩。**长期上，计划启动 "站内资源位管理系统" 的筹建，上线后可以通过配置实现上述需求，分钟级上线。**

<br/>

该系统主要功能**上线计划：**

* 第一期，预计 5 月 13 日上线；
    * 实现资源位动态新增与管理功能，通过配置上线（10分钟)），不再通过研发上线（2周）；
    * 实现资源位素材的分城市、分品类、分设备投放；
    * 实现资源位、素材的 T+1 数据报表；
    * **类目页、商品详情页、我的页面的资源位全面接入。**

* 第二期，预计 5 月 29 日上线；
    * 通过对接 CRM 系统，实现资源位素材的**分人群投放；**
    * 资源位支持 GIF、15 秒短视频素材；
    * **首页、搜索页、购物车页的资源位全面接入**

* 第三期，预计 6 月 12 日上线；
    * 实现资源位素材 **ABTest 机制**，自动分流投放素材，PK效果；
    * 实现资源位数据**实时查看**，提升素材优化效率；
    * **公司所有资源位完成接入。**

* 第四期，预计 7 月 12 日上线；
    * 实现素材自动化功能，能够基于配置自动生成静态 Banner；
    * 实现与算法系统的对接，能够**自动千人千面展示素材。**

* 第五期，预计 8 月 3 日上线；
    * 资源位接入商业化系统，商户可以按 CPC 出价竞争展示机会了；
    * ...
:::

总而言之，作为一个产品的负责人，你的周报需要涵盖干系方所有关心的事情，让大家知道你的思考全面性。

### 负责产品团队阶段

当你开始负责产品团队时，周报内容不会有太多的变化。但是思考的深度，内容的颗粒度应该动态变化。这里就不展开了。

## 周报对我们自己有什么作用？

很多同学反感写周报，很大一部分原因在于周报所带来的形式主义。我们要学会独立思考，不能人云亦云，从自己的角度出发理解周报的价值。对我来说，周报至少有以下几点价值：

#### 客观务实

由于周报会发送给所有的干系人，容不得任何的弄虚作假，会倒逼你客观的阐述事实。但是要注意区分清楚：事实、观点，不要带有观点的表达事实。你要相信没有任何言语手段可以帮助你解决产品问题，必须落实为行动项解决问题。出现错误并不可怕，不直面错误才真的可怕。

#### 利于复盘

一般企业都会有年度述职，或半年度、季度。周报是一个很好的档案库，可以帮助你回忆历史上发生的事情，不遗漏细节。当你已经是一个 TeamLeader 的时候，你自己的、团队成员的周报汇总到一起会是一个庞大的资料库，可以帮助你高效地、有的放矢地进行总结。

#### 降低重复沟通

通过周报的总结，可以将大家关心的内容统一答复，可以减少大量的重复沟通，将自己的时间投入到更重要的事情中去。

![01](/img/product/general-skills/why-weekly-report_images/01.png)

#### 锻炼表达能力

周报是面向读者的，不应按自己的写作容易程度布局，而是要以方便阅读来布局。可能你的写作多花了 10 分钟整理结构，但是每个读者可能会少花 3 分钟来理解你的内容，如果是 100 个读者，就省下了 300 分钟，10:300，还是很合算的。如果你工作涵盖的内容较多，则可以进一步优化前文提到的结构，将需要被关注的内容提炼出来，面向不同的阅读需求，例如：

:::tip
    * 本周 Highlights
    * 本周核心数据变化及说明
    * 产品迭代进展
    * 近期新功能数据表现
    * 思考
:::

* **Highlights** 可以大幅度提高公司老板、高管阅读效率，他们不需要阅读你的细节便可以知道近况；

* **近期新功能数据表现**，是指对近期还没有复盘过的新功能复盘，有头有尾的产品需求可以大幅增加产品经理在运营、研发团队中的权威性和信任感。 想要在讨(si)论(bi)的现场获取信任几乎是不可能的，**信用是需要累积的，信用可以换取信任，信任可以换取效率；**

![02](/img/product/general-skills/why-weekly-report_images/02.png)

* **思考**则可以给团队打预防针，铺垫近期可能会发生的、但还未决定的变化。

除了布局上的合理逻辑，每一条内容也需要经过大脑的三思，谁都不想写出前后逻辑不通的内容，大众化的阅读必然倒逼你对自己语言更加负责任。

## 最后

周报是你的专业形象，一个员工的责任心、能力、智慧程度会在文字写作中一览无余。周报是你的书房，给予你一个稳定的 Space 进行深度思考，希望大家都能利用好他。
