"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/motion-wrapper";
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

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
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

  const projects = [
    {
      id: "paperless",
      category: "transformation",
      title: "Centralised Paperless Maintenance Platform",
      tag: "Digital Transformation",
      impact: "80% Time & Paperwork Cut",
      timeframe: "Delivered in 3–4 Months",
      description:
        "Directed a centralised, digital platform for 100+ mission-critical assets. Eliminated paper friction, accelerating audit and validation speed by 80% while establishing single-pane-of-glass status tracking.",
      highlights: [
        "100+ mission-critical assets transitioned to paperless tracking",
        "Reduced audit and validation cycle time by 80%",
        "Eliminated manual paperwork errors and audit backlog",
        "Integrated multi-level security and role-based operational permissions"
      ]
    },
    {
      id: "fleet-readiness",
      category: "operations",
      title: "High-Stakes Fleet & Asset Maintenance",
      tag: "Asset Governance",
      impact: "₹500 Cr+ Assets Secured",
      timeframe: "Multi-Year Service",
      description:
        "Led maintenance and operational readiness for high-stakes aerospace assets valued at ~₹500 Cr, managing cross-functional technical teams exceeding 100 personnel.",
      highlights: [
        "Governed maintenance programs for ₹500 Cr in strategic assets",
        "Achieved and sustained 95% formally tracked operational readiness",
        "Orchestrated cross-functional technical teams of 100+ personnel",
        "Maintained zero safety protocol violations in VUCA conditions"
      ]
    },
    {
      id: "equipment-deployment",
      category: "operations",
      title: "Enterprise Military Equipment Deployment",
      tag: "Vendor & Risk Management",
      impact: "65-Member Team • 25 Vendors",
      timeframe: "Enterprise Scale",
      description:
        "Directed enterprise-wide military equipment deployment across multiple geographies with a 65-member team, coordinating 22–25 external vendors with strict on-time delivery.",
      highlights: [
        "Cross-geography deployment with 65 multidisciplinary personnel",
        "Managed 22–25 external defense vendors with rigorous SLA tracking",
        "Achieved 95% formally tracked operational readiness upon rollout",
        "Proactively mitigated supply-chain and logistics bottlenecks"
      ]
    },
    {
      id: "squadron-immols",
      category: "transformation",
      title: "Rapid Squadron & IMMOLS System Integration",
      tag: "Systems & Data Migration",
      impact: "Zero Data Loss in 30 Days",
      timeframe: "1-Month Sprint",
      description:
        "Integrated two squadrons involving 90 personnel and ~₹50 Cr in defense assets within an aggressive 1-month timeline, migrating 10,000 spare-parts line items into IMMOLS with zero data loss.",
      highlights: [
        "Integrated 2 complete operational squadrons with 90 personnel",
        "Managed seamless handover of ~₹50 Cr in strategic inventory",
        "Migrated 10,000 line items into IMMOLS database with zero data loss",
        "Completed within strict 30-day operational deadline"
      ]
    },
    {
      id: "e-office",
      category: "transformation",
      title: "E-Office Paperless System Launch",
      tag: "Process Automation",
      impact: "50% Processing Time Reduction",
      timeframe: "250 Users",
      description:
        "Implemented the E-Office paperless system for 250 active users with a 20-member cross-functional team, cutting operational task processing times from 3 hours down to 1.5 hours.",
      highlights: [
        "Successfully onboarded and trained 250 end-users",
        "Slashed document turnaround time from 3 hours to 1.5 hours",
        "Coordinated 20-member cross-functional rollout team",
        "Established automated audit trails and digital governance"
      ]
    },
    {
      id: "ai-accelerator",
      category: "ai",
      title: "AI & Automated Customer Resolution Workflow",
      tag: "AI & Modern Systems",
      impact: "Automated Ticket Lifecycle",
      timeframe: "Recent Innovation",
      description:
        "Engineered an automated end-to-end customer query resolution pipeline connecting backend decision logic with clean user interfaces, logging, tracking, and automated customer updates.",
      image: "/workflow-diagram.jpg",
      highlights: [
        "End-to-end product architecture: backend logic + frontend interface",
        "Automated request ingestion, urgency prioritization, and logging",
        "Real-time acknowledgement loops ensuring clear stakeholder communication",
        "Explored during the Outskill AI Accelerator challenge"
      ]
    }
  ];

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
              <span className="text-xs text-sky-400 font-medium tracking-wide flex items-center gap-1">
                <Shield className="w-3 h-3 text-sky-400" /> IAF Veteran
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]">
            <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">
              About
            </a>
            <a href="#impact" className="hover:text-[var(--text-primary)] transition-colors">
              Impact
            </a>
            <a href="#experience" className="hover:text-[var(--text-primary)] transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-[var(--text-primary)] transition-colors">
              Skills
            </a>
            <a href="#certifications" className="hover:text-[var(--text-primary)] transition-colors">
              Credentials
            </a>
            <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--border-color)] hover:bg-white/5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-white rounded-lg transition-all shadow-sm active:scale-95"
            >
              Let's Connect <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-nav border-t border-[var(--border-color)] px-6 py-5 space-y-4 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              About Me
            </a>
            <a
              href="#impact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Featured Work & Impact
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Work Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Core Skills
            </a>
            <a
              href="#certifications"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Certifications & Education
            </a>
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
              I help organizations translate complex strategy into structured, predictable execution. 
              Backed by a decade of military operational leadership, PMP®, and CSM credentials to deliver when failure is not an option.
            </p>

            {/* Value Proposition Pill */}
            <div className="p-4 rounded-xl glass-card border-l-4 border-l-sky-500 text-sm text-[var(--text-secondary)] leading-relaxed shadow-sm">
              <span className="font-semibold text-[var(--text-primary)] block mb-1">
                Scaling a team and things are starting to slip?
              </span>
              That is where I step in: bringing the right people together, identifying risks early, and aligning execution to measurable outcomes.
            </div>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-white rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Get in Touch
              </a>
              <a
                href="#impact"
                className="px-6 py-3 text-sm font-semibold glass-card hover:bg-white/5 text-[var(--text-primary)] rounded-xl transition-all active:scale-95 flex items-center gap-2"
              >
                View Featured Work <ArrowUpRight className="w-4 h-4 text-sky-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/kalpanatalan/"
                target="_blank"
                rel="noreferrer"
                className="p-3 glass-card hover:text-sky-400 rounded-xl transition-colors text-[var(--text-secondary)]"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/tools-kalpana"
                target="_blank"
                rel="noreferrer"
                className="p-3 glass-card hover:text-sky-400 rounded-xl transition-colors text-[var(--text-secondary)]"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Credentials Strip */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[var(--text-secondary)]">
              <span className="px-2.5 py-1 rounded-md glass-card">PMP® Certified</span>
              <span className="px-2.5 py-1 rounded-md glass-card">CSM® ScrumMaster</span>
              <span className="px-2.5 py-1 rounded-md glass-card">Lean Six Sigma Black Belt</span>
              <span className="px-2.5 py-1 rounded-md glass-card">M.Tech Aeronautical Engg</span>
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
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for Leadership
                  </div>
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
                      <Award className="w-3.5 h-3.5 text-amber-400" /> Commendation
                    </span>
                    <span className="text-amber-300 font-medium">Chief of Air Staff (2025)</span>
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
          <FadeIn direction="up">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
                ABOUT MY WORK
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Bridging Strategic Intent & Flawless Execution
              </h2>
            </div>
          </FadeIn>

          {/* Quote Card */}
          <FadeIn direction="up" delay={0.1}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 border-l-4 border-l-amber-400 mb-10 relative overflow-hidden shadow-lg">
              <div className="text-base sm:text-xl font-medium italic text-[var(--text-primary)] leading-relaxed">
                &ldquo;I am a wedding planner for projects and programs. I bring the right people together, spot what could go wrong, and fix it beforehand — Wedding planners call it a perfect day. Program and project managers call it on-time, on-budget delivery. I call it a job done right.&rdquo;
              </div>
              <div className="mt-4 text-xs font-mono text-sky-400 font-semibold tracking-wider">
                — KALPANA TALAN
              </div>
            </div>
          </FadeIn>

          {/* Detailed Narrative in 2-Column Grid */}
          <FadeIn direction="up" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
              <div className="space-y-4">
                <p>
                  My career has been shaped by <span className="text-[var(--text-primary)] font-semibold">10 years of service in the Indian Air Force</span>, where I worked across program management, IT, operations, HR, procurement, and administration. These diverse assignments equipped me to lead complex programs, manage cross-functional teams, and deliver outcomes in demanding, high-risk environments.
                </p>
                <p>
                  In 2025, I was commended by the <span className="text-amber-400 font-semibold">Chief of Air Staff</span> for my contribution and leadership — recognizing dedication to operational readiness, disciplined execution, and people-first governance.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  I bring a structured approach to program delivery: <span className="text-[var(--text-primary)] font-medium">define requirements clearly, establish milestones, identify risks early, align stakeholders, and create measurable outcomes</span>. My experience spans Agile and Waterfall methodologies, digital systems adoption, and vendor ecosystem management.
                </p>
                <p>
                  Outside core operations, I actively focus on project management with AI, automation tools, stakeholder management in mission-critical environments, and building automated capabilities across Jira, Notion, ClickUp, Asana, Miro, and AI workflows.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. FEATURED WORK & IMPACT PROJECTS */}
      <section id="impact" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
                  PROVEN RESULTS
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  Featured Programs & Initiatives
                </h2>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-2 p-1 rounded-xl glass-card text-xs font-medium">
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
                <div className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-sky-400/40 hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-lg h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-400 px-2 py-0.5 rounded bg-sky-500/10">
                        {project.tag}
                      </span>
                      <span className="text-[11px] text-[var(--text-secondary)]">
                        {project.timeframe}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-sky-400 transition-colors mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <div className="inline-block text-xs font-semibold text-emerald-400 mb-3">
                      ★ Impact: {project.impact}
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Optional Project Diagram Preview */}
                    {project.image && (
                      <div className="my-3 rounded-lg overflow-hidden border border-white/10 relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={260}
                          className="w-full object-cover"
                        />
                      </div>
                    )}

                    <ul className="space-y-2 border-t border-[var(--border-color)] pt-3 text-xs text-[var(--text-secondary)]">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
                CAREER JOURNEY
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                Work Experience (10 Years, 9 Months)
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2">
                Progressive leadership appointments across the Indian Armed Forces in demanding, high-stakes environments.
              </p>
            </div>
          </FadeIn>

          {/* Timeline Wrapper */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-sky-500/20 space-y-10 ml-2 sm:ml-4">
            {/* Role 1 */}
            <FadeIn direction="up" delay={0.05}>
              <div className="relative group">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-sky-500 border-4 border-[var(--bg-primary)] shadow-md group-hover:scale-125 transition-transform"></div>
                
                <div className="glass-card rounded-2xl p-6 sm:p-7 relative border-l-4 border-l-sky-500 hover:border-sky-400/40 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-sky-400 transition-colors">Program Manager</h3>
                    <span className="text-xs font-mono text-sky-400 font-medium">Jan 2022 – Present (4 yrs 9 mos)</span>
                  </div>
                  <p className="text-xs font-medium text-[var(--text-secondary)] mb-3">
                    Indian Armed Forces • On-site
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-sky-400 mt-1">▸</span>
                      <span>Directed enterprise-wide military equipment deployment across multiple geographies with a 65-member team, including 22–25 external vendors, achieving 95% formally tracked operational readiness.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-400 mt-1">▸</span>
                      <span>Governed risk registers, milestone dependencies, and vendor SLA compliance in high-risk mission parameters.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Role 2 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-teal-400 border-4 border-[var(--bg-primary)] shadow-md group-hover:scale-125 transition-transform"></div>

                <div className="glass-card rounded-2xl p-6 sm:p-7 relative border-l-4 border-l-teal-500 hover:border-teal-400/40 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-teal-400 transition-colors">Senior Project Manager – IT & Network</h3>
                    <span className="text-xs font-mono text-teal-400 font-medium">Aug 2021 – Jan 2025 (3 yrs 6 mos)</span>
                  </div>
                  <p className="text-xs font-medium text-[var(--text-secondary)] mb-3">
                    Indian Armed Forces • On-site
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-1">▸</span>
                      <span>Reduced operational processing time by 50% (from 3 hours down to 1.5 hours) for 250 active users by implementing the E-Office paperless system with a 20-member cross-functional team.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 mt-1">▸</span>
                      <span>Spearheaded system adoption, stakeholder change management, and security protocols across military network infrastructure.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Role 3 */}
            <FadeIn direction="up" delay={0.15}>
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-indigo-400 border-4 border-[var(--bg-primary)] shadow-md group-hover:scale-125 transition-transform"></div>

                <div className="glass-card rounded-2xl p-6 sm:p-7 relative border-l-4 border-l-indigo-500 hover:border-indigo-400/40 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors">CSR & NGO Program Manager</h3>
                    <span className="text-xs font-mono text-indigo-400 font-medium">Jan 2020 – Nov 2024 (4 yrs 11 mos)</span>
                  </div>
                  <p className="text-xs font-medium text-[var(--text-secondary)] mb-3">
                    Indian Armed Forces • Community & Welfare Governance
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">▸</span>
                      <span>Expanded vendor partnerships from 8 to 10+ while coordinating large-scale initiatives with 100+ participants.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">▸</span>
                      <span>Managed financial operations and budget allocations for 500+ members, maintaining zero errors in fund administration.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Role 4 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-purple-400 border-4 border-[var(--bg-primary)] shadow-md group-hover:scale-125 transition-transform"></div>

                <div className="glass-card rounded-2xl p-6 sm:p-7 relative border-l-4 border-l-purple-500 hover:border-purple-400/40 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-purple-400 transition-colors">Human Resources Manager</h3>
                    <span className="text-xs font-mono text-purple-400 font-medium">Jan 2019 – Nov 2023 (4 yrs 11 mos)</span>
                  </div>
                  <p className="text-xs font-medium text-[var(--text-secondary)] mb-3">
                    Indian Armed Forces • Personnel & Operational Readiness
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Completed the full HR lifecycle for 300 personnel, covering onboarding, operational training, performance reviews, and welfare initiatives.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Contributed to a 25% increase in operational productivity through disciplined performance coaching and morale development.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Role 5 */}
            <FadeIn direction="up" delay={0.25}>
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-amber-400 border-4 border-[var(--bg-primary)] shadow-md group-hover:scale-125 transition-transform"></div>

                <div className="glass-card rounded-2xl p-6 sm:p-7 relative border-l-4 border-l-amber-500 hover:border-amber-400/40 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-amber-400 transition-colors">Senior Project Manager</h3>
                    <span className="text-xs font-mono text-amber-400 font-medium">Jan 2018 – Jan 2022 (4 yrs 1 mo)</span>
                  </div>
                  <p className="text-xs font-medium text-[var(--text-secondary)] mb-3">
                    Indian Armed Forces • Asset & Squadron Integration
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">▸</span>
                      <span>Integrated two squadrons involving 90 personnel and approximately ₹50 Cr in strategic assets within a 1-month timeline with zero data loss.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">▸</span>
                      <span>Migrated 10,000 spare-parts line items into the IMMOLS inventory system without operational disruption.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Role 6 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-slate-400 border-4 border-[var(--bg-primary)] shadow-md group-hover:scale-125 transition-transform"></div>

                <div className="glass-card rounded-2xl p-6 sm:p-7 relative border-l-4 border-l-slate-500 hover:border-slate-400/40 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-slate-300 transition-colors">Military Trainee</h3>
                    <span className="text-xs font-mono text-slate-400 font-medium">Jan 2016 – Jan 2018 (2 yrs 1 mo)</span>
                  </div>
                  <p className="text-xs font-medium text-[var(--text-secondary)] mb-3">
                    Indian Armed Forces • Officer Training
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">▸</span>
                      <span>Built leadership, team-building, discipline, and time-management capabilities through intensive training in a dynamic VUCA environment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">▸</span>
                      <span>Honed calm, critical decision-making under stress and deep understanding of military operational doctrine.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. SKILLS & MODERN TOOLING BENTO GRID */}
      <section id="skills" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
                CAPABILITIES
              </span>
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
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Translating high-level business goals into predictable milestones and resilient risk architecture.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Program Management",
                    "Project Management",
                    "Digital Transformation",
                    "Risk Governance",
                    "Cross-functional Leadership",
                    "Stakeholder Alignment",
                    "Vendor Negotiation",
                    "Systems Migration",
                    "Operational Readiness"
                  ].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 text-xs rounded-lg glass-card text-[var(--text-primary)] font-medium hover:border-sky-400/40 hover:bg-sky-500/10 transition-colors cursor-default">
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
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Structured frameworks ensuring quality control, speed, and continuous process optimization.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Agile & Scrum (CSM®)",
                    "Waterfall Methodologies",
                    "Lean Six Sigma Green Belt (LSSGB)",
                    "Lean Six Sigma Black Belt (LSSBB)",
                    "Value Stream Mapping",
                    "Earned Value Management (EVM)",
                    "Root Cause Analysis",
                    "Change Management"
                  ].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 text-xs rounded-lg glass-card text-[var(--text-primary)] font-medium hover:border-teal-400/40 hover:bg-teal-500/10 transition-colors cursor-default">
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
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Leveraging the latest tooling and automated workflows to accelerate execution and transparency.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "AI Workflow Tools",
                    "Jira",
                    "Notion",
                    "ClickUp",
                    "Trello",
                    "Asana",
                    "Miro",
                    "Gantt Charts",
                    "Airtable",
                    "E-Office Platforms"
                  ].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 text-xs rounded-lg glass-card text-[var(--text-primary)] font-medium hover:border-amber-400/40 hover:bg-amber-500/10 transition-colors cursor-default">
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
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
                  CREDENTIALS & HONORS
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  Licenses, Certifications & Recognition
                </h2>
              </div>

              {/* Special Recognition Banner */}
              <div className="glass-card rounded-2xl p-5 border border-amber-400/30 bg-amber-500/5 flex items-start gap-4 hover:border-amber-400/60 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-amber-300">Commended by Chief of Air Staff (2025)</h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    Awarded for exemplary contribution, high-stakes operational leadership, and digital transformation excellence in the Indian Air Force.
                  </p>
                </div>
              </div>

              <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StaggerItem>
                  <div className="glass-card p-4 rounded-xl space-y-1 hover:border-sky-400/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">PMP® Certified</h4>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">Project Management Institute (PMI)</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass-card p-4 rounded-xl space-y-1 hover:border-teal-400/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">CSM® ScrumMaster</h4>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">Scrum Alliance</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass-card p-4 rounded-xl space-y-1 hover:border-indigo-400/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">Lean Six Sigma Green Belt (LSSGB)</h4>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">Process Optimization & Quality</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass-card p-4 rounded-xl space-y-1 hover:border-purple-400/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">Lean Six Sigma Black Belt (LSSBB)</h4>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">Advanced Process & Defect Governance</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass-card p-4 rounded-xl space-y-1 hover:border-sky-400/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">Value Stream Management</h4>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">Project Management Institute (PMI)</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass-card p-4 rounded-xl space-y-1 hover:border-amber-400/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">Management Essentials (Jan 2026)</h4>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">IIM Shillong (Business Administration)</p>
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

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 border-t border-[var(--border-color)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Info */}
            <FadeIn direction="up" className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
                  LET&apos;S CONNECT
                </span>
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
                  className="px-4 py-2.5 rounded-xl glass-card hover:border-sky-400 text-xs font-semibold flex items-center gap-2 text-[var(--text-primary)] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" /> LinkedIn Profile <ExternalLink className="w-3 h-3 text-[var(--text-secondary)]" />
                </a>
                <a
                  href="https://github.com/tools-kalpana"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl glass-card hover:border-sky-400 text-xs font-semibold flex items-center gap-2 text-[var(--text-primary)] transition-all"
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
                <p className="text-xs text-[var(--text-secondary)]">
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg transition-colors"
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
                      className="w-full py-3 text-xs font-semibold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-white rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
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
            <a href="#intro" className="hover:text-[var(--text-primary)] transition-colors">
              Back to Top ↑
            </a>
            <a
              href="https://www.linkedin.com/in/kalpanatalan/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tools-kalpana"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
