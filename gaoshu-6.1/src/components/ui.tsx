import type { ReactNode } from 'react';

// -- Section container --
export function SectionBlock({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 mb-24 md:mb-32">
      {children}
    </section>
  );
}

// -- Section heading --
export function SectionHeading({
  icon,
  title,
  subtitle,
  label,
}: {
  icon?: string;
  title: string;
  subtitle?: string;
  label?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      {label && (
        <p className="mb-3 font-mono text-[11px] tracking-[0.3em] uppercase text-cyan-dim">
          {label}
        </p>
      )}
      <h2 className="flex items-center gap-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-silver-100"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {icon && <span className="text-cyan-glow text-lg md:text-xl">{icon}</span>}
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-silver-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-20 bg-gradient-to-r from-cyan-glow/60 to-transparent" />
    </div>
  );
}

// -- Sub section heading --
export function SubHeading({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="scroll-mt-8 mt-16 mb-6 text-lg md:text-xl font-semibold text-silver-100 tracking-tight flex items-center gap-3"
      style={{ fontFamily: 'var(--font-display)' }}
    >
      <span className="inline-block w-1 h-5 rounded-full bg-cyan-glow/70" />
      {children}
    </h3>
  );
}

// -- Info card / callout --
export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: 'info' | 'warning' | 'danger' | 'success';
  title?: string;
  children: ReactNode;
}) {
  const colors = {
    info: {
      border: 'border-cyan-glow/20',
      bg: 'bg-cyan-glow/[0.03]',
      icon: '◆',
      iconColor: 'text-cyan-glow',
      titleColor: 'text-cyan-glow',
    },
    warning: {
      border: 'border-warning/20',
      bg: 'bg-warning/[0.03]',
      icon: '⚠',
      iconColor: 'text-warning',
      titleColor: 'text-warning',
    },
    danger: {
      border: 'border-danger/20',
      bg: 'bg-danger/[0.03]',
      icon: '✦',
      iconColor: 'text-danger',
      titleColor: 'text-danger',
    },
    success: {
      border: 'border-success/20',
      bg: 'bg-success/[0.03]',
      icon: '✓',
      iconColor: 'text-success',
      titleColor: 'text-success',
    },
  };

  const c = colors[type];

  return (
    <div className={`my-6 rounded-xl border ${c.border} ${c.bg} p-5 md:p-6`}>
      {title && (
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs ${c.iconColor}`}>{c.icon}</span>
          <span className={`font-mono text-xs font-semibold tracking-wider uppercase ${c.titleColor}`}>
            {title}
          </span>
        </div>
      )}
      <div className="text-sm leading-relaxed text-silver-200">{children}</div>
    </div>
  );
}

// -- Formula block --
export function FormulaBlock({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-cyan-border bg-deep/60 p-5 md:p-6 overflow-x-auto">
      {children}
    </div>
  );
}

// -- Stat card for overview --
export function StatCard({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 text-center ${
        accent
          ? 'border-cyan-glow/25 bg-cyan-glow/[0.04]'
          : 'border-cyan-border bg-deep/40'
      }`}
    >
      <p
        className={`text-2xl md:text-3xl font-bold tracking-tight ${
          accent ? 'text-cyan-glow' : 'text-silver-100'
        }`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {value}
      </p>
      <p className="mt-1 text-xs text-silver-400 tracking-wide">{label}</p>
    </div>
  );
}

// -- Tag badge --
export function Tag({ children, color = 'cyan' }: { children: ReactNode; color?: 'cyan' | 'warning' | 'danger' | 'success' }) {
  const colorMap = {
    cyan: 'bg-cyan-glow/10 text-cyan-glow border-cyan-glow/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    danger: 'bg-danger/10 text-danger border-danger/20',
    success: 'bg-success/10 text-success border-success/20',
  };
  return (
    <span className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase ${colorMap[color]}`}>
      {children}
    </span>
  );
}

// -- Step indicator --
export function Step({ number, children }: { number: number; children: ReactNode }) {
  return (
    <div className="flex gap-4 my-4">
      <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-cyan-glow/30 bg-cyan-glow/10 font-mono text-xs font-bold text-cyan-glow">
        {number}
      </div>
      <div className="text-sm leading-relaxed text-silver-200 pt-0.5">{children}</div>
    </div>
  );
}

// -- Progress bar --
export function ProgressBar({ value, max, label, color = 'cyan' }: { value: number; max: number; label: string; color?: string }) {
  const percent = (value / max) * 100;
  const colorMap: Record<string, string> = {
    cyan: 'bg-cyan-glow',
    warning: 'bg-warning',
    danger: 'bg-danger',
    success: 'bg-success',
  };
  return (
    <div className="my-3">
      <div className="flex justify-between mb-1.5">
        <span className="text-xs text-silver-300">{label}</span>
        <span className="font-mono text-xs text-silver-400">{value}-{max}分</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-mid overflow-hidden">
        <div
          className={`h-full rounded-full ${colorMap[color] || colorMap.cyan} transition-all duration-700`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
