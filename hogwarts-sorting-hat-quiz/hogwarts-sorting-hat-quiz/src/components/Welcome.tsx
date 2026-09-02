import React, { useState } from 'react';
import { Sparkles, GraduationCap, Feather } from 'lucide-react';

interface WelcomeProps {
  onStartQuiz: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onStartQuiz }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 relative">
      {/* Background Magic Aura */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700"></div>

      <div className="max-w-2xl w-full bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl relative transition-all duration-700">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <GraduationCap className="h-16 w-16 text-yellow-500 animate-bounce" />
            <Sparkles className="h-6 w-6 text-yellow-200 absolute top-0 -right-2 animate-pulse" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-500 font-bold tracking-widest mb-6">
          霍格沃茨魔法学校
        </h1>
        <p className="text-slate-300 text-lg md:text-xl mb-10 font-serif italic">
          “霍格沃茨，霍格沃茨，泥巴糊糊，指导我们成长……”
        </p>

        {!isOpen ? (
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="group relative cursor-pointer flex flex-col items-center"
            >
              {/* Envelope */}
              <div className="w-64 h-40 bg-amber-50/90 rounded-lg shadow-xl flex items-center justify-center border-2 border-amber-200/50 p-4 relative group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/30 to-transparent"></div>
                <div className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center shadow-lg border border-red-500 relative z-10">
                  <span className="text-yellow-400 font-serif font-bold text-xl">H</span>
                </div>
                <div className="absolute bottom-2 left-4 text-xs text-slate-800 font-serif flex items-center gap-1">
                  <Feather size={12} /> 霍格沃茨校长办公室
                </div>
              </div>
              <p className="mt-6 text-yellow-400/90 hover:text-yellow-300 font-serif text-sm md:text-base animate-pulse">
                您有一封来自猫头鹰的信件。点击开启
              </p>
            </button>
          </div>
        ) : (
          <div className="animate-fadeIn font-serif text-amber-100/90 text-left bg-[#1e1710]/90 border border-amber-800/40 p-6 md:p-8 rounded-lg shadow-inner max-h-[400px] overflow-y-auto mb-8 scrollbar-thin">
            <p className="font-bold text-lg text-amber-300 mb-4">亲爱的年轻巫师：</p>
            <p className="leading-loose mb-4">
              我们愉快地通知您，您已获准在<strong>霍格沃茨魔法学校</strong>就读。
            </p>
            <p className="leading-loose mb-4">
              在学期开始前，每位新生必须戴上<strong>分院帽（The Sorting Hat）</strong>。
              它将深入探索你的灵魂，根据你的潜质、性格和宿命，分配你到最合适的学院：
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-amber-200/80 text-sm">
              <li><strong className="text-yellow-400">格兰芬多：</strong> 属于英勇无畏，奋不顾身之人。</li>
              <li><strong className="text-emerald-400">斯莱特林：</strong> 属于足智多谋，精明野心之人。</li>
              <li><strong className="text-cyan-400">拉文克劳：</strong> 属于睿智博学，追求真理之人。</li>
              <li><strong className="text-amber-400">赫奇帕奇：</strong> 属于忠厚勤劳，正直善良之人。</li>
            </ul>
            <p className="leading-loose mb-6">
              请整理好你的巫师长袍，平心静气。霍格沃茨魔法史诗将在你的指尖开启。
            </p>
            <div className="flex justify-center">
              <button
                onClick={onStartQuiz}
                className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-amber-700 text-slate-100 font-bold rounded-full border border-yellow-400/50 shadow-lg shadow-yellow-900/30 hover:from-yellow-500 hover:to-amber-600 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 tracking-widest text-lg"
              >
                戴上分院帽 <Sparkles size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
