"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  type Variant,
  type Transition,
  type UseInViewOptions,
} from "motion/react";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────────────────

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  /** Content to animate in */
  children: ReactNode;
  /** Additional class names on the wrapper */
  className?: string;
  /** Slide direction — defaults to "up" */
  direction?: RevealDirection;
  /** Travel distance in pixels — defaults to 24 */
  distance?: number;
  /** Animation duration in seconds — defaults to 0.5 */
  duration?: number;
  /** Delay before animation starts (seconds) — useful for stagger */
  delay?: number;
  /** Easing — defaults to a smooth cubic-bezier */
  ease?: Transition["ease"];
  /** InView threshold — defaults to 0.1 */
  threshold?: UseInViewOptions["amount"];
  /** Trigger once or re-animate each time it enters view */
  once?: boolean;
}

// ─── Direction → initial offset map ─────────────────────────────────────────

function getInitialOffset(
  direction: RevealDirection,
  distance: number
): { x?: number; y?: number } {
  switch (direction) {
    case "up":    return { y: distance };
    case "down":  return { y: -distance };
    case "left":  return { x: distance };
    case "right": return { x: -distance };
    case "none":  return {};
  }
}

// ─── Variants ────────────────────────────────────────────────────────────────

function buildVariants(
  direction: RevealDirection,
  distance: number
): Record<string, Variant> {
  const offset = getInitialOffset(direction, distance);
  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };
}

// ─── Reveal Component ────────────────────────────────────────────────────────

/**
 * Reveal — Client Component.
 * Wraps any content and animates it into view using Framer Motion's
 * `useInView`. Supports directional slides, custom distance/duration/delay.
 *
 * Usage:
 * ```tsx
 * <Reveal direction="up" delay={0.1}>
 *   <SomeSection />
 * </Reveal>
 * ```
 *
 * For staggered children, map over them and increment delay:
 * ```tsx
 * {items.map((item, i) => (
 *   <Reveal key={item.id} delay={i * 0.08}>
 *     <Card {...item} />
 *   </Reveal>
 * ))}
 * ```
 */
export default function Reveal({
  children,
  className,
  direction = "up",
  distance = 24,
  duration = 0.5,
  delay = 0,
  ease = [0.23, 1, 0.32, 1], // expo-out cubic-bezier
  threshold = 0.1,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once,
  });

  const variants = buildVariants(direction, distance);

  const transition: Transition = {
    duration,
    delay,
    ease,
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transition}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
