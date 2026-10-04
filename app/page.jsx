"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/motion-wrapper";
import { projects } from "./data/projects";
import { ToolsMarquee } from "./components/tools-marquee";
import {
  Shield,
  Award,
  TrendingUp,
  Clock,
  Users,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  FileText,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Sun,
  Moon,
  Menu,
  X,
  Copy,
  Check,
  Send,
  Cpu,
  Layers,
  BarChart3,
  ChevronRight
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// Draft content (hero box options, quote placeholders, résumé button without a file)
// is only rendered by `next dev`, so it can be reviewed on localhost without going live.
const isDev = process.env.NODE_ENV === "development";

// Set to e.g. "/Kalpana-Talan-Resume.pdf" once the file is added to /public.
const RESUME_URL = "";

const navItems = [
  { href: "#about", label: "About", mobileLabel: "About Me" },
  { href: "#what-i-bring", label: "What I Bring", mobileLabel: "What I Bring" },
  { href: "#impact", label: "Work", mobileLabel: "Featured Work & Impact" },
  { href: "#experience", label: "Experience", mobileLabel: "Work Experience" },
  { href: "#certifications", label: "Credentials", mobileLabel: "Credentials & Education" }
];

// Hero box: how I step in and what a hiring team gets. Worded without "program"
// so it reads equally well for program and project roles.
const heroBox = {
  question: "Scaling a team and things are starting to slip?",
  lead: "That is where I step in: bringing the right people together, identifying risks early, and aligning execution to measurable outcomes. What you get:",
  points: [
    "Risks flagged before they turn into delays",
    "Teams and vendors working to one shared plan",
    "Progress you can measure, not just report"
  ]
};

// About section: the five-step approach, from the original About text.
const workSteps = [
  { title: "Define the brief", text: "Clear requirements before anything starts" },
  { title: "Set milestones", text: "A plan everyone can track" },
  { title: "Spot risks early", text: "Registers and dependencies, reviewed often" },
  { title: "Align stakeholders", text: "Teams and vendors working to one plan" },
  { title: "Measure outcomes", text: "Results tracked, not just reported" }
];

const whatIBring = [
  {
    Icon: Shield,
    color: "sky",
    title: "Risks caught early",
    text: "Risk registers, milestone dependencies and SLA tracking that surface problems before they become delays.",
    proof: "Zero safety protocol violations in VUCA conditions"
  },
  {
    Icon: Users,
    color: "teal",
    title: "Every team and vendor on one plan",
    text: "Cross-functional teams and external vendors coordinated across geographies, with clear ownership and on-time delivery.",
    proof: "65-member team · 22–25 vendors"
  },
  {
    Icon: Layers,
    color: "indigo",
    title: "Systems people actually adopt",
    text: "Digital rollouts and data migrations with training, change management and governance built in from day one.",
    proof: "250 users onboarded · zero data loss"
  },
  {
    Icon: BarChart3,
    color: "amber",
    title: "Results you can measure",
    text: "Readiness, cycle times and milestones tracked formally, so leadership sees progress rather than promises.",
    proof: "95% tracked readiness · 80% faster audits"
  }
];

// Tailwind only ships classes it can see written out in full, so colour variants are listed literally.
const accent = {
  sky: { text: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-400/30", hover: "hover:border-sky-400/40", dot: "bg-sky-500", bar: "border-l-sky-500" },
  teal: { text: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-400/30", hover: "hover:border-teal-400/40", dot: "bg-teal-400", bar: "border-l-teal-500" },
  indigo: { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-400/30", hover: "hover:border-indigo-400/40", dot: "bg-indigo-400", bar: "border-l-indigo-500" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-400/30", hover: "hover:border-purple-400/40", dot: "bg-purple-400", bar: "border-l-purple-500" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-400/30", hover: "hover:border-amber-400/40", dot: "bg-amber-400", bar: "border-l-amber-500" },
  slate: { text: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-400/30", hover: "hover:border-slate-400/40", dot: "bg-slate-400", bar: "border-l-slate-500" }
};

// One line per role; roles that match a featured program link to its detail page
// instead of repeating it.
const roles = [
  {
    title: "Program Manager",
    period: "Jan 2022 – Jan 2026 (4 yrs 1 mo)",
    unit: "Indian Armed Forces • On-site",
    color: "sky",
    line: "Governed risk registers, milestone dependencies and vendor SLA compliance in high-risk mission parameters.",
    projectId: "equipment-deployment"
  },
  {
    title: "Senior Project Manager – IT & Network",
    period: "Aug 2021 – Jan 2025 (3 yrs 6 mos)",
    unit: "Indian Armed Forces • On-site",
    color: "teal",
    line: "Led system adoption, stakeholder change management and security protocols across military network infrastructure.",
    projectId: "e-office"
  },
  {
    title: "CSR & NGO Program Manager",
    period: "Jan 2020 – Nov 2024 (4 yrs 11 mos)",
    unit: "Indian Armed Forces • Community & Welfare Governance",
    color: "indigo",
    line: "Managed budgets for 500+ members with zero errors, and grew vendor partnerships from 8 to 10+ across initiatives with 100+ participants."
  },
  {
    title: "Human Resources Manager",
    period: "Jan 2019 – Nov 2023 (4 yrs 11 mos)",
    unit: "Indian Armed Forces • Personnel & Operational Readiness",
    color: "purple",
    line: "Ran the full HR lifecycle for 300 personnel, contributing to a 25% increase in operational productivity."
  },
  {
    title: "Senior Project Manager",
    period: "Jan 2018 – Jan 2022 (4 yrs 1 mo)",
    unit: "Indian Armed Forces • Asset & Squadron Integration",
    color: "amber",
    line: "Integrated two squadrons and migrated 10,000 spare-parts line items into IMMOLS without operational disruption.",
    projectId: "squadron-immols"
  },
  {
    title: "Military Trainee",
    period: "Jan 2016 – Jan 2018 (2 yrs 1 mo)",
    unit: "Indian Armed Forces • Officer Training",
    color: "slate",
    line: "Intensive officer training in leadership, discipline and calm decision-making under stress in a VUCA environment."
  }
];

const VISIBLE_ROLES = 4;

// Add real quotes here (LinkedIn recommendations, senior officers). The section stays
// hidden on the live site until at least one is added.
const testimonials = [];

// Marker-style emphasis for the words a visitor should take away at a glance.
function Highlight({ children }) {
  return (
    <span className="font-semibold text-[var(--text-primary)] bg-[linear-gradient(transparent_62%,var(--accent-glow)_62%)] px-0.5">
      {children}
    </span>
  );
}

// Small numbered label above each section heading, e.g. "01 · About".
function SectionLabel({ n, children }) {
  return (
    <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
      <span className="text-[var(--text-secondary)]">{String(n).padStart(2, "0")} ·</span> {children}
    </span>
  );
}

function DevOnlyLabel({ children }) {
  return (
    <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 mb-2">
      {children} · only visible on localhost
    </div>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showAllRoles, setShowAllRoles] = useState(false);
  const showResume = Boolean(RESUME_URL) || isDev;

  // The theme lives on <html>, which survives navigating to a project page and back,
  // so read it on mount instead of resetting to dark.
  useEffect(() => {
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.classList.toggle("light", next === "light");
    setTheme(next);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kalpanatalan.veteran@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative overflow-x-hidden">
      {/* Background Atmosphere Layers */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-40 z-0"></div>
      <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow z-0"></div>
      <div className="fixed top-[40%] right-[-5%] w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow z-0"></div>
      <div className="fixed bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* 1. TOP NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#intro" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-sky-400/40 relative shadow-sm">
              <Image
                src="/kalpana-profile.png"
                alt="Kalpana Talan"
                width={40}
                height={40}
                className="object-cover group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div>
              <span className="font-semibold text-base tracking-tight block leading-tight">
                Kalpana Talan
              </span>
              <span className="text-xs text-sky-400 font-medium tracking-wide block">
                IAF Veteran
              </span>
            </div>
            <span className="h-8 w-px bg-[var(--border-color)]" aria-hidden="true"></span>
            <Image
              src="/iaf-crest.png"
              alt="Indian Air Force crest"
              width={106}
              height={120}
              className="h-10 w-auto drop-shadow-[0_0_6px_rgba(56,189,248,0.25)]"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link hover:text-[var(--text-primary)] transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--border-color)] hover:bg-white/5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {showResume && (
              <a
                href={RESUME_URL || undefined}
                target="_blank"
                rel="noreferrer"
                title={RESUME_URL ? "Open résumé" : "Résumé file not added yet (button is hidden on the live site until it is)"}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-sky-400/50 text-[var(--text-primary)] hover:border-sky-400 btn-lift"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" /> Résumé
                {!RESUME_URL && <span className="text-[10px] normal-case tracking-normal text-amber-400">(file pending)</span>}
              </a>
            )}

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-white rounded-lg btn-lift shadow-sm active:scale-95"
            >
              Let's Connect <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-nav border-t border-[var(--border-color)] px-6 py-5 space-y-4 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {item.mobileLabel}
              </a>
            ))}
            {RESUME_URL && (
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                Résumé
              </a>
            )}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sky-400 font-semibold"
            >
              Get in Touch
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO / INTRO SECTION */}
      <section id="intro" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Positioning */}
          <FadeIn direction="up" delay={0.1} className="lg:col-span-7 space-y-6">
            {/* Honor & Identity Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold backdrop-blur-sm">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-sky-400" />
                Indian Air Force Veteran (10 Years)
              </span>
              <span className="text-sky-400/50">•</span>
              <span className="flex items-center gap-1 text-amber-400">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Commended by Chief of Air Staff (2025)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)]">
              Delivering High-Stakes Programs Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-500">
                Digital Transformation
              </span>{" "}
              & Risk Governance
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              I turn complex strategy into <Highlight>predictable, on-time delivery</Highlight>. Built on{" "}
              <Highlight>10 years of Indian Air Force leadership</Highlight>, <Highlight>₹500 Cr+</Highlight> in assets
              governed, and <Highlight>PMP® · CSM®</Highlight> credentials, for programs where
              failure is not an option.
            </p>
            {/* Value Proposition: how I step in and what a hiring team gets */}
            <div className="p-4 sm:p-5 rounded-xl glass-card border-l-4 border-l-sky-500 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed shadow-sm">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">{heroBox.question}</span>
              <span className="block mb-2">{heroBox.lead}</span>
              <ul className="space-y-1.5">
                {heroBox.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                    <span className="text-[var(--text-primary)]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-white rounded-xl btn-lift shadow-md active:scale-95 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Get in Touch
              </a>
              <a
                href="#impact"
                className="px-6 py-3 text-sm font-semibold glass-card hover:bg-white/5 text-[var(--text-primary)] rounded-xl btn-lift active:scale-95 flex items-center gap-2"
              >
                View Featured Work <ArrowUpRight className="w-4 h-4 text-sky-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/kalpanatalan/"
                target="_blank"
                rel="noreferrer"
                className="p-3 glass-card hover:text-sky-400 rounded-xl btn-lift text-[var(--text-secondary)]"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/tools-kalpana"
                target="_blank"
                rel="noreferrer"
                className="p-3 glass-card hover:text-sky-400 rounded-xl btn-lift text-[var(--text-secondary)]"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Credentials Strip */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {[
                { label: "PMP®", detail: "Certified", Icon: Award, color: "text-sky-400 border-sky-400/40 bg-sky-500/10" },
                { label: "CSM®", detail: "ScrumMaster", Icon: Award, color: "text-teal-400 border-teal-400/40 bg-teal-500/10" },                { label: "M.Tech", detail: "Aeronautical Engg", Icon: GraduationCap, color: "text-indigo-400 border-indigo-400/40 bg-indigo-500/10" }
              ].map(({ label, detail, Icon, color }) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border text-sm ${color}`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="font-bold">{label}</span>
                  <span className="font-medium text-[var(--text-primary)]">{detail}</span>
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Right Column: Executive Portrait Card */}
          <FadeIn direction="left" delay={0.2} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm animate-float">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/40 via-teal-400/30 to-sky-500/40 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>

              <div className="relative glass-card rounded-2xl p-6 overflow-hidden space-y-5 shadow-xl">
                {/* Photo container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/10 shadow-inner">
                  <Image
                    src="/kalpana-profile.png"
                    alt="Kalpana Talan"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>

                {/* Identity summary */}
                <div>
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">Kalpana Talan</h2>
                  <p className="text-xs text-sky-400 font-medium">Program & Transformation Leader • Delhi, India</p>
                </div>

                <div className="pt-3 border-t border-[var(--border-color)] space-y-2 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-sky-400" /> Email
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-sky-400 hover:underline flex items-center gap-1 font-mono"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" /> Copied!
                        </>
                      ) : (
                        <>
                          Copy Email <Copy className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" /> Location
                    </span>
                    <span className="text-[var(--text-primary)]">Delhi, India</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-sky-400" /> Service
                    </span>
                    <span className="text-[var(--text-primary)]">Indian Air Force · 2016–2026</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 3. HIGH-IMPACT METRICS STRIP */}
        <StaggerContainer staggerDelay={0.1} className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StaggerItem>
            <div className="glass-card p-5 rounded-2xl border-t-2 border-t-sky-500 hover:translate-y-[-2px] transition-transform">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold mb-2">
                <Shield className="w-4 h-4" /> ASSET PORTFOLIO
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">₹500 Cr+</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Mission-critical aerospace assets supported</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-5 rounded-2xl border-t-2 border-t-teal-400 hover:translate-y-[-2px] transition-transform">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold mb-2">
                <TrendingUp className="w-4 h-4" /> EFFICIENCY GAIN
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">80%</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Cut in audit & paper validation cycle time</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-5 rounded-2xl border-t-2 border-t-sky-400 hover:translate-y-[-2px] transition-transform">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold mb-2">
                <Users className="w-4 h-4" /> CROSS-FUNCTIONAL
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">100+</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Multidisciplinary personnel & vendor teams led</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-5 rounded-2xl border-t-2 border-t-amber-400 hover:translate-y-[-2px] transition-transform">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4" /> RELIABILITY
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">95%</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Formally tracked operational readiness rate</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading with a one-line summary beside it */}
          <FadeIn direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 lg:items-end mb-12">
              <div className="lg:col-span-7">
                <SectionLabel n={1}>About</SectionLabel>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)]">
                  How I work,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-500">
                    from mission brief to delivery.
                  </span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                10 years of Indian Air Force leadership, now applied to digital transformation and complex,
                multi-vendor delivery.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Story + working principle */}
            <FadeIn direction="up" delay={0.1} className="lg:col-span-7 space-y-8">
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                I spent <Highlight>10 years in the Indian Air Force</Highlight> leading work across{" "}
                <Highlight>program management, IT, operations and HR</Highlight>, where deadlines were fixed and failure
                was not an option. Today I bring that same discipline to <Highlight>digital transformation</Highlight>{" "}
                and <Highlight>Agile and Waterfall delivery</Highlight>.
              </p>

              <figure className="glass-card rounded-2xl p-6 sm:p-7 border-l-4 border-l-amber-400 shadow-lg">
                <blockquote className="text-lg sm:text-xl font-medium italic text-[var(--text-primary)] leading-relaxed">
                  &ldquo;I&apos;m a wedding planner for projects and programs: I bring the right people together, spot
                  what could go wrong, and fix it before it happens. I call it a job done right.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase">
                  — A working principle
                </figcaption>
              </figure>
            </FadeIn>

            {/* How I run every engagement */}
            <FadeIn direction="left" delay={0.15} className="lg:col-span-5">
              <div className="glass-card rounded-2xl p-6 sm:p-7 shadow-lg">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-5 flex items-center gap-3">
                  How I run every engagement
                  <span className="flex-1 h-px bg-[var(--border-color)]" aria-hidden="true"></span>
                </h3>
                <ol className="space-y-4">
                  {workSteps.map((step, i) => (
                    <li key={step.title} className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-sky-500/15 border border-sky-400/30 text-sky-400 text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <div className="text-base font-semibold text-[var(--text-primary)] leading-snug">{step.title}</div>
                        <div className="text-sm text-[var(--text-secondary)]">{step.text}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          </div>

          {/* Tools strip */}
          <FadeIn direction="up" delay={0.2} className="mt-14">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-4">
              <span className="text-sky-400">→</span> Tools I work in
            </div>
            <ToolsMarquee />
          </FadeIn>
        </div>
      </section>

      {/* 4b. WHAT I BRING */}
      <section id="what-i-bring" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-12">
              <SectionLabel n={2}>What I Bring</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Built for High-Stakes, Multi-Vendor Programs
              </h2>
              <p className="text-base text-[var(--text-secondary)] mt-3 leading-relaxed">
                <span className="block text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-500 mb-1">
                  Complexity is a given. Chaos is optional.
                </span>
                When many teams, vendors and risks have to move as one, this is what changes once I come on board.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatIBring.map(({ Icon, color, title, text, proof }) => {
              const c = accent[color];
              return (
                <StaggerItem key={title}>
                  <div className={`glass-card rounded-2xl p-6 h-full flex flex-col gap-3 ${c.hover} hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg group`}>
                    <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center ${c.text} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] leading-snug">{title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">{text}</p>
                    <div className={`pt-3 border-t border-[var(--border-color)] text-sm font-semibold ${c.text}`}>
                      {proof}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. FEATURED WORK & IMPACT PROJECTS */}
      <section id="impact" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <SectionLabel n={3}>Proven Results</SectionLabel>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  Featured Programs & Initiatives
                </h2>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 p-1 rounded-xl glass-card text-xs font-medium whitespace-nowrap self-start">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === "all" ? "bg-sky-500 text-white font-semibold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  All Programs
                </button>
                <button
                  onClick={() => setActiveTab("transformation")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === "transformation" ? "bg-sky-500 text-white font-semibold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Digital Systems
                </button>
                <button
                  onClick={() => setActiveTab("operations")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === "operations" ? "bg-sky-500 text-white font-semibold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Operations & Scale
                </button>
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === "ai" ? "bg-sky-500 text-white font-semibold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  AI & Automation
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <Link
                  href={`/projects/${project.id}`}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-sky-400/40 hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-lg h-full"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-sky-400 px-2 py-0.5 rounded bg-sky-500/10">
                        {project.tag}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)]">
                        {project.timeframe}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-sky-400 transition-colors mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <div className="inline-block text-sm font-semibold text-emerald-400 mb-3">
                      ★ {project.impact}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    <ul className="space-y-2 border-t border-[var(--border-color)] pt-3 text-sm text-[var(--text-secondary)]">
                      {project.cardHighlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sky-400">
                    View details <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. WORK EXPERIENCE TIMELINE */}
      <section id="experience" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-14">
              <SectionLabel n={4}>Career Journey</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Work Experience (10 Years, 1 Month)
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2">
                Progressive leadership appointments across the Indian Armed Forces in demanding, high-stakes environments.
                Several appointments were held concurrently, so their dates overlap.
              </p>
            </div>
          </FadeIn>

          {/* Timeline: one line per role, linking to the matching program instead of repeating it */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-sky-500/20 space-y-6 ml-2 sm:ml-4">
            {roles.slice(0, showAllRoles ? roles.length : VISIBLE_ROLES).map((role, i) => {
              const c = accent[role.color];
              const project = role.projectId && projects.find((p) => p.id === role.projectId);
              return (
                <FadeIn key={role.title + role.period} direction="up" delay={Math.min(i, 4) * 0.05}>
                  <div className="relative group">
                    <div className={`absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full ${c.dot} border-4 border-[var(--bg-primary)] shadow-md group-hover:scale-125 transition-transform`}></div>

                    <div className={`glass-card rounded-2xl p-5 sm:p-6 relative border-l-4 ${c.bar} ${c.hover} transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-lg`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">{role.title}</h3>
                        <span className={`text-xs font-mono font-medium ${c.text}`}>{role.period}</span>
                      </div>
                      <p className="text-xs font-medium text-[var(--text-secondary)] mb-3">{role.unit}</p>
                      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">{role.line}</p>
                      {project && (
                        <Link
                          href={`/projects/${project.id}`}
                          className={`nav-link mt-3 inline-flex items-center gap-1 text-sm font-semibold ${c.text}`}
                        >
                          Featured program: {project.title} <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {roles.length > VISIBLE_ROLES && (
            <button
              onClick={() => setShowAllRoles((v) => !v)}
              className="mt-8 ml-2 sm:ml-4 px-5 py-2.5 rounded-xl glass-card text-sm font-semibold text-[var(--text-primary)] btn-lift inline-flex items-center gap-2"
            >
              {showAllRoles ? "Show fewer roles" : `Show earlier roles (${roles.length - VISIBLE_ROLES})`}
              <ChevronRight className={`w-4 h-4 text-sky-400 transition-transform ${showAllRoles ? "-rotate-90" : "rotate-90"}`} />
            </button>
          )}
        </div>
      </section>

      {/* 7. SKILLS & MODERN TOOLING BENTO GRID */}
      <section id="skills" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-12">
              <SectionLabel n={5}>Capabilities</SectionLabel>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Core Competencies & Tooling
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tile 1: Program Leadership */}
            <StaggerItem>
              <div className="glass-card rounded-2xl p-6 space-y-4 hover:border-sky-400/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg h-full group">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-sky-400 transition-colors">Program & Strategic Leadership</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Translating high-level business goals into predictable milestones and resilient risk architecture.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Program Management",
                    "Digital Transformation",
                    "Risk Governance",
                    "Cross-functional Leadership",
                    "Vendor Negotiation",
                    "Systems Migration"
                  ].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-sm rounded-lg glass-card text-[var(--text-primary)] font-medium hover:border-sky-400/40 hover:bg-sky-500/10 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>

            {/* Tile 2: Methodologies & Frameworks */}
            <StaggerItem>
              <div className="glass-card rounded-2xl p-6 space-y-4 hover:border-teal-400/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg h-full group">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-400/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-teal-400 transition-colors">Methodologies & Governance</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Structured frameworks ensuring quality control, speed, and continuous process optimization.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Agile & Scrum",
                    "Waterfall",
                    "Lean Six Sigma",
                    "Value Stream Mapping",
                    "Earned Value Management (EVM)",
                    "Root Cause Analysis",
                    "Change Management"
                  ].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-sm rounded-lg glass-card text-[var(--text-primary)] font-medium hover:border-teal-400/40 hover:bg-teal-500/10 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>

            {/* Tile 3: Modern Platforms & AI */}
            <StaggerItem>
              <div className="glass-card rounded-2xl p-6 space-y-4 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg h-full group">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-amber-400 transition-colors">Modern Platforms & AI Tools</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Leveraging the latest tooling and automated workflows to accelerate execution and transparency.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "AI Workflow Tools",
                    "Jira",
                    "Notion",
                    "ClickUp",
                    "Asana",
                    "Miro"
                  ].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-sm rounded-lg glass-card text-[var(--text-primary)] font-medium hover:border-amber-400/40 hover:bg-amber-500/10 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 8. CERTIFICATIONS & EDUCATION */}
      <section id="certifications" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Certifications List */}
            <FadeIn direction="up" className="lg:col-span-7 space-y-6">
              <div>
                <SectionLabel n={6}>Credentials & Honors</SectionLabel>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  Licenses, Certifications & Recognition
                </h2>
              </div>

              {/* Service honour: the one place the commendation is described in full */}
              <div className="relative overflow-hidden rounded-2xl p-6 sm:p-7 border border-amber-400/40 bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-transparent shadow-lg hover:border-amber-400/70 transition-colors">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" aria-hidden="true"></div>
                <div className="relative flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-[#0a0e1a] flex items-center justify-center shrink-0 shadow-[0_0_24px_rgba(245,158,11,0.35)]">
                    <Award className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">Service honour</span>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">2025</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-amber-300">Commended by the Chief of Air Staff</h3>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                      For <span className="text-[var(--text-primary)] font-medium">exemplary contribution</span> and{" "}
                      <span className="text-[var(--text-primary)] font-medium">high-stakes operational leadership</span>,
                      delivered through <span className="text-[var(--text-primary)] font-medium">people-first governance</span>.
                    </p>
                  </div>
                </div>
              </div>

              <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StaggerItem>
                  <div className="glass-card p-4 rounded-xl space-y-1 hover:border-sky-400/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">PMP® Certified</h4>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">Project Management Institute (PMI)</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass-card p-4 rounded-xl space-y-1 hover:border-teal-400/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">CSM® ScrumMaster</h4>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">Scrum Alliance</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass-card p-4 rounded-xl space-y-1 hover:border-sky-400/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">Value Stream Management</h4>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">Project Management Institute (PMI)</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass-card p-4 rounded-xl space-y-1 hover:border-amber-400/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">Management Essentials (Jan 2026)</h4>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">IIM Shillong (Business Administration)</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </FadeIn>

            {/* Education Details with Crests */}
            <FadeIn direction="up" delay={0.15} className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
                  ACADEMIC FOUNDATION
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  Education
                </h2>
              </div>

              {/* VTU Master Degree */}
              <div className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-sky-400/40 transition-colors shadow-sm">
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-white p-1">
                  <Image
                    src="/vtu-logo.jpg"
                    alt="Visvesvaraya Technological University"
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] leading-tight">
                    Master of Technology (M.Tech)
                  </h3>
                  <div className="text-xs text-sky-400 font-medium">Aeronautical Engineering (2016 – 2017)</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">Visvesvaraya Technological University (VTU)</div>
                  <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                    Advanced study in aeronautical engineering, complex technical operations, system dynamics, and mission engineering.
                  </p>
                </div>
              </div>

              {/* AKTU Bachelor Degree */}
              <div className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-sky-400/40 transition-colors shadow-sm">
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-white p-1">
                  <Image
                    src="/aktu-logo.jpg"
                    alt="Dr. A.P.J. Abdul Kalam Technical University"
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] leading-tight">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <div className="text-xs text-sky-400 font-medium">Electrical and Electronics Engineering (2010 – 2014)</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</div>
                  <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                    Engineering foundation in electrical systems, circuit architecture, analytical thinking, and complex problem-solving.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8b. KIND WORDS: hidden on the live site until real quotes are added to `testimonials` */}
      {(testimonials.length > 0 || isDev) && (
        <section id="kind-words" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <div className="max-w-3xl mb-12">
                <SectionLabel n={7}>Kind Words</SectionLabel>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  What Colleagues Say
                </h2>
              </div>
            </FadeIn>

            {testimonials.length === 0 && <DevOnlyLabel>Placeholders until quotes are added</DevOnlyLabel>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {(testimonials.length > 0
                ? testimonials
                : [
                    { quote: "Add a LinkedIn recommendation here.", name: "Name", role: "Role · relationship" },
                    { quote: "Add a quote from a senior officer or commanding officer.", name: "Name", role: "Rank · unit" },
                    { quote: "Add a quote from a vendor partner or team member.", name: "Name", role: "Role · organisation" }
                  ]
              ).map((t, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.06}>
                  <figure
                    className={`glass-card rounded-2xl p-6 h-full flex flex-col justify-between gap-5 border-l-4 border-l-amber-400 ${
                      testimonials.length === 0 ? "border-dashed opacity-70" : ""
                    }`}
                  >
                    <blockquote className="text-base italic text-[var(--text-primary)] leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption>
                      <div className="text-sm font-bold text-[var(--text-primary)]">{t.name}</div>
                      <div className="text-xs text-sky-400">{t.role}</div>
                    </figcaption>
                  </figure>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Info */}
            <FadeIn direction="up" className="lg:col-span-5 space-y-6">
              <div>
                {/* Kind Words is hidden on the live site until quotes exist, so Contact takes its number */}
                <SectionLabel n={testimonials.length > 0 || isDev ? 8 : 7}>Let&apos;s Connect</SectionLabel>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  Reach Out Directly
                </h2>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed">
                  Looking to translate strategy into disciplined program execution, digital transformation, or risk governance? Let&apos;s discuss how I can help your team deliver.
                </p>
              </div>

              {/* Direct email card */}
              <div className="glass-card p-5 rounded-2xl space-y-3">
                <div className="text-xs font-mono text-[var(--text-secondary)]">PRIMARY CONTACT EMAIL</div>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href="mailto:kalpanatalan.veteran@gmail.com"
                    className="text-sm sm:text-base font-semibold text-sky-400 hover:underline break-all"
                  >
                    kalpanatalan.veteran@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[var(--text-primary)] shrink-0 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-xs text-emerald-400 font-medium">✓ Email address copied to clipboard!</p>
                )}
              </div>

              {/* Location & Network */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="glass-card p-4 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-sky-400 font-semibold">
                    <MapPin className="w-3.5 h-3.5" /> Base Location
                  </div>
                  <div className="text-[var(--text-primary)] font-medium">Delhi, India</div>
                </div>

                <div className="glass-card p-4 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-sky-400 font-semibold">
                    <Users className="w-3.5 h-3.5" /> Network
                  </div>
                  <div className="text-[var(--text-primary)] font-medium">500+ Connections</div>
                </div>
              </div>

              {/* Social profile buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/kalpanatalan/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl glass-card hover:border-sky-400 text-xs font-semibold flex items-center gap-2 text-[var(--text-primary)] btn-lift"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" /> LinkedIn Profile <ExternalLink className="w-3 h-3 text-[var(--text-secondary)]" />
                </a>
                <a
                  href="https://github.com/tools-kalpana"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl glass-card hover:border-sky-400 text-xs font-semibold flex items-center gap-2 text-[var(--text-primary)] btn-lift"
                >
                  <GithubIcon className="w-4 h-4 text-sky-400" /> GitHub Profile <ExternalLink className="w-3 h-3 text-[var(--text-secondary)]" />
                </a>
              </div>
            </FadeIn>

            {/* Right Column: Direct Message Form */}
            <FadeIn direction="up" delay={0.15} className="lg:col-span-7">
              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg">
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Have a mission-critical program or leadership role? Fill out this note and it will open directly in your email client.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-emerald-300">Message Ready!</h4>
                    <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto">
                      Thank you, {formData.name}. You can also email directly at{" "}
                      <span className="text-sky-400 font-mono">kalpanatalan.veteran@gmail.com</span>.
                    </p>
                    <a
                      href={`mailto:kalpanatalan.veteran@gmail.com?subject=Program%20Inquiry%20from%20${encodeURIComponent(
                        formData.name
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg btn-lift"
                    >
                      <Send className="w-3.5 h-3.5" /> Send via Mail App
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-[var(--text-primary)] font-medium mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl glass-card bg-transparent border border-[var(--border-color)] focus:border-sky-400 focus:outline-none text-[var(--text-primary)] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[var(--text-primary)] font-medium mb-1.5">
                        Your Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl glass-card bg-transparent border border-[var(--border-color)] focus:border-sky-400 focus:outline-none text-[var(--text-primary)] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[var(--text-primary)] font-medium mb-1.5">
                        Program Scope / Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe the program, team, or challenge you want to address..."
                        className="w-full px-4 py-2.5 rounded-xl glass-card bg-transparent border border-[var(--border-color)] focus:border-sky-400 focus:outline-none text-[var(--text-primary)] text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 text-xs font-semibold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-white rounded-xl btn-lift shadow-md active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" /> Prepare Direct Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="border-t border-[var(--border-color)] py-8 text-xs text-[var(--text-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[var(--text-primary)]">Kalpana Talan</span>
            <span>•</span>
            <span>Indian Air Force Veteran</span>
            <span>•</span>
            <span>Program & Transformation Leader</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#intro" className="nav-link hover:text-[var(--text-primary)] transition-colors">
              Back to Top ↑
            </a>
            <a
              href="https://www.linkedin.com/in/kalpanatalan/"
              target="_blank"
              rel="noreferrer"
              className="nav-link hover:text-sky-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tools-kalpana"
              target="_blank"
              rel="noreferrer"
              className="nav-link hover:text-sky-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
