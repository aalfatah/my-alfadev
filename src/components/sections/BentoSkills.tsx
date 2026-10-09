"use client";

import { motion } from "motion/react";
import {
  Database,
  Code2,
  Palette,
  Server,
  Workflow,
  Sparkles,
  Smartphone,
  Cpu,
  Radio,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  TrendingDown,
  Gauge,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

// ─── Figma Brand Icon (Inline SVG) ───────────────────────────────────────────
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

export default function BentoSkills() {
  return (
    <section
      id="skills"
      aria-label="Core Competencies and Skills"
      className="relative flex flex-col items-center justify-center w-full overflow-hidden py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 border-t border-zinc-800/60"
    >
      {/* Background radial atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-emerald-500/5 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/3 h-[300px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]"
      />

      {/* Subtle top divider line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Core Competencies Matrix</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 text-center">
            Engineered for <span className="gradient-text">Enterprise Impact</span> &amp; Precision
          </h2>

          <p className="mt-3.5 max-w-2xl text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed text-center">
            A comprehensive skillset forged through mission-critical production systems — combining deep Odoo ERP customization, full-stack web and mobile engineering, design thinking, and high-availability infrastructure.
          </p>
        </div>

        {/* ─── Bento Box Grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">

          {/* CARD 1: Odoo & ERP Architecture (Featured: Full width on mobile/tablet, 7 cols on lg) */}
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-5 sm:p-6 lg:p-7",
              "shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-emerald-500/10",
              "col-span-1 md:col-span-2 lg:col-span-7 flex flex-col justify-between"
            )}
          >
            {/* Ambient inner glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40"
            />

            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 shadow-inner"
                  >
                    <Database className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                      Primary Specialization
                    </span>
                    <h3 className="text-lg font-bold text-zinc-100 sm:text-2xl">
                      Odoo &amp; ERP Architecture
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                  <Workflow className="h-3 w-3" /> Core
                </span>
              </div>

              {/* Description */}
              <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-300">
                Custom module architecture, automated CI/CD deployment pipelines, and end-to-end business process digitization that transforms manual operations into scalable workflows.
              </p>

              {/* High-Impact Stat Pill */}
              <div className="mt-5 rounded-xl border border-emerald-500/25 bg-emerald-950/30 p-3.5 sm:p-4 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300 flex-shrink-0">
                      <TrendingDown className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-zinc-400">Proven Efficiency Metric</p>
                      <p className="text-sm font-bold text-emerald-300 sm:text-base">
                        70% Reduction in Manual Documentation
                      </p>
                    </div>
                  </div>
                  <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono font-bold uppercase text-emerald-300 self-start sm:self-center">
                    PT BSS
                  </span>
                </div>
              </div>

              {/* Visual CI/CD Flow Banner */}
              <div className="mt-4 rounded-lg border border-zinc-800/80 bg-zinc-900/60 p-3 text-xs">
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" /> Git Commit
                  </span>
                  <span className="hidden sm:inline text-zinc-600">→</span>
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Cpu className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" /> Automated Tests
                  </span>
                  <span className="hidden sm:inline text-zinc-600">→</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Workflow className="h-3.5 w-3.5 flex-shrink-0" /> Zero-Downtime Deploy
                  </span>
                </div>
              </div>
            </div>

            {/* Competency Badges */}
            <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-zinc-800/60">
              {[
                "Custom Modules",
                "OWL Framework",
                "CI/CD Pipelines",
                "Process Automation",
                "PostgreSQL Tuning",
                "Multi-Tenant ERP",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/90 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-medium text-zinc-300 transition-colors group-hover:border-zinc-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.article>

          {/* CARD 2: UI/UX & Product Design (1 col mobile & tablet, 5 cols on lg) */}
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-5 sm:p-6 lg:p-7",
              "shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/10",
              "col-span-1 md:col-span-1 lg:col-span-5 flex flex-col justify-between"
            )}
          >
            {/* Ambient inner glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40"
            />

            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -6 }}
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-950/40 text-purple-400 shadow-inner"
                  >
                    <Palette className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-purple-400">
                      Product &amp; Visual
                    </span>
                    <h3 className="text-lg font-bold text-zinc-100 sm:text-2xl">
                      UI/UX &amp; Product Design
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-300">
                Human-centered Design Thinking methodologies, user research, wireframing, and interactive Figma prototyping for intuitive enterprise and consumer experiences.
              </p>

              {/* Design Thinking Steps */}
              <div className="mt-5 space-y-2">
                {[
                  { step: "01", name: "Empathize & Research", desc: "User interviews" },
                  { step: "02", name: "Design Thinking", desc: "Wireframing & UI" },
                  { step: "03", name: "Figma Prototyping", desc: "Design tokens" },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-center gap-2.5 rounded-lg border border-zinc-800/70 bg-zinc-900/50 p-2.5 text-xs"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-purple-500/20 font-mono text-[10px] font-bold text-purple-300 flex-shrink-0">
                      {item.step}
                    </span>
                    <span className="font-medium text-zinc-200">{item.name}</span>
                    <span className="ml-auto text-zinc-500 text-[10px] sm:text-[11px]">{item.desc}</span>
                  </div>
                ))}
              </div>

              {/* Figma Link Card */}
              <a
                href="https://www.figma.com/@aalfa"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-between rounded-xl border border-purple-500/30 bg-purple-950/30 p-3 text-xs text-purple-300 transition-all hover:border-purple-400 hover:bg-purple-900/40"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <FigmaIcon className="h-4 w-4 flex-shrink-0" />
                  <span className="font-medium truncate">Figma Profile: @aalfa</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
              </a>
            </div>

            {/* Competency Badges */}
            <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-zinc-800/60">
              {[
                "Design Thinking",
                "User Research",
                "Figma Prototyping",
                "Design Systems",
                "User Journeys",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/90 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-medium text-zinc-300 transition-colors group-hover:border-zinc-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.article>

          {/* CARD 3: Web & Mobile Dev (1 col mobile & tablet, 5 cols on lg) */}
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-5 sm:p-6 lg:p-7",
              "shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10",
              "col-span-1 md:col-span-1 lg:col-span-5 flex flex-col justify-between"
            )}
          >
            {/* Ambient inner glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40"
            />

            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-950/40 text-blue-400 shadow-inner"
                  >
                    <Code2 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                      Full-Stack &amp; Native
                    </span>
                    <h3 className="text-lg font-bold text-zinc-100 sm:text-2xl">
                      Web &amp; Mobile Dev
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-400">
                  <Smartphone className="h-3 w-3" /> Cross-Platform
                </span>
              </div>

              {/* Description */}
              <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-300">
                Engineering high-throughput backend services and engaging mobile applications. Clean Architecture with robust database schemas.
              </p>

              {/* Core Pillars */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3">
                  <span className="text-[10px] font-mono font-semibold uppercase text-blue-400">
                    Backend &amp; API
                  </span>
                  <p className="mt-0.5 font-semibold text-zinc-200">Laravel (PHP)</p>
                  <p className="text-[11px] text-zinc-400">MySQL &amp; RESTful APIs</p>
                </div>

                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3">
                  <span className="text-[10px] font-mono font-semibold uppercase text-sky-400">
                    Mobile &amp; Web
                  </span>
                  <p className="mt-0.5 font-semibold text-zinc-200">Kotlin &amp; Next.js</p>
                  <p className="text-[11px] text-zinc-400">Native Android &amp; React</p>
                </div>
              </div>

              {/* Code snippet mock */}
              <div className="mt-3.5 rounded-lg border border-zinc-800/80 bg-zinc-950 p-2.5 sm:p-3 font-mono text-[10px] sm:text-[11px] text-zinc-400">
                <div className="flex items-center gap-1.5 pb-1.5 border-b border-zinc-800/60 text-[10px] text-zinc-500">
                  <span className="h-2 w-2 rounded-full bg-red-500/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                  <span className="h-2 w-2 rounded-full bg-green-500/60" />
                  <span className="ml-2">ApiResource.kt / Route.php</span>
                </div>
                <p className="mt-1.5 text-blue-300 truncate">
                  Route::<span className="text-yellow-300">apiResource</span>(&apos;v1/service&apos;, Controller);
                </p>
              </div>
            </div>

            {/* Competency Badges */}
            <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-zinc-800/60">
              {[
                "Laravel (PHP)",
                "Kotlin Android",
                "RESTful APIs",
                "MySQL",
                "Next.js",
                "TypeScript",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/90 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-medium text-zinc-300 transition-colors group-hover:border-zinc-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.article>

          {/* CARD 4: IT Infra & Engineering (Full width on mobile/tablet, 7 cols on lg) */}
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-5 sm:p-6 lg:p-7",
              "shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10",
              "col-span-1 md:col-span-2 lg:col-span-7 flex flex-col justify-between"
            )}
          >
            {/* Ambient inner glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-40"
            />

            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -6 }}
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 shadow-inner"
                  >
                    <Server className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                      Infrastructure &amp; Operations
                    </span>
                    <h3 className="text-lg font-bold text-zinc-100 sm:text-2xl">
                      IT Infra &amp; Engineering
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-xs font-semibold text-cyan-400">
                  <ShieldCheck className="h-3 w-3" /> Resilient
                </span>
              </div>

              {/* Description */}
              <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-300">
                Enterprise ERP &amp; Oracle system operational support, network switch maintenance, IT helpdesk troubleshooting, hardware installations, and cloud/IoT infrastructure.
              </p>

              {/* Two Column Details */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Enterprise Support & Network */}
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-3.5">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs sm:text-sm">
                    <Radio className="h-4 w-4" /> Enterprise Systems &amp; Switching
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs text-zinc-300">
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Oracle &amp; Enterprise ERP Systems
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      HR Attendance System Operations
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Corporate Network Switches Maintenance
                    </li>
                  </ul>
                </div>

                {/* IT Helpdesk & Hardware Diagnostics */}
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3.5">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs sm:text-sm">
                    <Gauge className="h-4 w-4" /> Helpdesk &amp; Troubleshooting
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs text-zinc-300">
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Hardware &amp; Software Installations
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Comprehensive IT Troubleshooting
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Management Project Reporting
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Competency Badges */}
            <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-zinc-800/60">
              {[
                "Oracle Systems",
                "Enterprise ERP",
                "HR Attendance",
                "Network Switches",
                "IT Helpdesk Support",
                "Hardware Diagnostics",
                "Google Cloud (GCP)",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/90 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-medium text-zinc-300 transition-colors group-hover:border-zinc-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.article>

        </div>
      </Container>
    </section>
  );
}
