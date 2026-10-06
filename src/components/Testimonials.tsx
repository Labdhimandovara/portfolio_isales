import React, { useState } from 'react';
import { testimonialsData } from '../data';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Group into 3 columns for desktop matching Reference layout
  const col1 = [testimonialsData[0], testimonialsData[1]];
  const col2 = [testimonialsData[2], testimonialsData[3]];
  const col3 = [testimonialsData[4], testimonialsData[5]];

  return (
    <section className="band band--rule-bottom bg-white" id="testimonials" aria-labelledby="testimonials-title">
      {/* Header matching Reference */}
      <div className="band band--rule-bottom">
        <div className="band__column flex h-[200px] lg:h-[260px] items-center justify-center text-center px-4">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block font-serif text-2xl text-muted/40">~</span>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-1">
                Peer Endorsements & Collaboration
              </span>
              <h2 id="testimonials-title" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-ink tracking-tight">
                A few kind words from peers & teammates
              </h2>
            </div>
            <span className="hidden sm:inline-block font-serif text-2xl text-muted/40">~</span>
          </div>
        </div>
      </div>

      {/* Desktop 3-Column Grid matching reference .home2-testimonials__grid */}
      <div className="band__column hidden lg:block">
        <div className="grid grid-cols-3 divide-x divide-rule">
          {/* Column 1 */}
          <div className="flex flex-col divide-y divide-rule">
            {col1.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col divide-y divide-rule">
            {col2.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col divide-y divide-rule">
            {col3.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Slider matching Reference */}
      <div className="lg:hidden px-4 py-8">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[85vw] max-w-[380px]"
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>

        {/* Mobile Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-4" role="tablist">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === idx ? 'w-6 bg-ink' : 'w-2 bg-neutral-300'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  item: typeof testimonialsData[0];
}

const TestimonialCard: React.FC<CardProps> = ({ item }) => {
  return (
    <figure
      style={{
        backgroundColor: item.centerColor,
        // @ts-ignore
        '--testimonial-edge': item.edgeColor,
      }}
      className="testimonial-card-glow relative m-4 lg:m-6 rounded-3xl p-7 lg:p-8 transition-transform duration-300 hover:scale-[1.01] shadow-xs flex flex-col justify-between"
    >
      <div>
        {/* Header: Avatar, Name, Title, and Badge */}
        <figcaption className="flex items-start gap-4">
          <div className="relative shrink-0">
            {/* Initials Avatar Monogram with badge */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 border border-black/10 font-serif text-lg font-bold text-ink shadow-sm">
              {item.name.slice(0, 2).toUpperCase()}
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-6 px-1.5 items-center justify-center rounded-full bg-ink text-white font-mono text-[9px] font-bold uppercase shadow-xs">
              {item.badge}
            </span>
          </div>

          <div>
            <h3 className="font-serif text-xl font-normal text-ink leading-tight">
              {item.name}
            </h3>
            <p className="mt-1 font-serif text-xs text-neutral-700 leading-snug">
              {item.title}
            </p>
          </div>
        </figcaption>

        {/* Quote Content */}
        <blockquote className="mt-6">
          <Quote className="w-5 h-5 text-black/20 mb-2" />
          <p className="font-serif text-sm lg:text-[15px] font-light leading-relaxed text-ink/90 whitespace-pre-line">
            "{item.quote}"
          </p>
        </blockquote>
      </div>

      <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between font-mono text-[10px] text-neutral-600 uppercase tracking-wider">
        <span>Verified Endorsement</span>
        <span>Peer Feedback</span>
      </div>
    </figure>
  );
};
