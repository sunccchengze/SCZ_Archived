import React, { useState } from 'react';
import { houses, HouseInfo, patronuses, wandWoods, wandCores, wandFlexibilities } from '../data/sortingData';
import { Award, Star, BookOpen, Compass, Zap, Heart, Wand, Sparkles } from 'lucide-react';
// @ts-ignore
import confetti from 'canvas-confetti';

interface ResultProps {
  houseId: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff';
  onRestart: () => void;
}

export const Result: React.FC<ResultProps> = ({ houseId, onRestart }) => {
  const [activeTab, setActiveTab] = useState<'sorting' | 'wand' | 'patronus' | 'spell'>('sorting');
  const house: HouseInfo = houses[houseId];

  // Wand generation
  const [wand, setWand] = useState<{ wood: string; core: string; length: number; flex: string } | null>(null);
  const [patronus, setPatronus] = useState<{ name: string; type: string; desc: string } | null>(null);
  const [memory, setMemory] = useState('');
  const [spellProgress, setSpellProgress] = useState<{ name: string; success: boolean } | null>(null);

  const generateWand = () => {
    const randomWood = wandWoods[Math.floor(Math.random() * wandWoods.length)];
    const randomCore = wandCores[Math.floor(Math.random() * wandCores.length)];
    const randomLength = Math.floor(Math.random() * 6) + 10; // 10 to 15
    const randomFlex = wandFlexibilities[Math.floor(Math.random() * wandFlexibilities.length)];
    setWand({ wood: randomWood, core: randomCore, length: randomLength, flex: randomFlex });
    
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
  };

  const discoverPatronus = () => {
    if (!memory.trim()) return;
    const randomPatronus = patronuses[Math.floor(Math.random() * patronuses.length)];
    setPatronus(randomPatronus);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const practiceSpell = (spellName: string) => {
    setSpellProgress({ name: spellName, success: true });
    setTimeout(() => setSpellProgress(null), 3000);
  };

  return (
    <div className="max-w-4xl w-full mx-auto px-4 py-6 animate-fadeIn">
      {/* Tab Header */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 bg-slate-800/60 p-2 rounded-xl border border-slate-700 backdrop-blur-md">
        <button
          onClick={() => setActiveTab('sorting')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-serif font-semibold transition-all ${
            activeTab === 'sorting'
              ? 'bg-yellow-500 text-slate-950 shadow-lg'
              : 'text-slate-300 hover:bg-slate-700/50'
          }`}
        >
          <Award size={16} /> 分院仪式
        </button>
        <button
          onClick={() => setActiveTab('wand')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-serif font-semibold transition-all ${
            activeTab === 'wand'
              ? 'bg-yellow-500 text-slate-950 shadow-lg'
              : 'text-slate-300 hover:bg-slate-700/50'
          }`}
        >
          <Wand size={16} /> 奥利凡德魔杖
        </button>
        <button
          onClick={() => setActiveTab('patronus')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-serif font-semibold transition-all ${
            activeTab === 'patronus'
              ? 'bg-yellow-500 text-slate-950 shadow-lg'
              : 'text-slate-300 hover:bg-slate-700/50'
          }`}
        >
          <Heart size={16} /> 守护神咒
        </button>
        <button
          onClick={() => setActiveTab('spell')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-serif font-semibold transition-all ${
            activeTab === 'spell'
              ? 'bg-yellow-500 text-slate-950 shadow-lg'
              : 'text-slate-300 hover:bg-slate-700/50'
          }`}
        >
          <Zap size={16} /> 咒语练习
        </button>
      </div>

      {/* Main Container */}
      <div className="bg-slate-900/70 border border-slate-700/50 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl relative min-h-[500px]">
        
        {/* TAB 1: SORTING RESULTS */}
        {activeTab === 'sorting' && (
          <div className="animate-fadeIn">
            <div className={`text-center py-6 rounded-xl bg-gradient-to-r ${house.color} text-white shadow-xl mb-8 relative border ${house.borderColor}`}>
              <h1 className="text-3xl md:text-5xl font-bold font-serif tracking-wider mb-2 drop-shadow-md">
                {house.name}
              </h1>
              <p className="text-lg md:text-xl font-serif italic tracking-wide opacity-90 drop-shadow">
                {house.englishName}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className={`text-xl font-serif font-bold ${house.accentColor} mb-2 flex items-center gap-2`}>
                    <Compass size={20} /> 院训理念
                  </h3>
                  <p className="text-slate-100 font-serif text-lg border-l-4 border-yellow-500/50 pl-3 py-1 bg-slate-800/30 rounded-r">
                    “{house.motto}”
                  </p>
                </div>

                <div>
                  <h3 className={`text-xl font-serif font-bold ${house.accentColor} mb-2 flex items-center gap-2`}>
                    <Star size={20} /> 性格画像
                  </h3>
                  <p className="text-slate-300 leading-relaxed font-sans">{house.personality}</p>
                </div>

                <div>
                  <h3 className={`text-xl font-serif font-bold ${house.accentColor} mb-2 flex items-center gap-2`}>
                    <BookOpen size={20} /> 学院历史与介绍
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{house.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2 font-serif">核心特质：</h4>
                  <div className="flex flex-wrap gap-2">
                    {house.traits.map((trait, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-xs font-semibold ${house.bgColor} border ${house.borderColor} ${house.accentColor}`}>
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/40 border border-slate-700/60 p-5 rounded-xl space-y-4 font-serif text-sm">
                <div className="border-b border-slate-700/60 pb-3">
                  <p className="text-slate-400">创办人：</p>
                  <p className="text-slate-200 font-bold mt-1">{house.founder}</p>
                </div>
                <div className="border-b border-slate-700/60 pb-3">
                  <p className="text-slate-400">学院幽灵：</p>
                  <p className="text-slate-200 mt-1">{house.ghost}</p>
                </div>
                <div className="border-b border-slate-700/60 pb-3">
                  <p className="text-slate-400">代表动物 & 对应元素：</p>
                  <p className="text-slate-200 mt-1">{house.animals} / {house.element}</p>
                </div>
                <div>
                  <p className="text-slate-400 mb-2">著名校友：</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    {house.famousWizards.map((wizard, idx) => (
                      <li key={idx}>{wizard}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center border-t border-slate-800 pt-6">
              <button
                onClick={onRestart}
                className="px-6 py-2 border border-slate-600 rounded-full text-slate-400 hover:text-slate-100 hover:border-slate-400 transition-all text-sm font-serif"
              >
                重新测试
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: OLLIVANDERS WAND SHOP */}
        {activeTab === 'wand' && (
          <div className="animate-fadeIn text-center flex flex-col items-center justify-center py-6">
            <div className="mb-6">
              <Wand size={48} className="text-yellow-500 animate-pulse mx-auto mb-2" />
              <h2 className="text-2xl font-serif text-amber-200">奥利凡德魔杖店</h2>
              <p className="text-slate-400 text-sm italic">“魔杖选择巫师，孩子。”</p>
            </div>

            {!wand ? (
              <div className="max-w-md p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl">
                <p className="text-slate-300 mb-6 text-sm font-serif">
                  每一支魔杖都是独一无二的。奥利凡德将通过魔法共鸣，为你匹配专属于你性格与灵魂的巫师权杖。
                </p>
                <button
                  onClick={generateWand}
                  className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-slate-100 font-bold rounded-lg hover:brightness-110 border border-amber-500/40"
                >
                  启动共鸣测试
                </button>
              </div>
            ) : (
              <div className="max-w-md w-full p-6 bg-slate-800/40 border border-amber-500/40 rounded-xl relative overflow-hidden font-serif">
                <div className="absolute inset-0 bg-radial-at-t from-amber-500/5 to-transparent pointer-events-none"></div>
                <p className="text-yellow-400 font-bold text-xl mb-4">你的专属魔杖</p>
                
                <div className="space-y-3 text-slate-200 border-y border-slate-700/60 py-4 my-4">
                  <p><span className="text-slate-400">木材材质：</span>{wand.wood}</p>
                  <p><span className="text-slate-400">魔杖杖芯：</span>{wand.core}</p>
                  <p><span className="text-slate-400">魔杖长度：</span>{wand.length} 英寸</p>
                  <p><span className="text-slate-400">柔韧度：</span>{wand.flex}</p>
                </div>

                <p className="text-xs text-slate-400 italic">
                  * 杖身中蕴藏着无可估量的深奥魔力，它将是你一生的忠实伴侣。
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: PATRONUS CHARM */}
        {activeTab === 'patronus' && (
          <div className="animate-fadeIn text-center flex flex-col items-center justify-center py-6">
            <div className="mb-6">
              <Heart size={48} className="text-cyan-400 animate-pulse mx-auto mb-2" />
              <h2 className="text-2xl font-serif text-cyan-200">呼唤你的守护神</h2>
              <p className="text-slate-400 text-sm italic">“呼神护卫！(Expecto Patronum)”</p>
            </div>

            {!patronus ? (
              <div className="max-w-md w-full p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl text-left">
                <label className="block text-slate-300 font-serif text-sm mb-2">
                  闭上眼睛，深深地回忆一段你生命中最快乐、最坚定的记忆：
                </label>
                <textarea
                  value={memory}
                  onChange={(e) => setMemory(e.target.value)}
                  placeholder="输入你的快乐记忆..."
                  className="w-full h-24 p-3 rounded bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-serif text-sm resize-none mb-4"
                />
                <button
                  onClick={discoverPatronus}
                  disabled={!memory.trim()}
                  className={`w-full py-3 font-bold rounded-lg border flex items-center justify-center gap-2 font-serif transition-all ${
                    memory.trim()
                      ? 'bg-cyan-600 hover:bg-cyan-500 text-slate-100 border-cyan-400'
                      : 'bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed'
                  }`}
                >
                  释放守护神咒 <Sparkles size={16} />
                </button>
              </div>
            ) : (
              <div className="max-w-md w-full p-6 bg-slate-900/60 border border-cyan-500/40 rounded-xl relative font-serif text-left shadow-lg shadow-cyan-950/40 animate-fadeIn">
                <div className="absolute inset-0 bg-radial-at-b from-cyan-600/10 to-transparent pointer-events-none"></div>
                <h4 className="text-cyan-400 text-center font-bold text-xl mb-4">你的守护神</h4>
                
                <div className="text-center mb-6 py-6 bg-cyan-900/20 border border-cyan-500/20 rounded-lg">
                  <p className="text-2xl font-bold text-cyan-200 tracking-wide mb-1">{patronus.name}</p>
                  <p className="text-xs text-cyan-300/80 italic">—— {patronus.type}</p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {patronus.desc}
                </p>

                <button
                  onClick={() => {
                    setPatronus(null);
                    setMemory('');
                  }}
                  className="text-xs text-slate-500 hover:text-slate-400 underline block text-center w-full"
                >
                  重新召唤
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: SPELL PRACTICE */}
        {activeTab === 'spell' && (
          <div className="animate-fadeIn text-center">
            <div className="mb-6">
              <Zap size={48} className="text-yellow-400 mx-auto mb-2 animate-bounce" />
              <h2 className="text-2xl font-serif text-slate-200">魔法咒语训练室</h2>
              <p className="text-slate-400 text-sm">点击学习并吟唱初级魔咒</p>
            </div>

            {spellProgress && (
              <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-400/30 rounded-lg animate-pulse max-w-sm mx-auto">
                <p className="text-yellow-300 font-serif font-bold text-lg">
                  ✨ 释放咒语：{spellProgress.name} 成功！
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <button
                onClick={() => practiceSpell('荧光闪烁 (Lumos)')}
                className="p-4 bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700 rounded-xl text-left flex flex-col justify-between group transition-all"
              >
                <div className="font-serif font-bold text-slate-200 group-hover:text-yellow-300">Lumos (荧光闪烁)</div>
                <div className="text-xs text-slate-400 mt-2">照明咒，为黑暗提供纯白的光源。</div>
              </button>
              <button
                onClick={() => practiceSpell('除你武器 (Expelliarmus)')}
                className="p-4 bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700 rounded-xl text-left flex flex-col justify-between group transition-all"
              >
                <div className="font-serif font-bold text-slate-200 group-hover:text-red-400">Expelliarmus (除你武器)</div>
                <div className="text-xs text-slate-400 mt-2">缴械咒，能击飞对手的魔杖。</div>
              </button>
              <button
                onClick={() => practiceSpell('羽加迪姆 勒维奥萨 (Wingardium Leviosa)')}
                className="p-4 bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700 rounded-xl text-left flex flex-col justify-between group transition-all"
              >
                <div className="font-serif font-bold text-slate-200 group-hover:text-sky-300">Wingardium Leviosa (悬浮咒)</div>
                <div className="text-xs text-slate-400 mt-2">悬浮咒，记得是“勒维-奥-萨”，而不是“勒维奥-萨”。</div>
              </button>
              <button
                onClick={() => practiceSpell('统统石化 (Petrificus Totalus)')}
                className="p-4 bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700 rounded-xl text-left flex flex-col justify-between group transition-all"
              >
                <div className="font-serif font-bold text-slate-200 group-hover:text-purple-400">Petrificus Totalus (全身束缚咒)</div>
                <div className="text-xs text-slate-400 mt-2">令目标如同被石化般，肢体僵硬不能行动。</div>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
