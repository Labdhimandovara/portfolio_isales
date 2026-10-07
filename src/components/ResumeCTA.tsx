import React, { useState } from 'react';
import { Mail, Linkedin, FileText, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';
import { personalData } from '../data';

interface ResumeCTAProps {
  onOpenResume?: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="band band--rule-bottom bg-[#fafafa]" id="resume-cta">
      <div className="band__column pt-16 pb-12 lg:pt-20 lg:pb-14 px-6 lg:px-16 text-center">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>Opportunities & Inquiries</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-tight">
            Let's Start a Conversation.
          </h2>

          <p className="font-serif text-base sm:text-lg lg:text-xl text-muted font-light leading-relaxed">
            Interested in discussing opportunities in Tech Inside Sales, Business Development or client-facing roles?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* View / Download Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95"
            >
              <FileText className="w-4 h-4 text-lime" />
              <span>View & Download Resume</span>
            </button>

            {/* LinkedIn Button */}
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-rule bg-white px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink shadow-sm hover:bg-paper transition-all hover:scale-105 active:scale-95"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
            </a>

            {/* Email Button */}
            <a
              href={`mailto:${personalData.email}?subject=Tech%20Inside%20Sales%20Opportunity%20-%20Labdhi%20Mandovara`}
              className="inline-flex items-center gap-2 rounded-full border border-rule bg-white px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink shadow-sm hover:bg-paper transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4 text-rose-600" />
              <span>Email Directly</span>
            </a>
          </div>

          {/* Direct Email Clipboard Strip */}
          <div className="pt-1">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-ink transition-colors bg-white px-3.5 py-1.5 rounded-full border border-rule shadow-2xs"
            >
              <span>{personalData.email}</span>
              {copied ? (
                <span className="flex items-center gap-1 text-forestGreen font-bold">
                  <Check className="w-3 h-3" /> copied!
                </span>
              ) : (
                <Copy className="w-3 h-3 text-muted/70" />
              )}
            </button>
          </div>

          {/* Prominent Let's Connect Bridge filling the empty space towards Let's Talk */}
          <div className="mt-8 pt-6 border-t border-rule flex flex-col items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted font-medium">
              Ready to connect?
            </span>
            <a
              href={`mailto:${personalData.email}?subject=Let's%20Connect%20-%20Tech%20Inside%20Sales`}
              className="inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 group"
            >
              <Mail className="w-4 h-4 text-lime" />
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
