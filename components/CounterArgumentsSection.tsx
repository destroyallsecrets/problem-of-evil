import React from 'react';
import { XCircle, Scale } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const CounterArgumentsSection: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionTitle number="3" title="The Atheistic Counter-Responses" />
      <p className="text-lg text-slate-600 mb-8 ml-14 max-w-3xl leading-relaxed">
        Atheistic arguments acknowledge the nuance but challenge the strength of the theistic claims, particularly regarding real-world observations.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Logical Problem */}
        <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
                <XCircle className="text-slate-400" size={28} />
                <h3 className="font-extrabold text-xl text-slate-800">The Logical Problem</h3>
            </div>
            <div className="inline-block self-start px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                Status: Refuted
            </div>
            
            <p className="text-slate-600 mb-4 flex-grow">
                The claim that God is <strong>logically impossible</strong> is considered widely refuted by the Free Will Defense. The defense successfully proves that God and Evil are logically <em>compatible</em>.
            </p>
            
            <div className="mt-auto pt-4 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Consensus</p>
                <p className="text-slate-700 text-sm mt-1">
                    The most stringent form of atheism (impossibility) is largely abandoned in modern philosophy.
                </p>
            </div>
        </div>

        {/* Evidential Problem */}
        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 flex flex-col h-full shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <Scale className="text-blue-500" size={28} />
                <h3 className="font-extrabold text-xl text-blue-900">The Evidential Problem</h3>
            </div>
             <div className="inline-block self-start px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                Status: Dominant
            </div>

            <p className="text-blue-800 mb-4 flex-grow">
                The claim shifts: God and Evil are compatible, but the sheer <strong>amount and kind of suffering</strong> makes God’s existence <strong>highly improbable</strong>.
            </p>

            <ul className="space-y-2 mb-4 text-blue-700/80 text-sm">
                <li className="flex gap-2 items-start">
                    <span className="text-blue-500 mt-1">•</span> Focus on <strong>Gratuitous Evil</strong> (suffering with no purpose).
                </li>
                <li className="flex gap-2 items-start">
                    <span className="text-blue-500 mt-1">•</span> Argues a loving God should eliminate pointless suffering.
                </li>
            </ul>

            <div className="mt-auto pt-4 border-t border-blue-200">
                <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Consensus</p>
                <p className="text-blue-900 font-medium text-sm mt-1">
                    The persistence of suffering serves as strong probabilistic evidence against God.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};