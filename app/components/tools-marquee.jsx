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
  { name: "Supabase", icon: siSupabase },
  // Marks traced from each brand's own favicon (bolt.new, antigravity.google); not in Simple Icons.
  {
    name: "Bolt",
    icon: {
      slug: "bolt",
      viewBox: "3 2 10 12",
      fillRule: "evenodd",
      path: "M8.64368 11.7731C7.91976 11.7731 7.20901 11.5147 6.80099 10.9591L6.65707 11.6143L4 13L4.28684 11.6143L6.22186 3H8.59103L7.9066 6.03634C8.45941 5.44199 8.97273 5.22234 9.63083 5.22234C11.0523 5.22234 12 6.1397 12 7.81938C12 9.55074 10.9076 11.7731 8.64368 11.7731ZM9.55186 8.31036C9.55186 9.11144 8.97273 9.71871 8.22249 9.71871C7.8013 9.71871 7.4196 9.56366 7.16952 9.29233L7.53806 7.70309C7.81447 7.43176 8.13036 7.27671 8.49889 7.27671C9.06486 7.27671 9.55186 7.69017 9.55186 8.31036Z"
    }
  },
  {
    name: "Antigravity",
    icon: {
      slug: "antigravity",
      viewBox: "12 14 88 88",
      path: "M89.6992 93.695C94.3659 97.195 101.366 94.8617 94.9492 88.445C75.6992 69.7783 79.7825 18.445 55.8659 18.445C31.9492 18.445 36.0325 69.7783 16.7825 88.445C9.78251 95.445 17.3658 97.195 22.0325 93.695C40.1159 81.445 38.9492 59.8617 55.8659 59.8617C72.7825 59.8617 71.6159 81.445 89.6992 93.695Z"
    }
  }
];

function BrandIcon({ icon }) {
  return (
    <svg viewBox={icon.viewBox ?? "0 0 24 24"} className="w-5 h-5 fill-current" aria-hidden="true">
      <path d={icon.path} fillRule={icon.fillRule} clipRule={icon.fillRule} />
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
