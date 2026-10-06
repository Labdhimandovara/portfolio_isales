import React from 'react';
import { Megaphone, Building2 } from 'lucide-react';
import { metricsData } from '../data';

export const OutreachMetrics: React.FC = () => {
  return (
    <section className="band band--rule-bottom bg-white" id="outreach">
      {/* Section Header */}
      <div className="band band--rule-bottom">
        <div className="band__column flex h-[200px] lg:h-[230px] items-center justify-center text-center px-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">
              Verified Outreach & Impact Metrics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-light text-ink tracking-tight">
              Where Communication Meets Execution
            </h2>
            <p className="mt-2 font-serif text-base sm:text-lg text-muted font-light max-w-xl mx-auto">
              Real initiatives, structured audience interactions, and accountable follow-through.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Verified Metrics */}
      <div className="band__column">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 divide-rule border-b border-rule">
          {metricsData.map((item, index) => {
            const isLeft = index % 3 === 0;
            const isTopRow = index < 3;

            return (
              <div
                key={item.label}
                className={`group relative p-8 lg:p-10 transition-colors duration-200 hover:bg-paper/80 ${
                  !isLeft ? 'lg:border-l lg:border-rule' : ''
                } ${index % 2 !== 0 ? 'sm:border-l sm:border-rule lg:border-l-0' : ''} ${
                  !isTopRow ? 'lg:border-t lg:border-rule' : ''
                } ${index >= 2 ? 'sm:border-t sm:border-rule lg:border-t-0' : ''}`}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-serif text-5xl sm:text-6xl font-light tracking-tight text-ink group-hover:text-blue-600 transition-colors">
                    {item.stat}
                  </span>
                  <span className="font-mono text-xs text-muted/60">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-mono text-sm uppercase font-bold tracking-wider text-ink mt-3">
                  {item.label}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                  {item.subtext}
                </p>

                <div className="mt-6 flex items-center gap-1.5 text-forestGreen font-mono text-[11px] font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Resume Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-dive Outreach Breakdown */}
      <div className="band__column py-12 px-6 lg:px-12 bg-[#fdfdfd]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AIESEC Outreach Case */}
          <div className="rounded-2xl border border-rule bg-white p-7 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <Megaphone className="w-5 h-5 text-rose-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                AIESEC Marketing
              </span>
            </div>
            <h4 className="font-serif text-2xl font-normal text-ink">
              Multi-Channel Outreach & 200+ Feedback Analysis
            </h4>
            <p className="mt-2 font-sans text-xs sm:text-sm text-muted leading-relaxed">
              Spearheaded 3+ targeted campaigns to communicate leadership opportunities. Systematically collected and examined 200+ participant feedback submissions to eliminate communication bottlenecks and tailor future touchpoints.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-muted">
              <span className="bg-paper px-2.5 py-1 rounded border border-rule">Campaign Segmentation</span>
              <span className="bg-paper px-2.5 py-1 rounded border border-rule">Feedback Synthesis</span>
              <span className="bg-paper px-2.5 py-1 rounded border border-rule">Participant Journey</span>
            </div>
          </div>

          {/* Akshar Bharati NGO Case */}
          <div className="rounded-2xl border border-rule bg-white p-7 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-teal-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                Akshar Bharati NGO
              </span>
            </div>
            <h4 className="font-serif text-2xl font-normal text-ink">
              10+ School Engagements & Corporate Partnerships
            </h4>
            <p className="mt-2 font-sans text-xs sm:text-sm text-muted leading-relaxed">
              Led on-ground interactive sessions across 10+ schools to foster learning curiosity. Partnered on 3+ fundraising campaigns, pitching corporate CSR teams to build partnerships that sustained school infrastructure and learning kits.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-muted">
              <span className="bg-paper px-2.5 py-1 rounded border border-rule">Corporate Pitching</span>
              <span className="bg-paper px-2.5 py-1 rounded border border-rule">Stakeholder Empathy</span>
              <span className="bg-paper px-2.5 py-1 rounded border border-rule">Donor Retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
