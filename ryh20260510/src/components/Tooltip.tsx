import { useState, useRef } from 'react';

interface TooltipProps {
  term: string;
  definition: string;
  analogy: string;
  color?: 'cyan' | 'orange' | 'purple';
}

export default function Tooltip({ term, definition, analogy, color = 'cyan' }: TooltipProps) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const colorMap = {
    cyan: { text: 'text-[#00f6ff]', border: 'border-[#00f6ff33]', bg: 'rgba(0,246,255,0.05)' },
    orange: { text: 'text-[#ffb547]', border: 'border-[#ffb54733]', bg: 'rgba(255,181,71,0.05)' },
    purple: { text: 'text-[#a56dff]', border: 'border-[#a56dff33]', bg: 'rgba(165,109,255,0.05)' },
  };

  const c = colorMap[color];

  return (
    <span className="relative inline-block" ref={ref}>
      <span
        className={`${c.text} border-b border-dashed ${c.border} cursor-help transition-all hover:brightness-125`}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
      >
        {term}
      </span>
      {show && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72">
          <div className="tooltip-card text-sm">
            <div className={`font-bold ${c.text} mb-1 font-mono text-xs`}>{term}</div>
            <div className="text-gray-300 mb-2 leading-relaxed text-xs">{definition}</div>
            <div className="text-gray-400 text-xs flex items-start gap-1">
              <span>💡</span>
              <span>类比：{analogy}</span>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}
