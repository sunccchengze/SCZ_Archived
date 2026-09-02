import React from 'react';
import katex from 'katex';

interface MathRendererProps {
  math: string;
  display?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ 
  math, 
  display = false,
  className = ''
}) => {
  const html = React.useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: display,
        throwOnError: false,
        strict: false,
        trust: true,
        macros: {
          "\\boxed": "\\fbox{#1}"
        }
      });
    } catch (e) {
      return math;
    }
  }, [math, display]);

  return (
    <span 
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MathRenderer;
