"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FolderGit2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Database,
  Cpu,
  Palette,
  Layers,
  Sparkles,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

// ─── Inline SVG Brand Icons ──────────────────────────────────────────────────

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function FigmaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 38 57"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#F24E1E"
        d="M19 28.5A9.5 9.5 0 0 1 9.5 19 9.5 9.5 0 0 1 19 9.5H28.5V28.5H19Z"
      />
      <path
        fill="#A259FF"
        d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-9.5-9.5H9.5"
      />
      <path
        fill="#1ABCFE"
        d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5Z"
      />
      <path
        fill="#0ACF83"
        d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z"
      />
      <path
        fill="#FF7262"
        d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0Z"
      />
    </svg>
  );
}

// ─── Filter Category Type & Projects Data ─────────────────────────────────────

type FilterCategory = "Semua" | "Odoo & ERP" | "IT Systems" | "UI/UX Design";

const CATEGORIES: FilterCategory[] = [
  "Semua",
  "Odoo & ERP",
  "IT Systems",
  "UI/UX Design",
];

interface ProjectItem {
  id: string;
  title: string;
  category: "Odoo & ERP" | "IT Systems" | "UI/UX Design";
  desc: string;
  impact?: string;
  githubLink?: string;
  figmaLink?: string;
  tags: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Custom Odoo ERP for Shipping Agency",
    category: "Odoo & ERP",
    desc: "Automated manual documentation by 70% and integrated with large-scale shipping companies for PT BSS.",
    impact: "70% Manual Work Automated",
    githubLink: "https://github.com/aalfatah/ShippingAgency-OdooDev.git",
    tags: ["Odoo 17", "Python", "CI/CD", "ERP", "PostgreSQL"],
  },
  {
    id: "proj-2",
    title: "Shippping Agency Company Profile",
    category: "UI/UX Design",
    desc: "Intuitive corporate interface and design system.",
    impact: "Complete Figma Design System",
    figmaLink: "https://www.figma.com/design/y67p981wLGkzuSKtG9Yw3P/BSS-Company-Profile",
    tags: ["Figma", "Design System", "Corporate UI", "Typography"],
  },
  {
    id: "proj-3",
    title: "DietPro & Careport App",
    category: "IT Systems",
    desc: "Full-stack health companion apps with RESTful APIs using Laravel and Kotlin.",
    impact: "Android Native & REST Architecture",
    githubLink: "https://github.com/aalfatah/DietProApp.git",
    tags: ["Laravel (PHP)", "Kotlin (Android)", "RESTful APIs", "MySQL"],
  },
  {
    id: "proj-4",
    title: "Redesign UI UTY & Rakamin Final Project",
    category: "UI/UX Design",
    desc: "Comprehensive design systems applying Design Thinking.",
    impact: "Validated User Research & Wireframes",
    figmaLink: "https://www.figma.com/design/VrRBemrVJXyQWSGgQGqmx7/Redesign-UI-UTY",
    tags: ["Design Thinking", "User Research", "Figma", "Wireframing"],
  },
  {
    id: "proj-5",
    title: "Recipe Food App",
    category: "UI/UX Design",
    desc: "Mobile app UI for recipe sharing community.",
    impact: "Interactive Community Mobile Prototype",
    figmaLink: "https://www.figma.com/design/ky4RwsHRKzZHHD6aqtVmKY/Recipe-Food",
    tags: ["Mobile UI", "Figma", "Interactive Prototype", "Community"],
  },
  {
    id: "proj-6",
    title: "Smart Home Automation (IoT)",
    category: "IT Systems",
    desc: "Implemented temperature & soil moisture monitoring improving water efficiency by 30%.",
    impact: "+30% Resource & Water Efficiency",
    githubLink: "https://github.com/aalfatah",
    tags: ["IoT Automation", "Telemetry Sensors", "MQTT", "Hardware"],
  },
];

function getCategoryConfig(category: string) {
  switch (category) {
    case "Odoo & ERP":
      return {
        badge: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
        icon: <Database className="h-3.5 w-3.5 text-emerald-400" />,
        accent: "#10b981",
      };
    case "IT Systems":
      return {
        badge: "border-blue-500/40 bg-blue-500/10 text-blue-400",
        icon: <Cpu className="h-3.5 w-3.5 text-blue-400" />,
        accent: "#3b82f6",
      };
    case "UI/UX Design":
      return {
        badge: "border-purple-500/40 bg-purple-500/10 text-purple-400",
        icon: <Palette className="h-3.5 w-3.5 text-purple-400" />,
        accent: "#a855f7",
      };
    default:
      return {
        badge: "border-zinc-700 bg-zinc-800 text-zinc-300",
        icon: <Layers className="h-3.5 w-3.5 text-zinc-400" />,
        accent: "#71717a",
      };
  }
}

// ─── 21st.dev Card Stack Component ────────────────────────────────────────────

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("Semua");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const filteredProjects =
    activeCategory === "Semua"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const total = filteredProjects.length;

  const nextCard = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevCard = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-cycle stack every 5 seconds (with pause capability)
  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    const interval = setInterval(nextCard, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, nextCard, total]);

  const activeProject = filteredProjects[currentIndex] || filteredProjects[0];

  return (
    <section
      id="portfolio"
      aria-label="Interactive Project Showcase (Card Stack)"
      className="relative flex flex-col items-center justify-center w-full overflow-hidden py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 border-t border-zinc-800/60"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-emerald-500/5 blur-[160px]"
      />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Interactive Project Card Stack</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 text-center">
            Selected Works &amp; <span className="gradient-text">Shipped Systems</span>
          </h2>

          <p className="mt-3.5 max-w-2xl text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed text-center">
            Browse through my flagship ERP implementations, full-stack systems, and Figma designs via an interactive 3D stacked deck.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="mb-10 sm:mb-14 flex justify-center">
          <div
            role="tablist"
            aria-label="Filter project categories"
            className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-1 sm:p-1.5 shadow-xl backdrop-blur-md"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === "Semua"
                  ? PROJECTS_DATA.length
                  : PROJECTS_DATA.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-xl px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "text-zinc-100"
                      : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="cardStackCategoryTab"
                      className="absolute inset-0 rounded-xl bg-zinc-800/90 border border-zinc-700/60 shadow-sm"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
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

        {/* ─── 21st.dev Card Stack Centered Showcase Layout ───────────────── */}
        <div className="flex flex-col items-center max-w-3xl mx-auto w-full">
          {/* Centered 3D Stacked Deck */}
          <div
            className="relative w-full max-w-lg min-h-[460px] sm:min-h-[440px] h-[460px] sm:h-[440px] cursor-pointer mx-auto"
            onClick={nextCard}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                // Calculate distance from current index in modular space
                const diff = (idx - currentIndex + total) % total;

                // Render only the top 3 cards in the stack
                if (diff > 2) return null;

                const isTop = diff === 0;
                const config = getCategoryConfig(project.category);

                // 21st.dev Card Stack transform values
                const yOffset = diff * 16;
                const scale = 1 - diff * 0.05;
                const zIndex = 30 - diff * 10;
                const opacity = 1 - diff * 0.22;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{
                      opacity,
                      scale,
                      y: yOffset,
                      zIndex,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.85,
                      y: -40,
                      transition: { duration: 0.25 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 26,
                    }}
                    style={{
                      transformOrigin: "top center",
                    }}
                    className={cn(
                      "absolute inset-x-0 top-0 h-full rounded-2xl p-6 sm:p-7 shadow-2xl transition-colors duration-300",
                      "flex flex-col justify-between border",
                      isTop
                        ? "bg-zinc-950 border-zinc-700/80 shadow-emerald-500/5 ring-1 ring-emerald-500/20"
                        : "bg-zinc-900/95 border-zinc-800"
                    )}
                  >
                    {/* Top Bar & Content */}
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                            config.badge
                          )}
                        >
                          {config.icon}
                          {project.category}
                        </span>

                        <span className="font-mono text-xs font-bold text-zinc-500">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h4 className="font-display text-lg sm:text-xl font-bold text-zinc-100 leading-snug">
                        {project.title}
                      </h4>

                      <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {project.desc}
                      </p>

                      {/* Impact badge inside card */}
                      {project.impact && (
                        <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/25 bg-emerald-950/30 px-2.5 py-1 text-xs font-medium text-emerald-300">
                          <Sparkles className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{project.impact}</span>
                        </div>
                      )}

                      {/* Project tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-zinc-800 bg-zinc-900/90 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Bottom: Stylized Action Buttons */}
                    <div
                      className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3"
                      onClick={(e) => e.stopPropagation()} // Prevent triggering nextCard when clicking link
                    >
                      <div className="flex items-center gap-2">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                          >
                            <GithubIcon className="h-3.5 w-3.5" />
                            <span>Code</span>
                          </a>
                        )}

                        {project.figmaLink && (
                          <a
                            href={project.figmaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-purple-500/30 bg-purple-950/30 px-3 py-1.5 text-xs font-medium text-purple-300 transition-colors hover:border-purple-400 hover:bg-purple-900/40 hover:text-purple-100"
                          >
                            <FigmaIcon className="h-3.5 w-3.5" />
                            <span>Figma Design</span>
                            <ExternalLink className="h-3 w-3 opacity-70" />
                          </a>
                        )}

                        {!project.githubLink && !project.figmaLink && (
                          <span className="text-[11px] text-zinc-500 font-medium">
                            Enterprise Proprietary
                          </span>
                        )}
                      </div>

                      <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                        Tap deck <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Centered Controls Bar: Navigation Arrows, Counter, Progress bar, & Auto toggle */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevCard}
                aria-label="Previous Project"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/90 text-zinc-300 shadow-md transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextCard}
                aria-label="Next Project"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-md transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-500/20 hover:text-emerald-300 active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Counter, Progress Bar, & Auto toggle */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-emerald-400">
                {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <span className="h-1.5 w-28 sm:w-36 rounded-full bg-zinc-800 overflow-hidden">
                <motion.span
                  className="block h-full bg-emerald-400 rounded-full"
                  animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <button
                type="button"
                onClick={() => setAutoPlay((prev) => !prev)}
                className="text-zinc-500 hover:text-zinc-300 text-xs inline-flex items-center gap-1.5 transition-colors"
                title={autoPlay ? "Pause auto-cycle" : "Play auto-cycle"}
              >
                {autoPlay ? <Pause className="h-3.5 w-3.5 text-emerald-400" /> : <Play className="h-3.5 w-3.5" />}
                <span className="text-[10px] font-mono">{autoPlay ? "Auto" : "Paused"}</span>
              </button>
            </div>

            <span className="text-xs text-zinc-500 hidden sm:inline">
              Tap deck or arrows to cycle
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
