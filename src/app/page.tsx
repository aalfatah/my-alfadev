import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TechStack from "@/components/sections/TechStack";
import AboutSection from "@/components/sections/AboutSection";
import BentoSkills from "@/components/sections/BentoSkills";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import ContactSection from "@/components/sections/ContactSection";

/**
 * Home Page — Server Component.
 *
 * Section rhythm:
 *  1. Hero            — Above-the-fold impact, Download CV & CTA buttons
 *  2. TechStack       — Production tools directly referencing GitHub @aalfatah
 *  3. About           — Storytelling bio, continuous connected career timeline
 *  4. BentoSkills     — Bento Grid matrix (Odoo, Web/Mobile, UI/UX, IT Infra)
 *  5. ProjectShowcase — 21st.dev 3D Interactive Card Stack
 *  6. Contact         — Direct contact form and social channels
 */
export default function HomePage() {
  return (
    <>
      {/* ── Fixed navigation ─────────────────────────────────── */}
      <Navbar />

      {/* ── Page main ────────────────────────────────────────── */}
      <main id="main-content" tabIndex={-1} aria-label="Main content" className="w-full flex flex-col items-center">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Technical Stack (GitHub @aalfatah Reference) */}
        <TechStack />

        {/* Section 3: About */}
        <AboutSection />

        {/* Section 4: Skills (Bento Grid Matrix) */}
        <BentoSkills />

        {/* Section 5: Selected Works (21st.dev Card Stack) */}
        <ProjectShowcase />

        {/* Section 6: Contact */}
        <ContactSection />
      </main>

      {/* ── Footer ───────────────────────────────────────────── */}
      <Footer />
    </>
  );
}
