"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowDown, Code2, Cpu, Database, Globe, Layers, Server, Sparkles } from "lucide-react";
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

// ─── Floating Badge ───────────────────────────────────────────────────────────

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
        "glass absolute flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-text-secondary shadow-card",
        className
      )}
    >
      <span className="text-accent-light">{icon}</span>
      {label}
    </motion.div>
  );
}

// ─── Scroll indicator ─────────────────────────────────────────────────────────

function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      aria-label="Scroll to about section"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted hover:text-accent-light transition-colors duration-250"
    >
      <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={14} />
      </motion.div>
    </motion.a>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

const TYPEWRITER_WORDS = [
  "Odoo Developer",
  "System Architect",
  "UI/UX Designer",
  "IT Programmer",
  "Backend Engineer",
];

const TECH_BADGES = [
  { label: "Odoo 17", icon: <Database size={11} />, className: "top-[18%] left-[8%] sm:left-[12%]", delay: 0.8 },
  { label: "Python", icon: <Code2 size={11} />, className: "top-[28%] right-[6%] sm:right-[10%]", delay: 1.0 },
  { label: "PostgreSQL", icon: <Server size={11} />, className: "top-[60%] left-[4%] sm:left-[8%]", delay: 1.2 },
  { label: "React / Next.js", icon: <Layers size={11} />, className: "top-[55%] right-[4%] sm:right-[9%]", delay: 1.1 },
  { label: "REST API", icon: <Globe size={11} />, className: "top-[75%] left-[10%] sm:left-[18%]", delay: 1.3 },
  { label: "Docker", icon: <Cpu size={11} />, className: "top-[72%] right-[8%] sm:right-[15%]", delay: 1.4 },
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
      className="relative flex min-h-dvh items-center justify-center overflow-hidden pt-20"
    >
      {/* ── Animated background grid pulse ───────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.08),transparent)]" />
      </div>

      {/* ── Floating tech badges ──────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden sm:block">
        {TECH_BADGES.map((b) => (
          <FloatingBadge key={b.label} {...b} />
        ))}
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <Container className="relative z-10 flex flex-col items-center gap-6 text-center">

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-medium text-accent-light">
            Open to opportunities
          </span>
          <Sparkles size={12} className="text-accent" aria-hidden="true" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl font-display text-5xl font-extrabold leading-none tracking-tight sm:text-6xl lg:text-7xl"
        >
          Building{" "}
          <span className="gradient-text">Elegant Systems</span>
          <br />
          with Code & Design
        </motion.h1>

        {/* Typewriter sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-2 text-lg font-medium text-text-secondary sm:text-xl"
          aria-live="polite"
          aria-label={`Current role: ${typeword}`}
        >
          <span className="text-text-muted">I&apos;m a</span>
          <span className="min-w-[220px] text-left text-text-primary">
            {typeword}
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] animate-blink bg-accent" aria-hidden="true" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="max-w-xl text-base leading-relaxed text-text-secondary"
        >
          Specialising in{" "}
          <span className="text-text-primary font-medium">Odoo ERP development</span>,{" "}
          <span className="text-text-primary font-medium">system architecture</span>, and{" "}
          <span className="text-text-primary font-medium">high-fidelity UI design</span> —
          crafting solutions that scale beautifully from backend to pixel.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface-base shadow-glow transition-shadow duration-250 hover:shadow-glow-lg"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="glass rounded-xl px-6 py-3 text-sm font-semibold text-text-primary glow-border transition-colors duration-250 hover:text-accent-light"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-6 divide-x divide-surface-border"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "30+", label: "Projects Delivered" },
            { value: "15+", label: "Odoo Modules" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-6 first:pl-0 last:pr-0">
              <span className="font-display text-2xl font-bold text-accent-light">{stat.value}</span>
              <span className="text-xs text-text-muted">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
