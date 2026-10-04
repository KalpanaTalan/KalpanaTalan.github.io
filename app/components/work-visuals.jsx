import { ArrowRight, ArrowDown, FileText, MonitorCheck, MapPin, Award, Store, Scissors } from "lucide-react";

// Renders text where **double asterisks** mark the words shown in bold.
export function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <strong key={i} className="font-semibold text-[var(--text-primary)]">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

// A heading where the middle part is shown in the site's gradient, e.g. ["Paper to ", "one system", "."].
export function GradientHeadline({ parts, className = "" }) {
  const [lead, accent, tail] = parts;
  return (
    <span className={className}>
      {lead}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-500">{accent}</span>
      {tail}
    </span>
  );
}

function Box({ children, tone = "neutral", className = "" }) {
  const tones = {
    neutral: "border-slate-400/40 bg-[var(--bg-card)] text-[var(--text-primary)]",
    before: "border-slate-400/30 bg-slate-500/10 text-[var(--text-secondary)]",
    after: "border-sky-400/50 bg-sky-500/10 text-[var(--text-primary)]"
  };
  return <div className={`rounded-xl border px-4 py-3 text-sm font-medium text-center ${tones[tone]} ${className}`}>{children}</div>;
}

// The simple diagram on each case study card. Drawn with plain shapes because
// defence systems can't be shown, and each one mirrors the diagram in the case study.
export function CaseVisual({ visual }) {
  if (visual.type === "compare") {
    return (
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-secondary)] text-center">Before</div>
          <Box tone="before"><FileText className="w-5 h-5 mx-auto mb-1 opacity-70" />{visual.before[0]}</Box>
          <Box tone="before">{visual.before[1]}</Box>
        </div>
        <ArrowRight className="w-6 h-6 text-sky-400" />
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-widest text-sky-400 text-center">After</div>
          <Box tone="after"><MonitorCheck className="w-5 h-5 mx-auto mb-1 text-sky-400" />{visual.after[0]}</Box>
          <Box tone="after">{visual.after[1]}</Box>
        </div>
      </div>
    );
  }

  if (visual.type === "move") {
    return (
      <div className="flex flex-col items-center gap-3">
        <Box tone="before" className="w-full max-w-[16rem]"><MapPin className="w-5 h-5 mx-auto mb-1 opacity-70" />{visual.from}</Box>
        <div className="flex items-center gap-2 text-sky-400">
          <ArrowDown className="w-5 h-5" />
          <span className="px-3 py-1 rounded-full border border-sky-400/50 bg-sky-500/10 text-xs font-mono font-semibold">{visual.label}</span>
          <ArrowDown className="w-5 h-5" />
        </div>
        <Box tone="after" className="w-full max-w-[16rem]"><MapPin className="w-5 h-5 mx-auto mb-1 text-sky-400" />{visual.to}</Box>
        <div className="text-xs text-[var(--text-secondary)]">Whole system, one move</div>
      </div>
    );
  }

  if (visual.type === "merge") {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
          <Box tone="before">{visual.a}</Box>
          <Box tone="before">{visual.b}</Box>
        </div>
        <ArrowDown className="w-6 h-6 text-sky-400" />
        <Box tone="after" className="w-full max-w-[14rem]">{visual.to}</Box>
        <div className="px-3 py-1 rounded-full border border-teal-400/40 bg-teal-500/10 text-xs font-mono text-teal-300">{visual.note}</div>
      </div>
    );
  }

  if (visual.type === "path") {
    const icons = [Scissors, Award, Store];
    return (
      <div className="flex flex-col items-center gap-2">
        {visual.steps.map((step, i) => {
          const Icon = icons[i] || Award;
          return (
            <div key={step} className="w-full max-w-[16rem] flex flex-col items-center gap-2">
              <Box tone={i === visual.steps.length - 1 ? "after" : "neutral"} className="w-full">
                <Icon className={`w-5 h-5 mx-auto mb-1 ${i === visual.steps.length - 1 ? "text-sky-400" : "opacity-70"}`} />
                {step}
              </Box>
              {i < visual.steps.length - 1 && <ArrowDown className="w-5 h-5 text-sky-400" />}
            </div>
          );
        })}
      </div>
    );
  }

  return null;
}
