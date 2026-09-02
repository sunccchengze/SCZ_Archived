import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useInView } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id={id} ref={ref} className={`relative z-10 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionTitle({ emoji, title, subtitle }: { emoji: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <span className="text-4xl sm:text-5xl mb-4 block">{emoji}</span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
