"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Mail, Globe, GitBranch, MessageSquare, Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormStatus = "idle" | "submitting" | "success" | "error";

interface SocialLink {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Email",
    value: "aalfatah492@gmail.com",
    href: "mailto:aalfatah492@gmail.com",
    icon: <Mail size={18} />,
    color: "#10b981",
  },
  {
    label: "GitHub",
    value: "github.com/aalfatah",
    href: "https://github.com/aalfatah",
    icon: <GitBranch size={18} />,
    color: "#a1a1aa",
  },
  {
    label: "Figma",
    value: "figma.com/@aalfa",
    href: "https://www.figma.com/@aalfa",
    icon: <Globe size={18} />,
    color: "#a855f7",
  },
  // {
  //   label: "Telegram",
  //   value: "@ahmatalfatah",
  //   href: "https://t.me/username",
  //   icon: <MessageSquare size={18} />,
  //   color: "#06b6d4",
  // },
];

// ─── Form Field ───────────────────────────────────────────────────────────────

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function FormField({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-zinc-300">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            key="error"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-[11px] text-red-400"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase =
  "w-full rounded-xl border border-zinc-800 bg-zinc-900/90 px-4 py-3 text-base sm:text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-all duration-250 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40";

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Name is required.";
    const email = form.get("email") as string;
    if (!email) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Enter a valid email address.";
    if (!form.get("message")) errs.message = "Message is required.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");

    // Simulated async send
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400"
        >
          <CheckCircle size={32} />
        </motion.div>
        <h3 className="font-display text-xl font-bold text-zinc-100">
          Message Sent!
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400">
          Thanks for reaching out — I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs font-medium text-emerald-400 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <FormField id="contact-name" label="Your Name" error={errors.name}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            className={cn(inputBase, errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/30")}
          />
        </FormField>

        <FormField id="contact-email" label="Email Address" error={errors.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={cn(inputBase, errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/30")}
          />
        </FormField>
      </div>

      <FormField id="contact-subject" label="Subject (optional)">
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="Odoo customization or project inquiry"
          className={inputBase}
        />
      </FormField>

      <FormField id="contact-message" label="Message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project, timeline, or requirements..."
          className={cn(inputBase, "resize-none", errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/30")}
        />
      </FormField>

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-xs sm:text-sm font-semibold text-zinc-950 shadow-glow transition-all duration-250 hover:bg-emerald-400 hover:shadow-glow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="h-4 w-4 rounded-full border-2 border-zinc-950 border-t-transparent"
            />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative flex flex-col items-center justify-center w-full overflow-hidden py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 border-t border-zinc-800/60"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[120px]"
      />

      <Container>
        {/* Header */}
        <Reveal direction="up" className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 w-full">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Let&apos;s Connect</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 text-center">
            Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="mt-3.5 max-w-xl text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed text-center">
            Have an Odoo project, system architecture challenge, or UI/UX design need? Reach out directly.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start max-w-5xl mx-auto">
          {/* Social / direct links — left panel */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-3.5">
              {/* Availability indicator */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/90 shadow-md backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-zinc-100">
                    Available for Work
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Accepting new projects &amp; consultations
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-3">
                {SOCIAL_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label}: ${link.value}`}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/90 hover:border-emerald-500/40 hover:bg-zinc-900/40 transition-all duration-200 shadow-sm"
                  >
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-250"
                      style={{ background: `${link.color}20`, color: link.color }}
                    >
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-zinc-500 font-medium">{link.label}</p>
                      <p className="truncate text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors duration-200 mt-0.5">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact form — right panel */}
          <Reveal direction="right" className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-950/90 shadow-xl backdrop-blur-sm">
              <h3 className="mb-5 font-display text-base sm:text-lg font-bold text-zinc-100">
                Send a Direct Message
              </h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
