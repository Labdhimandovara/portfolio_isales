import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Send, MessageSquare, Presentation, Briefcase } from 'lucide-react';
import { personalData } from '../data';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="band band--rule-bottom relative overflow-hidden bg-white pt-6 pb-14 lg:pt-10 lg:pb-18" id="top">
      <div className="band__column px-4 sm:px-6 lg:px-12">
        
        {/* Top 2-Column Split Hero Stage: Typography + Visual Focal Point Above the Fold */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-emerald-900">
                Open to Tech Inside Sales & Business Development
              </span>
            </motion.div>

            {/* Small Eyebrow */}
            <div className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted mb-2">
              Tech Inside Sales • Business Development
            </div>

            {/* Main Headline with Highlight Words */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-light leading-[1.15] tracking-[-0.03em] text-ink">
              <span className="block">Hi, I’m {personalData.name.split(' ')[0]}.</span>
              
              <span className="block mt-1">
                I understand{' '}
                <span className="inline-block rounded-xl bg-lime px-3 py-0.5 font-serif text-ink border border-neutral-300/40 shadow-2xs">
                  the product.
                </span>
              </span>

              <span className="block mt-1">
                I know how to{' '}
                <span className="inline-block rounded-xl bg-sky px-3 py-0.5 font-serif text-ink border border-neutral-300/40 shadow-2xs">
                  start the conversation.
                </span>
              </span>
            </h1>

            {/* Hand-drawn Underline SVG */}
            <div className="relative mt-2 mb-3 w-[220px] sm:w-[300px]">
              <img
                src="/underline.svg"
                alt=""
                className="w-full object-contain select-none pointer-events-none"
              />
            </div>

            {/* Concise Supporting Text */}
            <p className="font-serif text-sm sm:text-base lg:text-lg font-light text-neutral-600 leading-relaxed max-w-xl">
              I come from a technical background, with experience in outreach, pitching, events and student engagement. I’m interested in Tech Inside Sales and Business Development, where understanding the product is just as important as understanding the person you’re speaking with.
            </p>

            {/* Small Capability Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-[11px] sm:text-xs text-ink/90">
              <span className="rounded-md bg-paper px-2.5 py-1 border border-rule font-medium">Technical Understanding</span>
              <span className="text-muted/40">•</span>
              <span className="rounded-md bg-paper px-2.5 py-1 border border-rule font-medium">Outreach</span>
              <span className="text-muted/40">•</span>
              <span className="rounded-md bg-paper px-2.5 py-1 border border-rule font-medium">Pitching</span>
              <span className="text-muted/40">•</span>
              <span className="rounded-md bg-paper px-2.5 py-1 border border-rule font-medium">Client Communication</span>
            </div>

            {/* CTA Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="h-4 w-4 text-lime" />
              </a>
              <a
                href="#experience"
                className="flex items-center gap-2 rounded-full border border-rule bg-white px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink shadow-sm hover:bg-paper transition-all hover:scale-105 active:scale-95"
              >
                <span>View Experience</span>
                <ArrowDown className="h-4 w-4 text-muted" />
              </a>
              {onOpenResume && (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-blue-700 hover:bg-blue-100 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: VISUAL SHOWCASE STAGE */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl border-2 border-ink bg-white p-5 sm:p-6 shadow-xl space-y-4">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-rule pb-3">
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  <MessageSquare className="w-3 h-3 text-blue-600" />
                  The Sales Perspective
                </span>
                <span className="font-mono text-[11px] font-bold text-ink">
                  CORE FOCUS
                </span>
              </div>

              {/* Labdhi Real Photo Badge */}
              <div className="flex items-center gap-3.5 bg-paper/60 p-3 rounded-xl border border-rule/70">
                <img
                  src="/labdhi_formal_blazer.png"
                  alt="Labdhi Mandovara"
                  className="w-14 h-14 rounded-xl object-cover object-top border-2 border-white shadow-sm ring-1 ring-neutral-300 shrink-0"
                />
                <div className="min-w-0">
                  <div className="inline-block rounded-md bg-warmYellow/80 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-ink">
                    Inside Sales & BD
                  </div>
                  <h3 className="font-serif text-base font-semibold text-ink truncate mt-0.5">
                    Labdhi Mandovara
                  </h3>
                  <p className="font-sans text-[11px] text-muted truncate">
                    Symbiosis Pune • B.Tech IT (8.4 CGPA)
                  </p>
                </div>
              </div>

              {/* Main Philosophy Quote */}
              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-normal text-ink leading-snug">
                  “I understand technology, but I also enjoy the people side of it.”
                </h4>
                <p className="mt-2 font-sans text-xs text-neutral-600 leading-relaxed">
                  Hands-on background with AI voice agents (Edysor AI), software and technical communication. Ready to qualify leads, present products, and run customer outreach.
                </p>
              </div>

              {/* Micro Capability Highlights */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-rule text-center">
                <div className="rounded-lg bg-sky/30 border border-sky/50 p-2">
                  <span className="block font-mono text-[10px] uppercase text-muted font-bold">Product</span>
                  <span className="font-serif text-xs font-semibold text-ink">AI & SaaS Fluency</span>
                </div>
                <div className="rounded-lg bg-lime/40 border border-lime/60 p-2">
                  <span className="block font-mono text-[10px] uppercase text-muted font-bold">Communication</span>
                  <span className="font-serif text-xs font-semibold text-ink">Clear & Human</span>
                </div>
              </div>

              {/* Academic & Target Credential Strip (Replaces duplicated certificate preview) */}
              <div className="flex items-center justify-between rounded-xl bg-paper/80 p-3 border border-rule/80">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-muted font-bold">Technical Foundation</span>
                  <span className="font-serif text-xs font-semibold text-ink">B.Tech IT • Symbiosis Pune</span>
                </div>
                <span className="font-mono text-xs font-bold text-forestGreen bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  8.4 CGPA
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Detail Cards Stage - 100% visible side-by-side, no clipping, distinct pillars */}
        <div className="relative w-full max-w-[1240px] mt-12 pt-8 border-t border-rule">
          <div className="text-center mb-6">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted block">
              Key Pillars & Verified Field Experience
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Left Card - Outreach & Engagement */}
            <motion.div
              animate={{
                y: activeCard === 0 ? -6 : 0,
                scale: activeCard === 0 ? 1.02 : 1
              }}
              transition={{ type: "spring", damping: 20, stiffness: 90 }}
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(null)}
              className="relative cursor-pointer rounded-2xl border-2 border-purple-200 bg-gradient-to-b from-purple-50/60 via-white to-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-purple-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-rule pb-3">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-purple-700 bg-purple-100/80 px-2.5 py-1 rounded-full border border-purple-200">
                    <Send className="w-3 h-3 text-purple-600" />
                    AIESEC Outreach
                  </span>
                  <span className="font-mono text-xs font-bold text-muted">01</span>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-2xl font-normal text-ink">Campus & Tech Outreach</h3>
                  <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Led 3+ outreach initiatives and analyzed 200+ participant feedback responses to evaluate campaign reception and optimize messaging.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-purple-50/80 p-3.5 border border-purple-200/70">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-purple-800 font-bold">AIESEC Marketing</span>
                  <span className="font-serif text-sm font-semibold text-ink">3+ Tech Campaigns</span>
                </div>
                <span className="font-mono text-xs font-bold text-forestGreen bg-emerald-100/90 px-2.5 py-0.5 rounded border border-emerald-200">
                  200+ Feedback
                </span>
              </div>
            </motion.div>

            {/* Card 2: Center Card - Tech Understanding & Edysor AI */}
            <motion.div
              animate={{
                y: activeCard === 1 ? -8 : 0,
                scale: activeCard === 1 ? 1.02 : 1
              }}
              transition={{ type: "spring", damping: 20, stiffness: 90 }}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
              className="relative cursor-pointer rounded-2xl border-2 border-blue-200 bg-gradient-to-b from-blue-50/60 via-white to-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-rule pb-3">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded-full border border-blue-200">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                    Edysor AI Internship
                  </span>
                  <span className="font-mono text-xs font-bold text-muted">02</span>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-2xl font-normal text-ink">Technical Understanding</h3>
                  <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Internship at Edysor AI developing real-time AI voice agents and agentic systems with API and MCP tool integrations. Able to explain software value clearly.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-blue-50/80 p-3.5 border border-blue-200/70">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-blue-800 font-bold">Product Fluency</span>
                  <span className="font-serif text-sm font-semibold text-ink">AI Voice & MCP APIs</span>
                </div>
                <span className="font-mono text-xs font-bold text-blue-800 bg-blue-100/90 px-2.5 py-0.5 rounded border border-blue-200">
                  SaaS Ready
                </span>
              </div>
            </motion.div>

            {/* Card 3: Right Card - Live Pitching & Presentation Skill */}
            <motion.div
              animate={{
                y: activeCard === 2 ? -6 : 0,
                scale: activeCard === 2 ? 1.02 : 1
              }}
              transition={{ type: "spring", damping: 20, stiffness: 90 }}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
              className="relative cursor-pointer rounded-2xl border-2 border-amber-300 bg-gradient-to-b from-amber-50/60 via-white to-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-amber-400 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-rule pb-3">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-300">
                    <Presentation className="w-3.5 h-3.5 text-amber-600" />
                    Presentation & Pitching
                  </span>
                  <span className="font-mono text-xs font-bold text-muted">03</span>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-2xl font-normal text-ink">Live Pitching & Discovery</h3>
                  <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Proven ability to structure proposals, present value propositions against alternatives, and defend ideas in competitive multi-stakeholder settings.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-amber-50/80 p-3.5 border border-amber-200/70">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-amber-800 font-bold">Pitch Acumen</span>
                  <span className="font-serif text-sm font-semibold text-ink">Value & ROI Pitching</span>
                </div>
                <span className="font-mono text-xs font-bold text-amber-800 bg-amber-100/90 px-2.5 py-0.5 rounded border border-amber-200">
                  Panel Evaluated
                </span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
