import React from 'react';

interface SectionTitleProps {
  number: string;
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ number, title }) => {
  return (
    <div className="relative mb-8 pb-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-md">
          {number}
        </span>
        {title}
      </h2>
      <div className="absolute bottom-0 left-14 h-1 w-20 rounded-full bg-blue-600/30"></div>
    </div>
  );
};