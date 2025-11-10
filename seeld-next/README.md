# SeeLD Finance & Insurance - Website

**ai PowerD By UMN**

A modern, AI-powered financial services and insurance platform built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### Completed (Phase 1 & 2)
- ✅ Next.js 14 with App Router and TypeScript
- ✅ Tailwind CSS v4 with custom pastel color scheme
- ✅ Shadcn/ui component library
- ✅ Prisma ORM with PostgreSQL schema
- ✅ RTL (Right-to-Left) support for Hebrew
- ✅ Responsive design (mobile-first)
- ✅ Complete Home page with:
  - Hero section with animated background
  - Social proof stats
  - Three business pillars (Individuals, Agents, SeelD AI)
  - Why SeeLD differentiators
  - How It Works process
  - Testimonials carousel
  - CTA section
- ✅ Header with navigation and mobile menu
- ✅ Footer with newsletter signup

### In Progress (Phase 2)
- 🔄 About Us page
- 🔄 Services pages (Individuals, Agents, SeelD AI)
- 🔄 Resources pages (Blog, FAQ, Calculators)
- 🔄 Contact page

### Upcoming (Phase 3-5)
- ⏳ Contact forms with validation
- ⏳ Financial calculators (Pension, Insurance, Mortgage)
- ⏳ AI Chatbot (Ra'am) with Claude API
- ⏳ Email automation (Resend)
- ⏳ Analytics (Google Analytics 4)
- ⏳ Authentication (NextAuth.js)
- ⏳ Client Portal (Dashboard, Portfolio, Documents, Messages, Meetings)
- ⏳ SEO optimization
- ⏳ Performance optimization
- ⏳ Accessibility (WCAG 2.1 AA)

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Database:** PostgreSQL (via Prisma)
- **Authentication:** NextAuth.js (planned)
- **AI:** Anthropic Claude API (planned)
- **Email:** Resend (planned)
- **Deployment:** Vercel

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (for production)

### Installation

1. **Clone the repository:**
   ```bash
   cd seeld-next
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your configuration:
   ```env
   DATABASE_URL="postgresql://..."
   NEXTAUTH_SECRET="your-secret-key"
   ANTHROPIC_API_KEY="your-claude-api-key"
   RESEND_API_KEY="your-resend-key"
   # ... etc
   ```

4. **Set up the database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
seeld-next/
├── app/                          # Next.js App Router
│   ├── (portal)/                # Protected client portal routes
│   │   ├── dashboard/
│   │   ├── portfolio/
│   │   ├── documents/
│   │   ├── messages/
│   │   └── meetings/
│   ├── about/                   # About Us page
│   ├── services/                # Services pages
│   │   ├── individuals/
│   │   ├── agents/
│   │   └── seeld-ai/
│   ├── resources/               # Resources
│   │   ├── blog/
│   │   ├── calculators/
│   │   └── faq/
│   ├── contact/                 # Contact page
│   ├── api/                     # API routes
│   │   ├── auth/
│   │   ├── leads/
│   │   ├── chat/
│   │   └── email/
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/
│   ├── ui/                      # Shadcn/ui components
│   ├── layout/                  # Header, Footer
│   ├── home/                    # Home page sections
│   ├── forms/                   # Form components
│   ├── calculators/             # Calculator components
│   └── chat/                    # Chatbot component
├── lib/
│   ├── prisma.ts                # Prisma client
│   └── utils.ts                 # Utility functions
├── prisma/
│   └── schema.prisma            # Database schema
├── public/                      # Static assets
└── types/                       # TypeScript types
```

## 🎨 Design System

### Color Palette (Pastel & Trustworthy)

**Primary (Turquoise):**
- 50-500: #E0F7FA → #00BCD4
- Represents: Trust, clarity, technology

**Secondary (Green):**
- 50-500: #E8F5E9 → #4CAF50
- Represents: Growth, money, health

**Accent (Purple):**
- 50-500: #F3E5F5 → #9C27B0
- Represents: Innovation, AI, premium

**Neutral:**
- 50-900: #FAFAFA → #212121
- For text, backgrounds, borders

### Typography

- **Headings:** Assistant (Google Fonts)
- **Body:** Heebo (Google Fonts)
- Both fonts support Hebrew and Latin

### Components

All components follow Shadcn/ui patterns with custom styling for:
- Buttons (primary, secondary, outline, ghost)
- Cards with hover effects
- Inputs with focus states
- Responsive layouts

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Production build
npm run start        # Start production server

# Database
npx prisma studio    # Open Prisma Studio
npx prisma generate  # Generate Prisma Client
npx prisma db push   # Push schema to database
npx prisma migrate dev  # Create migrations

# Linting
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

**📖 למדריך מפורט בעברית, ראה:** [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md)

#### צעדים מהירים:

1. Push your code to GitHub
2. Import project in Vercel
3. Set **Root Directory** to: `seeld-next`
4. Set environment variables in Vercel dashboard
5. Deploy! 🚀

Vercel will automatically detect Next.js and configure everything.

#### חיבור דומיין SEELD.CO.IL:
1. בתוך Vercel Dashboard → Settings → Domains
2. הוסף: `seeld.co.il` ו-`www.seeld.co.il`
3. עדכן DNS records אצל רשם הדומיינים
4. המתן לאישור (כמה דקות עד 48 שעות)

### Environment Variables for Production

Make sure to set these in Vercel:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`
- `NEXTAUTH_URL` - Your domain: `https://seeld.co.il`
- `ANTHROPIC_API_KEY` (optional - for AI features)
- `RESEND_API_KEY` (optional - for email)
- `NEXT_PUBLIC_GA_ID` (optional - Google Analytics)

## 📝 Database Schema

The database includes models for:
- **User** - Client/Agent/Admin accounts
- **Portfolio** - Client investment portfolios
- **Policy** - Insurance policies
- **Document** - Uploaded documents
- **Message** - Chat messages
- **Meeting** - Scheduled meetings
- **Lead** - Contact form submissions
- **BlogPost** - Blog articles

See `prisma/schema.prisma` for the complete schema.

## 🤝 Contributing

This is a private project for SeeLD Finance & Insurance.

## 📄 License

ISC © 2025 Shmulik Marziano - SeeLD Finance & Insurance

## 🎯 Business Model

SeeLD operates with 3 revenue streams:

1. **Financial & Insurance Agency** - B2C services for individuals
2. **Brokerage House** - B2B infrastructure for independent agents
3. **SeelD AI System** - Revolutionary AI platform for 16x productivity

---

**Built with ❤️ using Next.js, TypeScript, and AI**

*העתיד של הייעוץ הפיננסי כבר כאן*
