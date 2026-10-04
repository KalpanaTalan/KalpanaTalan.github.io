// Shared project data for the home page cards and the /projects/[id] detail pages.
// `summary` and `cardHighlights` are the short versions shown on the home page;
// `description` and `highlights` are the full versions shown on the detail page.
export const projects = [
  {
    id: "paperless",
    category: "transformation",
    title: "Centralised Paperless Maintenance Platform",
    tag: "Digital Transformation",
    impact: "80% Time & Paperwork Cut",
    timeframe: "Delivered in 3–4 Months",
    summary:
      "Directed a centralised digital platform for 100+ mission-critical assets, cutting audit and validation time by 80%.",
    cardHighlights: [
      "Single-pane-of-glass status tracking for every asset",
      "Eliminated manual paperwork errors and audit backlog",
      "Multi-level security with role-based permissions"
    ],
    description:
      "Directed a centralised, digital platform for 100+ mission-critical assets. Eliminated paper friction, accelerating audit and validation speed by 80% while establishing single-pane-of-glass status tracking.",
    highlights: [
      "100+ mission-critical assets transitioned to paperless tracking",
      "Reduced audit and validation cycle time by 80%",
      "Eliminated manual paperwork errors and audit backlog",
      "Integrated multi-level security and role-based operational permissions"
    ]
  },
  {
    id: "fleet-readiness",
    category: "operations",
    title: "High-Stakes Fleet & Asset Maintenance",
    tag: "Asset Governance",
    impact: "₹500 Cr+ Assets Secured",
    timeframe: "Multi-Year Service",
    summary:
      "Led maintenance and operational readiness for high-stakes aerospace assets valued at ~₹500 Cr.",
    cardHighlights: [
      "Orchestrated cross-functional technical teams of 100+ personnel",
      "Sustained 95% formally tracked operational readiness",
      "Zero safety protocol violations in VUCA conditions"
    ],
    description:
      "Led maintenance and operational readiness for high-stakes aerospace assets valued at ~₹500 Cr, managing cross-functional technical teams exceeding 100 personnel.",
    highlights: [
      "Governed maintenance programs for ₹500 Cr in strategic assets",
      "Achieved and sustained 95% formally tracked operational readiness",
      "Orchestrated cross-functional technical teams of 100+ personnel",
      "Maintained zero safety protocol violations in VUCA conditions"
    ]
  },
  {
    id: "equipment-deployment",
    category: "operations",
    title: "Enterprise Military Equipment Deployment",
    tag: "Vendor & Risk Management",
    impact: "65-Member Team • 25 Vendors",
    timeframe: "Enterprise Scale",
    summary:
      "Directed equipment deployment across multiple geographies with a 65-member team and 22–25 external vendors.",
    cardHighlights: [
      "Rigorous SLA tracking across all external vendors",
      "95% formally tracked operational readiness at rollout",
      "Mitigated supply-chain and logistics bottlenecks early"
    ],
    description:
      "Directed enterprise-wide military equipment deployment across multiple geographies with a 65-member team, coordinating 22–25 external vendors with strict on-time delivery.",
    highlights: [
      "Cross-geography deployment with 65 multidisciplinary personnel",
      "Managed 22–25 external defense vendors with rigorous SLA tracking",
      "Achieved 95% formally tracked operational readiness upon rollout",
      "Proactively mitigated supply-chain and logistics bottlenecks"
    ],
    role: { title: "Program Manager", period: "Jan 2022 – Jan 2026" }
  },
  {
    id: "squadron-immols",
    category: "transformation",
    title: "Rapid Squadron & IMMOLS System Integration",
    tag: "Systems & Data Migration",
    impact: "Zero Data Loss in 30 Days",
    timeframe: "1-Month Sprint",
    summary:
      "Integrated two complete operational squadrons with 90 personnel, without operational disruption.",
    cardHighlights: [
      "10,000 line items migrated into IMMOLS with zero data loss",
      "Handover of ~₹50 Cr in strategic inventory",
      "Completed within a strict 30-day deadline"
    ],
    description:
      "Integrated two squadrons involving 90 personnel and ~₹50 Cr in defense assets within an aggressive 1-month timeline, migrating 10,000 spare-parts line items into IMMOLS with zero data loss.",
    highlights: [
      "Integrated 2 complete operational squadrons with 90 personnel",
      "Managed seamless handover of ~₹50 Cr in strategic inventory",
      "Migrated 10,000 line items into IMMOLS database with zero data loss",
      "Completed within strict 30-day operational deadline"
    ],
    role: { title: "Senior Project Manager", period: "Jan 2018 – Jan 2022" }
  },
  {
    id: "e-office",
    category: "transformation",
    title: "E-Office Paperless System Launch",
    tag: "Process Automation",
    impact: "50% Processing Time Reduction",
    timeframe: "250 Users",
    summary:
      "Rolled out the E-Office paperless system for 250 active users with a 20-member cross-functional team.",
    cardHighlights: [
      "Onboarded and trained all 250 end-users",
      "Turnaround cut from 3 hours to 1.5 hours",
      "Automated audit trails and digital governance"
    ],
    description:
      "Implemented the E-Office paperless system for 250 active users with a 20-member cross-functional team, cutting operational task processing times from 3 hours down to 1.5 hours.",
    highlights: [
      "Successfully onboarded and trained 250 end-users",
      "Slashed document turnaround time from 3 hours to 1.5 hours",
      "Coordinated 20-member cross-functional rollout team",
      "Established automated audit trails and digital governance"
    ],
    role: { title: "Senior Project Manager – IT & Network", period: "Aug 2021 – Jan 2025" }
  },
  {
    id: "ai-accelerator",
    category: "ai",
    title: "AI & Automated Customer Resolution Workflow",
    tag: "AI & Modern Systems",
    impact: "Automated Ticket Lifecycle",
    timeframe: "Recent Innovation",
    summary:
      "Engineered an automated, end-to-end customer query resolution pipeline, from intake to customer updates.",
    cardHighlights: [
      "Automated ingestion, urgency prioritisation and logging",
      "Real-time acknowledgements to keep stakeholders informed",
      "Explored during the Outskill AI Accelerator challenge"
    ],
    description:
      "Engineered an automated end-to-end customer query resolution pipeline connecting backend decision logic with clean user interfaces, logging, tracking, and automated customer updates.",
    image: "/workflow-diagram.jpg",
    highlights: [
      "End-to-end product architecture: backend logic + frontend interface",
      "Automated request ingestion, urgency prioritization, and logging",
      "Real-time acknowledgement loops ensuring clear stakeholder communication",
      "Explored during the Outskill AI Accelerator challenge"
    ]
  }
];

export function getProject(id) {
  return projects.find((p) => p.id === id);
}
