import React, { useState } from 'react';
import { X, Download, Linkedin, Copy, Check, FileText } from 'lucide-react';
import { personalData, experiencesData, leadershipData, achievementsData } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative flex flex-col h-[90vh] max-h-[900px] w-full max-w-4xl rounded-2xl border border-rule bg-white shadow-2xl overflow-hidden">
        {/* Top Modal Header */}
        <div className="flex items-center justify-between border-b border-rule px-6 py-4 bg-paper/60">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-ink" />
            <span className="font-serif text-lg font-bold text-ink">
              {personalData.name} — Resume
            </span>
            <span className="rounded-md bg-lime px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-ink">
              Inside Sales & BD
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-rule bg-white px-3 py-1.5 font-mono text-xs text-ink hover:bg-paper"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-rule bg-white text-muted hover:text-ink hover:bg-paper transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans text-ink">
          {/* Resume Header */}
          <div className="border-b-2 border-ink pb-6 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                {personalData.name}
              </h1>
              <p className="mt-1 font-mono text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Inside Sales • Business Development • Outreach • Client Relationships
              </p>
            </div>
            <div className="mt-4 sm:mt-0 font-mono text-xs text-muted text-right space-y-1">
              <div>Email: {personalData.email}</div>
              <div>LinkedIn: linkedin.com/in/labdhi-mandovara-047561278/</div>
              <div>GitHub: github.com/Labdhimandovara</div>
            </div>
          </div>

          {/* Education Details */}
          <div className="mt-6">
            <h2 className="font-mono text-xs uppercase tracking-widest font-bold text-muted border-b border-rule pb-1 mb-3">
              Academic Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {personalData.education.map((edu, idx) => (
                <div key={idx} className="rounded-lg border border-rule p-3 bg-paper/40">
                  <div className="font-serif text-sm font-bold text-ink">{edu.degree}</div>
                  <div className="text-xs text-muted">{edu.institute}</div>
                  <div className="mt-1 flex justify-between font-mono text-[11px]">
                    <span className="text-muted">{edu.year}</span>
                    <span className="font-bold text-forestGreen">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Non-Tech & Field Experiences */}
          <div className="mt-6">
            <h2 className="font-mono text-xs uppercase tracking-widest font-bold text-muted border-b border-rule pb-1 mb-3">
              Outreach, Client Engagement & Field Experience
            </h2>
            <div className="space-y-4">
              {experiencesData.map((exp) => (
                <div key={exp.id} className="border-l-2 border-rule pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="font-serif text-base font-bold text-ink">
                      {exp.organization} — <span className="font-normal text-muted">{exp.role}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted">{exp.period}</span>
                  </div>
                  <ul className="mt-1.5 list-disc list-inside space-y-1 text-xs text-ink/80 leading-relaxed">
                    {exp.description.map((d, dIdx) => (
                      <li key={dIdx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Stakeholder Management */}
          <div className="mt-6">
            <h2 className="font-mono text-xs uppercase tracking-widest font-bold text-muted border-b border-rule pb-1 mb-3">
              Positions of Responsibility & Leadership
            </h2>
            <div className="space-y-4">
              {leadershipData.map((lead, lIdx) => (
                <div key={lIdx} className="border-l-2 border-rule pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="font-serif text-base font-bold text-ink">
                      {lead.role} — <span className="font-mono text-xs text-blue-700 font-semibold">{lead.transferableSalesSkill}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted">{lead.period}</span>
                  </div>
                  <ul className="mt-1 list-disc list-inside space-y-1 text-xs text-ink/80 leading-relaxed">
                    {lead.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx}>{bp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Competitions */}
          <div className="mt-6">
            <h2 className="font-mono text-xs uppercase tracking-widest font-bold text-muted border-b border-rule pb-1 mb-3">
              Competitive Evaluations & Pitching
            </h2>
            <div className="space-y-3">
              {achievementsData.map((ach, aIdx) => (
                <div key={aIdx} className="border-l-2 border-rule pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="font-serif text-sm font-bold text-ink">
                      {ach.title} — <span className="text-amber-700 font-semibold">{ach.badge}</span> ({ach.context})
                    </h3>
                    <span className="font-mono text-xs text-muted">{ach.date}</span>
                  </div>
                  <p className="mt-1 text-xs text-ink/80 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between border-t border-rule px-6 py-4 bg-paper/60 gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-white px-3.5 py-1.5 font-mono text-xs text-ink hover:bg-neutral-100 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-forestGreen" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-white px-3.5 py-1.5 font-mono text-xs text-blue-700 hover:bg-blue-50 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-ink px-6 py-2 font-mono text-xs uppercase tracking-wider text-white hover:bg-neutral-800"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
