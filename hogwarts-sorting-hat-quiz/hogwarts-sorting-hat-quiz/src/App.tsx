import { useState } from 'react';
import { Welcome } from './components/Welcome';
import { Quiz } from './components/Quiz';
import { SortingCeremony } from './components/SortingCeremony';
import { Result } from './components/Result';

export default function App() {
  const [stage, setStage] = useState<'welcome' | 'quiz' | 'ceremony' | 'result'>('welcome');
  const [scores, setScores] = useState<Record<string, number>>({
    Gryffindor: 0,
    Slytherin: 0,
    Ravenclaw: 0,
    Hufflepuff: 0
  });
  const [selectedHouse, setSelectedHouse] = useState<'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff'>('Gryffindor');

  const startQuiz = () => setStage('quiz');

  const finishQuiz = (finalScores: Record<string, number>) => {
    setScores(finalScores);
    setStage('ceremony');
  };

  const finishCeremony = (houseId: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff') => {
    setSelectedHouse(houseId);
    setStage('result');
  };

  const restartApp = () => {
    setScores({ Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 });
    setStage('welcome');
  };

  return (
    <div className="min-h-screen bg-[#060713] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a16] to-[#04040a] text-slate-100 flex flex-col font-sans transition-all duration-500 selection:bg-yellow-500 selection:text-slate-900">
      {/* Hogwarts Golden Header */}
      <header className="border-b border-slate-800/60 bg-slate-950/40 backdrop-blur-md py-4 px-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-300">
            Hogwarts
          </span>
          <div className="h-4 w-[1px] bg-slate-700"></div>
          <span className="text-xs font-serif text-slate-400 tracking-wider">分院帽魔法评判处</span>
        </div>
        <div className="text-xs font-serif text-slate-500">
          城堡处于：保护模式 🛡️
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center relative">
        {stage === 'welcome' && <Welcome onStartQuiz={startQuiz} />}
        {stage === 'quiz' && <Quiz onFinishQuiz={finishQuiz} />}
        {stage === 'ceremony' && (
          <SortingCeremony scores={scores} onComplete={finishCeremony} />
        )}
        {stage === 'result' && (
          <Result houseId={selectedHouse} onRestart={restartApp} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900/50 text-slate-600 text-center py-4 text-xs font-serif">
        由SCZ魔法委员会监制 &copy; 霍格沃茨分院魔法体验中心
      </footer>
    </div>
  );
}
