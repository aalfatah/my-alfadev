import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";

/**
 * Home Page — Server Component.
 *
 * Phase 1: Foundation skeleton with placeholder sections.
 * Phase 2 will fill each section with animated content.
 *
 * Section order:
 *  1. Hero       — above-the-fold impact, animated headline
 *  2. About      — bio, timeline, avatar card
 *  3. Skills     — Bento-grid with tech stack
 *  4. Portfolio  — filterable project grid
 *  5. Contact    — form + social links
 */
export default function HomePage() {
  return (
    <>
      {/* ── Fixed navigation ─────────────────────────────────── */}
      <Navbar />

      {/* ── Page main ────────────────────────────────────────── */}
      <main id="main-content" tabIndex={-1} aria-label="Main content">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: About */}
        <AboutSection />

        {/* Section 3: Skills (Bento Grid) */}
        <SkillsSection />

        {/* Section 4: Portfolio Filter */}
        <PortfolioSection />

        {/* Section 5: Contact */}
        <ContactSection />
      </main>

      {/* ── Footer ───────────────────────────────────────────── */}
      <Footer />
    </>
  );
}
