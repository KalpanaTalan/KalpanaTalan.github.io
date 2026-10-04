import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Briefcase, CheckCircle2, Clock, Target, Users, Wrench } from "lucide-react";
import { FadeIn } from "../../components/motion-wrapper";
import { HonestNote } from "../../components/case-study";
import { CaseStudyV2 } from "../../components/case-study-v2";
import { RichText } from "../../components/work-visuals";
import { CurrentYear } from "../../components/current-year";
import { projects, getProject } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};
  return {
    title: `${project.title} | Kalpana Talan`,
    description: project.caseStudy ? project.caseStudy.subtitle : project.description
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.id === id);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Impact", value: project.impact, Icon: Target, color: "text-emerald-400" },
    { label: "Timeframe", value: project.timeframe, Icon: Clock, color: "text-sky-400" },
    project.roleTeam && { label: "Role & team", value: <RichText text={project.roleTeam} />, Icon: Users, color: "text-teal-400" },
    project.role && !project.roleTeam && {
      label: "Role",
      value: `${project.role.title} (${project.role.period})`,
      Icon: Briefcase,
      color: "text-amber-400"
    },
    project.tools?.length > 0 && { label: "Built with", value: project.tools.join(" · "), Icon: Wrench, color: "text-indigo-400" }
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-40 z-0"></div>
      <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/#impact"
            className="group shrink-0 whitespace-nowrap inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-sky-400/50 bg-sky-500/10 text-sm font-semibold text-sky-400 hover:bg-sky-500/20 hover:border-sky-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="sm:hidden">All work</span>
            <span className="hidden sm:inline">Back to all work</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap">
            Kalpana Talan
            <span className="hidden min-[400px]:inline text-xs text-sky-400 font-medium">IAF Veteran</span>
            <Image src="/iaf-crest.png" alt="Indian Air Force crest" width={106} height={120} className="h-8 w-auto ml-1" />
          </Link>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {project.caseStudy ? (
          <div data-illus="dark">
            <CaseStudyV2 study={project.caseStudy} next={next} />
          </div>
        ) : (
        <>
        <FadeIn direction="up">
          <span className="text-xs font-semibold uppercase tracking-wide text-sky-400 px-2 py-0.5 rounded bg-sky-500/10">
            {project.tag}
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className={`mt-10 grid grid-cols-1 gap-4 ${facts.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
            {facts.map(({ label, value, Icon, color }) => (
              <div key={label} className="glass-card rounded-2xl p-5">
                <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wide mb-2 ${color}`}>
                  <Icon className="w-4 h-4" /> {label}
                </div>
                <div className="text-base font-bold leading-snug">{value}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Key results</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((item) => (
                <li key={item} className="glass-card rounded-xl p-4 flex items-start gap-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {project.image && (
          <FadeIn direction="up" delay={0.2}>
            <section className="mt-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-5">Workflow</h2>
              <div className="rounded-2xl overflow-hidden border border-[var(--border-color)]">
                <Image src={project.image} alt={`${project.title} diagram`} width={1200} height={780} className="w-full h-auto" />
              </div>
            </section>
          </FadeIn>
        )}

        {project.honestNote && (
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-12">
              <HonestNote text={project.honestNote} />
            </div>
          </FadeIn>
        )}
        </>
        )}

        {/* Case study pages end with their own "Next project" card */}
        {!project.caseStudy && (
        <div className="mt-10 pt-6 border-t border-[var(--border-color)] grid grid-cols-2 gap-4 text-sm">
          <Link href={`/projects/${prev.id}`} className="group text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <span className="flex items-center gap-1 text-xs uppercase tracking-wide text-sky-400 mb-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Previous
            </span>
            <span className="font-semibold">{prev.title}</span>
          </Link>
          <Link href={`/projects/${next.id}`} className="group text-right text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <span className="flex items-center justify-end gap-1 text-xs uppercase tracking-wide text-sky-400 mb-1">
              Next <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold">{next.title}</span>
          </Link>
        </div>
        )}

        {/* Closing: invitation, way back, and quick links */}
        <FadeIn direction="up" delay={0.1}>
          <div className="mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Bring the complexity.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">I&apos;ll bring the plan.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)]">
              Many moving parts, one finish line. Let&apos;s talk about yours.
            </p>

            <Link
              href="/#impact"
              className="group mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-400/40 text-sm font-semibold text-sky-400 hover:border-sky-400 hover:bg-sky-500/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to all work
            </Link>

            <div className="mt-6 flex items-center justify-center gap-6 text-sm font-medium">
              <a href="mailto:kalpanatalan.veteran@gmail.com" className="nav-link text-[var(--text-secondary)] hover:text-sky-400 transition-colors">
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/kalpanatalan/"
                target="_blank"
                rel="noreferrer"
                className="nav-link text-[var(--text-secondary)] hover:text-sky-400 transition-colors"
              >
                LinkedIn
              </a>
              <Link href="/" className="nav-link text-[var(--text-secondary)] hover:text-sky-400 transition-colors">
                Portfolio home
              </Link>
            </div>

            <p className="mt-8 text-xs text-[var(--text-secondary)]">© <CurrentYear /> · Kalpana Talan · Indian Air Force Veteran</p>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
