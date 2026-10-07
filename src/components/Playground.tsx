import React from 'react';
import { ArrowUpRight, BookOpen, Smartphone, Mic } from 'lucide-react';

export const Playground: React.FC = () => {
  const sidequests = [
    {
      title: "Annual Department Magazine",
      category: "Publishing & Creative Direction",
      desc: "Cross-functional publication aligning writers, faculty & designers to meet strict print deadlines.",
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
      tag: "Editorial Head",
      image: "/artwork1.jpg"
    },
    {
      title: "Dhan-Saarthi User Discovery",
      category: "Fintech Inclusion & 50+ UI Screens",
      desc: "Architected user workflows with empathetic financial guidance, tested across diverse student cohorts.",
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
      tag: "Product Empathy",
      image: "/dhan_saarthi.png"
    },
    {
      title: "Multi-Language Voice Interaction",
      category: "Conversational Research",
      desc: "Multilingual dialogue flows across Hindi, Telugu & English for real-time speech and customer support agents.",
      icon: <Mic className="w-5 h-5 text-rose-600" />,
      tag: "Communication Flow",
      image: "/voice_chatbot.png"
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
                Live UI & Editorial Artifacts
              </span>
            </div>
          </div>

          {/* Cards Grid with Real Visual Thumbnails */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {sidequests.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-rule bg-paper/50 p-4 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Real Image Preview */}
                  <div className="relative h-40 sm:h-44 w-full overflow-hidden rounded-xl border border-rule/70 bg-neutral-100 mb-4 group-hover:border-rule transition-colors">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="font-mono text-[10px] uppercase font-bold text-ink bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-xs border border-rule/60">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-rule shadow-2xs">
                      {item.icon}
                    </div>
                    <span className="font-mono text-[11px] text-muted truncate">
                      {item.category}
                    </span>
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
