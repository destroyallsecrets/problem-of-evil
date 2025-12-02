import React from 'react';
import { Header } from './components/Header';
import { TrilemmaSection } from './components/TrilemmaSection';
import { DefensesSection } from './components/DefensesSection';
import { CounterArgumentsSection } from './components/CounterArgumentsSection';
import { ConsensusSection } from './components/ConsensusSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      <main className="max-w-5xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 mb-12">
           <TrilemmaSection />
           <DefensesSection />
           <CounterArgumentsSection />
           <ConsensusSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}