# ✝️ Church Admin AI Assistant

> *"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do."* — Ephesians 2:10

An AI assistant built for church ministry. Grace — the central AI coordinator — helps pastors, Sunday School teachers, Bible study leaders, pastoral care workers, worship leaders, and church administrators get their work done faster and better.

---

## What Grace does

| Ministry Area | What you get |
|---|---|
| 📜 **Sermon Preparation** | Passage research, outlines, illustrations, closing prayers |
| 📚 **Sunday School** | Complete age-appropriate lessons with crafts and memory verses |
| 📖 **Bible Study** | Deep study guides, series outlines, discussion questions |
| 💛 **Pastoral Care** | Visit preparation, care plans, grief support, crisis resources |
| 🎵 **Worship Planning** | Service flow, song sets, seasonal liturgy |
| 📋 **Church Admin** | Events, bulletins, volunteer rotas, meeting minutes, budgets |
| 📣 **Communications** | Welcome emails, social media posts, announcements |
| 🙏 **Prayer** | Prayer meeting guides, intercession lists, Lectio Divina |

---

## Installation

### What you need first

- [Node.js 20+](https://nodejs.org/)
- [pnpm](https://pnpm.io/installation) — `npm install -g pnpm`
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Step 1 — Clone the repository

```bash
git clone https://github.com/HKKoho/ChurchAIAssistant.git
cd ChurchAIAssistant
```

### Step 2 — Run the installer

```bash
pnpm run install:clawix
```

The installer will ask you for:
- Your AI provider API key (Anthropic Claude or OpenAI)
- Admin email and password
- Optional: Telegram bot token (to reach Grace via Telegram)

Everything else — database, encryption keys, containers — is set up automatically.

### Step 3 — Open the app

```
http://localhost:3000
```

Sign in with the admin email and password you entered.

---

## Updates

When you pull new changes, run:

```bash
pnpm run update:clawix
```

---

## Who is this for?

| Person | How Grace helps |
|---|---|
| 🧑‍🏫 Sunday School Teacher | Complete lesson plans in minutes, not hours |
| 📖 Bible Study Leader | Full study guide with context and discussion questions |
| 🙏 Pastor | Sermon research, exegesis, and structured outlines |
| 💛 Pastoral Carer | Visit preparation scripts and 3-month follow-up plans |
| 📋 Church Secretary | Events, bulletins, volunteer rotas, meeting agendas |
| 🎵 Worship Leader | Service flow and song sets matched to the sermon theme |
| 📣 Comms Team | Fresh, on-brand content for every channel |

---

## Inspiration Prompts — Try these to get started

- *"Help me prepare a sermon on Psalm 23 for a congregation going through hardship"*
- *"Create a Sunday School lesson on David and Goliath for children aged 7–9"*
- *"Design a 6-week small group study on the Psalms of Ascent"*
- *"Help me prepare for a pastoral care visit with a family who just lost a loved one"*
- *"Plan a worship set for Easter Sunday aligned to a resurrection sermon"*
- *"Create a complete planning checklist for our Christmas community dinner"*

---

## Channels

Grace can be reached through:
- **Web Dashboard** — `http://localhost:3000`
- **Telegram** — add your bot token during setup
- **WhatsApp** — configure via the Settings page

---

## Credits

- Built on [Clawix](https://github.com/ClawixAI/clawix) — the open-source multi-agent AI platform
- Inspired by [ChurchAIAdmin](https://github.com/HKKoho/ChurchAIAdmin)

---

## License

MIT — built with faith, love, and code. 🕊️
