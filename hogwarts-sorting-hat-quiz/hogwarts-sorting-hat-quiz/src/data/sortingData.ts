export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    house: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff';
    explanation: string;
  }[];
}

export interface HouseInfo {
  id: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff';
  name: string;
  englishName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  accentColor: string;
  motto: string;
  traits: string[];
  founder: string;
  ghost: string;
  element: string;
  animals: string;
  famousWizards: string[];
  description: string;
  personality: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "你最看重的核心品质是什么？",
    options: [
      { text: "勇气、正义与无所畏惧的冒险精神", house: "Gryffindor", explanation: "你敢于面对恐惧，为正义挺身而出。" },
      { text: "忠诚、友善与脚踏实地的勤奋", house: "Hufflepuff", explanation: "你视朋友如家人，看重踏实与善良。" },
      { text: "智慧、远见与对未知事物的好奇心", house: "Ravenclaw", explanation: "知识是你的力量，洞察力是你的武器。" },
      { text: "野心、荣誉与达成目标的手腕", house: "Slytherin", explanation: "你有极高的志向，懂得如何为自己的追求铺路。" }
    ]
  },
  {
    id: 2,
    text: "走在深夜的禁林边缘，你突然听到深处传来求救声，你的第一反应是：",
    options: [
      { text: "毫不犹豫，拔出魔杖立刻冲进去救人", house: "Gryffindor", explanation: "行动派，正义感战胜了危险感。" },
      { text: "先去寻找教授或更可靠的帮手，或者寻找同伴同行", house: "Hufflepuff", explanation: "谨慎而合群，注重团队与安全。" },
      { text: "仔细分析呼救声的方向、频率，评估是否有埋伏", house: "Ravenclaw", explanation: "理性至上，用智慧看破迷局。" },
      { text: "隐藏好自己的气息，先确认对自己是否会有生命威胁", house: "Slytherin", explanation: "善于自我保护，不盲目涉险。" }
    ]
  },
  {
    id: 3,
    text: "如果你能拥有一件传奇死亡圣器，你最想要哪一件？",
    options: [
      { text: "老魔杖（The Elder Wand）—— 追求无可匹敌的强大力量", house: "Slytherin", explanation: "渴望至高无上的控制力与尊重。" },
      { text: "隐形衣（The Invisibility Cloak）—— 自由探索且不受约束", house: "Gryffindor", explanation: "热爱自由，追求冒险与神秘。" },
      { text: "复活石（The Resurrection Stone）—— 弥补生命的遗憾", house: "Hufflepuff", explanation: "重情重义，深切怀念所爱之人。" },
      { text: "我宁愿拥有一座装满真理的书库（替代圣器）", house: "Ravenclaw", explanation: "知识比力量更能让你沉醉。" }
    ]
  },
  {
    id: 4,
    text: "四瓶颜色各异、散发不同气味的魔法药剂，你会选择喝下哪一瓶？",
    options: [
      { text: "金色液体，散发着木柴燃烧和阳光的味道", house: "Gryffindor", explanation: "充满活力与温暖。" },
      { text: "温润的浅黄液体，散发着刚出炉烤面包和泥土香气", house: "Hufflepuff", explanation: "崇尚自然与安宁。" },
      { text: "湛蓝澄澈的液体，散发着旧羊皮纸和海洋墨水的味道", house: "Ravenclaw", explanation: "沉浸在思维的星海中。" },
      { text: "带有神秘绿色磷光的液体，散发着深海冷香与薄荷气息", house: "Slytherin", explanation: "高冷而敏锐，寻求力量。" }
    ]
  },
  {
    id: 5,
    text: "当遇到一个难以解答的谜题阻挡了去路，你会怎么办？",
    options: [
      { text: "独立思考，查阅各种文献，享受解题的快乐", house: "Ravenclaw", explanation: "博学多才，享受探索的过程。" },
      { text: "勇往直前，尝试用不同的魔法强行破除障碍", house: "Gryffindor", explanation: "用行动力开辟道路。" },
      { text: "与朋友们一起合作，听取每个人的看法集思广益", house: "Hufflepuff", explanation: "重视合作，坚信众人拾柴火焰高。" },
      { text: "寻找谜题设计者的意图，寻找捷径或利用规则漏洞", house: "Slytherin", explanation: "聪明地寻找最优解，善于洞察人心。" }
    ]
  },
  {
    id: 6,
    text: "哪种工作环境能让你发挥最大潜力？",
    options: [
      { text: "充满未知危险，但成功后能获得极大名誉的岗位", house: "Gryffindor", explanation: "敢于挑战，渴望荣耀。" },
      { text: "能够为大众服务，氛围融洽温暖的团队", house: "Hufflepuff", explanation: "看重人与人的联结，心地纯良。" },
      { text: "可以独立研究深奥事物，不受外界打扰的研究所", house: "Ravenclaw", explanation: "在纯粹知识中获得慰藉。" },
      { text: "具有严明等级，能一步步爬向权力核心的精英阶层", house: "Slytherin", explanation: "追求地位，执行力极强。" }
    ]
  },
  {
    id: 7,
    text: "如果你在霍格沃茨发现了一条密道，你的第一想法是：",
    options: [
      { text: "夜巡探险！今晚就带上隐形衣去一探究竟", house: "Gryffindor", explanation: "典型的格兰芬多式夜游派。" },
      { text: "记录下来，看看它连接着哪栋建筑，研究建筑史", house: "Ravenclaw", explanation: "严谨的学者风范。" },
      { text: "把它留作自己的专属战略通道，为日后所需做准备", house: "Slytherin", explanation: "深谋远虑，运筹帷幄。" },
      { text: "告诉室友们，有空时一起安全地在里面散步", house: "Hufflepuff", explanation: "分享快乐，稳妥为主。" }
    ]
  },
  {
    id: 8,
    text: "在百年后的巫师历史中，你最希望被人们如何评价？",
    options: [
      { text: "那位改写历史、拯救无数人的英雄", house: "Gryffindor", explanation: "为荣耀与正义而生。" },
      { text: "解开世纪谜团、拓展巫师知识边界的学者", house: "Ravenclaw", explanation: "智慧的代名词。" },
      { text: "建立伟业、受人敬畏并掌握实权的伟大人物", house: "Slytherin", explanation: "生而卓越，追求极致。" },
      { text: "一生行善、深受学生和朋友爱戴的人", house: "Hufflepuff", explanation: "美德才是最高的勋章。" }
    ]
  }
];

export const houses: Record<string, HouseInfo> = {
  Gryffindor: {
    id: "Gryffindor",
    name: "格兰芬多",
    englishName: "Gryffindor",
    color: "from-red-700 to-yellow-600",
    bgColor: "bg-red-900/40",
    borderColor: "border-yellow-500",
    accentColor: "text-yellow-400",
    motto: "勇气、正义、骑士精神",
    traits: ["勇敢无畏", "热血仗义", "酷爱冒险", "做事果断", "略带莽撞"],
    founder: "戈德里克·格兰芬多 (Godric Gryffindor)",
    ghost: "差点没头的尼克 (Nearly Headless Nick)",
    element: "火 (Fire)",
    animals: "狮子 (Lion)",
    famousWizards: ["哈利·波特", "赫敏·格兰杰", "阿不思·邓布利多", "罗恩·韦斯莱"],
    description: "格兰芬多代表着火一般的热情与无畏。在这里，骑士精神和敢作敢为是最高的标杆。如果你有一颗勇敢的心，格兰芬多将是你的归宿。",
    personality: "你是一个富有感染力的人，面对不公时绝不退缩，敢于直面困难。虽然有时略显急躁，但你的赤诚和热血总是能感染身边的每一个人。"
  },
  Slytherin: {
    id: "Slytherin",
    name: "斯莱特林",
    englishName: "Slytherin",
    color: "from-green-800 to-emerald-600",
    bgColor: "bg-emerald-950/50",
    borderColor: "border-green-400",
    accentColor: "text-emerald-300",
    motto: "野心、精明、权谋、自我保护",
    traits: ["精明强大", "审时度势", "极富野心", "重视荣誉", "注重阶层"],
    founder: "萨拉查·斯莱特林 (Salazar Slytherin)",
    ghost: "血人巴罗 (The Bloody Baron)",
    element: "水 (Water)",
    animals: "蛇 (Snake)",
    famousWizards: ["西弗勒斯·斯内普", "汤姆·里德尔", "德拉科·马尔福", "梅林"],
    description: "斯莱特林看重的是非凡的抱负和领导力。他们极其聪明，懂得利用规则。这里走出了无数伟大的巫师，他们渴望卓越、捍卫荣耀。",
    personality: "你是一个善于思考长远规划的人。你深知自己的底线并极具自我保护意识。在实现目标的道路上，你冷静、高效、坚毅，是天生的领导者。"
  },
  Ravenclaw: {
    id: "Ravenclaw",
    name: "拉文克劳",
    englishName: "Ravenclaw",
    color: "from-blue-800 to-cyan-600",
    bgColor: "bg-blue-900/40",
    borderColor: "border-blue-400",
    accentColor: "text-cyan-300",
    motto: "智慧、博学、洞察力",
    traits: ["头脑睿智", "思维敏捷", "求知欲旺盛", "富有创造力", "个性独特"],
    founder: "罗伊纳·拉文克劳 (Rowena Ravenclaw)",
    ghost: "格雷女士 (The Grey Lady)",
    element: "风 (Air)",
    animals: "鹰 (Eagle)",
    famousWizards: ["卢娜·洛夫古德", "秋·张", "菲利乌斯·弗立维", "奥利凡德"],
    description: "‘过人的聪明才智是人类最大的财富’。拉文克劳渴望各种各样的知识，对世界充满了哲思，包容各种奇思妙想。",
    personality: "你是一个精神世界极为丰富的人。你热衷于探索真理和思考人生的本质。独立、客观、充满好奇心是你的专属标签。"
  },
  Hufflepuff: {
    id: "Hufflepuff",
    name: "赫奇帕奇",
    englishName: "Hufflepuff",
    color: "from-yellow-600 to-amber-500",
    bgColor: "bg-amber-900/30",
    borderColor: "border-amber-400",
    accentColor: "text-amber-400",
    motto: "忠诚、勤劳、公正、宽容",
    traits: ["善良踏实", "极其忠诚", "默默耕耘", "极强包容力", "热爱生活"],
    founder: "赫尔加·赫奇帕奇 (Helga Hufflepuff)",
    ghost: "胖修士 (The Fat Friar)",
    element: "土 (Earth)",
    animals: "獾 (Badger)",
    famousWizards: ["塞德里克·迪戈里", "纽特·斯卡曼德", "尼法朵拉·唐克斯"],
    description: "赫奇帕奇招收那些勤奋刻苦、愿意付出并始终如一的人。他们或许不是最耀眼的，但绝对是最坚实的后盾和最值得信赖的挚友。",
    personality: "你是一个如同大地般醇厚、温暖的人。你待人真诚，脚踏实地，重视和谐。大家都愿意向你倾诉，因为你拥有疗愈他人的魔力。"
  }
};

export const patronuses = [
  { name: "银色雄鹿 (Stag)", type: "勇敢者的指引", desc: "威严且坚定，代表纯粹的保护与牺牲。" },
  { name: "银色牝鹿 (Doe)", type: "温柔的守候", desc: "深情、恒久、隐藏着不息的深爱。" },
  { name: "凤凰 (Phoenix)", type: "涅槃的希望", desc: "极为罕见，象征重生的力量和不灭的意志。" },
  { name: "雪鸮 (Snowy Owl)", type: "智慧的信使", desc: "洞察黑夜的迷局，带来黎明的希望。" },
  { name: "水獭 (Otter)", type: "无忧的快乐", desc: "灵活、活泼，充满灵动与探索的趣味。" },
  { name: "狼 (Wolf)", type: "集体的守护者", desc: "冷静、团结、在孤独中彰显忠诚。" },
  { name: "波斯猫 (Persian Cat)", type: "优雅的防卫", desc: "高贵傲娇，敏锐觉察身边的危机。" }
];

export const wandWoods = ["冬青木 (Holly)", "藤木 (Vine)", "山楂木 (Hawthorn)", "紫杉木 (Yew)", "橡木 (Oak)", "接骨木 (Elder)"];
export const wandCores = ["凤凰羽毛 (Phoenix Feather)", "龙的心脏神经 (Dragon Heartstring)", "独角兽毛 (Unicorn Hair)"];
export const wandFlexibilities = ["极其坚硬", "很有弹性", "略带刚性", "十分柔韧", "不屈"];
