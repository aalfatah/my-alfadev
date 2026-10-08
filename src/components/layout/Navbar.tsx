"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Navigation Items ───────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

// ─── Navbar Component ───────────────────────────────────────────────────────

/**
 * Navbar — Client Component.
 * Features:
 * - Glassmorphism background that activates on scroll
 * - Framer Motion animated active state indicator
 * - Mobile menu with AnimatePresence slide-in
 * - Logo with accent pulse animation
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll position to activate glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Desktop / Base Navbar ─────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-350",
          scrolled
            ? "glass border-b border-surface-border/40 shadow-card"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-container items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight"
            aria-label="Home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30 transition-all duration-250 group-hover:bg-accent/25 group-hover:ring-accent/50">
              <Terminal
                size={15}
                className="text-accent-light transition-transform duration-250 group-hover:rotate-6"
                aria-hidden="true"
              />
            </span>
            <span className="text-text-primary">
              dev
              <span className="gradient-text">.portfolio</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul
            className="hidden items-center gap-1 md:flex"
            role="list"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-3 py-1.5 text-sm font-medium transition-colors duration-250",
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {/* Animated active pill */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-md bg-surface-overlay"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-surface-base shadow-glow transition-shadow duration-250 hover:shadow-glow-lg md:block"
            >
              Hire Me
            </motion.a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors duration-250 hover:bg-surface-overlay hover:text-text-primary md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={18} aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu Drawer ────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              key="mobile-nav"
              id="mobile-nav"
              role="dialog"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="glass fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-surface-border/50 p-6 md:hidden"
            >
              {/* Drawer header */}
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-lg font-bold gradient-text">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary hover:bg-surface-overlay hover:text-text-primary"
                  aria-label="Close menu"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>

              {/* Nav links */}
              <ul className="flex flex-col gap-1" role="list">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex w-full rounded-lg px-4 py-3 text-sm font-medium transition-all duration-250",
                        pathname === item.href
                          ? "bg-accent/15 text-accent-light ring-1 ring-accent/30"
                          : "text-text-secondary hover:bg-surface-overlay hover:text-text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-auto">
                <a
                  href="/#contact"
                  className="flex w-full items-center justify-center rounded-lg bg-accent py-3 text-sm font-semibold text-surface-base shadow-glow"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
