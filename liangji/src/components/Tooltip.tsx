import React, { useState } from 'react';

interface TooltipProps {
  term: string;
  explanation: string;
  children?: React.ReactNode;
}

export default function Tooltip({ term, explanation, children }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-block border-b border-dashed border-peach cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={(e) => { e.preventDefault(); setShow(!show); }}
    >
      {children || term}
      {show && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-charcoal text-cream px-4 py-3 rounded-xl text-sm leading-relaxed z-50 shadow-xl"
          style={{
            fontFamily: "'Lora', serif",
            width: 'max-content',
            maxWidth: 'min(380px, 85vw)',
            minWidth: '200px',
          }}
        >
          {explanation}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-charcoal" />
        </span>
      )}
    </span>
  );
}
