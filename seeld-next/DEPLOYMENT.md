# 🚀 SeeLD Website - Deployment Guide

## Prerequisites

Before deploying, make sure you have:
- [ ] GitHub account
- [ ] Vercel account (free tier is fine)
- [ ] PostgreSQL database (we'll use Vercel Postgres)

---

## Step 1: Setup Database

### Option A: Vercel Postgres (Recommended - Easiest)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Storage" → "Create Database"
3. Select "Postgres"
4. Choose your region (closest to your users)
5. Click "Create"
6. Copy the connection string (`DATABASE_URL`)

### Option B: Supabase (Free Tier)

1. Go to [Supabase](https://supabase.com)
2. Create new project
3. Wait for database to provision (~2 minutes)
4. Go to Settings → Database
5. Copy connection string under "Connection string" → "URI"

---

## Step 2: Push to GitHub

```bash
# If not already done:
git init
git add .
git commit -m "Ready for deployment"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Method 1: Vercel Dashboard (Easiest)

1. Go to [Vercel](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `seeld-next`
   - **Build Command**: `npm run build`
   - **Output Directory**: Leave empty (default)

5. Add Environment Variables:

```env
# Required
DATABASE_URL=your_postgresql_connection_string

# Optional (for future features)
NEXTAUTH_SECRET=generate_random_string_here
NEXTAUTH_URL=https://your-domain.vercel.app
```

6. Click "Deploy"
7. Wait 2-3 minutes ⏳
8. Done! Your site is live 🎉

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd seeld-next
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? seeld-site
# - Directory? ./
# - Override settings? No

# Add environment variables
vercel env add DATABASE_URL
# Paste your connection string

# Deploy to production
vercel --prod
```

---

## Step 4: Setup Database Schema

After deployment, run Prisma migrations:

```bash
# Install Prisma CLI (if not already)
npm install -g prisma

# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Optional: Open Prisma Studio to verify
npx prisma studio
```

**OR** use Vercel CLI:

```bash
vercel env pull .env
npx prisma db push
```

---

## Step 5: Test Your Deployment

1. Visit your Vercel URL (e.g., `seeld-site.vercel.app`)
2. Navigate to Contact page
3. Fill out the form
4. Submit
5. Check if you see success message ✅

### Verify Database:

```bash
# Open Prisma Studio
npx prisma studio

# Check "Lead" table for your submission
```

---

## Step 6: Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `seeld.co.il`)
4. Follow DNS instructions:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.21.21`
5. Wait for DNS propagation (5-60 minutes)

---

## Environment Variables Reference

### Required:

```env
DATABASE_URL="postgresql://..."
```

### Optional (for future features):

```env
# Authentication
NEXTAUTH_SECRET="your-secret-key-32-chars-min"
NEXTAUTH_URL="https://seeld.co.il"

# Google OAuth (if using)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Claude API (for chatbot)
ANTHROPIC_API_KEY="sk-ant-..."

# Email (Resend)
RESEND_API_KEY="re_..."

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

---

## Troubleshooting

### Build fails with "Cannot find module '@prisma/client'"

```bash
# Run locally:
npx prisma generate
git add .
git commit -m "Add Prisma client"
git push
```

### Database connection fails

1. Check `DATABASE_URL` format:
   ```
   postgresql://user:password@host:5432/database?schema=public
   ```
2. Verify database is accessible
3. Check Vercel logs: Dashboard → Deployments → View Function Logs

### Form doesn't submit

1. Check browser console for errors
2. Verify API route: `/api/leads`
3. Check Vercel Function logs
4. Ensure database is connected

---

## Post-Deployment Checklist

- [ ] Site loads successfully
- [ ] All pages work (Home, About, Services, Contact)
- [ ] Contact form submits successfully
- [ ] Database receives form submissions
- [ ] Mobile responsive works
- [ ] RTL Hebrew displays correctly
- [ ] Images load (if any added)
- [ ] Custom domain works (if configured)

---

## Monitoring & Maintenance

### View Logs:
```bash
vercel logs
```

### Check Analytics:
- Vercel Dashboard → Analytics
- See page views, top pages, etc.

### Update Site:
```bash
git add .
git commit -m "Update content"
git push

# Vercel auto-deploys on push!
```

---

## Cost Estimate

### Free Tier (Perfect for getting started):
- Vercel Hosting: **Free**
- Vercel Postgres: **Free** (256 MB, 60 hours compute/month)
- Bandwidth: **100 GB/month free**

### Production (If scaling):
- Vercel Pro: **$20/month** (optional, more resources)
- Database: **$25/month** (unlimited, more storage)
- **Total: ~$45/month** for full production

---

## Support

If you encounter issues:

1. **Check Vercel Docs**: https://vercel.com/docs
2. **Prisma Docs**: https://www.prisma.io/docs
3. **Next.js Docs**: https://nextjs.org/docs

---

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build locally
npm run build

# Start production server locally
npm start

# Deploy to Vercel
vercel --prod

# View logs
vercel logs

# Pull environment variables
vercel env pull

# Run database migrations
npx prisma db push

# Open database UI
npx prisma studio
```

---

**You're ready to launch! 🚀**

Good luck with your SeeLD website!
