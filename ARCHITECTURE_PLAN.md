# 🏗️ SeelD AI-Powered CRM & Insurance Platform - Architecture Plan

## 📊 סקירה כללית

מערכת משולבת המשלבת את היכולות של:
- **Surense** - ניהול סוכני ביטוח ותיק לקוחות
- **SMS CRM** - מערכת CRM מתקדמת עם טלמרקטינג וגבייה
- **AI Integration** - בינה מלאכותית שעובדת בשיתוף פעולה עם האדם

---

## 🎯 פונקציונליות עיקרית

### 1️⃣ מודול CRM מתקדם

#### ניהול לידים (Lead Management)
```
✓ קליטה אוטומטית מטפסים, צ'אט, מודעות
✓ Lead Scoring - AI מדרג לידים לפי סיכויי המרה
✓ חלוקה אוטומטית לסוכנים
✓ Follow Up חכם - תזכורות אוטומטיות
✓ היסטוריית תקשורת מלאה
```

#### ניהול משימות ותהליכים
```
✓ רשימות Follow Up אוטומטיות
✓ משימות מותאמות אישית
✓ תזכורות חכמות (SMS/Email/Push)
✓ וורקפלואו אוטומטי
✓ תבניות משימות לתהליכים שגרתיים
```

#### מערכת תקשורת משולבת
```
✓ חייגן אוטומטי (Click-to-Call)
✓ תיעוד שיחות אוטומטי
✓ SMS Marketing & Reminders
✓ Email Campaigns
✓ WhatsApp Business Integration
✓ צ'אט פנימי לצוות
```

#### דוחות ואנליטיקס
```
✓ דשבורד מנהלים
✓ דוחות ביצועים לסוכנים
✓ ניתוח שיחות ופעילויות
✓ תחזיות מכירות (AI)
✓ ניתוח ROI לקמפיינים
```

---

### 2️⃣ מודול ניהול ביטוח ופנסיה

#### ניהול תיק לקוחות
```
✓ מידע מרוכז על כל לקוח
✓ היסטוריית פוליסות מלאה
✓ תצוגה גרפית של כיסויים
✓ מעקב אחר תאריכי חידוש
✓ תזכורות אוטומטיות
```

#### ניהול פוליסות
```
✓ העלאה וסריקה של מסמכים (OCR)
✓ השוואת פוליסות
✓ זיהוי פערי כיסוי (AI)
✓ המלצות אוטומטיות לשיפור
✓ חישוב חסכון פוטנציאלי
```

#### אינטגרציות
```
✓ מסלקת הפנסיה
✓ הר הביטוח
✓ חברות ביטוח (API)
✓ בנקים (Open Banking)
✓ רשויות מס
```

#### ניהול עמלות
```
✓ מעקב עמלות צפויות vs בפועל
✓ התראות על שונות
✓ תחזית הכנסות
✓ דוחות מס אוטומטיים
```

---

### 3️⃣ AI Agent - הבינה המלאכותית 🤖

#### עוזר אישי לסוכן
```
✓ המלצות יומיות - "מי לפנות אליו היום?"
✓ סיכום אוטומטי של פגישות
✓ הכנת הצעות מחיר (AI Generated)
✓ זיהוי הזדמנויות Cross-Sell / Up-Sell
✓ תזכורות חכמות בהקשר
```

#### צ'אטבוט ללקוחות
```
✓ תמיכה 24/7
✓ מענה לשאלות נפוצות
✓ תזמון פגישות אוטומטי
✓ בדיקת סטטוס פוליסות
✓ העברה לסוכן אנושי בצורך
```

#### ניתוח ותובנות
```
✓ ניתוח פוליסות - זיהוי פערים אוטומטי
✓ Lead Scoring - דירוג לידים
✓ Churn Prediction - חיזוי נטישה
✓ המלצות מותאמות אישית
✓ סיכום שיחות ומיילים אוטומטי
```

#### אוטומציות חכמות
```
✓ שליחת דוחות אוטומטית
✓ תזכורות לתשלום פרמיות
✓ עדכון לקוחות על שינויים
✓ ניהול תהליכי אישור
✓ גיבוי והמלצות לפעולה
```

---

## 🗂️ מבנה מסד הנתונים - הרחבות

### מודלים חדשים שנוסיף:

#### 1. Task (משימות)
```prisma
model Task {
  id          String       @id @default(cuid())
  title       String
  description String?      @db.Text
  type        TaskType
  status      TaskStatus   @default(PENDING)
  priority    Priority

  // Assignment
  assignedTo  String       // userId
  assignedBy  String?      // userId

  // Relations
  leadId      String?
  lead        Lead?        @relation(fields: [leadId], references: [id])
  clientId    String?
  client      Client?      @relation(fields: [clientId], references: [id])

  // Scheduling
  dueDate     DateTime?
  completedAt DateTime?

  // AI Generated
  isAIGenerated Boolean    @default(false)
  aiReasoning   String?    @db.Text

  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
}

enum TaskType {
  CALL
  EMAIL
  MEETING
  FOLLOW_UP
  DOCUMENT_REQUEST
  POLICY_REVIEW
  CLAIM_ASSISTANCE
  OTHER
}

enum TaskStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
  CANCELLED
  OVERDUE
}
```

#### 2. Activity (פעילויות)
```prisma
model Activity {
  id          String         @id @default(cuid())
  type        ActivityType
  description String         @db.Text

  // Relations
  userId      String         // Who performed the activity
  user        User           @relation(fields: [userId], references: [id])
  leadId      String?
  lead        Lead?          @relation(fields: [leadId], references: [id])
  clientId    String?
  client      Client?        @relation(fields: [clientId], references: [id])

  // Call tracking
  callDuration Int?         // seconds
  callOutcome  CallOutcome?
  callNotes    String?      @db.Text
  callRecordingUrl String?

  // Email tracking
  emailSubject String?
  emailSent    Boolean?     @default(false)
  emailOpened  Boolean?     @default(false)

  // SMS tracking
  smsDelivered Boolean?     @default(false)
  smsContent   String?      @db.Text

  createdAt    DateTime     @default(now())
}

enum ActivityType {
  CALL_INBOUND
  CALL_OUTBOUND
  EMAIL_SENT
  EMAIL_RECEIVED
  SMS_SENT
  WHATSAPP_SENT
  MEETING_SCHEDULED
  NOTE_ADDED
  DOCUMENT_UPLOADED
  POLICY_CREATED
  POLICY_UPDATED
}

enum CallOutcome {
  ANSWERED
  NO_ANSWER
  VOICEMAIL
  BUSY
  WRONG_NUMBER
  CALLBACK_REQUESTED
  INTERESTED
  NOT_INTERESTED
}
```

#### 3. Campaign (קמפיינים)
```prisma
model Campaign {
  id          String         @id @default(cuid())
  name        String
  description String?        @db.Text
  type        CampaignType
  status      CampaignStatus @default(DRAFT)

  // Content
  subject     String?
  content     String         @db.Text

  // Targeting
  targetAudience String?     @db.Text // JSON or filters

  // Scheduling
  scheduledAt DateTime?
  startedAt   DateTime?
  completedAt DateTime?

  // Stats
  totalRecipients Int        @default(0)
  sent            Int        @default(0)
  delivered       Int        @default(0)
  opened          Int        @default(0)
  clicked         Int        @default(0)
  converted       Int        @default(0)

  // Relations
  leads       Lead[]

  createdBy   String         // userId
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @updatedAt
}

enum CampaignType {
  EMAIL
  SMS
  WHATSAPP
  VOICE
}

enum CampaignStatus {
  DRAFT
  SCHEDULED
  RUNNING
  PAUSED
  COMPLETED
  CANCELLED
}
```

#### 4. AIInteraction (אינטראקציות AI)
```prisma
model AIInteraction {
  id          String           @id @default(cuid())
  type        AIInteractionType

  // User context
  userId      String?
  user        User?            @relation(fields: [userId], references: [id])
  clientId    String?
  client      Client?          @relation(fields: [clientId], references: [id])

  // Interaction data
  input       String           @db.Text
  output      String           @db.Text
  model       String           // "claude-3-sonnet", "gpt-4", etc

  // Quality
  confidence  Decimal?         @db.Decimal(3,2)
  wasHelpful  Boolean?
  feedback    String?          @db.Text

  // Results
  actionTaken String?          @db.Text

  createdAt   DateTime         @default(now())
}

enum AIInteractionType {
  CHATBOT_CONVERSATION
  POLICY_ANALYSIS
  LEAD_SCORING
  RECOMMENDATION
  MEETING_SUMMARY
  EMAIL_DRAFT
  DOCUMENT_EXTRACTION
  PREDICTION
}
```

#### 5. Integration (אינטגרציות)
```prisma
model Integration {
  id          String              @id @default(cuid())
  name        String              // "Pension Clearing House", "Insurance Co", etc
  type        IntegrationType
  status      IntegrationStatus   @default(ACTIVE)

  // Credentials (encrypted)
  apiKey      String?
  apiSecret   String?
  config      String?             @db.Text // JSON config

  // Stats
  lastSyncAt  DateTime?
  syncFrequency String?           // "daily", "hourly", etc
  totalSyncs  Int                 @default(0)
  failedSyncs Int                 @default(0)

  createdAt   DateTime            @default(now())
  updatedAt   DateTime            @updatedAt
}

enum IntegrationType {
  INSURANCE_COMPANY
  PENSION_CLEARING
  HAR_HABITUCH
  BANK
  SMS_PROVIDER
  EMAIL_PROVIDER
  VOIP_PROVIDER
  CALENDAR
  STORAGE
}

enum IntegrationStatus {
  ACTIVE
  INACTIVE
  ERROR
  PENDING_SETUP
}
```

---

## 🔌 API Endpoints - תוספות

### CRM APIs

```
POST   /api/crm/leads              - Create lead
GET    /api/crm/leads              - List leads (with filters)
GET    /api/crm/leads/:id          - Get lead details
PUT    /api/crm/leads/:id          - Update lead
DELETE /api/crm/leads/:id          - Delete lead
POST   /api/crm/leads/:id/convert  - Convert lead to client

POST   /api/crm/tasks              - Create task
GET    /api/crm/tasks              - List tasks
PUT    /api/crm/tasks/:id          - Update task
POST   /api/crm/tasks/:id/complete - Mark task complete

POST   /api/crm/activities         - Log activity
GET    /api/crm/activities         - List activities

POST   /api/crm/campaigns          - Create campaign
GET    /api/crm/campaigns          - List campaigns
POST   /api/crm/campaigns/:id/send - Send campaign
```

### AI APIs

```
POST   /api/ai/chat                - Chatbot conversation
POST   /api/ai/analyze-policy      - Analyze policy for gaps
POST   /api/ai/score-lead          - Score a lead
POST   /api/ai/generate-recommendation - Generate client recommendation
POST   /api/ai/summarize-meeting   - Summarize meeting notes
POST   /api/ai/draft-email         - Draft email response
POST   /api/ai/extract-document    - Extract data from document (OCR)
```

### Integration APIs

```
POST   /api/integrations/sms/send       - Send SMS
POST   /api/integrations/email/send     - Send Email
POST   /api/integrations/call/initiate  - Initiate call
GET    /api/integrations/pension/sync   - Sync pension data
GET    /api/integrations/insurance/sync - Sync insurance data
```

### Analytics APIs

```
GET    /api/analytics/dashboard         - Dashboard stats
GET    /api/analytics/agent-performance - Agent performance
GET    /api/analytics/sales-pipeline    - Sales pipeline
GET    /api/analytics/revenue-forecast  - Revenue forecast
POST   /api/analytics/custom-report     - Generate custom report
```

---

## 🎨 UI/UX - עיצוב וחוויית משתמש

### עקרונות עיצוב
- **מודרני וממוקד** - עיצוב נקי בהשראת Surense ו-SMS CRM אך ייחודי
- **RTL תמיכה מלאה** - עברית/אנגלית
- **Responsive** - עובד על כל מכשיר
- **Dark Mode** - מצב כהה/בהיר
- **נגישות** - WCAG 2.1 AA

### דפים עיקריים

#### 1. דשבורד (Dashboard)
```
├── סטטיסטיקות עיקריות (KPIs)
├── לידים חמים (Hot Leads)
├── משימות להיום
├── פגישות קרובות
├── המלצות AI
└── גרפים ותרשימים
```

#### 2. ניהול לידים (Leads)
```
├── טבלת לידים (עם פילטרים)
├── Kanban Board (New → Contacted → Qualified → Won/Lost)
├── ניקוד לידים (AI Score)
├── היסטוריית תקשורת
└── כפתורי פעולה מהירים (Call, Email, SMS)
```

#### 3. ניהול לקוחות (Clients)
```
├── רשימת לקוחות
├── פרופיל לקוח מלא
│   ├── פרטים אישיים
│   ├── פוליסות פעילות
│   ├── היסטוריית תקשורת
│   ├── מסמכים
│   ├── המלצות AI
│   └── תזכורות
└── תצוגת תיק לקוח (Portfolio View)
```

#### 4. ניהול פוליסות (Policies)
```
├── סקירת פוליסות
├── השוואת פוליסות
├── ניתוח פערים (AI)
├── חישוב ROI
└── תזכורות חידוש
```

#### 5. משימות ופעילויות (Tasks & Activities)
```
├── רשימת משימות (Todo List)
├── לוח שנה (Calendar)
├── תזכורות
└── היסטוריית פעילויות
```

#### 6. דוחות (Reports)
```
├── דוח ביצועים
├── דוח מכירות
├── דוח עמלות
├── דוח לקוחות
└── דוחות מותאמים אישית
```

#### 7. AI Assistant
```
├── צ'אט עם AI
├── המלצות אוטומטיות
├── ניתוחים
└── תובנות
```

---

## 🔐 אבטחה והרשאות

### תפקידים (Roles)
```
SUPER_ADMIN - גישה מלאה למערכת
ADMIN       - ניהול ארגון
MANAGER     - ניהול צוות
AGENT       - סוכן רגיל
CLIENT      - לקוח
```

### הרשאות לפי תפקיד
```typescript
const permissions = {
  SUPER_ADMIN: ['*'], // All permissions
  ADMIN: [
    'manage_users',
    'manage_agents',
    'view_all_clients',
    'manage_integrations',
    'view_analytics',
    'manage_campaigns'
  ],
  MANAGER: [
    'view_team_clients',
    'assign_leads',
    'view_team_analytics',
    'manage_campaigns'
  ],
  AGENT: [
    'view_own_clients',
    'manage_own_leads',
    'create_policies',
    'view_own_analytics'
  ],
  CLIENT: [
    'view_own_portfolio',
    'upload_documents',
    'schedule_meetings',
    'chat_with_ai'
  ]
}
```

---

## 🚀 תכנית יישום (Implementation Plan)

### Phase 1: מודל נתונים והרחבות (שבוע 1-2)
- [ ] הרחבת Prisma Schema
- [ ] הוספת מודלים חדשים (Task, Activity, Campaign, etc)
- [ ] מיגרציות
- [ ] Seed data לבדיקות

### Phase 2: API Development (שבוע 2-4)
- [ ] CRM APIs (Leads, Tasks, Activities)
- [ ] AI APIs (Chat, Analysis, Recommendations)
- [ ] Integration APIs (SMS, Email, Call)
- [ ] Analytics APIs

### Phase 3: AI Integration (שבוע 3-5)
- [ ] שילוב Claude AI / OpenAI
- [ ] Chatbot ללקוחות
- [ ] Lead Scoring
- [ ] Policy Analysis
- [ ] Document OCR

### Phase 4: UI Components (שבוע 4-6)
- [ ] Dashboard
- [ ] Leads Management
- [ ] Client Portal
- [ ] Agent Portal
- [ ] AI Assistant Interface

### Phase 5: אינטגרציות (שבוע 6-7)
- [ ] SMS Provider (Twilio/similar)
- [ ] Email Provider (SendGrid/similar)
- [ ] Calendar (Google Calendar)
- [ ] Storage (S3/R2)

### Phase 6: בדיקות ושיפורים (שבוע 7-8)
- [ ] Unit Tests
- [ ] Integration Tests
- [ ] E2E Tests
- [ ] Performance Optimization
- [ ] Security Audit

---

## 📚 טכנולוגיות

### Backend
- Next.js 14+ (App Router)
- Prisma ORM
- PostgreSQL
- NextAuth (Authentication)

### Frontend
- React 19
- TypeScript
- Tailwind CSS
- Radix UI
- Lucide Icons

### AI/ML
- Anthropic Claude API
- OpenAI API (fallback)
- Vercel AI SDK

### Integrations
- Twilio (SMS)
- SendGrid (Email)
- Cloudflare R2 (Storage)
- Google Calendar API

### DevOps
- Vercel (Hosting)
- GitHub Actions (CI/CD)
- Sentry (Error Tracking)
- Posthog (Analytics)

---

## 💡 תכונות ייחודיות (Unique Features)

### 1. AI Co-Pilot לסוכן
```
- "מה לעשות היום?" - תכנון יום אוטומטי
- "מה לומר ללקוח?" - סקריפטים מותאמים
- "איך לסגור את העסקה?" - טיפים והמלצות
```

### 2. Smart Notifications
```
- התראות מותאמות אישית
- עדיפות דינמית (AI)
- אופטימיזציה של זמן שליחה
```

### 3. Voice-to-Text בעברית
```
- תמלול שיחות אוטומטי
- סיכום נקודות מפתח
- זיהוי פריטי Action Items
```

### 4. Predictive Analytics
```
- חיזוי נטישה (Churn)
- חיזוי סגירת עסקה
- חיזוי הכנסות
```

### 5. White Label
```
- אפשרות התאמה אישית לסוכנויות
- לוגו ומיתוג משלהם
- דומיין מותאם
```

---

## 📞 תמיכה ותחזוקה

### SLA
- זמינות: 99.9%
- תמיכה: 24/7
- עדכוני אבטחה: שבועי
- Feature Updates: חודשי

### תיעוד
- API Documentation (OpenAPI/Swagger)
- מדריך משתמש
- וידאו הדרכות
- FAQ

---

## 🎯 מדדי הצלחה (KPIs)

- **זמן תגובה ללידים** < 5 דקות
- **שיעור המרה** > 25%
- **שביעות רצון לקוחות** > 4.5/5
- **זמן עיבוד פוליסה** < 24 שעות
- **שימוש ב-AI** > 70% מהפעולות
- **ROI** חיובי תוך 6 חודשים

---

## 📈 תוכנית צמיחה

### שלב 1: MVP (חודשים 1-2)
- פונקציונליות בסיסית
- 10-50 סוכנים
- תמיכה בעברית

### שלב 2: Growth (חודשים 3-6)
- תכונות מתקדמות
- 50-200 סוכנים
- אינטגרציות נוספות

### שלב 3: Scale (חודשים 6-12)
- אופטימיזציה ביצועים
- 200-1000 סוכנים
- תמיכה רב-לשונית
- Mobile Apps

---

**סוף מסמך תכנון** 🎉
