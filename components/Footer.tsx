import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm mb-2">
            Analysis compiled from contemporary philosophical and theological arguments.
        </p>
        <p className="text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} The Problem of Evil Analysis Project
        </p>
      </div>
    </footer>
  );
};