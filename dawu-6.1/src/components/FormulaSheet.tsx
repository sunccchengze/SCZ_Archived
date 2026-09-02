import React, { useState } from 'react';
import { formulaSheet } from '../data/chapters';
import MathRenderer from './MathRenderer';

interface FormulaSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormulaSheet: React.FC<FormulaSheetProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<keyof typeof formulaSheet>('relativity');

  const tabs = [
    { key: 'relativity' as const, label: '相对论', icon: '⚡' },
    { key: 'electrostatics' as const, label: '静电场', icon: '⚛️' },
    { key: 'magnetism' as const, label: '磁场', icon: '🧲' },
    { key: 'induction' as const, label: '电磁感应', icon: '🔄' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#0a0a0f] border border-[#9d4edd]/30 rounded-2xl overflow-hidden glow-border-purple">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#9d4edd]/20">
          <h2 className="font-display text-xl text-[#e8e8e8] tracking-wider flex items-center gap-3">
            <span className="text-2xl">📋</span>
            核心公式速查表
          </h2>
          <button
            onClick={onClose}
            className="text-[#808080] hover:text-[#e8e8e8] transition-colors text-2xl"
          >
            ×
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#333]">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                flex-1 px-4 py-3 text-sm font-tech flex items-center justify-center gap-2 transition-all
                ${activeTab === tab.key 
                  ? 'text-[#00d4ff] border-b-2 border-[#00d4ff] bg-[#00d4ff]/5' 
                  : 'text-[#808080] hover:text-[#c0c0c0] hover:bg-[#1a1a25]/50'
                }
              `}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-140px)]">
          <div className="grid gap-4 md:grid-cols-2">
            {formulaSheet[activeTab].map((formula, index) => (
              <div
                key={index}
                className="bg-[#12121a] border border-[#333] rounded-lg p-4 hover:border-[#9d4edd]/50 transition-all duration-300 card-hover"
              >
                <div className="text-[#9d4edd] text-sm font-tech mb-3">
                  {formula.name}
                </div>
                <div className="text-center">
                  <MathRenderer math={formula.formula} display={true} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaSheet;
