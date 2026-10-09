import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ahmat Alfatah — IT Programmer, Odoo ERP Developer & System Architect",
    template: "%s | Ahmat Alfatah",
  },
  description:
    "Personal portfolio of Ahmat Alfatah — IT Programmer, Odoo ERP Developer, System Architect, and UI/UX Designer. Delivering mission-critical ERP systems, full-stack applications, and human-centered design.",
  keywords: [
    "Ahmat Alfatah",
    "IT Support",
    "IT Helpdesk",
    "PT KCC Glass Indonesia",
    "Oracle ERP",
    "Odoo Developer",
    "Odoo ERP",
    "IT Programmer",
    "System Architect",
    "UI/UX Designer",
    "Laravel",
    "Kotlin",
    "Next.js",
    "PostgreSQL",
    "Figma",
  ],
  authors: [{ name: "Ahmat Alfatah", url: "https://github.com/aalfatah" }],
  creator: "Ahmat Alfatah",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ahmat Alfatah — IT Programmer & Odoo ERP Developer",
    description:
      "Crafting elegant, scalable enterprise solutions at the intersection of Odoo ERP architecture and human-centered design.",
    siteName: "Ahmat Alfatah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmat Alfatah — IT Programmer & Odoo ERP Developer",
    description:
      "Crafting elegant, scalable enterprise solutions at the intersection of Odoo ERP architecture and human-centered design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="relative min-h-dvh bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-white">
        {/* Subtle ambient lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -left-[15%] -top-[10%] h-[600px] w-[600px] rounded-full bg-emerald-500/[0.04] blur-[140px]" />
          <div className="absolute -right-[15%] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.03] blur-[120px]" />
        </div>

        {/* Page content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
