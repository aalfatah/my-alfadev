"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TimelineItem {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  type: "work" | "education" | "award";
  tags?: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE: TimelineItem[] = [
  {
    id: "t1",
    year: "2023 – Present",
    role: "Senior Odoo Developer & System Architect",
    company: "Current Company",
    description:
      "Architecting multi-tenant Odoo deployments, building custom ERP modules, and leading UI/UX design for internal tools.",
    type: "work",
    tags: ["Odoo 17", "Python", "PostgreSQL", "Docker"],
  },
  {
    id: "t2",
    year: "2021 – 2023",
    role: "Full Stack Developer",
    company: "Previous Company",
    description:
      "Developed REST APIs, implemented Odoo integrations, and built responsive React dashboards for enterprise clients.",
    type: "work",
    tags: ["React", "Next.js", "Python", "REST API"],
  },
  {
    id: "t3",
    year: "2020 – 2021",
    role: "UI/UX Designer & Frontend Dev",
    company: "Freelance",
    description:
      "Delivered high-fidelity Figma prototypes and production-ready UIs for startups across Southeast Asia.",
    type: "work",
    tags: ["Figma", "Tailwind", "TypeScript"],
  },
  {
    id: "t4",
    year: "2019",
    role: "B.Sc. Computer Science",
    company: "University",
    description:
      "Focused on software engineering, databases, and human-computer interaction.",
    type: "education",
  },
];

const TYPE_ICON = {
  work: <Briefcase size={14} />,
  education: <GraduationCap size={14} />,
  award: <Award size={14} />,
};

const TYPE_COLOR = {
  work: "border-accent/60 bg-accent/10 text-accent-light",
  education: "border-highlight/60 bg-highlight/10 text-highlight-light",
  award: "border-amber-500/60 bg-amber-500/10 text-amber-400",
};

// ─── Timeline Item Component ──────────────────────────────────────────────────

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex w-full gap-6",
        isLeft ? "flex-row" : "flex-row-reverse"
      )}
    >
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="bento-card group w-[calc(50%-28px)] hover:border-accent/40"
      >
        {/* Year badge */}
        <div className="mb-3 flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
              TYPE_COLOR[item.type]
            )}
          >
            {TYPE_ICON[item.type]}
            {item.year}
          </span>
        </div>

        <h3 className="mb-0.5 font-display text-sm font-semibold text-text-primary">
          {item.role}
        </h3>
        <p className="mb-2 text-xs text-accent-light">{item.company}</p>
        <p className="text-xs leading-relaxed text-text-secondary">{item.description}</p>

        {item.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-surface-overlay px-2 py-0.5 text-[11px] font-medium text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Center dot + line */}
      <div className="relative flex w-14 flex-shrink-0 flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.4, type: "spring" }}
          className="z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-surface-base shadow-glow"
        >
          <span className="text-accent">{TYPE_ICON[item.type]}</span>
        </motion.div>
        {/* connector line (not for last item) */}
        <div className="absolute top-8 h-[calc(100%+1.5rem)] w-px bg-surface-border" />
      </div>

      {/* Spacer on opposite side */}
      <div className="w-[calc(50%-28px)]" />
    </div>
  );
}

// ─── About Cards ──────────────────────────────────────────────────────────────

const ABOUT_HIGHLIGHTS = [
  {
    icon: <MapPin size={16} />,
    label: "Location",
    value: "Southeast Asia",
  },
  {
    icon: <Calendar size={16} />,
    label: "Experience",
    value: "5+ Years",
  },
  {
    icon: <Briefcase size={16} />,
    label: "Focus",
    value: "Odoo / ERP Systems",
  },
];

// ─── About Section ────────────────────────────────────────────────────────────

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Top divider line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-highlight/40 to-transparent"
      />

      <Container>
        {/* Section header */}
        <Reveal direction="up" className="mb-16 text-center">
          <span className="inline-block rounded-full border border-highlight/30 bg-highlight/10 px-3 py-1 text-xs font-medium text-highlight-light">
            About Me
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            The Person Behind the{" "}
            <span className="gradient-text">Code</span>
          </h2>
        </Reveal>

        {/* Bio + highlights row */}
        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Bio */}
          <Reveal direction="left">
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m an{" "}
                <span className="text-text-primary font-medium">IT Programmer</span> and{" "}
                <span className="text-text-primary font-medium">Odoo Developer</span> with
                a passion for building systems that are both technically robust and
                visually refined. My work spans the full stack — from database schema
                design all the way to pixel-perfect UIs.
              </p>
              <p>
                Over the years I&apos;ve developed deep expertise in{" "}
                <span className="text-accent-light font-medium">Odoo ERP customisation</span>,
                architecting multi-module solutions that handle complex business logic
                while remaining maintainable and scalable.
              </p>
              <p>
                When I&apos;m not writing Python or designing system flows, you&apos;ll find
                me exploring modern design systems, contributing to open-source
                tooling, or prototyping the next idea in Figma.
              </p>
            </div>
          </Reveal>

          {/* Highlight cards */}
          <Reveal direction="right" className="flex flex-col justify-center gap-4">
            {ABOUT_HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="bento-card flex items-center gap-4 py-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-light">
                  {h.icon}
                </div>
                <div>
                  <p className="text-xs text-text-muted">{h.label}</p>
                  <p className="text-sm font-semibold text-text-primary">{h.value}</p>
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal direction="up" className="mb-10 text-center">
          <h3 className="font-display text-xl font-bold text-text-primary">
            Experience &amp; Education
          </h3>
          <p className="mt-2 text-sm text-text-secondary">
            A timeline of where I&apos;ve been and what I&apos;ve built.
          </p>
        </Reveal>

        <div className="relative flex flex-col gap-6">
          {TIMELINE.map((item, i) => (
            <TimelineCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
