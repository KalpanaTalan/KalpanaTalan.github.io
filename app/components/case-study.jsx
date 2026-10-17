import { ChevronDown, Info } from "lucide-react";

// The honest note at the end of project pages: a quiet one-liner that opens on click,
// so it's there for anyone who looks, without competing with the work.
export function HonestNote({ text }) {
  return (
    <details className="group text-sm">
      <summary className="cursor-pointer list-none inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
        <Info className="w-3.5 h-3.5" />
        A note on scope
        <ChevronDown className="w-3.5 h-3.5 transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-2 max-w-3xl text-[var(--text-secondary)] leading-relaxed">{text}</p>
    </details>
  );
}
