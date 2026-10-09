"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Sparkles, ExternalLink } from "lucide-react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TimelineItem {
  id: string;
  year: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  type: "work" | "education" | "award";
  tags?: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE: TimelineItem[] = [
  {
    id: "t0",
    year: "March 2026 – Present",
    role: "IT Helpdesk / IT Support",
    company: "PT KCC Glass Indonesia",
    companyUrl: "https://www.kccglass.co.kr/",
    description:
      "Managing operational stability for HR Attendance, corporate ERP, and Oracle systems. Providing comprehensive IT support, system optimization, hardware/software troubleshooting & installation, periodic maintenance for network switches, and regular management reporting.",
    type: "work",
    tags: ["Oracle Systems", "Enterprise ERP", "HR Attendance", "Network Switches", "Hardware & IT Support"],
  },
  {
    id: "t1",
    year: "2024 – 2026",
    role: "Odoo Developer & System Architect",
    company: "PT Barito Samudera Sejahtera",
    companyUrl: "https://baritosamudra.co.id/",
    description:
      "Architecting multi-tenant Odoo ERP deployments, custom OWL shipping agency modules, CI/CD automated release pipelines, and reducing manual operational paperwork by 70%.",
    type: "work",
    tags: ["Odoo 17", "Python", "OWL", "PostgreSQL", "CI/CD"],
  },
  {
    id: "t2",
    year: "2023 – 2024",
    role: "Full Stack & IT Systems Engineer",
    company: "Digital Systems & Software Development",
    companyUrl: "https://github.com/aalfatah/DietProApp",
    description:
      "Engineered high-throughput RESTful APIs using Laravel and MySQL, developed native Android apps in Kotlin (DietPro & Careport), and configured GCP cloud infrastructure.",
    type: "work",
    tags: ["Laravel (PHP)", "Kotlin Android", "REST APIs", "GCP", "MySQL"],
  },
  {
    id: "t3",
    year: "2023 – 2024",
    role: "UI/UX Product Designer",
    company: "Independent & Collaborative Studio",
    companyUrl: "https://www.figma.com/@aalfa",
    description:
      "Conducted user research and Design Thinking workshops, crafted design systems, and built clickable interactive prototypes in Figma for web and mobile products.",
    type: "work",
    tags: ["Figma", "Design Thinking", "User Research", "Wireframing"],
  },
  {
    id: "t4",
    year: "2024",
    role: "B.Sc. Computer Science / Information Technology",
    company: "University of Technology Yogyakarta (UTY)",
    companyUrl: "https://www.uty.ac.id/",
    description:
      "Specialized in Software Engineering, Database Systems, Network Architecture, and Human-Computer Interaction.",
    type: "education",
    tags: ["Computer Science", "Database Architecture", "Networking"],
  },
];

const TYPE_ICON = {
  work: <Briefcase size={14} />,
  education: <GraduationCap size={14} />,
  award: <Award size={14} />,
};

const TYPE_COLOR = {
  work: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  education: "border-blue-500/40 bg-blue-500/10 text-blue-400",
  award: "border-amber-500/40 bg-amber-500/10 text-amber-400",
};

// ─── Timeline Item Component ──────────────────────────────────────────────────

// ─── Timeline Item Component ──────────────────────────────────────────────────

function TimelineItemRow({
  item,
  index,
  isLeft,
}: {
  item: TimelineItem;
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="relative flex items-start lg:items-center w-full"
    >
      {/* Node circle on the vertical line (left on mobile/tablet, dead center on desktop) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.08 + 0.1, duration: 0.35, type: "spring" }}
        className="absolute left-5 sm:left-6 lg:left-1/2 top-5 sm:top-6 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 border-emerald-500 bg-zinc-950 shadow-glow"
      >
        <span className="text-emerald-400">{TYPE_ICON[item.type]}</span>
      </motion.div>

      {/* Card wrapper */}
      <div
        className={cn(
          "w-full pl-12 sm:pl-16 lg:pl-0",
          "lg:w-[calc(50%-2.5rem)]",
          isLeft ? "lg:mr-auto" : "lg:ml-auto"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.08, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          whileHover={{ y: -3 }}
          className="group rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-5 sm:p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-emerald-500/5"
        >
          {/* Header pill & Type */}
          <div className="mb-3 flex items-center justify-between gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                TYPE_COLOR[item.type]
              )}
            >
              {TYPE_ICON[item.type]}
              {item.year}
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
              {item.type}
            </span>
          </div>

          <h3 className="font-display text-base sm:text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
            {item.role}
          </h3>
          {item.companyUrl ? (
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item.company}`}
              className="mt-1 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-400 hover:text-emerald-300 hover:underline transition-colors group/link"
            >
              <span>{item.company}</span>
              <ExternalLink size={12} className="opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
            </a>
          ) : (
            <p className="mt-1 text-xs sm:text-sm font-medium text-emerald-400">
              {item.company}
            </p>
          )}
          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
            {item.description}
          </p>

          {item.tags && (
            <div className="mt-4 flex flex-wrap gap-1.5 pt-3.5 border-t border-zinc-800/60">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-zinc-800 bg-zinc-900/90 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

// ─── About Cards ──────────────────────────────────────────────────────────────

const ABOUT_HIGHLIGHTS = [
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Indonesia (Available Worldwide)",
  },
  {
    icon: <Calendar size={18} />,
    label: "Experience",
    value: "3+ Years Delivering Systems",
  },
  {
    icon: <Briefcase size={18} />,
    label: "Active Role",
    value: " Odoo ERP Developer | IT Helpdesk & Support Specialist",
  },
];

// ─── About Section ────────────────────────────────────────────────────────────

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Ahmat Alfatah"
      className="relative flex flex-col items-center justify-center w-full overflow-hidden py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 border-t border-zinc-800/60"
    >
      {/* Top divider line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />

      <Container>
        {/* Section header */}
        <Reveal direction="up" className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 w-full">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Profile &amp; Story</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 text-center">
            The Person Behind the <span className="gradient-text">Architecture</span>
          </h2>
          <p className="mt-3.5 max-w-xl text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed text-center">
            A developer who bridges technical system complexity with elegant user experience.
          </p>
        </Reveal>

        {/* Bio + highlights row */}
        <div className="mb-16 sm:mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Bio text */}
          <Reveal direction="left">
            <div className="space-y-4 text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-7 shadow-xl backdrop-blur-sm">
              <p>
                I&apos;m{" "}
                <span className="text-zinc-100 font-semibold">Ahmat Alfatah</span> — an{" "}
                <span className="text-emerald-400 font-medium">IT Programmer</span>,{" "}
                <span className="text-cyan-400 font-medium">IT Support &amp; Helpdesk Specialist</span> at PT KCC Glass Indonesia,{" "}
                <span className="text-emerald-400 font-medium">Odoo ERP Developer</span>,{" "}
                <span className="text-blue-400 font-medium">System Architect</span>, and{" "}
                <span className="text-purple-400 font-medium">UI/UX Designer</span> dedicated to crafting solutions that are both technically bulletproof and enjoyable to use.
              </p>
              <p>
                Currently serving at <span className="text-zinc-100 font-semibold">PT KCC Glass Indonesia</span>, managing operational stability for corporate HR Attendance, ERP, and Oracle systems, along with proactive troubleshooting, hardware installations, and network switches maintenance.
              </p>
              <p>
                Previously at <span className="text-zinc-100 font-semibold">PT BSS</span>, I spearheaded enterprise digital transformations by automating shipping workflows (reducing manual paperwork by 70%), while consistently delivering full-stack web/mobile systems and designing intuitive interfaces in Figma.
              </p>
            </div>
          </Reveal>

          {/* Highlight cards */}
          <Reveal direction="right" className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5 sm:gap-4">
            {ABOUT_HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 shadow-md backdrop-blur-sm transition-all hover:border-emerald-500/40"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  {h.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500 font-medium">{h.label}</p>
                  <p className="text-sm sm:text-base font-semibold text-zinc-200 truncate mt-0.5">{h.value}</p>
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>

        {/* Timeline header */}
        <Reveal direction="up" className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 w-full">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-100 text-center">
            Career Journey &amp; Education
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 text-center">
            A chronological timeline of roles, delivered systems, and engineering milestones.
          </p>
        </Reveal>

        {/* Continuous connected timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Continuous vertical connector line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-5 sm:left-6 lg:left-1/2 top-4 bottom-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-500/60 via-zinc-800 to-zinc-800/20"
          />

          {/* Timeline cards list */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {TIMELINE.map((item, i) => (
              <TimelineItemRow
                key={item.id}
                item={item}
                index={i}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

