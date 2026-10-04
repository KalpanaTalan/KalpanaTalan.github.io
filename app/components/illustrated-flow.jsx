"use client";

import { motion, useReducedMotion } from "motion/react";
import { icons as paperless } from "../data/case-icons/paperless";
import { icons as relocation } from "../data/case-icons/relocation";
import { icons as squadronMerger } from "../data/case-icons/squadron-merger";
import { icons as spouseUpskilling } from "../data/case-icons/spouse-upskilling";

// Icons copied from Kalpana's case study illustrations, keyed by `visual.set`. Each card mixes
// tiles from different sections, so it previews the story without repeating any flow on the
// case study page in the same order.
const iconSets = {
  paperless,
  relocation,
  "squadron-merger": squadronMerger,
  "spouse-upskilling": spouseUpskilling
};

const stages = [
  { label: "The problem", text: "text-amber-400", border: "border-orange-400/70" },
  { label: "The key move", text: "text-purple-400", border: "border-violet-400/70" },
  { label: "The result", text: "text-sky-400", border: "border-fuchsia-400/70" }
];

function Svg({ markup, className }) {
  // Kalpana's own static SVG artwork (no scripts).
  return <span className={className} dangerouslySetInnerHTML={{ __html: markup }} />;
}

// Problem → key move → result, built from the case study's own icons. Tiles pop in one after
// another, arrows slide in between them, and the sticker drops in last; it plays once.
export function IllustratedFlow({ visual, sticker }) {
  const icons = iconSets[visual.set];
  const reduce = useReducedMotion();
  const stagger = reduce ? 0 : 0.18;

  const pop = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, scale: 0.85, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
  };
  const slide = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: 0.1 } } }}
    >
      {sticker && (
        <motion.span
          variants={{
            hidden: reduce ? { opacity: 1 } : { opacity: 0, y: -16, rotate: -8 },
            visible: { opacity: 1, y: 0, rotate: 0, transition: { delay: stagger * 6, type: "spring", stiffness: 300, damping: 14 } }
          }}
          className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-mono font-semibold shadow-lg"
        >
          {sticker}
        </motion.span>
      )}

      <div className="flex flex-col">
        {visual.steps.map((step, i) => {
          const s = stages[i];
          return (
            <div key={step.icon} className="contents">
              <motion.figure variants={pop} className={`flex items-center gap-4 rounded-xl border-2 ${s.border} bg-[var(--bg-card)] p-3`}>
                <Svg markup={icons[step.icon]} className="block shrink-0 w-28 sm:w-32 aspect-[17/12]" />
                <figcaption className="min-w-0">
                  <div className={`text-[10px] font-mono uppercase tracking-widest mb-1 ${s.text}`}>{s.label}</div>
                  <div className="text-sm sm:text-base leading-snug font-semibold text-[var(--text-primary)]">{step.caption}</div>
                </figcaption>
              </motion.figure>
              {i < visual.steps.length - 1 && (
                <motion.span variants={slide} className="self-center w-6 h-8 flex items-center justify-center">
                  {/* The original arrows point right; turned to point down between the stacked steps */}
                  <Svg markup={icons[i === 0 ? "arrowA" : "arrowB"]} className="block w-8 rotate-90 [&>svg]:w-full [&>svg]:h-auto" />
                </motion.span>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
