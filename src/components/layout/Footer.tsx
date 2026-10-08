import Container from "@/components/layout/Container";
import { Terminal, GitBranch, Globe, Mail } from "lucide-react";

const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com", icon: GitBranch },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Globe },
  { label: "Email", href: "mailto:hello@portfolio.dev", icon: Mail },
];

/**
 * Footer — Server Component.
 * Minimal, elegant footer with social links and copyright.
 */
export default function Footer() {
  return (
    <footer
      className="border-t border-surface-border/40 bg-surface-base py-12"
      role="contentinfo"
      aria-label="Site footer"
    >
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Brand */}
        <div className="flex items-center gap-2 font-display text-sm font-semibold text-text-primary">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/15">
            <Terminal size={12} className="text-accent-light" aria-hidden="true" />
          </span>
          dev<span className="gradient-text">.portfolio</span>
        </div>

        {/* Social links */}
        <nav aria-label="Social links">
          <ul className="flex items-center gap-4" role="list">
            {FOOTER_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted transition-all duration-250 hover:bg-surface-overlay hover:text-accent-light"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} Portfolio. Built with Next.js & ♥
        </p>
      </Container>
    </footer>
  );
}
