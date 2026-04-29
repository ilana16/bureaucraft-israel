/**
 * BureauCraft Israel — Home Page
 * Design: "Quiet Confidence" — Cormorant Garamond + Inter, Navy + Gold + Cream
 * Sections: Header, Hero, Services, What I Help With, How It Works, Contact, FAQ, Footer
 */

import { useEffect, useState } from "react";
import {
  FileText, Mail, Calendar, Phone, Shield, Heart, Home as HomeIcon, CreditCard,
  HelpCircle, ChevronDown, ChevronUp, Menu, X, MessageCircle, ArrowRight,
  Clock, CheckCircle2, Star
} from "lucide-react";

// ─── Brand Assets ────────────────────────────────────────────────────────────
const LOGO_FULL = "/manus-storage/logo-full-color_1718aec8.png";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/120360528/b9qBxgsTKFAfFSStfzDLpA/hero-bg-hUQa5gRNoXMWzspz8Zu3Be.webp";
const HOW_BG = "https://d2xsxph8kpxj0f.cloudfront.net/120360528/b9qBxgsTKFAfFSStfzDLpA/how-it-works-bg-SoY4DLyCkCW7h48eTCHmZw.webp";

// ─── Scroll Animation Hook ────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Header ──────────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "What I Help With", href: "#help" },
    { label: "How It Works", href: "#how" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(248,246,242,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(27,42,107,0.08)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <img
            src={LOGO_FULL}
            alt="BureauCraft Israel"
            className="h-12 md:h-14 w-auto object-contain"
            style={{ maxWidth: 200 }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#1B2A6B", fontFamily: "Inter, sans-serif", letterSpacing: "0.01em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#B8902A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1B2A6B")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="px-5 py-2 text-sm font-medium rounded transition-all duration-200"
            style={{
              background: "#1B2A6B",
              color: "#F8F6F2",
              fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#B8902A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1B2A6B";
            }}
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "#1B2A6B" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ background: "#F8F6F2", borderColor: "#EDE9E1" }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-sm font-medium py-1"
                style={{ color: "#1B2A6B", fontFamily: "Inter, sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="px-5 py-2.5 text-sm font-medium rounded text-center"
              style={{ background: "#1B2A6B", color: "#F8F6F2" }}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(248,246,242,0.55)" }}
      />

      <div className="relative z-10 container flex flex-col items-center text-center pt-28 pb-20">
        {/* Logo */}
        <div className="mb-8 md:mb-10">
          <img
            src={LOGO_FULL}
            alt="BureauCraft Israel"
            className="w-64 md:w-80 lg:w-96 mx-auto"
            style={{ filter: "drop-shadow(0 4px 24px rgba(27,42,107,0.10))" }}
          />
        </div>

        {/* Gold divider */}
        <div className="w-16 h-px mb-8" style={{ background: "#B8902A" }} />

        {/* Headline */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            color: "#1B2A6B",
            letterSpacing: "-0.01em",
          }}
        >
          Making Israeli bureaucracy{" "}
          <em style={{ fontStyle: "italic", color: "#B8902A" }}>simple.</em>
        </h1>

        {/* Subtext */}
        <p
          className="text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          style={{ color: "#2a3d8f", fontFamily: "Inter, sans-serif", fontWeight: 400 }}
        >
          Practical, English-friendly help with forms, calls, emails, and Israeli systems.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 text-sm font-medium rounded transition-all duration-200 flex items-center gap-2"
            style={{
              background: "#1B2A6B",
              color: "#F8F6F2",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#B8902A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1B2A6B";
            }}
          >
            Book a Clarity Call
            <ArrowRight size={15} />
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="px-8 py-3.5 text-sm font-medium rounded transition-all duration-200 border"
            style={{
              background: "transparent",
              color: "#1B2A6B",
              borderColor: "#1B2A6B",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#B8902A";
              e.currentTarget.style.color = "#B8902A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#1B2A6B";
              e.currentTarget.style.color = "#1B2A6B";
            }}
          >
            See Services
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#1B2A6B", fontFamily: "Inter, sans-serif" }}>Scroll</span>
          <ChevronDown size={16} style={{ color: "#1B2A6B" }} />
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  {
    name: "Clarity Call",
    price: "₪110",
    duration: "45 minutes",
    description: "A focused session to map out your specific situation, understand what needs to be done, and leave with a clear action plan.",
    highlight: false,
  },
  {
    name: "Action Session",
    price: "₪160",
    duration: "60 minutes",
    description: "We work through the task together — filling forms, drafting letters, making calls, or navigating a system step by step.",
    highlight: true,
  },
  {
    name: "Process Package",
    price: "₪320–₪450",
    duration: "Full process support",
    description: "End-to-end assistance for multi-step bureaucratic processes. Includes preparation, execution, and follow-up.",
    highlight: false,
  },
  {
    name: "Emergency Help",
    price: "₪80",
    duration: "Per 30 minutes",
    description: "Urgent, same-day or next-day support for time-sensitive situations that can't wait.",
    highlight: false,
  },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "#F8F6F2" }}>
      <div className="container">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#B8902A", fontFamily: "Inter, sans-serif" }}>Services</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#1B2A6B" }}
          >
            Choose the support that fits
          </h2>
          <div className="gold-divider w-20 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`fade-in-up rounded-lg p-7 flex flex-col transition-all duration-300 ${s.highlight ? "navy-card" : ""}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                background: s.highlight ? "#1B2A6B" : "#fff",
                boxShadow: s.highlight
                  ? "0 8px 40px rgba(27,42,107,0.18)"
                  : "0 2px 20px rgba(27,42,107,0.06)",
                border: s.highlight ? "none" : "1px solid rgba(27,42,107,0.08)",
              }}
            >
              {s.highlight && (
                <div className="flex items-center gap-1.5 mb-4">
                  <Star size={12} fill="#B8902A" style={{ color: "#B8902A" }} />
                  <span className="text-xs tracking-widest uppercase" style={{ color: "#B8902A", fontFamily: "Inter, sans-serif" }}>Most Popular</span>
                </div>
              )}
              <h3
                className="text-xl font-medium mb-1"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: s.highlight ? "#F8F6F2" : "#1B2A6B",
                  fontSize: "1.35rem",
                }}
              >
                {s.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    color: s.highlight ? "#B8902A" : "#B8902A",
                    fontSize: "1.6rem",
                  }}
                >
                  {s.price}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mb-4">
                <Clock size={12} style={{ color: s.highlight ? "rgba(248,246,242,0.6)" : "#B8902A" }} />
                <span
                  className="text-xs"
                  style={{
                    color: s.highlight ? "rgba(248,246,242,0.7)" : "#6b7280",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {s.duration}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{
                  color: s.highlight ? "rgba(248,246,242,0.85)" : "#4b5563",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {s.description}
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 text-xs font-medium tracking-wide uppercase flex items-center gap-1.5 transition-colors duration-200"
                style={{
                  color: s.highlight ? "#B8902A" : "#1B2A6B",
                  fontFamily: "Inter, sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = s.highlight ? "#d4a93c" : "#B8902A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = s.highlight ? "#B8902A" : "#1B2A6B")}
              >
                Book this <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What I Help With ─────────────────────────────────────────────────────────
const helpItems = [
  { icon: FileText, label: "Forms", desc: "Government and official forms in Hebrew or English" },
  { icon: Mail, label: "Letters", desc: "Drafting formal correspondence to authorities" },
  { icon: Calendar, label: "Appointments", desc: "Booking and preparing for official appointments" },
  { icon: Phone, label: "Calls", desc: "Assistance with calls to government offices" },
  { icon: Shield, label: "Bituach Leumi", desc: "National Insurance Institute matters" },
  { icon: Heart, label: "Kupat Cholim", desc: "Health fund registration and services" },
  { icon: HomeIcon, label: "Housing", desc: "Arnona, rental agreements, and housing paperwork" },
  { icon: CreditCard, label: "Rav Kav", desc: "Public transport card setup and management" },
  { icon: HelpCircle, label: "General Guidance", desc: "Navigating any Israeli system or process" },
];

function WhatIHelpWith() {
  return (
    <section id="help" className="py-24 md:py-32" style={{ background: "#EDE9E1" }}>
      <div className="container">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#B8902A", fontFamily: "Inter, sans-serif" }}>Areas of Support</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#1B2A6B" }}
          >
            What I help with
          </h2>
          <div className="gold-divider w-20 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {helpItems.map((item, i) => (
            <div
              key={item.label}
              className="fade-in-up flex items-start gap-4 p-5 rounded-lg transition-all duration-300"
              style={{
                transitionDelay: `${i * 60}ms`,
                background: "#fff",
                boxShadow: "0 2px 16px rgba(27,42,107,0.05)",
                border: "1px solid rgba(27,42,107,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(27,42,107,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,144,42,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(27,42,107,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(27,42,107,0.07)";
              }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(184,144,42,0.1)" }}
              >
                <item.icon size={16} style={{ color: "#B8902A" }} />
              </div>
              <div>
                <p className="font-medium text-sm mb-0.5" style={{ color: "#1B2A6B", fontFamily: "Inter, sans-serif" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280", fontFamily: "Inter, sans-serif" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Contact",
    desc: "Reach out via the form or WhatsApp. Briefly describe what you need help with.",
  },
  {
    number: "02",
    title: "Choose a Service",
    desc: "We'll identify the right service for your situation — no obligation.",
  },
  {
    number: "03",
    title: "Meet",
    desc: "We work through your bureaucratic challenge together, step by step.",
  },
  {
    number: "04",
    title: "Leave with Clarity",
    desc: "You leave knowing exactly what was done, what's next, and how to handle it.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url(${HOW_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(27,42,107,0.88)" }} />
      <div className="relative z-10 container">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#B8902A", fontFamily: "Inter, sans-serif" }}>The Process</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#F8F6F2" }}
          >
            How it works
          </h2>
          <div className="gold-divider w-20 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="fade-in-up text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="text-5xl font-light mb-4 mx-auto"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: "#B8902A",
                  opacity: 0.9,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </div>
              <div className="w-8 h-px mx-auto mb-4" style={{ background: "rgba(184,144,42,0.5)" }} />
              <h3
                className="text-lg font-medium mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#F8F6F2", fontSize: "1.2rem" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(248,246,242,0.75)", fontFamily: "Inter, sans-serif" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 fade-in-up">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium rounded transition-all duration-200"
            style={{
              background: "#B8902A",
              color: "#F8F6F2",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d4a93c")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#B8902A")}
          >
            Get Started <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "",
    request: "", urgency: "normal", service: "", availability: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    background: "#fff",
    border: "1px solid rgba(27,42,107,0.15)",
    borderRadius: "0.375rem",
    padding: "0.625rem 0.875rem",
    fontSize: "0.875rem",
    color: "#1B2A6B",
    fontFamily: "Inter, sans-serif",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 500,
    marginBottom: "0.375rem",
    color: "#1B2A6B",
    fontFamily: "Inter, sans-serif",
    letterSpacing: "0.02em",
    textTransform: "uppercase" as const,
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "#F8F6F2" }}>
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#B8902A", fontFamily: "Inter, sans-serif" }}>Get in Touch</p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#1B2A6B" }}
            >
              Let's sort it out together
            </h2>
            <div className="gold-divider w-20 mx-auto mb-4" />
            <p className="text-sm" style={{ color: "#6b7280", fontFamily: "Inter, sans-serif" }}>
              Fill in the form and I'll be in touch within one business day.
            </p>
          </div>

          {submitted ? (
            <div
              className="fade-in-up text-center py-16 px-8 rounded-lg"
              style={{ background: "#fff", boxShadow: "0 4px 30px rgba(27,42,107,0.08)" }}
            >
              <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "#B8902A" }} />
              <h3
                className="text-2xl font-light mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#1B2A6B" }}
              >
                Message received
              </h3>
              <p className="text-sm" style={{ color: "#6b7280", fontFamily: "Inter, sans-serif" }}>
                Thank you for reaching out. I'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="fade-in-up rounded-lg p-8 md:p-10"
              style={{ background: "#fff", boxShadow: "0 4px 30px rgba(27,42,107,0.08)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#B8902A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(27,42,107,0.15)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#B8902A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(27,42,107,0.15)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+972 50 000 0000"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#B8902A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(27,42,107,0.15)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Tel Aviv, Jerusalem..."
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#B8902A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(27,42,107,0.15)")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label style={labelStyle}>Service Type</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#B8902A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(27,42,107,0.15)")}
                  >
                    <option value="">Select a service...</option>
                    <option value="clarity">Clarity Call — ₪110 / 45 min</option>
                    <option value="action">Action Session — ₪160 / 60 min</option>
                    <option value="process">Process Package — ₪320–₪450</option>
                    <option value="emergency">Emergency Help — ₪80 / 30 min</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label style={labelStyle}>Request Details *</label>
                  <textarea
                    name="request"
                    required
                    value={form.request}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe what you need help with..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "#B8902A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(27,42,107,0.15)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Urgency</label>
                  <select
                    name="urgency"
                    value={form.urgency}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#B8902A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(27,42,107,0.15)")}
                  >
                    <option value="normal">Normal — within a week</option>
                    <option value="soon">Soon — within 2–3 days</option>
                    <option value="urgent">Urgent — today or tomorrow</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Availability</label>
                  <input
                    type="text"
                    name="availability"
                    value={form.availability}
                    onChange={handleChange}
                    placeholder="e.g. Weekday mornings"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#B8902A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(27,42,107,0.15)")}
                  />
                </div>
              </div>

              <p
                className="text-xs mt-5 mb-6 leading-relaxed gold-border-left pl-3"
                style={{ color: "#9ca3af", fontFamily: "Inter, sans-serif" }}
              >
                This is practical support, not legal, medical, or financial advice.
              </p>

              <button
                type="submit"
                className="w-full py-3.5 text-sm font-medium rounded transition-all duration-200"
                style={{
                  background: "#1B2A6B",
                  color: "#F8F6F2",
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "0.03em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#B8902A")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1B2A6B")}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Who is this service for?",
    a: "BureauCraft Israel is designed for English speakers living in Israel — including olim chadashim, long-term residents, and anyone who finds Hebrew-language bureaucracy overwhelming or confusing.",
  },
  {
    q: "Do you speak Hebrew?",
    a: "Yes. I work in both English and Hebrew, so I can communicate with Israeli offices on your behalf, translate documents, and explain what everything means in plain English.",
  },
  {
    q: "Is this legal or financial advice?",
    a: "No. BureauCraft Israel provides practical, administrative support only — helping you understand systems, fill out forms, and take action. For legal or financial matters, please consult a licensed professional.",
  },
  {
    q: "Can you help me remotely?",
    a: "Yes. Most sessions are conducted via video call or phone, so you can get help from anywhere in Israel (or abroad, if needed).",
  },
  {
    q: "What if I don't know which service I need?",
    a: "Start with a Clarity Call. In 45 minutes, we'll map out your situation and figure out the best path forward — no pressure to commit to anything beyond that.",
  },
  {
    q: "How quickly can you help?",
    a: "For most requests, I can schedule within 2–3 business days. For urgent matters, same-day or next-day Emergency Help is available.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Payment details will be confirmed when booking. Common methods include bank transfer, Bit, and PayBox.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32" style={{ background: "#EDE9E1" }}>
      <div className="container">
        <div className="text-center mb-14 fade-in-up">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#B8902A", fontFamily: "Inter, sans-serif" }}>FAQ</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#1B2A6B" }}
          >
            Common questions
          </h2>
          <div className="gold-divider w-20 mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="fade-in-up rounded-lg overflow-hidden"
              style={{
                transitionDelay: `${i * 50}ms`,
                background: "#fff",
                boxShadow: "0 2px 12px rgba(27,42,107,0.05)",
                border: open === i ? "1px solid rgba(184,144,42,0.3)" : "1px solid rgba(27,42,107,0.07)",
                transition: "border-color 0.2s",
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="text-sm font-medium pr-4"
                  style={{ color: "#1B2A6B", fontFamily: "Inter, sans-serif" }}
                >
                  {faq.q}
                </span>
                {open === i
                  ? <ChevronUp size={16} style={{ color: "#B8902A", flexShrink: 0 }} />
                  : <ChevronDown size={16} style={{ color: "#B8902A", flexShrink: 0 }} />
                }
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="w-full h-px mb-4" style={{ background: "rgba(27,42,107,0.07)" }} />
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4b5563", fontFamily: "Inter, sans-serif" }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#1B2A6B" }}>
      <div className="container py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col items-start gap-4">
            <img
              src={LOGO_FULL}
              alt="BureauCraft Israel"
              className="h-14 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1) sepia(1) saturate(0.5) brightness(1.5)" }}
            />
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: "rgba(248,246,242,0.6)", fontFamily: "Inter, sans-serif" }}
            >
              Making Israeli Bureaucracy Simple
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#B8902A", fontFamily: "Inter, sans-serif" }}>Navigate</p>
            {["Services", "What I Help With", "How It Works", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-").replace("what-i-help-with", "help").replace("how-it-works", "how")}`}
                onClick={(e) => {
                  e.preventDefault();
                  const id = item === "What I Help With" ? "#help" : item === "How It Works" ? "#how" : `#${item.toLowerCase()}`;
                  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm transition-colors duration-200"
                style={{ color: "rgba(248,246,242,0.7)", fontFamily: "Inter, sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#B8902A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,246,242,0.7)")}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#B8902A", fontFamily: "Inter, sans-serif" }}>Contact</p>
            <p className="text-sm" style={{ color: "rgba(248,246,242,0.7)", fontFamily: "Inter, sans-serif" }}>
              Available via WhatsApp &amp; email
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm transition-colors duration-200"
              style={{ color: "#B8902A", fontFamily: "Inter, sans-serif" }}
            >
              Send a message →
            </a>
          </div>
        </div>

        <div className="gold-divider mt-10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: "rgba(248,246,242,0.4)", fontFamily: "Inter, sans-serif" }}
          >
            © {new Date().getFullYear()} BureauCraft Israel. All rights reserved.
          </p>
          <p
            className="text-xs text-center md:text-right"
            style={{ color: "rgba(248,246,242,0.4)", fontFamily: "Inter, sans-serif" }}
          >
            This is practical support, not legal, medical, or financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating CTA ─────────────────────────────────────────────────────────────
function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full shadow-lg transition-all duration-300"
      style={{
        background: "#B8902A",
        color: "#F8F6F2",
        fontFamily: "Inter, sans-serif",
        fontSize: "0.8rem",
        fontWeight: 500,
        letterSpacing: "0.02em",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
        boxShadow: "0 4px 24px rgba(184,144,42,0.35)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#1B2A6B")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#B8902A")}
    >
      <MessageCircle size={15} />
      Book a Call
    </a>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhatIHelpWith />
      <HowItWorks />
      <ContactForm />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
