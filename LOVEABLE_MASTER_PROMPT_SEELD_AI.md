# 🎯 LOVEABLE MASTER PROMPT: SeelD AI System
## The Core Product for Insurance Agents & Financial Advisors

---

## 📋 TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [The Vision & Philosophy](#the-vision--philosophy)
3. [The Agent's Journey - 3 Touch Points Only](#the-agents-journey---3-touch-points-only)
4. [System Architecture & Modules](#system-architecture--modules)
5. [Design System - Visual DNA](#design-system---visual-dna)
6. [Technology Stack](#technology-stack)
7. [User Stories & Features](#user-stories--features)
8. [Database Schema](#database-schema)
9. [API Requirements](#api-requirements)
10. [Success Metrics](#success-metrics)

---

## 🎯 PROJECT OVERVIEW

### What Are We Building?

**SeelD AI** is a revolutionary AI-Native platform that transforms insurance agents and financial advisors from administrative workers into relationship builders.

**The Promise:** One agent + SeelD AI = The productivity of 16 regular agents.

**Target Users:**
- Licensed insurance agents (סוכני ביטוח)
- Financial advisors (יועצים פיננסיים)
- Independent brokers working with pension funds, life insurance, health insurance, and investments

**The Problem We're Solving:**
- 85% of agent time is spent on administrative work, not clients
- 30% of commissions are lost due to manual tracking failures
- 48-hour average response time to clients
- Zero transparency in the process for clients
- Agents feeling overwhelmed, clients feeling neglected

**The Solution:**
An AI-powered "back-office" that handles EVERYTHING except the human touch. The agent becomes the relationship expert, while SeelD AI handles all operations.

---

## 💡 THE VISION & PHILOSOPHY

### Core Philosophy: "From Money Backwards"

**Unlike traditional CRMs that start with the lead, SeelD AI starts with the commission and works backwards.**

Why? Because the commission is the ultimate source of truth. If there's a commission, the deal closed. If not, something failed.

```
Traditional System: Lead → Client → Policy → Commission (hope it arrives)
SeelD AI System:    Commission → Policy → Client → Lead (provable, traceable)
```

### The Three Pillars of SeelD AI

1. **AI-Native, Not Bolt-On**
   - We didn't add a chatbot to an old system
   - We built from scratch with AI at the architectural core
   - Every process assumes AI will handle it

2. **Effortless for the Agent**
   - The agent does 3 things (see below)
   - Everything else is automated
   - No more "forgetting to follow up"

3. **Lovable Because It's Invisible**
   - The best UX is no UX
   - The agent shouldn't think about the system
   - It just works, silently, in the background

---

## 🚀 THE AGENT'S JOURNEY - 3 TOUCH POINTS ONLY

This is the **MOST IMPORTANT SECTION** of this prompt. The entire system is designed around these 3 moments where the agent interacts with SeelD AI. Everything else is automated.

---

### 🎯 TOUCH POINT 1: Send Link (10 seconds)

**Context:** Agent meets a potential client (coffee shop, referral, networking event, cold call)

**What the Agent Does:**
1. Pulls out phone
2. Opens SeelD AI app
3. Taps "New Client"
4. Sends the client a personalized onboarding link via SMS/WhatsApp/Email

**Example:**
```
"היי ניקול, נעים מאוד להכיר!
הנה הלינק שהבטחתי לך - תמלאי פרטים ואני אחזור אליך עם ניתוח מלא של התיק שלך.
[Link: seeld.ai/agent/shmulik/nicole-start]
- שמוליק"
```

**What Happens Automatically (Zero Agent Effort):**

1. **Client lands on branded page** (agent's photo, name, SeelD branding)
2. **Client fills basic info:**
   - Full name
   - ID number (תעודת זהות)
   - Phone + Email
   - Consent for data access
3. **SeelD AI Activates (within 30 seconds):**
   - Pulls pension data (Hishtalmut, Keren Pensia, Bituach Managers - מנהלי קרנות)
   - Pulls insurance data (Har Bituach - הר ביטוח)
   - Pulls bank data (if connected)
4. **AI Analyzer Runs:**
   - Identifies gaps (missing life insurance, missing disability insurance)
   - Calculates overpayments (high management fees)
   - Finds opportunities (better funds, rebalancing)
   - Generates visual report (like the Nicole example you showed)
5. **Ra'am (AI Assistant) Reaches Out to Client:**
   ```
   "היי ניקול, אני רעם, העוזר הדיגיטלי של שמוליק.
   קיבלתי את הפרטים שלך והתיק שלך בניתוח.
   שמוליק יחזור אליך בקרוב עם התוצאות.
   בינתיים, יש משהו שאת רוצה לשאול אותי?"
   ```

**Agent's Dashboard Updates in Real-Time:**
- "Nicole Cohen - Analysis Complete ✓"
- Red/Yellow/Green status indicators
- Notification: "Nicole is ready for meeting"

---

### 🎯 TOUCH POINT 2: Review Before Meeting (1 minute)

**Context:** Agent is about to meet the client (in-person, Zoom, phone call)

**What the Agent Does:**
1. Opens SeelD AI app
2. Taps on "Nicole Cohen"
3. Reads the AI-generated report (30 seconds)

**What the Agent Sees (Visual Dashboard):**

```
┌─────────────────────────────────────────────────────┐
│ NICOLE COHEN - 28 years old - Single - Tel Aviv    │
│ Risk Level: MEDIUM 🟡                               │
└─────────────────────────────────────────────────────┘

📊 PORTFOLIO ANALYSIS
┌─────────────────────────────────────────────────────┐
│ Pension Fund:        Meitav (0.8% fees - HIGH ❌)   │
│ Hishtalmut:          Migdal (0.5% fees - OK ✓)     │
│ Life Insurance:      MISSING ❌                      │
│ Disability (Akev):   MISSING ❌                      │
│ Health Insurance:    Clalit + Maccabi Sheli ✓      │
└─────────────────────────────────────────────────────┘

💰 OPPORTUNITIES (Projected Annual Savings)
1. Move Pension to Better Fund → Save ₪1,200/year
2. Open Life Insurance (₪500k coverage) → ₪80/month
3. Open Disability Insurance → ₪120/month

🎯 RECOMMENDED STRATEGY
- Close life insurance (urgent - she's young)
- Close disability insurance
- Move pension in 6 months (after relationship is solid)

📝 TALKING POINTS
- She's single, no dependents → pitch life insurance as "locking in low rate while young"
- Works in tech → high income → disability insurance critical
- Mention her friend Sarah (referral source) to build trust
```

**Agent's Outcome:**
- Walks into meeting like a mind reader
- Knows exactly what to pitch
- Has visual materials ready to share screen

---

### 🎯 TOUCH POINT 3: Voice Summary After Meeting (2 minutes)

**Context:** Agent just finished the meeting with the client

**What the Agent Does:**
1. Opens SeelD AI app
2. Taps "Nicole Cohen" → "Meeting Summary"
3. Records a voice note (60-90 seconds):

**Example Voice Note:**
```
[Agent Speaking, Hebrew]
"אוקיי, סיימתי עם ניקול.
סיכמנו על פתיחת ביטוח חיים בכיסוי של 500 אלף שקל,
ביטוח אובדן כושר עבודה,
וניוד קרן הפנסיה למסלול מניות בחברה אחרת.
היא תשלח לי גובה ומשקל להצהרת בריאות.
היא מעוניינת בפגישה נוספת בעוד חודש לבדוק את ההשקעות.
זהו."
```

**What Happens Automatically (THE MAGIC 🪄):**

1. **AI Transcribes the Voice Note** (using Whisper or similar)
2. **AI Parses the Data:**
   - Life Insurance: ₪500k coverage needed
   - Disability Insurance: Yes
   - Pension Transfer: Yes, to equity fund
   - Missing info: Height and weight (for health declaration)
   - Follow-up: Schedule meeting in 1 month

3. **"The Producer" AI (AI Agent #5) Activates:**
   - Generates all required forms:
     - Life insurance application form
     - Health declaration (Hatzaharat Briut)
     - Disability insurance application
     - Pension transfer form (Hozeh Niud)
   - Pre-fills all forms with Nicole's data from Touch Point 1
   - Highlights fields that need client input (height, weight)

4. **Forms Sent for Digital Signature:**
   - Ra'am sends Nicole a WhatsApp message:
     ```
     "היי ניקול, בהמשך לשיחה עם שמוליק -
     הטפסים מוכנים לחתימה דיגיטלית.
     רק חסר לי גובה ומשקל, תוכלי למלא?
     [Link: seeld.ai/sign/nicole-docs]"
     ```

5. **Client Signs Digitally** (integrated with DocuSign or similar)

6. **Forms Auto-Submitted to Insurance Companies:**
   - SeelD AI sends forms via API to:
     - Life insurance company (e.g., Harel)
     - Disability insurance company
     - Pension fund company

7. **Automated Follow-Up Activated:**
   - Ra'am checks policy status every 48 hours
   - Sends reminders to insurance companies if delayed
   - Updates agent dashboard in real-time

8. **Commission Tracking Activated:**
   - SeelD AI connects to agent's bank account (via Open Banking API)
   - Watches for incoming commission payments
   - Cross-references with expected commissions
   - **Alerts agent if commission is missing or wrong amount**

9. **Follow-Up Scheduled:**
   - SeelD AI automatically sets calendar reminder for agent (1 month out)
   - Sends agent a prep brief 2 days before the meeting

**Agent's Action Required:**
**ZERO.** The agent moves on to the next client.

---

## 🏗️ SYSTEM ARCHITECTURE & MODULES

SeelD AI is composed of 6 core AI modules working in concert:

### 1. 🔗 Lead Intake & Data Puller
- Generates personalized onboarding links
- Collects client consent
- Integrates with:
  - Har Bituach (insurance registry)
  - Mislaka Pensionit (pension clearing house)
  - Open Banking APIs (banks)
- Stores raw data securely (encrypted)

### 2. 🧠 Portfolio Analyzer (AI Agent #4 - "The Analyst")
- Scans all client assets
- Identifies gaps (missing coverage)
- Detects overpayments (high fees)
- Calculates potential savings
- Generates visual report (charts, graphs, bullets)
- Output: "Investment Strategy Memo" for agent

### 3. 💬 Ra'am - Client-Facing AI Assistant (AI Agent #3)
- 24/7 chatbot for clients (WhatsApp, SMS, Web)
- Handles:
  - Collecting missing documents
  - Answering FAQs ("When will my policy be active?")
  - Scheduling meetings
  - Sending reminders
- Personality: Friendly, efficient, professional (not overly casual)
- Always signs off with: "אם יש משהו דחוף, שמוליק זמין ב-[phone]"

### 4. 📝 The Producer (AI Agent #5)
- Generates all paperwork automatically
- Pre-fills forms with client data
- Creates PDF documents
- Handles digital signature workflow
- Submits forms to insurance companies (via API or email)

### 5. 💰 Commission Intelligence Engine
- Connects to agent's bank account
- Tracks incoming commission payments
- Matches payments to policies
- **Alerts agent of discrepancies:**
  - "Commission for Nicole Cohen expected: ₪2,400. Received: ₪2,100. ⚠️ Difference: ₪300."
- Generates monthly revenue reports

### 6. 📊 Command Center - Agent Dashboard
- Real-time view of all clients
- Color-coded status indicators:
  - 🟢 Green: Everything on track
  - 🟡 Yellow: Waiting on client action
  - 🔴 Red: Issue detected (missing commission, delayed policy)
- Filters: "Meetings This Week", "Missing Commissions", "Hot Leads"
- Analytics: Revenue forecast, conversion rates, avg deal size

---

## 🎨 DESIGN SYSTEM - VISUAL DNA

### Design Philosophy: "Forbes Meets High-Tech Minimalism"

**The Feeling:** Authority, Trust, Calm, Effortless, Premium

**The User Should Feel:**
- "This system knows what it's doing"
- "I'm in control, but I don't have to think"
- "Everything is taken care of"

---

### 🏷️ LOGO DESIGN (Detailed Spec)

**Primary Element: "SeelD"**
- **Font Family:** Serif, heavy weight, classic, authoritative
- **Inspiration:** Forbes logo - timeless, established, premium
- **Recommended Fonts:**
  - Playfair Display (Bold or Black weight)
  - Bodoni MT (Bold)
  - Garamond (Bold)
  - Didot (Bold)
- **Size:** Large, dominant, but not obnoxious
- **Placement:** Left side of header (in RTL layouts), or centered with secondary text to the side
- **Color:** Deep Navy Blue (#1a2332) or Graphite Gray (#2d3748) - NOT pure black

**Secondary Element: "Finance & Insurance"**
- **Font Family:** Sans-Serif, thin/light weight, modern, clean
- **Recommended Fonts:**
  - Inter (Light or Thin)
  - Assistant (Thin) - Hebrew support
  - Heebo (Light) - Hebrew support
- **Size:** Small, elegant, almost like a footnote
- **Placement:** Next to or below the "D" in "SeelD", offset slightly
- **Color:** Medium gray (#6b7280) - subdued, not competing with primary

**The Contrast:**
The visual tension between the bold, serif "SeelD" and the thin, sans-serif "Finance & Insurance" is the **soul of the brand.**

It communicates:
- Heritage (serif) + Innovation (sans-serif)
- Established (bold) + Forward-thinking (light)
- Seriousness (Finance) + Approachability (Modern design)

**Logo Usage Examples:**

```
Desktop Header (Left-aligned):
┌────────────────────────────────────────────────┐
│ SeelD                        [Agent Dashboard] │
│ Finance & Insurance              [Sign Out] │
└────────────────────────────────────────────────┘

Mobile Header (Centered):
┌────────────────────────────────────────────────┐
│               SeelD                            │
│        Finance & Insurance                     │
│                                                │
│   [☰ Menu]                     [Alerts: 3]    │
└────────────────────────────────────────────────┘
```

---

### 🎨 COLOR PALETTE

**Core Principle:** Pastel backgrounds + Deep text for contrast and calm

#### Primary: Turquoise (Trust, Clarity, Technology)
- `turquoise-50`: #E0F7FA (backgrounds)
- `turquoise-100`: #B2EBF2 (hover states)
- `turquoise-400`: #26C6DA (buttons, accents)
- `turquoise-600`: #00ACC1 (primary CTA, links)

#### Secondary: Soft Green (Growth, Money, Health)
- `green-50`: #E8F5E9 (backgrounds)
- `green-100`: #C8E6C9 (success messages)
- `green-400`: #66BB6A (positive indicators)
- `green-600`: #43A047 (confirmations)

#### Accent: Lavender/Purple (Innovation, AI, Premium)
- `purple-50`: #F3E5F5 (AI-related sections)
- `purple-100`: #E1BEE7 (highlights)
- `purple-400`: #AB47BC (AI badges, "powered by AI")
- `purple-600`: #8E24AA (premium features)

#### Neutral: Grays (Text, Borders, Backgrounds)
- `gray-50`: #FAFAFA (body background)
- `gray-100`: #F5F5F5 (card backgrounds)
- `gray-300`: #E0E0E0 (borders)
- `gray-600`: #757575 (secondary text)
- `gray-900`: #212121 (primary text)

#### Authority Color: Deep Navy (The "Forbes" Feel)
- `navy-900`: #1a2332 (logo, main headings)
- Use sparingly for maximum impact

---

### ✍️ TYPOGRAPHY

**Heading Font (Display):**
- **Font:** Assistant (Google Fonts) - Hebrew + Latin support
- **Weights:** Bold (700), Semi-Bold (600)
- **Usage:** H1, H2, H3, Logo text (for "SeelD" logo)

**Body Font:**
- **Font:** Heebo (Google Fonts) - Excellent Hebrew support
- **Weights:** Regular (400), Medium (500)
- **Usage:** Paragraphs, labels, buttons, UI elements

**Monospace Font (for numbers, IDs, technical data):**
- **Font:** JetBrains Mono or Fira Code
- **Usage:** Policy numbers, ID numbers, commission amounts

**Scale (Desktop):**
- H1: 2.5rem (40px) - Page titles
- H2: 2rem (32px) - Section titles
- H3: 1.5rem (24px) - Card titles
- Body: 1rem (16px) - Default text
- Small: 0.875rem (14px) - Captions, labels

**Line Heights:**
- Headings: 1.2
- Body: 1.6 (for readability)
- Tight: 1.4 (for compact UI elements)

---

### 🎭 UI COMPONENTS STYLE GUIDE

#### Buttons

**Primary Button (CTA):**
```css
background: gradient from turquoise-500 to turquoise-600
color: white
padding: 12px 24px
border-radius: 8px
font-weight: 600
shadow: medium (hover: large)
hover: scale(1.02)
```

**Secondary Button:**
```css
background: white
border: 2px solid turquoise-600
color: turquoise-600
padding: 12px 24px
border-radius: 8px
hover: background turquoise-50
```

**Ghost Button (Low priority actions):**
```css
background: transparent
color: gray-600
hover: background gray-100
```

#### Cards

**Standard Card:**
```css
background: white
border: 1px solid gray-200
border-radius: 12px
padding: 24px
shadow: small
hover: shadow medium (lift effect)
```

**Status Cards (Client Dashboard):**
- Green border-left (4px) for "Active"
- Yellow border-left for "Waiting"
- Red border-left for "Issue"

#### Form Inputs

```css
background: white
border: 1px solid gray-300
border-radius: 8px
padding: 12px 16px
focus: border turquoise-500, shadow glow
placeholder: gray-400
```

#### Icons

- **Library:** Lucide React (clean, modern, consistent)
- **Size:** 20px (default), 24px (headings), 16px (inline)
- **Color:** Inherit from parent, or gray-600 for neutral

---

### 📱 RESPONSIVE DESIGN

**Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Wide: 1440px+

**Mobile-First Approach:**
- Design for mobile first
- Progressive enhancement for larger screens
- Touch-friendly targets (min 44px × 44px)

**Critical Mobile Views:**
1. **Agent Dashboard (Mobile):**
   - Vertical stack of client cards
   - Swipe-left to see actions (e.g., "Call", "View Report")
   - Bottom navigation bar (Dashboard, Clients, Alerts, Profile)

2. **Client Onboarding (Mobile):**
   - Full-screen form
   - One question per screen (multi-step)
   - Progress bar at top
   - Large, friendly input fields

---

### ♿ ACCESSIBILITY (WCAG 2.1 AA Minimum)

**Contrast Ratios:**
- Normal text: 4.5:1 (AA)
- Large text: 3:1 (AA)
- Our palette meets this ✓

**Keyboard Navigation:**
- All interactive elements accessible via Tab
- Clear focus indicators (2px outline, turquoise-500)
- Skip links for screen readers

**Screen Reader Support:**
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`)
- ARIA labels on all icons
- Form validation with live regions

**RTL Support:**
- Full support for Hebrew (Right-to-Left)
- Logical CSS properties (margin-inline-start vs margin-left)
- Flip icons where appropriate (arrows, chevrons)

---

## 💻 TECHNOLOGY STACK

### Frontend

**Framework:** React + TypeScript
- **Why:** Type safety, component reusability, massive ecosystem

**Styling:** Tailwind CSS
- **Why:** Rapid prototyping, consistency, mobile-first utilities
- **Custom Config:** Extend with SeelD brand colors

**UI Component Library:** Shadcn/ui
- **Why:** Unstyled, accessible components we can fully customize
- **Components Needed:** Button, Card, Input, Select, Dialog, Dropdown, Tabs, Badge, Alert

**State Management:** Zustand or React Query
- **Zustand:** For global app state (user auth, preferences)
- **React Query:** For server state (API calls, caching)

**Forms:** React Hook Form + Zod
- **Why:** Performance, validation, error handling
- **Zod:** TypeScript-first schema validation

**Icons:** Lucide React
- **Why:** Clean, modern, tree-shakeable

---

### Backend

**Framework:** Node.js + Express (or NestJS for more structure)
- **Why:** JavaScript/TypeScript everywhere, massive ecosystem

**Database:** PostgreSQL
- **Why:** ACID compliance, relations, JSON support, mature
- **ORM:** Prisma (type-safe, great DX)

**Authentication:** NextAuth.js or Auth0
- **Features Needed:**
  - Email/password
  - 2FA (SMS or Authenticator app)
  - Role-based access (Agent, Admin, Super Admin)

**File Storage:** AWS S3 or Cloudflare R2
- **For:** Client documents, signed forms, exported reports

**Real-Time Updates:** WebSockets (Socket.io) or Server-Sent Events
- **For:** Live dashboard updates, notifications

---

### AI & ML

**LLM for Text Processing:**
- **Provider:** Anthropic Claude API (for Hebrew support)
- **Use Cases:**
  - Transcribing voice notes (agent summaries)
  - Parsing unstructured data
  - Generating client reports
  - Ra'am chatbot responses

**Voice-to-Text:**
- **Provider:** OpenAI Whisper API or Deepgram
- **Use Case:** Agent voice summaries after meetings

**Document Parsing:**
- **Provider:** AWS Textract or Google Document AI
- **Use Case:** Extracting data from uploaded PDFs (insurance policies, bank statements)

---

### Integrations (Critical)

**1. Har Bituach (Insurance Registry) - הר ביטוח**
- **API:** https://www.harbituach.co.il (check for developer API access)
- **Data:** Existing insurance policies for client

**2. Mislaka Pensionit (Pension Clearing House) - מסלקה פנסיונית**
- **API:** https://mislaka.org.il (may require certification)
- **Data:** Pension fund balances, contributions

**3. Open Banking (Bank Data)**
- **Providers:** Salt Edge, Plaid (if they support Israel), or direct bank APIs
- **Data:** Commission deposits, client bank accounts (with consent)

**4. Digital Signature:**
- **Providers:** DocuSign, SignNow, or local Israeli provider (e.g., Icount)
- **Use Case:** Client signs forms remotely

**5. Insurance Company APIs:**
- **Companies:** Harel, Migdal, Menora, Clal, Phoenix
- **Use Case:** Submit policies, check status
- **Challenge:** May require manual integrations (email, FTP) if APIs unavailable

**6. WhatsApp Business API:**
- **Provider:** Twilio, MessageBird
- **Use Case:** Ra'am sends messages to clients

**7. SMS Gateway:**
- **Provider:** Twilio, Nexmo
- **Use Case:** Send onboarding links, 2FA codes

---

### DevOps & Infrastructure

**Hosting:** Vercel (frontend) + AWS/GCP (backend)
- **Why Vercel:** Edge network, auto-scaling, zero-config
- **Why AWS/GCP:** Managed databases, S3, robust APIs

**CI/CD:** GitHub Actions
- **Pipeline:** Lint → Test → Build → Deploy

**Monitoring:**
- **App Monitoring:** Sentry (error tracking)
- **Analytics:** PostHog or Mixpanel (product analytics)
- **Logs:** Datadog or Logtail

**Security:**
- **HTTPS:** Everywhere (Let's Encrypt)
- **Data Encryption:** At rest (DB) and in transit (TLS)
- **Secrets Management:** AWS Secrets Manager or Doppler
- **Compliance:** GDPR-ready (even though Israel-focused), data retention policies

---

## 📖 USER STORIES & FEATURES

### Epic 1: Agent Onboarding & Setup

**User Story 1.1:** As an agent, I want to sign up for SeelD AI so I can start using the system.
- **Acceptance Criteria:**
  - Agent fills form: Name, License #, Phone, Email
  - Email verification required
  - Agent uploads license document (for approval)
  - Admin reviews and approves within 24h
  - Agent receives branded link: `seeld.ai/agent/[agent-name]`

**User Story 1.2:** As an agent, I want to customize my branded page so clients see my photo and bio.
- **Acceptance Criteria:**
  - Agent uploads profile photo
  - Agent writes short bio (max 300 chars)
  - Agent sets office location (displays on map)
  - Preview before saving

---

### Epic 2: Client Onboarding (Touch Point 1)

**User Story 2.1:** As an agent, I want to send a client a link so they can start the onboarding process.
- **Acceptance Criteria:**
  - Agent taps "New Client" in app
  - Agent enters client's phone or email
  - System generates unique link
  - Agent sends link via SMS/WhatsApp/Email (one-tap)
  - Client lands on branded page with agent's info

**User Story 2.2:** As a client, I want to fill out my info quickly so I can get my portfolio analyzed.
- **Acceptance Criteria:**
  - Multi-step form (progress bar shown)
  - Step 1: Name, ID, Phone, Email
  - Step 2: Consent for data access (checkbox + legal text)
  - Step 3: "Submit" → Loading animation ("Analyzing your portfolio...")
  - Mobile-friendly, large buttons
  - If data pull fails, show error message + option to upload PDFs manually

**User Story 2.3:** As the system, I want to pull client data automatically so the agent doesn't have to do manual work.
- **Acceptance Criteria:**
  - After client submits form, trigger APIs:
    - Har Bituach API (insurance data)
    - Mislaka API (pension data)
  - Retry logic if API fails (3 attempts)
  - Store raw data in database (encrypted)
  - Trigger AI Analyzer

---

### Epic 3: AI Analysis & Report Generation

**User Story 3.1:** As the AI Analyzer, I want to process client data so I can generate insights.
- **Acceptance Criteria:**
  - Input: Client data (pension, insurance, bank)
  - Output: JSON object with:
    - Gaps (missing coverage)
    - Overpayments (high fees)
    - Opportunities (savings, reallocations)
    - Risk score (Low/Medium/High)
  - Execution time: < 10 seconds

**User Story 3.2:** As an agent, I want to see a visual report so I can quickly understand the client's situation.
- **Acceptance Criteria:**
  - Report includes:
    - Client photo (if uploaded) or initials
    - Summary box (age, status, risk level)
    - Portfolio breakdown (charts)
    - Gap analysis (bullet list)
    - Recommended strategy (3-5 points)
    - Talking points (for meeting)
  - Report is mobile-responsive
  - Export as PDF button

---

### Epic 4: Meeting & Voice Summary (Touch Point 3)

**User Story 4.1:** As an agent, I want to record a voice summary after the meeting so I don't have to type.
- **Acceptance Criteria:**
  - Agent opens client profile
  - Taps "Record Summary"
  - Speaks for 30-120 seconds
  - System transcribes (displays text for confirmation)
  - Agent taps "Confirm" or "Re-record"

**User Story 4.2:** As the system, I want to parse the voice summary so I can automate the next steps.
- **Acceptance Criteria:**
  - Use Claude API to extract structured data:
    - Products agreed upon (e.g., life insurance, disability)
    - Coverage amounts
    - Missing info (e.g., height, weight)
    - Follow-up date
  - If data is unclear, ask agent to clarify (dialog box)

**User Story 4.3:** As "The Producer" AI, I want to generate all forms automatically so the client can sign them.
- **Acceptance Criteria:**
  - Generate PDFs for:
    - Life insurance application
    - Health declaration
    - Disability insurance application
    - Pension transfer form
  - Pre-fill all known fields
  - Highlight fields needing client input
  - Send to digital signature platform

---

### Epic 5: Ra'am AI Assistant

**User Story 5.1:** As Ra'am, I want to message the client on WhatsApp so they stay informed.
- **Acceptance Criteria:**
  - Trigger points:
    - After onboarding: "Your portfolio is being analyzed"
    - After analysis: "Your report is ready, [Agent] will contact you"
    - After meeting: "Your forms are ready for signature"
    - Reminder: "You haven't signed yet, need help?"
  - Messages are friendly, concise, in Hebrew
  - Include link if action needed

**User Story 5.2:** As a client, I want to chat with Ra'am so I can get quick answers.
- **Acceptance Criteria:**
  - Client can reply to Ra'am's messages
  - Ra'am answers FAQs:
    - "When will my policy be active?" → "Usually 2-4 weeks after signing"
    - "I lost the link" → Re-sends link
    - "I need to speak to [Agent]" → "I'll let [Agent] know, they'll call you soon"
  - If question too complex, Ra'am says: "Let me connect you to [Agent]" and creates alert

---

### Epic 6: Commission Tracking

**User Story 6.1:** As an agent, I want to connect my bank account so commissions are tracked automatically.
- **Acceptance Criteria:**
  - Agent taps "Connect Bank" in settings
  - Open Banking flow (consent, login)
  - System saves connection (secure token)
  - System polls bank daily for new transactions

**User Story 6.2:** As the system, I want to match commission deposits to policies so the agent knows if there's an issue.
- **Acceptance Criteria:**
  - When new deposit detected, match to:
    - Client name (from transaction description)
    - Expected commission amount (from policy)
  - If match: Mark policy as "Commission Received ✓"
  - If mismatch: Create alert: "Commission discrepancy for [Client]"

**User Story 6.3:** As an agent, I want to see a revenue dashboard so I know my earnings.
- **Acceptance Criteria:**
  - Dashboard shows:
    - Total revenue (this month, this year)
    - Expected revenue (pipeline)
    - Missing commissions (red flags)
    - Commission by product type (chart)
  - Exportable as CSV

---

### Epic 7: Command Center Dashboard

**User Story 7.1:** As an agent, I want to see all my clients in one view so I know what needs attention.
- **Acceptance Criteria:**
  - List view with columns:
    - Client name + photo
    - Status (color-coded badge)
    - Last activity date
    - Next action needed
  - Sort by: Status, Date, Name
  - Filter by: Status, Product Type
  - Search bar

**User Story 7.2:** As an agent, I want to see alerts so I don't miss important tasks.
- **Acceptance Criteria:**
  - Alert types:
    - 🔴 "Commission missing for [Client]"
    - 🟡 "Client hasn't signed forms (3 days)"
    - 🟢 "New policy activated for [Client]"
  - Badge on menu icon (e.g., "Alerts: 3")
  - Click alert to go to relevant client

---

## 🗄️ DATABASE SCHEMA

### Core Tables

**users** (Agents)
- id (UUID, primary key)
- email (unique, not null)
- password_hash (bcrypt)
- full_name
- phone
- license_number (unique)
- profile_photo_url
- bio (text)
- status (enum: pending, active, suspended)
- branded_link (unique, e.g., "shmulik")
- created_at
- updated_at

**clients**
- id (UUID, primary key)
- agent_id (foreign key → users)
- full_name
- id_number (unique, encrypted)
- phone
- email
- date_of_birth
- status (enum: lead, analyzing, ready, meeting_scheduled, active, closed)
- risk_level (enum: low, medium, high)
- onboarding_completed_at
- created_at
- updated_at

**client_data** (Raw data from APIs)
- id (UUID, primary key)
- client_id (foreign key → clients)
- data_type (enum: pension, insurance, bank)
- source (e.g., "Har Bituach API")
- raw_data (JSONB) - encrypted
- pulled_at
- created_at

**ai_analyses** (Portfolio analysis reports)
- id (UUID, primary key)
- client_id (foreign key → clients)
- analysis_data (JSONB)
  - gaps (array)
  - overpayments (array)
  - opportunities (array)
  - recommended_strategy (array)
  - talking_points (array)
- risk_score (integer, 0-100)
- generated_at
- created_at

**meetings** (Meeting summaries)
- id (UUID, primary key)
- client_id (foreign key → clients)
- agent_id (foreign key → users)
- voice_recording_url (S3 link)
- transcription (text)
- parsed_data (JSONB)
  - products_agreed (array)
  - coverage_amounts (object)
  - missing_info (array)
  - follow_up_date (date)
- meeting_date
- created_at

**policies** (Insurance policies sold)
- id (UUID, primary key)
- client_id (foreign key → clients)
- agent_id (foreign key → users)
- policy_type (enum: life, disability, health, pension)
- insurance_company
- policy_number (unique)
- coverage_amount (decimal)
- premium_amount (decimal)
- commission_expected (decimal)
- commission_received (decimal)
- commission_received_at
- status (enum: submitted, pending, active, cancelled)
- created_at
- updated_at

**forms** (Generated forms)
- id (UUID, primary key)
- policy_id (foreign key → policies)
- form_type (e.g., "Life Insurance Application")
- pdf_url (S3 link)
- signature_status (enum: not_sent, sent, signed, expired)
- signed_at
- created_at

**commissions** (Tracked commissions)
- id (UUID, primary key)
- agent_id (foreign key → users)
- policy_id (foreign key → policies, nullable)
- amount (decimal)
- transaction_date
- matched (boolean)
- notes (text)
- created_at

**alerts** (System alerts)
- id (UUID, primary key)
- agent_id (foreign key → users)
- client_id (foreign key → clients, nullable)
- policy_id (foreign key → policies, nullable)
- alert_type (enum: commission_missing, form_not_signed, policy_active, etc.)
- message (text)
- priority (enum: low, medium, high)
- read (boolean)
- created_at

---

## 🔌 API REQUIREMENTS

### Internal APIs (Backend → Frontend)

**Authentication**
- `POST /auth/register` - Agent signup
- `POST /auth/login` - Agent login
- `POST /auth/logout`
- `GET /auth/me` - Get current user

**Clients**
- `POST /clients` - Create new client (from onboarding)
- `GET /clients` - List all clients (for agent)
- `GET /clients/:id` - Get client details
- `PATCH /clients/:id` - Update client info
- `DELETE /clients/:id` - Soft delete

**AI Analysis**
- `POST /analysis/trigger` - Trigger AI analysis for client
- `GET /analysis/:client_id` - Get latest analysis
- `GET /analysis/:client_id/report` - Get formatted report (PDF)

**Meetings**
- `POST /meetings` - Create meeting record
- `POST /meetings/:id/voice` - Upload voice recording
- `GET /meetings/:id/transcription` - Get transcription

**Policies**
- `POST /policies` - Create policy record
- `GET /policies` - List policies
- `GET /policies/:id` - Get policy details
- `PATCH /policies/:id` - Update policy

**Commissions**
- `GET /commissions` - List commissions
- `POST /commissions/match` - Manually match commission to policy

**Alerts**
- `GET /alerts` - Get agent's alerts
- `PATCH /alerts/:id` - Mark alert as read

---

### External API Integrations

**Har Bituach (Insurance Registry)**
- `GET /api/policies?id_number={id}` - Fetch client's insurance policies
- **Authentication:** API Key (requires registration with Har Bituach)
- **Rate Limits:** TBD (check documentation)

**Mislaka Pensionit (Pension)**
- `GET /api/pension?id_number={id}` - Fetch pension fund data
- **Authentication:** Certificate-based (requires certification process)

**Open Banking (Bank Data)**
- **Provider SDK:** Use Salt Edge or Plaid SDK
- **Endpoints:** Handled by provider
- **Scope:** Read-only access to transactions

**Claude API (Anthropic)**
- `POST /v1/messages` - Send prompt, get response
- **Use Cases:**
  - Transcribe voice notes
  - Parse meeting summaries
  - Generate client reports
  - Power Ra'am chatbot

**Whisper API (OpenAI)**
- `POST /v1/audio/transcriptions` - Transcribe audio file
- **Use Case:** Agent voice summaries

**WhatsApp Business API (Twilio)**
- `POST /v1/messages` - Send WhatsApp message
- **Use Case:** Ra'am messages to clients

**DocuSign API**
- `POST /v2/envelopes` - Send document for signature
- `GET /v2/envelopes/{id}` - Check signature status

---

## 📊 SUCCESS METRICS

### Key Performance Indicators (KPIs)

**Product Metrics:**
- **Onboarding Completion Rate:** % of clients who complete the onboarding form
- **Time to First Analysis:** Time from client signup to AI report generation
- **Agent Engagement:** Daily/weekly active agents
- **Voice Summary Usage:** % of agents using voice summaries vs typing
- **Commission Match Rate:** % of commissions automatically matched
- **Alert Response Time:** Avg time for agent to act on alerts

**Business Metrics:**
- **Policies Closed per Agent per Month:** Target = 8+ (vs industry avg of 2-3)
- **Average Deal Size:** ₪ amount per policy
- **Revenue per Agent:** Monthly revenue tracked in system
- **Churn Rate:** % of agents who stop using SeelD AI

**User Satisfaction:**
- **Agent NPS (Net Promoter Score):** "Would you recommend SeelD AI to another agent?"
- **Client NPS:** "Would you recommend [Agent] to a friend?"
- **Support Ticket Volume:** Lower = better UX

**Technical Metrics:**
- **API Uptime:** 99.9% target
- **Average Page Load Time:** < 2 seconds
- **Error Rate:** < 1% of requests
- **AI Accuracy:** Manual QA of 20 reports/week

---

## 🎬 LOVABLE: WHAT MAKES THIS SYSTEM "LOVABLE"?

### The "Aha!" Moments

**1. The First Voice Summary:**
When an agent records their first voice note and sees it instantly transform into pre-filled forms, they'll think: *"Holy shit, this is magic."*

**2. The First Commission Alert:**
When the system alerts an agent that a commission is missing (and they confirm it's true), they'll realize: *"This system is watching my back."*

**3. The First Client Compliment:**
When a client tells the agent, "Wow, you were so prepared for our meeting!" (because of the AI report), the agent feels like a superhero.

### The Emotional Journey

- **Day 1:** "Let me try this..."
- **Week 1:** "Okay, this is actually useful."
- **Month 1:** "I can't believe I used to do this manually."
- **Month 3:** "I'm never going back."

### What Makes Users Love It (Not Just Like It)

1. **It makes them look good** (prepared, professional, responsive)
2. **It saves them time** (hours per week)
3. **It reduces anxiety** (no more worrying about missing commissions)
4. **It's invisible** (they don't have to think about it)
5. **It respects them** (voice notes instead of typing, minimal clicks)

---

## ✅ DEVELOPMENT PHASES

### Phase 1: MVP (Weeks 1-8)
- Agent signup & auth
- Client onboarding (link generation, form, data pull)
- AI analysis (basic version)
- Agent dashboard (client list, status)
- Manual form upload (no auto-generation yet)

**Goal:** Prove the core workflow works

### Phase 2: The Magic (Weeks 9-16)
- Voice summary recording & transcription
- Auto form generation ("The Producer")
- Ra'am AI assistant (WhatsApp messaging)
- Digital signature integration

**Goal:** Make agents say "Wow"

### Phase 3: The Intelligence (Weeks 17-24)
- Commission tracking & bank integration
- Alert system
- Advanced AI analysis (deeper insights)
- Revenue dashboard

**Goal:** Make agents dependent on it

### Phase 4: Scale & Polish (Weeks 25-32)
- Mobile app (React Native)
- API integrations with insurance companies
- Performance optimization
- Comprehensive onboarding tutorials

**Goal:** Ready for 100+ agents

---

## 🚨 CRITICAL SUCCESS FACTORS

1. **Hebrew Language Support:** Everything must work flawlessly in Hebrew (UI, AI, voice transcription)
2. **Mobile-First:** Agents work on the go, mobile must be perfect
3. **Speed:** Every action should feel instant (< 2 seconds)
4. **Reliability:** If commission tracking fails, agents lose trust forever
5. **Security:** Handling sensitive financial data, must be bulletproof

---

## 📝 FINAL NOTES FOR LOVEABLE AI

**Tone of the Application:**
- Professional, not corporate
- Efficient, not cold
- Helpful, not intrusive
- Confident, not arrogant

**The Brand Voice:**
"We handle the complexity so you can focus on what matters: your clients."

**The Agent's Inner Voice When Using SeelD AI:**
"Finally, a system that works *for* me, not the other way around."

---

**This is not just a CRM. This is not just an AI tool. This is the operating system for modern insurance agents.**

---

## 🎯 END OF MASTER PROMPT

**Document Version:** 1.0
**Created:** November 2025
**For:** Loveable AI Platform
**Project:** SeelD AI - Core Agent System
**Owner:** Shmulik Marziano, SeelD Finance & Insurance

**Next Steps:**
1. Review this prompt with stakeholders
2. Validate technical feasibility of APIs (Har Bituach, Mislaka)
3. Create Figma mockups based on design system
4. Set up development environment
5. Begin Phase 1 (MVP)

**Questions or clarifications? Contact the product team.**

---

**May this system change the lives of agents and their clients. Let's build something Lovable.**
