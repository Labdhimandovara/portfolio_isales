import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { personalData } from '../data';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#experience' },
    { label: 'Strengths', href: '#strengths' },
    { label: 'Outreach', href: '#outreach' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="band band--rule-bottom sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-colors">
      <div className="band__column flex h-[66px] items-center justify-between px-4 lg:px-6">
        {/* Left: Home Logo / Monogram */}
        <a
          href="#top"
          className="group flex items-center gap-3 text-ink focus-visible:outline-2 focus-visible:outline-blue-600"
          aria-label="Home - Labdhi Mandovara"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-rule bg-paper shadow-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            <img
              src="/home_button.webp"
              alt=""
              className="h-8 w-8 object-contain"
              onError={(e) => {
                // fallback if image not loaded
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <span className="font-serif text-lg font-bold text-ink">LM</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm font-bold tracking-tight text-ink group-hover:text-blue-600 transition-colors">
              {personalData.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              Tech Inside Sales & BD
            </span>
          </div>
        </a>

        {/* Desktop Nav Links in Eemon's signature architectural rule format */}
        <nav className="hidden lg:flex items-center h-[66px]" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative flex h-[66px] items-center border-l border-rule px-6 font-mono text-[11px] font-medium uppercase tracking-widest text-nav-ink hover:text-ink hover:bg-paper/60 transition-all duration-200"
            >
              <span>{link.label}</span>
              {/* Subtle hover indicator dot */}
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}

          {/* Connect CTA Button */}
          <div className="border-l border-rule h-[66px] flex items-center px-5">
            <a
              href="#contact"
              className="flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-wider text-white shadow-sm hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 text-lime" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Resume CTA */}
          <div className="border-l border-rule h-[66px] flex items-center pl-4">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1 font-mono text-[11px] font-medium uppercase tracking-wider text-blue-600 hover:text-blue-700 underline underline-offset-4"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex lg:hidden h-10 w-10 items-center justify-center rounded border border-rule text-ink hover:bg-paper focus-visible:outline-2 focus-visible:outline-blue-600"
          aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-rule bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-rule px-6 py-4 font-mono text-xs uppercase tracking-wider text-ink hover:bg-paper"
              >
                {link.label}
              </a>
            ))}
            <div className="p-4 flex gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center rounded-full bg-ink py-2.5 font-mono text-xs uppercase tracking-wider text-white"
              >
                Let's Connect
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenResume) onOpenResume();
                }}
                className="flex-1 text-center rounded-full border border-rule py-2.5 font-mono text-xs uppercase tracking-wider text-blue-600"
              >
                View Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
