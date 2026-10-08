import type { Config } from "tailwindcss";

const config: Config = {
  // Enable class-based dark mode
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // ─── Color Palette ────────────────────────────────────────────────
      colors: {
        // Base surface layers (dark-first)
        surface: {
          base: "#09090b",    // zinc-950 — deepest background
          raised: "#18181b",  // zinc-900 — card base
          overlay: "#27272a", // zinc-800 — elevated card
          border: "#3f3f46",  // zinc-700 — borders & dividers
        },
        // Text hierarchy
        text: {
          primary: "#fafafa",  // zinc-50
          secondary: "#a1a1aa", // zinc-400
          muted: "#52525b",    // zinc-600
        },
        // Accent — Emerald (technical, Odoo dev vibe)
        accent: {
          DEFAULT: "#10b981", // emerald-500
          light: "#34d399",   // emerald-400
          dark: "#059669",    // emerald-600
          muted: "#064e3b",   // emerald-900 (for subtle bg tints)
        },
        // Secondary Accent — Blue (system architect, IT vibe)
        highlight: {
          DEFAULT: "#3b82f6", // blue-500
          light: "#60a5fa",   // blue-400
          dark: "#2563eb",    // blue-600
          muted: "#1e3a5f",   // custom blue-900 (for subtle bg tints)
        },
      },

      // ─── Typography ────────────────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },

      // ─── Spacing & Sizing ──────────────────────────────────────────────
      maxWidth: {
        container: "1280px",
      },

      // ─── Border Radius ─────────────────────────────────────────────────
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // ─── Box Shadows ───────────────────────────────────────────────────
      boxShadow: {
        glow: "0 0 20px -4px rgba(16, 185, 129, 0.35)",
        "glow-blue": "0 0 20px -4px rgba(59, 130, 246, 0.35)",
        "glow-lg": "0 0 40px -8px rgba(16, 185, 129, 0.4)",
        card: "0 4px 24px -4px rgba(0,0,0,0.5)",
        "card-hover": "0 8px 40px -8px rgba(0,0,0,0.6)",
      },

      // ─── Backdrop Blur ─────────────────────────────────────────────────
      backdropBlur: {
        xs: "2px",
      },

      // ─── Keyframes ─────────────────────────────────────────────────────
      keyframes: {
        // Subtle infinite gradient drift for hero backgrounds
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        // Fade in + slide up (used by Reveal component)
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Fade in only
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Soft pulsing glow for accent elements
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 12px 0px rgba(16, 185, 129, 0.2)" },
          "50%": { boxShadow: "0 0 24px 4px rgba(16, 185, 129, 0.45)" },
        },
        // Horizontal line scanning (tech aesthetic)
        "scan-line": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100vw)" },
        },
        // Blink cursor for terminal aesthetics
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },

      // ─── Animation Utilities ───────────────────────────────────────────
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "scan-line": "scan-line 3s linear infinite",
        blink: "blink 1s step-start infinite",
      },

      // ─── Transition Durations ─────────────────────────────────────────
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "450": "450ms",
      },
    },
  },

  plugins: [],
};

export default config;
