import React from 'react';
import { BookOpen, Palette, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { leadershipData } from '../data';

export const Leadership: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'Department Magazine Head': <BookOpen className="w-5 h-5 text-indigo-600" />,
    'Design Head': <Palette className="w-5 h-5 text-pink-600" />,
    'Cultural Head': <Sparkles className="w-5 h-5 text-amber-600" />,
    'Principal Representative': <ShieldCheck className="w-5 h-5 text-emerald-600" />,
  };

  return (
    <section className="band band--rule-bottom bg-white" id="leadership">
      {/* Header */}
      <div className="band band--rule-bottom">
        <div className="band__column flex h-[180px] lg:h-[220px] items-center justify-center text-center px-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-1">
              Positions of Responsibility
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-ink tracking-tight">
              Leadership & Stakeholder Alignment
            </h2>
            <p className="mt-2 font-serif text-sm sm:text-base text-muted font-light max-w-xl mx-auto">
              Transferable qualities of ownership, cross-functional mediation, and executive communication.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of 4 Positions */}
      <div className="band__column">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-rule">
          {leadershipData.map((item, index) => {
            return (
              <div
                key={item.role}
                className={`group p-8 lg:p-12 transition-colors duration-200 hover:bg-paper/60 ${
                  index % 2 !== 0 ? 'md:border-l md:border-rule' : ''
                } ${index >= 2 ? 'md:border-t md:border-rule' : ''}`}
              >
                {/* Top Role Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper border border-rule group-hover:bg-white group-hover:scale-105 transition-all">
                      {iconMap[item.role]}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-normal text-ink group-hover:text-blue-600 transition-colors">
                        {item.role}
                      </h3>
                      <p className="font-mono text-xs text-muted">
                        {item.period}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-muted/60">
                    0{index + 1}
                  </span>
                </div>

                {/* Transferable Sales Skill Badge */}
                <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 px-3 py-1 font-mono text-[11px] font-semibold text-blue-800">
                  <span>Transferable Strength:</span>
                  <span className="font-bold text-blue-900">{item.transferableSalesSkill}</span>
                </div>

                {/* Bullet Points */}
                <ul className="mt-5 space-y-2.5">
                  {item.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted font-sans leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-2 shrink-0 group-hover:bg-ink transition-colors" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Magazine Artifact Preview */}
                {item.role === 'Department Magazine Head' && (
                  <div className="mt-4 flex items-center gap-3 rounded-xl bg-purple-50/70 p-2.5 border border-purple-200">
                    <img
                      src="/vidayam_magazine_cover.jpg"
                      alt="VIDAYAM Magazine Cover"
                      className="w-10 h-14 object-cover object-top rounded border border-purple-300 shadow-2xs"
                    />
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-purple-900 block">Designed Official Cover</span>
                      <span className="font-serif text-xs font-semibold text-ink">VIDAYAM Tech Magazine • SIT Pune</span>
                    </div>
                  </div>
                )}

                {/* Footer Insight */}
                <div className="mt-6 pt-4 border-t border-rule/60 flex items-center justify-between font-mono text-xs text-muted">
                  <span>Stakeholders Coordinated</span>
                  <span className="font-semibold text-ink group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Writers, Faculty & Peers <ArrowRight className="w-3 h-3 text-blue-500" />
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
