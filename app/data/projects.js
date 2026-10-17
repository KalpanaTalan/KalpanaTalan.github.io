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
    shortTitle: "Paperless Maintenance",
    tags: ["Indian Air Force", "Digital adoption", "Change management"],
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
    // Trial: "live" home card (status chip, pulse along the arrows, glowing result, caption strip).
    pinned: { status: "100+ assets onboarded", caption: "Software was easy. Adoption was the mission." },
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
            { title: "Start small", text: "Began with **a few assets** instead of moving all 100+ at once, adding more as each step showed what to map next." },
            { title: "Run both, then switch", text: "Paper and digital **side by side**, then a **fixed switch date**, instead of a one-day cutover." },
            { title: "Train, don't remind", text: "Frequent **batch classes** instead of more reminders, with supervisors tracking daily usage." },
            { title: "Close the loop", text: "Feedback with **Wipro and the zonal helpdesk**, so the platform matched real maintenance work." }
          ]
        },

        { type: "quote", text: "The hard part: reminders alone had failed, and people weren't using the platform." },

        { type: "part", title: "What changed" },
        { type: "embed", key: "results" },

        { type: "part", title: "Looking back", heading: "What worked, what didn't, and how I'd measure it." },
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
              label: "How I'd measure success",
              text: "Adoption, not just usage: are people **attending** the classes, **able** to attend, **grasping** the concepts, and **using it daily**?"
            }
          ]
        },

        { type: "part", title: "What I would do differently", heading: "Next time: the training kit comes first." },
        {
          type: "lead",
          text: "I'd start with a **ready training kit and guide**, plan for **how long learning really takes**, and bring technicians in **even earlier**."
        }
      ],
      footnote: "General labels only. No unit names, locations or equipment details."
    }
  },
  {
    id: "relocation",
    group: "case",
    title: "48-hour system relocations",
    shortTitle: "48-Hour Relocations",
    tags: ["Indian Air Force", "Vendor & risk management", "Logistics"],
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
    pinned: { status: "95% readiness · audit cleared", caption: "No buffer. Every risk closed before the move." },
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
            { title: "Move it whole", text: "Moved the **whole system at once** instead of in pieces, because its pieces only work together." },
            { title: "One paperwork package", text: "Rations, convoy, movement clearance, logistics and communications finalised **1–2 days before** each move." },
            { title: "One vendor contact point", text: "One **central coordination point** instead of each team chasing vendors separately, so no fault fell between 20+ vendors." },
            { title: "Check before moving", text: "**Pre-move checks** fixed faults before departure instead of on the move, cutting time on the road." },
            { title: "Front-load the risk", text: "No buffer was possible, so **site surveys, readiness checklists and vendor milestone reviews** were the safety margin." },
            { title: "Re-plan when it slips", text: "Re-planned **route and convoy timing** for weather and terrain, and followed up vendors daily, with alternates ready." }
          ]
        },
        { type: "embed", key: "twists" },

        { type: "quote", text: "The hard part: no buffer was possible. 48 hours, every time." },

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

        { type: "part", title: "Looking back", heading: "What worked, what didn't, and how I'd measure it." },
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
              label: "How I'd measure success",
              text: "Each deployment **operational within 48 hours**, **zero critical downtime**, and readiness and audit compliance held at **every new site**."
            }
          ]
        },

        { type: "part", title: "What I would do differently", heading: "Next time: every vendor, visible live." },
        {
          type: "lead",
          text: "I'd replace the Excel tracker with a **visual dashboard** showing where each vendor is stuck, write the **fine details into the playbook**, and **carry local coordination forward** instead of restarting at each site."
        }
      ],
      footnote: "General labels only. No unit names, locations or equipment details."
    }
  },
  {
    id: "squadron-merger",
    group: "case",
    title: "Two squadrons merged in a month",
    shortTitle: "Squadron Merger",
    tags: ["Indian Air Force", "Systems migration", "Data integrity"],
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
    pinned: { status: "₹50 Cr assets · 10,000 records", caption: "No backup. Right the first time." },
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
            { title: "Map first", text: "Mapped **both squadrons' records and assets** first, instead of moving and reconciling later, so mismatches showed before anything moved." },
            { title: "Five workstreams", text: "Operational equipment, maintenance assets, admin assets, **inventory data migration**, and personnel and procedures, all moving at once." },
            { title: "Migrate with a safety net", text: "**Cleaned and matched** records first, and kept **both sets until verified** instead of switching over at once." },
            { title: "One reporting line", text: "**One common format**, a single point of contact and regular updates to senior leadership." },
            { title: "Verify in layers", text: "**Checklists per asset category**, joint verification, handover inspection and a senior leadership review." }
          ]
        },

        { type: "quote", text: "The hard part: there was no backup. One wrong move and records were gone." },

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

        { type: "part", title: "Looking back", heading: "What worked, what didn't, and how I'd measure it." },
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
              label: "How I'd measure success",
              text: "**Zero data loss**, every asset **verified at handover**, and the merger complete **within the deadline** while operations carried on."
            }
          ]
        },

        { type: "part", title: "What I would do differently", heading: "Next time: start from a playbook, not a blank page." },
        {
          type: "lead",
          text: "I'd give everyone a **live view of progress** with a **digital milestone tracker**, and turn what worked into a **merger playbook**, so the next merger starts from a proven plan."
        }
      ],
      footnote: "General labels only. No unit names, locations or equipment details."
    }
  },
  {
    id: "spouse-upskilling",
    group: "case",
    title: "Skills and income for 100+ spouses",
    shortTitle: "Spouse Upskilling",
    tags: ["Indian Air Force community", "Social impact", "Livelihoods"],
    tag: "Community Program",
    result: "100+ spouses given skill-certified training in four trades, and linked to places to sell",
    impact: "100+ spouses certified",
    timeframe: "6–12 months",
    headline: ["Skills, certificates and ", "an income of their own", "."],
    summary:
      "Many spouses of air warriors had no income of their own, no formal certification and nowhere to sell what they made. I led the welfare initiative that changed all three.",
    whatChanged: "**100+ spouses** gained **skill-certified training** and a place to sell their work.",
    inNumbers: "**Four trades**, from food and bakery to tailoring. **6–12 months** from plan to their own businesses.",
    how: "From a conversation to a certificate to a stall, with **approval at every level**, station to apex.",
    roleTeam: "Program Manager · **20** welfare members and volunteers",
    sticker: "100+ spouses",
    pinned: { status: "100+ spouses certified · 4 trades", caption: "Certificates were the start. Income was the goal." },
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
      "Many spouses of air warriors had no income of their own, no formal skill certification and nowhere to sell what they made. I was the Program Manager for the community's non-profit welfare initiatives, working with 20 welfare members and volunteers. Over 6–12 months, 100+ spouses received skill-certified training in four trades and were linked to welfare shops and stalls, so they could start earning on their own.",
    highlights: [
      "100+ spouses given skill-certified training",
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
        { label: "Trades", value: "4, chosen by the spouses' interests" }
      ],
      oneBreath:
        "Many spouses of air warriors had no income, no certificate and nowhere to sell what they made. With 20 welfare members and volunteers, I led the initiative that gave **100+ spouses** skill-certified training in **four trades** and linked them to welfare shops and stalls, so they could start **earning on their own**.",
      bigNumbers: [
        { value: "100+", label: "spouses given skill-certified training" },
        { value: "4", label: "trades, chosen by the spouses' interests" },
        { value: "6–12 mo", label: "from plan to their own businesses" },
        { value: "Every level", label: "of approval, station to apex" }
      ],
      termsLabel: "New to this?",
      terms: [
        { term: "Sangini", def: "The spouses of air warriors, the women this program was built for." },
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
            { title: "Trades by interest", text: "**Surveyed interests** first, letting spouses choose the trades instead of picking them top-down." },
            { title: "Win them over", text: "Spoke to spouses **personally** and shared success stories of earlier women entrepreneurs." },
            { title: "Approval at every level", text: "A clear proposal, the **benefit to families**, and earlier welfare ventures as proof, signed off **station to apex**." },
            { title: "Use the venues we had", text: "Training ran in **our own venues or the institutes'**, instead of paying for new ones." },
            { title: "A place to sell", text: "Linked graduates to **welfare shops and stalls**, with district and local authorities backing local sales." },
            { title: "Stretch the budget", text: "**Prioritised trades** and spread batches over time, to fit limited money and resources." }
          ]
        },
        { type: "embed", key: "twists" },

        { type: "quote", text: "The hard part: winning spouses over, and approval at every level, on a limited budget." },

        { type: "part", title: "What changed" },
        { type: "embed", key: "changed" },

        { type: "part", title: "Looking back", heading: "What worked, what didn't, and how I'd measure it." },
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
              label: "How I'd measure success",
              text: "Not just certificates: how many graduates **start selling**, how many are **still earning** months later, and **how much** they earn."
            }
          ]
        },

        { type: "part", title: "What I would do differently", heading: "Next time: follow every graduate past the certificate." },
        {
          type: "lead",
          text: "I'd **track each graduate's business** to see who needs more help, and build a **simple online sales channel** to reach buyers beyond the welfare shops."
        }
      ],
      footnote: "General labels only. No names, locations or unit details."
    }
  },
  {
    id: "pmo-autopilot",
    group: "build",
    title: "PMO AutoPilot: the Monday briefing that runs itself",
    shortTitle: "PMO AutoPilot",
    tags: ["Self-internship", "PMO automation", "Notion + Zapier"],
    tag: "PMO Automation",
    result: "This week's milestones in your inbox, 8:00 AM every Monday",
    impact: "Live every Monday",
    timeframe: "Live every Monday",
    summary:
      "A Notion project register built around what a PMO lead is asked to own, and a live Zapier alert that emails the week's milestones every Monday at 8:00 AM.",
    points: [
      "Every field answers a question leadership asks",
      "Live: Monday 8:00 AM, one line per milestone",
      "No one in the middle, from register to inbox"
    ],
    tools: ["Notion", "Zapier", "Gmail"],
    sample: {
      status: "Live every Monday",
      inNumbers: "**2** linked Notion databases. **3** tools, one flow. **8:00 AM**, every Monday.",
      how: "A register built around the questions leadership asks, read by a **live Zap** that emails the week's milestones.",
      howFlow: ["Notion register","Zapier · Mon 8:00 AM","Gmail briefing"],
      visual: {
        flow: [
          { tool: "Notion · register", title: "Every project, owner, RAG and risk" },
          { tool: "Zapier", title: "Every Monday, 8:00 AM → find → send", engine: true },
          { tool: "Gmail · inbox", title: "This week's milestones, delivered", result: true }
        ],
        note: "no one compiling it"
      }
    },
    description:
      "A self-internship work sample: a Notion project register for a PMO lead, and a live Zapier alert called Monday Radar that emails the milestones due that week, every Monday at 8:00 AM.",
    highlights: [
      "Two linked Notion databases: Project Register and Milestones",
      "Every field designed around a question leadership asks",
      "Monday Radar: Zapier, Notion and Gmail, live every Monday at 8:00 AM",
      "No one in the middle, from register to inbox"
    ],
    honestNote:
      "Built as a self-internship work sample with illustrative data, because my earlier work was confidential. The alert is live, but with sample data there are no measured results, such as time saved, yet.",
    caseStudy: {
      kicker: "Project · Self-internship",
      title: "What's due this week, before anyone asks.",
      subtitle: "Everything a PMO lead is asked to own, in one register, and a Monday briefing that runs without you.",
      strip: [
        { label: "What it is", value: "Project register + live Monday alert" },
        { label: "Built with", value: "Notion · Zapier · Gmail" },
        { label: "Status", value: "Live · runs every Monday, 8:00 AM" },
        { label: "Source material", value: "Illustrative data (earlier work confidential)" }
      ],
      oneBreathLabel: "What it is",
      oneBreath:
        "**PMO AutoPilot** is a Notion register built around what a PMO lead is actually asked to own: every project's health, owner, dates, budget, next milestone and risk. **Monday Radar** reads it and emails the week's milestones **every Monday at 8:00 AM**. A working system, not a claim: **the register is live, and the briefing arrives on its own.**",
      bigNumbers: [
        { value: "2", label: "linked Notion databases" },
        { value: "3", label: "tools, one flow" },
        { value: "8:00 AM", label: "every Monday, live" },
        { value: "0", label: "manual steps from register to inbox" }
      ],
      blocks: [
        { type: "part", title: "Why I built it", heading: "Deadlines surface late by default." },
        {
          type: "lead",
          text: "In most PMOs, status lives in **separate registers**, updated when someone remembers. The deadline that's slipping shows up **in the meeting where it's already missed**, and the week goes on chasing it."
        },
        {
          type: "lead",
          text: "So I built one register for everything a PMO lead is asked to own, and made it **report itself**, every Monday, before anyone has to ask."
        },
        { type: "quote", text: "A register nobody reads is just a record. A register that reports itself is a system." },

        { type: "part", title: "What's in it", heading: "One register. One alert. Connected." },
        {
          type: "decisions",
          label: "The pieces",
          itemLabel: "Piece",
          items: [
            { title: "Project Register", text: "Every project with **status, RAG health, priority, owner, dates, % complete, budget, next milestone and blocker/risk**. Seen as a table, a board by status and a timeline, with **a page per project**." },
            { title: "Milestones", text: "Every milestone **linked to its project**, with its owner, due date and status, and a ready-made line for the Monday briefing." },
            { title: "Monday Radar", text: "A live alert that runs **every Monday at 8:00 AM**, finds this week's milestones and **sends the briefing** by email." }
          ]
        },

        { type: "part", title: "How it's designed", heading: "Every field answers a question leadership asks." },
        {
          type: "lead",
          text: "I designed the register **backwards from the Monday meeting**: list the questions leadership actually asks, then give each one a field."
        },
        {
          type: "table",
          columns: ["Field", "The question it answers"],
          rows: [
            ["Health (RAG)", "Is it on track?"],
            ["Owner", "Who do I call?"],
            ["Days to due", "How close is it?"],
            ["Next milestone", "What happens next?"],
            ["Blocker / Risk", "What could stop it?"],
            ["Budget (INR lakh)", "What is it costing?"],
            ["% complete", "How far along is it?"]
          ]
        },
        { type: "quote", text: "If a field doesn't answer a question someone asks, it doesn't belong in the register." },

        { type: "part", title: "The automation", heading: "A Monday briefing with no one in the middle." },
        {
          type: "flow",
          label: "Monday Radar",
          steps: [
            { tag: "Trigger", title: "Every Monday, 8:00 AM", tool: "Zapier" },
            { tag: "Find", title: "This week's milestones", tool: "Notion" },
            { tag: "Send", title: "The Monday email", tool: "Gmail" }
          ]
        },
        { type: "quote", text: "A deadline nobody sees until the meeting isn't bad luck. It's a missing trigger." },

        { type: "part", title: "The work sample", heading: "See the real thing." },
        {
          type: "lead",
          text: "This is the actual build, not a mock-up: the register a PMO lead would work from, and the alert that runs from it. The data is illustrative, but **the structure, formatting and thinking are what I'd bring to your team.**"
        },
        {
          type: "artifacts",
          items: [
            {
              title: "The Project Register",
              context: "Built for a PMO lead running five projects at once: every project's owner, dates, RAG health, budget, next milestone and risk, with a page per project and a milestones list beneath. Open it and look around: it's the real workspace.",
              href: "https://app.notion.com/p/PMO-AutoPilot-Project-Register-with-Monday-Radar-Alert-Work-Sample-3fcb121c145181bdb981ff9b1a7735f4",
              linkLabel: "Step inside the live register",
              noImage: true
            },
            {
              title: "Monday Radar, switched on",
              context: "The alert behind the briefing: Zapier wakes at 8:00 AM, Notion answers, Gmail delivers.",
              reveal: "Peek behind the curtain",
              src: "/work-samples/pmo-monday-radar-zap.png",
              width: 630,
              height: 747,
              narrow: true
            },
            {
              title: "The Monday email",
              context: "What actually lands at 8:00 AM, before the first meeting of the week: every milestone due, with its owner, date and status.",
              reveal: "Open Monday's inbox",
              src: "/work-samples/pmo-monday-email.png",
              width: 1106,
              height: 611
            },
            {
              title: "And on a quiet week",
              context: "Silence never means a broken alert: when nothing is due, the briefing still arrives and says so.",
              reveal: "See a clear-skies Monday",
              src: "/work-samples/pmo-clear-skies-email.png",
              width: 1100,
              height: 622
            }
          ]
        },
        {
          type: "honest",
          text: "Built as a self-internship work sample with illustrative data, because my earlier work was confidential. The alert is live, but with sample data there are no measured results, such as time saved, yet."
        },

        { type: "part", title: "The through-line", heading: "The same instinct, at a smaller scale." },
        {
          type: "lead",
          text: "In the Air Force, I kept **risk registers and milestone dependencies** and tracked readiness formally, so leadership saw **progress, not promises**. PMO AutoPilot is that instinct, one tool down: **the register does the reporting**, and the warning comes before the deadline, not after it.",
          chips: [
            "pmo setup",
            "project portfolio tracking",
            "rag status reporting",
            "milestone tracking",
            "risk & blocker tracking",
            "stakeholder reporting",
            "governance cadence",
            "relational databases",
            "notion formulas",
            "workflow automation",
            "no-code automation",
            "notion",
            "zapier",
            "gmail"
          ]
        }
      ]
    }
  },
  {
    id: "pet-care-companion",
    group: "build",
    title: "Pet Care Companion: live in 48 hours",
    shortTitle: "Pet Care Companion",
    tags: ["Team hackathon", "AI product", "Remote team"],
    tag: "Hackathon",
    result: "Four people, three countries, one live MVP in 48 hours",
    impact: "Built in 48 hours",
    timeframe: "48 hours",
    summary:
      "Our team of four, working from three countries, built, submitted and pitched Pet Care Companion, a live MVP with five features, in one 48-hour hackathon.",
    points: [
      "5 features live, from pet profiles to AI care checklists",
      "My part: time zones, backend and pet records, pitch and demo",
      "Built, submitted and pitched on time"
    ],
    tools: ["Lovable", "Supabase", "OpenAI API"],
    sample: {
      status: "MVP shipped in 48h",
      inNumbers: "**48h**. **4** people. **3** countries. **5** features live.",
      how: "One plan, **one owner per task**, overlap windows and **written handoffs** across time zones.",
      howFlow: ["Plan","Build","Ship","Pitch"],
      visual: {
        type: "timeline",
        start: "Hour 0",
        end: "Hour 48",
        stops: [
          { title: "Plan", tool: "Google Docs + Notion" },
          { title: "Build", tool: "Lovable · Supabase · OpenAI API", badge: "4 people, in parallel" },
          { title: "Submit", tool: "On time" },
          { title: "Pitch", tool: "Live demo", result: true }
        ],
        note: "4 people · 3 countries · written handoffs"
      }
    },
    description:
      "One 48-hour hackathon, one brief: build Pet Care Companion as a live MVP, end to end. Our team of four did it from three different countries. The app was built, submitted on time and pitched.",
    highlights: [
      "Five features live: pet profiles, routines, vaccination records, appointments and AI checklists",
      "Four people working from three countries",
      "My role: time-zone coordination, the backend and pet records, and the pitch and demo",
      "Clear owners, one plan and written handoffs across time zones"
    ],
    honestNote:
      "A hackathon build with no real users, so there are no usage figures, feedback or ranking to report.",
    caseStudy: {
      embeds: "pet-care-companion",
      kicker: "Project · Team hackathon",
      title: "Four people. Three countries. One live MVP in 48 hours.",
      subtitle: "Pet Care Companion: every part of a pet's care in one place, with AI turning instructions into checklists.",
      strip: [
        { label: "What it is", value: "A live MVP, built end to end" },
        { label: "Built with", value: "Lovable · Supabase · OpenAI API" },
        { label: "My part", value: "Time zones, backend & pet records, pitch" },
        { label: "Team", value: "4 people in 3 countries" }
      ],
      oneBreathLabel: "What it is",
      oneBreath:
        "**Pet Care Companion** is an app where owners create pet profiles and keep all their pet's care in one place, with AI turning care instructions into **editable checklists**. One 48-hour hackathon, one brief: build it as a **live MVP**, end to end. Our team of four did it from **three countries**, and the app was **built, submitted on time and pitched**.",
      bigNumbers: [
        { value: "48h", label: "to build and submit" },
        { value: "4", label: "people on the team" },
        { value: "3", label: "countries we worked from" },
        { value: "5", label: "features live in the MVP" }
      ],
      blocks: [
        { type: "part", title: "The brief", heading: "Two challenges: the product, and the clock." },
        { type: "embed", key: "problem" },

        { type: "part", title: "What's in it", heading: "Five features, one MVP." },
        {
          type: "decisions",
          label: "The features",
          itemLabel: "Feature",
          items: [
            { title: "Pet profiles", text: "One profile per pet, so **every record has a home**." },
            { title: "Routines", text: "**Feeding and walking** routines in one place." },
            { title: "Vaccination records", text: "Vaccinations kept **on record, not in memory**." },
            { title: "Appointments", text: "**Grooming and vet** appointments tracked." },
            { title: "AI checklists", text: "AI turns care instructions into **editable checklists** an owner can actually follow." }
          ]
        },

        { type: "part", title: "Working remotely", heading: "Why remote teams stall, and why ours didn't." },
        {
          type: "decisions",
          label: "Where remote teams usually struggle",
          itemLabel: "Trap",
          items: [
            { title: "The clock", text: "Work **stops while one person sleeps**, and a question can wait half a day for an answer." },
            { title: "No shared room", text: "Decisions made in a call or a chat **never get written down**, so people work from different versions." },
            { title: "Blurred ownership", text: "Two people pick up the same task, and **another one nobody picks up at all**." },
            { title: "Lost handoffs", text: "Context **disappears between time zones**, and the next person starts by guessing." }
          ]
        },
        {
          type: "decisions",
          label: "How we turned each one around",
          itemLabel: "Habit",
          items: [
            { title: "Overlap windows", text: "Agreed hours for **live calls**, plus short updates in the team chat in between." },
            { title: "One plan", text: "The team playbook was the **single source of truth**, so everyone worked from the same version." },
            { title: "One owner per task", text: "Each person owned a part of the build, with a **clear owner for every task**." },
            { title: "Written handoffs", text: "A **status note** at the end of each person's day, so the next time zone could pick up without guessing." }
          ]
        },
        {
          type: "decisions",
          label: "The remote toolkit",
          heading: "Light tools for a 48-hour sprint.",
          itemLabel: "Tool",
          items: [
            { title: "WhatsApp", text: "The **team chat**, for quick updates between calls. Light on purpose: **48 hours doesn't need a Slack workspace**." },
            { title: "Zoom", text: "**Live calls** in the overlap windows, where decisions were made together." },
            { title: "Google Docs + Notion", text: "The **shared plan and playbook**, one source of truth for all four of us." },
            { title: "Trello", text: "**My own to-do list**, so my tasks and handoffs were always visible." }
          ]
        },
        {
          type: "roles",
          label: "My part",
          roles: [
            {
              who: "Me",
              me: true,
              what: "Coordinated across **time zones**, built the **backend and pet records**, and worked on the **pitch and demo**."
            }
          ]
        },
        { type: "quote", text: "Distance isn't the risk in a remote team. Unclear ownership is." },
        {
          type: "lead",
          text: "**Half the challenge was the product. The other half was the distance.** It taught more than it cost: planning across three time zones, writing before talking, and handing work over borders without losing a day."
        },

        { type: "part", title: "What shipped", heading: "Built, submitted and pitched, on time." },
        { type: "embed", key: "changed" },
        {
          type: "honest",
          text: "A hackathon build with no real users, so there are no usage figures, feedback or ranking to report."
        },

        { type: "part", title: "The through-line", heading: "The same instinct, at a smaller scale." },
        {
          type: "lead",
          text: "In the Air Force, I coordinated **cross-functional teams and vendors across geographies**, with clear ownership and on-time delivery. Forty-eight hours, four people and three countries is that same discipline on a hackathon clock: **one plan, one owner per task, and handoffs written down**.",
          chips: [
            "remote team coordination",
            "distributed collaboration",
            "async communication",
            "time-zone planning",
            "time-zone handoffs",
            "written status updates",
            "scope management",
            "ownership & accountability",
            "rapid delivery",
            "product pitch & demo",
            "mvp delivery",
            "ai product",
            "whatsapp",
            "zoom",
            "google docs",
            "notion",
            "trello",
            "lovable",
            "supabase",
            "openai api"
          ]
        }
      ]
    }
  },
  {
    id: "lead-spam-checker",
    group: "build",
    title: "A website lead spam checker",
    shortTitle: "Lead Spam Checker",
    tags: ["Self-internship", "AI automation", "n8n"],
    tag: "AI Automation",
    result: "Genuine enquiries kept, spam filtered out",
    impact: "Genuine vs spam, filed",
    timeframe: "Self-internship",
    summary:
      "Every website enquiry is checked, classified as genuine or spam by an AI model, and filed in the right Google Sheets tab.",
    points: ["Two checks, one AI decision, one filing", "Genuine and spam filed in separate tabs", "Empty enquiries never reach the sheet"],
    tools: ["n8n", "AI model", "Google Sheets"],
    sample: {
      status: "Genuine vs spam, filed",
      inNumbers: "**2** checks before the AI step. **2** lanes. **0** rows from empty enquiries.",
      how: "Cheap checks first, then an **AI model** decides genuine or spam, and **Google Sheets** files it.",
      howFlow: ["Website form","n8n checks","AI model","Google Sheets"],
      visual: {
        type: "fork",
        source: { tool: "Website form", title: "New enquiry" },
        check: { tool: "n8n", title: "Empty or incomplete?" },
        side: { label: "Stopped", title: "Never saved" },
        gate: { tool: "AI model", title: "Genuine or spam?" },
        lanes: [
          { label: "Genuine", title: "Lead list tab", tone: "good" },
          { label: "Spam", title: "Spam tab", tone: "bad" }
        ],
        note: "no manual sorting"
      }
    },
    description:
      "Built on my own during a self-internship. Every website enquiry is checked, classified as genuine or spam by an AI model, and filed in the right Google Sheets tab. An empty enquiry creates no entry at all.",
    highlights: [
      "Two checks, one AI classification and one filing step",
      "Genuine and spam enquiries filed in separate Google Sheets tabs",
      "Empty enquiries create no entry at all"
    ],
    honestNote:
      "A self-internship build with illustrative enquiries and no real website traffic behind it, so there is no measured spam-catch rate yet.",
    caseStudy: {
      embeds: "lead-spam-checker",
      kicker: "Project · Self-internship",
      title: "Spam out. Real leads in.",
      subtitle: "Every website enquiry checked, sorted by AI and filed, before anyone opens the inbox.",
      strip: [
        { label: "What it is", value: "Lead-filtering automation" },
        { label: "Built with", value: "Website form · n8n · AI model · Google Sheets" },
        { label: "Context", value: "Self-internship · built solo" },
        { label: "Source material", value: "Illustrative enquiries" }
      ],
      oneBreathLabel: "What it is",
      oneBreath:
        "Every website enquiry is **checked**, **classified as genuine or spam by an AI model**, and **filed in the right Google Sheets tab**. Genuine leads land in one place, spam in another, and an empty enquiry never reaches the sheet at all.",
      bigNumbers: [
        { value: "2", label: "checks before the AI step" },
        { value: "2", label: "lanes: genuine or spam" },
        { value: "0", label: "rows from empty enquiries" },
        { value: "0", label: "enquiries sorted by hand" }
      ],
      blocks: [
        { type: "part", title: "Why I built it", heading: "Spam buries real leads by default." },
        { type: "embed", key: "problem" },
        { type: "quote", text: "Every minute spent on spam is a minute a real lead waits." },

        { type: "part", title: "How it works", heading: "Check, classify, file. No one in the middle." },
        {
          type: "flow",
          label: "From form to the right tab",
          steps: [
            { tag: "Trigger", title: "An enquiry arrives", tool: "Website form" },
            { tag: "Check", title: "Empty or incomplete? Stop.", tool: "n8n" },
            { tag: "Classify", title: "Genuine or spam", tool: "AI model" },
            { tag: "File", title: "The right tab", tool: "Google Sheets" }
          ]
        },
        { type: "quote", text: "Cheap checks first, AI second: junk is stopped before it costs anything." },

        { type: "part", title: "What changed", heading: "The lead list stays clean on its own." },
        {
          type: "lead",
          text: "**Genuine enquiries** land in one tab, ready for follow-up. **Spam** lands in another, out of the way. **Empty submissions** never become a row. Nobody sorts the inbox by hand."
        },
        {
          type: "honest",
          text: "A self-internship build with illustrative enquiries and no real website traffic behind it, so there is no measured spam-catch rate yet."
        },

        { type: "part", title: "The through-line", heading: "Decide what deserves attention, before it reaches a person." },
        {
          type: "lead",
          text: "It's the same instinct behind PMO AutoPilot: **filter the noise before it reaches a decision-maker**, so the time that's left goes to what matters.",
          chips: [
            "lead qualification",
            "ai classification",
            "workflow automation",
            "data validation",
            "process design",
            "no-code automation",
            "n8n",
            "google sheets"
          ]
        }
      ]
    }
  },
  {
    id: "ai-accelerator",
    group: "build",
    title: "A support inbox that sorts itself",
    shortTitle: "Support Inbox Triage",
    tags: ["Self-internship", "AI workflow", "Customer support"],
    tag: "AI Workflow",
    result: "Every customer answered, urgent issues straight to the team",
    impact: "Sorted, logged, answered",
    timeframe: "Self-internship",
    summary:
      "Customers raise a ticket from a friendly web form. Every one gets a reply, a tracked row and a priority, and anything urgent lands in the team inbox.",
    points: [
      "A friendly web form real customers can use",
      "AI sets Category and Urgency; every ticket logged in Google Sheets",
      "Customer gets an acknowledgement; urgent issues reach the team"
    ],
    tools: ["n8n", "AI model", "Google Sheets", "Gmail"],
    sample: {
      status: "Every ticket answered",
      inNumbers: "**4** steps per ticket. **3** categories. **2** inboxes reached.",
      how: "A web form feeds an **AI model** that sorts each ticket; **Sheets** logs it and **Gmail** replies or escalates.",
      howFlow: ["Web form","AI model","Google Sheets","Gmail"],
      visual: {
        type: "fanout",
        source: { tool: "Web form", title: "New ticket" },
        gate: { tool: "AI model", title: "Category + urgency" },
        outputs: [
          { tool: "Google Sheets", title: "Logged" },
          { tool: "Gmail → customer", title: "Acknowledged" },
          { tool: "Gmail → team", title: "Escalated", alert: true, condition: "if urgent" }
        ],
        note: "all at once · no one sorting the inbox"
      }
    },
    description:
      "Built during a self-internship, working on my own: a customer support triage bot with a customer-facing web form. A customer submits feedback from a web page, and the bot classifies it by category and urgency, logs it as a new row in Google Sheets, emails the customer an acknowledgement and escalates high-urgency issues to the team.",
    image: "/workflow-diagram.jpg",
    highlights: [
      "A customer-facing web form wired to the triage bot",
      "Each ticket classified by Category (Bug, Feature Request, Question) and Urgency",
      "A new Google Sheets row per ticket: Category, Urgency, Date and Status = New",
      "A warm acknowledgement to the customer; an escalation to the team inbox when urgent"
    ],
    honestNote:
      "A self-internship build with illustrative tickets. It has not handled real customer volume, so there are no measured results yet.",
    caseStudy: {
      kicker: "Project · Self-internship",
      title: "Every customer answered. Every urgent issue escalated.",
      subtitle: "A support inbox that sorts, logs and replies on its own.",
      strip: [
        { label: "What it is", value: "Support triage with a customer web form" },
        { label: "Built with", value: "n8n · AI model · Google Sheets · Gmail" },
        { label: "Context", value: "Self-internship · built solo" },
        { label: "Source material", value: "Illustrative tickets" }
      ],
      oneBreathLabel: "What it is",
      oneBreath:
        "A customer support triage bot with a **friendly web form** in front of it. A customer submits feedback from a web page, and the bot **classifies it**, **logs it in Google Sheets**, **emails the customer an acknowledgement** and **escalates high-urgency issues to the team**. Nobody has to sort the inbox by hand.",
      bigNumbers: [
        { value: "4", label: "automatic steps per ticket" },
        { value: "3", label: "categories: Bug, Feature Request, Question" },
        { value: "2", label: "inboxes reached: customer and team" },
        { value: "0", label: "tickets sorted by hand" }
      ],
      blocks: [
        { type: "part", title: "Why I built it", heading: "Urgent issues wait in the same queue by default." },
        {
          type: "lead",
          text: "Customer feedback arrives as one stream. Someone has to read every message, decide **what it is** and **how urgent it is**, record it, reply and alert the team. Done by hand, the urgent issue waits behind everything else."
        },
        { type: "quote", text: "When everything sits in one queue, nothing is urgent." },

        { type: "part", title: "How it works", heading: "Classify. Log. Acknowledge. Escalate." },
        {
          type: "flow",
          label: "From the form to the right inbox",
          steps: [
            { tag: "Trigger", title: "A ticket is submitted", tool: "Web form" },
            { tag: "Classify", title: "Category and urgency", tool: "AI model" },
            { tag: "Log", title: "A new row, Status = New", tool: "Google Sheets" },
            { tag: "Reply", title: "Customer thanked; urgent ones escalated", tool: "Gmail" }
          ]
        },
        {
          type: "image",
          src: "/workflow-diagram.jpg",
          alt: "Diagram of the customer support triage workflow",
          caption: "The workflow, from customer feedback to the right inbox."
        },

        { type: "part", title: "What changed", heading: "No ticket sorted by hand." },
        {
          type: "lead",
          text: "Customers submit feedback from a web page, and behind the scenes it is **classified**, **logged**, **acknowledged** and, when it is urgent, **escalated**. The customer hears back, and the team only sees what needs them."
        },
        {
          type: "honest",
          text: "A self-internship build with illustrative tickets. It has not handled real customer volume, so there are no measured results yet."
        },

        { type: "part", title: "The through-line", heading: "The right issue, to the right person, first." },
        {
          type: "lead",
          text: "The same instinct as PMO AutoPilot: **make urgency visible before it becomes a problem**. Here it's a customer's issue instead of a project milestone, but the move is the same: **sort, log and escalate, with no one in the middle**.",
          chips: [
            "customer support operations",
            "ticket triage",
            "escalation management",
            "sla thinking",
            "ai classification",
            "workflow automation",
            "n8n",
            "google sheets",
            "gmail"
          ]
        }
      ]
    }
  }
];

// Results from roles without a full case study, shown as stat cards.
export const otherOutcomes = [
  { value: "100%", label: "Success in a live missile firing, with zero safety incidents, leading a 45-member team", source: "Mission operations" },
  { value: "27%", label: "Cut in fault rate and operational risk, with 25% less downtime, through root-cause analysis", source: "Maintenance & reliability" },
  { value: "+10%", label: "Service life added to air defence systems, at 95% operational capability", source: "Fleet & asset maintenance" },
  { value: "58%", label: "Faster leave approvals, from 6 hours to 2.5, for 200 users", source: "Digital process improvement" }
];

// Older project pages folded into PMO AutoPilot; their links (e.g. on a CV) still work.
export const projectRedirects = {
  "project-register": "pmo-autopilot",
  "weekly-digest": "pmo-autopilot"
};

export function getProject(id) {
  return projects.find((p) => p.id === id);
}
