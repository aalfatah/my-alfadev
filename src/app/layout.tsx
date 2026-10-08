import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portfolio — IT Programmer & Odoo Developer",
    template: "%s | Portfolio",
  },
  description:
    "Personal portfolio of an IT Programmer, Odoo Developer, System Architect, and UI/UX Designer. Crafting elegant solutions at the intersection of backend power and design excellence.",
  keywords: [
    "Odoo Developer",
    "IT Programmer",
    "System Architect",
    "UI/UX Designer",
    "Full Stack",
    "Portfolio",
  ],
  authors: [{ name: "Portfolio Owner" }],
  creator: "Portfolio Owner",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Portfolio — IT Programmer & Odoo Developer",
    description:
      "Crafting elegant solutions at the intersection of backend power and design excellence.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — IT Programmer & Odoo Developer",
    description:
      "Crafting elegant solutions at the intersection of backend power and design excellence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

/**
 * Root layout — Server Component.
 * Fonts are loaded via CSS @import in globals.css (no layout font overhead).
 * The `dark` class is applied directly so we're always in dark mode.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="relative min-h-dvh antialiased selection:bg-accent/30 selection:text-white">
        {/* Ambient radial gradient — top-left emerald glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -left-[20%] -top-[10%] h-[600px] w-[600px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
          <div className="absolute -right-[20%] top-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[100px]" />
        </div>

        {/* Main content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
