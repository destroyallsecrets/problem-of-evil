import React from 'react';
import { Zap, Heart, AlertTriangle, ArrowRight } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const TrilemmaSection: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionTitle number="1" title="The Core Premise" />
      
      <p className="text-lg text-slate-600 mb-8 ml-14 max-w-3xl leading-relaxed">
        This challenge questions the logical coherence of the traditional God by pitting His defined attributes against observed reality. If all three premises below are true, a logical contradiction arises.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Premise 1 */}
        <div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
          <div className="mb-4 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
            <Zap size={24} />
          </div>
          <h3 className="font-bold text-xl text-slate-900 mb-2">P1: God is Omnipotent</h3>
          <p className="text-slate-500 leading-relaxed">
            God is <strong>all-powerful</strong> and therefore <strong>can</strong> prevent all evil and suffering.
          </p>
        </div>

        {/* Premise 2 */}
        <div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
          <div className="mb-4 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
            <Heart size={24} />
          </div>
          <h3 className="font-bold text-xl text-slate-900 mb-2">P2: God is Omnibenevolent</h3>
          <p className="text-slate-500 leading-relaxed">
            God is <strong>all-good</strong> and therefore <strong>wants</strong> to prevent all evil and suffering.
          </p>
        </div>

        {/* Premise 3 */}
        <div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-red-200 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-300"></div>
          <div className="mb-4 bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
            <AlertTriangle size={24} />
          </div>
          <h3 className="font-bold text-xl text-slate-900 mb-2">P3: Evil Exists</h3>
          <p className="text-slate-500 leading-relaxed">
            <strong>Suffering and moral wickedness</strong> are demonstrably real features of the world.
          </p>
        </div>
      </div>

      <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h4 className="text-red-900 font-bold text-lg mb-1">The Conclusion of the Trilemma</h4>
          <p className="text-red-700">
            If P1, P2, and P3 are all true, then God, as traditionally defined, <strong>cannot logically exist</strong>.
          </p>
        </div>
        <div className="hidden md:block text-red-300">
           <ArrowRight size={32} />
        </div>
      </div>
    </section>
  );
};