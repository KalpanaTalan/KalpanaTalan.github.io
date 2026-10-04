// Work shown in 03 Proven Results and on the /projects/[id] pages.
// Source of truth: Kalpana's case study pages (with her later corrections: on the paperless
// rollout she was also the platform administrator; vendors are "20+", counted separately
// from the 65-person team).
//
// group "case"  → a featured spread on the home page (Air Force case studies)
// group "build" → a smaller card in "Builds & automation"
// Text fields may use **double asterisks** to mark words shown in bold.
// `caseStudy` holds the full, structured story for projects rebuilt as a rich page.

export const projects = [
  {
    id: "paperless",
    group: "case",
    title: "Paper to paperless maintenance",
    tags: ["Indian Air Force", "Digital adoption"],
    tag: "Digital Transformation",
    result: "Audit checks cut from 5 days to 1, across 100+ assets",
    impact: "5 days → 1 day audits",
    timeframe: "3–4 months",
    headline: ["Paper registers to ", "one digital system", "."],
    summary:
      "Every repair on critical defence equipment was logged by hand, and proving it for an audit took 5 days. I led the rollout that made a new platform work in daily maintenance across my region.",
    whatChanged: "**80% less** manual documentation, and **one view of maintenance status** for every asset.",
    inNumbers: "Audit checks **5 days → 1 day**. **100+ assets** brought onto the platform.",
    how: "Started small, grew asset by asset, ran **batch training**, then fixed a date to switch for good.",
    roleTeam: "Program Manager and **platform administrator** · team of 30 · partner Wipro",
    sticker: "100+ assets",
    visual: {
      type: "illustrated",
      set: "paperless",
      steps: [
        { icon: "problem", caption: "Linked paper registers" },
        { icon: "move", caption: "Train and track daily use" },
        { icon: "result", caption: "Audits in 1 day" }
      ]
    },
    description:
      "Every repair and check on critical defence equipment was written by hand in linked paper registers, and verifying those records for an audit took 5 days. I led the rollout that made a new digital platform work in daily maintenance across my region, in 3–4 months, with a team of 30 and technology partner Wipro.",
    caseStudy: {
      embeds: "paperless",
      kicker: "Case study · Program management · Indian Air Force",
      title: "Taking air defence maintenance from paper to one digital system",
      subtitle: "Easier daily maintenance and faster audits, across 100+ assets.",
      strip: [
        { label: "My role", value: "Program Manager & platform administrator" },
        { label: "Timeline", value: "3–4 months" },
        { label: "Team", value: "30 people · partner Wipro" },
        { label: "Mandate", value: "Set by headquarters" }
      ],
      oneBreath:
        "Headquarters ordered maintenance to go paperless, but no one in the field had done it before. I led the regional rollout with a team of 30 and Wipro, and ran the platform as its administrator. Audit checks fell from **5 days to 1**, manual documentation dropped **80%**, and every activity is now on record.",
      bigNumbers: [
        { value: "5d → 1d", label: "audit verification time" },
        { value: "80%", label: "less manual documentation" },
        { value: "100+", label: "assets on one platform" },
        { value: "1 view", label: "of maintenance status for every asset (a “single pane of glass”)" }
      ],
      terms: [
        { term: "Asset", def: "A piece of equipment that must be kept serviceable at all times." },
        { term: "Audit", def: "An official check that maintenance was done properly and recorded." },
        { term: "Register", def: "A hand-filled ledger book where each job is written down." },
        { term: "Zonal helpdesk", def: "The support desk that takes problems from the field and sends back fixes." },
        { term: "Role-based access", def: "What each person can see and do on the platform, set by their role." }
      ],
      blocks: [
        { type: "part", title: "The problem and why it mattered" },
        {
          type: "lead",
          text: "Every job was handwritten into linked registers in a fixed order, and proving it for an audit took **5 days**.",
          chips: ["Mandate from headquarters", "No real-time view of status", "No proof of who did what", "A habit of years"]
        },
        { type: "embed", key: "challenge" },

        { type: "part", title: "What I did: the decisions" },
        { type: "embed", key: "change" },
        {
          type: "roles",
          heading: "Headquarters planned the platform. My job was to make it work on the ground, and to run it.",
          roles: [
            { who: "Headquarters", what: "Decided to go paperless, planned the platform and launched it." },
            { who: "Wipro", what: "Technology partner. Told by us what the platform had to contain, and kept in the loop on fixes." },
            { who: "Zonal helpdesk", what: "Took issues from the field and sent back resolutions." },
            {
              who: "Me, with a team of 30",
              me: true,
              what: "Made the platform work in daily maintenance in my domain: mapped the paper process, told Wipro what to include, trained technicians and ran the feedback loop."
            },
            {
              who: "Me, as platform administrator",
              me: true,
              what: "Added every new asset as the rollout grew, added and removed technicians as they were **posted in and out**, changed roles as people **moved up**, and granted permissions, with **multi-level security** on a closed network."
            }
          ]
        },
        { type: "embed", key: "rollout" },
        { type: "embed", key: "loop" },
        {
          type: "decisions",
          heading: "Four choices that made the change stick",
          items: [
            { title: "Start small", text: "Began with **fewer assets** and added more, so each step showed what to map next." },
            { title: "Run both, then switch", text: "Paper and digital **side by side**, then a **fixed date** after which paper no longer applied." },
            { title: "Train, don't remind", text: "Frequent **batch classes**, with supervisors tracking daily usage, after reminders alone had failed." },
            { title: "Close the loop", text: "Feedback with **Wipro and the zonal helpdesk**, so the platform matched real maintenance work." }
          ]
        },

        { type: "part", title: "What changed" },
        { type: "embed", key: "results" },

        { type: "part", title: "The four questions, answered" },
        {
          type: "scorecard",
          items: [
            {
              label: "What worked",
              text: "Starting small, **batch training** and a **fixed switch-over date**. Audits went from **5 days to 1**, with positive audit remarks, and other units asked to follow the approach."
            },
            {
              label: "What didn't (the honest note)",
              text: "I did not design the platform, so my credit is for **adoption, shaping and administering** it. I have no adoption figure, and 45 minutes per task has no earlier baseline."
            },
            {
              label: "What I'd improve",
              text: "A **ready training kit and guide**, and planning for **how long learning takes**, with technicians involved even earlier."
            },
            {
              label: "How I'd measure success",
              text: "Adoption, not just usage: are people **attending** the classes, **able** to attend, **grasping** the concepts, and **using it daily**?"
            }
          ]
        }
      ],
      footnote: "General labels only. No unit names, locations or equipment details."
    }
  },
  {
    id: "relocation",
    group: "case",
    title: "48-hour system relocations",
    tags: ["Indian Air Force", "Vendor & risk management"],
    tag: "Vendor & Risk Management",
    result: "Each relocation operational within 48 hours, with zero critical downtime",
    impact: "48 hours per deployment",
    timeframe: "As ordered by headquarters",
    headline: ["Moving an air defence system, ", "48 hours", " at a time."],
    summary:
      "Headquarters ordered a mission-critical system relocated to new sites across several regions. It only works as a whole, so every move had to be complete and operational within 48 hours.",
    whatChanged: "Every deployment made its **48-hour window**, with **zero critical downtime**.",
    inNumbers: "**95%** formally tracked readiness. **Full audit compliance**, with clearance certificates.",
    how: "Prepare, line up, check, clear, move: **six choices** that kept every deployment inside its window.",
    roleTeam: "Program Manager · **65-person team, plus 20+ external vendors**",
    sticker: "48h each",
    visual: {
      type: "illustrated",
      set: "relocation",
      steps: [
        { icon: "problem", caption: "The whole system, one move" },
        { icon: "move", caption: "Faults fixed before departure" },
        { icon: "result", caption: "Operational in 48 hours" }
      ]
    },
    description:
      "Headquarters directed a mission-critical air defence system to be relocated to new sites across several regions. The system only works as a complete set, so it could not move piece by piece, and each deployment had to be finished, with the system operational again, within 48 hours. There was no buffer time and no way to know in advance which faults would appear. I was the Program Manager, leading a 65-person team, plus 20+ external vendors.",
    highlights: [
      "Each deployment completed and operational within 48 hours",
      "Zero critical downtime across every move",
      "95% operational readiness, formally tracked",
      "Full audit compliance, with clearance certificates",
      "Led a 65-person team, plus 20+ external vendors"
    ],
    honestNote:
      "Readiness is measured against a standard baseline that I cannot share, so 95% is a result against that standard, not a before-and-after improvement. The real win is reliability under a hard deadline, not a speed-up.",
    role: { title: "Program Manager", period: "Jan 2022 – Jan 2026" },
    caseStudy: {
      embeds: "relocation",
      kicker: "Case study · Program management · Indian Air Force",
      title: "Moving an air defence system to new regions, in 48 hours each",
      subtitle: "Zero critical downtime, 95% readiness and full audit compliance.",
      strip: [
        { label: "My role", value: "Program Manager" },
        { label: "Timing", value: "As and when headquarters ordered" },
        { label: "Team", value: "65 people, plus 20+ external vendors" },
        { label: "Ordered by", value: "Headquarters" }
      ],
      oneBreath:
        "Headquarters ordered a mission-critical air defence system relocated to new regions. It only works as a whole, so every move had to be complete and operational within **48 hours**, with no buffer. I led a 65-person team, plus 20+ external vendors. Every deployment made its window, with **zero critical downtime** and **full audit compliance**.",
      bigNumbers: [
        { value: "48h", label: "each deployment, start to operational" },
        { value: "Zero", label: "critical downtime" },
        { value: "95%", label: "operational readiness, formally tracked" },
        { value: "Full", label: "audit compliance, with clearance certificates" }
      ],
      terms: [
        { term: "Air defence system", def: "Equipment that protects the nation's airspace. It is made of several pieces that only work together." },
        { term: "Deployment", def: "Setting the system up at a site and making it operational again." },
        { term: "Convoy", def: "A group of vehicles that move together in a planned formation." },
        { term: "Movement clearance", def: "Official permission to move the equipment and vehicles." }
      ],
      blocks: [
        { type: "part", title: "The problem and why it mattered" },
        {
          type: "lead",
          text: "The system only works as a **complete set**, so it could not move piece by piece, and any gap in air defence cover was a risk.",
          chips: ["Ordered by headquarters", "Extend capability to new regions", "Zero critical downtime required", "Clearance certificates needed"]
        },
        { type: "embed", key: "challenge" },

        { type: "part", title: "What I did: the decisions" },
        { type: "embed", key: "picture" },
        {
          type: "roles",
          heading: "Headquarters gave the order. I led the team that made each move work.",
          roles: [
            { who: "Headquarters", what: "Directed the relocation, and ordered each one as it was needed." },
            { who: "Higher authorities", what: "Issued the clearance certificates that were needed." },
            { who: "20+ external vendors", what: "Supplied support, with one central coordination point for any fault or maintenance need." },
            { who: "Local authorities", what: "Coordination for each site, including telecom and security arrangements." },
            {
              who: "Me, as Program Manager",
              me: true,
              what: "Led a **65-person team, plus 20+ external vendors**, and took the decisions that kept each deployment inside **48 hours**."
            }
          ]
        },
        {
          type: "decisions",
          heading: "Six choices that kept every deployment inside 48 hours",
          items: [
            { title: "Move it whole", text: "Moved the **whole system at once**, because its pieces only work together." },
            { title: "One paperwork package", text: "Rations, convoy, movement clearance, logistics and communications finalised **1–2 days before** each move." },
            { title: "One vendor contact point", text: "A **central coordination point**, so no fault fell between 20+ vendors." },
            { title: "Check before moving", text: "**Pre-move checks** found and fixed faults before departure, cutting time on the move." },
            { title: "Front-load the risk", text: "No buffer was possible, so **site surveys, readiness checklists and vendor milestone reviews** were the safety margin." },
            { title: "Re-plan when it slips", text: "Re-planned **route and convoy timing** for weather and terrain, and followed up vendors daily, with alternates ready." }
          ]
        },
        { type: "embed", key: "twists" },

        { type: "part", title: "What changed" },
        {
          type: "lead",
          text: "Every deployment made its **48-hour window**, with nothing critical down. Operations, maintenance and admin all ran as they should afterwards."
        },
        {
          type: "recognition",
          heading: "Recognised",
          items: ["Senior leadership appreciated the result, at a moment they considered critical", "Proved the system could be moved reliably", "A remarkable leap for the team"]
        },

        { type: "part", title: "The four questions, answered" },
        {
          type: "scorecard",
          items: [
            {
              label: "What worked",
              text: "Moving the **whole system at once**, one **central vendor point** and **pre-move checks**: every deployment made its 48-hour window with zero critical downtime."
            },
            {
              label: "What didn't (the honest note)",
              text: "Readiness is measured against a **standard baseline I can't share**, so 95% is a result against that standard, not a before-and-after improvement. The real win is **reliability under a hard deadline**, not a speed-up."
            },
            {
              label: "What I'd improve",
              text: "Replace the Excel tracker with a **visual dashboard** showing where each vendor is stuck, write the **fine details into the playbook**, and **carry local coordination forward** instead of restarting at each site."
            },
            {
              label: "How I'd measure success",
              text: "Each deployment **operational within 48 hours**, **zero critical downtime**, and readiness and audit compliance held at **every new site**."
            }
          ]
        }
      ],
      footnote: "General labels only. No unit names, locations or equipment details."
    }
  },
  {
    id: "squadron-merger",
    group: "case",
    title: "Two squadrons merged in a month",
    tags: ["Indian Air Force", "Systems migration"],
    tag: "Systems & Data Migration",
    result: "₹50 crore in assets and 10,000 records merged in one month, with zero data loss",
    impact: "Zero data loss in 1 month",
    timeframe: "1 month",
    headline: ["Two squadrons merged in ", "one month", ", with nothing lost."],
    summary:
      "Two air defence squadrons, from different territories and with different ways of working, had to become one while operations carried on: ₹50 crore of equipment, 10,000 spare-parts records and 90 people, with no backup.",
    whatChanged: "Everything moved within **one month**, with **zero data loss**.",
    inNumbers: "**₹50 crore** in assets. **10,000** spare-parts records moved into IMMOLS.",
    how: "Plan everything, map first, move with care, then **verify in layers**.",
    roleTeam: "Senior Project Manager · **90 personnel**, led directly",
    sticker: "Zero data loss",
    visual: {
      type: "illustrated",
      set: "squadron-merger",
      steps: [
        { icon: "problem", caption: "Two squadrons becoming one" },
        { icon: "move", caption: "Five workstreams at once" },
        { icon: "result", caption: "Zero data loss" }
      ]
    },
    description:
      "Headquarters ordered two air defence squadrons, from different territories and with different ways of working, to merge into the current setup. Equipment worth ₹50 crore, 10,000 spare-parts records and 90 people had to come together within one month, while operations carried on. Once the equipment entered my squadron's inventory, I was fully responsible for it, and there was no backup. I was the Senior Project Manager, and I led all 90 personnel directly.",
    highlights: [
      "Full integration of two squadrons within one month",
      "₹50 crore in assets integrated",
      "10,000 spare-parts line items moved into IMMOLS",
      "Zero data loss, with no backup to fall back on",
      "90 personnel led directly"
    ],
    honestNote:
      "There is no before-and-after metric here. Success was nothing lost and the deadline met, which the Squadron recognised and senior leadership appreciated.",
    role: { title: "Senior Project Manager", period: "Jan 2018 – Jan 2022" },
    caseStudy: {
      embeds: "squadron-merger",
      kicker: "Case study · Program management · Indian Air Force",
      title: "Merging two air defence squadrons in one month, with zero data loss",
      subtitle: "₹50 crore in assets, 90 people and 10,000 records, with no backup.",
      strip: [
        { label: "My role", value: "Senior Project Manager" },
        { label: "Timeline", value: "1 month" },
        { label: "Team", value: "90 personnel, led directly" },
        { label: "Ordered by", value: "Headquarters" }
      ],
      oneBreath:
        "Headquarters ordered two air defence squadrons, from **different territories** and with **different ways of working**, to merge into one setup in a month while operations carried on: **₹50 crore** of equipment, **10,000** spare-parts records and **90 people**, with no backup. I led all 90 directly. Everything moved on time, with **zero data loss**.",
      bigNumbers: [
        { value: "1 month", label: "full integration" },
        { value: "Zero", label: "data loss" },
        { value: "₹50 Cr", label: "in assets integrated" },
        { value: "10,000", label: "spare-parts records moved into IMMOLS" }
      ],
      terms: [
        { term: "Squadron", def: "An operational unit of the air force, with its own people and equipment." },
        { term: "Air defence", def: "Equipment that protects the nation's airspace, which must always be ready." },
        { term: "IMMOLS", def: "The inventory system that tracks spare parts." },
        { term: "Handover", def: "The complete transfer of equipment, and responsibility for it, to a new owner." }
      ],
      blocks: [
        { type: "part", title: "The problem and why it mattered" },
        {
          type: "lead",
          text: "Two squadrons from **different territories**, each with **its own way of working**, had to come together into the current setup. Once the equipment entered my squadron's inventory, I was **fully responsible** for it, and there was **no backup**.",
          chips: ["Different territories", "Different ways of working", "Ordered by headquarters", "Restructure operational roles", "Monitored at every level"]
        },
        { type: "embed", key: "challenge" },

        { type: "part", title: "What I did: the decisions" },
        { type: "embed", key: "picture" },
        {
          type: "roles",
          heading: "Headquarters gave the order. I led the 90 people who made it happen.",
          roles: [
            { who: "Headquarters", what: "Ordered the merger and monitored it at every level." },
            { who: "Senior leadership", what: "Received regular updates and held the final review before the merger was declared complete." },
            { who: "90 personnel", what: "The two squadrons' people, working together as one team under my direct lead." },
            {
              who: "Me, as Senior Project Manager",
              me: true,
              what: "Planned the merger, ran the **five workstreams**, and was **fully responsible** for the handover once the equipment entered my inventory."
            }
          ]
        },
        { type: "embed", key: "informed" },
        {
          type: "decisions",
          heading: "Six choices that kept the merger safe",
          items: [
            { title: "Scope upfront", text: "Listed **all requirements and milestones** first: a one-month deadline left no room to find scope late." },
            { title: "Map first", text: "Mapped **both squadrons' records and assets**, so mismatches showed before anything moved." },
            { title: "Five workstreams", text: "Operational equipment, maintenance assets, admin assets, **inventory data migration**, and personnel and procedures, all moving at once." },
            { title: "Migrate with a safety net", text: "**Cleaned and matched** records first, and kept both sets until the new inventory was verified." },
            { title: "One reporting line", text: "**One common format**, a single point of contact and regular updates to senior leadership." },
            { title: "Verify in layers", text: "**Checklists per asset category**, joint verification, handover inspection and a senior leadership review." }
          ]
        },

        { type: "part", title: "What changed" },
        {
          type: "lead",
          text: "Everything moved in **one month**, and nothing was lost: 10,000 records in IMMOLS, ₹50 crore in assets integrated, and 90 people working as one squadron."
        },
        {
          type: "recognition",
          heading: "Recognised",
          items: ["A milestone achievement for the Squadron", "Senior leadership appreciated it", "A reference for how such mergers can be run"]
        },

        { type: "part", title: "The four questions, answered" },
        {
          type: "scorecard",
          items: [
            {
              label: "What worked",
              text: "Scoping upfront, **mapping first**, five parallel workstreams and **layered verification**: one month, **zero data loss**."
            },
            {
              label: "What didn't (the honest note)",
              text: "There is **no before-and-after metric** here. Success was **nothing lost and the deadline met**, which the Squadron recognised and senior leadership appreciated."
            },
            {
              label: "What I'd improve",
              text: "A **digital milestone tracker** to give everyone a live view of progress, and a **merger playbook** so the next merger starts from a proven plan."
            },
            {
              label: "How I'd measure success",
              text: "**Zero data loss**, every asset **verified at handover**, and the merger complete **within the deadline** while operations carried on."
            }
          ]
        }
      ],
      footnote: "General labels only. No unit names, locations or equipment details."
    }
  },
  {
    id: "spouse-upskilling",
    group: "case",
    title: "Skills and income for 100+ spouses",
    tags: ["Indian Air Force community", "Social impact"],
    tag: "Community Program",
    result: "100+ spouses NSDC-certified in four trades, and linked to places to sell",
    impact: "100+ spouses certified",
    timeframe: "6–12 months",
    headline: ["Skills, certificates and ", "an income of their own", "."],
    summary:
      "Many spouses of air warriors had no income of their own, no formal certification and nowhere to sell what they made. I led the welfare initiative that changed all three.",
    whatChanged: "**100+ spouses** gained **NSDC-certified** skills and a place to sell their work.",
    inNumbers: "**Four trades**, from food and bakery to tailoring. **6–12 months** from plan to their own businesses.",
    how: "From a conversation to a certificate to a stall, with **approval at every level**, station to apex.",
    roleTeam: "Program Manager · **20** welfare members and volunteers",
    sticker: "100+ spouses",
    visual: {
      type: "illustrated",
      set: "spouse-upskilling",
      steps: [
        { icon: "problem", caption: "A limited budget" },
        { icon: "move", caption: "Spouses won over, one by one" },
        { icon: "result", caption: "Selling at welfare stalls" }
      ]
    },
    description:
      "Many spouses of air warriors had no income of their own, no formal skill certification and nowhere to sell what they made. I was the Program Manager for the community's non-profit welfare initiatives, working with 20 welfare members and volunteers. Over 6–12 months, 100+ spouses received NSDC-certified training in four trades and were linked to welfare shops and stalls, so they could start earning on their own.",
    highlights: [
      "100+ spouses given NSDC-certified training",
      "Four trades: food and bakery, beauty and wellness, tailoring and stitching, handicrafts",
      "Linked to welfare shops and stalls to sell their work",
      "Approval secured at every level, station to apex",
      "Team of 20 welfare members and volunteers"
    ],
    honestNote:
      "I do not have figures for how many launched businesses or how much they earn. The strong number is reach, 100+ spouses, and the income result rests on their feedback and on spouses earning independently.",
    role: { title: "Program Manager – Non-Profit Welfare Initiatives", period: "Jan 2020 – Nov 2024" },
    caseStudy: {
      embeds: "spouse-upskilling",
      kicker: "Case study · Program management · Indian Air Force community",
      title: "Helping 100+ spouses build skills and their own income",
      subtitle: "A certified skill, and a place to sell what they make.",
      strip: [
        { label: "My role", value: "Program Manager, non-profit welfare initiatives" },
        { label: "Timeline", value: "6–12 months" },
        { label: "Team", value: "20 welfare members and volunteers" },
        { label: "Certification", value: "NSDC" }
      ],
      oneBreath:
        "Many spouses of air warriors had no income, no certificate and nowhere to sell what they made. With 20 welfare members and volunteers, I led the initiative that gave **100+ spouses** NSDC-certified training in **four trades** and linked them to welfare shops and stalls, so they could start **earning on their own**.",
      bigNumbers: [
        { value: "100+", label: "spouses given NSDC-certified training" },
        { value: "4", label: "trades, chosen by the spouses' interests" },
        { value: "6–12 mo", label: "from plan to their own businesses" },
        { value: "Every level", label: "of approval, station to apex" }
      ],
      termsLabel: "New to this?",
      terms: [
        { term: "Sangini", def: "The spouses of air warriors, the women this program was built for." },
        { term: "NSDC-certified", def: "Training that ends in a formal skill certification, under NSDC." },
        { term: "Station to apex", def: "Approval had to be won at every level, from the local station up to the top level." },
        { term: "Welfare shops and stalls", def: "Shops and stalls run by the welfare organisation, where graduates could sell what they made." }
      ],
      blocks: [
        { type: "part", title: "The problem and why it mattered" },
        {
          type: "lead",
          text: "The goal was a full path: a **certified skill**, and a way to **turn it into earnings**. Nobody could be told to take part, and every level had to approve.",
          chips: ["No income of their own", "No formal certification", "Nowhere to sell", "Limited budget and time"]
        },
        { type: "embed", key: "challenge" },

        { type: "part", title: "What I did: the decisions" },
        { type: "embed", key: "picture" },
        {
          type: "roles",
          heading: "A team of 20, three layers of support, and the spouses at the centre.",
          roles: [
            { who: "Senior leadership", what: "Approved the program, with sign-off from station to apex level." },
            { who: "District and local authorities", what: "Supported local sales and stalls, and worked with us on the ground." },
            { who: "Welfare members and volunteers", what: "Twenty people who ran the program alongside me." },
            { who: "Training institutes", what: "Some training took place on the institutes' premises." },
            {
              who: "Me, as Program Manager",
              me: true,
              what: "Led the program **end to end**: secured approval, worked with the district and local authorities, and **motivated spouses** to take part."
            }
          ]
        },
        {
          type: "decisions",
          heading: "Six choices, and the challenge behind each",
          items: [
            { title: "Trades by interest", text: "**Surveyed interests** first, then prioritised the trades most spouses wanted." },
            { title: "Win them over", text: "Spoke to spouses **personally** and shared success stories of earlier women entrepreneurs." },
            { title: "Approval at every level", text: "A clear proposal, the **benefit to families**, and earlier welfare ventures as proof, signed off **station to apex**." },
            { title: "Use the venues we had", text: "Training ran in **our own venues or the institutes'**." },
            { title: "A place to sell", text: "Linked graduates to **welfare shops and stalls**, with district and local authorities backing local sales." },
            { title: "Stretch the budget", text: "**Prioritised trades** and spread batches over time, to fit limited money and resources." }
          ]
        },
        { type: "embed", key: "twists" },

        { type: "part", title: "What changed" },
        { type: "embed", key: "changed" },

        { type: "part", title: "The four questions, answered" },
        {
          type: "scorecard",
          items: [
            {
              label: "What worked",
              text: "Choosing trades by **interest**, winning spouses over **personally**, and linking certificates to **somewhere to sell**: 100+ spouses certified and earning independently."
            },
            {
              label: "What didn't (the honest note)",
              text: "I do not have figures for **how many launched businesses** or **how much they earn**. The strong number is reach, 100+ spouses, and the income result rests on their feedback."
            },
            {
              label: "What I'd improve",
              text: "**Track each graduate's business**, to see who needs more help, and build a **simple online sales channel** to reach buyers beyond the welfare shops."
            },
            {
              label: "How I'd measure success",
              text: "Not just certificates: how many graduates **start selling**, how many are **still earning** months later, and **how much** they earn."
            }
          ]
        }
      ],
      footnote: "General labels only. No names, locations or unit details."
    }
  },
  {
    id: "project-register",
    group: "build",
    title: "A project register with a page for every project",
    tags: ["Self-internship", "PMO"],
    tag: "PMO Build",
    result: "One view of milestones, owners, dates and status",
    impact: "One page per project",
    timeframe: "Under a day",
    summary:
      "A Notion register with one row and one page per project, designed from the questions a PMO lead is actually asked.",
    points: ["6 fields tracked for every project", "One page per project", "Built in Notion, in under a day"],
    tools: ["Notion"],
    description:
      "I built this in Notion during a self-internship, working on my own, to show I could build what a PMO lead is actually asked to own: one view of what is due, who owns it and how it is going.",
    highlights: [
      "Started from the questions a PMO lead is asked, then designed the fields",
      "One register row, and one page, per project",
      "Tracks milestones, owner, dates, status, priority, and risks and issues",
      "Designed and built on my own in Notion, in under a day"
    ],
    honestNote:
      "This self-internship used sample data, and no real team used the result. I did not measure time saved, so the proof is the design thinking and a working structure, not performance numbers.",
    caseStudy: {
      embeds: "project-register",
      kicker: "Project · Self-internship",
      title: "A project register with a page for every project",
      subtitle: "One clear view of milestones, owners, dates and status.",
      strip: [
        { label: "My role", value: "Designed and built it myself, a team of one" },
        { label: "Build time", value: "Under a day" },
        { label: "Data", value: "Sample data, 1–3 sample projects" },
        { label: "Built in", value: "Notion" }
      ],
      oneBreathLabel: "What it is",
      oneBreath:
        "A **Notion project register** with **one page per project**, built to show I could build what a PMO lead is actually asked to own: one view of **what is due, who owns it and how it is going**.",
      bigNumbers: [
        { value: "< 1 day", label: "build time" },
        { value: "6", label: "fields tracked for every project" },
        { value: "1", label: "page per project" },
        { value: "1–3", label: "sample projects" }
      ],
      // Best of both: short cards where the original section is mostly text, the original
      // illustrated sections (embeds) everywhere else.
      blocks: [
        { type: "part", title: "The problem and why it mattered" },
        {
          type: "lead",
          text: "A PMO lead is asked to know **what is due, who owns it and how it is going**, across every project. When that information is scattered and updated by hand, the picture goes out of date before every status meeting.",
          chips: ["No single view of milestones and owners", "Information scattered across places", "Manual, late status updates", "Long prep for status meetings"]
        },
        { type: "part", title: "What I did: the decisions" },
        { type: "embed", key: "decisions" },
        { type: "part", title: "What shipped" },
        { type: "embed", key: "changed" },
        {
          type: "honest",
          text: "This self-internship used sample data, and no real team used the result. I did not measure time saved, so the proof is the design thinking and a working structure, not performance numbers."
        },
        { type: "part", title: "What I would do differently" },
        { type: "embed", key: "differently" }
      ]
    }
  },
  {
    id: "weekly-digest",
    group: "build",
    title: "A weekly task digest that arrives every Monday",
    tags: ["Work sample", "Automation"],
    tag: "Automation",
    result: "This week's tasks, emailed every Monday at 8:00 AM",
    impact: "Every Monday, 8:00 AM",
    timeframe: "1–3 days",
    summary:
      "An automation that emails the project manager the week's tasks straight from a Google Sheet, with no one compiling the list or chasing.",
    points: ["Runs every Monday at 8:00 AM", "Built in 1–3 days", "Companion to the project register"],
    tools: ["Zapier", "Google Sheets", "Gmail"],
    description:
      "A work sample for interviews, built on my own with sample tasks. Every Monday at 8:00 AM, the project manager gets an email listing the tasks due this week, straight from a Google Sheet.",
    highlights: [
      "Three tools, one email every Monday",
      "No one compiles the list, and no one has to chase",
      "Designed, built and tested by me",
      "Built as a companion to the project register"
    ],
    honestNote:
      "This is a work sample with sample tasks. I have no time-saved figure and no feedback yet, so what I have is a working, tested automation, not measured impact.",
    caseStudy: {
      embeds: "weekly-digest",
      kicker: "Mini-project · Work sample",
      title: "A weekly task digest that arrives every Monday",
      subtitle: "No one compiling it, and no one chasing.",
      strip: [
        { label: "My role", value: "Designed, built and tested by me" },
        { label: "Build time", value: "1–3 days" },
        { label: "For", value: "The project manager" },
        { label: "Built with", value: "Zapier · Google Sheets · Gmail" }
      ],
      oneBreathLabel: "What it is",
      oneBreath:
        "A work sample built on my own with sample tasks. **Every Monday at 8:00 AM**, the project manager gets an email listing **the tasks due this week**, straight from a Google Sheet. It's a companion to the **project register**, built as a separate project.",
      bigNumbers: [
        { value: "Mon 8 AM", label: "every week, without me" },
        { value: "3", label: "tools, one email" },
        { value: "7 days", label: "“Due Soon” window" },
        { value: "1–3 days", label: "build time" }
      ],
      blocks: [
        { type: "part", title: "The problem" },
        { type: "embed", key: "problem" },
        { type: "part", title: "How I used the tools" },
        { type: "embed", key: "tools" },
        { type: "part", title: "The result" },
        {
          type: "lead",
          text: "It **runs every Monday without me**, and it has been **tested with sample tasks**.",
          chips: ["Runs every Monday at 8:00 AM", "Tested with sample tasks"]
        },
        {
          type: "honest",
          text: "This is a work sample with sample tasks. I have no time-saved figure and no feedback yet, so what I have is a working, tested automation, not measured impact."
        },
        { type: "part", title: "What's next" },
        { type: "embed", key: "next" }
      ]
    }
  },
  {
    id: "pet-care-companion",
    group: "build",
    title: "A live pet care app in 48 hours",
    tags: ["Team hackathon", "AI product"],
    tag: "Hackathon",
    result: "Four people, three countries, one live app in 48 hours",
    impact: "Built in 48 hours",
    timeframe: "48 hours",
    summary:
      "Our team of four, working from three countries, built, submitted and pitched Pet Care Companion, a live app with five features, in one 48-hour hackathon.",
    points: [
      "5 features live, from pet profiles to AI care checklists",
      "My part: time-zone coordination, backend and pet records, pitch and demo",
      "Submitted on time"
    ],
    tools: ["Lovable", "Supabase", "OpenAI API"],
    description:
      "One 48-hour hackathon, one brief: build a live product, Pet Care Companion, end to end. Our team of four did it from three different countries, with no shared office and a very loud clock. The app was built, submitted on time and pitched.",
    highlights: [
      "Five features live: pet profiles, routines, vaccination records, appointments and AI checklists",
      "Four people working from three countries",
      "My role: time-zone coordination, the backend and pet records, and the pitch and demo",
      "Ground rules settled in the first hour, so ownership and handoffs were clear"
    ],
    honestNote:
      "This was a hackathon build with no real users, so I have no usage figures. I also have no feedback or ranking to report. What the project shows is that a team spread across three countries can ship a complete product in 48 hours when ownership, handoffs and a single plan are clear.",
    caseStudy: {
      embeds: "pet-care-companion",
      kicker: "Project · Team hackathon",
      title: "A live pet care app in 48 hours",
      subtitle: "Four people. Three countries. One app, built on time.",
      strip: [
        { label: "My role", value: "One of four: time zones, backend & pet records, pitch" },
        { label: "Timeline", value: "48 hours" },
        { label: "Team", value: "4 people in 3 countries" },
        { label: "Built with", value: "Lovable · Supabase · OpenAI API" }
      ],
      oneBreathLabel: "What it is",
      oneBreath:
        "**Pet Care Companion** is an app where owners create pet profiles and keep all their pet's care in one place, with AI turning care instructions into **editable checklists**. One 48-hour hackathon, one brief: build it end to end. Our team of four did it from **three countries**, and the app was built, submitted on time and pitched.",
      bigNumbers: [
        { value: "48h", label: "to build and submit" },
        { value: "4", label: "people on the team" },
        { value: "3", label: "countries we worked from" },
        { value: "5", label: "features live in the final app" }
      ],
      // Best of both: Kalpana's illustrated sections (embeds) where they carry the story,
      // short cards where her section is mostly text (the decisions).
      blocks: [
        { type: "part", title: "The problem and why it mattered" },
        { type: "embed", key: "problem" },

        { type: "part", title: "What I did: the decisions" },
        {
          type: "lead",
          text: "The brief already defined the product, so the real question was **how four people in three countries would build it together** in two days.",
          chips: ["Chose Pet Care Companion", "Built for all pets", "Lovable for the front end", "Supabase + OpenAI API", "Plan compressed to 48 hours", "All five features kept in scope"]
        },
        {
          type: "decisions",
          label: "How we worked together",
          heading: "Four habits that turned four people into one team",
          itemLabel: "Habit",
          items: [
            { title: "Ownership", text: "Each person owned a part of the build, with a **clear owner for every task**." },
            { title: "One plan", text: "The team playbook was the **single source of truth**, so everyone worked from the same plan." },
            { title: "Staying in touch", text: "**Overlap windows** for live calls, plus short updates in the team chat." },
            { title: "Handoffs", text: "A **status note** at the end of each person's day, so the next time zone could pick up." }
          ]
        },
        {
          type: "roles",
          label: "My part",
          heading: "One of four, and a mix of everything",
          roles: [
            {
              who: "Me",
              me: true,
              what: "Coordinated across **time zones**, built the **backend and pet records**, and worked on the **pitch and demo**. Keeping all five features in scope raised the pressure on a 48-hour plan, so clear ownership and written handoffs mattered even more."
            }
          ]
        },

        { type: "part", title: "What shipped" },
        { type: "embed", key: "changed" },
        {
          type: "honest",
          text: "This was a hackathon build with no real users, so I have no usage figures. I also have no feedback or ranking to report. What the project shows is that a team spread across three countries can ship a complete product in 48 hours when ownership, handoffs and a single plan are clear."
        },

        { type: "part", title: "What I would do differently" },
        { type: "embed", key: "differently" }
      ]
    }
  },
  {
    id: "lead-spam-checker",
    group: "build",
    title: "A website lead spam checker",
    tags: ["Self-internship", "AI automation"],
    tag: "AI Automation",
    result: "Genuine enquiries kept, spam filtered out",
    impact: "3 cases tested",
    timeframe: "Under a day",
    summary:
      "Every website enquiry is checked, classified as genuine or spam by an AI model, and filed in the right Google Sheets tab.",
    points: ["Two checks, one classification, one filing", "Tested with genuine, spam and empty cases", "Built in under a day"],
    tools: ["n8n", "AI model", "Google Sheets"],
    description:
      "I built this during a self-internship, working on my own. Every website enquiry is checked, classified as genuine or spam by an AI model, and filed in the right Google Sheets tab. An empty enquiry creates no entry at all.",
    highlights: [
      "Two checks, one AI classification and one filing step",
      "Genuine and spam enquiries filed in separate Google Sheets tabs",
      "Empty enquiries create no entry at all",
      "Tested with three cases: genuine, spam and empty"
    ],
    honestNote:
      "This was a self-internship build, tested with three cases. I have no accuracy figure for the AI's classification and no real website traffic behind it, so what I have is a working, tested workflow, not a measured spam-catch rate.",
    caseStudy: {
      embeds: "lead-spam-checker",
      kicker: "Mini-project · Self-internship",
      title: "A website lead spam checker that sorts genuine enquiries from spam",
      subtitle: "Spam kept out of the lead list, and real leads kept in.",
      strip: [
        { label: "My role", value: "Designed, built and tested by me" },
        { label: "Build time", value: "Under a day" },
        { label: "Helps", value: "Whoever reviews enquiries and follows up on leads" },
        { label: "Built with", value: "Website form · n8n · AI model · Google Sheets" }
      ],
      oneBreathLabel: "What it is",
      oneBreath:
        "Every website enquiry is **checked**, **classified as genuine or spam by an AI model**, and **filed in the right Google Sheets tab**. An empty enquiry creates no entry at all. Built on my own during a self-internship.",
      bigNumbers: [
        { value: "< 1 day", label: "build time" },
        { value: "2", label: "checks before the AI step" },
        { value: "2", label: "categories: genuine or spam" },
        { value: "3", label: "cases tested: genuine, spam, empty" }
      ],
      blocks: [
        { type: "part", title: "The problem" },
        { type: "embed", key: "problem" },
        { type: "part", title: "How it works" },
        { type: "embed", key: "how" },
        { type: "part", title: "The result" },
        { type: "embed", key: "result" },
        {
          type: "honest",
          text: "This was a self-internship build, tested with three cases. I have no accuracy figure for the AI's classification and no real website traffic behind it, so what I have is a working, tested workflow, not a measured spam-catch rate."
        },
        { type: "part", title: "What's next" },
        { type: "embed", key: "next" }
      ]
    }
  },
  {
    id: "ai-accelerator",
    group: "build",
    title: "A support inbox that sorts itself",
    tags: ["Work sample", "AI workflow"],
    tag: "AI Workflow",
    result: "Every customer answered, urgent issues straight to the team",
    impact: "3 ticket types tested",
    timeframe: "Work sample",
    summary:
      "Customers raise a ticket from a friendly web form. Every one gets a reply, a tracked row and a priority, and anything urgent lands in the team inbox.",
    points: [
      "A friendly web form real customers can use",
      "AI sets Category and Urgency; every ticket logged in Google Sheets",
      "Customer gets an acknowledgement; urgent issues reach the team"
    ],
    tools: ["n8n", "AI model", "Google Sheets", "Gmail"],
    description:
      "A work sample: a customer support triage bot with a customer-facing web form. A customer submits feedback from a web page, and the bot classifies it by category and urgency, logs it as a new row in Google Sheets, emails the customer an acknowledgement and escalates high-urgency issues to the team.",
    image: "/workflow-diagram.jpg",
    highlights: [
      "A customer-facing web form wired to the triage bot",
      "Each ticket classified by Category (Bug, Feature Request, Question) and Urgency",
      "A new Google Sheets row per ticket: Category, Urgency, Date and Status = New",
      "A warm acknowledgement to the customer; an escalation to the team inbox when urgent"
    ],
    honestNote:
      "This was a work-sample build, tested end to end with three tickets submitted through the published form, as a customer would. It has not handled real customer volume, and I have no accuracy figure for the AI's classification, so what I have is a working, tested workflow rather than measured results.",
    caseStudy: {
      kicker: "Mini-project · Work sample",
      title: "A support inbox that sorts itself, and flags what can't wait",
      subtitle: "Every customer heard. Every ticket tracked. Urgent issues straight to the team.",
      strip: [
        { label: "Helps", value: "Support teams, and the customers waiting on them" },
        { label: "Input", value: "A customer-facing web form" },
        { label: "Output", value: "A logged ticket, a customer reply and, if urgent, a team alert" },
        { label: "Built with", value: "n8n · AI model · Google Sheets · Gmail" }
      ],
      oneBreathLabel: "What it is",
      oneBreath:
        "A customer support triage bot with a **friendly web form** in front of it. A customer submits feedback from a web page, and the bot **classifies it**, **logs it in Google Sheets**, **emails the customer an acknowledgement** and **escalates high-urgency issues to the team**. Nobody has to sort the inbox by hand.",
      bigNumbers: [
        { value: "4", label: "automatic steps per ticket" },
        { value: "3", label: "categories: Bug, Feature Request, Question" },
        { value: "2", label: "inboxes reached: customer and team" },
        { value: "3", label: "test tickets, each routed as expected" }
      ],
      blocks: [
        { type: "part", title: "The problem" },
        {
          type: "lead",
          text: "Customer feedback arrives as one stream. Someone has to read every message, decide **what it is** and **how urgent it is**, record it, reply to the customer and alert the team about anything serious. Done by hand, the urgent issue waits in the same queue as everything else."
        },
        { type: "part", title: "How it works" },
        {
          type: "lead",
          text: "A customer opens the published form and submits a ticket. From there, it runs automatically:"
        },
        {
          type: "decisions",
          label: "The flow",
          heading: "Four steps, from form to inbox",
          itemLabel: "Step",
          items: [
            { title: "Classify", text: "An **AI model** reads the feedback and sets its **Category** (Bug, Feature Request or Question) and **Urgency**." },
            { title: "Log", text: "A **new row in Google Sheets** for every ticket, with Category, Urgency, Date and **Status = New**." },
            { title: "Acknowledge", text: "The customer receives a **warm acknowledgement email**, so no one is left wondering." },
            { title: "Escalate", text: "**High-urgency** issues are emailed straight to the **team inbox**." }
          ]
        },
        {
          type: "image",
          src: "/workflow-diagram.jpg",
          alt: "Diagram of the customer support triage workflow",
          caption: "The workflow, from customer feedback to the right inbox."
        },
        { type: "part", title: "The result" },
        {
          type: "decisions",
          label: "Tested as a customer would",
          heading: "Three tickets through the published form",
          itemLabel: "Test",
          items: [
            { title: "Bug, High", text: "Sheet row **+** acknowledgement **+** team escalation." },
            { title: "Feature Request, Low", text: "Sheet row **+** acknowledgement only." },
            { title: "Question, Low", text: "Sheet row **+** acknowledgement only." }
          ]
        },
        {
          type: "lead",
          text: "Customers can now submit feedback from a web page, and behind the scenes it is **classified**, **logged**, **acknowledged** and, when it is urgent, **escalated**, with logging and email working exactly as they did before the form was added."
        },
        {
          type: "honest",
          text: "This was a work-sample build, tested end to end with three tickets submitted through the published form, as a customer would. It has not handled real customer volume, and I have no accuracy figure for the AI's classification, so what I have is a working, tested workflow rather than measured results."
        }
      ]
    }
  }
];

// Results from roles without a full case study, shown as stat cards.
export const otherOutcomes = [
  { value: "₹500 Cr+", label: "Aerospace assets maintained, at 95% formally tracked readiness", source: "Fleet & asset maintenance" },
  { value: "3h → 1.5h", label: "Processing time after rolling out E-Office to 250 users", source: "IT & network" },
  { value: "300", label: "Personnel through the full HR lifecycle, with a 25% productivity gain", source: "Human resources" },
  { value: "500+", label: "Members' budgets managed, with zero errors in fund administration", source: "Non-profit welfare initiatives" }
];

export function getProject(id) {
  return projects.find((p) => p.id === id);
}
