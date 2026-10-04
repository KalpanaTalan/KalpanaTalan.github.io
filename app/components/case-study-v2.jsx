import Link from "next/link";
import { ArrowRight, ChevronDown, Info } from "lucide-react";
import { FadeIn } from "./motion-wrapper";
import { RichText } from "./work-visuals";
import { embeds as paperless } from "../data/case-embeds/paperless";
import { embeds as relocation } from "../data/case-embeds/relocation";
import { embeds as squadronMerger } from "../data/case-embeds/squadron-merger";
import { embeds as spouseUpskilling } from "../data/case-embeds/spouse-upskilling";

// Original illustrated sections, keyed by the case study's `embeds` name.
const embedSets = {
  paperless,
  relocation,
  "squadron-merger": squadronMerger,
  "spouse-upskilling": spouseUpskilling
};

const label = "text-[11px] font-mono uppercase tracking-widest text-sky-400";
const pad = (x) => String(x).padStart(2, "0");

function PartHead({ n, total, title }) {
  return (
    <div className="flex items-end gap-4 pb-3 mb-8 border-b border-dashed border-slate-400/30">
      <span className="text-5xl sm:text-6xl font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-teal-300">
        {pad(n)}
      </span>
      <div className="pb-1">
        <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">
          Part {pad(n)} of {pad(total)}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
      </div>
    </div>
  );
}

function SubHead({ label: l, heading }) {
  return (
    <>
      {l && <div className={`${label} mb-2`}>{l}</div>}
      {heading && <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-5 max-w-3xl">{heading}</h3>}
    </>
  );
}

// One renderer per block type in a case study's `blocks` list.
const blockRenderers = {
  lead: (b) => (
    <div>
      <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
        <RichText text={b.text} />
      </p>
      {b.chips && (
        <div className="mt-4 flex flex-wrap gap-2">
          {b.chips.map((c) => (
            <span key={c} className="px-3 py-1.5 rounded-full border border-slate-400/40 text-sm text-[var(--text-primary)]">
              {c}
            </span>
          ))}
        </div>
      )}
    </div>
  ),

  // Kalpana's own static HTML from her case study files (no scripts), restyled via .cs-embed.
  embed: (b, embeds) => <div className="cs-embed overflow-x-auto" dangerouslySetInnerHTML={{ __html: embeds[b.key] }} />,

  roles: (b) => {
    const others = b.roles.filter((r) => !r.me);
    const me = b.roles.filter((r) => r.me);
    return (
      <div>
        <SubHead label="Who did what" heading={b.heading} />
        <div className={`grid grid-cols-1 gap-3 mb-3 ${others.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
          {others.map((r) => (
            <div key={r.who} className="glass-card rounded-xl p-4">
              <div className="text-sm font-bold text-[var(--text-primary)]">{r.who}</div>
              <p className="text-sm text-[var(--text-secondary)] mt-1">{r.what}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-5 border border-sky-400/50 bg-sky-500/10 space-y-3">
          {me.map((r, i) => (
            <div key={r.who} className={i > 0 ? "pt-3 border-t border-sky-400/20" : ""}>
              <div className="text-sm font-bold text-sky-400">{r.who}</div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-1">
                <RichText text={r.what} />
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },

  decisions: (b) => (
    <div>
      <SubHead label="Decisions that mattered" heading={b.heading} />
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${b.items.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}>
        {b.items.map((d, i) => (
          <div key={d.title} className="glass-card rounded-2xl p-5 border border-slate-400/40">
            <div className={`${label} mb-1`}>Decision {pad(i + 1)}</div>
            <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">{d.title}</h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <RichText text={d.text} />
            </p>
          </div>
        ))}
      </div>
    </div>
  ),

  numbers: (b) => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {b.items.map((n) => (
        <div key={n.label} className="glass-card rounded-2xl p-5 border-t-2 border-t-sky-500">
          <div className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">{n.value}</div>
          <div className="mt-1 text-sm text-[var(--text-secondary)]">{n.label}</div>
        </div>
      ))}
    </div>
  ),

  recognition: (b) => (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-semibold text-amber-300 mr-2">{b.heading}:</span>
      {b.items.map((item) => (
        <span key={item} className="px-3 py-1.5 rounded-full border border-amber-400/40 text-sm text-[var(--text-primary)]">
          {item}
        </span>
      ))}
    </div>
  ),

  scorecard: (b) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {b.items.map((s) => {
        const honest = s.label.startsWith("What didn't");
        return (
          <div
            key={s.label}
            className={`rounded-2xl p-5 border ${honest ? "border-dashed border-amber-400/60 bg-amber-500/5" : "border-slate-400/40 glass-card"}`}
          >
            <div className={`text-[11px] font-mono uppercase tracking-widest mb-2 flex items-center gap-1.5 ${honest ? "text-amber-400" : "text-sky-400"}`}>
              {honest && <Info className="w-3.5 h-3.5" />}
              {s.label}
            </div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              <RichText text={s.text} />
            </p>
          </div>
        );
      })}
    </div>
  )
};

// Groups the flat block list into parts: each { type: "part" } starts a new part.
function toParts(blocks) {
  const parts = [];
  for (const b of blocks) {
    if (b.type === "part") parts.push({ title: b.title, blocks: [] });
    else parts[parts.length - 1].blocks.push(b);
  }
  return parts;
}

export function CaseStudyV2({ study, next }) {
  const embeds = embedSets[study.embeds];
  const parts = toParts(study.blocks);

  return (
    <>
      {/* Hero */}
      <FadeIn direction="up">
        <div className="text-xs font-mono uppercase tracking-widest text-sky-400">{study.kicker}</div>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl">{study.title}</h1>
        <p className="mt-4 text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-500 max-w-3xl">
          {study.subtitle}
        </p>
      </FadeIn>

      {/* Info strip */}
      <FadeIn direction="up" delay={0.05}>
        <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-slate-400/30 overflow-hidden">
          {study.strip.map((s, i) => (
            <div
              key={s.label}
              className={`p-4 bg-[var(--bg-card)] border-slate-400/30 ${i % 2 === 1 ? "border-l" : ""} ${i === 2 ? "lg:border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""}`}
            >
              <dt className={`${label} mb-1`}>{s.label}</dt>
              <dd className="text-sm font-medium text-[var(--text-primary)]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </FadeIn>

      {/* In one breath */}
      <FadeIn direction="up" delay={0.1}>
        <div className="mt-5 rounded-2xl p-5 sm:p-6 border border-sky-400/30 bg-sky-500/10 grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-2 sm:gap-6">
          <div className="text-sm font-semibold italic text-sky-400">In one breath</div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            <RichText text={study.oneBreath} />
          </p>
        </div>
      </FadeIn>

      {/* Big numbers */}
      <FadeIn direction="up" delay={0.15}>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {study.bigNumbers.map((b) => (
            <div key={b.label}>
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                {b.value}
              </div>
              <div className="mt-1 text-sm text-[var(--text-secondary)]">{b.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Key terms, tucked away */}
      <details className="mt-10 group glass-card rounded-2xl px-5 py-4">
        <summary className="cursor-pointer list-none flex items-center justify-between text-sm font-semibold text-[var(--text-primary)]">
          <span>
            {study.termsLabel || "New to defence?"} <span className="text-sky-400">{study.terms.length} key terms</span>
          </span>
          <ChevronDown className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-180" />
        </summary>
        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {study.terms.map((t) => (
            <div key={t.term} className="text-sm">
              <dt className="inline font-semibold text-[var(--text-primary)]">{t.term}: </dt>
              <dd className="inline text-[var(--text-secondary)]">{t.def}</dd>
            </div>
          ))}
        </dl>
      </details>

      {/* Parts */}
      {parts.map((part, i) => (
        <section key={part.title} className="mt-20">
          <FadeIn direction="up">
            <PartHead n={i + 1} total={parts.length} title={part.title} />
          </FadeIn>
          <div className="space-y-14">
            {part.blocks.map((b, bi) => (
              <FadeIn key={bi} direction="up">
                {blockRenderers[b.type](b, embeds)}
              </FadeIn>
            ))}
          </div>
        </section>
      ))}

      {study.footnote && <p className="mt-10 text-xs text-[var(--text-secondary)]">{study.footnote}</p>}

      {/* Next project */}
      {next && (
        <Link
          href={`/projects/${next.id}`}
          className="group mt-12 flex items-center justify-between gap-4 rounded-2xl p-6 border border-slate-400/40 glass-card hover:border-sky-400/60 transition-colors"
        >
          <div>
            <div className={`${label} mb-1`}>Next project</div>
            <div className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-sky-400 transition-colors">{next.title}</div>
          </div>
          <span className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-5 h-5" />
          </span>
        </Link>
      )}
    </>
  );
}
