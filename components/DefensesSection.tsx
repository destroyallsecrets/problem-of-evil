import React from 'react';
import { UserCheck, Mountain } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const DefensesSection: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionTitle number="2" title="The Theistic Responses" />
      <p className="text-lg text-slate-600 mb-8 ml-14 max-w-3xl leading-relaxed">
        Theistic responses, known as defenses or theodicies, attempt to show that the existence of God and Evil are compatible by proposing a morally sufficient reason for God to permit suffering.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Free Will Defense */}
        <div className="bg-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-500 shadow-sm relative">
            <div className="absolute top-6 right-6 text-emerald-200">
                <UserCheck size={48} opacity={0.5} />
            </div>
            <h3 className="font-extrabold text-2xl text-emerald-900 mb-1">The Free Will Defense</h3>
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600 mb-6">Target: Moral Evil</p>
            
            <div className="space-y-4">
                <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0"></div>
                    <p className="text-emerald-800 leading-relaxed">
                        <strong className="block text-emerald-900 mb-1">Core Argument</strong>
                        Genuine human freedom, which allows for true love and moral choice, necessarily includes the <strong>capacity for evil</strong>.
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0"></div>
                    <p className="text-emerald-800 leading-relaxed">
                         <strong className="block text-emerald-900 mb-1">Logical Limit</strong>
                         It is <strong>logically impossible</strong> for God to grant genuine free will while simultaneously guaranteeing that the creature only chooses good.
                    </p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg mt-2">
                    <p className="text-emerald-900 font-medium italic">
                        "Eliminating evil would require eliminating the greater good of freedom itself."
                    </p>
                </div>
            </div>
        </div>

        {/* Soul-Making Theodicy */}
        <div className="bg-amber-50 rounded-2xl p-8 border-l-4 border-amber-500 shadow-sm relative">
            <div className="absolute top-6 right-6 text-amber-200">
                <Mountain size={48} opacity={0.5} />
            </div>
            <h3 className="font-extrabold text-2xl text-amber-900 mb-1">Soul-Making Theodicy</h3>
            <p className="text-sm font-bold uppercase tracking-wider text-amber-600 mb-6">Target: Natural Evil</p>
            
            <div className="space-y-4">
                <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
                    <p className="text-amber-800 leading-relaxed">
                        <strong className="block text-amber-900 mb-1">Necessity of Challenge</strong>
                        The world is designed as a "vale of soul-making," a place where challenges are required for moral growth.
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
                    <p className="text-amber-800 leading-relaxed">
                         <strong className="block text-amber-900 mb-1">Virtue Development</strong>
                         Natural evil forces humans to develop virtues like <strong>courage, compassion, and perseverance</strong>.
                    </p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg mt-2">
                    <p className="text-amber-900 font-medium italic">
                        "A safe, painless paradise would result in morally static, immature beings."
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};