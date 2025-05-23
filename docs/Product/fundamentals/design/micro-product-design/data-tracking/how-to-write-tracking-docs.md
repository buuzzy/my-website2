---
sidebar_position: 3
sidebar_label: 如何写好数据埋点文档
---

# 如何写好数据埋点文档 



# 埋点文档的写作方式

在步入大家最关切的正题之前，先来看看埋点文档大概长什么样子。



有这样的：

![01](/img/product/product/how-to-write-tracking-docs_images/01.png)

也有这样的：

![02](/img/product/product/how-to-write-tracking-docs_images/02.png)

还有这样的：

![03](/img/product/product/how-to-write-tracking-docs_images/03.png)

有没有发现，上面三份不同的埋点文档都长得不太一样呢？



每家公司都有不同的业务和场景，对于埋点文档就形成了不同的规范和要求。即便是通过神策数据或 GrowingIO 等数据服务商，他们也会根据公司业务提供不同的解决方案。不必担心，在理解埋点文档的内核之后，我们就能够快速上手。



关于埋点文档的写作，一般可以分为两种形式，我简称为**轻量级**和**复杂型**。轻量级的埋点文档，应用最多的就是产品的营销运营。这部分需求一般都很简单，我们在埋点文档的呈现上要求清晰易懂，以简洁为主。复杂型的埋点文档，一般适用于复杂的分析体系，也就是中大厂会使用此类文档。

| **埋点文档类型** | **应用场景**         | **要求** |
| :---------- | :---------------- | :------ |
| 轻量级        | 多用于产品的营销运营       |1. 内容清晰简洁<br/>2. 响应速度快易于更改|
| 复杂型        | 中大厂的数据埋点体系一般都很复杂 |1. 要求进行评审、管理<br/>2. 具备增删改查能力<br/>3. 具备字典（Wiki）和管理功能|

## 轻量级：要求清晰易懂

![04](/img/product/product/how-to-write-tracking-docs_images/04.png)

### 极简型DRD

日常工作中，埋点数据需求量最大的部分无疑是产品的营销运营。营销运营大部分是常态化专题运营伴随热点营销活动，因此营销运营埋点的频率会远大于产品版本埋点。



常态化运营的特点是短平快，要周期性的更新活动主题和内容，核心目的是稳固影响力。热点营销活动主打的是以近期热点作为主题，进行以业务目标为导向的活动。在这种日常活动中就不适合使用那种完整的埋点文档，我们只需要在需求文档中简单的写明你需要的数据，交付给研发的时候在特别说明下即可。

<br/>

极简方式：
    1. 记录页面的点击浏览量（PV）和用户浏览量（UV）
    2. 记录页面中 A、B、C 三个按钮的点击量和点击人数
    3. 记录通过 B 按钮进行业务订购的人数和金额
    4. 记录点击分享 icon 的人数以及分享渠道（微信、朋友圈、微博...）


<br/>

由于常态化的营销运营活动能够固定下来，我们甚至让研发单独针对这些营销运营活动开发插件，后续有同样活动的时候直接进行调用。到这里，一个勉强能用的埋点需求就完成了。是不是很简单？埋点文档的写作并不是必须的。在[ 如何写好产品设计文档（PRD）](docs\Product\fundamentals\design\micro-product-design\how-to-write-prd.md)中，我也提到了`In-Task Design`的概念，大家可以温习一下\~



完成埋点需求之后，接下来你可以就一些细节和开发进行讨论。由于运营活动对于上线时间要求比较苛刻，我们可以不用将细节也一同写清楚。当然，如果时间充裕的话就写上。

<br/>

这些细节包括什么呢？比如说：
    * 记录的 PV 和 UV，是按什么周期进行记录？是天、周还是月？
    * 记录 UV 的时候，我们使用什么来作为唯一凭证？是手机号、IP 还是 IMEI/DeviceCheck？
    * 通过 B 按钮进行业务订购的人数，需要统计实际支付的人数吗？还是点击按钮就统计一次呢？
    * 需要记录点击分享链接访问运营活动的人数吗？

<br/>

极简型埋点方案适用于时间较为紧张的营销运营活动的埋点设计，如果上线预计时间较为宽松，则可以考虑下面轻量型的方式。

### 轻量型DRD

轻量型的埋点文档，通常也不需要以复杂度较高的数据埋点文档进行写作。记住一点原则：

:::tip
把文档视作一种沟通方式，而沟通的核心在于清晰易懂，而不要是要求完美和复杂。
:::

通常，在 UI 将运营部门的需求设计完成之后，产品经理就可以对页面进行埋点。

<br/>

举个例子：

*目前我们正在为一次美联储利率决议做一次直播活动，页面要素涉及直播板块、讨论区、内容板块（包括行情走势和历史数据展示）。现要为本次活动设计埋点。*

<br/>

按照上文讲述过的思考方式，我们一步步来进行推导：

**1、需要哪些指标？**

| **需求**              | **对应指标**      |
| :------------------- | :------------- |
| 我想要知道有多少人浏览了这个活动页面？ | 活动页面的 PV 和 UV |
| 开始直播时，有多少人正在观看直播？   | 直播播放的次数和人数    |
| 有多少人浏览了页面的内容？       |1. 页面页签点击次数<br/>2. 页面 Tab 点击次数|
| 有多少人因本次活动参与了讨论？     |1. 评论区Tab点击次数<br/>2. 评论区成功回复次数|
| ...                 | ...           |

**2、指标适用场景（标签）**

| **需求**              | **对应指标**      | **事件**     |
| :------------------- | :------------- | :---------- |
| 我想要知道有多少人浏览了这个活动页面？ | 活动页面的 PV 和 UV | 点击活动链接（入口） |
| 开始直播时，有多少人正在观看直播？   | 直播播放的次数和人数    | 点击播放按钮     |
| 有多少人浏览了页面的内容？       |1. 页面页签点击次数<br/>2. 页面 Tab 点击次数|1. 点击页面页签<br/>2. 点击页面 Tab|
| 有多少人因本次活动参与了讨论？     |1. 评论区Tab点击次数<br/>2. 评论区成功回复次数|1. 点击评论区 Tab<br/>2. 点击发送按钮(有输入内容)|
| ...                 | ...           | ...        |

**3、新增、维护、更新指标**

一般来说，营销运营埋点有点 “一次性” 的意味，通常不需要对指标进行增删改，除非产品验收和测试不通过，或者上线后是因指标设计原因无法获取数据。

<br/>

接下来，我们需要将这些指标和事件转换成研发能够理解的语言，同时框上埋点页面的具体位置。通常，面向营销运营的埋点文档包括了三个要素，分别为：**投递场景、事件Key、参数列表**。
    * 投递场景：用户在进行哪些操作时会触发埋点上报？
    * 事件Key：也即埋点事件。比如事件是`点击`，那么事件key就是`click`。
    * 参数列表：存在多个选项的事件一般需要补充参数列表。比如对 3 个 Tab 设计了`点击`事件，需要知道用户具体点击了哪一个 Tab，则需要标明：click\_id = 1/2/3。

<br/>

示例如下：

| **投递场景**| **事件KEY**| **参数列表**|
|:--|:-| :- |
| 美联储利率决议页面曝光时       | fed\_rate\_decision\_h5\_exp       | channel = xxx （曝光来源）|
| 直播视频播时（即直播只要进行就上报） | fed\_rate\_decision\_live\_play    ||
| 下方行情报价点击           | fed\_rate\_decision\_trade\_click  | click\_id = xxx（如图所示）|
| 页面的页签选择点击时         | fed\_rate\_decision\_tab\_choose   | click\_id = xxx（如图所示，改为0、1、2）|
| 高频词选择点击时上报         | fed\_rate\_decision\_word\_choose  | click\_id = xxx（如图所示，改为0、1、2）|
| 快速跳转页签点击时          | fed\_rate\_decision\_quick\_choose | click\_id = xxx（如图所示）|
| 言论切换时              | fed\_rate\_decision\_voice\_type   | click\_id = xxx（如图所示）|
| 讨论发言编辑发布时          | fed\_rate\_decision\_message\_send ||
| 会后复盘视频播放点击         | fed\_rate\_decision\_video\_click  | title= xxx （video的唯一标识即可）|

假如你所在的组织使用的不是如神策数据、GrowingIO 等数据服务商（一般使用数据服务的公司都财大气粗），而是自行设计、管理和维护埋点的，建议使用这类 DRD 撰写方式，胜在简洁，管理效率高。

## 复杂型：维护更新迭代

开始本节内容之前，我们需要思考一个问题：

:::tip
为什么需要复杂程度较高的埋点文档呢，埋点文档不是越简单越好吗？
:::

随着业务的不断深入，产品注定会变得更加完善，或者说变得更为复杂。组织也会在这一时期不断扩张，产品部门对于用户的分析也在不断加深... 诸多的现实因素叠加在一起，这要求产品经理或者数分团队需要使用有深度规范的埋点文档进行管理，以便更好的在各层次中对埋点的理解达成一致。

:::tip
“复杂” 的埋点文档，本质上解决的是多方协作中的沟通问题。
:::

<br/>

**1、储存类型**

在撰写复杂的埋点文档之前，需要了解一些关于埋点数据类型的小知识，这关乎数据用哪种形式进行记录：

| **数据类型** | **数据类型** | **说明**                                            |
| :------------ | :------------ | :------------------------------------------------- |
| String       | 字符串          | 表现直接存储一段文本内容，可以是中文，也可以是英文。<br/>我们可用来记录用户搜索的内容获取发表的内容。  |
| bool         | 布尔           | 只能表示 True（是）和 False（否）。<br/>我们已可以用来记录用户是否点击按钮。         |
| int          | 整型           | 记录自然数，从 -2,147,483,648 到 2,147,483,647 之间的数都可以使用。 |
| float        | 浮点           | 这也是我们常说的小数点，如：1.21、5.20、13.14 等等。                 |

由此可见，不同的数据类型有其对应的使用场景。在券商 App 中，如果我们想要知道用户搜索了什么内容，那么我们需要用 String（字符串）记录，字符串既可以记录中文、英文，还可以记录数字。或者我们想要记录用户的出入金数据，那么就应该使用 int（整型）记录。


除了上面 4 种类型，其实还有比如 long、char 等数据类型，但在实践中我们用的较少。了解了上面的 4 个类型，基本对我们撰写文档来说就没太大的问题了。

### 示例：用户登录数据埋点

撰写专业埋点文档的时候，我们需要基于需求进行分析和设计。这部分我们已经讨论过，此处简单举一个例子进行说明。假如我们需要对用户登录（浏览）事件设计埋点，可以以 “用户是否浏览了首页” 作为衡量标准。那么我们就先将埋点类型定义为`浏览`，二级类型定义为`首次浏览`。



有了这两个分类，我们就可以在后续有需要查询埋点的时候快速理解定位埋点。随后，我们需要对埋点参数进行设计。假如我想了解用户是否是首次登录，我们可以使用 IMEI 作为用户的唯一标识。如果后端返回的 IMEI 值不重复，那么就说明该用户就是首次登录。这样一来，我们就有了一个 v0.1 版本的数据埋点。

| 埋点类型 | 二级类型 | 埋点名称      | 属性类型   | 示例/说明     |
| :---- | :---- | :--------- | :------ | :--------- |
| 浏览   | 首页浏览 | 首次登录判断    | bool   | 是（T），否（F） |
|      |      | IMEI 唯一标识 | String |           |

但在代码中，埋点一般都是用英文呈现，如果不给出明确的英文名称，后续如果有查询需求。或者自己想要通过 SQL 去查询就会比较麻烦，因为我们并不清楚埋点叫什么。例如手机号，研发可能取名叫做`number`，然后在其他渠道获取的手机号又叫做`Phone number`、`Telephone number`... 那这就乱套了，在产品体系变复杂后，也很难进行埋点管理。



因此在设计埋点的时候，最好需要加上中文名称，于是我们就得到了 v0.2 版本的数据埋点。

| 中文类型名 | 英文类型名  | 中文二级类型 | 英文二级类型        | 埋点名称      | 英文名称           | 属性类型   | 示例/说明     |
| :------- | :-------- | :-------- | :--------------- | :--------- | :---------------- | :------ | :--------- |
| 浏览      | PageView | 首页浏览     | First\_PageView | 首次登录判断    | is\_first\_login | bool   | 是（T），否（F） |
|         |          |          |                 | IMEI 唯一标识 | imei             | String |           |

与之相反，在神策数据或者 GorwingIO 的系统进行埋点，他们一般给的是英文名称，这个时候就需要我们手动补充中文名称，以便让业务方理解埋点的含义。



随着业务埋点需求的增多，在后期我们的埋点会越来越多。在没有埋点管理的前提下，查找、统计埋点的工作就会变得异常崩溃，如同在一个堆满衣服的仓库寻找某件衣服。

| **事件显示名** | **属性英文变量名**   | **属性显示名** | **数据类型** | **属性值示例或说明**                                                               |
| :--------- | :------------- | :--------- | :-------- | :------------------------------------------------------------------------- |
| 个股详情页     | product\_type | 产品类型      | STRING   | A股、B股、债券、国债逆回购、ETF基金、reits基金、普通基金（除reits、etf之外的基金）、CDR、港股、期权、期货、板块、指数、股转股票 |
|           | code\_type    | 证券类型      | STRING   |                                                                            |
| 证券产品      | market\_type  | 市场类型      | STRING   | 沪市、深市、京市、股转、港交所                                                            |
|           | product\_type | 产品类型      | STRING   |                                                                            |
|           | product\_name | 产品名称      | STRING   | 沪市、深市、京市、股转、港交所                                                            |
|           | product\_code | 产品代码      | STRING   |                                                                            |
| 详情页按钮点击   | title         | 页面标题      | STRING   | 个股详情页                                                                      |
|           | url           | 页面地址      | STRING   |                                                                            |
|           | button\_area  | 按钮区域      | STRING   | 盘口，tab，底部操作按钮，更多                                                           |
|           | button\_name  | 按钮名称      | STRING   | [智能盯盘],[资金、新闻等]，[买入、卖出、加自选、删自选、更多]，[切换两融、撤单等]                              |
| 页面信息      | title         | 页面标题      | STRING   | 个股详情页                                                                      |
|           | url           | 页面地址      | STRING   |                                                                            |
| ...       | ...           | ...       | ...      | ...                                                                        |

所以，我们需要定时对埋点进行整理统计，将通用的数据抽离出来，形成一张新表：

| **事件显示名**     | **属性英文变量名**   | **属性显示名** | **数据类型** | **属性值示例或说明**                                                               |
| :------------- | :------------- | :--------- | :-------- | :------------------------------------------------------------------------- |
| 行情\_个股详情页浏览   | product\_name | 产品名称      | STRING   |                                                                            |
|               | product\_code | 产品代码      | STRING   |                                                                            |
|               | code\_type    | 证券类型      | STRING   | 老版5.0行情code\_type                                                          |
|               | market\_type  | 市场类型      | STRING   | 沪市、深市、京市、股转、港交所                                                            |
|               | product\_type | 产品类型      | STRING   | A股、B股、债券、国债逆回购、ETF基金、reits基金、普通基金（除reits、etf之外的基金）、CDR、港股、期权、期货、板块、指数、股转股票 |
|               | title         | 页面标题      | STRING   | 个股详情页                                                                      |
|               | url           | 页面地址      | STRING   |                                                                            |
| 行情\_个股详情页按钮点击 | code\_type    | 证券类型      | STRING   | 老版5.0行情code\_type                                                          |
|               | market\_type  | 市场类型      | STRING   | 沪市、深市、京市、股转、港交所                                                            |
|               | product\_type | 产品类型      | STRING   | A股、B股、债券、国债逆回购、ETF基金、reits基金、普通基金（除reits、etf之外的基金）、CDR、港股、期权、期货、板块、指数、股转股票 |
|               | product\_name | 产品名称      | STRING   |                                                                            |
|               | product\_code | 产品代码      | STRING   |                                                                            |
|               | title         | 页面标题      | STRING   | 个股详情页                                                                      |
|               | url           | 页面地址      | STRING   |                                                                            |
|               | button\_area  | 按钮区域      | STRING   | 盘口，tab，底部操作按钮，更多                                                           |
|               | button\_name  | 按钮名称      | STRING   | [智能盯盘],[资金、新闻等]，[买入、卖出、加自选、删自选、更多]，[切换两融、撤单等]                              |

如上表所示，我们将复杂繁多的事件完善成了两个事件，得到了 v0.3 版本的数据埋点文档。后续再新增埋点的话，我们只需要运用同样的方式进行完善就可以了。



但是事情总有例外。在产品成熟之后，我们面临的又一个问题来了：埋点数据过多。比如上表的事件，如果还要统计港股、美股等海外市场；或者基金、期货、期权等其他证券标的，由于市场和证券标的属性有所差异，需要进行分别统计，应该如何处理庞杂但统计数据又相同的埋点呢？



为此，就需要用出 K-V（Key-value）神器，也就是所谓的 “键值对”。简单来说，键值对的概念像是一种分类方法。键值对名称对应多个 key 值，一个 key 值对应多个 value 值。就像一级分类、二级分类、三级分类，逐级展开的形式。

![05](/img/product/product/how-to-write-tracking-docs_images/05.png)
在实际的埋点文档中，键值对的表现形式大体如下：

| 事件英文变量名   | 事件显示名       | 属性英文变量名          | 事件属性显示名 | 属性值类型  |
| :--------- | :----------- | :---------------- | :------- | :------ |
| **键值对名称** | **键值对key**  | **键值对value**     |         |        |
| PageView  | Web网页浏览（H5） | is\_first\_time  | 是否首次    | bool   |
|           |             | title            | 页面标题    | String |
|           |             | url              | 页面地址    | String |
|           |             | referrer         | 前向地址    | String |
|           |             | activities\_type | 活动类型    | String |
|           |             | event\_duration  | 停留时长    |        |

举两个简单的例子：

**1、电商产品**

![06](/img/product/product/how-to-write-tracking-docs_images/06.png)

**2、券商产品**

![07](/img/product/product/how-to-write-tracking-docs_images/07.png)

更多产品埋点文档实例，参见下方链接：
    * [产品上线指南](https://www.sensorsdata.cn/service/onlineguide.html?t=sa)
    * [行业解决方案](https://www.sensorsdata.cn/demo/demo.html)