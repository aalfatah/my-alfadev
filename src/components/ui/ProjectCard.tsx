"use client";

import { useState, useRef, type MouseEvent } from "react";
import { motion } from "motion/react";
import { ExternalLink, Layers, Database, Palette, Cpu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── SVG Brand Icons ──────────────────────────────────────────────────────────

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

// ─── Props Interface ──────────────────────────────────────────────────────────

export interface ProjectCardProps {
  title: string;
  category: string;
  description?: string;
  desc?: string;
  githubLink?: string;
  figmaLink?: string;
  tags?: string[];
  className?: string;
}

// ─── Category Visual Styling ──────────────────────────────────────────────────

function getCategoryTheme(category: string) {
  switch (category) {
    case "Odoo & ERP":
      return {
        badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        spotlight: "rgba(16, 185, 129, 0.15)",
        borderSpotlight: "rgba(52, 211, 153, 0.4)",
        icon: <Database className="h-3.5 w-3.5 text-emerald-400" />,
      };
    case "IT Systems":
      return {
        badge: "border-blue-500/30 bg-blue-500/10 text-blue-400",
        spotlight: "rgba(59, 130, 246, 0.15)",
        borderSpotlight: "rgba(96, 165, 250, 0.4)",
        icon: <Cpu className="h-3.5 w-3.5 text-blue-400" />,
      };
    case "UI/UX Design":
      return {
        badge: "border-purple-500/30 bg-purple-500/10 text-purple-400",
        spotlight: "rgba(168, 85, 247, 0.15)",
        borderSpotlight: "rgba(192, 132, 252, 0.4)",
        icon: <Palette className="h-3.5 w-3.5 text-purple-400" />,
      };
    default:
      return {
        badge: "border-zinc-700 bg-zinc-800 text-zinc-300",
        spotlight: "rgba(255, 255, 255, 0.08)",
        borderSpotlight: "rgba(255, 255, 255, 0.25)",
        icon: <Layers className="h-3.5 w-3.5 text-zinc-400" />,
      };
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectCard({
  title,
  category,
  description,
  desc,
  githubLink,
  figmaLink,
  tags = [],
  className,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const finalDesc = description || desc || "";
  const theme = getCategoryTheme(category);

  // Mouse move handler for interactive spotlight coordinate tracking
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-zinc-950 p-5 sm:p-6 lg:p-7",
        "border border-zinc-800/80 shadow-xl transition-all duration-300",
        "hover:border-zinc-700/80",
        className
      )}
    >
      {/* ── Spotlight Radial Glow Overlay ───────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${theme.spotlight}, transparent 65%)`
            : undefined,
        }}
      />

      {/* ── Glowing Border Tracking Mask ────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          maskImage: isHovered
            ? `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
            : undefined,
          WebkitMaskImage: isHovered
            ? `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
            : undefined,
          border: `1px solid ${theme.borderSpotlight}`,
        }}
      />

      {/* Card Content Top & Body */}
      <div className="relative z-10 flex-1">
        {/* Header: Category Badge + Icon */}
        <div className="mb-3.5 flex items-center justify-between gap-2.5">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide",
              theme.badge
            )}
          >
            {theme.icon}
            {category}
          </span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900/80 text-zinc-500 transition-colors group-hover:text-zinc-300">
            <Sparkles className="h-3 w-3" />
          </span>
        </div>

        {/* Project Title */}
        <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-zinc-100 transition-colors group-hover:text-white leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
          {finalDesc}
        </p>

        {/* Tags if provided */}
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── Bottom Actions (GitHub & Figma Links) ───────────────── */}
      <div className="relative z-10 mt-5 pt-4 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-2">
          {/* GitHub Button */}
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label={`View ${title} source on GitHub`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-zinc-300 shadow-sm transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              <GithubIcon className="h-3.5 w-3.5 text-zinc-300" />
              <span>Source</span>
            </motion.a>
          )}

          {/* Figma Button */}
          {figmaLink && (
            <motion.a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label={`View ${title} prototype on Figma`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-purple-500/30 bg-purple-950/30 px-2.5 py-1.5 text-xs font-medium text-purple-300 shadow-sm transition-colors hover:border-purple-400 hover:bg-purple-900/50 hover:text-purple-200"
            >
              <FigmaIcon className="h-3.5 w-3.5" />
              <span>Figma Design</span>
              <ExternalLink className="h-3 w-3 opacity-70" />
            </motion.a>
          )}

          {/* Fallback if neither link provided: interactive detail indicator */}
          {!githubLink && !figmaLink && (
            <span className="text-[11px] font-medium text-zinc-500">
              Enterprise Proprietary
            </span>
          )}
        </div>

        {/* Right arrow micro indicator */}
        <div className="hidden sm:flex h-6 w-6 items-center justify-center rounded-md border border-transparent text-zinc-500 transition-all duration-250 group-hover:border-zinc-800 group-hover:bg-zinc-900 group-hover:text-zinc-300">
          <ExternalLink className="h-3 w-3" />
        </div>
      </div>
    </motion.div>
  );
}
