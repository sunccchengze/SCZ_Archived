import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
// @ts-ignore
import confetti from 'canvas-confetti';

interface SortingCeremonyProps {
  scores: Record<string, number>;
  onComplete: (houseId: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff') => void;
}

export const SortingCeremony: React.FC<SortingCeremonyProps> = ({ scores, onComplete }) => {
  const [monologueIndex, setMonologueIndex] = useState(0);

  // Determine the winning house
  const getWinner = (): 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' => {
    let maxScore = -1;
    let winner: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' = 'Gryffindor';

    for (const [house, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        winner = house as 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff';
      }
    }
    return winner;
  };

  const monologues = [
    "噢，看看，又来了一个有意思的灵魂……让我深入你的心灵深处……",
    "嗯……看到了，不凡。极富潜力，既不缺乏思考的广度，又具备某种坚守的力量……",
    "困难，非常困难。要把你分到哪里去呢？你的某些品质非常强烈……",
    "我想……我知道了。那最好是——！"
  ];

  useEffect(() => {
    if (monologueIndex < monologues.length) {
      const timer = setTimeout(() => {
        setMonologueIndex(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      // Trigger result
      const winner = getWinner();
      // Drop confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
      const timer = setTimeout(() => {
        onComplete(winner);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [monologueIndex]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
      {/* Sorting Hat Illustration placeholder with purely CSS & icons */}
      <div className="relative mb-8 animate-pulse">
        <div className="w-48 h-48 rounded-full bg-yellow-600/10 border-4 border-yellow-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.2)]">
          {/* Hat triangle */}
          <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-bottom-[100px] border-b-amber-800 relative">
            <div className="absolute top-10 -left-6 w-12 h-4 bg-amber-950 rounded-full rotate-12"></div>
            {/* Eyes */}
            <div className="absolute top-16 -left-4 flex gap-6">
              <div className="w-3 h-2 bg-amber-950 rounded-full rotate-45"></div>
              <div className="w-3 h-2 bg-amber-950 rounded-full -rotate-45"></div>
            </div>
            {/* Mouth */}
            <div className="absolute top-24 -left-2 w-5 h-2 bg-amber-950 rounded-full border-t border-amber-900 animate-bounce"></div>
          </div>
        </div>
        <Sparkles className="absolute top-2 right-2 text-yellow-300 h-6 w-6 animate-spin" />
      </div>

      <div className="max-w-xl w-full p-6">
        <h3 className="text-xl md:text-2xl font-serif text-amber-200/90 italic tracking-wider animate-fadeIn min-h-[60px] flex items-center justify-center">
          "{monologues[monologueIndex < monologues.length ? monologueIndex : monologues.length - 1]}"
        </h3>

        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-300"></div>
        </div>
        <p className="text-slate-500 text-xs mt-6 font-serif">分院帽正在阅读你的思维……</p>
      </div>
    </div>
  );
};
