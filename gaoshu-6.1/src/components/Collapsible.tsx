import { useState, type ReactNode } from 'react';

interface CollapsibleProps {
  title: string;
  tag?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function Collapsible({ title, tag, children, defaultOpen = false }: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="my-5 rounded-xl border border-cyan-border/60 overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left bg-deep/60 hover:bg-deep/80 transition-colors"
      >
        <span
          className={`inline-block font-mono text-cyan-glow text-xs transition-transform duration-200 ${
            open ? 'rotate-90' : ''
          }`}
        >
          ▸
        </span>
        {tag && (
          <span className="rounded bg-cyan-glow/10 px-2 py-0.5 font-mono text-[10px] tracking-widest text-cyan-dim uppercase">
            {tag}
          </span>
        )}
        <span className="text-sm font-medium text-silver-100">{title}</span>
      </button>
      {open && (
        <div className="animate-fade-in border-t border-cyan-border/30 bg-abyss/40 px-5 py-5">
          {children}
        </div>
      )}
    </div>
  );
}
