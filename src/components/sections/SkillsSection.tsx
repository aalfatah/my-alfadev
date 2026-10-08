"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Code2, Database, Server, Globe,
  Layers, Cloud, Network, Palette,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Skill {
  name: string;
  level: number; // 0–100
  color: string; // tailwind gradient classes
}

interface BentoCard {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  skills: Skill[];
  /** Controls grid span */
  size: "sm" | "md" | "lg";
  accent: string; // CSS color for glow
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENTO_CARDS: BentoCard[] = [
  {
    id: "odoo",
    title: "Odoo / ERP",
    subtitle: "Core expertise",
    icon: <Database size={20} />,
    size: "lg",
    accent: "#10b981",
    skills: [
      { name: "Odoo 16/17", level: 95, color: "from-emerald-500 to-emerald-400" },
      { name: "OWL Framework", level: 85, color: "from-emerald-500 to-teal-400" },
      { name: "Custom Modules", level: 90, color: "from-emerald-400 to-green-400" },
      { name: "XML/QWeb", level: 88, color: "from-teal-500 to-emerald-400" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Server & APIs",
    icon: <Server size={20} />,
    size: "md",
    accent: "#3b82f6",
    skills: [
      { name: "Python", level: 92, color: "from-blue-500 to-blue-400" },
      { name: "PostgreSQL", level: 85, color: "from-blue-500 to-indigo-400" },
      { name: "REST / JSON-RPC", level: 88, color: "from-indigo-500 to-blue-400" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "UI Engineering",
    icon: <Code2 size={20} />,
    size: "md",
    accent: "#8b5cf6",
    skills: [
      { name: "React / Next.js", level: 88, color: "from-violet-500 to-purple-400" },
      { name: "TypeScript", level: 85, color: "from-purple-500 to-violet-400" },
      { name: "Tailwind CSS", level: 90, color: "from-violet-400 to-fuchsia-400" },
    ],
  },
  {
    id: "architecture",
    title: "System Architecture",
    subtitle: "Design & infrastructure",
    icon: <Network size={20} />,
    size: "lg",
    accent: "#f59e0b",
    skills: [
      { name: "Microservices", level: 80, color: "from-amber-500 to-yellow-400" },
      { name: "Docker / Compose", level: 82, color: "from-yellow-500 to-amber-400" },
      { name: "Nginx / Reverse Proxy", level: 78, color: "from-amber-400 to-orange-400" },
      { name: "Linux / Ubuntu", level: 85, color: "from-orange-500 to-amber-400" },
    ],
  },
  {
    id: "uiux",
    title: "UI / UX Design",
    subtitle: "Figma & design systems",
    icon: <Palette size={20} />,
    size: "sm",
    accent: "#ec4899",
    skills: [
      { name: "Figma", level: 88, color: "from-pink-500 to-rose-400" },
      { name: "Design Systems", level: 82, color: "from-rose-500 to-pink-400" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    subtitle: "CI/CD & cloud",
    icon: <Cloud size={20} />,
    size: "sm",
    accent: "#06b6d4",
    skills: [
      { name: "Git / GitHub", level: 90, color: "from-cyan-500 to-sky-400" },
      { name: "CI/CD Pipelines", level: 75, color: "from-sky-500 to-cyan-400" },
    ],
  },
];

// ─── Skill Bar ────────────────────────────────────────────────────────────────

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-text-secondary">{skill.name}</span>
        <span className="text-xs font-semibold text-text-primary">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-overlay">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1],
          }}
          className={cn("h-full rounded-full bg-gradient-to-r", skill.color)}
        />
      </div>
    </div>
  );
}

// ─── Circular Progress Ring ───────────────────────────────────────────────────

function ProgressRing({
  value,
  size = 56,
  stroke = 4,
  color,
}: {
  value: number;
  size?: number;
  stroke?: number;
  color: string;
}) {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true });
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;

  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} stroke="#27272a" strokeWidth={stroke} fill="none" />
      <motion.circle
        ref={ref}
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circ }}
        transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      />
    </svg>
  );
}

// ─── Bento Card ───────────────────────────────────────────────────────────────

function BentoSkillCard({ card, index }: { card: BentoCard; index: number }) {
  const colSpan = {
    sm: "col-span-1",
    md: "col-span-1 sm:col-span-2 lg:col-span-2",
    lg: "col-span-1 sm:col-span-2 lg:col-span-3",
  }[card.size];

  const isLarge = card.size === "lg";

  return (
    <Reveal direction="up" delay={index * 0.07} className={cn("h-full", colSpan)}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="bento-card group relative h-full overflow-hidden"
        style={{ "--glow-color": card.accent } as React.CSSProperties}
      >
        {/* Background accent glow */}
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
          style={{ background: card.accent }}
          aria-hidden="true"
        />

        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ background: `${card.accent}20`, color: card.accent }}
            >
              {card.icon}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">{card.title}</h3>
              {card.subtitle && (
                <p className="text-xs text-text-muted">{card.subtitle}</p>
              )}
            </div>
          </div>

          {/* Show ring for large cards */}
          {isLarge && (
            <div className="relative flex items-center justify-center">
              <ProgressRing value={card.skills[0].level} color={card.accent} />
              <span className="absolute text-[10px] font-bold text-text-primary rotate-90">
                {card.skills[0].level}%
              </span>
            </div>
          )}
        </div>

        {/* Skill bars */}
        <div className={cn("space-y-3", isLarge ? "mt-2" : "")}>
          {card.skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </motion.div>
    </Reveal>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, description }: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <Reveal direction="up" className="mb-12 text-center">
      <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-xl mx-auto text-text-secondary text-base">{description}</p>
    </Reveal>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <Container>
        <SectionHeader
          eyebrow="Technical Expertise"
          title={<>My <span className="gradient-text">Skill Stack</span></>}
          description="A full-spectrum toolkit spanning ERP development, backend systems, frontend engineering, and design — built through years of real-world delivery."
        />

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {BENTO_CARDS.map((card, i) => (
            <BentoSkillCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
