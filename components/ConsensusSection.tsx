import React from 'react';
import { Brain, HelpCircle } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const ConsensusSection: React.FC = () => {
  return (
    <section className="mb-12">
      <SectionTitle number="4" title="Final Consensus" />
      
      <div className="bg-gradient-to-br from-indigo-50 to-white p-8 md:p-10 rounded-3xl border border-indigo-100 shadow-xl relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                
                <div className="flex-1">
                    <h3 className="text-3xl font-extrabold text-indigo-900 mb-4 flex items-center gap-3">
                        <Brain className="text-indigo-500" />
                        Skeptical Theism
                    </h3>
                    <p className="text-lg text-indigo-800 mb-6 font-medium">
                        The debate is resolved on logic, but unsettled on probability, leading to a position of <span className="underline decoration-indigo-300 decoration-2 underline-offset-2">epistemic humility</span>.
                    </p>

                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm space-y-4">
                        <div className="flex gap-4">
                            <div className="mt-1 text-indigo-400">
                                <HelpCircle size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Logic vs. Observation</h4>
                                <p className="text-slate-600 text-sm">
                                    The Free Will Defense proves God is <strong>logically possible</strong>, but the Evidential Problem shows God is <strong>empirically improbable</strong>.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1 text-indigo-400">
                                <HelpCircle size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">The Human Limitation</h4>
                                <p className="text-slate-600 text-sm">
                                    Human beings are <strong>finite</strong> and cannot comprehend the full "butterfly effect" of history. We cannot possibly know the morally sufficient reasons an infinite God might have for permitting specific evils.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/3 w-full bg-indigo-900 text-white p-6 rounded-xl flex flex-col justify-center h-full min-h-[200px] shadow-lg">
                    <h4 className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-3">The Conclusion</h4>
                    <p className="text-lg font-light leading-relaxed">
                        It is intellectually <strong>arrogant</strong> for a human to definitively assert that a piece of suffering is truly "pointless."
                    </p>
                    <div className="w-10 h-1 bg-indigo-500 my-4"></div>
                    <p className="font-semibold">
                        This forces the debate away from absolute proof and toward <span className="text-indigo-300">Unproven Possibility</span>.
                    </p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};