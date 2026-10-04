import { Info } from "lucide-react";

// The "honest note" box used at the end of project pages.
export function HonestNote({ text }) {
  return (
    <div className="rounded-2xl p-5 sm:p-6 border border-dashed border-amber-400/60 bg-amber-500/5 flex items-start gap-3">
      <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
        <span className="font-semibold text-amber-300">The honest note. </span>
        {text}
      </p>
    </div>
  );
}
