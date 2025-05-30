---
sidebar_position: 2
sidebar_label: 如何阅读项目文档
---

# 如何阅读项目文档

:::tip
**依据文档开发是唯一原则。**

 *\*没写的我就不做（不是）*
:::

## 事前准备

在开始设计需求之前，产品经理需先阅读甲方的项目文档，了解实际的开发难度、方案选择、功能细节等方面，这些内容是无法通过 AI 工具得到答案的。简而言之，大量阅读是必不可少的。



在开始下述文档的阅读时，你需要提前了解：
    1. [ Scrum，最常见的互联网产品研发流程](docs\Product\fundamentals\design\scrum-development.md)
    2. [ 产品设计必备的五张图](docs\Product\fundamentals\design\micro-product-design\five-essential-diagrams.md)
    3. [ 如何理解、掌握项目？](docs\Product\practice\project-understanding\how-to-understand.md)

<br/>

**为防止侵权，需求说明书删去了敏感内容，对需要重要信息进行了脱敏展示，接口数据均经过修改。**

**本篇内容采取了文档正文和作者评论相结合的方式进行，评论的内容会进行标注。**


废话结束\~

## 项目编写说明

| 当前版本：  | V1.2           |
| :------ | :-------------- |
| 制作单位：  | 中国银行软件中心       |
| 编写人员：  | 积利金项目组         |
| 审 核 人： |                |
| 签 发 人： |        |
| 签署日期：  | XX 年 XX 月 XX 日 |

:::note
第一节是项目编写说明，主要说明了项目当前的版本，对应的制作方、审核人员及签署日期。
​
在许多对外的项目文档中，大部分文档均采用了这种形式进行陈述，以规避版本过期，人员不清的问题。

在开始阅读之前，需要理解什么叫做积利金，这款贵金属理财产品的特点、作用和优势是什么。
​

Q1：积利金的定义

中国银行推出的积利金是一种黄金投资产品，客户可以通过积利金账户进行买卖、定投、定存黄金现货等操作。积利金账户的余额分为活期余额和定期余额。
​

Q2：积利金的特点
    * 以克为单位，交易起点低，1克起买；
    * 实时交易，T+0交收；
    * 活期收益，定期收益更高；
    * 可随时赎回，可转换实物金。
​

Q3：积利金的收益来源
    * 黄金价格波动带来的收益；
    * 持有期收益。

黄金价格波动带来的收益是指黄金价格上涨时，客户持有的积利金价值也会相应上涨。持有期收益是指客户持有积利金一定时间后，中国银行按照一定利率给予的利息。
​

Q4：积利金的风险来源
    * 黄金价格波动风险：黄金价格波动较大，可能会导致客户持有的积利金价值下跌；
    * 利率风险：中国银行可能会调整积利金的持有期收益率，导致客户的收益减少；
    * 操作风险：客户在操作积利金交易时，可能会因操作失误而造成损失。
​

总体而言，积利金是一种风险收益相对较低的黄金投资产品，适合有一定风险承受能力的投资者。
:::


## 文档更改记录表

**A** – 添加的；**M** – 修改的；**D** – 删除的

| **更改号** | **日期**         | **版本号** | **A/M/D** | **题目或简短描述**                                     |
| :------- | :-------------- | :------- | :--------- | :----------------------------------------------- |
| 1       | xxxx - xx - xx | V1.0    | A         | 新增文档                                            |
| 2       | xxxx - xx - xx | V1.1    | M         | 新增风险测评、积利金服务时间说明，补充批量同步等内容修改了外部对接接口、二类户外部对接接口文档 |
| 3       | xxxx - xx - xx | V1.2    | M         | 新增积利金产品流程介绍，积利金交易时间说明调整，补充了 11:30-13:15 的休市     |

:::note
对于版本的调整，需要在开篇就文档更改记录表进行说明。
​
对于细小功能点的调整，可以在不同章节的需求开篇进行阐述，或直接整合在文档更改记录表中说明。

文档更改的方式一般有三种，分别为：
    * A，add，新增；
    * M，modify，修改；
    * D，delete，删除
​
格式如文档所示，可以参考这种形式来记录文档的更改记录。
:::

## 公共服务

:::note
正式开始阅读文档时，需要记录文档中所有你不懂的关键词。比如什么叫做API、H5，开户、签约、交易的定义是什么，为什么需要这一系列步骤。
​

在[如何理解、掌握项目？](docs\Product\practice\project-understanding\how-to-understand.md)中提到过，产品经理通常需要一张概念定义表来记录所有不理解的内容。
:::

### Ⅱ 类户开户

中行将以 `API` 和 `H5` 的形式向合作伙伴提供 Ⅱ 类户开户服务。UI 图仅供参考，可客户化，以对接时实际交付物为准。

:::note
在这句话中，中国银行（甲方）提供了两种方式，分别为 API 和 H5：·
    * API：乙方可以使用甲方的 API 接口，自行独立开发原生或 H5页面。胜在功能稳定，UI风格和产品一致。
    * H5：乙方可以直接套用甲方的H5页面，不需要进行开发，或根据 UI 样式进行重置。胜在成本低，效率高。

考虑到开发成本，选择H5形式进行开发的话成本较低，但不能照搬甲方在文档中所展示的H5页面UI，需要根据产品调性进行调整。
​

通常，产品都会有自己的设计标准和组件库，在UI上需要保留产品风格。
:::

![01](/img/product/practice/how-to-read-docs_images/01.png)

开户流程共分为三步：
    1. 选择银行卡（由合作伙伴完成，上送信息至中行）
    2. 上传身份证及预开户身份信息（由合作伙伴完成，上送信息至中行）
    3. 设置交易密码、验证短信验证码并提交（由中行提供 H5 页面）

:::note
乍一看开户只需要三个步骤，非常简单，实际上坑不止一点。
​

在这个过程中，产品经理需要做的有：
    * 判断用户是否登录、是否开过户、是否签约、测评。这些是衡量用户是否能进入开户流程的必要步骤。
    * 若用户没有绑定银行卡，需要进行核查身份信息进行绑定。无卡可绑的才进入到Ⅱ类户开户流程。

​
总而言之，产品经理需要洞察在文字背后更多的功能流程细节。
:::

<br/>

开户协议的签署作为开户流程的必要前置条件，客户必须阅读并同意协议所有条款后方能进入开户流程。因合作伙伴差异化需要，相关协议由各分行提供，由合作伙伴供客户在线阅读签约。

若开户成功，中行将自动发起积利金产品签约请求，并将签约结果推送给合作伙伴。若开户失败，则将开户失败结果推送给合作伙伴。此外，开户结果将以短信形式（成功/失败）由中行推送给客户。


**相关接口说明：**
    1. `ezacc.ts0001`：天天财富在线开户预申请: 合作伙伴调用此接口将客户身份信息上送中行。
    2. 预开户中身份证照片以文件的形式发送。第三方网络接入方式根据情况确定，可通过物理专线批量收发文件。
    3. `eztpfp.ts0005`：开户进度查询： 开户结果为非实时结果，合作伙伴可以通过开户进度查询接口查询开户结果。
    4. `jlj.ts0001`：开户查询申请( Ⅱ 类户开户结果通知)：推送开户结果至合作伙伴。（此接口为合作伙伴开发，中行仅调用）
    5. `jlj.ts0002`：签约查询申请( Ⅱ 类户签约结果通知)：推送积利金签约结果至合作伙伴。（此接口为合作伙伴开发，中行仅调用）

:::note
接口是个好东西，有时间的话以后单独开一篇来讲埋点。
​

在上面一条评论中，我们提到用户在开户之前需要判断用户的签约状态，这通常是由甲方提供。
​

在甲方提供的接口文档中，有一条接口是能直接查询用户最新的签约状态的。通过此接口，我们能够得知用户的签约绑卡状态，继而进行下一步骤。
​

同理，当用户完成开户流程之后，我们也能通过接口知道用户是否开户成功，进而给出 “成功” 或 “失败” 的提示。
​

接口的名词并不重要，重要的是知道接口的作用就可以了。
:::

<br/>

合作伙伴上送身份证：

传输链路：合作伙伴 -> EZTDG -> ICMS

:::note
一般来说，涉及用户信息的内容、信息校验，结果反馈都不由乙方负责，仅由乙方（也就是合作伙伴）通过接口传输，由甲方自行核对。
​

在此处，身份证属于用户的私密信息，乙方只能发送身份证正反面照片 to 甲方，由甲方核对返回核对结果（正确 or 错误）。
​

包括下文会提到的风险测评结果、签约绑卡状态，这些都属于用户隐私，走的都是甲方接口，而非由我们进行核查。
:::


| **合作伙伴发送** |
| ---------- |
| 开户身份证照片    |

### Ⅱ 类账户绑定说明

当 Ⅱ 类账户开户成功后，合作伙伴将该 Ⅱ 类账户自动绑定入卡列表中。客户可以使用该 Ⅱ 类账户和其绑定的 Ⅰ 类户进行金融交易，使用绑定的 Ⅰ 类账户时，需联动 Ⅱ 类账户入金交易，基于此 Ⅱ 类账户完成后续交易。

:::note
积利金项目不仅提供了开户功能，同时也需要提供卡片绑定和管理功能。
​

该功能的主要目的就是方便用户在不同卡之间进行出入金操作。在那个时候（2018年），银联云闪付（集成多行银行卡和信用卡的一款应用）还未成熟，该功能是必须支持的。
:::

### 账户入金

中行向合作伙伴提供公转私接口，由合作伙伴提供入金功能（因合作伙伴不同而不同）。



**相关接口说明：**
    1. `eztpfp.ts0006`：Ⅱ 类户出金入金接口：出入金为同一个接口，均为中行对公户及对私户间的转账。
    2. `eztpfp.ts0008`：出入金交易查询接口：合作伙伴可调用此接口查询出入金在中行对接系统本地的交易记录，批量展示给客户。针对本地记录中的未明交易，系统将定时去后台系统刷新最新状态。
    3) `eztpfp.ts0019`：出入金未明交易信息核对：出入金交易可能因为链路异常等多种原因发生未明，合作伙伴查询到未明交易后可选择调用此接口按条查询未明记录，调用此接口后，中行对接系统将去后台系统查询该条记录的最新状态并返回给合作方；批量查询对接系统本地出入金交易记录，请调用`eztpfp.ts0008`接口。

### 中行 II 类户资金转出至 I 类户

中行为合作伙伴提供了中行 II 类户资金转出至 I 类户的 H5 页面，以满足出金需求。UI 图仅供参考，可客户化，以对接时实际交付物为准。

![02](/img/product/practice/how-to-read-docs_images/02.png)



**相关接口说明：**
    1. `eztpfp.ts0027`：二类户向它绑定的一类户转账交易查询接口：提供查询时间段内的二类户向绑定一类户转账的交易记录查询。
    2. `eztpfp.ts0029`：转账未明交易信息核对：二类户转账发生未明时，可调用此接口根据流水号查询指定记录的最新交易状态。

### 风险测评

客户需要完成风险测评才能交易积利金，对无风险测评服务的合作伙伴，中行提供风险测评 H5 页面，合作伙伴可选择在用户完成中行 I/II 类卡绑定或用户完成签约之后跳转到中行页面。UI 图仅供参考，可客户化，以对接时实际交付物为准。

![03](/img/product/practice/how-to-read-docs_images/03.png)

:::note
积利金属于贵金属产品，和证券、期货开户一样，需要测评用户的风险容忍程度，来确定用户是否适合购买投资产品（参与股票市场）。
:::

## 产品服务

### 流程介绍

积利金业务主要分为产品浏览、开户绑定、积利金签约、账户入金、产品购买、产品赎回、账户出金、交易查询等 8 个较为独立的流程，同时，支持积利金的买卖、活转定、积利金定投、实物金提取指引、份额查询（含盈亏）、交易记录查询。具体流程如下图所示。

![04](/img/product/practice/how-to-read-docs_images/04.png)

:::note
从这一部分开始，项目的需求就开始变得更为具体。产品经理需要对8个流程进行拆分，搞清楚每个流程之间的子流程。
​

其次，具体的子流程需要调用哪些接口和字段也需要详细说明。
​

我们可以沿用[《产品设计必备的五张图》](docs\Product\fundamentals\design\micro-product-design\five-essential-diagrams.md)的思路进行推导，在开始工作时，思路也会比较清晰。
:::

### 产品查询

客户登录合作伙伴前端进行积利金产品浏览，展示界面由合作伙伴按照自有标准设计开发。

:::note
产品查询这一环节，在用户视角中就是我们看到的一些产品数据。
​

对于用户来说，他们关注积利金产品能够获得收益（利率）、此刻买入黄金或卖出黄金的价格（买入价和卖出价）等等。
​

接口字段都是有的，但展示什么数据字段，以什么样的方式进行展示，则由产品经理决定。
:::

**相关接口说明：**
    1. `eztpfp.ts0022`：产品信息查询：返回积利金产品与利率列表，包含活期与定期；
    2. `eztpfp.ts0024`：第三方交易牌价行情查询：实时返回第三方后台的买入及卖出价，此价格为活期交易价格；
    3. `eztpfp.ts0025`：第三方参数查询：包含渠道端购买上下限、步长、升水、容忍点差等第三方特征化参数；
    4. `eztpfp.ts0014`：积利金当日上海金价格查询：返回价格为定投价格，每日更新，计算规则为上海金价+第三方定投升水。

### 签约绑卡

客户选择交易的银行卡账户必须已经签约积利金并签约账户状态正常。合作伙伴可通过调用中行提供的签约查询接口来查看签约结果，并进行下一步操作。



**相关接口说明：**
    1. `eztpfp.ts0001`：积利金签约查询：该接口返回 12 种状态，各状态后续处理的方式都不同。

<br/>

**签约查询接口返回状态说明：**

| **状态**                             | **说明**                                                   |
| :---------------------------------- | :-------------------------------------------------------- |
| **未签约，无中行卡**                       | 合作伙伴发起创建 II 类户交易。                                        |
| **已签约，签约卡为中行 I 类户，且为上送卡**          | 合作伙伴直接绑定该已签约中行 I 类户，并调第三方签约登记接口在中行登记，该 I 类户可正常使用。        |
| **已签约，签约卡为中行 II 类户，且为上送卡**         | 中行返回该 II 类户绑定的I类账户，合作伙伴可绑定该已签约中行 II 类户，并调第三方签约登记接口在中行登记。 |
| **已签约，签约卡为活一本或中行 III 类户，签约卡为非上送卡** | 提示客户，必须去柜台解绑该已签约活一本、III 类户，才可继续进行操作。                     |
| **未签约，有中行 I 类户**                   | 合作伙伴调签约接口并绑定该I类户。该I类户可在天天正常使用。                           |
| **未签约，有中行 II 类户**                  | 中行返回该 II 类户绑定的I类账户，合作伙伴可绑定该已签约中行 II 类户，并调签约接口。           |
| **已签约，签约卡为中行 I 类户，且为非上送卡**         | 合作伙伴直接绑定该已签约中行 I 类户，并调第三方签约登记接口在中行登记，该 I 类户可正常使用。        |
| **已签约，签约卡为中行 II 类户，且为非上送卡**        | 中行返回该 II 类户绑定的I类账户，合作伙伴可绑定该已签约中行 II 类户，并调第三方签约登记接口在中行登记。 |
| **未签约，有活一本或中行  III类户**             | 合作伙伴引导客户开立中行 II 类户。                                      |
| **未签约，上送卡为中行 I 类户**                | 合作伙伴调签约接口并绑定该 I 类户。该 I 类户可在天天正常使用。                       |
| **未签约，上送卡为中行 II 类户**               | 中行返回该 II 类户绑定的 I 类账户，合作伙伴可绑定该已签约中行 II 类户，并调签约接口。         |
| **已签约，账户锁定**                       | 签约账户已锁定，合作伙伴提示客户去柜台解除锁定。                                 |

:::note
在前向文章中，我们大致知道了积利金的整体流程。在用户尚未到积利金签约环节之前，需要完成签约、绑卡的步骤。
​

如何知道用户当前的签约和绑卡状态，甲方提供接口为我们节省了非常多的工作，产品经理只需要直接调用接口，就知道用户的签约和绑卡状态。
​

如果甲方没有提供呢？我们可能需要定义这 12 种状态并开发接口，工作量就会剧增...感谢接口！
:::

### 积利金签约

积利金签约协议的签署作为积利金交易流程的必要前置条件，客户必须阅读并同意协议所有条款后方能签约并交易。因合作伙伴差异化需要，相关协议由各分行提供，由合作伙伴供客户在线阅读签约。



**相关接口说明：**
    1. `eztpfp.ts0002`：积利金签约：若客户未签约积利金或签约账户已注销，则合作伙伴需要使用客户的绑定卡（中行I/II类户）发起签约请求。
    2. `eztpfp.ts0021`：第三方签约登记:合作伙伴在直接绑定客户已签约卡之后，需要调起此接口，以便于中行记录并区分渠道。
    3. `jlj.ts0002`：签约查询申请(二类户签约结果通知)：中行完成签约请求后，会将客户的签约结果返回至合作伙伴，由合作伙伴进行展示。（此接口为合作伙伴开发，中行仅调用）

<br/>

### 产品购买与赎回

在购买流程中，如遇需要开 Ⅱ 类账户情况，则引导客户开立 Ⅱ 类账户。由于开立 Ⅱ 类账户需要联机他行核对客户信息，因此特殊情况下可能存在核实时间稍长而终断此次购买流程的情况，Ⅱ 类账户开立成功后，中行通知合作伙伴引导客户再次进行签约购买。

:::note
理财产品的购买和赎回是核心流程之一。在这一环节一般会涉及大量接口，确保数据一致。
​

在交易环节中，会涉及大量的专有名词，比如Ⅰ类户Ⅱ类户，什么是活期、定存，卖出和赎回有何差异等等。比较考验产品经理对于金融基础常识的理解能力。
:::

#### 活期

在产品界面展示 “产品名称、客户买入价/卖出价、已绑定中行卡、交易币种、账户余额” 等信息，交易数量由客户填写，提交后显示交易信息，客户点击“确认”即可完成产品购买。客户买卖的起点金额和最小步长支持可调。

:::note
积利金产品的交易大致分为三类：买入、卖出和定投。
​

活期可以简单理解为用户账户余额，账户活期资金会产生利息，就跟放在银行卡里的资金一样。
​

存入账户的资金为用户的活期余额，用户可以将活期余额购买积利金份额。
​

举个例子，用户存入10000元到积利金账户，此时用户账户有10000元活期余额；用户使用5000元购买积利金份额，等同于持有5000元额度的黄金头寸。
​

此时，用户账户的账户情况为：
    * 5000元活期余额；
    * 5000元积利金份额
:::

**相关接口说明：**
    1. `eztpfp.ts0022`：产品信息查询：返回积利金产品与利率列表，包含活期与定期；
    2. `eztpfp.ts0024`：第三方交易牌价行情查询：实时返回第三方后台的买入及卖出价，此价格为活期交易价格；
    3. `eztpfp.ts0025`：第三方参数查询：包含渠道端购买上下限、步长、升水、容忍点差等第三方特征化参数；
    4. `eztpfp.ts0004`：活期交易：合作伙伴调用此接口发起活期交易。
    5. `eztpfp.ts0003`：积利金活期交易查询：合作伙伴可调用此接口查询活期交易在中行对接系统本地的交易记录，并批量展示给客户。针对本地记录中的未明交易，系统将定时去后台系统刷新最新状态。
    6. `eztpfp.ts0023`：活期未明交易信息核对：活期交易可能因为链路异常等多种原因发生未明，合作伙伴查询到未明交易后可选择调用此接口按条查询未明记录，调用此接口后，中行对接系统将去后台系统查询该条记录的最新状态并返回给合作平台；批量查询对接系统本地交易记录，请调用`eztpfp.ts0003`接口。
    7. `eztpfp.ts0017`：预期到期利息查询：若为活期，查询到为累计未取利息，若为定期，则为批量结果，返回每笔定期的利息。

<br/>

#### 活转定

支持客户账户活期积利金转定期。客户点击任一产品进入交易界面点击“活期转定期”即可完成，选择“活转定数量”定期交易。定期产品展示包括产品代码，产品名称，利率，期限，起购日，起息日，到期日等。合作伙伴应当在其产品列表与持仓中均提供活期转定期功能，并可选数量。


客户若想购买积利金的定期，必须通过活转定的形式完成，中行仅提供活转定接口，购买活期及发起活转定请求的联动由合作伙伴完成。

:::note
活转定，指活期转定期。指用户使用当前购买的积利金份额直接购买定期产品。
​

存入定期产品的资金，不支持转出为积利金份额。需要等到定期产品到期之后，方能转入积利金份额或继续定投。
:::

**相关接口说明：**
1. `eztpfp.ts0022`：产品信息查询：返回积利金产品与利率列表，包含活期与定期；
2. `eztpfp.ts0009`：定存交易：合作伙伴调用此接口发起活转定交易。
3. `eztpfp.ts0010`：积利金活转定交易查询：合作伙伴可调用此接口查询定存交易在中行对接系统本地的交易记录，并批量展示给客户。针对本地记录中的未明交易，系统将定时去后台系统刷新最新状态。
4. `eztpfp.ts0016`：活转定未明交易信息核对：定存交易可能因为链路异常等多种原因发生未明，合作伙伴查询到未明交易后可选择调用此接口按条查询未明记录，调用此接口后，中行对接系统将去后台系统查询该条记录的最新状态并返回给合作平台；批量查询对接系统本地交易记录，请调用`eztpfp.ts0010`接口。
5. `eztpfp.ts0017`：预期到期利息查询：若为活期，查询到为累计未取利息，若为定期，则为批量结果，返回每笔定期的利息。

<br/>

#### 定投

客户根据需要在合作伙伴前端设置定投。合作伙伴产生的积利金定投交易可不随中行批量执行，但需要在积利金交易时段内完成相关交易。

:::note
定投，全称为定期投资，是一种长期并定期（如每月、每季度等）投入相同资金进行投资的策略。
​

积利金的定投功能，指用户购买固定期限的积利金份额，以期在到期赎回时获得利率收入。在定投期间，产品支持赎回。赎回的规则与我们购买基金类似。
:::

**相关接口说明：**
    1. `eztpfp.ts0011`：定投签约：无时间限制。
    2. `eztpfp.ts0012`：定投协议变更、终止：无时间限制。
    3. `eztpfp.ts0013`：定投签约计划查询：无时间限制。
    4. `eztpfp.ts0015`：积利金第三方定投计划执行处理：定投仅能在积利金交易时段内才可完成，合作伙伴可批量执行定投，中行后台系统将对有效定投计划内的交易进行处理。即客户扣款日是否为定投计划日由合作伙伴控制判断。
    5. `eztpfp.ts0003`：积利金活期交易查询：定投交易记录由此接口展示。
    6. `eztpfp.ts0023`：活期未明交易信息核对：活期交易可能因为链路异常等多种原因发生未明，合作伙伴查询到未明交易后可选择调用此接口按条查询未明记录，调用此接口后，中行对接系统将去后台系统查询该条记录的最新状态并返回给合作伙伴；批量查询对接系统本地交易记录，请调用`eztpfp.ts0003`接口。

<br/>

#### 产品赎回

若客户在合作伙伴赎回积利金的活期和定存产品，合作伙伴可通过活期和定存交易记录查询接口正常查看该渠道的赎回记录。

:::note
产品赎回，指把用户的积利金活期份额或定投产品赎回到账户活期。

在赎回时，需要通过接口获取用户的积利金活期份额和定投份额，换算出实际应赎回的金额。
:::

若客户在中行渠道赎回合作伙伴的积利金份额，则合作伙伴可通过`eztpfp.ts0018`接口来查询本渠道情况。

\*赎回接口为`eztpfp.ts 0004`

**相关接口说明：**
    1. `eztpfp.ts0003`：积利金活期交易查询
    2. `eztpfp.ts0023`：活期未明交易信息核对
    3 `eztpfp.ts0010`：积利金活转定交易查询
    4 `eztpfp.ts0016`：活转定未明交易信息核对
    5. `eztpfp.ts0018`：中行自有渠道赎回的第三方份额查询：按查找日期批量返回交易信息，包含单笔赎回交易总克重、单笔赎回交易合作伙伴所占克重等信息。

<br/>

### 持仓查询

提供客户在合作伙伴前端上的持仓信息。客户可通过合作伙伴前端查询积利金产品的金额、到期日、浮动盈亏等信息。

:::note
如文档所述，持仓查询可以查看积利金产品的盈亏信息。具体如何在前端展示，就要考验产品经理的功底了
:::


**相关接口说明：**
    1. `eztpfp.ts0020`：账户信息查询：合作伙伴可由此接口查询客户的基本信息及活期、定期持仓、收益等交易信息。

<br/>

### 交易限额

**积利金买卖限额**：单笔交易当前最小 1 克，日上限为 3000 克，无累计限额。以积利金对客协议和业务公开说明为准。

:::note
交易限额是一种风控手段，无论是银行还是交易所，都需要对客户最大持有的头寸进行限制，避免持有头寸（数量）过大对市场产生影响。
​

在这一步，需要对用户的持仓头寸进行控制，在用户买入时控制最大输入数量和最大持有头寸。
:::

**相关接口说明：**
    1. `eztpfp.ts0025`：第三方参数查询：包含渠道端购买上下限、步长、升水、容忍点差等第三方特征化参数。

<br/>

### 份额隔离

客户可在银行渠道买卖所有渠道的积利金头寸。

### 批量同步

批量同步是合作伙伴与中行之间的信息同步，以文件的形式发送信息。第三方网络接入方式根据情况确定，可通过物理专线批量收发文件。由于对接方式和中行系统可能调整，批量同步方式和文件以实际交付为准，接口文档可参考附件。

:::note
如这一节的说明所示，乙方除了要通过接口向甲方上报数据，还要以物理形式（可以理解为非接口的形式）向甲方提供文档。比方说以Excel的形式进行传输。
:::

定时对账信息：

EZTPFP 批量时间为凌晨 0 点，第三方下传文件需要在0点之前上传

传输链路1：合作伙伴 -> EZTDG -> EZTPFP

| **合作伙伴发送** |
| :---------- |
| 活期交易表（增量）  |
| 定存交易表（增量）  |
| 定投交易表（增量）  |

传输链路2：XPAD\_G -> DCDS -> EZTDG -> EZTPFP->EZTDG->合作伙伴

| **合作伙伴接收**  |
| :----------- |
| 客户签约账户表（全量） |
| 活期交易表（增量）   |
| 定投交易明细表（增量） |
| 定存交易表（全量）   |
| 定投交易计划表（增量） |
| 账户余额表（全量）   |
| 利息支付表（增量）   |

传输链路3：EZTPFP -> EZTDG ->合作伙伴

| **合作伙伴接收** |
| :---------- |
| 出入金记录表（增量） |

### 积利金服务时间

:::note
    * Ⅱ类户的开户时间是银行正常的工作时间（不包括线下营业厅）；
    * 积利金的交易则参考了交易日的开盘和收盘时间；
    * 对于计划制定和各类交易查询，则支持 24 小时查询，接口并不需要人工在线。
:::

服务时间仅供参考，可能随政策和系统调整发生变化，以实际对接时为准。
    1. **二类户开立**：周一到周日 早八点到晚八点
    2. **积利金交易（活期和定存）**：周一到周五 上午 9:00-11:30 下午 13:30-15:15
    3. **定投计划制定及各类交易查询**：24 小时服务
    4. **定投交易**：定投交易需要上送定投价格，该价格需要合作伙伴以接口形式查询当日上海金价格，该价格工作日下午两点多更新。定投交易本身上送截止时间为 15:15。
 