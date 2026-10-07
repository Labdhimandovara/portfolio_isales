import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowDown, ArrowUpRight, Send, MessageSquare, Award, Sparkles } from 'lucide-react';
import { personalData } from '../data';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [animationsActive, setAnimationsActive] = useState(true);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="band band--rule-bottom relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24" id="top">
      <div className="band__column relative flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 flex items-center gap-2 rounded-full border border-rule bg-paper/80 px-3.5 py-1 backdrop-blur-sm"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-muted">
            Open to Tech Inside Sales & Business Development
          </span>
        </motion.div>

        {/* Small Eyebrow */}
        <div className="mb-4 font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Tech Inside Sales • Business Development
        </div>

        {/* Main Headline with Intentional Highlight Treatment */}
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-light leading-[1.18] tracking-[-0.03em] text-ink">
            <span className="block mb-2">Hi, I’m {personalData.name.split(' ')[0]}.</span>
            
            <span className="block mb-2">
              I understand{' '}
              <span className="inline-block rounded-xl bg-lime px-3 sm:px-4 py-0.5 sm:py-1 font-serif text-3xl sm:text-4xl lg:text-[54px] font-normal text-ink shadow-2xs border border-neutral-300/40">
                the product.
              </span>
            </span>

            <span className="block">
              I know how to{' '}
              <span className="inline-block rounded-xl bg-sky px-3 sm:px-4 py-0.5 sm:py-1 font-serif text-3xl sm:text-4xl lg:text-[54px] font-normal text-ink shadow-2xs border border-neutral-300/40">
                start the conversation.
              </span>
            </span>
          </h1>

          {/* Hand-drawn Underline SVG matching reference */}
          <div className="relative mt-2 flex justify-center">
            <img
              src="/underline.svg"
              alt=""
              className="w-[280px] sm:w-[420px] lg:w-[560px] object-contain select-none pointer-events-none"
            />
          </div>

          {/* Supporting Text */}
          <p className="mx-auto mt-6 max-w-2xl font-serif text-base sm:text-lg lg:text-xl font-light text-muted leading-relaxed">
            I come from a technical background, with experience in outreach, pitching, events and student engagement. I’m interested in Tech Inside Sales and Business Development, where understanding the product is just as important as understanding the person you’re speaking with.
          </p>

          {/* Small Capability Tags */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 font-mono text-[11px] sm:text-xs text-ink/85">
            <span className="rounded-md bg-paper px-3 py-1 border border-rule">Technical Understanding</span>
            <span className="text-muted/40">•</span>
            <span className="rounded-md bg-paper px-3 py-1 border border-rule">Outreach</span>
            <span className="text-muted/40">•</span>
            <span className="rounded-md bg-paper px-3 py-1 border border-rule">Pitching</span>
            <span className="text-muted/40">•</span>
            <span className="rounded-md bg-paper px-3 py-1 border border-rule">Client Communication</span>
          </div>

          {/* CTA Buttons matching reference design */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="h-4 w-4 text-lime" />
            </a>
            <a
              href="#experience"
              className="flex items-center gap-2 rounded-full border border-rule bg-white px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink shadow-sm hover:bg-paper transition-all hover:scale-105 active:scale-95"
            >
              <span>View Experience</span>
              <ArrowDown className="h-4 w-4 text-muted" />
            </a>
            {onOpenResume && (
              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center gap-2 rounded-full border border-rule bg-paper/60 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-blue-700 shadow-2xs hover:bg-white transition-all hover:scale-105 active:scale-95"
              >
                <span>View Resume</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* 3 Rising Cards Stage - Redesigned so ALL 3 pointers are 100% visible, spaced and never overlapping */}
        <div className="relative w-full max-w-[1240px] mt-12 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Left Card - Outreach & Engagement */}
            <motion.div
              initial={animationsActive ? { y: 60, opacity: 0 } : false}
              animate={{
                y: activeCard === 0 ? -12 : 0,
                opacity: 1,
                scale: activeCard === 0 ? 1.03 : 1
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 90,
                delay: animationsActive ? 0.2 : 0
              }}
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(null)}
              className="relative cursor-pointer rounded-2xl border border-neutral-300/80 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl flex flex-col justify-between md:-rotate-1 hover:rotate-0 hover:z-30"
            >
              <div>
                <div className="flex items-center justify-between border-b border-rule pb-3">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                    <Send className="w-3 h-3 text-purple-600" />
                    AIESEC Outreach
                  </span>
                  <span className="font-mono text-xs font-bold text-muted">01</span>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-2xl font-normal text-ink">Campus & Tech Outreach</h3>
                  <p className="mt-2 font-sans text-xs sm:text-sm text-muted leading-relaxed">
                    Led 3+ outreach initiatives and analyzed 200+ participant feedback responses to evaluate campaign reception.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-paper p-3.5 border border-rule/60">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-muted">AIESEC Marketing</span>
                  <span className="font-serif text-sm font-semibold text-ink">3+ Tech Campaigns</span>
                </div>
                <span className="font-mono text-xs font-bold text-forestGreen bg-emerald-100/70 px-2 py-0.5 rounded">
                  200+ Feedback
                </span>
              </div>
            </motion.div>

            {/* Card 2: Center Card - Main Philosophy */}
            <motion.div
              initial={animationsActive ? { y: 60, opacity: 0 } : false}
              animate={{
                y: activeCard === 1 ? -14 : 0,
                opacity: 1,
                scale: activeCard === 1 ? 1.04 : 1.01
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 90,
                delay: animationsActive ? 0.35 : 0
              }}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
              className="relative cursor-pointer rounded-2xl border-2 border-ink bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col justify-between md:-translate-y-2 hover:-translate-y-4 hover:z-30"
            >
              <div>
                <div className="flex items-center justify-between border-b border-rule pb-3">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    <MessageSquare className="w-3 h-3 text-blue-600" />
                    The Sales Perspective
                  </span>
                  <span className="font-mono text-xs font-bold text-ink">02 • CORE FOCUS</span>
                </div>
                <div className="mt-4">
                  <div className="inline-block rounded-md bg-warmYellow/60 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-ink mb-1.5">
                    Tech Inside Sales & BD
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-ink leading-snug">
                    “I understand technology, but I also enjoy the people side of it.”
                  </h3>
                  <p className="mt-2.5 font-sans text-xs sm:text-sm text-muted leading-relaxed">
                    Hands-on background with AI voice agents (Edysor AI), software and fintech apps. Comfortable discussing architecture with technical teams and explaining value to prospects.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 border-t border-rule pt-3 text-center">
                <div className="rounded-lg bg-sky/20 p-2">
                  <span className="block font-mono text-[10px] uppercase text-muted">Product</span>
                  <span className="font-serif text-xs sm:text-sm font-semibold text-ink">AI & SaaS Fluency</span>
                </div>
                <div className="rounded-lg bg-lime/30 p-2">
                  <span className="block font-mono text-[10px] uppercase text-muted">Communication</span>
                  <span className="font-serif text-xs sm:text-sm font-semibold text-ink">Clear & Human</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Right Card - Pitching & Presentation */}
            <motion.div
              initial={animationsActive ? { y: 60, opacity: 0 } : false}
              animate={{
                y: activeCard === 2 ? -12 : 0,
                opacity: 1,
                scale: activeCard === 2 ? 1.03 : 1
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 90,
                delay: animationsActive ? 0.5 : 0
              }}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
              className="relative cursor-pointer rounded-2xl border border-neutral-300/80 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl flex flex-col justify-between md:rotate-1 hover:rotate-0 hover:z-30"
            >
              <div>
                <div className="flex items-center justify-between border-b border-rule pb-3">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    <Award className="w-3 h-3 text-amber-600" />
                    Social House Learning
                  </span>
                  <span className="font-mono text-xs font-bold text-muted">03</span>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-2xl font-normal text-ink">Pitched & Won Best Pitch</h3>
                  <p className="mt-2 font-sans text-xs sm:text-sm text-muted leading-relaxed">
                    Coordinated skill-development initiatives, student outreach, and pitched an event concept that won Best Pitch with the team.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-warmYellow/30 p-3.5 border border-amber-200/60">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-600" />
                  <span className="font-serif text-sm font-bold text-ink">"Best Pitch" Winner</span>
                </div>
                <span className="font-mono text-[10px] uppercase font-bold text-amber-900 bg-white px-2 py-0.5 rounded shadow-xs">
                  Awarded
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animations Active / Paused Controller matching Reference */}
        <div className="relative z-30 mt-10 text-center">
          <button
            type="button"
            onClick={() => setAnimationsActive(!animationsActive)}
            className="inline-flex items-center gap-2 rounded-full border border-rule bg-white px-3.5 py-1.5 font-mono text-[11px] text-muted hover:text-ink hover:bg-paper shadow-2xs transition-all active:scale-95"
            title="Toggle entrance animations"
            aria-pressed={!animationsActive}
          >
            {animationsActive ? (
              <>
                <Pause className="h-3 w-3 text-blue-600" />
                <span>motion active</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3 text-muted" />
                <span>animations paused</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
