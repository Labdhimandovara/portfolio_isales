import React from 'react';
import { Trophy, Lightbulb, Users, CheckCircle, ArrowRight, Target } from 'lucide-react';

export const SocialHouseFeature: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'IDEA',
      desc: 'Identified student skill-development needs and conceptualized an engaging, interactive event model.',
      icon: <Lightbulb className="w-5 h-5 text-amber-600" />
    },
    {
      step: '02',
      title: 'PITCH',
      desc: 'Crafted the narrative, articulated value ROI, and presented live to win the "Best Pitch" distinction.',
      icon: <Trophy className="w-5 h-5 text-emerald-600" />
    },
    {
      step: '03',
      title: 'TEAM COLLABORATION',
      desc: 'Aligned cross-functional student peers, synchronized timelines, and divided operational workstreams.',
      icon: <Users className="w-5 h-5 text-blue-600" />
    },
    {
      step: '04',
      title: 'EVENT EXECUTION',
      desc: 'Drove outreach campaigns, managed participant attendance, and successfully coordinated on-ground operations.',
      icon: <CheckCircle className="w-5 h-5 text-purple-600" />
    }
  ];

  return (
    <section className="band band--rule-bottom bg-[#fafafa]" id="featured-case">
      {/* Header */}
      <div className="band band--rule-bottom">
        <div className="band__column flex h-[160px] lg:h-[200px] items-center justify-between px-6 lg:px-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-1">
              Featured Case Study • Social House Learning
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-ink tracking-tight">
              From Idea to Execution
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-amber-900 font-mono text-xs font-semibold shadow-xs">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>Awarded: Best Pitch</span>
          </div>
        </div>
      </div>

      {/* Main Content Showcase */}
      <div className="band__column py-12 lg:py-16 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative & Real Certificate Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-md bg-white border border-rule px-3 py-1 font-mono text-[11px] font-bold text-ink uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-amber-600" />
              Direct Transferable Sales Skill
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal leading-snug">
              Translating raw concepts into high-converting presentations and seamless delivery.
            </h3>

            <p className="font-sans text-sm text-neutral-600 leading-relaxed">
              "Developed and presented an event concept with the team, translating an idea into a structured proposal and winning Best Pitch."
            </p>

            {/* Official Certificate Box */}
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  <span>Official Certificate of Merit</span>
                </div>
                <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full border border-emerald-300">
                  Runner-up • "Pitch Perfect"
                </span>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-amber-200/90 bg-white shadow-xs group">
                <img
                  src="/shl_pitch_perfect_certificate.png"
                  alt="Social House Learning Pitch Perfect Certificate"
                  className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              <p className="font-sans text-xs text-amber-950/80 leading-relaxed">
                Awarded for outstanding performance in the "Pitch Perfect" experiential task—demonstrating strategic thinking, comprehensive event planning, budgeting, and effective pitching to a panel of executive judges.
              </p>
            </div>
          </div>

          {/* Right Visual Workflow Steps */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="group relative rounded-2xl border border-rule bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper border border-rule group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-muted">
                      STEP {s.step}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-normal text-ink group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h4>

                  <p className="mt-2 font-sans text-xs text-neutral-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Linear Step Progression Summary Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-rule bg-white px-5 py-3 font-mono text-xs shadow-2xs">
              <span className="font-bold text-ink">Journey Path:</span>
              <div className="flex items-center gap-2 text-muted">
                <span className="text-ink font-semibold">IDEA</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-amber-600 font-bold">PITCH (WON)</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-ink font-semibold">COLLABORATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-forestGreen font-semibold">EXECUTION</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
