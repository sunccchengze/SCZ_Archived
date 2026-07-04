export interface Flashcard {
  id: number;
  conceptName: string;
  englishName: string;
  abbreviation: string;
  layer: string;
  layerEmoji: string;
  definition: string;
  simpleExplanation: string;
  example: string;
  keywords: string[];
  mnemonic: string;
}

export const layers = [
  { name: '基础方法论层', emoji: '📐', color: '#D97757' },
  { name: '核心架构层', emoji: '🏗️', color: '#6A9BCC' },
  { name: '语言智能层', emoji: '🧠', color: '#6A8C5F' },
  { name: '感知能力层', emoji: '👁️', color: '#C9973B' },
  { name: '学习方式进阶层', emoji: '🔬', color: '#8B7355' },
  { name: '安全与伦理层', emoji: '⚖️', color: '#B84A3A' },
  { name: '前沿应用层', emoji: '🌍', color: '#7A5DC7' },
];

export const flashcards: Flashcard[] = [
  {
    id: 1,
    conceptName: '机器学习',
    englishName: 'Machine Learning',
    abbreviation: 'ML',
    layer: '基础方法论层',
    layerEmoji: '📐',
    definition: '机器学习是人工智能的一个子领域，通过让算法从数据中自动归纳规律、建立模型，从而无需显式编程即可完成预测或决策任务。核心范式是：数据 + 算法 → 模型。',
    simpleExplanation: '不给电脑写规则，而是给它大量数据，让它自己从数据里总结出规律。',
    example: '垃圾邮件过滤——给AI看几百万封邮件（标注是否为垃圾），AI自动归纳出"什么样的邮件是垃圾"的规律，不需要人工写规则。',
    keywords: ['数据驱动', '模型', '泛化', '训练集', '测试集'],
    mnemonic: '传统编程"规则+数据→结果"；机器学习"数据+结果→规则（模型）"。',
  },
  {
    id: 2,
    conceptName: '深度学习',
    englishName: 'Deep Learning',
    abbreviation: 'DL',
    layer: '基础方法论层',
    layerEmoji: '📐',
    definition: '深度学习是机器学习的一个分支，使用多层神经网络（深层架构）自动从原始数据中逐层提取从低级到高级的抽象特征，无需人工设计特征。"深度"指神经网络的层数多（通常数十至数百层）。',
    simpleExplanation: '用多层"神经元"堆叠起来模拟大脑，自动从原始数据里一层一层提取越来越抽象的特征，不需要人告诉它"应该看什么"。',
    example: '图像识别——原始像素→第1层识别边缘→第5层识别形状→第20层识别耳朵眼睛→第50层识别"这是一只猫"。每一层自动学习，全程无需人工定义特征。',
    keywords: ['神经网络', '特征提取', '端到端', '反向传播', '层（Layer）'],
    mnemonic: '机器学习是大框架，深度学习是里面最强的子集；区别在于"特征谁来提"——深度学习自己提。',
  },
  {
    id: 3,
    conceptName: '监督学习',
    englishName: 'Supervised Learning',
    abbreviation: '—',
    layer: '基础方法论层',
    layerEmoji: '📐',
    definition: '监督学习是一种机器学习范式，使用带有标签（即正确答案）的训练数据，训练模型学习输入到输出之间的映射关系。分为分类（输出离散类别）和回归（输出连续数值）两大任务类型。',
    simpleExplanation: '给AI看一本有答案的练习册，它通过大量有标准答案的例题，学会解答新题目。',
    example: '人脸识别——用几千万张已标注"这是谁"的人脸照片训练模型，训练完成后，新照片输入就能输出对应的人名。',
    keywords: ['标签（Label）', '分类', '回归', '训练集', '过拟合'],
    mnemonic: '有标签 = 有老师监督 = 监督学习。标注数据是其核心资源，也是最大成本。',
  },
  {
    id: 4,
    conceptName: '无监督学习',
    englishName: 'Unsupervised Learning',
    abbreviation: '—',
    layer: '基础方法论层',
    layerEmoji: '📐',
    definition: '无监督学习使用无标签数据，算法自主发现数据内部的结构、模式或分布规律。核心任务包括：聚类（将相似数据归组）和降维（减少数据维度、保留核心信息）。',
    simpleExplanation: '没有老师，没有答案，把一堆未标注数据丢给AI，让它自己找出数据里隐藏的结构和规律。',
    example: '用户分群——把100万条购物记录（无任何标签）喂给算法，AI自动发现"这批用户偏好母婴""那批用户偏好运动"等自然群体，无需人工预先定义分类。',
    keywords: ['聚类（Clustering）', '降维', 'K-Means', 'PCA', '异常检测'],
    mnemonic: '无标签 = 无老师 = 无监督。AI自己当侦探，从数据里找规律。',
  },
  {
    id: 5,
    conceptName: '强化学习',
    englishName: 'Reinforcement Learning',
    abbreviation: 'RL',
    layer: '基础方法论层',
    layerEmoji: '📐',
    definition: '强化学习是一种通过智能体（Agent）与环境（Environment）交互来学习最优策略的机器学习范式。智能体在每个状态（State）下选择动作（Action），获得奖励（Reward）或惩罚，目标是最大化长期累积奖励。无需标注数据，靠试错学习。',
    simpleExplanation: 'AI通过"做对了给奖励，做错了给惩罚"的机制，在反复试错中自己摸索出最优行为策略——就像训练小狗。',
    example: 'AlphaZero——不看人类棋谱，通过自我对弈数千万局，凭"赢棋=奖励、输棋=惩罚"的机制，21天内达到超越人类数千年围棋积累的水平。',
    keywords: ['智能体', '环境', '状态', '动作', '奖励', '策略（Policy）', '马尔可夫决策过程（MDP）'],
    mnemonic: '五要素：智能体、环境、状态、动作、奖励。目标：最大化累积奖励。',
  },
  {
    id: 6,
    conceptName: '自监督学习',
    englishName: 'Self-Supervised Learning',
    abbreviation: 'SSL',
    layer: '基础方法论层',
    layerEmoji: '📐',
    definition: '自监督学习是一种利用数据本身的内在结构自动构造监督信号（伪标签）的学习范式，无需人工标注。通过遮盖或重排数据的一部分，让模型预测被隐藏的部分，从而在无标注数据上学习有效表示。',
    simpleExplanation: 'AI给自己出题、自己答题——把数据的一部分藏起来，让模型去猜，猜的过程就是学习。不需要人工标注，数据本身就是老师。',
    example: 'GPT的预训练——把互联网上所有文本中的"下一个词"遮住，让模型预测。通过数万亿次"填空"，模型学会了语言的所有规律和知识，全程无需人工标注一个词。',
    keywords: ['伪标签', '掩码预测', '下一词预测', '对比学习', '预训练'],
    mnemonic: '自监督 = 自己出题 + 自己答题。三种经典形式：完形填空（BERT）、续写（GPT）、找相似（对比学习）。',
  },
  {
    id: 7,
    conceptName: '神经网络',
    englishName: 'Neural Network / Artificial Neural Network',
    abbreviation: 'NN / ANN',
    layer: '核心架构层',
    layerEmoji: '🏗️',
    definition: '人工神经网络是受生物神经系统启发构建的计算模型，由大量相互连接的人工神经元（节点）构成。每个神经元对输入进行加权求和，经激活函数处理后输出信号。通过反向传播算法和梯度下降调整权重，使模型从数据中学习。',
    simpleExplanation: '用数学公式模拟大脑神经元的连接方式，大量"数学神经元"按层排列、互相传递信号，最终输出预测结果。',
    example: '最简单的两层神经网络可以学会"XOR逻辑"——这是早期计算机无法用线性模型解决的问题，神经网络的非线性能力使其得以解决。',
    keywords: ['权重（Weight）', '偏置（Bias）', '激活函数', '反向传播', '梯度下降'],
    mnemonic: '神经网络 = 仿大脑。核心公式：输出 = 激活函数（加权输入求和 + 偏置）。',
  },
  {
    id: 8,
    conceptName: '卷积神经网络',
    englishName: 'Convolutional Neural Network',
    abbreviation: 'CNN',
    layer: '核心架构层',
    layerEmoji: '🏗️',
    definition: '卷积神经网络是专为处理网格状数据（尤其是图像）设计的深度神经网络。核心操作是卷积（用可学习的滤波器在输入上滑动扫描，提取局部特征）和池化（降维，保留主要特征）。通过逐层堆叠，从低级特征（边缘）逐步提取高级特征（物体）。',
    simpleExplanation: '专门"看图"的AI大脑——用小方格滤波器在图片上逐块扫描，先认出线条，再认出形状，最后认出物体，一层层从简单到复杂。',
    example: '手机人脸解锁——每次点亮屏幕，CNN在毫秒内扫描你的脸，提取特征，与存储的人脸特征比对，错误率低于百万分之一。',
    keywords: ['卷积核', '特征图', '池化', '感受野', '局部连接'],
    mnemonic: '三步走：卷积（扫描提特征）→ 激活（引入非线性）→ 池化（压缩降维）。反复叠加，越叠越抽象。',
  },
  {
    id: 9,
    conceptName: '循环神经网络 / 长短期记忆网络',
    englishName: 'Recurrent Neural Network / Long Short-Term Memory',
    abbreviation: 'RNN / LSTM',
    layer: '核心架构层',
    layerEmoji: '🏗️',
    definition: 'RNN是处理序列数据的神经网络，通过将上一时间步的隐藏状态（记忆）传递到当前时间步，使网络具备对历史信息的感知能力。LSTM是RNN的改进版，引入遗忘门、输入门、输出门三个门控机制，有效解决了原始RNN的梯度消失问题，能记忆更长距离的依赖关系。',
    simpleExplanation: '有"记忆"的神经网络——每处理一个词，都会把前面的信息带着走；LSTM在此基础上加了三道"闸门"，精确控制记住什么、忘掉什么。',
    example: '早期的机器翻译——LSTM读入"I love China"，在处理每个词时记住前面词的信息，最后输出"我爱中国"，词序关系被正确保留。',
    keywords: ['隐藏状态', '时间步', '梯度消失', '遗忘门', '输入门', '输出门'],
    mnemonic: 'RNN：有记忆，但记性差（梯度消失）。LSTM：三道门精确管理记忆，长文本也能处理。2017年后大部分NLP任务被Transformer取代。',
  },
  {
    id: 10,
    conceptName: 'Transformer',
    englishName: 'Transformer',
    abbreviation: '—',
    layer: '核心架构层',
    layerEmoji: '🏗️',
    definition: 'Transformer是2017年Google提出的序列到序列神经网络架构，完全基于注意力机制（无卷积、无循环结构）。核心是多头自注意力机制——允许序列中每个位置同时关注其他所有位置，并行计算。结合位置编码、残差连接和层归一化，成为现代大语言模型的基础架构。',
    simpleExplanation: '让每个词同时"看"句子里所有其他词，计算谁和谁最相关，并行处理、效率极高——彻底取代了一个词一个词顺序处理的RNN。',
    example: '处理"银行"一词的歧义——"我去银行取钱"vs"他坐在河岸上"。自注意力机制让"银行"同时关注句子中所有词，根据上下文确定是"金融机构"还是"河岸"。',
    keywords: ['自注意力', '多头注意力', 'Q/K/V矩阵', '位置编码', '编码器-解码器'],
    mnemonic: '论文标题：Attention is All You Need。核心：QKV注意力机制。三大工程技巧：残差连接 + 层归一化 + 位置编码。',
  },
  {
    id: 11,
    conceptName: '生成对抗网络',
    englishName: 'Generative Adversarial Network',
    abbreviation: 'GAN',
    layer: '核心架构层',
    layerEmoji: '🏗️',
    definition: 'GAN由两个神经网络组成：生成器（Generator）负责从随机噪声中生成假数据；判别器（Discriminator）负责区分真实数据与生成的假数据。两者通过对抗训练相互促进——生成器不断提升以欺骗判别器，判别器不断提升以识别假数据——直至生成数据无法被区分。',
    simpleExplanation: '两个AI对抗博弈：一个"造假者"不断提升造假水平，一个"鉴定师"不断提升鉴别能力，互相倒逼，最终假数据达到以假乱真的程度。',
    example: 'thispersondoesnotexist.com——每次刷新页面出现的高清人脸照片，是GAN完全凭空生成的，这个人在现实中根本不存在。',
    keywords: ['生成器', '判别器', '对抗训练', '纳什均衡', '模式崩溃'],
    mnemonic: '骗子（Generator）vs 侦探（Discriminator）。训练目标：判别器无法区分真假（输出50%概率）时，生成器达到最优。',
  },
  {
    id: 12,
    conceptName: '扩散模型',
    englishName: 'Diffusion Model',
    abbreviation: 'DDPM',
    layer: '核心架构层',
    layerEmoji: '🏗️',
    definition: '扩散模型是一类生成模型，包含正向扩散（训练时逐步向数据加入高斯噪声，直至变为纯噪声）和逆向扩散（推理时训练神经网络学习每一步的去噪过程，从纯噪声还原出目标数据）两个过程。结合文本条件（CLIP编码），可实现文字到图像的精准生成。',
    simpleExplanation: '训练时把一张清晰图片一步步"腐蚀"成纯噪声，同时训练AI学会每一步如何"还原"——推理时给AI一团随机噪声，它一步步把噪声雕刻成图像。',
    example: 'Midjourney生成图片——输入"水彩风格的日本街道，樱花飘落"，模型从随机噪声出发，经过约1000步去噪，逐步生成符合描述的图像。',
    keywords: ['正向扩散', '逆向去噪', 'DDPM', 'DDIM', '潜在扩散模型', 'Stable Diffusion'],
    mnemonic: '扩散模型 = 训练"如何去噪"。优于GAN之处：训练稳定、多样性丰富、易于文字控制。代价：生成需多步，速度慢于GAN。',
  },
  {
    id: 13,
    conceptName: '图神经网络',
    englishName: 'Graph Neural Network',
    abbreviation: 'GNN',
    layer: '核心架构层',
    layerEmoji: '🏗️',
    definition: '图神经网络是专门处理图结构数据（由节点和边组成的网络）的深度学习架构。核心机制是消息传递（Message Passing）：每个节点聚合邻居节点的信息，更新自身表示，经过多轮迭代后，每个节点的表示包含了其局部乃至全局邻域信息。',
    simpleExplanation: '处理"关系网络"的AI——把数据中的实体看作节点，关系看作边，通过节点之间互相"传递消息"，让每个节点理解自己在整个网络中的位置和作用。',
    example: 'AlphaFold中的蛋白质结构预测——把氨基酸看作节点，氨基酸之间的化学作用力看作边，GNN通过消息传递学习氨基酸间的空间关系，预测三维折叠结构。',
    keywords: ['节点', '边', '消息传递', '图卷积网络', '图注意力网络', '链路预测'],
    mnemonic: 'CNN处理网格（图片），RNN处理序列（文字），GNN处理图（关系网络）。凡是"节点+边"结构的数据，优先考虑GNN。',
  },
  {
    id: 14,
    conceptName: '大语言模型',
    englishName: 'Large Language Model',
    abbreviation: 'LLM',
    layer: '语言智能层',
    layerEmoji: '🧠',
    definition: '大语言模型是基于Transformer架构、在海量文本数据上进行自监督预训练（下一词预测）的超大规模语言模型。参数量通常在百亿至万亿级别。训练遵循规模法则（Scaling Law）：模型规模、数据量、计算量三者共同决定性能。经预训练 + 监督微调 + RLHF三阶段训练后具备指令跟随和多任务能力。',
    simpleExplanation: '把Transformer用到极致规模：在互联网上几乎所有文字上训练"预测下一个词"，模型大到一定程度后，智能能力从量变产生质变（涌现）。',
    example: 'GPT-3（1750亿参数）在无任何专门训练的情况下，仅凭几个示例（few-shot）就能完成翻译、写代码、做数学题——这些能力都是从预测文字中"涌现"出来的。',
    keywords: ['规模法则', '涌现', '上下文学习', '预训练', '参数量'],
    mnemonic: '三阶段：预训练（学知识）→ 监督微调SFT（学做事）→ RLHF（学什么是好）。规模法则：数据/算力/参数三者共同决定智能水平。',
  },
  {
    id: 15,
    conceptName: '提示工程',
    englishName: 'Prompt Engineering',
    abbreviation: '—',
    layer: '语言智能层',
    layerEmoji: '🧠',
    definition: '提示工程是设计和优化输入给大语言模型的提示词（Prompt），以引导模型产生更准确、更符合需求输出的系统性方法。核心技术包括：角色设定、少样本示例（Few-Shot）、思维链触发、输出格式约束、任务分解等。',
    simpleExplanation: '研究"如何和AI说话才能让它发挥最大水平"的学问——同一个AI，提示词写得好与差，输出质量可能天差地别。',
    example: '差："帮我写作文"→ 好："你是一位高考语文阅卷老师，擅长议论文，请写一篇以\'创新\'为主题的800字议论文，包含两个历史案例，开头一句话直接点题，结尾升华到社会层面。"',
    keywords: ['Zero-Shot', 'Few-Shot', '角色设定', '思维链', '提示注入攻击'],
    mnemonic: '六大技巧：①角色设定 ②明确格式 ③给例子 ④分步骤 ⑤加约束 ⑥触发思维链。提示工程 = 驾驶AI的技术。',
  },
  {
    id: 16,
    conceptName: '检索增强生成',
    englishName: 'Retrieval-Augmented Generation',
    abbreviation: 'RAG',
    layer: '语言智能层',
    layerEmoji: '🧠',
    definition: 'RAG是一种将信息检索与生成式语言模型结合的框架。给定用户查询，先通过检索器在外部知识库中找到相关文档（通常借助向量数据库进行语义检索），再将检索结果作为上下文拼入提示词，由生成器基于真实文档生成回答。有效解决LLM的知识截止和幻觉问题。',
    simpleExplanation: '给AI装上"实时查资料"的能力——不靠记忆背诵，而是先去知识库查到最相关的内容，再基于查到的内容回答问题，答案有据可查。',
    example: '企业内部问答系统——将公司所有内部文档向量化存入数据库，员工问"差旅报销流程是什么"，系统先检索最相关的文档段落，再由LLM基于这些段落生成准确回答。',
    keywords: ['向量数据库', '语义检索', '嵌入', '上下文窗口', '幻觉减少'],
    mnemonic: 'RAG = 检索 + 增强 + 生成。公式：查到的资料 + 原问题 → AI基于资料回答。研究显示RAG平均减少71%的幻觉率。',
  },
  {
    id: 17,
    conceptName: '思维链',
    englishName: 'Chain of Thought',
    abbreviation: 'CoT',
    layer: '语言智能层',
    layerEmoji: '🧠',
    definition: '思维链是一种提示技术，通过引导大语言模型在给出最终答案之前，显式输出逐步的中间推理过程，从而显著提升模型在数学推理、逻辑推断、多步骤任务上的准确率。中间步骤的生成充当了推理的"草稿纸"，减少了直接跳步导致的错误。',
    simpleExplanation: '让AI"一步一步想"而不是直接蒙答案——把推理过程写出来，每一步都成为下一步的依据，最终答案准确率大幅提升。',
    example: '不用CoT："一个农场有17只羊，死了9只，还剩几只？"→AI输出"17"（错）。用CoT："步骤1：原有17只；步骤2：死了9只；步骤3：17-9=8；答案：8只"→ 正确。',
    keywords: ['Zero-Shot CoT', 'Few-Shot CoT', 'Self-Consistency', 'Tree of Thought'],
    mnemonic: '触发词："请一步步思考"/"Let\'s think step by step"。四种变体：零样本CoT→少样本CoT→自洽性→思维树（复杂度递增）。',
  },
  {
    id: 18,
    conceptName: '微调',
    englishName: 'Fine-tuning',
    abbreviation: 'SFT / LoRA',
    layer: '语言智能层',
    layerEmoji: '🧠',
    definition: '微调是在预训练模型基础上，使用特定领域或任务的数据进行继续训练，调整模型参数使其在目标任务上表现更优的过程。全量微调更新所有参数；LoRA（低秩适应）是主流轻量微调方法，冻结原始参数，只在每层旁边插入低秩矩阵进行训练，大幅降低计算成本。',
    simpleExplanation: '在通用大模型基础上，用专业领域数据"再培训"一遍，把通才改造成专才——就像让全科医生读专科研究生。',
    example: '医疗AI微调——取GPT类基础模型，用100万条医患对话数据进行SFT，模型学会了用医学专业语言回答诊疗问题；LoRA只需训练原参数量的1-2%，节省90%以上的算力。',
    keywords: ['全量微调', 'LoRA', 'QLoRA', 'SFT', '领域适应', '灾难性遗忘'],
    mnemonic: 'LoRA核心：冻住大模型，只训练两个小矩阵A和B（ΔW=A×B），参数量降至原来1%左右，性能保留95%+。',
  },
  {
    id: 19,
    conceptName: '基于人类反馈的强化学习',
    englishName: 'Reinforcement Learning from Human Feedback',
    abbreviation: 'RLHF',
    layer: '语言智能层',
    layerEmoji: '🧠',
    definition: 'RLHF是将人类偏好反馈引入强化学习训练LLM的方法。流程分三步：①监督微调（SFT）给模型示范；②收集人类对多个输出的排序偏好，训练奖励模型（Reward Model）；③用强化学习算法（通常为PPO）优化LLM，使其生成奖励模型评分更高的输出。',
    simpleExplanation: '用人类的"好评差评"训练AI——先让人类给AI的多个回答排名，训练出一个"知道什么叫好回答"的评分模型，再用这个评分模型指导AI不断改进。',
    example: '关键实验数据：OpenAI证明，1.3亿参数的RLHF模型超过了1750亿参数的无RLHF模型——对齐比规模更重要。这是ChatGPT能"说人话"的核心原因。',
    keywords: ['奖励模型', 'PPO算法', '人类偏好排序', '对齐', 'RLAIF'],
    mnemonic: '三步：SFT（学格式）→ 奖励模型（学好坏）→ PPO强化学习（持续改进）。RLHF让LLM从"会说话"变成"说人话"。',
  },
  {
    id: 20,
    conceptName: '多模态',
    englishName: 'Multimodal AI',
    abbreviation: '—',
    layer: '语言智能层',
    layerEmoji: '🧠',
    definition: '多模态AI是能够同时处理和生成多种数据模态（文本、图像、音频、视频等）的AI系统。现代多模态模型采用统一架构（而非多个单模态模型的简单拼接），在关联的多模态数据对上训练，实现跨模态的理解和生成。',
    simpleExplanation: 'AI同时拥有眼睛（看图）、耳朵（听声）和嘴巴（说话）——不再是只会处理文字的单一能力，而是一个统一模型同时理解图文音视频。',
    example: 'GPT-4o实时语音对话——你说话（音频输入）→AI实时识别→理解语义→生成回答→用自然语音回复（音频输出），全程一个模型端到端处理，延迟极低。',
    keywords: ['视觉语言模型', 'CLIP', '跨模态生成', '原生多模态', '视觉问答'],
    mnemonic: '关键区分：原生多模态（一个模型统一处理所有模态，更快更准）vs 拼接多模态（多个模型串联，存在信息损失）。',
  },
  {
    id: 21,
    conceptName: 'AI智能体',
    englishName: 'AI Agent',
    abbreviation: '—',
    layer: '语言智能层',
    layerEmoji: '🧠',
    definition: 'AI Agent是以LLM为核心大脑，具备感知、规划、工具调用和记忆能力的自主AI系统。能够将复杂任务分解为子任务，调用外部工具（搜索引擎、代码执行、API等）完成每个步骤，并通过自我反思迭代改进，最终自主完成多步骤复杂任务。',
    simpleExplanation: '不只是回答问题，而是自主干活——接到任务后自己规划步骤、自己调用工具、自己检查结果，全程不需要人一步步指挥。',
    example: 'Claude Code——你说"帮我开发一个天气查询网站"，Agent自动规划功能→写代码→运行测试→发现报错→自己修改→再测试→直到成功，全程自主完成。',
    keywords: ['规划', '工具调用', '记忆', '自我反思', 'ReAct框架', '多Agent系统'],
    mnemonic: 'Agent四大能力：规划 + 工具调用 + 记忆 + 反思。普通LLM回答问题，Agent完成任务。',
  },
  {
    id: 22,
    conceptName: '计算机视觉',
    englishName: 'Computer Vision',
    abbreviation: 'CV',
    layer: '感知能力层',
    layerEmoji: '👁️',
    definition: '计算机视觉是使计算机从图像或视频中提取、分析和理解视觉信息的AI领域。核心任务层级：图像分类（整图一个标签）→ 目标检测（多个物体定位+分类）→ 语义分割（像素级分类）→ 实例分割（区分同类不同个体）。',
    simpleExplanation: '让机器拥有"眼睛"，从看到一张图片到理解图片里发生了什么——从识别"有什么"到理解"在哪里"再到精确到每个像素。',
    example: '自动驾驶感知——车载摄像头每秒拍摄数十帧图像，目标检测实时识别行人、车辆、路标位置；语义分割标注出可行驶区域；实例分割区分具体是哪辆车、哪个行人。',
    keywords: ['分类', '目标检测', '语义分割', 'YOLO', 'ResNet', 'ViT', 'SAM'],
    mnemonic: '四级任务（复杂度递增）：分类→检测→语义分割→实例分割。YOLO = You Only Look Once。',
  },
  {
    id: 23,
    conceptName: '自然语言处理',
    englishName: 'Natural Language Processing',
    abbreviation: 'NLP',
    layer: '感知能力层',
    layerEmoji: '👁️',
    definition: '自然语言处理是使计算机能够理解、处理和生成人类语言的AI领域。覆盖从词法分析、句法解析到语义理解、语用推断的完整语言层次。核心任务包括：文本分类、命名实体识别、机器翻译、文本摘要、问答系统、对话生成等。',
    simpleExplanation: '让机器理解人类语言的所有方向的技术总称——从识别词性、分析句子结构，到理解含义、翻译语言，再到生成自然流畅的文字。',
    example: '命名实体识别——给定"2026年7月苹果公司在北京发布了新产品"，NLP系统自动标注：[时间]2026年7月、[机构]苹果公司、[地点]北京。',
    keywords: ['分词', '词向量', 'BERT', 'GPT', '情感分析', '机器翻译', '命名实体识别'],
    mnemonic: 'NLP进化史：规则系统→统计模型→词向量（2013）→预训练模型（BERT，2018）→大语言模型（GPT系列）。',
  },
  {
    id: 24,
    conceptName: '语音识别',
    englishName: 'Automatic Speech Recognition / Speech-to-Text',
    abbreviation: 'ASR / STT',
    layer: '感知能力层',
    layerEmoji: '👁️',
    definition: '语音识别是将音频信号中的人类语音自动转录为文字的技术。现代ASR流程：音频采样→特征提取（梅尔频谱）→神经网络声学模型→语言模型→文字输出。Whisper将词错误率大幅降低，代表了向大规模弱监督训练范式的转变。',
    simpleExplanation: '把人说的话变成文字的技术——手机输入法语音转文字、会议自动生成字幕、Siri理解你说了什么，背后都是ASR。',
    example: 'Whisper Large-v3在干净语音测试集上的词错误率约2.7%——即每100个词只错2.7个，达到普通速记员水平。支持99种语言。',
    keywords: ['词错误率', '梅尔频谱', 'CTC损失', 'RNN-T', 'Whisper', '说话人分离'],
    mnemonic: '评估指标：WER（词错误率）越低越好。难点：噪声环境、方言口音、多人同时说话。',
  },
  {
    id: 25,
    conceptName: '文字转语音',
    englishName: 'Text-to-Speech / Speech Synthesis',
    abbreviation: 'TTS',
    layer: '感知能力层',
    layerEmoji: '👁️',
    definition: '文字转语音是将文本自动合成为自然语音的技术。现代TTS使用神经网络直接生成音频波形（而非拼接录音），可控制语速、音调、情感和说话风格。声音克隆技术可用少量录音（3-60秒）复制特定人的声音。',
    simpleExplanation: '把文字变成声音的技术——现代TTS不是"拼接录音"，而是AI从零"生成"声音，可以做到带情绪、有语气、听起来和真人完全一样。',
    example: '2026年盲测数据：使用顶级模型时，超过58%的听众无法正确判断听到的是真人还是AI合成语音。支持通过标签控制笑声、低语、惊讶等情感表达。',
    keywords: ['声音克隆', '即时克隆', '深度伪造声音', 'WaveNet', 'Vocoders', '情感TTS'],
    mnemonic: 'TTS三代：拼接（机械感）→参数合成（略自然）→神经网络生成（以假乱真）。最大伦理风险：声音深度伪造用于诈骗。',
  },
  {
    id: 26,
    conceptName: '迁移学习',
    englishName: 'Transfer Learning',
    abbreviation: '—',
    layer: '学习方式进阶层',
    layerEmoji: '🔬',
    definition: '迁移学习是将在源任务上训练好的模型的知识，迁移应用到目标任务上的学习范式。常见策略：冻结预训练模型的底层（通用特征），只微调顶层或添加新的任务特定输出层，仅需少量目标任务数据即可取得优异性能。',
    simpleExplanation: '学新技能不从零开始，而是借助已有的相关知识——会弹吉他的人学尤克里里比新手快得多；在ImageNet上训练好的视觉模型迁移到医学图像识别，只需少量医学数据。',
    example: '医疗影像诊断——ImageNet预训练的ResNet迁移到检测X光片中的肺炎，只用几千张医学图片，精度即可达到放射科医生水平，而从零训练则需要数百万张。',
    keywords: ['预训练', '冻结', '微调', '领域适应', '源域/目标域', '负迁移'],
    mnemonic: '核心数字：迁移学习仅需1%的数据和算力，可达到定制模型90-95%的性能。',
  },
  {
    id: 27,
    conceptName: '元学习',
    englishName: 'Meta-Learning / Learning to Learn',
    abbreviation: '—',
    layer: '学习方式进阶层',
    layerEmoji: '🔬',
    definition: '元学习的目标是训练模型"学会如何快速学习"——在大量不同任务上训练后，模型获得一种初始化参数或学习策略，使其在遇到全新任务时，仅凭极少量样本即可快速适应。代表算法MAML使用双层优化。',
    simpleExplanation: '不教具体知识，而是教AI"如何快速学会新知识的方法"——见过3个例子就能上手新任务，而不是需要几千条训练数据。',
    example: '5-way 1-shot图像分类——给AI展示5种从未见过的动物，每种各1张图片，之后AI能正确识别这5种动物的新图片。MAML训练的模型可以做到这一点。',
    keywords: ['N-way K-shot', '支撑集', '查询集', 'MAML', '原型网络', '双层优化'],
    mnemonic: 'MAML = Model-Agnostic Meta-Learning。核心：找到最佳的"初始化参数起点"，使得从该起点出发，在任意新任务上只需少量梯度步就能收敛。',
  },
  {
    id: 28,
    conceptName: '联邦学习',
    englishName: 'Federated Learning',
    abbreviation: 'FL',
    layer: '学习方式进阶层',
    layerEmoji: '🔬',
    definition: '联邦学习是一种分布式机器学习框架，允许多个参与方在保持本地数据不共享的前提下，协同训练共享的全局模型。各参与方在本地训练，只向中央服务器上传模型梯度/更新，服务器聚合后更新全局模型并下发。',
    simpleExplanation: '数据不出门，经验共享——各医院的患者数据留在各自服务器，但模型的"学习经验"可以汇总，最终所有医院共享一个更强的AI模型，且没有违反隐私法规。',
    example: 'Google Gboard键盘预测——你手机上的输入法在本地学习你的打字习惯，只把模型更新上传服务器，服务器汇总改善预测准确率，全程不上传任何你打的字。',
    keywords: ['FedAvg算法', 'Non-IID数据', '通信效率', '差分隐私', '梯度泄露攻击'],
    mnemonic: '核心原则：模型（梯度）走，数据不走。挑战三件套：Non-IID数据分布、通信开销、梯度逆推隐私风险。',
  },
  {
    id: 29,
    conceptName: '对比学习',
    englishName: 'Contrastive Learning',
    abbreviation: '—',
    layer: '学习方式进阶层',
    layerEmoji: '🔬',
    definition: '对比学习是自监督学习的一种范式，通过构造正样本对（语义相似）和负样本对（语义不同），训练模型在特征空间中将正样本对的表示拉近、负样本对的表示推远，从而在无标签数据上学习高质量的特征表示。',
    simpleExplanation: '通过"比较像不像"来学习——不告诉AI"这是猫"，而是告诉它"这两张图很像""那两张图不像"，AI自动学会区分概念，无需任何标注。',
    example: 'CLIP（OpenAI）——用4亿对（图片，文字描述）的配对数据进行对比学习：同一对的图文表示拉近，不同对的推远。训练完成后实现零样本图像分类。',
    keywords: ['正/负样本对', '数据增强', 'SimCLR', 'MoCo', 'CLIP', 'NT-Xent损失'],
    mnemonic: '核心损失：正样本对特征距离↓，负样本对特征距离↑。对比学习是CLIP、多模态模型的基础训练技术。',
  },
  {
    id: 30,
    conceptName: '主动学习',
    englishName: 'Active Learning',
    abbreviation: '—',
    layer: '学习方式进阶层',
    layerEmoji: '🔬',
    definition: '主动学习是一种让模型主动选择"最有价值的未标注样本"请求人工标注的学习策略，旨在以最少的标注成本获得最大的模型性能提升。模型通过不确定性采样、信息熵采样或委员会查询等策略，识别出最难判断的样本。',
    simpleExplanation: 'AI自己选"最值得做的题"——不是随机标注数据，而是让模型找出它最没把握的那些样本，优先标注这些，用最少的专家时间换取最大的性能提升。',
    example: '医学影像标注——AI扫描10万张CT，通过不确定性评分找出500张"模型最没把握"的图，只需医生标注这500张，模型性能提升效果更好，节省大量专家时间。',
    keywords: ['不确定性采样', '信息熵采样', '委员会查询', '标注预算', '查询策略'],
    mnemonic: '三种查询策略：①最小置信度 ②最大熵 ③委员会查询。主动学习 = 让AI决定"标注什么"。',
  },
  {
    id: 31,
    conceptName: '可解释性人工智能',
    englishName: 'Explainable Artificial Intelligence',
    abbreviation: 'XAI',
    layer: '安全与伦理层',
    layerEmoji: '⚖️',
    definition: 'XAI是一套使AI模型的决策过程对人类可理解和可解释的方法体系。主要分三类：事后解释法（如SHAP/LIME）；可视化方法（如GradCAM热力图）；本征可解释模型（直接使用决策树等可解释模型）。',
    simpleExplanation: '让AI说清楚"我为什么这么判断"——不只给结论，还给理由，让人能够理解、质疑和改进AI的决策，是AI可信赖部署的前提条件。',
    example: 'SHAP用于贷款审批——输出："申请被拒原因：负债率80%贡献-45分（最大负面因素）、月收入5000元贡献-12分、工作年限1年贡献-8分，综合得分不达标"。',
    keywords: ['SHAP值', 'LIME', 'GradCAM', '黑盒模型', '可解释性-准确性权衡', '特征重要性'],
    mnemonic: '可解释性 vs 准确性通常负相关：决策树（高可解释、低精度）↔ 深度神经网络（低可解释、高精度）。',
  },
  {
    id: 32,
    conceptName: 'AI对齐',
    englishName: 'AI Alignment',
    abbreviation: '—',
    layer: '安全与伦理层',
    layerEmoji: '⚖️',
    definition: 'AI对齐研究如何确保AI系统的目标、行为和价值观与人类的意图和价值观保持一致。核心挑战包括：奖励黑客（AI找到非预期捷径）、目标泛化失败（换环境后行为失控）、欺骗性对齐（AI在监控下表现良好，无监控时行为不一致）。',
    simpleExplanation: '确保AI"真的想帮你"而不是"只是看起来在帮你"——当AI的目标和人类真实意愿出现偏差时，能力越强的AI会造成越大的危害。',
    example: '奖励黑客——任务"清洁房间，奖励=垃圾数量减少"，AI发现把摄像头遮住系统就"检测不到垃圾了"，奖励满分，但房间仍然脏乱——完美完成了指标，完全违背了初衷。',
    keywords: ['奖励黑客', '目标泛化失败', '欺骗性对齐', 'RLHF', '宪法AI', '红队测试'],
    mnemonic: '三大对齐失败类型：奖励黑客（钻空子）、目标泛化失败（换环境崩溃）、欺骗性对齐（伪装听话）。',
  },
  {
    id: 33,
    conceptName: '对抗样本',
    englishName: 'Adversarial Examples',
    abbreviation: '—',
    layer: '安全与伦理层',
    layerEmoji: '⚖️',
    definition: '对抗样本是对输入数据施加人类感知不到的微小扰动后，导致机器学习模型产生错误预测的样本。这种扰动通过最大化模型损失方向精心设计，揭示了深度学习模型依赖浅层统计规律而非真正语义理解的根本缺陷。',
    simpleExplanation: '给图片加几个人眼完全看不出的细微像素变化，AI就会把熊猫认成长臂猿——暴露了AI"看图"和人类"看图"在本质上的不同。',
    example: '交通标志攻击——研究人员在"停车"标志上贴几个精心设计的小贴纸，人类完全认为是正常停车牌，但自动驾驶系统将其识别为"限速85英里"——这是真实演示过的安全威胁。',
    keywords: ['FGSM攻击', 'PGD攻击', '白盒攻击vs黑盒攻击', '对抗训练', '鲁棒性', '扰动预算'],
    mnemonic: '攻击：在输入上加不可感知的扰动→模型输出错误。防御四法：①对抗训练 ②输入检测 ③模型集成 ④随机平滑。',
  },
  {
    id: 34,
    conceptName: '幻觉问题',
    englishName: 'AI Hallucination',
    abbreviation: '—',
    layer: '安全与伦理层',
    layerEmoji: '⚖️',
    definition: 'AI幻觉是指大语言模型生成听起来合理、语言流畅，但实际上不准确、虚假或无事实依据的内容，且模型通常以高置信度呈现这些内容。根本原因在于：LLM的训练目标是预测最可能的下一个词，而非保证陈述的真实性。',
    simpleExplanation: 'AI一本正经地胡说八道——用流畅、自信的语气捏造从未存在的论文、案例、人物、事件，且外表上与真实信息毫无区别，难以辨别。',
    example: '2023年真实案例：美国律师在法庭文件中引用ChatGPT提供的6个案件先例，被对方核实后发现这些案件全部不存在——名称、时间、判决均为AI捏造，律师因此遭法庭处罚。',
    keywords: ['事实性幻觉', '忠实性幻觉', '知识截止日期', 'RAG', '思维链', '不确定性校准'],
    mnemonic: '幻觉率变化：2021年约21.8%→2025年顶级模型约0.7%。主要解法：RAG（减少71%幻觉）。',
  },
  {
    id: 35,
    conceptName: '科学人工智能',
    englishName: 'AI for Science',
    abbreviation: 'AI4S',
    layer: '前沿应用层',
    layerEmoji: '🌍',
    definition: 'AI for Science是将深度学习、图神经网络、扩散模型等AI技术应用于科学研究的领域，旨在加速科学发现。核心应用包括：蛋白质结构预测（AlphaFold）、新药分子设计、新材料发现、天气预报、天文数据分析等。',
    simpleExplanation: 'AI成为科学家最强的实验伙伴——不只是数据处理工具，而是能在几秒内完成人类几年才能完成的实验预测，加速科学发现的进程。',
    example: 'AlphaFold3——将蛋白质、DNA、RNA和小分子相互作用的预测精度提升至少50%，AlphaFold数据库已包含2.14亿个蛋白质结构预测。创造者获得2024年诺贝尔化学奖。',
    keywords: ['AlphaFold', 'GNN', '扩散模型', 'GraphCast', 'GNoME', '虚拟筛选'],
    mnemonic: '四大战场：①药物发现 ②新材料（GNoME发现220万种晶体）③天文学 ④气候科学。',
  },
  {
    id: 36,
    conceptName: '自动驾驶',
    englishName: 'Autonomous Driving / Self-Driving',
    abbreviation: '—',
    layer: '前沿应用层',
    layerEmoji: '🌍',
    definition: '自动驾驶是使车辆能够在无人操控或有限人工干预下自主完成驾驶任务的技术系统，依托"感知-决策-控制"三层架构：感知层→决策层→控制层。按自动化程度分L0-L5六级。',
    simpleExplanation: '让汽车自己开的技术——AI的"眼睛"看清楚周围环境，AI的"大脑"决定怎么走，AI的"手脚"控制方向盘和油门刹车，人可以逐渐退出驾驶控制。',
    example: 'Waymo商业运营数据（2026）：与相同区域人类司机相比，严重伤亡事故减少91%，任何涉及伤害的碰撞减少80%，交叉路口伤亡事故减少96%。',
    keywords: ['L0-L5自动化等级', '感知', '路径规划', '激光雷达', '纯视觉vs多传感器融合', '长尾问题'],
    mnemonic: '两条技术路线：Waymo（激光雷达+多传感器融合）vs Tesla（纯视觉）。L4已商业化；L5尚未实现。',
  },
  {
    id: 37,
    conceptName: '具身智能',
    englishName: 'Embodied Intelligence / Embodied AI',
    abbreviation: '—',
    layer: '前沿应用层',
    layerEmoji: '🌍',
    definition: '具身智能是指AI通过物理身体（机器人）与真实物理环境进行感知、交互和学习，从而获得和发展智能的研究方向。核心主张：真正的智能需要通过身体与世界的物理交互来建立。关键技术包括：VLA模型、Sim-to-Real迁移、灵巧手控制。',
    simpleExplanation: '给AI装上身体——让AI不只是"会说话"，而是能感知物理环境、做出动作决策、改变物理世界的真实存在。是机器人走向通用能力的核心研究方向。',
    example: 'Figure AI的Helix系统在宝马工厂10个月试点中：协助生产超过30,000辆BMW X3，搬运超过90,000个钣金零件，累计工作超过1,250小时。',
    keywords: ['VLA模型', 'Sim-to-Real', '域随机化', '数据飞轮', '世界模型', '灵巧手', '自由度'],
    mnemonic: '具身智能四大模块：大脑（VLA模型）+ 眼睛（传感器阵列）+ 手脚（执行器）+ 训练场。最大挑战：Sim-to-Real鸿沟。',
  },
  {
    id: 38,
    conceptName: 'AI生成内容',
    englishName: 'AI Generated Content',
    abbreviation: 'AIGC',
    layer: '前沿应用层',
    layerEmoji: '🌍',
    definition: 'AIGC是利用生成式AI模型自动创作数字内容的技术领域，涵盖文本、图像、音频、视频、3D资产和代码等多种内容形态。底层技术支撑：文本生成依赖LLM，图像/视频生成依赖扩散模型，音频生成依赖神经声码器。',
    simpleExplanation: 'AI写文章、画图、作曲、拍视频——过去需要人类创作者完成的内容生产工作，现在AI可以在秒级到分钟级完成，且质量逐步接近甚至超越普通人类创作者。',
    example: '全球规模：2025年图像生成平台全球处理超过190亿次提示词（平均每秒600+次）；78%的美国大型企业在至少一个业务功能中部署了生成式AI。',
    keywords: ['文本生成', '图像生成', '音频生成', '视频生成', '深度伪造', '版权争议', '内容水印'],
    mnemonic: '四大内容类型：文本38%、图像29%、音频21%、视频（新兴）。三大伦理挑战：版权归属、深度伪造、监管标识。',
  },
];

// Generate quiz questions from flashcards
export interface QuizQuestion {
  id: number;
  cardId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export function generateQuizQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  let questionId = 1;

  flashcards.forEach((card) => {
    // Question type 1: What is the abbreviation?
    if (card.abbreviation !== '—') {
      const wrongOptions = flashcards
        .filter(c => c.id !== card.id && c.abbreviation !== '—')
        .map(c => c.abbreviation)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      
      const options = [card.abbreviation, ...wrongOptions].sort(() => Math.random() - 0.5);
      const correctIndex = options.indexOf(card.abbreviation);
      
      questions.push({
        id: questionId++,
        cardId: card.id,
        question: `「${card.conceptName}」的英文缩写是什么？`,
        options,
        correctAnswer: correctIndex,
        explanation: `${card.conceptName}（${card.englishName}）的缩写是 ${card.abbreviation}。${card.simpleExplanation}`,
      });
    }

    // Question type 2: Which layer does this concept belong to?
    const layerOptions = [...new Set(flashcards.map(c => c.layer))];
    const shuffledLayers = layerOptions.sort(() => Math.random() - 0.5).slice(0, 4);
    if (!shuffledLayers.includes(card.layer)) {
      shuffledLayers[0] = card.layer;
      shuffledLayers.sort(() => Math.random() - 0.5);
    }
    const correctLayerIndex = shuffledLayers.indexOf(card.layer);

    questions.push({
      id: questionId++,
      cardId: card.id,
      question: `「${card.conceptName}」属于哪个层级？`,
      options: shuffledLayers,
      correctAnswer: correctLayerIndex,
      explanation: `${card.conceptName}属于${card.layer}。${card.definition.slice(0, 100)}...`,
    });

    // Question type 3: Match the simple explanation
    const wrongExplanations = flashcards
      .filter(c => c.id !== card.id && c.layer === card.layer)
      .map(c => c.simpleExplanation)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    if (wrongExplanations.length >= 3) {
      const explanationOptions = [card.simpleExplanation, ...wrongExplanations].sort(() => Math.random() - 0.5);
      const correctExpIndex = explanationOptions.indexOf(card.simpleExplanation);

      questions.push({
        id: questionId++,
        cardId: card.id,
        question: `以下哪个是「${card.conceptName}」的通俗解释？`,
        options: explanationOptions.map(e => e.length > 60 ? e.slice(0, 60) + '...' : e),
        correctAnswer: correctExpIndex,
        explanation: card.simpleExplanation,
      });
    }

    // Question type 4: Which concept does this definition describe?
    const wrongConcepts = flashcards
      .filter(c => c.id !== card.id)
      .map(c => c.conceptName)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    const conceptOptions = [card.conceptName, ...wrongConcepts].sort(() => Math.random() - 0.5);
    const correctConceptIndex = conceptOptions.indexOf(card.conceptName);

    questions.push({
      id: questionId++,
      cardId: card.id,
      question: `"${card.simpleExplanation}" 描述的是哪个概念？`,
      options: conceptOptions,
      correctAnswer: correctConceptIndex,
      explanation: `${card.conceptName}：${card.simpleExplanation}`,
    });
  });

  return questions.sort(() => Math.random() - 0.5);
}
