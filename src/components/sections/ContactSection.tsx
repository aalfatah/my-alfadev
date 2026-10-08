"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Mail, Globe, GitBranch, MessageSquare } from "lucide-react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormState {
  status: FormStatus;
  message: string;
}

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
    value: "hello@portfolio.dev",
    href: "mailto:hello@portfolio.dev",
    icon: <Mail size={18} />,
    color: "#10b981",
  },
  {
    label: "GitHub",
    value: "github.com/username",
    href: "https://github.com",
    icon: <GitBranch size={18} />,
    color: "#a1a1aa",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/username",
    href: "https://linkedin.com",
    icon: <Globe size={18} />,
    color: "#3b82f6",
  },
  {
    label: "Telegram",
    value: "@username",
    href: "https://t.me/username",
    icon: <MessageSquare size={18} />,
    color: "#06b6d4",
  },
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
      <label htmlFor={id} className="text-xs font-medium text-text-secondary">
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
  "w-full rounded-xl border border-surface-border bg-surface-raised px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-all duration-250 focus:border-accent focus:ring-1 focus:ring-accent/40";

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

    // Simulate async send (replace with real API call)
    await new Promise((r) => setTimeout(r, 1400));
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
          className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent"
        >
          <CheckCircle size={32} />
        </motion.div>
        <h3 className="font-display text-xl font-bold text-text-primary">
          Message Sent!
        </h3>
        <p className="text-sm text-text-secondary">
          Thanks for reaching out — I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs font-medium text-accent-light underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
          placeholder="Odoo module development inquiry"
          className={inputBase}
        />
      </FormField>

      <FormField id="contact-message" label="Message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project or inquiry..."
          className={cn(inputBase, "resize-none", errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/30")}
        />
      </FormField>

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-surface-base shadow-glow transition-all duration-250 hover:shadow-glow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="h-4 w-4 rounded-full border-2 border-surface-base border-t-transparent"
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
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-highlight/40 to-transparent"
      />
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[100px]"
      />

      <Container>
        {/* Header */}
        <Reveal direction="up" className="mb-14 text-center">
          <span className="inline-block rounded-full border border-highlight/30 bg-highlight/10 px-3 py-1 text-xs font-medium text-highlight-light">
            Let&apos;s Talk
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-text-secondary text-base">
            Have an Odoo project, system architecture challenge, or just want to connect? I&apos;m open — let&apos;s talk.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Social / direct links — left panel */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {/* Availability indicator */}
              <div className="bento-card flex items-center gap-3 py-4">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-text-primary">
                    Available for Work
                  </p>
                  <p className="text-[11px] text-text-muted">
                    Accepting new projects
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
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    whileHover={{ x: 4 }}
                    className="bento-card group flex items-center gap-3 py-3 hover:border-accent/40"
                  >
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-250"
                      style={{ background: `${link.color}20`, color: link.color }}
                    >
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-text-muted">{link.label}</p>
                      <p className="truncate text-xs font-medium text-text-primary group-hover:text-accent-light transition-colors duration-250">
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
            <div className="bento-card">
              <h3 className="mb-5 font-display text-lg font-semibold text-text-primary">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
