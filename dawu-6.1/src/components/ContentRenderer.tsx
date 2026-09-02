import { useState } from 'react';
import { ContentBlock } from '../data/chapters';
import MathRenderer from './MathRenderer';

interface ContentRendererProps {
  block: ContentBlock;
  index: number;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ block, index }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const animationDelay = `${index * 50}ms`;

  switch (block.type) {
    case 'text':
      return (
        <p 
          className="text-[#c0c0c0] leading-relaxed mb-6 opacity-0 fade-in"
          style={{ animationDelay }}
        >
          {block.content}
        </p>
      );

    case 'formula':
      return (
        <div 
          className="mb-6 opacity-0 fade-in"
          style={{ animationDelay }}
        >
          {block.label && (
            <div className="text-[#c77dff] text-sm font-tech mb-2 tracking-wide">
              {block.label}
            </div>
          )}
          <div className="bg-[#1a1a25] border border-[#9d4edd]/30 rounded-lg p-4 glow-border-purple">
            <MathRenderer math={block.formula || ''} display={true} />
          </div>
        </div>
      );

    case 'important':
      return (
        <div 
          className="mb-6 bg-gradient-to-r from-[#9d4edd]/20 to-[#00d4ff]/10 border-l-4 border-[#9d4edd] p-4 rounded-r-lg opacity-0 fade-in"
          style={{ animationDelay }}
        >
          <div className="flex items-start gap-3">
            <span className="text-[#9d4edd] text-xl">💡</span>
            <p className="text-[#e8e8e8] font-medium leading-relaxed whitespace-pre-line">
              {block.content}
            </p>
          </div>
        </div>
      );

    case 'example':
      return (
        <div 
          className="mb-6 bg-[#12121a] border border-[#00d4ff]/30 rounded-lg p-4 glow-border-blue opacity-0 fade-in"
          style={{ animationDelay }}
        >
          <div className="flex items-start gap-3">
            <span className="text-[#00d4ff] text-sm font-tech tracking-wider">例题</span>
            <p className="text-[#c0c0c0] leading-relaxed">
              {block.content}
            </p>
          </div>
        </div>
      );

    case 'tip':
      return (
        <div 
          className="mb-6 bg-[#00d4ff]/5 border border-[#00d4ff]/20 rounded-lg p-4 opacity-0 fade-in"
          style={{ animationDelay }}
        >
          <div className="flex items-start gap-3">
            <span className="text-[#00d4ff] text-xl">✨</span>
            <p className="text-[#a0d8ef] leading-relaxed">
              {block.content}
            </p>
          </div>
        </div>
      );

    case 'warning':
      return (
        <div 
          className="mb-6 bg-gradient-to-r from-[#ff6b6b]/10 to-transparent border-l-4 border-[#ff6b6b] p-4 rounded-r-lg opacity-0 fade-in"
          style={{ animationDelay }}
        >
          <div className="flex items-start gap-3">
            <span className="text-[#ff6b6b] text-xl">⚠️</span>
            <p className="text-[#ffb3b3] leading-relaxed">
              {block.content}
            </p>
          </div>
        </div>
      );

    case 'list':
      return (
        <ul 
          className="mb-6 space-y-3 opacity-0 fade-in"
          style={{ animationDelay }}
        >
          {block.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#c0c0c0]">
              <span className="text-[#9d4edd] mt-1.5">▸</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'table':
      return (
        <div 
          className="mb-6 overflow-x-auto opacity-0 fade-in"
          style={{ animationDelay }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr>
                {block.headers?.map((header, i) => (
                  <th key={i} className="text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows?.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="text-[#c0c0c0]">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'quiz':
      const isCorrect = selectedOption === block.answer;
      return (
        <div 
          className="mb-6 bg-[#12121a] border border-[#9d4edd]/30 rounded-lg p-6 opacity-0 fade-in"
          style={{ animationDelay }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🎯</span>
            <span className="text-[#c77dff] font-tech tracking-wide">自测题</span>
          </div>
          <p className="text-[#e8e8e8] mb-4 font-medium">{block.question}</p>
          <div className="space-y-2 mb-4">
            {block.options?.map((option, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedOption(i);
                  setShowAnswer(true);
                }}
                disabled={showAnswer}
                className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
                  showAnswer
                    ? i === block.answer
                      ? 'border-green-500/50 bg-green-500/10 text-green-400'
                      : selectedOption === i
                        ? 'border-red-500/50 bg-red-500/10 text-red-400'
                        : 'border-[#333] text-[#666]'
                    : 'border-[#333] hover:border-[#9d4edd]/50 hover:bg-[#9d4edd]/5 text-[#c0c0c0]'
                }`}
              >
                <span className="font-tech mr-2">{String.fromCharCode(65 + i)}.</span>
                {option}
              </button>
            ))}
          </div>
          {showAnswer && (
            <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-500/10' : 'bg-[#9d4edd]/10'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span>{isCorrect ? '✅' : '📖'}</span>
                <span className={`font-tech ${isCorrect ? 'text-green-400' : 'text-[#c77dff]'}`}>
                  {isCorrect ? '正确！' : '解析'}
                </span>
              </div>
              <p className="text-[#c0c0c0] text-sm">{block.explanation}</p>
              {!isCorrect && (
                <button
                  onClick={() => {
                    setShowAnswer(false);
                    setSelectedOption(null);
                  }}
                  className="mt-3 text-sm text-[#00d4ff] hover:underline"
                >
                  重新作答
                </button>
              )}
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default ContentRenderer;
