import React from 'react';
import { Ear, Link2, MessageSquare, CheckCircle2 } from 'lucide-react';
import { workingPrinciples } from '../data';

export const WorkingStyle: React.FC = () => {
  const iconList = [
    <Ear className="w-6 h-6 text-blue-600" />,
    <Link2 className="w-6 h-6 text-rose-600" />,
    <MessageSquare className="w-6 h-6 text-amber-600" />,
    <CheckCircle2 className="w-6 h-6 text-forestGreen" />
  ];

  return (
    <section className="band band--rule-bottom bg-white" id="how-i-work">
      {/* Header */}
      <div className="band band--rule-bottom">
        <div className="band__column flex h-[180px] lg:h-[220px] items-center justify-center text-center px-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-1">
              Personal Operating Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-ink tracking-tight">
              How I Work
            </h2>
            <p className="mt-2 font-serif text-sm sm:text-base text-muted font-light max-w-lg mx-auto">
              Four fundamental disciplines that guide every customer interaction and business engagement.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Columns Grid */}
      <div className="band__column">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-rule">
          {workingPrinciples.map((item, idx) => (
            <div
              key={item.keyword}
              className={`group p-8 lg:p-10 transition-all duration-300 hover:bg-paper/80 flex flex-col justify-between ${
                idx > 0 ? 'sm:border-l sm:border-rule' : ''
              } ${idx >= 2 ? 'sm:border-t sm:border-rule lg:border-t-0' : ''}`}
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-muted">
                    {item.number}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper border border-rule group-hover:scale-110 group-hover:bg-white group-hover:shadow-xs transition-all">
                    {iconList[idx]}
                  </div>
                </div>

                {/* Keyword */}
                <h3 className="font-mono text-lg font-bold tracking-wider text-ink group-hover:text-blue-600 transition-colors">
                  {item.keyword}
                </h3>

                {/* Tagline */}
                <p className="mt-2 font-serif text-lg font-normal text-ink leading-snug">
                  {item.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 font-sans text-xs sm:text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-8 pt-4 border-t border-rule/70 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
                  Sales Habit
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
