import {
  siNotion,
  siTrello,
  siJira,
  siClickup,
  siMiro,
  siAsana,
  siAirtable,
  siClaude,
  siGoogle,
  siZapier,
  siN8n,
  siFigma,
  siSupabase,
  siZoom,
  siGooglemeet,
  siLoom
} from "simple-icons";
import { ChartGantt } from "lucide-react";

// Brand logos come from Simple Icons, or from an official image in /public/logos used as a
// mask (`mask`). Tools without either get a neutral icon instead of an imitation logo.
// Logos are single-colour so they suit both themes and pick up the hover colour.
const tools = [
  { name: "Notion", icon: siNotion },
  { name: "Trello", icon: siTrello },
  { name: "Jira", icon: siJira },
  { name: "ClickUp", icon: siClickup },
  { name: "Miro", icon: siMiro },
  { name: "Asana", icon: siAsana },
  { name: "Gantt Charts", Icon: ChartGantt },
  { name: "Airtable", icon: siAirtable },
  { name: "Canva", mask: "/logos/canva.png" },
  { name: "Claude", icon: siClaude },
  { name: "ChatGPT", mask: "/logos/chatgpt.png" },
  { name: "Lovable", mask: "/logos/lovable.png" },
  { name: "Google Workspace", icon: siGoogle },
  { name: "Zoom · Meet", icons: [siZoom, siGooglemeet] },
  { name: "Slack", mask: "/logos/slack.png" },
  { name: "Loom", icon: siLoom },
  { name: "Zapier", icon: siZapier },
  { name: "n8n", icon: siN8n },
  { name: "Figma", icon: siFigma },
  { name: "Supabase", icon: siSupabase }
];

function BrandIcon({ icon }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}

function ToolIcon({ tool }) {
  if (tool.icons) {
    return (
      <span className="inline-flex items-center gap-1.5">
        {tool.icons.map((icon) => (
          <BrandIcon key={icon.slug} icon={icon} />
        ))}
      </span>
    );
  }
  if (tool.icon) return <BrandIcon icon={tool.icon} />;
  if (tool.mask) {
    return (
      <span
        className="w-5 h-5 bg-current"
        style={{
          maskImage: `url(${tool.mask})`,
          WebkitMaskImage: `url(${tool.mask})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center"
        }}
        aria-hidden="true"
      />
    );
  }
  return <tool.Icon className="w-5 h-5" aria-hidden="true" />;
}

function ToolPill({ tool }) {
  return (
    <li className="tool-pill shrink-0 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-400/40 bg-[var(--bg-card)] text-sm font-medium text-[var(--text-primary)]">
      <ToolIcon tool={tool} />
      {tool.name}
    </li>
  );
}

export function ToolsMarquee() {
  return (
    <div className="marquee">
      {/* The list is rendered twice so the loop is seamless; the copy is hidden from screen readers. */}
      <div className="marquee-track">
        <ul className="marquee-group" aria-label="Tools I work in">
          {tools.map((tool) => (
            <ToolPill key={tool.name} tool={tool} />
          ))}
        </ul>
        <ul className="marquee-group" aria-hidden="true">
          {tools.map((tool) => (
            <ToolPill key={tool.name} tool={tool} />
          ))}
        </ul>
      </div>
    </div>
  );
}
