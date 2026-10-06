import React from 'react';
import { ArrowUpRight, Mail, Linkedin, Github, Heart } from 'lucide-react';
import { personalData } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="band band--rule-bottom bg-[#fff5fb] text-[#da5168] overflow-hidden" id="contact">
      <div className="band__column py-12 lg:py-16 px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Visual Folder Art matching Reference .home2-footer__art */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="relative w-[340px] sm:w-[420px] h-[300px]">
              {/* Folder SVG Base */}
              <img
                src="/footer_folder.svg"
                alt=""
                className="w-full h-full object-contain pointer-events-none select-none"
              />

              {/* Swaying Card Attached with Clip */}
              <div className="footer-paper-sway absolute inset-x-8 inset-y-6 flex flex-col justify-between rounded-xl bg-[#fff3f2] p-6 shadow-xl border border-white/60">
                {/* Paper Clip Top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 pointer-events-none">
                  <img
                    src="/footer_clip.webp"
                    alt=""
                    className="w-full h-full object-contain drop-shadow"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#da5168]/80">
                    Direct Contact Card
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-normal text-ink">
                    Let’s Talk.
                  </h3>
                  <p className="mt-1 font-serif text-xs text-neutral-600 leading-relaxed">
                    Have an open Inside Sales, Business Development, or SDR opportunity? Let's connect and discuss how I can contribute to your pipeline.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#da5168]/20 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold text-ink">
                    mandowaralabdhi@gmail.com
                  </span>
                  <a
                    href={`mailto:${personalData.email}?subject=Inside%20Sales%20Role%20Inquiry`}
                    className="flex items-center gap-1 font-mono text-[11px] uppercase font-bold text-[#da5168] hover:underline"
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation & Social Links in Reference Typography */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end text-right">
            <nav className="flex flex-col items-center lg:items-end space-y-1 font-serif text-3xl sm:text-4xl lg:text-[40px] font-light text-[#da5168]">
              <a
                href="#experience"
                className="group relative inline-flex items-center hover:opacity-80 transition-opacity"
              >
                <span>Work</span>
                <span className="font-mono text-xs text-[#da5168]/60 ml-2">↗</span>
              </a>
              <a
                href="#strengths"
                className="group relative inline-flex items-center hover:opacity-80 transition-opacity"
              >
                <span>Strengths</span>
                <span className="font-mono text-xs text-[#da5168]/60 ml-2">↗</span>
              </a>
              <a
                href="#leadership"
                className="group relative inline-flex items-center hover:opacity-80 transition-opacity"
              >
                <span>Leadership</span>
                <span className="font-mono text-xs text-[#da5168]/60 ml-2">↗</span>
              </a>
              <a
                href="#about"
                className="group relative inline-flex items-center hover:opacity-80 transition-opacity"
              >
                <span>About</span>
                <span className="font-mono text-xs text-[#da5168]/60 ml-2">↗</span>
              </a>

              {/* Social / Direct Channels */}
              <div className="pt-4 flex flex-col items-center lg:items-end space-y-1 border-t border-[#da5168]/20 w-full">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5 text-[#da5168]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-5 h-5 text-[#da5168]" />
                  <span>Email</span>
                </a>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl hover:opacity-80 transition-opacity"
                >
                  <Github className="w-5 h-5 text-[#da5168]" />
                  <span>GitHub</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Credit Strip matching Reference */}
        <div className="mt-12 pt-6 border-t border-[#da5168]/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-serif text-sm text-[#bb4659]">
          <p className="flex items-center gap-2">
            <span>portfolio crafted with love & precision for business growth</span>
            <Heart className="w-3.5 h-3.5 fill-[#bb4659]" />
          </p>
          <div className="flex items-center gap-4 font-mono text-xs">
            <span>© {new Date().getFullYear()} {personalData.name}</span>
            <span>•</span>
            <span>Inside Sales & BD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
