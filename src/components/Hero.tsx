import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowDown, ArrowUpRight, Target, MessageSquare, Award, Sparkles } from 'lucide-react';
import { personalData } from '../data';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [animationsActive, setAnimationsActive] = useState(true);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="band band--rule-bottom relative overflow-hidden bg-white pt-10 pb-16 lg:pt-16 lg:pb-24" id="top">
      <div className="band__column relative min-h-[960px] lg:min-h-[1050px] flex flex-col items-center">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-rule bg-paper/80 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-muted">
            Open to Inside Sales & Business Development Roles
          </span>
        </motion.div>

        {/* Main Headline styled in exact reference typography and chips */}
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] font-light leading-[1.15] tracking-[-0.03em] text-ink">
            <span className="block mb-2">Hi i’m {personalData.name.split(' ')[0]}</span>
            
            <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span>an</span>
              <span className="inline-block rounded-xl bg-lime px-4 py-1 font-serif text-3xl sm:text-4xl lg:text-[54px] font-normal text-ink shadow-sm border border-neutral-300/40">
                Inside Sales Specialist
              </span>
              <span>at</span>
              <span className="inline-block rounded-xl bg-sky px-4 py-1 font-serif text-3xl sm:text-4xl lg:text-[54px] font-normal text-ink shadow-sm border border-neutral-300/40">
                Client Growth & BD
              </span>
            </span>

            <span className="block mt-3 text-3xl sm:text-4xl lg:text-[52px]">
              and here’s how i turn conversations into opportunities.
            </span>
          </h1>

          {/* Hand-drawn Underline SVG matching reference */}
          <div className="relative mt-2 flex justify-center">
            <img
              src="/underline.svg"
              alt=""
              className="w-[280px] sm:w-[420px] lg:w-[580px] object-contain select-none pointer-events-none"
            />
          </div>

          {/* Sales Proposition Supporting Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg sm:text-xl font-light text-muted leading-relaxed">
            {personalData.subtitle}
          </p>

          {/* Quick Value Pillars */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-ink/80">
            <span className="rounded-md bg-paper px-3 py-1 border border-rule">Communication</span>
            <span className="text-muted/60">•</span>
            <span className="rounded-md bg-paper px-3 py-1 border border-rule">Outreach</span>
            <span className="text-muted/60">•</span>
            <span className="rounded-md bg-paper px-3 py-1 border border-rule">Relationship Building</span>
            <span className="text-muted/60">•</span>
            <span className="rounded-md bg-paper px-3 py-1 border border-rule">Business Growth</span>
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

        {/* 3D Crafted Vector Stage with Rising Cards */}
        <div className="relative w-full max-w-[1200px] h-[480px] lg:h-[520px] mt-10">
          {/* Card 1: Left Card - Outreach & Discovery */}
          <motion.div
            initial={animationsActive ? { y: 240, x: 120, rotate: -2, opacity: 0 } : false}
            animate={{
              y: activeCard === 0 ? -20 : 0,
              x: 0,
              rotate: activeCard === 0 ? 0 : -8,
              opacity: 1,
              scale: activeCard === 0 ? 1.05 : 1
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 90,
              delay: animationsActive ? 0.3 : 0
            }}
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
            className="absolute left-[5%] lg:left-[10%] top-[40px] z-10 w-[300px] sm:w-[340px] lg:w-[360px] cursor-pointer rounded-2xl border border-neutral-300/80 bg-white p-5 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-rule pb-3">
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                <Target className="w-3 h-3 text-blue-600" />
                Pipeline & Lead Gen
              </span>
              <span className="font-mono text-xs text-muted">01</span>
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl font-normal text-ink">Structured Outreach</h3>
              <p className="mt-1 font-sans text-xs text-muted leading-relaxed">
                Identifying qualified prospects, analyzing feedback cohorts & initiating conversations that matter.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-paper p-3 border border-rule/60">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-muted">AIESEC Verified</span>
                <span className="font-serif text-sm font-semibold text-ink">3+ Outreach Drives</span>
              </div>
              <span className="font-mono text-xs font-bold text-forestGreen bg-emerald-100/70 px-2 py-0.5 rounded">
                200+ Feedback
              </span>
            </div>
          </motion.div>

          {/* Card 2: Center Card - Value Communication & Turning Conversations Into Opportunities */}
          <motion.div
            initial={animationsActive ? { y: 260, x: 0, rotate: 0, opacity: 0 } : false}
            animate={{
              y: activeCard === 1 ? -25 : 0,
              x: 0,
              rotate: activeCard === 1 ? 0 : 2,
              opacity: 1,
              scale: activeCard === 1 ? 1.05 : 1
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 90,
              delay: animationsActive ? 0.45 : 0
            }}
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
            className="absolute left-[50%] -translate-x-1/2 top-[10px] z-20 w-[320px] sm:w-[380px] lg:w-[420px] cursor-pointer rounded-2xl border-2 border-ink bg-white p-6 shadow-2xl transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-rule pb-3">
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                <MessageSquare className="w-3 h-3 text-rose-600" />
                Client Communication
              </span>
              <span className="font-mono text-xs font-bold text-ink">CORE FOCUS</span>
            </div>
            <div className="mt-4">
              <div className="inline-block rounded-md bg-warmYellow/60 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-ink mb-1">
                Inside Sales Philosophy
              </div>
              <h3 className="font-serif text-2xl font-normal text-ink">
                Turning Conversations Into Opportunities
              </h3>
              <p className="mt-1.5 font-sans text-xs text-muted leading-relaxed">
                Active listening, genuine relationship building, and translating customer pain points into tailored solutions.
              </p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 border-t border-rule pt-3 text-center">
              <div className="rounded-lg bg-sky/20 p-2">
                <span className="block font-mono text-[10px] uppercase text-muted">Rapport</span>
                <span className="font-serif text-sm font-semibold text-ink">High Trust</span>
              </div>
              <div className="rounded-lg bg-lime/30 p-2">
                <span className="block font-mono text-[10px] uppercase text-muted">Outcome</span>
                <span className="font-serif text-sm font-semibold text-ink">Action & Growth</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Right Card - Pitching & Presentation */}
          <motion.div
            initial={animationsActive ? { y: 240, x: -120, rotate: 2, opacity: 0 } : false}
            animate={{
              y: activeCard === 2 ? -20 : 0,
              x: 0,
              rotate: activeCard === 2 ? 0 : 7,
              opacity: 1,
              scale: activeCard === 2 ? 1.05 : 1
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 90,
              delay: animationsActive ? 0.6 : 0
            }}
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
            className="absolute right-[5%] lg:right-[10%] top-[50px] z-10 w-[300px] sm:w-[340px] lg:w-[360px] cursor-pointer rounded-2xl border border-neutral-300/80 bg-white p-5 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-rule pb-3">
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                <Award className="w-3 h-3 text-amber-600" />
                Pitching & Value ROI
              </span>
              <span className="font-mono text-xs text-muted">03</span>
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl font-normal text-ink">Idea to Execution</h3>
              <p className="mt-1 font-sans text-xs text-muted leading-relaxed">
                Pitched an event concept with the team and won Best Pitch at Social House Learning.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-warmYellow/30 p-3 border border-amber-200/60">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="font-serif text-sm font-bold text-ink">"Best Pitch" Winner</span>
              </div>
              <span className="font-mono text-[10px] uppercase font-bold text-amber-900 bg-white px-2 py-0.5 rounded shadow-xs">
                Awarded
              </span>
            </div>
          </motion.div>

          {/* Reference 3D Vector Box with Flaps & Shadow */}
          <div className="home2-box" aria-hidden="true">
            <div className="home2-box__flap--back" />
            <div className="home2-box__panel--left" />
            <div className="home2-box__panel--right" />
            <div className="home2-box__handle" />
            <div className="home2-box__flap--front" />
          </div>
        </div>

        {/* Animations Active / Paused Controller matching Reference */}
        <div className="relative z-30 mt-6 text-center">
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
