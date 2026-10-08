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
  /** Apply vertical padding (top + bottom) — defaults to true */
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
 *
 * Usage:
 * ```tsx
 * <Container as="section" padded>
 *   <h2>Section Title</h2>
 * </Container>
 * ```
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
    sm: "px-4 sm:px-6",
    md: "px-4 sm:px-6 lg:px-8",
    lg: "px-6 sm:px-8 lg:px-12",
  };

  return (
    <Tag
      className={cn(
        // Base layout
        "mx-auto w-full",
        // Max-width
        narrow ? "max-w-3xl" : "max-w-container",
        // Horizontal padding
        gutterClasses[gutter],
        // Vertical padding (for sections)
        padded && "py-20 sm:py-28 lg:py-32",
        // Caller overrides
        className
      )}
    >
      {children}
    </Tag>
  );
}
