import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

// ─── Types ──────────────────────────────────────────────────────────────────

interface ContainerProps {
  /** Polymorphic element override — defaults to `<div>` */
  as?: ElementType;
  /** Additional class names */
  className?: string;
  /** Children content */
  children: ReactNode;
  /** Apply vertical padding (top + bottom) — defaults to false */
  padded?: boolean;
  /** Horizontal padding variant */
  gutter?: "sm" | "md" | "lg";
  /** Narrow the max-width for prose/centered content */
  narrow?: boolean;
}

// ─── Container Component ─────────────────────────────────────────────────────

/**
 * Container — Server Component.
 * Provides consistent max-width, horizontal padding, and optional
 * vertical section spacing across the portfolio.
 */
export default function Container({
  as: Tag = "div",
  className,
  children,
  padded = false,
  gutter = "md",
  narrow = false,
}: ContainerProps) {
  const gutterClasses = {
    sm: "px-3.5 sm:px-5",
    md: "px-4 sm:px-6 lg:px-8",
    lg: "px-5 sm:px-8 lg:px-12",
  };

  return (
    <Tag
      style={{ marginLeft: "auto", marginRight: "auto" }}
      className={cn(
        // Base layout
        "mx-auto w-full",
        // Max-width (7xl = 80rem / 1280px standard container)
        narrow ? "max-w-3xl" : "max-w-7xl",
        // Horizontal padding
        gutterClasses[gutter],
        // Vertical padding (for sections)
        padded && "py-16 sm:py-24 lg:py-28",
        // Caller overrides
        className
      )}
    >
      {children}
    </Tag>
  );
}
