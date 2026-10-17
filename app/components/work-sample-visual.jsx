"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, Check, Minus, X, Zap } from "lucide-react";
import { HangingCard } from "./hanging-card";

// The visual side of a work-sample spread on the home page. Each sample gets the diagram that
// fits its work: a trigger flow, a timeline, a fork into lanes, or a fan-out to several places.
const box = "rounded-xl px-4 py-3 border bg-[var(--bg-card)] text-center";
const toolLabel = "flex items-center justify-center gap-1.5 text-[10px] font-mono uppercase tracking-widest mb-1";
const toneStyle = {
  good: { border: "border-emerald-400/60", text: "text-emerald-400", Icon: Check },
  bad: { border: "border-rose-400/60", text: "text-rose-400", Icon: X },
  muted: { border: "border-slate-400/40 border-dashed", text: "text-[var(--text-secondary)]", Icon: Minus }
};

function Down({ variants }) {
  return (
    <motion.span variants={variants} className="py-1.5 text-sky-400" aria-hidden="true">
      <ArrowDown className="w-4 h-4" />
    </motion.span>
  );
}

function Engine({ gate, variants }) {
  return (
    <motion.div variants={variants} className="w-full max-w-xs rounded-xl px-4 py-3 border border-sky-400/60 bg-sky-500/10 text-center">
      <div className={`${toolLabel} text-sky-400`}>
        <Zap className="w-3 h-3" />
        {gate.tool}
      </div>
      <div className="text-sm font-semibold leading-snug text-[var(--text-primary)]">{gate.title}</div>
    </motion.div>
  );
}

function Source({ source, variants }) {
  return (
    <motion.div variants={variants} className={`w-full max-w-xs ${box} border-slate-400/40`}>
      <div className={`${toolLabel} text-[var(--text-secondary)]`}>{source.tool}</div>
      <div className="text-sm font-semibold leading-snug text-[var(--text-primary)]">{source.title}</div>
    </motion.div>
  );
}

// Trigger → engine → result, stacked.
function FlowDiagram({ v, item }) {
  return v.flow.map((st, i) => (
    <div key={st.title} className="contents">
      {st.engine ? (
        <Engine gate={st} variants={item} />
      ) : (
        <motion.div
          variants={item}
          className={`w-full max-w-xs ${box} ${st.result ? "border-teal-300/60 shadow-[0_0_24px_-8px_rgba(45,212,191,0.5)]" : "border-slate-400/40"}`}
        >
          <div className={`${toolLabel} ${st.result ? "text-teal-300" : "text-[var(--text-secondary)]"}`}>{st.tool}</div>
          <div
            className={
              st.result
                ? "text-lg font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300"
                : "text-sm font-semibold leading-snug text-[var(--text-primary)]"
            }
          >
            {st.title}
          </div>
        </motion.div>
      )}
      {i < v.flow.length - 1 && <Down variants={item} />}
    </div>
  ));
}

// A clock-style track from start to end, with the stops along it.
function TimelineDiagram({ v, item }) {
  return (
    <div className="w-full">
      <motion.div variants={item} className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-2">
        <span>{v.start}</span>
        <span className="text-teal-300">{v.end}</span>
      </motion.div>
      <motion.div variants={item} className="relative h-1.5 rounded-full bg-slate-400/20 overflow-hidden mb-5">
        <motion.span
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-sky-400 to-teal-300"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
        />
      </motion.div>
      <div className="grid grid-cols-2 gap-2.5">
        {v.stops.map((st, i) => (
          <motion.div
            key={st.title}
            variants={item}
            className={`${box} ${st.result ? "border-teal-300/60 shadow-[0_0_24px_-8px_rgba(45,212,191,0.5)]" : "border-slate-400/40"}`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-400 to-teal-300 text-[10px] font-bold text-slate-900 flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <span className={st.result ? "text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300" : "text-base font-bold text-[var(--text-primary)]"}>
                {st.title}
              </span>
            </div>
            <div className="mt-1 text-[11px] text-[var(--text-secondary)] leading-snug">{st.tool}</div>
            {st.badge && (
              <div className="mt-1.5 inline-block px-2 py-0.5 rounded-full border border-sky-400/50 bg-sky-500/10 text-[10px] font-semibold text-sky-300">
                ⇉ {st.badge}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Arrows that split from one point into `n` parallel branches. A branch listed in `dashed`
// is conditional (drawn dashed, in amber).
function Branch({ n, dashed = [], variants }) {
  const xs = Array.from({ length: n }, (_, i) => ((i + 0.5) / n) * 100);
  return (
    <motion.svg variants={variants} viewBox="0 0 100 34" preserveAspectRatio="none" className="w-full h-9 my-1" aria-hidden="true">
      {xs.map((x, i) => {
        const cond = dashed.includes(i);
        return (
          <g key={i} className={cond ? "text-amber-400" : "text-sky-400"}>
            <path
              d={`M50 0 C50 16, ${x} 12, ${x} 28`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeDasharray={cond ? "3 3" : undefined}
              vectorEffect="non-scaling-stroke"
            />
            <path d={`M${x - 2.2} 25 L${x} 32 L${x + 2.2} 25`} fill="none" stroke="currentColor" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
          </g>
        );
      })}
    </motion.svg>
  );
}

// Lead Spam Checker: a cheap check branches empties off to the side, then the AI forks in two.
function ForkDiagram({ v, item }) {
  return (
    <>
      <Source source={v.source} variants={item} />
      <Down variants={item} />
      <div className="w-full flex items-center justify-center gap-2">
        <motion.div variants={item} className={`flex-1 max-w-[13rem] ${box} border-slate-400/40`}>
          <div className={`${toolLabel} text-[var(--text-secondary)]`}>{v.check.tool}</div>
          <div className="text-sm font-semibold leading-snug text-[var(--text-primary)]">{v.check.title}</div>
        </motion.div>
        <motion.div variants={item} className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">yes</span>
          <ArrowRight className="w-4 h-4 text-[var(--text-secondary)]" aria-hidden="true" />
        </motion.div>
        <motion.div variants={item} className="shrink-0 rounded-xl px-3 py-2.5 border border-dashed border-slate-400/50 text-center">
          <Minus className="w-4 h-4 mx-auto text-[var(--text-secondary)]" />
          <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">{v.side.label}</div>
          <div className="text-xs font-semibold text-[var(--text-primary)]">{v.side.title}</div>
        </motion.div>
      </div>
      <Down variants={item} />
      <Engine gate={v.gate} variants={item} />
      <Branch n={v.lanes.length} variants={item} />
      <div className="w-full grid grid-cols-2 gap-3">
        {v.lanes.map((ln) => {
          const t = toneStyle[ln.tone];
          return (
            <motion.div key={ln.label} variants={item} className={`rounded-xl px-3 py-3 border text-center bg-[var(--bg-card)] ${t.border}`}>
              <t.Icon className={`w-5 h-5 mx-auto mb-1 ${t.text}`} />
              <div className={`text-[10px] font-mono uppercase tracking-widest ${t.text}`}>{ln.label}</div>
              <div className="mt-0.5 text-sm font-bold text-[var(--text-primary)] leading-snug">{ln.title}</div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

// Support Inbox: one ticket goes to three places at the same time; escalation only when urgent.
function FanoutDiagram({ v, item }) {
  const dashed = v.outputs.map((o, i) => (o.condition ? i : -1)).filter((i) => i >= 0);
  return (
    <>
      <Source source={v.source} variants={item} />
      <Down variants={item} />
      <Engine gate={v.gate} variants={item} />
      <Branch n={v.outputs.length} dashed={dashed} variants={item} />
      <div className="w-full grid grid-cols-3 gap-2">
        {v.outputs.map((o) => (
          <motion.div
            key={o.title}
            variants={item}
            className={`rounded-xl px-2 py-3 border text-center ${
              o.alert ? "border-amber-400/70 bg-amber-500/10 shadow-[0_0_22px_-8px_rgba(251,191,36,0.6)]" : "border-slate-400/40 bg-[var(--bg-card)]"
            }`}
          >
            <div className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-wider mb-1 ${o.alert ? "text-amber-400" : "text-[var(--text-secondary)]"}`}>
              {o.tool}
            </div>
            <div className={`text-[11px] sm:text-sm font-bold leading-snug ${o.alert ? "text-amber-300" : "text-[var(--text-primary)]"}`}>{o.title}</div>
            {o.condition && <div className="mt-0.5 text-[10px] font-mono text-amber-400">{o.condition}</div>}
          </motion.div>
        ))}
      </div>
    </>
  );
}

const diagrams = { timeline: TimelineDiagram, fork: ForkDiagram, fanout: FanoutDiagram };

export function WorkSampleVisual({ sample }) {
  const reduce = useReducedMotion();
  const v = sample.visual;
  const Diagram = diagrams[v.type] ?? FlowDiagram;
  const item = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 240, damping: 22 } }
  };

  return (
    <HangingCard status={sample.status}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: reduce ? 0 : 0.15 } } }}
        className="flex flex-col items-center py-4"
      >
        <Diagram v={v} item={item} />
        {v.note && (
          <motion.div variants={item} className="mt-4 text-xs font-mono text-[var(--text-secondary)]">
            <span className="text-emerald-400">●</span> {v.note}
          </motion.div>
        )}
      </motion.div>
    </HangingCard>
  );
}
