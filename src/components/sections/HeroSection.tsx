"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowDown, Code2, Cpu, Database, Globe, Layers, Server, Sparkles, Download } from "lucide-react";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

// ─── Typewriter Hook ──────────────────────────────────────────────────────────

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, speed);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

// ─── Floating Badge (Desktop XL only) ─────────────────────────────────────────

interface BadgeProps {
  label: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

function FloatingBadge({ label, icon, className, delay = 0 }: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "absolute flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-zinc-300 shadow-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-md",
        className
      )}
    >
      <span className="text-emerald-400">{icon}</span>
      {label}
    </motion.div>
  );
}

// ─── Scroll indicator ─────────────────────────────────────────────────────────

function ScrollIndicator() {
  return (
    <motion.a
      href="#tech-stack"
      aria-label="Scroll to technical stack"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="mt-10 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-emerald-400 transition-colors duration-200"
    >
      <span className="text-[10px] uppercase tracking-widest font-mono">Explore</span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={14} />
      </motion.div>
    </motion.a>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

const TYPEWRITER_WORDS = [
  "IT Programmer",
  "IT Helpdesk & Support Specialist",
  "Odoo ERP Developer",
  "System Architect",
  "UI/UX Designer",
];

const TECH_BADGES = [
  { label: "Odoo 17", icon: <Database size={11} />, className: "top-[18%] left-[6%] 2xl:left-[10%]", delay: 0.8 },
  { label: "Python", icon: <Code2 size={11} />, className: "top-[26%] right-[5%] 2xl:right-[9%]", delay: 1.0 },
  { label: "PostgreSQL", icon: <Server size={11} />, className: "top-[62%] left-[4%] 2xl:left-[8%]", delay: 1.2 },
  { label: "React / Next.js", icon: <Layers size={11} />, className: "top-[58%] right-[4%] 2xl:right-[8%]", delay: 1.1 },
  { label: "REST API", icon: <Globe size={11} />, className: "top-[78%] left-[8%] 2xl:left-[14%]", delay: 1.3 },
  { label: "Docker", icon: <Cpu size={11} />, className: "top-[76%] right-[7%] 2xl:right-[12%]", delay: 1.4 },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const typeword = useTypewriter(TYPEWRITER_WORDS);

  return (
    <section
      id="hero"
      ref={ref}
      aria-label="Hero"
      className="relative flex w-full min-h-[92dvh] sm:min-h-dvh flex-col items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20"
    >
      {/* ── Background radial ambient light ───────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.08),transparent)]" />
      </div>

      {/* ── Floating tech badges (strictly for xl screens only) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
        {TECH_BADGES.map((b) => (
          <FloatingBadge key={b.label} {...b} />
        ))}
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <Container className="relative z-10 flex flex-col items-center gap-6 text-center">

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Ahmat Alfatah • Available for opportunities</span>
          <Sparkles size={12} className="text-emerald-400" aria-hidden="true" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.12] tracking-tight text-zinc-100"
        >
          Building{" "}
          <span className="gradient-text">Elegant Systems</span>
          <br className="hidden sm:inline" />{" "}
          with Code &amp; Design
        </motion.h1>

        {/* Typewriter sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-1.5 text-base sm:text-xl font-medium text-zinc-300"
          aria-live="polite"
          aria-label={`Current role: ${typeword}`}
        >
          <span className="text-zinc-500">I&apos;m an</span>
          <span className="text-zinc-100 font-semibold inline-flex items-center">
            {typeword}
            <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[2px] animate-blink bg-emerald-400" aria-hidden="true" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-zinc-400"
        >
          IT Support at <span className="text-zinc-200 font-medium">PT KCC Glass Indonesia</span>, specialising in{" "}
          <span className="text-zinc-200 font-medium">enterprise ERP &amp; Oracle systems</span>,{" "}
          <span className="text-zinc-200 font-medium">network infrastructure</span>, and{" "}
          <span className="text-zinc-200 font-medium">Odoo architecture</span> —
          delivering high operational stability from hardware diagnostics to scalable software.
        </motion.p>

        {/* CTA buttons with Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mt-2"
        >
          {/* Primary View Work */}
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-glow transition-all duration-200 hover:bg-emerald-400 hover:shadow-glow-lg text-center"
          >
            View Selected Work
          </motion.a>

          {/* Download CV Button */}
          <motion.a
            href="/cv-ahmat-alfatah.pdf"
            download="CV-Ahmat-Alfatah.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-6 py-3.5 text-sm font-semibold text-emerald-300 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-900/40 hover:text-emerald-200 text-center"
          >
            <Download className="h-4 w-4" />
            <span>Download CV</span>
          </motion.a>

          {/* Get In Touch */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-colors duration-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white text-center"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="mt-6 grid grid-cols-3 max-w-lg w-full divide-x divide-zinc-800 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 sm:p-5 shadow-xl backdrop-blur-sm"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "30+", label: "Projects Delivered" },
            { value: "15+", label: "Odoo Modules" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-3 text-center">
              <span className="font-display text-xl sm:text-2xl font-bold text-emerald-400">{stat.value}</span>
              <span className="mt-1 text-[11px] sm:text-xs text-zinc-400">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
