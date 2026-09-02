import { useState } from 'react';
import { Math } from './Math';

interface QuizOption {
  label: string;
  text: string;
  texContent?: string;
}

interface QuizProps {
  question: string;
  questionTex?: string;
  options: QuizOption[];
  correctIndex: number;
  explanation: string;
  explanationTex?: string;
}

export function Quiz({ question, questionTex, options, correctIndex, explanation, explanationTex }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (index: number) => {
    if (revealed) return;
    setSelected(index);
  };

  const handleReveal = () => {
    if (selected === null) return;
    setRevealed(true);
  };

  const handleReset = () => {
    setSelected(null);
    setRevealed(false);
  };

  return (
    <div className="my-8 rounded-xl border border-cyan-border bg-gradient-to-b from-cyan-subtle to-transparent p-6 md:p-8">
      <div className="mb-1 flex items-center gap-2">
        <span className="inline-block rounded bg-cyan-glow/10 px-2 py-0.5 font-mono text-xs tracking-wider text-cyan-glow">
          QUIZ
        </span>
      </div>
      <p className="mb-5 mt-3 text-silver-100 leading-relaxed">
        {question}
        {questionTex && <Math tex={questionTex} display />}
      </p>

      <div className="space-y-3">
        {options.map((opt, i) => {
          let borderColor = 'border-slate-mid';
          let bgColor = '';
          let textColor = 'text-silver-200';

          if (revealed) {
            if (i === correctIndex) {
              borderColor = 'border-success/50';
              bgColor = 'bg-success/5';
              textColor = 'text-success';
            } else if (i === selected) {
              borderColor = 'border-danger/50';
              bgColor = 'bg-danger/5';
              textColor = 'text-danger';
            }
          } else if (i === selected) {
            borderColor = 'border-cyan-glow/40';
            bgColor = 'bg-cyan-glow/5';
            textColor = 'text-cyan-glow';
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`quiz-option w-full rounded-lg border ${borderColor} ${bgColor} p-4 text-left transition-all ${
                !revealed ? 'cursor-pointer hover:border-cyan-glow/30' : 'cursor-default'
              }`}
            >
              <span className={`font-mono text-sm font-semibold ${textColor} mr-3`}>
                {opt.label}
              </span>
              <span className={`text-sm ${textColor}`}>
                {opt.text}
                {opt.texContent && <Math tex={opt.texContent} />}
              </span>
              {revealed && i === correctIndex && (
                <span className="ml-2 text-success">✓</span>
              )}
              {revealed && i === selected && i !== correctIndex && (
                <span className="ml-2 text-danger">✗</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-3">
        {!revealed ? (
          <button
            onClick={handleReveal}
            disabled={selected === null}
            className={`rounded-lg px-5 py-2 font-mono text-sm font-medium tracking-wide transition-all ${
              selected !== null
                ? 'bg-cyan-glow/15 text-cyan-glow border border-cyan-glow/30 hover:bg-cyan-glow/25'
                : 'bg-slate-mid text-silver-400 border border-transparent cursor-not-allowed'
            }`}
          >
            CHECK
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="rounded-lg border border-slate-mid bg-slate-mid/50 px-5 py-2 font-mono text-sm font-medium tracking-wide text-silver-300 transition-all hover:bg-slate-mid"
          >
            RETRY
          </button>
        )}
      </div>

      {revealed && (
        <div className="mt-5 animate-fade-in rounded-lg border border-cyan-border/50 bg-deep/80 p-5">
          <p className="text-sm font-medium text-cyan-dim mb-2">解析</p>
          <p className="text-sm leading-relaxed text-silver-200">
            {explanation}
          </p>
          {explanationTex && <Math tex={explanationTex} display />}
        </div>
      )}
    </div>
  );
}
