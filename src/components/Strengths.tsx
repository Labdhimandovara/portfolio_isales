import React from 'react';
import { Target, MessageSquareText, Send, HeartHandshake, Presentation, Users, Sparkles } from 'lucide-react';
import { strengthsData } from '../data';

export const Strengths: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="h-5 w-5 text-blue-600" />,
    MessageSquareText: <MessageSquareText className="h-5 w-5 text-emerald-600" />,
    Send: <Send className="h-5 w-5 text-purple-600" />,
    HeartHandshake: <HeartHandshake className="h-5 w-5 text-rose-600" />,
    Presentation: <Presentation className="h-5 w-5 text-amber-600" />,
    Users: <Users className="h-5 w-5 text-teal-600" />,
  };

  return (
    <section className="band band--rule-bottom bg-white" id="strengths">
      {/* Section Header matching Reference */}
      <div className="band band--rule-bottom">
        <div className="band__column flex h-[180px] lg:h-[220px] items-center justify-center">
          <div className="flex items-center gap-4 px-4 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Capabilities</span>
            <span className="text-rule">•</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-ink tracking-tight">
              Sales & Business Development Strengths
            </h2>
            <span className="text-rule">•</span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Execution</span>
          </div>
        </div>
      </div>

      {/* Grid container with 1px borders */}
      <div className="band__column">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-x divide-rule">
          {strengthsData.map((item, index) => (
            <div
              key={item.number}
              className={`group relative p-8 lg:p-10 transition-colors duration-200 hover:bg-paper/80 ${
                index >= 3 ? 'lg:border-t lg:border-rule' : ''
              } ${index % 2 !== 0 ? 'md:border-l md:border-rule' : ''} ${
                index % 3 !== 0 ? 'lg:border-l lg:border-rule' : 'lg:border-l-0'
              }`}
            >
              {/* Top row: Number and Icon */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold tracking-wider text-muted/70 group-hover:text-ink transition-colors">
                  {item.number}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper border border-rule group-hover:scale-110 group-hover:bg-white group-hover:shadow-sm transition-all">
                  {iconMap[item.icon] || <Sparkles className="h-5 w-5 text-blue-600" />}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 font-serif text-2xl font-normal text-ink group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 font-sans text-sm text-muted leading-relaxed">
                {item.description}
              </p>

              {/* Micro interactive bar on hover */}
              <div className="mt-6 flex items-center gap-2">
                <div className="h-0.5 w-6 bg-rule group-hover:w-12 group-hover:bg-ink transition-all duration-300" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted/0 group-hover:text-muted/80 transition-opacity">
                  Verified Strength
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
