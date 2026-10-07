import React from 'react';
import { GraduationCap, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';
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
      <div className="band__column py-12 lg:py-16 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 font-mono text-[11px] uppercase tracking-wider text-blue-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Evidence-Based Narrative</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-normal leading-snug text-ink">
              “From student outreach and marketing initiatives to event coordination and team leadership, I have consistently worked at the intersection of communication, people and execution.”
            </h3>

            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
              In fast-paced client-facing environments, the difference between an ordinary conversation and a qualified opportunity comes down to two things: authentic listening and dependable follow-through.
            </p>

            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
              Whether analyzing 200+ feedback responses at AIESEC, coordinating multi-stakeholder publications as Magazine Head, pitching to judges among 1,000+ teams, or driving school visits and corporate fundraising at Akshar Bharati NGO—my focus has always been on understanding people's needs and translating them into tangible outcomes.
            </p>

            {/* Core Competencies Tag Cloud with Vibrant Accents */}
            <div className="pt-5 border-t border-rule space-y-3">
              <span className="block font-mono text-xs uppercase tracking-wider text-muted font-bold">
                Transferable Inside Sales & BD Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Active Listening', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
                  { name: 'Discovery & Qualification', color: 'bg-blue-50 text-blue-800 border-blue-200' },
                  { name: 'Multi-Stakeholder Coordination', color: 'bg-purple-50 text-purple-800 border-purple-200' },
                  { name: 'Live Pitching & Presentation', color: 'bg-amber-50 text-amber-800 border-amber-200' },
                  { name: 'Objection Navigation', color: 'bg-rose-50 text-rose-800 border-rose-200' },
                  { name: 'Feedback & Trend Analysis', color: 'bg-teal-50 text-teal-800 border-teal-200' },
                  { name: 'Technical Empathy (SaaS & AI)', color: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
                  { name: 'Dependable Follow-Through', color: 'bg-sky-50 text-sky-800 border-sky-200' }
                ].map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-lg border px-3 py-1 font-mono text-xs font-medium transition-transform hover:scale-105 ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Practical Sales Working Method */}
            <div className="rounded-2xl border border-rule bg-paper/50 p-5 mt-6 space-y-3">
              <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase">
                <UserCheck className="w-4 h-4 text-blue-600" />
                <span>The Inside Sales Mindset</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                "Understanding the architecture of an AI or SaaS product lets me speak with credibility. Understanding the customer's friction point lets me guide the conversation toward real solutions."
              </p>
            </div>
          </div>

          {/* Right Visual Column: Portrait + Education */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real Editorial Photo Card */}
            <div className="relative rounded-2xl border-2 border-rule bg-white p-3 shadow-md overflow-hidden group">
              <div className="relative h-[340px] sm:h-[380px] w-full overflow-hidden rounded-xl bg-neutral-100">
                <img
                  src="/labdhi_portrait_green.jpg"
                  alt="Labdhi Mandovara"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 font-mono text-[10px] uppercase font-bold text-white border border-white/30 mb-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-lime" />
                    <span>Tech Inside Sales Candidate</span>
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-white tracking-tight">
                    Labdhi Mandovara
                  </h4>
                  <p className="font-sans text-xs text-white/90 mt-0.5">
                    B.Tech in Information Technology • Symbiosis Pune
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Academic Rigor Card */}
            <div className="rounded-2xl border border-rule bg-[#fafafa] p-6 sm:p-7 shadow-xs space-y-5">
              <div className="flex items-center gap-2 pb-4 border-b border-rule">
                <GraduationCap className="w-5 h-5 text-ink" />
                <h4 className="font-serif text-xl font-normal text-ink">
                  Academic Background
                </h4>
              </div>

              <div className="space-y-4">
                {personalData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-5 border-l-2 border-rule">
                    <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-ink" />
                    <div className="flex items-baseline justify-between gap-2">
                      <h5 className="font-serif text-sm sm:text-base font-medium text-ink">
                        {edu.degree}
                      </h5>
                      <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
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

              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Technical Fluency Edge</span>
                </div>
                <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                  IT coursework enables swift onboarding onto complex SaaS products, CRM workflows (HubSpot/Salesforce), and technical discovery conversations.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
