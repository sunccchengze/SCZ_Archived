import { useCountUp } from '../hooks/useCountUp';

interface CountUpNumberProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function CountUpNumber({ end, duration = 2000, decimals = 0, suffix = '', prefix = '', className = '' }: CountUpNumberProps) {
  const { count, ref } = useCountUp(end, duration, true, decimals);
  return (
    <span ref={ref} className={className}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </span>
  );
}
