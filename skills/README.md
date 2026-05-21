# ✝️ Church AI Assistant — Clawix Pack
### *Built on Clawix · Inspired by ChurchAIAdmin · Powered by Co-Generated Intelligence*

[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Clawix Compatible](https://img.shields.io/badge/clawix-1.0+-purple?style=flat-square)](https://github.com/aibyml-ngo/clawix)
[![Inspired by ChurchAIAdmin](https://img.shields.io/badge/inspired_by-ChurchAIAdmin-amber?style=flat-square)](https://github.com/HKKoho/ChurchAIAdmin)

---

> *"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do."*
> — Ephesians 2:10

---

## What Is This?

A **production-ready Clawix industry pack** for church ministry — a complete multi-agent AI assistant named **Grace** that serves pastors, Sunday School teachers, Bible study facilitators, pastoral care workers, worship leaders, and church administrators.

Grace is not a chatbot. She is a **coordinated team of specialist agents** running on Clawix's secure, self-hosted, multi-agent platform — with human-in-the-loop governance, persistent memory, and domain expertise for every aspect of church life.

---

## 🏗️ Architecture

```
👤 Church Worker (Web · Telegram · WhatsApp)
              │
              ▼
    🕊️ Grace — Coordinator Agent
         [routes · remembers · governs]
              │
    ┌─────────┼──────────────────────────┐
    ▼         ▼         ▼       ▼        ▼
📜 Sermon  📚 Sunday  📖 Bible 💛 Care  📋 Admin
  Prep      School    Study   Pastoral        │
              │                │         ┌───┘
    ┌─────────┘     ┌──────────┘    🎵 Worship  📣 Comms  🙏 Prayer
    │               │               Planner
    ▼               ▼
Sub-agents:    Sub-agents:
• Researcher   • Lesson Designer
• Illustrator  • Activity Creator
• Reviewer     • Age Adapter
               
              💛 Care Sub-agents:
              • Care Responder
              • 🚨 Crisis Sentinel (non-bypassable)
              • Referral Advisor

              📋 Admin Sub-agents:
              • Event Planner
              • Bulletin Builder
              • Volunteer Coordinator
```

**Human Approval Required Before:**
- Any communication sent to congregation
- Published bulletins or announcements
- Finalised pastoral care plans
- Official church documents

---

## 📦 Pack Contents

### Skills (9 total)

| Skill | Purpose |
|---|---|
| `church-coordinator` | Grace — routing, memory, governance |
| `church-sermon-prep` | Exegesis, outlines, illustrations, series planning |
| `church-sunday-school` | Complete lesson plans for nursery through senior high |
| `church-bible-study` | Deep study guides, series, discussion questions |
| `church-pastoral-care` | Care visits, grief support, crisis detection |
| `church-admin` | Events, bulletins, volunteers, meetings |
| `church-worship-planner` | Service flow, song sets, seasonal liturgy |
| `church-communications` | Social media, email, announcements, testimonies |
| `church-prayer-journal` | Prayer meetings, Lectio Divina, intercession guides |

### Agents (7) + Sub-agents (12)

See `skills/packs/church.json` for the full manifest.

---

## 🚀 Installation

### Step 1: Clone Clawix and install the pack

```bash
git clone https://github.com/aibyml-ngo/clawix.git
cd clawix
pnpm run install:clawix
```

### Step 2: Copy the Church AI pack files

```bash
# Clone or download this repository
git clone https://github.com/your-org/church-ai-clawix.git

# Copy skills to Clawix
cp -r church-ai-clawix/skills/builtin/* clawix/skills/builtin/
cp church-ai-clawix/skills/packs/church.json clawix/skills/packs/

# Copy system prompt
cp church-ai-clawix/SYSTEM_PROMPT.md clawix/skills/packs/church-system-prompt.md
```

### Step 3: Restart Clawix

```bash
cd clawix
pnpm run update:clawix
```

### Step 4: Open the Explore page
Navigate to `http://localhost:3000` → **Explore** → You will see the **⛪ Church Ministry** pack listed.

---

## 🎯 Who Is This For?

| Person | Their Need | What Grace Does |
|---|---|---|
| 🧑‍🏫 Sunday School Teacher | Lesson prep takes all week | Complete lesson in 2 minutes |
| 📖 Bible Study Leader | Deep content + good questions | Full study guide with context |
| 🙏 Pastor | Sermon research at 11pm Saturday | Exegesis, outline, illustrations |
| 💛 Pastoral Carer | How do I care for this person well? | Visit prep, care plan, scripts |
| 📋 Church Secretary | Events, bulletins, rotas | Complete admin templates |
| 🎵 Worship Leader | Service flow and song alignment | Worship set matched to sermon |
| 📣 Comms Team | Fresh, engaging content | Posts, emails, announcements |

---

## 🛡️ Ethics & Governance

| Principle | How It's Enforced |
|---|---|
| 🚨 Crisis Safety | Non-bypassable Crisis Sentinel in Pastoral Care skill |
| 📖 Scripture Integrity | No fabricated Bible references — always flagged if uncertain |
| 🏛️ Denominational Respect | Theological diversity respected; differences noted not resolved |
| 🔐 Confidentiality | Pastoral member names excluded from agent memory |
| ✅ Human Approval | Required before any congregational communication |
| 📋 Audit Log | All agent actions logged (Clawix built-in) |

---

## 🌍 Multilingual Support

The Sunday School skill and Communications skill support:
- 🇬🇧 English
- 🇭🇰 繁體中文 (Traditional Chinese — HK/Taiwan)
- 🇰🇷 한국어 (Korean)
- 🇪🇸 Español
- 🇧🇷 Português
- 🇫🇷 Français

---

## 💡 Inspiration Prompt Examples

Try these on the Explore page:

```
"Generate a Sunday School lesson on Jesus calming the storm for 7–9 year olds"

"Help me prepare a sermon on Psalm 23 for a congregation going through hardship"

"Create a 6-week small group Bible study on the Book of Ruth"

"I need to visit a member who just lost her husband — help me prepare"

"Plan our Easter Sunday service worship set aligned to a resurrection sermon"

"Draft a warm welcome email for first-time visitors last Sunday"

"Create a prayer meeting guide focused on intercession for our city"

"Help me plan a church community dinner for 120 people in 6 weeks"
```

---

## 📁 File Structure

```
church-ai-clawix/
├── SYSTEM_PROMPT.md              ← Grace's master system prompt
├── README.md                     ← This file
├── skills/
│   ├── packs/
│   │   └── church.json           ← Pack manifest (agents, sub-agents, inspirations)
│   └── builtin/
│       ├── church-coordinator/   
│       │   └── SKILL.md          ← Coordinator routing logic
│       ├── church-sermon-prep/   
│       │   └── SKILL.md          ← Sermon preparation
│       ├── church-sunday-school/ 
│       │   └── SKILL.md          ← Sunday School lessons ✦ Core ChurchAIAdmin feature
│       ├── church-bible-study/   
│       │   └── SKILL.md          ← Deep Bible study
│       ├── church-pastoral-care/ 
│       │   └── SKILL.md          ← Pastoral care + Crisis Sentinel
│       ├── church-admin/         
│       │   └── SKILL.md          ← Church administration
│       ├── church-worship-planner/
│       │   └── SKILL.md          ← Worship service planning
│       ├── church-communications/
│       │   └── SKILL.md          ← Church communications
│       └── church-prayer-journal/
│           └── SKILL.md          ← Prayer and intercession
```

---

## Contributing

Pull requests welcome. Please:
- Maintain theological inclusivity across denominations
- Do not add doctrine-specific content without flagging it clearly
- Ensure all pastoral care updates go through ethical review
- Run `pnpm run test && pnpm run lint` before submitting

---

## Credits

- **Clawix Framework** — [aibyml-ngo/clawix](https://github.com/aibyml-ngo/clawix) | [ClawixAI/clawix](https://github.com/ClawixAI/clawix)
- **ChurchAIAdmin** — [HKKoho/ChurchAIAdmin](https://github.com/HKKoho/ChurchAIAdmin) — the original Sunday School AI tool that inspired this pack
- **Co-Generated Intelligence** — built with humans and AI working together

---

## License

MIT — See LICENSE for details.

*Built with faith, love, and code. 🕊️*
