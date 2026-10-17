"use client";

// A straight case study card with a dashboard-style status chip (pulsing "live" dot) on top
// and a caption strip along the bottom. The diagram inside animates itself (see IllustratedFlow `live`).
export function HangingCard({ status, caption, children }) {
  return (
    <div className="relative glass-card rounded-2xl shadow-xl">
      {status && (
        <div className="flex justify-end px-5 sm:px-6 pt-4 -mb-1">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/40 bg-emerald-500/10 text-xs font-mono font-semibold text-[var(--text-primary)]">
            <span className="relative flex w-2 h-2">
              <span className="status-ping absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            {status}
          </span>
        </div>
      )}

      <div className="p-5 sm:p-6">{children}</div>

      {caption && (
        <div className="mx-5 sm:mx-6 py-3 border-t border-dashed border-slate-400/40 text-center text-sm text-[var(--text-secondary)]">
          {caption}
        </div>
      )}
    </div>
  );
}
