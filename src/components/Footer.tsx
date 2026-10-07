import React, { useState } from 'react';
import { ArrowUpRight, Mail, Linkedin, Github, Heart, FileText, Check, Copy, MessageSquare } from 'lucide-react';
import { personalData } from '../data';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="band band--rule-bottom bg-[#fff5fb] text-[#da5168] overflow-hidden" id="contact">
      <div className="band__column py-12 lg:py-16 px-6 lg:px-12 relative">
        {/* 3-Column Footer Grid: Left Folder, Center Conversation Hub, Right Nav Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* 1. Left Column: Visual Folder Art with Swaying Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-[320px] sm:w-[360px] h-[300px]">
              {/* Folder SVG Base */}
              <img
                src="/footer_folder.svg"
                alt=""
                className="w-full h-full object-contain pointer-events-none select-none"
              />

              {/* Swaying Card Attached with Clip */}
              <div className="footer-paper-sway absolute inset-x-7 inset-y-6 flex flex-col justify-between rounded-xl bg-[#fff3f2] p-5 shadow-xl border border-white/70">
                {/* Paper Clip Top */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-10 h-10 pointer-events-none">
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
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="/labdhi_profile.jpg"
                      alt="Labdhi"
                      className="w-7 h-7 rounded-full object-cover border border-[#da5168]/30 shadow-xs"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#da5168]/80">
                      Direct Contact Card
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-ink">
                    Let’s Talk.
                  </h3>
                  <p className="mt-1 font-serif text-xs text-neutral-600 leading-relaxed">
                    Have an open Tech Inside Sales, Business Development, or SDR role? Let’s connect and discuss how my technical foundation and communication skills fit your team.
                  </p>
                </div>

                <div className="pt-2.5 border-t border-[#da5168]/20 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold text-ink truncate max-w-[180px]">
                    {personalData.email}
                  </span>
                  <a
                    href={`mailto:${personalData.email}?subject=Tech%20Inside%20Sales%20Inquiry`}
                    className="flex items-center gap-1 font-mono text-[11px] uppercase font-bold text-[#da5168] hover:underline shrink-0"
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Center Column: "Let's Start a Conversation" Filling the Center Space */}
          <div className="lg:col-span-5 flex flex-col items-center text-center p-6 sm:p-7 rounded-2xl bg-white/70 border border-[#da5168]/20 shadow-sm backdrop-blur-xs">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#da5168]/20 bg-[#fff5fb] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#da5168] mb-3">
              <MessageSquare className="w-3 h-3 text-[#da5168]" />
              <span>Opportunities & Inquiries</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-light text-ink tracking-tight">
              Let's Start a Conversation.
            </h3>

            <p className="mt-2 font-serif text-xs sm:text-sm text-neutral-600 font-light max-w-sm leading-relaxed">
              Open to Tech Inside Sales, Business Development, and client-facing SaaS / AI roles.
            </p>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 w-full">
              <a
                href={`mailto:${personalData.email}?subject=Let's%20Connect%20-%20Tech%20Inside%20Sales`}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-3.5 h-3.5 text-lime" />
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3 h-3 text-lime" />
              </a>

              {onOpenResume && (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink shadow-2xs hover:bg-paper transition-all hover:scale-105 active:scale-95"
                >
                  <FileText className="w-3.5 h-3.5 text-[#da5168]" />
                  <span>Resume</span>
                </button>
              )}

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink shadow-2xs hover:bg-paper transition-all hover:scale-105 active:scale-95"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-muted" />
              </a>
            </div>

            {/* Quick Copy Email Strip */}
            <div className="mt-4 pt-3 border-t border-neutral-200/80 w-full flex items-center justify-center">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] text-neutral-600 hover:text-ink transition-colors bg-[#fff5fb] px-3 py-1 rounded-full border border-[#da5168]/20"
              >
                <span>{personalData.email}</span>
                {copied ? (
                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <Check className="w-3 h-3" /> copied!
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-muted" />
                )}
              </button>
            </div>
          </div>

          {/* 3. Right Column: Navigation & Social Links in Signature Typography */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end text-right">
            <nav className="flex flex-col items-center lg:items-end space-y-1 font-serif text-3xl sm:text-4xl lg:text-[38px] font-light text-[#da5168]">
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
              <div className="pt-3 flex flex-col items-center lg:items-end space-y-1 border-t border-[#da5168]/20 w-full">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-4 h-4 text-[#da5168]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-4 h-4 text-[#da5168]" />
                  <span>Email</span>
                </a>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl hover:opacity-80 transition-opacity"
                >
                  <Github className="w-4 h-4 text-[#da5168]" />
                  <span>GitHub</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Credit Strip */}
        <div className="mt-10 pt-6 border-t border-[#da5168]/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-serif text-sm text-[#bb4659]">
          <p className="flex items-center gap-2">
            <span>portfolio crafted with love & precision for business growth</span>
            <Heart className="w-3.5 h-3.5 fill-[#bb4659]" />
          </p>
          <div className="flex items-center gap-4 font-mono text-xs">
            <span>© {new Date().getFullYear()} {personalData.name}</span>
            <span>•</span>
            <span>Tech Inside Sales & BD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
