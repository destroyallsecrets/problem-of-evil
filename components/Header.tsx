import React from 'react';
import { BookOpen } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white pt-16 pb-24 px-6 md:px-12 rounded-b-[3rem] shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-blue-900/50 px-4 py-1.5 rounded-full border border-blue-700/50 mb-6 backdrop-blur-sm">
            <BookOpen size={16} className="text-blue-300" />
            <span className="text-xs font-semibold tracking-wide uppercase text-blue-100">Theological Analysis</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          The Problem of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Evil</span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed md:mx-0 mx-auto">
          From Premise to Consensus: A deep dive into the logical coherence of the traditional definition of God compared against the reality of suffering.
        </p>
      </div>
    </header>
  );
};