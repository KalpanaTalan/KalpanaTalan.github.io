"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn, StaggerContainer, StaggerItem, CountUp } from "./components/motion-wrapper";
import { projects, otherOutcomes } from "./data/projects";
import { ToolsMarquee } from "./components/tools-marquee";
import { RichText, GradientHeadline } from "./components/work-visuals";
import { IllustratedFlow } from "./components/illustrated-flow";
import {
  Shield,
  Award,
  TrendingUp,
  Users,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  FileText,
  GraduationCap,
  ArrowUpRight,
  Sun,
  Moon,
  Menu,
  X,
  Copy,
  Check,
  Send,
  Layers,
  BarChart3,
  ChevronRight,
  Target,
  ArrowDown
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
  { href: "#skills", label: "Skills", mobileLabel: "Skills & Toolkit" },
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

// Capabilities: competencies grouped by stage of the work. Skill names match the CV
// where they overlap; each row links to the featured program that proves it, which is
// what makes this section more than a repeat of the CV's keyword list.
const capabilityRows = [
  {
    title: "Plan",
    meaning: "Deciding what gets delivered, and how",
    Icon: Target,
    color: "sky",
    proofId: "squadron-merger",
    groups: [
      { label: "Scope", skills: ["Program & Project Management", "Strategic Planning & Execution", "Project Lifecycle Management"] },
      { label: "Scheduling", skills: ["Milestones & Gantt Charts", "Earned Value Management (EVM)"] },
      { label: "Resources", skills: ["Resource Management", "Budget Management"] }
    ]
  },
  {
    title: "Deliver",
    meaning: "Getting it done with people, vendors and systems",
    Icon: Users,
    color: "teal",
    proofId: "relocation",
    groups: [
      { label: "With teams", skills: ["Cross-Functional Leadership", "Agile & Scrum", "Waterfall"] },
      { label: "With vendors", skills: ["Procurement & Contract Management", "Vendor Negotiation", "SLA Tracking"] },
      { label: "With systems", skills: ["Digital Transformation", "Systems & Data Migration", "AI Workflow Automation"] }
    ]
  },
  {
    title: "Govern",
    meaning: "Knowing it is on track, and fixing it early when it is not",
    Icon: Shield,
    color: "indigo",
    proofId: "paperless",
    groups: [
      { label: "Risk", skills: ["Risk Management", "Risk Governance", "Crisis Management"] },
      { label: "Quality", skills: ["Process Improvement", "Lean Six Sigma", "Value Stream Mapping", "Root Cause Analysis"] },
      { label: "Readiness & reporting", skills: ["Operational Readiness", "Data Analytics & Reporting"] }
    ]
  },
  {
    title: "Lead change",
    meaning: "Making sure the change actually sticks",
    Icon: TrendingUp,
    color: "amber",
    proofId: "spouse-upskilling",
    groups: [
      { label: "People", skills: ["Change Management", "Stakeholder Alignment", "Training & Onboarding"] }
    ]
  }
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
    proof: "65-person team · 20+ vendors"
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
  sky: { text: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-400/30", hover: "hover:border-sky-400/40", dot: "bg-sky-500", bar: "border-l-sky-500", fill: "bg-sky-500", ring: "ring-sky-400" },
  teal: { text: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-400/30", hover: "hover:border-teal-400/40", dot: "bg-teal-400", bar: "border-l-teal-500", fill: "bg-teal-500", ring: "ring-teal-400" },
  indigo: { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-400/30", hover: "hover:border-indigo-400/40", dot: "bg-indigo-400", bar: "border-l-indigo-500", fill: "bg-indigo-500", ring: "ring-indigo-400" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-400/30", hover: "hover:border-purple-400/40", dot: "bg-purple-400", bar: "border-l-purple-500", fill: "bg-purple-500", ring: "ring-purple-400" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-400/30", hover: "hover:border-amber-400/40", dot: "bg-amber-400", bar: "border-l-amber-500", fill: "bg-amber-500", ring: "ring-amber-400" },
  slate: { text: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-400/30", hover: "hover:border-slate-400/40", dot: "bg-slate-400", bar: "border-l-slate-500", fill: "bg-slate-500", ring: "ring-slate-400" }
};

// The four headline results beside the Proven Results heading, one per case study (not links).
const headlineResults = [
  { id: "paperless", value: "5d → 1d", label: "audits, paperless rollout" },
  { id: "relocation", value: "48h", label: "per system relocation" },
  { id: "squadron-merger", value: "0", label: "records lost in a merger" },
  { id: "spouse-upskilling", value: "100+", label: "spouses certified" }
];

// Tag pill colours, applied in order to a project's tags.
const tagTone = [
  "border-sky-400/50 bg-sky-500/10 text-sky-300",
  "border-teal-400/50 bg-teal-500/10 text-teal-300",
  "border-indigo-400/50 bg-indigo-500/10 text-indigo-300"
];

// One line per role; roles that match a featured program link to its detail page
// instead of repeating it. `start`/`end` are decimal years for the timeline chart,
// `short` is the label on its bar, and `metric` is the key-number chip on the card.
const roles = [
  {
    title: "Program Manager",
    short: "Program Manager",
    period: "Jan 2022 – Jan 2026 (4 yrs 1 mo)",
    start: 2022, end: 2026,
    unit: "Indian Air Force • Equipment deployment & vendor governance",
    color: "sky",
    metric: "65 people · 20+ vendors",
    line: "Governed risk registers, milestone dependencies and vendor SLAs on high-risk missions.",
    projectId: "relocation",
    achievements: ["Every relocation operational within 48 hours, with zero critical downtime", "95% formally tracked readiness and full audit compliance", "Led a 65-person team, plus 20+ external vendors"],
    responsibilities: ["Risk registers, milestone dependencies and vendor SLA compliance", "One central coordination point for every vendor fault or maintenance need", "Paperwork, convoy, movement clearance and logistics for each move"],
    skills: ["Risk governance", "Vendor management", "SLA tracking", "Pre-move checks", "Movement planning"]
  },
  {
    title: "Senior Project Manager – IT & Network",
    short: "Sr. PM, IT & Network",
    period: "Aug 2021 – Jan 2025 (3 yrs 6 mos)",
    start: 2021 + 7 / 12, end: 2025,
    unit: "Indian Air Force • IT & network infrastructure",
    color: "teal",
    metric: "250 users · 3h → 1.5h",
    line: "Rolled out the E-Office paperless system and led adoption and security across the network.",
    achievements: ["E-Office paperless system rolled out to 250 users", "Processing time cut by 50%, from 3 hours to 1.5", "250 end-users onboarded and trained"],
    responsibilities: ["System adoption and stakeholder change management", "Security protocols across military network infrastructure", "A 20-member cross-functional rollout team"],
    skills: ["Digital adoption", "Change management", "Training & onboarding", "Network security", "Digital governance"]
  },
  {
    title: "Program Manager – Non-Profit Welfare Initiatives",
    short: "PM, Non-Profit Welfare",
    period: "Jan 2020 – Nov 2024 (4 yrs 11 mos)",
    start: 2020, end: 2024 + 10 / 12,
    unit: "Indian Air Force • Community & welfare",
    color: "indigo",
    metric: "500+ members · zero errors",
    line: "Ran welfare budgets with zero errors and grew vendor partnerships from 8 to 10+.",
    projectId: "spouse-upskilling",
    achievements: ["100+ spouses NSDC-certified in four trades", "Budgets for 500+ members managed with zero errors", "Vendor partnerships grown from 8 to 10+"],
    responsibilities: ["Financial operations and budget allocations", "Initiatives with 100+ participants, approved from station to apex level", "A team of 20 welfare members and volunteers"],
    skills: ["Budget management", "Stakeholder approvals", "Vendor partnerships", "Program governance"]
  },
  {
    title: "Human Resources Manager",
    short: "HR Manager",
    period: "Jan 2019 – Nov 2023 (4 yrs 11 mos)",
    start: 2019, end: 2023 + 10 / 12,
    unit: "Indian Air Force • Personnel & readiness",
    color: "purple",
    metric: "300 personnel · +25% productivity",
    line: "Ran the full HR lifecycle, from onboarding and training to performance and welfare.",
    achievements: ["Full HR lifecycle for 300 personnel", "Contributed to a 25% increase in operational productivity"],
    responsibilities: ["Onboarding, operational training and performance reviews", "Welfare initiatives, performance coaching and morale"],
    skills: ["Onboarding", "Performance management", "Coaching", "Personnel welfare"]
  },
  {
    title: "Senior Project Manager",
    short: "Senior Project Manager",
    period: "Jan 2018 – Jan 2022 (4 yrs 1 mo)",
    start: 2018, end: 2022,
    unit: "Indian Air Force • Asset & squadron integration",
    color: "amber",
    metric: "₹50 Cr · 90 people",
    line: "Merged two squadrons and moved 10,000 records into IMMOLS without disruption.",
    projectId: "squadron-merger",
    achievements: ["Two squadrons merged in one month, with zero data loss", "₹50 crore in assets integrated", "10,000 spare-parts records moved into IMMOLS"],
    responsibilities: ["90 personnel led directly", "Five workstreams: equipment, maintenance assets, admin assets, data migration, and personnel and procedures", "Layered verification and handover inspection"],
    skills: ["Data migration", "IMMOLS", "Workstream planning", "Asset verification"]
  },
  {
    title: "Military Trainee",
    short: "Officer Training",
    period: "Jan 2016 – Jan 2018 (2 yrs 1 mo)",
    start: 2016, end: 2018,
    unit: "Indian Air Force • Officer training",
    color: "slate",
    metric: "Leadership under pressure",
    line: "Intensive training in leadership, discipline and calm decisions under stress.",
    achievements: ["Completed officer training in a dynamic VUCA environment"],
    responsibilities: ["Leadership, team-building, discipline and time management", "Calm, critical decision-making under stress, and military operational doctrine"],
    skills: ["Leadership", "Discipline", "Decision-making under stress"]
  }
];

// Timeline chart range, and the commendation shown as a marker on it.
const TIMELINE_START = 2016;
const TIMELINE_END = 2026;
const COMMENDATION_YEAR = 2025;

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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showAllRoles, setShowAllRoles] = useState(false);
  const [activeRole, setActiveRole] = useState(null);
  const [openRole, setOpenRole] = useState(null);

  // Clicking a bar in the career timeline jumps to that role's card, revealing earlier roles if needed.
  const focusRole = (index) => {
    if (index >= VISIBLE_ROLES && !showAllRoles) setShowAllRoles(true);
    setActiveRole(index);
    setTimeout(() => document.getElementById(`role-${index}`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
  };
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
          <a href="#intro" className="flex items-center gap-3 group whitespace-nowrap">
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
          <div className="hidden xl:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)] whitespace-nowrap">
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
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap rounded-lg border border-sky-400/50 text-[var(--text-primary)] hover:border-sky-400 btn-lift"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" /> Résumé
                {!RESUME_URL && <span className="text-[10px] normal-case tracking-normal text-amber-400">(file pending)</span>}
              </a>
            )}

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap bg-sky-500 hover:bg-sky-400 text-white rounded-lg btn-lift shadow-sm active:scale-95"
            >
              Let's Connect <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden glass-nav border-t border-[var(--border-color)] px-6 py-5 space-y-4 text-sm font-medium">
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
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]"><CountUp prefix="₹" to={500} suffix=" Cr+" /></div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Mission-critical aerospace assets supported</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-5 rounded-2xl border-t-2 border-t-teal-400 hover:translate-y-[-2px] transition-transform">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold mb-2">
                <TrendingUp className="w-4 h-4" /> EFFICIENCY GAIN
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]"><CountUp to={80} suffix="%" /></div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Cut in audit & paper validation cycle time</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-5 rounded-2xl border-t-2 border-t-sky-400 hover:translate-y-[-2px] transition-transform">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold mb-2">
                <Users className="w-4 h-4" /> CROSS-FUNCTIONAL
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]"><CountUp to={100} suffix="+" /></div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Multidisciplinary personnel & vendor teams led</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-5 rounded-2xl border-t-2 border-t-amber-400 hover:translate-y-[-2px] transition-transform">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-2">
                <CheckCircle2 className="w-4 h-4" /> RELIABILITY
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]"><CountUp to={95} suffix="%" /></div>
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

      {/* 5. PROVEN RESULTS: intro, at-a-glance index, case study spreads, builds, other outcomes */}
      <section id="impact" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 lg:items-center mb-12">
              <div className="lg:col-span-7">
                <SectionLabel n={3}>Proven Results</SectionLabel>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)]">
                  Proven results,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-500">
                    measured honestly.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                  Four Air Force missions, one rule:{" "}
                  <span className="font-semibold text-[var(--text-primary)]">count only what&apos;s real.</span>
                </p>
                {/* One headline result per case study: proof only, not a link (the spreads open the stories) */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {headlineResults.map((r) => (
                    <div key={r.id} className="glass-card rounded-xl px-4 py-3">
                      <span className="block text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                        {r.value}
                      </span>
                      <span className="block text-xs text-[var(--text-secondary)]">{r.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
                  + builds I made myself · honest notes in every story
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Every project, at a glance: a table of contents that scrolls to each spread or card below */}
          <FadeIn direction="up" delay={0.05}>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-2">
              <span className="text-sky-400">→</span> Every project, at a glance
            </div>
            <ol className="border-t border-dashed border-slate-400/30">
              {projects.map((project, i) => (
                <li key={project.id}>
                  <a
                    href={`#work-${project.id}`}
                    className="group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3rem_1fr_auto_auto] items-center gap-x-4 gap-y-2 py-4 border-b border-dashed border-slate-400/30 hover:bg-sky-500/5 transition-colors px-2 -mx-2 rounded-lg"
                  >
                    <span className="text-xl font-extrabold text-sky-400/80 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-base font-semibold text-[var(--text-primary)] group-hover:text-sky-400 transition-colors">
                        {project.title}
                      </span>
                      <span className="block text-sm text-[var(--text-secondary)]">{project.result}</span>
                    </span>
                    <span className="hidden sm:flex flex-wrap justify-end gap-1.5">
                      {project.tags.map((t, ti) => (
                        <span key={t} className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono ${tagTone[ti % tagTone.length]}`}>
                          {t}
                        </span>
                      ))}
                    </span>
                    <ArrowDown className="w-4 h-4 text-sky-400 group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ol>
          </FadeIn>

          {/* Case study spreads, alternating sides */}
          <div className="mt-16 space-y-20">
            {projects.filter((p) => p.group === "case").map((project, i) => (
              <FadeIn key={project.id} direction="up">
                <article id={`work-${project.id}`} className="scroll-mt-24">
                  <div className="flex items-end gap-4 pb-3 mb-8 border-b border-dashed border-slate-400/30">
                    <span className="text-5xl sm:text-6xl font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-teal-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] pb-1">Case study</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Diagram card */}
                    <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="relative glass-card rounded-2xl shadow-xl p-5 sm:p-6">
                        <IllustratedFlow visual={project.visual} sticker={project.sticker} />
                      </div>
                    </div>

                    {/* Story */}
                    <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((t, ti) => (
                          <span key={t} className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono ${tagTone[ti % tagTone.length]}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)]">
                        <GradientHeadline parts={project.headline} />
                      </h3>
                      <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">{project.summary}</p>

                      <dl className="mt-6 pt-6 border-t border-dashed border-slate-400/30 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                        {[
                          ["What changed", project.whatChanged],
                          ["In numbers", project.inNumbers],
                          ["How", project.how],
                          ["Role & team", project.roleTeam]
                        ].map(([label, text]) => (
                          <div key={label}>
                            <dt className="text-[11px] font-mono uppercase tracking-widest text-sky-400 mb-1">{label}</dt>
                            <dd className="text-sm text-[var(--text-secondary)] leading-relaxed">
                              <RichText text={text} />
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <Link
                        href={`/projects/${project.id}`}
                        className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-400/50 text-sm font-semibold text-[var(--text-primary)] hover:border-sky-400 btn-lift"
                      >
                        Read the case study <ArrowUpRight className="w-4 h-4 text-sky-400" />
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Builds & automation */}
          <FadeIn direction="up">
            <div className="mt-24 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-dashed border-slate-400/30">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Builds &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">automation</span>
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">Things I built myself, to stay hands-on with modern tools.</p>
            </div>
          </FadeIn>
          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.filter((p) => p.group === "build").map((project) => (
              <StaggerItem key={project.id}>
                <Link
                  id={`work-${project.id}`}
                  href={`/projects/${project.id}`}
                  className="scroll-mt-24 group glass-card rounded-2xl p-6 h-full flex flex-col gap-3 hover:border-sky-400/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t, ti) => (
                      <span key={t} className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono ${tagTone[ti % tagTone.length]}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-lg font-bold leading-snug text-[var(--text-primary)] group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm font-semibold text-emerald-400">{project.result}</p>
                  <ul className="space-y-1.5 text-sm text-[var(--text-secondary)] flex-1">
                    {project.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {project.tools.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dashed border-slate-400/30">
                      {project.tools.map((tool) => (
                        <span key={tool} className="px-2.5 py-0.5 rounded-full border border-slate-400/40 text-xs text-[var(--text-primary)]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-sky-400">
                    View project <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Other outcomes */}
          <FadeIn direction="up">
            <div className="mt-24 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-dashed border-slate-400/30">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Other outcomes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">I own the number on</span>
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">From roles without a full case study.</p>
            </div>
          </FadeIn>
          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherOutcomes.map((o, i) => {
              const c = accent[["sky", "teal", "indigo", "amber"][i % 4]];
              return (
                <StaggerItem key={o.value}>
                  <div className={`rounded-2xl p-6 h-full border ${c.border} ${c.bg}`}>
                    <div className={`text-4xl font-extrabold tracking-tight ${c.text}`}>{o.value}</div>
                    <p className="mt-2 text-sm text-[var(--text-primary)] leading-snug">{o.label}</p>
                    <p className="mt-3 text-[11px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">{o.source}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. CAREER JOURNEY: timeline chart of overlapping appointments, then one card per role */}
      <section id="experience" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 lg:items-end mb-10">
              <div className="lg:col-span-7">
                <SectionLabel n={4}>Career Journey</SectionLabel>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)]">
                  Ten years,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-500">
                    six appointments.
                  </span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                Progressive leadership in the <span className="font-semibold text-[var(--text-primary)]">Indian Air Force</span>,
                where the stakes were always high. Several roles ran side by side.
              </p>
            </div>
          </FadeIn>

          {/* Timeline chart: bars grow in on scroll; hover highlights a role card, click jumps to it */}
          <FadeIn direction="up" delay={0.05}>
            <div className="glass-card rounded-2xl p-5 sm:p-6 mb-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
                  <span className="text-sky-400">→</span> {TIMELINE_START}–{TIMELINE_END} at a glance
                </div>
                <div className="text-xs text-[var(--text-secondary)]">Overlapping bars = roles held at the same time</div>
              </div>

              <div className="relative pt-10">
                {/* Year gridlines and labels */}
                {Array.from({ length: TIMELINE_END - TIMELINE_START + 1 }, (_, k) => {
                  const year = TIMELINE_START + k;
                  const left = (k / (TIMELINE_END - TIMELINE_START)) * 100;
                  return (
                    <div key={year} className="absolute top-0 bottom-0 pointer-events-none" style={{ left: `${left}%` }}>
                      <div className="absolute top-4 bottom-0 border-l border-dashed border-slate-400/25"></div>
                      <span
                        className={`absolute top-0 -translate-x-1/2 text-[10px] font-mono text-[var(--text-secondary)] ${k % 2 === 1 ? "hidden sm:block" : ""}`}
                      >
                        {year}
                      </span>
                    </div>
                  );
                })}

                {/* Chief of Air Staff commendation marker */}
                <div
                  className="absolute top-4 bottom-0 pointer-events-none z-10"
                  style={{ left: `${((COMMENDATION_YEAR - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * 100}%` }}
                >
                  <div className="absolute top-0 bottom-0 border-l-2 border-amber-400/80"></div>
                  <span className="absolute -top-1 -translate-x-1/2 w-5 h-5 rounded-full bg-amber-400 text-[#0a0e1a] flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.6)]" title="Commended by the Chief of Air Staff, 2025">
                    <Award className="w-3 h-3" />
                  </span>
                </div>

                {/* One bar per role, earliest at the top */}
                <div className="relative space-y-2">
                  {roles
                    .map((role, index) => ({ role, index }))
                    .sort((a, b) => a.role.start - b.role.start)
                    .map(({ role, index }, row) => {
                      const c = accent[role.color];
                      const span = TIMELINE_END - TIMELINE_START;
                      return (
                        <div key={role.title} className="relative h-9">
                          <motion.button
                            type="button"
                            onMouseEnter={() => setActiveRole(index)}
                            onMouseLeave={() => setActiveRole(null)}
                            onFocus={() => setActiveRole(index)}
                            onBlur={() => setActiveRole(null)}
                            onClick={() => focusRole(index)}
                            title={`${role.title}, ${role.period}`}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 + row * 0.12, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                              left: `${((role.start - TIMELINE_START) / span) * 100}%`,
                              width: `${((role.end - role.start) / span) * 100}%`,
                              transformOrigin: "left"
                            }}
                            className={`absolute inset-y-0 rounded-lg ${c.fill} text-white text-xs font-semibold px-2.5 flex items-center overflow-hidden shadow-md transition-[filter,box-shadow] hover:brightness-110 hover:shadow-lg ${
                              activeRole === index ? "ring-2 ring-white/70" : ""
                            }`}
                          >
                            <span className="truncate">{role.short}</span>
                          </motion.button>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-flex items-center justify-center">
                  <Award className="w-2 h-2 text-[#0a0e1a]" />
                </span>
                Commended by the Chief of Air Staff, {COMMENDATION_YEAR}
              </div>
            </div>
          </FadeIn>

          {/* Role cards, most recent first */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-sky-500/20 space-y-5 ml-2 sm:ml-4">
            {roles.slice(0, showAllRoles ? roles.length : VISIBLE_ROLES).map((role, i) => {
              const c = accent[role.color];
              const project = role.projectId && projects.find((p) => p.id === role.projectId);
              return (
                <FadeIn key={role.title + role.period} direction="up" delay={Math.min(i, 4) * 0.05}>
                  <div id={`role-${i}`} className="relative group scroll-mt-28">
                    <div className={`absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full ${c.dot} border-4 border-[var(--bg-primary)] shadow-md group-hover:scale-125 transition-transform`}></div>

                    <div
                      onMouseEnter={() => setActiveRole(i)}
                      onMouseLeave={() => setActiveRole(null)}
                      className={`glass-card rounded-2xl p-5 sm:p-6 relative border-l-4 ${c.bar} ${c.hover} transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-lg ${
                        activeRole === i ? `ring-2 ${c.ring}` : ""
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">{role.title}</h3>
                        <span className={`text-xs font-mono font-medium ${c.text}`}>{role.period}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold ${c.border} ${c.bg} ${c.text}`}>{role.metric}</span>
                        <span className="text-xs font-medium text-[var(--text-secondary)]">{role.unit}</span>
                      </div>
                      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">{role.line}</p>

                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                        {role.achievements && (
                          <button
                            type="button"
                            onClick={() => setOpenRole(openRole === i ? null : i)}
                            aria-expanded={openRole === i}
                            aria-controls={`role-details-${i}`}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)] hover:text-sky-400 transition-colors"
                          >
                            {openRole === i ? "Show less" : "More about this role"}
                            <ChevronRight className={`w-4 h-4 text-sky-400 transition-transform ${openRole === i ? "-rotate-90" : "rotate-90"}`} />
                          </button>
                        )}
                        {project && (
                          <Link
                            href={`/projects/${project.id}`}
                            className={`nav-link inline-flex items-center gap-1 text-sm font-semibold ${c.text}`}
                          >
                            Featured program: {project.title} <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>

                      {/* Expandable details: key achievements, responsibilities and skills (one card open at a time) */}
                      <AnimatePresence initial={false}>
                        {openRole === i && (
                          <motion.div
                            id={`role-details-${i}`}
                            key="details"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-dashed border-slate-400/30 grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div>
                                <div className={`text-[11px] font-mono uppercase tracking-widest mb-2 ${c.text}`}>Key achievements</div>
                                <ul className="space-y-1.5">
                                  {role.achievements.map((a) => (
                                    <li key={a} className="flex items-start gap-2 text-sm text-[var(--text-primary)]">
                                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${c.text}`} />
                                      {a}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <div className={`text-[11px] font-mono uppercase tracking-widest mb-2 ${c.text}`}>What I owned</div>
                                <ul className="space-y-1.5">
                                  {role.responsibilities.map((r) => (
                                    <li key={r} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${c.dot}`}></span>
                                      {r}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {role.skills.map((s) => (
                                <span key={s} className="px-2.5 py-0.5 rounded-full border border-slate-400/40 text-xs text-[var(--text-primary)]">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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

      {/* 7. CAPABILITIES: tools strip + competencies grouped by stage of the work */}
      <section id="skills" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 lg:items-end mb-10">
              <div className="lg:col-span-7">
                <SectionLabel n={5}>Capabilities</SectionLabel>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)]">
                  Core competencies,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-500">
                    and the toolkit behind them.
                  </span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                Planning, delivery, governance and change, plus the tools that keep every moving part visible.
              </p>
            </div>
          </FadeIn>

          {/* Tools strip */}
          <FadeIn direction="up" delay={0.1}>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-2">
              <span className="text-sky-400">→</span> Tools I work in
            </div>
            <ToolsMarquee />
          </FadeIn>

          {/* Competency rows */}
          <div className="mt-10">
            {capabilityRows.map((row) => {
              const c = accent[row.color];
              const proof = projects.find((p) => p.id === row.proofId);
              return (
                <FadeIn key={row.title} direction="up">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7 border-t border-dashed border-slate-400/30">
                    <div className="md:col-span-4">
                      <h3 className={`text-xl font-bold flex items-center gap-2 ${c.text}`}>
                        <row.Icon className="w-5 h-5" /> {row.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">{row.meaning}</p>
                      {proof && (
                        <Link
                          href={`/projects/${proof.id}`}
                          className="group/proof mt-3 inline-flex items-start gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                        >
                          <span className={`font-semibold ${c.text}`}>Proof:</span>
                          <span className="nav-link">
                            {proof.title} <span className={c.text}>({proof.impact})</span>
                          </span>
                          <ArrowUpRight className={`w-4 h-4 shrink-0 mt-0.5 ${c.text} group-hover/proof:translate-x-0.5 group-hover/proof:-translate-y-0.5 transition-transform`} />
                        </Link>
                      )}
                    </div>
                    <div className="md:col-span-8 space-y-4">
                      {row.groups.map((group) => (
                        <div key={group.label}>
                          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                            {group.label}
                            <span className="flex-1 border-t border-dashed border-slate-400/30" aria-hidden="true"></span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                              <span
                                key={skill}
                                className="tool-pill px-4 py-1.5 rounded-full border border-slate-400/40 bg-[var(--bg-card)] text-sm font-medium text-[var(--text-primary)]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
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
