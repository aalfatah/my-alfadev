"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, GitBranch, Code2, Database, LayoutDashboard, Globe, Layers } from "lucide-react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectCategory = "all" | "odoo" | "web" | "system" | "design";

interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory[];
  tags: string[];
  icon: React.ReactNode;
  accentColor: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Custom Odoo Manufacturing Module",
    description:
      "End-to-end custom manufacturing workflow with automated BOM generation, real-time production tracking, and OWL-powered interactive dashboards.",
    category: ["odoo"],
    tags: ["Odoo 17", "Python", "OWL", "PostgreSQL"],
    icon: <Database size={20} />,
    accentColor: "#10b981",
    featured: true,
  },
  {
    id: "p2",
    title: "Multi-Company ERP Integration",
    description:
      "Seamless cross-company accounting and inventory synchronisation bridging legacy systems with Odoo via custom JSON-RPC APIs.",
    category: ["odoo", "system"],
    tags: ["Odoo", "REST API", "Python", "XML"],
    icon: <Layers size={20} />,
    accentColor: "#3b82f6",
    featured: true,
  },
  {
    id: "p3",
    title: "Fleet Management System",
    description:
      "Real-time fleet tracking and maintenance scheduler built on Odoo with custom map integration and automated service alerts.",
    category: ["odoo", "web"],
    tags: ["Odoo 16", "Leaflet.js", "Python", "PostgreSQL"],
    icon: <Globe size={20} />,
    accentColor: "#8b5cf6",
  },
  {
    id: "p4",
    title: "Analytics Dashboard Platform",
    description:
      "React/Next.js SaaS analytics platform with real-time charts, role-based access, and dark-mode-first design system.",
    category: ["web"],
    tags: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
    icon: <LayoutDashboard size={20} />,
    accentColor: "#f59e0b",
    featured: true,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "p5",
    title: "Microservices API Gateway",
    description:
      "Nginx-based reverse proxy gateway orchestrating 8 Python microservices with JWT authentication and rate limiting.",
    category: ["system"],
    tags: ["Nginx", "Python", "Docker", "JWT"],
    icon: <Code2 size={20} />,
    accentColor: "#ef4444",
  },
  {
    id: "p6",
    title: "SaaS Design System",
    description:
      "Complete Figma design system with 200+ components, dark/light tokens, and auto-generated Tailwind config.",
    category: ["design"],
    tags: ["Figma", "Design Tokens", "Tailwind", "Storybook"],
    icon: <Layers size={20} />,
    accentColor: "#ec4899",
  },
];

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "odoo", label: "Odoo / ERP" },
  { id: "web", label: "Web Apps" },
  { id: "system", label: "Architecture" },
  { id: "design", label: "Design" },
];

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -5 }}
      className="bento-card group relative flex flex-col overflow-hidden"
    >
      {/* Featured badge */}
      {project.featured && (
        <span className="absolute right-4 top-4 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent-light ring-1 ring-accent/30">
          Featured
        </span>
      )}

      {/* Icon + accent glow */}
      <div className="mb-4 flex items-start gap-3">
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-250 group-hover:shadow-glow"
          style={{
            background: `${project.accentColor}20`,
            color: project.accentColor,
          }}
        >
          {project.icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="mb-2 font-display text-base font-semibold text-text-primary leading-snug">
        {project.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-surface-overlay px-2 py-0.5 text-[11px] font-medium text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.liveUrl || project.repoUrl) && (
        <div className="flex items-center gap-3 border-t border-surface-border pt-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
              className="flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors duration-250 hover:text-accent-light"
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repository for ${project.title}`}
              className="flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors duration-250 hover:text-accent-light"
            >
              <GitBranch size={12} /> Source
            </a>
          )}
        </div>
      )}

      {/* Hover accent border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[1.25rem] opacity-0 ring-1 transition-opacity duration-250 group-hover:opacity-100"
        style={{ "--ring-color": project.accentColor, ringColor: project.accentColor } as React.CSSProperties}
      />
    </motion.article>
  );
}

// ─── Filter Tabs ──────────────────────────────────────────────────────────────

function FilterTabs({
  active,
  onChange,
}: {
  active: ProjectCategory;
  onChange: (c: ProjectCategory) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap justify-center gap-2"
    >
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          role="tab"
          aria-selected={active === cat.id}
          aria-controls="project-grid"
          id={`tab-${cat.id}`}
          onClick={() => onChange(cat.id)}
          className={cn(
            "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-250",
            active === cat.id
              ? "text-text-primary"
              : "text-text-muted hover:text-text-secondary"
          )}
        >
          {active === cat.id && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 rounded-lg bg-surface-overlay ring-1 ring-surface-border"
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
            />
          )}
          <span className="relative z-10">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Portfolio Section ────────────────────────────────────────────────────────

export default function PortfolioSection() {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filtered = PROJECTS.filter(
    (p) => active === "all" || p.category.includes(active)
  );

  return (
    <section
      id="portfolio"
      aria-label="Portfolio"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <Container>
        {/* Header */}
        <Reveal direction="up" className="mb-10 text-center">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
            Portfolio
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-text-secondary text-base">
            A collection of projects across ERP, web development, system architecture, and design.
          </p>
        </Reveal>

        {/* Filter tabs */}
        <Reveal direction="up" delay={0.1} className="mb-10">
          <FilterTabs active={active} onChange={setActive} />
        </Reveal>

        {/* Project grid */}
        <motion.div
          id="project-grid"
          role="tabpanel"
          aria-label={`${active} projects`}
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-20 text-center text-text-muted text-sm">
            No projects in this category yet.
          </div>
        )}
      </Container>
    </section>
  );
}
