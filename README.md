# SeeLD Finance & Insurance - Website

**AI Powered By UMN**

A modern, AI-powered financial services and insurance platform built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 📖 Deployment Guides

- **[Vercel Quick Start](VERCEL_QUICK_START.md)** - מדריך מהיר ל-Vercel בעברית
- **[Full Deployment Guide](DEPLOYMENT_GUIDE.md)** - מדריך מפורט
- **[Alternative Options](ALTERNATIVE_DEPLOYMENT.md)** - חלופות deployment

## 📦 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/ui
- **Database:** Prisma ORM + PostgreSQL
- **Authentication:** NextAuth.js
- **Icons:** Lucide React

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shmulik-marziano/seeld-site)

### Environment Variables

```env
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-secret-here
DATABASE_URL=postgresql://...
```

Generate secret: `openssl rand -base64 32`

## 📁 Project Structure

```
seeld-site/
├── app/              # Next.js App Router
├── components/       # React Components
├── lib/             # Utilities & Helpers
├── prisma/          # Database Schema
├── public/          # Static Assets
└── types/           # TypeScript Types
```

## 🔧 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

- ✅ RTL (Right-to-Left) Hebrew support
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized
- ✅ Type-safe with TypeScript
- ✅ Modern UI with Tailwind CSS v4
- ✅ Database with Prisma ORM
- ✅ Authentication ready

## 🤝 Contributing

This is a private project for SeeLD Finance & Insurance.

## 📄 License

ISC © 2024 Shmulik Marziano - SeeLD Finance & Insurance

---

**Built with ❤️ using Next.js, TypeScript, and AI**

*העתיד של הייעוץ הפיננסי כבר כאן*
