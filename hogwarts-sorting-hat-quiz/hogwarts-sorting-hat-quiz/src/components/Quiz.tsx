import React, { useState } from 'react';
import { Question, questions } from '../data/sortingData';
import { Sparkles, ArrowRight, Wand2 } from 'lucide-react';

interface QuizProps {
  onFinishQuiz: (scores: Record<string, number>) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onFinishQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    Gryffindor: 0,
    Slytherin: 0,
    Ravenclaw: 0,
    Hufflepuff: 0
  });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion: Question = questions[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const chosenOption = currentQuestion.options[selectedOption];
    setScores(prev => ({
      ...prev,
      [chosenOption.house]: prev[chosenOption.house] + 1
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      // Finished
      const finalScores = { ...scores };
      finalScores[chosenOption.house] += 1; // apply last answer
      onFinishQuiz(finalScores);
    }
  };

  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-8">
      {/* Progress Bar */}
      <div className="w-full max-w-xl bg-slate-800/80 rounded-full h-2 mb-8 border border-slate-700 overflow-hidden relative shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300 transition-all duration-500 rounded-full shadow-lg shadow-yellow-500/50"
          style={{ width: `${progressPercent}%` }}
        />
        <div
          className="absolute top-0 flex items-center justify-center h-full text-xs text-yellow-300 pointer-events-none"
          style={{ left: `calc(${progressPercent}% - 10px)` }}
        >
          <Wand2 size={12} className="animate-pulse text-yellow-300" />
        </div>
      </div>

      <div className="max-w-2xl w-full bg-slate-900/70 border border-slate-700/50 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl relative animate-fadeIn">
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 bg-slate-800 border border-slate-600 rounded-full w-10 h-10 flex items-center justify-center text-yellow-400 font-bold shadow-md">
          {currentQuestionIndex + 1}
        </div>
        <div className="absolute top-4 right-6 text-slate-500 text-sm font-serif">
          题库进度 {currentQuestionIndex + 1} / {questions.length}
        </div>

        <h2 className="text-xl md:text-2xl font-serif font-semibold text-slate-100 mb-8 mt-4 leading-relaxed">
          {currentQuestion.text}
        </h2>

        <div className="space-y-4 mb-8">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;
            return (
              <button
                key={index}
                onClick={() => handleSelectOption(index)}
                className={`w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-300 flex items-start gap-4 group ${
                  isSelected
                    ? 'border-yellow-400 bg-yellow-500/10 text-yellow-100 shadow-lg shadow-yellow-500/10 scale-[1.01]'
                    : 'border-slate-700/60 bg-slate-800/40 hover:border-slate-500 hover:bg-slate-800/80 text-slate-300'
                }`}
              >
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                    isSelected
                      ? 'border-yellow-400 bg-yellow-400 text-slate-900'
                      : 'border-slate-500 text-slate-400 group-hover:border-slate-300'
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <div className="flex-1">
                  <p className="font-sans leading-snug">{option.text}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`px-6 py-3 rounded-xl flex items-center gap-2 font-bold font-serif transition-all duration-300 shadow-md ${
              selectedOption !== null
                ? 'bg-yellow-500 hover:bg-yellow-400 text-slate-900 cursor-pointer shadow-yellow-500/30'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed border border-slate-600'
            }`}
          >
            {currentQuestionIndex < questions.length - 1 ? (
              <>
                下一题 <ArrowRight size={18} />
              </>
            ) : (
              <>
                呈递给分院帽 <Sparkles size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
