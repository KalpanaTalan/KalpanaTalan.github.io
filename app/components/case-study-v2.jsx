import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ExternalLink, Info, Mail } from "lucide-react";
import { FadeIn } from "./motion-wrapper";
import { RichText } from "./work-visuals";
import { embeds as paperless } from "../data/case-embeds/paperless";
import { embeds as relocation } from "../data/case-embeds/relocation";
import { embeds as squadronMerger } from "../data/case-embeds/squadron-merger";
import { embeds as spouseUpskilling } from "../data/case-embeds/spouse-upskilling";
import { embeds as petCareCompanion } from "../data/case-embeds/pet-care-companion";
import { embeds as leadSpamChecker } from "../data/case-embeds/lead-spam-checker";
import { HonestNote } from "./case-study";

// Original illustrated sections, keyed by the story's `embeds` name.
// Used for both case studies and project (build) pages.
const embedSets = {
  paperless,
  relocation,
  "squadron-merger": squadronMerger,
  "spouse-upskilling": spouseUpskilling,
  "pet-care-companion": petCareCompanion,
  "lead-spam-checker": leadSpamChecker
};

const label = "text-[11px] font-mono uppercase tracking-widest text-sky-400";
const isDev = process.env.NODE_ENV === "development";
const pad = (x) => String(x).padStart(2, "0");

// With a `heading`, the part's title becomes the small label and the heading is the punchy line.
function PartHead({ n, total, title, heading }) {
  return (
    <div className="flex items-end gap-4 pb-3 mb-8 border-b border-dashed border-slate-400/30">
      <span className="text-5xl sm:text-6xl font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-teal-300">
        {pad(n)}
      </span>
      <div className="pb-1">
        <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">
          Part {pad(n)} of {pad(total)}
          {heading && <span className="text-sky-400"> · {title}</span>}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{heading ?? title}</h2>
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

// An artifact's screenshot. With `reveal`, it stays folded behind a button until clicked.
// Without a screenshot yet, a placeholder shows on localhost only.
function ArtifactImage({ a }) {
  // `narrow` screenshots (tall, app-style) sit centred on a light canvas instead of stretching full width.
  const body = a.src ? (
    <div className={a.narrow ? "bg-[#f7f6f2] flex justify-center px-4 py-6" : "bg-white"}>
      <Image
        src={a.src}
        alt={a.title}
        width={a.width ?? 1600}
        height={a.height ?? 1000}
        className={a.narrow ? "w-full max-w-sm h-auto rounded-lg" : "w-full h-auto"}
      />
    </div>
  ) : isDev ? (
    <div className="bg-amber-500/5 px-6 py-10 text-center text-sm text-amber-400">Screenshot pending (localhost only)</div>
  ) : null;
  if (!body) return null;

  if (!a.reveal) return <div className="border-t border-slate-400/30">{body}</div>;
  return (
    <details className="group border-t border-slate-400/30">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-3 px-5 sm:px-6 py-4 text-sm font-semibold text-sky-400 hover:bg-sky-500/5 transition-colors">
        {a.reveal}
        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
      </summary>
      <div className="border-t border-slate-400/30">{body}</div>
    </details>
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
        <SubHead label={b.label ?? "Who did what"} heading={b.heading} />
        {others.length > 0 && (
          <div className={`grid grid-cols-1 gap-3 mb-3 ${others.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
            {others.map((r) => (
              <div key={r.who} className="glass-card rounded-xl p-4">
                <div className="text-sm font-bold text-[var(--text-primary)]">{r.who}</div>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{r.what}</p>
              </div>
            ))}
          </div>
        )}
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
      <SubHead label={b.label ?? "Decisions that mattered"} heading={b.heading} />
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${b.items.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}>
        {b.items.map((d, i) => (
          <div key={d.title} className="glass-card rounded-2xl p-5 border border-slate-400/40">
            <div className={`${label} mb-1`}>{b.itemLabel ?? "Decision"} {pad(i + 1)}</div>
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

  honest: (b) => <HonestNote text={b.text} />,

  // A one-line insight, set apart like a pull quote.
  quote: (b) => (
    <blockquote className="max-w-3xl border-l-4 border-sky-400 pl-5 py-1 text-lg sm:text-xl font-semibold leading-snug text-[var(--text-primary)]">
      {b.text}
    </blockquote>
  ),

  // A simple two-column table (e.g. field → the question it answers).
  table: (b) => (
    <div className="max-w-3xl rounded-2xl border border-slate-400/40 glass-card overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-dashed border-slate-400/40">
            {b.columns.map((c) => (
              <th key={c} className={`${label} text-left px-5 py-3 font-normal`}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {b.rows.map((row) => (
            <tr key={row[0]} className="border-b border-dashed border-slate-400/25 last:border-0">
              <td className="px-5 py-3 font-semibold text-[var(--text-primary)] w-2/5">{row[0]}</td>
              <td className="px-5 py-3 text-[var(--text-secondary)]">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),

  // Work-sample artifacts: a line of context first, then the real screenshot and/or link.
  // Missing screenshots or links show a placeholder on localhost only.
  artifacts: (b) => (
    <div className="space-y-6">
      {b.items.map((a, i) => (
        <figure key={a.title} className="rounded-2xl border border-slate-400/40 glass-card overflow-hidden">
          <figcaption className="px-5 sm:px-6 pt-5 pb-4">
            <div className={`${label} mb-1`}>Artifact {pad(i + 1)}</div>
            <div className="text-lg font-bold text-[var(--text-primary)]">{a.title}</div>
            <p className="mt-1 text-sm text-[var(--text-secondary)] leading-relaxed">{a.context}</p>
            {a.href ? (
              <a
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold btn-lift"
              >
                {a.linkLabel ?? "Open"} <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              a.linkLabel &&
              isDev && (
                <span className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-amber-400/60 text-sm font-semibold">
                  {a.linkLabel} <span className="text-[10px] text-amber-400">(link pending)</span>
                </span>
              )
            )}
          </figcaption>
          {!a.noImage && <ArtifactImage a={a} />}
        </figure>
      ))}
    </div>
  ),

  // A left-to-right pipeline (trigger → … → action); stacks vertically on phones.
  flow: (b) => (
    <div>
      <SubHead label={b.label} heading={b.heading} />
      <div className="flex flex-col sm:flex-row sm:items-stretch gap-2">
        {b.steps.map((st, i) => (
          <div key={st.title} className="contents">
            <div
              className={`flex-1 rounded-xl p-4 border ${
                i === b.steps.length - 1 ? "border-sky-400/60 bg-sky-500/10" : "border-slate-400/40 glass-card"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className={label}>{st.tag}</span>
                {st.tool && (
                  <span className="whitespace-nowrap px-2.5 py-0.5 rounded-full border border-sky-400/40 bg-sky-500/10 text-xs font-semibold text-[var(--text-primary)]">
                    {st.tool}
                  </span>
                )}
              </div>
              <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug">{st.title}</div>
              {st.note && <div className="mt-1 text-xs text-[var(--text-secondary)]">{st.note}</div>}
            </div>
            {i < b.steps.length - 1 && (
              <span className="self-center text-sky-400 rotate-90 sm:rotate-0" aria-hidden="true">
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  ),

  // A sample of the email the automation sends (illustrative data).
  email: (b) => (
    <figure className="max-w-2xl">
      <div className="rounded-2xl border border-slate-400/40 glass-card overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-400/30 flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-sky-500/15 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0">
            <Mail className="w-4 h-4" />
          </span>
          <div className="min-w-0">
            <div className="text-sm font-bold text-[var(--text-primary)]">{b.from}</div>
            <div className="text-xs text-[var(--text-secondary)] truncate">{b.subject}</div>
          </div>
        </div>
        <div className="px-5 py-4 text-sm text-[var(--text-secondary)] space-y-2">
          <p className="text-[var(--text-primary)] font-semibold">{b.greeting}</p>
          <p>{b.intro}</p>
          <ul className="space-y-1.5">
            {b.lines.map((ln) => (
              <li key={ln} className="font-mono text-xs sm:text-[13px] text-[var(--text-primary)] rounded-lg border border-slate-400/30 px-3 py-2">
                {ln}
              </li>
            ))}
          </ul>
          {b.more && <p className="text-xs italic">{b.more}</p>}
          {b.closing && <p className="pt-1">{b.closing}</p>}
        </div>
      </div>
      {b.caption && <figcaption className="mt-2 text-xs text-[var(--text-secondary)]">{b.caption}</figcaption>}
    </figure>
  ),

  image: (b) => (
    <figure>
      <div className="rounded-2xl overflow-hidden border border-[var(--border-color)] bg-white">
        <Image src={b.src} alt={b.alt} width={1200} height={780} className="w-full h-auto" />
      </div>
      {b.caption && <figcaption className="mt-2 text-xs text-[var(--text-secondary)]">{b.caption}</figcaption>}
    </figure>
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
    if (b.type === "part") parts.push({ title: b.title, heading: b.heading, blocks: [] });
    else parts[parts.length - 1].blocks.push(b);
  }
  return parts;
}

export function CaseStudyV2({ study, next }) {
  const embeds = embedSets[study.embeds] ?? {};
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
          <div className="text-sm font-semibold italic text-sky-400">{study.oneBreathLabel ?? "In one breath"}</div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            <RichText text={study.oneBreath} />
          </p>
        </div>
      </FadeIn>

      {/* Big numbers */}
      {study.bigNumbers?.length > 0 && (
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
      )}

      {/* Key terms, tucked away */}
      {study.terms?.length > 0 && (
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
      )}

      {/* Parts */}
      {parts.map((part, i) => (
        <section key={part.title} className="mt-20">
          <FadeIn direction="up">
            <PartHead n={i + 1} total={parts.length} title={part.title} heading={part.heading} />
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
