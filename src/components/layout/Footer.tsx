import Container from "@/components/layout/Container";
import { Terminal, Mail } from "lucide-react";

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

const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/aalfatah", icon: GithubIcon },
  { label: "Figma", href: "https://www.figma.com/@aalfa", icon: FigmaIcon },
  { label: "Email", href: "mailto:hello@portfolio.dev", icon: Mail },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-zinc-800/80 bg-zinc-950 py-8 sm:py-12 w-full flex flex-col items-center"
      role="contentinfo"
      aria-label="Site footer"
    >
      <Container className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Brand */}
        <div className="flex items-center gap-2 font-display text-sm font-semibold text-zinc-100">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/15">
            <Terminal size={12} className="text-emerald-400" aria-hidden="true" />
          </span>
          ahmat<span className="gradient-text">.alfatah</span>
        </div>

        {/* Social links */}
        <nav aria-label="Social links">
          <ul className="flex items-center gap-3" role="list">
            {FOOTER_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/80 text-zinc-400 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-zinc-500">
          <a
            href="/cv-ahmat-alfatah.pdf"
            download="CV-Ahmat-Alfatah.pdf"
            className="hover:text-emerald-400 underline-offset-4 hover:underline transition-colors"
          >
            Download CV (PDF)
          </a>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <p>
            © {new Date().getFullYear()} Ahmat Alfatah. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
