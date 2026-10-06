import React from 'react';
import { ArrowUpRight, BookOpen, Smartphone, Mic } from 'lucide-react';

export const Playground: React.FC = () => {
  const sidequests = [
    {
      title: "Annual Department Magazine",
      category: "Publishing & Creative Direction",
      desc: "Cross-functional publication aligning writers, faculty & designers.",
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
      tag: "Editorial Head"
    },
    {
      title: "Dhan-Saarthi User Discovery",
      category: "Fintech Inclusion & 50+ UI Screens",
      desc: "Architected user workflows with empathetic financial guidance.",
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
      tag: "Product Empathy"
    },
    {
      title: "Multi-Language Voice Interaction",
      category: "Conversational Research",
      desc: "Multilingual dialogue flows across Hindi, Telugu & English.",
      icon: <Mic className="w-5 h-5 text-rose-600" />,
      tag: "Communication Flow"
    }
  ];

  return (
    <section className="band band--rule-bottom bg-white" id="initiatives">
      <div className="band__column py-12 lg:py-16 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Title Area matching reference */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">
              Beyond Day-to-Day Outreach
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-ink leading-tight">
              Take a look at my<br className="hidden sm:inline" />
              creative initiatives & projects
            </h2>
            <p className="mt-3 font-serif text-sm sm:text-base text-muted font-light leading-relaxed">
              Initiatives where creative direction, user research, and technical literacy come together to support business goals.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {sidequests.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-rule bg-paper/60 p-5 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-rule shadow-2xs group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold text-muted bg-white px-2 py-0.5 rounded border border-rule/60">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-normal text-ink group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-muted">
                    {item.category}
                  </p>
                  <p className="mt-2 font-sans text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-rule/60 flex items-center justify-between font-mono text-[10px] text-blue-600">
                  <span>Explore Insight</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
