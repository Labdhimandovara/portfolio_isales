import React from 'react';
import { Trophy, CheckCircle } from 'lucide-react';
import { achievementsData } from '../data';

export const Achievements: React.FC = () => {
  return (
    <section className="band band--rule-bottom bg-[#fafafa]" id="achievements">
      {/* Header */}
      <div className="band band--rule-bottom">
        <div className="band__column flex h-[180px] lg:h-[220px] items-center justify-center text-center px-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-1">
              Competitive Evaluations & Pitching
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-ink tracking-tight">
              Competitive Milestones & Pitching
            </h2>
            <p className="mt-2 font-serif text-sm sm:text-base text-muted font-light max-w-xl mx-auto">
              Selected through high-volume competitive applicant pools based on presentation clarity and problem solving.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of 3 Achievements */}
      <div className="band__column">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-rule">
          {achievementsData.map((item) => {
            const isWinner = item.badge === 'FINALIST' || item.badge.includes('FINALIST');

            return (
              <div
                key={item.title}
                className="group relative p-8 lg:p-10 bg-white transition-colors duration-200 hover:bg-paper/40 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge and Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        isWinner
                          ? 'bg-amber-50 text-amber-900 border-amber-300'
                          : 'bg-paper text-ink border-rule'
                      }`}
                    >
                      <Trophy className="w-3.5 h-3.5 text-amber-600" />
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {item.date}
                    </span>
                  </div>

                  {/* Title & Context */}
                  <h3 className="font-serif text-2xl font-normal text-ink group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted font-medium">
                    {item.context}
                  </p>

                  {/* Transferable Strengths Strip */}
                  <div className="mt-4 rounded-lg bg-paper p-3 border border-rule/70">
                    <span className="block font-mono text-[10px] uppercase font-bold text-muted mb-1">
                      Strengths Evaluated
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-medium text-ink">
                      {item.transferableStrengths}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 font-sans text-xs sm:text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-6 pt-4 border-t border-rule flex items-center justify-between font-mono text-xs">
                  <span className="text-muted">Pitch Evaluation:</span>
                  <span className="text-forestGreen font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Rigorous Selection
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
