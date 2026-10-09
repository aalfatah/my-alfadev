"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal, Download } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Navigation Items ───────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", id: "hero" },
  { label: "Tech Stack", href: "/#tech-stack", id: "tech-stack" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Portfolio", href: "/#portfolio", id: "portfolio" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Track scroll position to update header styling & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── Desktop / Base Navbar ─────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "glass border-b border-surface-border/40 bg-zinc-950/85 shadow-lg backdrop-blur-md"
            : "bg-zinc-950/40 backdrop-blur-sm border-b border-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => {
              setActiveSection("hero");
              setMobileOpen(false);
            }}
            className="group flex items-center gap-2 font-display text-base sm:text-lg font-bold tracking-tight"
            aria-label="Ahmat Alfatah Homepage"
          >
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-500/30 transition-all duration-250 group-hover:bg-emerald-500/25 group-hover:ring-emerald-500/50">
              <Terminal
                size={14}
                className="text-emerald-400 transition-transform duration-250 group-hover:rotate-6 sm:size-4"
                aria-hidden="true"
              />
            </span>
            <span className="text-zinc-100">
              ahmat<span className="gradient-text">.alfatah</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "relative rounded-lg px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-250",
                      isActive
                        ? "text-zinc-100"
                        : "text-zinc-400 hover:text-zinc-100"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-lg bg-zinc-800/90 border border-zinc-700/60 shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 400,
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

          {/* Actions: Download CV + Hire Me + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop CV Button */}
            {/* <motion.a
              href="/cv-ahmat-alfatah.pdf"
              download="CV-Ahmat-Alfatah.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hidden lg:inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-950/30 px-3 py-1.5 text-xs font-semibold text-emerald-300 transition-all hover:border-emerald-500 hover:bg-emerald-900/40"
            >
              <Download className="h-3.5 w-3.5" />
              <span>CV</span>
            </motion.a> */}

            {/* Desktop CTA */}
            <motion.a
              href="/#contact"
              onClick={() => setActiveSection("contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hidden rounded-lg bg-emerald-500 px-3.5 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-semibold text-zinc-950 shadow-glow transition-all duration-250 hover:bg-emerald-400 hover:shadow-glow-lg md:inline-flex items-center justify-center"
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
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-900/80 text-zinc-300 transition-colors duration-250 hover:bg-zinc-800 hover:text-white md:hidden"
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
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden"
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
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(19rem,85vw)] flex-col border-l border-zinc-800 bg-zinc-950 p-5 shadow-2xl md:hidden"
            >
              {/* Drawer header */}
              <div className="mb-6 flex items-center justify-between border-b border-zinc-800/80 pb-4">
                <span className="font-display text-base font-bold text-zinc-100">
                  Navigation
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>

              {/* Nav links */}
              <ul className="flex flex-col gap-1.5" role="list">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.04 + 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-emerald-500/15 text-emerald-400 font-semibold ring-1 ring-emerald-500/30"
                            : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                        )}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile CTA & Download CV */}
              <div className="mt-auto pt-6 border-t border-zinc-800/80 space-y-2.5">
                <a
                  href="/cv-ahmat-alfatah.pdf"
                  download="CV-Ahmat-Alfatah.pdf"
                  onClick={handleLinkClick}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 py-3 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-900/40"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>

                <a
                  href="/#contact"
                  onClick={handleLinkClick}
                  className="flex w-full items-center justify-center rounded-xl bg-emerald-500 py-3 text-sm font-semibold text-zinc-950 shadow-glow transition-all hover:bg-emerald-400"
                >
                  Hire Me
                </a>

                <p className="pt-1 text-center text-[11px] text-zinc-500">
                  Ahmat Alfatah • IT &amp; ERP Solutions
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
