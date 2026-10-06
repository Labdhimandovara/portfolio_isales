import React from 'react';
import { GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data';

export const About: React.FC = () => {
  return (
    <section className="band band--rule-bottom bg-white" id="about">
      {/* Header */}
      <div className="band band--rule-bottom">
        <div className="band__column flex h-[180px] lg:h-[220px] items-center justify-center text-center px-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-1">
              Background & Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-ink tracking-tight">
              About Labdhi
            </h2>
            <p className="mt-2 font-serif text-sm sm:text-base text-muted font-light max-w-lg mx-auto">
              Connecting people, ideas, and execution across campus, corporate drives, and outreach cohorts.
            </p>
          </div>
        </div>
      </div>

      {/* Main About Layout */}
      <div className="band__column py-12 lg:py-16 px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-paper px-3.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Evidence-Based Narrative</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-light leading-snug text-ink">
              "From student outreach and marketing initiatives to event coordination and team leadership, I have consistently worked at the intersection of communication, people and execution."
            </h3>

            <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
              In fast-paced client-facing environments, the difference between an ordinary conversation and a qualified opportunity comes down to two things: authentic listening and dependable follow-through.
            </p>

            <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
              Whether analyzing 200+ feedback responses at AIESEC, coordinating multi-stakeholder publications as Magazine Head, pitching to judges among 1,000+ teams, or driving school visits and corporate fundraising at Akshar Bharati NGO—my focus has always been on understanding people's needs and translating them into tangible outcomes.
            </p>

            {/* Core Competencies Tag Cloud */}
            <div className="pt-4 border-t border-rule">
              <span className="block font-mono text-xs uppercase tracking-wider text-muted mb-3 font-semibold">
                Transferable Sales Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Active Listening',
                  'Discovery & Qualification',
                  'Multi-Stakeholder Coordination',
                  'Live Pitching',
                  'Objection Navigation',
                  'Feedback Analysis',
                  'Technical Empathy (SaaS & Tech)',
                  'Dependable Follow-Through'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-rule bg-paper px-3 py-1 font-mono text-xs text-ink/80 hover:bg-white hover:border-ink transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Academic Rigor Card */}
          <div className="lg:col-span-5 rounded-2xl border border-rule bg-[#fafafa] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-rule">
              <GraduationCap className="w-5 h-5 text-ink" />
              <h4 className="font-serif text-xl font-normal text-ink">
                Academic Background & Details
              </h4>
            </div>

            <div className="space-y-5">
              {personalData.education.map((edu, idx) => (
                <div key={idx} className="relative pl-5 border-l-2 border-rule">
                  <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-ink" />
                  <div className="flex items-baseline justify-between">
                    <h5 className="font-serif text-base font-medium text-ink">
                      {edu.degree}
                    </h5>
                    <span className="font-mono text-xs font-bold text-forestGreen bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {edu.score}
                    </span>
                  </div>
                  <p className="mt-0.5 font-sans text-xs text-muted">
                    {edu.institute}
                  </p>
                  <span className="mt-1 block font-mono text-[11px] text-muted/70">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-rule/80 bg-white p-4">
              <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase mb-1">
                <CheckCircle2 className="w-4 h-4 text-forestGreen" />
                Technical Fluency Edge
              </div>
              <p className="font-sans text-xs text-muted leading-relaxed">
                Her IT coursework provides strong technical foundations—enabling her to quickly master SaaS software stacks, CRM tooling (HubSpot, Salesforce), and speak fluently with engineering stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
