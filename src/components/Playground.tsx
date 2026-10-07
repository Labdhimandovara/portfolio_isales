import React from 'react';
import { ArrowUpRight, BookOpen, Smartphone, Palette } from 'lucide-react';

export const Playground: React.FC = () => {
  const sidequests = [
    {
      title: "VIDAYAM Tech Magazine",
      category: "Cover Design & Publishing",
      desc: "Designed the official cover and led cross-functional publishing across faculty, writers, and designers for Symbiosis Pune.",
      icon: <BookOpen className="w-4 h-4 text-emerald-700" />,
      tag: "Cover Designer & Head",
      image: "/vidayam_magazine_cover.jpg",
      bgClass: "bg-[#edf4ed]",
      imgClass: "max-h-full max-w-full object-contain rounded-md shadow-md border border-neutral-300/80"
    },
    {
      title: "Dhan-Saarthi User Discovery",
      category: "Fintech Inclusion & 50+ UI Screens",
      desc: "Architected user workflows with empathetic financial guidance, tested across diverse student cohorts.",
      icon: <Smartphone className="w-4 h-4 text-amber-700" />,
      tag: "Product Empathy",
      image: "/dhan_saarthi.png",
      bgClass: "bg-[#fcf8f0]",
      imgClass: "max-h-full max-w-full object-contain rounded-xl shadow-md border border-neutral-300/80"
    },
    {
      title: "Visual Arts & Storytelling",
      category: "Fine Illustration & Creative Direction",
      desc: "Hand-rendered graphite illustrations and visual assets developed for department publication and brand identity.",
      icon: <Palette className="w-4 h-4 text-purple-700" />,
      tag: "Design Head",
      image: "/artwork2.jpg",
      bgClass: "bg-[#f7f5f8]",
      imgClass: "max-h-full max-w-full object-contain rounded-md shadow-md border border-neutral-300/80"
    }
  ];

  return (
    <section className="band band--rule-bottom bg-white" id="initiatives">
      <div className="band__column py-12 lg:py-16 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Title Area matching reference */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block">
              Beyond Day-to-Day Outreach
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-light text-ink leading-tight">
              Creative initiatives & product projects
            </h2>
            <p className="font-serif text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              Initiatives where creative direction, user research, and technical literacy come together to support business goals.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Real Design & Product Artifacts
              </span>
            </div>
          </div>

          {/* Cards Grid with Perfectly Fitted & Fully Visible Images */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {sidequests.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-rule bg-paper/50 p-4 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category & Tag Row - Positioned OUTSIDE image so nothing is covered */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white border border-rule shadow-2xs shrink-0">
                        {item.icon}
                      </div>
                      <span className="font-mono text-[10px] text-muted truncate">
                        {item.category}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] uppercase font-bold text-ink bg-white px-2 py-0.5 rounded border border-rule shrink-0 shadow-2xs">
                      {item.tag}
                    </span>
                  </div>

                  {/* Perfectly Fitted Image Showcase Container */}
                  <div className={`relative h-60 sm:h-64 w-full flex items-center justify-center p-3 rounded-xl border border-rule/70 mb-4 group-hover:border-rule transition-colors overflow-hidden ${item.bgClass}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`${item.imgClass} group-hover:scale-102 transition-transform duration-300`}
                    />
                  </div>

                  <h3 className="font-serif text-lg font-normal text-ink group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="mt-2 font-sans text-xs text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-rule/60 flex items-center justify-between font-mono text-[11px] text-blue-600 font-semibold">
                  <span>Explore Artifact</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
