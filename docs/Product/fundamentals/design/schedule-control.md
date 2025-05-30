---
sidebar_position: 6
sidebar_label: 如何掌控排期
---

# 如何掌控排期

## 导读

> _产品小李：小哥有没有空，XX 需求领导要得急，加个班争取赶紧上线呗？_
> _研发小哥：（白眼）没空。_
> _产品小李：那什么时候有空呢？_
> _研发小哥：有空的时候；）_
>
> _研发二哥：小李啊，你的功能这个版本上不了了，设计的时候没考虑到对中后台的依赖，来不及噜。_
> _产品小李：没事，我习惯了（已泪目）_
>
> _主管大宝：这个需求比较急，你和技术同学讲一下，大家加加班，赶一赶进度。_
> _产品小王：我知道你很急，但请你先别急。技术同学排期满了。_
> _主管大宝：你想想办法。_
> _产品小王：要不，我抓紧学下代码？_

<br/>

相信大家经常会遇到上面这些场景，可能此时此刻就在发生。可能因为职场经验不足做不好项目管理，或者是公司产研管理办法不完善。让我们一起探讨下这些问题发生的原因和场景的对策。

:::tip
在开始之前，你需要先大致了解一下互联网公司常见的进度管理方式：[Scrum，最常见的互联网产品研发流程](./scrum-development)
:::

每个Sprint就像是一艘集装箱船，Backlog里的需求就像是岸上的货柜，产品经理就是吊机，负责将一定数量的货柜装到船上。研发团队便要驾驶这艘船按时、安全地抵达对岸。

![01](/img/product/product/schedule-control_images/01.png)

当项目比较急，需要团队加班时，也就是出现文章一开始的情况时，这意味着船上的货柜会变多，航行的安全性开始下降，甚至有可能会导致倾覆。对应的则是团队的研发质量可能下降，甚至有些功能最终还是来不及上线。

![02](/img/product/product/schedule-control_images/02.png)

当载货量匹配不合理时，船的载货量不足，浪费了一次航行机会，提高了成本。也降低了岸上货柜的物流周期。对应的则是产品迭代缓慢，用户怨声载道。

![03](/img/product/product/schedule-control_images/03.png)

当货柜随意摆放时，天知道会发生什么，抵达后卸货都困难。 对应的是研发过程管理混乱，遗漏需求、随意更改需求时有发生，最终用户对新功能甚至会感到不解。

![04](/img/product/product/schedule-control_images/04.png)

回到文章开头引用的例子，实际上都是压缩排期的情况。压缩排期通常会牺牲了员工的正常休息时间，其次是它经常伴随着需求质量的下降。加班好理解，为什么需求质量会下降呢？

从研发的视角来看，压缩排期是一件很不爽但大概率只能妥协的事情。为了抓紧时间上线，研发可以简化功能，比方说要求配置的地方改成直接代码，俗称“写死”。或者代码逻辑耦合度较高的功能直接通过代码复用来实现。

对于排期来说，研发的确实现了预期目标，按时加班完成了工作。但对功能或需求而言却是一种错觉。比方说简化功能，后期仍需要通过处理改成可配置；代码逻辑耦合度过高，后续的维护成本和拆分成本都会显著提升。一来一去，时间成本并没有通过压缩排期降低，反而可能出现了增加的情况。**一时的提速只是一种错觉，实现错觉是有代价的，而且代价未必小。**

<br/>

那么作为产品经理，我们应该如何保障每一次航行（排期）的安全和性价比呢？

方法可以归纳为一个成语：知己知彼
    - 知彼：知悉需求框架及细节，并明确需求的重要度和紧急度
    - 知己：熟悉研发团队的交付能力，以便准确给出上线时间预估

## 知彼，从感性走向理性

无论产研过程效率和质量如何，产品经理都需要做到对产品需求（Backlog）的准确排序。但是每天有这么多人提需求，排序应该听谁的呢？首先，你需要先将需求理解透彻。

我们要认知到需求也有“研发过程”，从被感性地提出到真正成为一个理性的需求，需要一定的分析过程。就像产品功能会有待排期、研发中、测试中、已上线一样，产品需求也会有不同的状态，可归纳为：Talk、Think、Doc。

### Backlog 的三种状态

![05](/img/product/product/schedule-control_images/05.png)

#### Talk - 记录感性需求

需求的来源非常广泛，用户、老板、业务方、竞品都是需求来源的主体。当有人找你提出新需求时，我称之为 Talk 阶段，并喜欢把这个阶段的需求称之为“感性需求”。

<br/>

有这么几个场景：
    1. 老板火急火燎地跑过来，指着手机上某个竞品的功能，问你做个类似的大概要多久；
    2. 用户从社区加到了你的微信，说某个产品都有了 XX 功能，问你什么时候能做；
    3. 业务方直接 Call 给你，让你在某个版本定制一个功能，原因是急着给一位大客户用

:::tip
在 Talk 阶段，需求优先级往往由需求提出方单方面提出，且往往都是最高优先级。但随着时间的推移，似乎他们又不是那么急了，**甚至忘了自己提过什么。**
:::

_*_ _这和生完孩子弃养有什么区别？！(震怒_

<br/>

在这个阶段，需求方往往会非常着急地阐述遇到的问题，产品经理需要在这个阶段尽可能收集完整的需求目的与背景，通过与需求提出方进行更深入的沟通，确定是否有问题？有没有出现过同类现象？以此窥见需求背后的故事（User Story）。

当问题比较复杂时，可以要求需求方以文（如 BRD，商业需求文档）的形式提交需求、价值分析，由产品团队进行评估。如果在这个阶段遗漏了关键信息，则很可能对后续的需求分析、研发上线带来一连串影响。

在 Backlog-Tal k队列中，产品经理只需要记录原始信息即可，无需加入自己的判断。核心是要做到：**需求不漏、信息完整。** 实际工作中，Talk 状态的需求可能最终并不会往后推进，同事提出的感性、冲动需求最终会被打回，这很正常。因此，在这一步不应投入过多的分析精力。同时，因为研发模式是基于 Scrum 理念每几周排期一次，只需要在下次 Sprint 开始前确认优先级即可，无需立即确认并给出承诺。

#### Think - 思考解决方案

当信息收集完整后，产品经理开始利用产品思维分析需求的合理性、可能的解法等。通过与研发、关联团队的沟通给出设计思路。但是要特别注意思考的缜密性：
    1. 务必将自己的设计思路与需求方**再次确认**，切忌因为胆怯、怕反复修改而跳过该步骤直接往后推进。大部分产品功能上线后反而被业务方吐槽的情况都是因为省略了这步。沟通很重要；
    2. 务必与关联团队沟通清楚**前提条件**，尤其是产品线庞杂的公司，产品之间存在大量的合关系。例如某个功能依赖于中台提供连锁商户管理能力，但中台目前只有个体商户管理能力，那就首先需要中台进行产品升级，然后才是进行下一个需求。顺序搞反了必然导致研发受阻;
    3. 务必帮助需求方梳理利害关系。需求方 A 提出的需求必然会提高 A 的工作效率，但是否会影响 B、C、D、…团队？这需要产品经理在更高的维度反复推敲；
    4. 务必面向未来深挖，引导需求方多想几步，将可以预见到的未来需求一并表达清楚。这有利于设计出**更具有兼容性的新功能。**

_*_ _许多业务方都没有向下挖掘的意识，这一行为俗称：想到什么做什么。现在想要 A，过一段时间后想要 A+，再后来又想要 B。但业务方并不了解需求的研发和变更过程，这会导致重复劳动，研发资源被无端浪费。_

<br/>

该阶段主要是思考，不涉及到优先级变化。更多参见：[什么是产品思维](docs\Product\fundamentals\career\product-thinking.md)

#### Doc - 明确理性需求

好记性不如烂笔头，将你收集到的信息和初步达成一致的设计方案更新到 Backlog 中。比如利用[产品设计必备的五张图](docs\Product\fundamentals\design\micro-product-design\five-essential-diagrams.md)思维 **将设计整理成简要文档即可，** 这时候的需求并未真正进入排期，过早的深入设计仍然可能会造成产品团队人力浪费，因此记录核心思路即可。

既然已经搞明白需求细节以及设计方案了，那就值得更新一次优先级啦。Doc 阶段的需求优先级基本决定了下一个迭代的研发内容。对于规模小、处事灵活的团队，可以通过简单的沟通获得各方对优先级的一致认可。对于大规模团队，建议通过会议的形式定期对未来 N 个 Sprints 的需求进行优先级讨论。

![06](/img/product/product/schedule-control_images/06.png)

优先级评审会（Priority Review Meeting）的参与者应涵盖相应 Backlog 的所有需求方，大家坐到一起，根据产品的顶层 Roadmap 达成优先级的一致性。一旦达成群体一致，任何人都不应随意更改优先级，即使是产品经理。

_*_ _即便有 PRM 的存在，但多数公司的产品需求优先级的确定权掌握在产品团队手中，研发团队缺乏话语权。对于产品重要性的排序也相当有“特色”，会根据需求提出方的地位和职位来权衡判断，基于权力而非科学。_

### 重要度与紧急度

但是，无论是小范围讨论还是通过会议讨论，应遵循什么原则对需求进行排序呢？一般我们会关注需求的重要程度与紧急程度。

:::tip
重要程度，指对产品长期目标的影响程度；

紧急程度，指基于产品现状和短期目标，上线后立即能产生的影响程度。
:::

重要程度一般与当前产品的进展无关，是从目标倒推的影响程度，是一种**以终为始的判断标准。** 举例：

> 假设提供分期付款功能可以显著提升高客单价商品的支付转化率，很重要。但是需要先进行金融方案提供方的选型、招投标和合同签订，这个过程也许需要 6~8 周，暂时无法启动研发。

<br/>

紧急程度一般与产品短期 Roadmap 密切相关，举例：

> 本月产品的重要目标是能够在月底上线新的整体视觉方案，以支撑下月初公司的品牌升级发布会。那么这个需求已经有了明确的 Deadline，如果无法按期完成将显著影响公司业务开展，较为紧急。但是从产品整体效率而言，可能并没有提供分期付款更重要。

![07](/img/product/product/schedule-control_images/07.png)

在这里，我们引入**四象限法则理论**。

四象限法则是著名管理学家史蒂芬·科维提出了一个时间管理的理论，把工作按照重要和紧急两个不同的程度进行了划分，基本上可以分为四个象限：
    - 第一象限：既紧急又重要（如人事危机、客户投诉、即将到期的任务、财务危机等）
    - 第二象限：重要但不紧急（如建立人际关系、新的机会、人员培训、制订防范措施等）
    - 第三象限：紧急但不重要（如电话铃声、不速之客、行政检查、主管部门会议等）
    - 第四象限：既不紧急也不重要（如客套的闲谈、无聊的信件、百无聊赖地刷手机等）

<br/>

他的时间管理理论的一个重要观念是应该把主要的精力和时间集中地放在处理那些重要但不紧急的工作上，这样可以做到未雨绸缪，防患于未然。对于产品经理而言，四象限法则能够让我们更高效地管理需求。

![08](/img/product/product/schedule-control_images/08.png)
将 Backlog 放入以上四个象限，便可形成 4 个 Backlog 层次。无论何时我们都应该主要关注重要的需求（第 1、2 象限的需求），并不断思考为何会出现不重要的需求。

#### P0 - 重要、紧急

如果某个 Backlog 需求既对产品的终局目标产生最重要的影响，又已经具备了推进前提条件，自然应该被设定到比较高的优先级。如果某个业务是非常依赖于产品驱动的，则每一次产品迭代都应该聚焦在此类需求进行研发。

#### P1 - 重要、不紧急

P1 的需求往往对产品的终局有重要的影响，但是由于前提条件还不充分，不适合立即进入研发。这时产品经理应该主动推动相关部门尽快实现前提条件。

#### P2 - 不重要、紧急

不重要的需求为啥这么急？这往往反映出团队的思路不统一、不严谨。如果这个需求早上 2 天和晚上 2 天对产品的效率没有重要的影响，何必加班加急？如果产研团队长期加班加点实现的都是不重要的紧急需求，一定会伤士气、瓦解互相之间的信任感。因此，产品经理有责任拒绝不重要的紧急需求。

尤其是创业团队，在我的经验里不重要的需求可以永远 SayNo。**对于早期的 MVP 产品，验证核心的假设才是重点，不要过度追求完美**。

#### NA - 不重要、不紧急

不重要也不急的需求就是前文提到可能最终需求方自己都会忘记的需求。放过它们，假装不存在。

#### 如何判断重要度？

重要度与产品假设密切相关。如果产品没有中长期的规划，没有明确的指标假设，那也就是无从判断重要度。这种情况是非常折磨产研团队的，根本无从判断自己干得活是为了啥；天天被催，上了线又起不到作用。产品经理应推动业务方、管理层尽快梳理目标，不要脚踩西瓜皮，滑到哪是哪。

#### 计划排期

确定好重要度与紧急度后，backlog 会陆续进入 Sprint。也即进入到项目阶段（研发流程）。根据公司的开发流程相应进行需求评审、估时，了解开发团队近期任务的具体情况，方便项目排期表。

在任务排期的过程中，我们可以通过一些工具来帮助我们进行项目管理。比方说 Boardmix 或者 Worktile，更简单的排期可视化工具还可以使用甘特图。

## 知己，掌握产研团队水位

知彼后便是知己，产品经理需要熟悉团队的交付能力，以便尽可能准确地给出上线时间的预估。

### 团队技能组成的合理性

一般来说，敏捷研发的公司都会组建一个个小规模的产品领域团队（Domain Team），下图就是一种常见的人员配置比例：

![09](/img/product/product/schedule-control_images/09.png)

通过合理的人员配置，既可以有序的交付结果，也不会造成任何一个岗位的资源浪费。如果这个比例失衡，研发工程师过少，导致每个迭代只能实现很小一部分需求，其他角色的工作量骤减，造成资源浪费。

![10](/img/product/product/schedule-control_images/10.png)

如果研发工程师过多，则每次可以实现众多需求，1 个产品经理也许跟不上节奏，最终会导致工程师无事可干，或者导致产品需求为了赶工粗制滥造。

![11](/img/product/product/schedule-control_images/11.png)

因此，为了产品迭代的有序性，首先要平衡好团队成员配比。

### 全栈工程师提供的灵活性

受制于研发语言的隔阂，往往某位研发工程师只能提供某一种研发能力，这增大了人力配比难度。对于比较大型的公司还好说，可以通过团队间的不断平衡来尽可能合理化配置。但是对于小型团队，合理配置工程师技术栈相对更困难一些。

![12](/img/product/product/schedule-control_images/12.png)

但是，当团队中的工程师技能突破局限性后，某些工程师可能会拥有 2 个及以上的技术栈能力。例如不仅会 H5，也会服务器端（如 Java），排期将更具有灵活性。举个例子，当有个产品功能需要投入以下工作量时，不同的团队结构将带来不同的结果。

**所需工作量（人日）：**

| | iOS | Android | H5 | 服务端 |
|---|---|---|---|---|
| 迭代1 | 10 | 10 | 20 | 10 |
| 迭代2 | 10 | 10 | 10 | 20 |

**不同团队结构排期结果：**

|团队结构|iOS|Android|H5|服务端|排期结果|
|---|---|---|---|---|---|
|iOS*1，Android×1，H5×1，Service×2|10|10|10|20|迭代1：无法完成，差 H5 10 人日，同时有一位服务端工程师闲置<br/>迭代2：可以完成|
|iOS*1，Android*1，[H5 + Service]*3|10|10|30 (H5+服务端)||迭代1：可以完成<br/>迭代2：可以完成|

另外，当一名工程师主动学习多门编程语言，乐意掌握更多能力时，也往往代表他更有好奇心、对自己要求更高。因此，在创业初期，非常建议寻找全栈工程师组建团队，既能够获得研发排期的灵活性，又能够筛选出好的人才。

## 最终

我们便建立了一个从需求产生到上线的排期管理 SOP，并在不同环节投入不多不少的精力，推动产品前行。

![13](/img/product/product/schedule-control_images/13.png)

## 研发团队如何看待排期

对于已经在排期上踩过许多坑的研发工程师来说，他们对于排期是相当谨慎的。研发工程师会经常被产品经理挑战，一旦退缩就会增加工作量，避免不了加班加点。

_*以我们团队为例，产品经理会被塑造为强势角色，我们需要经常说“必须”、“不行”，而不是“那好吧”。这也体现在对研发团队排期的控制上。_

研发工程师对于排期的谨慎态度主要体现在几个方面：

### 估时需要基于完整需求

如果没有完整的设计稿，前端一般给不出准确的工时，这是一个共识。产品经理如果要让前端给出准确的时间，就需要将完整的设计稿在需求评审会议上进行讲解。

### 估时、工时、排期

产品经理和研发工程师对于估时的概念有所偏差，这是岗位的特殊性所决定的：
    - 产品经理认为的估时：在 XX 月 XX 日完成 XX 需求，这是排期；
    - 研发工程师认为的估时：完成 XX 需求需要耗时 XX 人 XX 日，这是工时

<br/>

对于研发工程师而言，他并不能决定在哪个时间段完成项目（需求），这通常是由研发主管或产品（项目）主管负责协调的事情。研发工程师只给工时，不给排期。排期由产品经理按照优先级自己去排。

### 工时不包括测试时间

研发给出的工时会包含两部分，开发完成页面的时间 + 真实接口联调的时间。一般接口联调是开发时间的四分之一，比如开发时间需要 10 天，那前后端联调的时间就需要 2~3 天。所以，你给出的工时，就应该是 12~13 天/人。

但测试需要多久并非研发决定，而是由测试工程师负责。所以产品经理除了了解研发团队的排期，也需要了解测试团队对于需求排期的大致时间。
