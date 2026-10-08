# 🚀 Modern Developer & Architect Portfolio

An enterprise-grade, high-performance personal portfolio built for **IT Programmers, Odoo Developers, System Architects, and UI/UX Designers**. Engineered to demonstrate the perfect synergy between robust backend architecture and cutting-edge frontend aesthetics.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-v14-purple?style=for-the-badge&logo=framer)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

---

## ✨ Features

- **⚡ Dynamic Hero Section**
  - Smooth role-cycling typewriter effect (`useTypewriter`).
  - Staggered floating tech stack badges (Odoo, Python, PostgreSQL, Next.js, Docker, React).
  - Status indicator with pulsing availability indicator.
  - Seamless dual-action CTAs (Explore Projects & Contact).

- **🧩 Bento Grid Skills Matrix**
  - Modern Bento Grid layout highlighting diverse capabilities: Full-Stack Architecture, ERP & Odoo Engineering, Database Design, and UI/UX Strategy.
  - Animated SVG circular progress rings and animated progress bars triggered on-scroll.
  - Ambient glow hover effects and responsive grid scaling.

- **💼 Filterable Portfolio Showcase**
  - Category-based project filtering (All, Enterprise ERP, Web Applications, System Architecture).
  - Smooth layout morphing and filtering animations powered by Motion (`layoutId` & `AnimatePresence`).
  - Interactive project cards featuring technology tags, live demo triggers, and repository links.

- **📜 Interactive Experience Timeline**
  - Chronological career roadmap featuring roles in ERP Development, Full-Stack Engineering, and System Consulting.
  - Interactive status badges, highlight metric cards, and responsive alternating layout.

- **📬 Validated Contact System**
  - Client-side form validation with real-time feedback and state management.
  - Fluid submit states with animated loaders and spring-scale success confirmations.
  - Direct quick-connect channels (Email, LinkedIn, GitHub, WhatsApp).

- **🎨 "UI/UX Pro Max" Design System**
  - Slate/Zinc dark-mode-first aesthetic with crisp high-contrast accents.
  - Glassmorphic navigation bar with scroll-aware active state and blur backdrop.
  - Mobile-first drawer navigation with animated hamburger toggle.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Server-side rendering, streaming, and Turbopack compiler |
| **Language** | TypeScript | Strict type safety and predictable domain modeling |
| **Styling** | Tailwind CSS v4 & PostCSS | Utility-first CSS engine with custom design tokens |
| **Animations** | Motion (Framer Motion v14) | Physics-based micro-interactions, layout transitions & reveals |
| **Icons** | Lucide React | Lightweight, tree-shakable iconography |
| **Utilities** | `clsx`, `tailwind-merge` | Conditional class name composition |

---

## 📂 Project Structure

```text
MyPortfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global tokens, utilities & custom animation keyframes
│   │   ├── layout.tsx          # Root layout with SEO metadata & viewport config
│   │   └── page.tsx            # Composition entry point assembling all sections
│   ├── components/
│   │   ├── animations/
│   │   │   └── Reveal.tsx      # Viewport-triggered animated wrapper (Motion)
│   │   ├── layout/
│   │   │   ├── Container.tsx   # Fluid container wrapper with gutter presets
│   │   │   ├── Navbar.tsx      # Sticky glassmorphic nav with mobile drawer
│   │   │   └── Footer.tsx      # Footer with brand info, social links & copyright
│   │   └── sections/
│   │       ├── HeroSection.tsx # Typewriter hero with floating badges & metrics
│   │       ├── SkillsSection.tsx # Bento grid with animated SVG rings & bars
│   │       ├── PortfolioSection.tsx # Filterable project showcase with layoutId
│   │       ├── AboutSection.tsx # Experience timeline & career highlight cards
│   │       └── ContactSection.tsx # Validated interactive contact form
│   └── lib/
│       └── utils.ts            # Class merging utility (clsx + twMerge)
├── public/                     # Static assets (images, icons, resume PDF)
├── .gitignore                  # Git ignore rules for node_modules, build & cache
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and build scripts
├── postcss.config.mjs          # PostCSS processor configuration
├── tailwind.config.ts          # Tailwind design tokens and extensions
└── tsconfig.json               # TypeScript compiler options
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version `18.18.0` or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Scripts

- `npm run dev`: Runs the Next.js development server with Turbopack.
- `npm run build`: Compiles and builds the production bundle.
- `npm run start`: Starts the Next.js production server.
- `npm run lint`: Runs ESLint to check for code quality and formatting issues.

---

## 🚢 Deployment

The easiest way to deploy this portfolio is using the [Vercel Platform](https://vercel.com):

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel will automatically detect Next.js and apply optimal build settings.
4. Click **Deploy** and your portfolio will be live with automatic CI/CD.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
