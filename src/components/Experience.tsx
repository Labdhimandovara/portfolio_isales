import React, { useState } from 'react';
import { ArrowUpRight, Award, Megaphone, Heart, Briefcase, CheckCircle2, X } from 'lucide-react';
import { experiencesData, ExperienceItem } from '../data';

export const Experience: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  return (
    <section className="band band--rule-bottom bg-white" id="experience" aria-labelledby="experience-title">
      {/* Section Heading matching Reference */}
      <div className="band band--rule-bottom">
        <div className="band__column flex h-[200px] lg:h-[249px] items-center justify-center">
          <div className="flex items-center gap-6 px-4">
            <span className="hidden sm:inline-block h-px w-12 bg-rule" />
            <div className="text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-1">
                Field Experience & Execution
              </span>
              <h2 id="experience-title" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-ink tracking-tight">
                Work & Field Impact
              </h2>
            </div>
            <span className="hidden sm:inline-block h-px w-12 bg-rule" />
          </div>
        </div>
      </div>

      {/* 2-Column Blueprint Grid matching Reference .home2-work__grid */}
      <div className="band__column">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-rule">
          {experiencesData.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`group flex flex-col justify-between transition-colors duration-200 hover:bg-paper/30 ${
                  index >= 2 ? 'lg:border-t lg:border-rule' : ''
                }`}
              >
                {/* Visual Media Showcase Container (matching 472px height in reference) */}
                <div
                  onClick={() => setSelectedItem(item)}
                  className="relative h-[340px] sm:h-[400px] lg:h-[440px] w-full overflow-hidden p-6 sm:p-8 flex flex-col justify-between cursor-pointer"
                >
                  {/* Subtle Background Graphic & Grid */}
                  <div className="absolute inset-0 bg-gradient-to-br from-paper/60 via-white to-paper/90 -z-10 group-hover:scale-105 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] opacity-60 -z-10" />

                  {/* Top Bar with Status / Metric */}
                  <div className="flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-white/90 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-ink shadow-xs">
                      {item.id === 'social-house-learning' && <Award className="w-3.5 h-3.5 text-amber-600" />}
                      {item.id === 'aiesec-marketing' && <Megaphone className="w-3.5 h-3.5 text-rose-600" />}
                      {item.id === 'akshar-bharati' && <Heart className="w-3.5 h-3.5 text-teal-600" />}
                      {item.id === 'tech-fluency' && <Briefcase className="w-3.5 h-3.5 text-blue-600" />}
                      <span>{item.organization}</span>
                    </span>

                    <span className="font-mono text-xs text-muted/80 bg-white/80 px-2.5 py-1 rounded border border-rule/60">
                      {item.period}
                    </span>
                  </div>

                  {/* Center Content Card Banner */}
                  <div className="my-auto z-10 max-w-lg w-full">
                    <div className="inline-block rounded-md bg-white/80 border border-rule/70 px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ink mb-2">
                      {item.role}
                    </div>
                    <h4 className="font-serif text-2xl sm:text-3xl text-ink font-normal leading-snug group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>

                    {/* Bullet Highlights Preview */}
                    <ul className="mt-3 space-y-2">
                      {item.description.slice(0, 2).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted font-sans leading-relaxed">
                          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-2 shrink-0 group-hover:bg-blue-600 transition-colors" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Visual Media Badge Preview */}
                    {item.id === 'social-house-learning' && (
                      <div className="mt-4 flex items-center justify-between rounded-xl bg-amber-50/80 p-2.5 border border-amber-200">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] uppercase font-bold text-amber-900 bg-white px-2 py-0.5 rounded border border-amber-200">
                            Pitch Distinction
                          </span>
                          <span className="font-mono text-xs text-amber-800 font-semibold">
                            Runner-up in "Pitch Perfect"
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-amber-700 hidden sm:inline font-medium">
                          Featured Case Below ↓
                        </span>
                      </div>
                    )}

                    {item.id === 'tech-fluency' && (
                      <div className="mt-4 flex flex-col gap-1.5 rounded-xl bg-blue-50/80 p-3 border border-blue-200">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase font-bold text-blue-900">
                            Edysor AI Internship
                          </span>
                          <span className="font-mono text-[10px] text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200 font-semibold">
                            AI Voice & MCP
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {['Real-time Voice Agents', 'MCP Integrations', 'REST APIs', 'Product Architecture'].map((tech) => (
                            <span key={tech} className="font-mono text-[10px] text-blue-900 bg-white/90 px-2 py-0.5 rounded border border-blue-200/70">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.id === 'aiesec-marketing' && (
                      <div className="mt-4 flex items-center gap-2 rounded-xl bg-purple-50/80 p-2.5 border border-purple-200">
                        <span className="font-mono text-[10px] uppercase font-bold text-purple-900 bg-white px-2 py-0.5 rounded border border-purple-200">
                          AIESEC
                        </span>
                        <span className="font-mono text-xs text-purple-800 font-semibold">
                          3+ Campaigns • 200+ Survey Responses Evaluated
                        </span>
                      </div>
                    )}

                    {item.id === 'akshar-bharati' && (
                      <div className="mt-4 flex items-center gap-2 rounded-xl bg-teal-50/80 p-2.5 border border-teal-200">
                        <span className="font-mono text-[10px] uppercase font-bold text-teal-900 bg-white px-2 py-0.5 rounded border border-teal-200">
                          Outreach
                        </span>
                        <span className="font-mono text-xs text-teal-800 font-semibold">
                          10+ School Visits • 3+ Fundraising Drives
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Highlight Strip */}
                  <div className="flex items-center justify-between border-t border-rule/80 pt-3 z-10">
                    <span className="font-mono text-xs font-semibold text-ink/80 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-forestGreen" />
                      {item.metrics || item.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-blue-600 group-hover:translate-x-0.5 transition-transform">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Caption Bar matching Reference .home2-project__caption */}
                <div className="flex h-[74px] items-center justify-between border-t border-rule bg-white px-6 sm:px-8 font-mono text-xs uppercase tracking-wider">
                  <h3 className="font-medium text-ink truncate pr-4">
                    {item.organization}
                  </h3>
                  <p className="shrink-0 text-muted">
                    <span style={{ color: item.tagColor }} className="font-semibold">
                      {item.tag}
                    </span>{' '}
                    — {item.year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study / Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl border border-rule bg-white p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-rule bg-paper text-muted hover:text-ink hover:bg-neutral-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-paper px-3 py-1 font-mono text-xs text-muted border border-rule">
                {selectedItem.organization}
              </span>
              <span
                style={{ color: selectedItem.tagColor }}
                className="font-mono text-xs font-semibold"
              >
                {selectedItem.tag} • {selectedItem.year}
              </span>
            </div>

            <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-normal text-ink">
              {selectedItem.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted">
              {selectedItem.role} | {selectedItem.period}
            </p>

            {/* Proof Artifact Preview in Modal */}
            {selectedItem.id === 'social-house-learning' && (
              <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50/50 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-900">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Official Certificate of Merit</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                    Runner-up • "Pitch Perfect"
                  </span>
                </div>
                <img
                  src="/shl_pitch_perfect_certificate.png"
                  alt="Social House Learning Pitch Perfect Certificate"
                  className="w-full max-h-64 object-contain rounded-lg border border-amber-200 bg-white shadow-xs"
                />
              </div>
            )}

            {selectedItem.id === 'tech-fluency' && (
              <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/60 p-4">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-blue-900">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  <span>Technical Domain Fluency • Edysor AI Internship</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3 text-xs font-mono">
                  <div className="bg-white p-2.5 rounded-lg border border-blue-100 shadow-2xs">
                    <span className="font-bold text-blue-950 block">AI Voice Agents</span>
                    <span className="text-muted text-[11px]">Real-time dialogue & low-latency audio pipelines</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-blue-100 shadow-2xs">
                    <span className="font-bold text-blue-950 block">API & MCP Tooling</span>
                    <span className="text-muted text-[11px]">Model Context Protocol integrations & endpoints</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 border-t border-rule pt-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
                Key Contributions & Verified Impact
              </h4>
              <ul className="space-y-3">
                {selectedItem.description.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-sm text-ink leading-relaxed">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lime text-[10px] font-bold text-ink">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-rule pt-4">
              <span className="font-mono text-xs text-muted">
                Sales Relevance: Communication, Outreach & Relationship Building
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="rounded-full bg-ink px-5 py-2 font-mono text-xs uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
