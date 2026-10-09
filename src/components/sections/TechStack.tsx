"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Server,
  Layers,
  Terminal,
  Cpu,
  ExternalLink,
  Sparkles,
  GitBranch,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type TechCategory = "all" | "languages" | "frameworks" | "databases" | "devops";

interface TechItem {
  name: string;
  category: "languages" | "frameworks" | "databases" | "devops";
  description: string;
  level: "Advanced" | "Proficient" | "Core";
  color: string;
}

// ─── Data: Directly referenced from https://github.com/aalfatah ──────────────

const TECH_ITEMS: TechItem[] = [
  // Languages
  { name: "Python", category: "languages", description: "Odoo backend, automation scripts, ORM logic", level: "Core", color: "#3b82f6" },
  { name: "PHP", category: "languages", description: "Laravel MVC architecture & RESTful API services", level: "Core", color: "#8b5cf6" },
  { name: "Kotlin", category: "languages", description: "Native Android development (DietPro & Careport)", level: "Proficient", color: "#a855f7" },
  { name: "JavaScript / TypeScript", category: "languages", description: "Modern React/Next.js & OWL framework for Odoo", level: "Core", color: "#eab308" },
  { name: "CSS3 / HTML5", category: "languages", description: "Tailwind CSS, Bootstrap & semantic accessible markup", level: "Core", color: "#06b6d4" },

  // Frameworks & Platforms
  { name: "Odoo ERP (16/17)", category: "frameworks", description: "Custom modules, business process flows & OWL UI", level: "Core", color: "#10b981" },
  { name: "Laravel", category: "frameworks", description: "Robust backend APIs, Eloquent ORM & auth pipelines", level: "Core", color: "#ef4444" },
  { name: "Next.js / React", category: "frameworks", description: "Server components, high-speed SSR & interactive UIs", level: "Core", color: "#fafafa" },
  { name: "Bootstrap", category: "frameworks", description: "Rapid responsive wireframing & enterprise admin layouts", level: "Proficient", color: "#7c3aed" },
  { name: "Tailwind CSS", category: "frameworks", description: "Utility-first design systems and token management", level: "Core", color: "#38bdf8" },

  // Databases & Storage
  { name: "Oracle Database", category: "databases", description: "Corporate ERP & HR Attendance database operations", level: "Core", color: "#f87171" },
  { name: "PostgreSQL", category: "databases", description: "Primary Odoo database engine & performance tuning", level: "Core", color: "#3b82f6" },
  { name: "MySQL", category: "databases", description: "Relational database modeling for Laravel & web services", level: "Core", color: "#f97316" },

  // DevOps, Cloud & Tools
  { name: "Network Switches", category: "devops", description: "Periodic maintenance for enterprise networking & VLAN switches", level: "Core", color: "#06b6d4" },
  { name: "Docker", category: "devops", description: "Containerized environments & reproducible setups", level: "Proficient", color: "#0284c7" },
  { name: "Linux & Ubuntu", category: "devops", description: "Production server administration & deployment environments", level: "Core", color: "#ea580c" },
  { name: "Git & GitHub", category: "devops", description: "Version control, branching strategies & CI/CD workflows", level: "Core", color: "#10b981" },
  { name: "Android Studio", category: "devops", description: "Native Android app building, emulator & SDK tooling", level: "Proficient", color: "#22c55e" },
  { name: "VS Code", category: "devops", description: "Configured IDE workflow with linting and typing engines", level: "Core", color: "#38bdf8" },
];

const CATEGORIES: { id: TechCategory; label: string }[] = [
  { id: "all", label: "All Technologies" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks & ERP" },
  { id: "databases", label: "Databases" },
  { id: "devops", label: "DevOps & Tools" },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<TechCategory>("all");

  const filtered =
    activeTab === "all"
      ? TECH_ITEMS
      : TECH_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section
      id="tech-stack"
      aria-label="Technical Stack"
      className="relative flex flex-col items-center justify-center w-full overflow-hidden py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 border-t border-zinc-800/60"
    >
      {/* Background ambient radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-emerald-500/5 blur-[140px]"
      />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
            <Terminal className="h-3.5 w-3.5" />
            <span>Technical Stack</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 text-center">
            Production Tools &amp; <span className="gradient-text">Ecosystem</span>
          </h2>

          <p className="mt-3.5 max-w-2xl text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed text-center">
            The proven technical stack backing my production repositories on GitHub — from deep Odoo ORM customization to full-stack web, native Android, and containerized cloud systems.
          </p>

          {/* GitHub Profile reference banner */}
          <div className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-4 py-1.5 text-xs text-zinc-400">
            <GitBranch className="h-3.5 w-3.5 text-emerald-400" />
            <span>Verified from GitHub:</span>
            <a
              href="https://github.com/aalfatah"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono font-medium text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              @aalfatah <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mb-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Filter technical stack"
            className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-1 sm:p-1.5 shadow-xl backdrop-blur-md"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              const count =
                cat.id === "all"
                  ? TECH_ITEMS.length
                  : TECH_ITEMS.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-xl px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "text-zinc-100"
                      : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTechTabPill"
                      className="absolute inset-0 rounded-xl bg-zinc-800/90 border border-zinc-700/60 shadow-sm"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                  <span
                    className={cn(
                      "relative z-10 rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold transition-colors",
                      isActive
                        ? "bg-zinc-700 text-emerald-400"
                        : "bg-zinc-900 text-zinc-500"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -3 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950 p-5 shadow-lg transition-all duration-200 hover:border-zinc-700 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                      <h3 className="font-display text-base font-bold text-zinc-100 group-hover:text-white">
                        {tech.name}
                      </h3>
                    </div>

                    <span className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 text-[10px] font-mono font-medium text-zinc-400">
                      {tech.level}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-zinc-400">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/50 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="capitalize">{tech.category}</span>
                  <span className="font-mono text-[10px] text-emerald-400/80">Production Ready</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
