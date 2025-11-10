# SeeLD Website

פלטפורמת פיננסים וביטוח מבוססת AI של SeeLD.

## 📁 מבנה הפרויקט

```
seeld-site/
├── seeld-next/          # ← אפליקציית Next.js הראשית (כאן הקוד!)
│   ├── app/            # Next.js App Router
│   ├── components/     # React Components
│   ├── prisma/         # Database Schema
│   └── package.json    # Dependencies
├── ops/                # DevOps & Infrastructure
├── specs/              # Specifications
└── vercel.json         # Vercel Configuration (root)
```

## 🚀 Quick Start

**הקוד נמצא בתיקייה `seeld-next/`!**

```bash
cd seeld-next
npm install
npm run dev
```

## 📖 Documentation

- **[Deployment Guide](DEPLOYMENT_GUIDE.md)** - מדריך העלאה מפורט
- **[Vercel Quick Start](VERCEL_QUICK_START.md)** - מדריך מהיר ל-Vercel
- **[Alternative Deployments](ALTERNATIVE_DEPLOYMENT.md)** - אפשרויות נוספות
- **[Technical README](seeld-next/README.md)** - תיעוד טכני מלא

## ⚙️ Deployment to Vercel

### Important: Root Directory Setting

When deploying to Vercel, you **MUST** set:

```
Root Directory: seeld-next
```

### או השתמש ב-vercel.json (automatic)

The `vercel.json` in the root automatically configures the correct paths.

---

**© 2024 SeeLD. All rights reserved.**
