# מדריך העלאת אתר SeeLD לאוויר 🚀

## סקירה כללית

מדריך זה יעזור לך להעלות את אתר SeeLD ל-Vercel עם תצוגה מקדימה (Preview) ולחבר את הדומיין **SEELD.CO.IL**.

---

## שלב 1: הכנת הפרויקט ✅

הפרויקט כבר מוכן ל-deployment עם:
- ✅ Next.js 16
- ✅ Prisma ORM
- ✅ NextAuth.js לאימות
- ✅ Tailwind CSS v4
- ✅ TypeScript

---

## שלב 2: הרשמה ל-Vercel

### 2.1 צור חשבון Vercel (חינמי)
1. גש לכתובת: https://vercel.com/signup
2. התחבר עם חשבון GitHub שלך (מומלץ)
3. אשר את כתובת המייל

### 2.2 התקן את Vercel CLI (אופציונלי)
```bash
npm install -g vercel
```

---

## שלב 3: העלאת הפרויקט ל-Vercel

### אופציה א': דרך הממשק הגרפי (מומלץ למתחילים)

1. **חבר את ה-Repository:**
   - התחבר ל-Vercel Dashboard: https://vercel.com/dashboard
   - לחץ על "Add New..." → "Project"
   - בחר את ה-repository: `shmulik-marziano/seeld-site`
   - לחץ "Import"

2. **הגדר את הפרויקט:**
   - **Framework Preset:** Next.js (יזוהה אוטומטית)
   - **Root Directory:** `seeld-next`
   - **Build Command:** `npm run vercel-build` (אוטומטי)
   - **Output Directory:** `.next` (אוטומטי)

3. **הגדר משתני סביבה (Environment Variables):**

   לחץ על "Environment Variables" והוסף את המשתנים הבאים:

   ```
   NEXTAUTH_URL=https://your-vercel-url.vercel.app
   NEXTAUTH_SECRET=your-secret-key-here
   DATABASE_URL=postgresql://user:password@host:port/database
   ```

   **חשוב:**
   - `NEXTAUTH_SECRET`: צור מפתח ייחודי עם: `openssl rand -base64 32`
   - `DATABASE_URL`: חבר למסד נתונים (Vercel Postgres / Supabase / PlanetScale)
   - `NEXTAUTH_URL`: יעודכן אוטומטית לאחר ה-deployment הראשון

4. **לחץ על "Deploy"** 🚀

### אופציה ב': דרך ה-CLI

```bash
cd /home/user/seeld-site/seeld-next
vercel

# עקוב אחר ההוראות:
# - Set up and deploy? Yes
# - Which scope? [בחר את החשבון שלך]
# - Link to existing project? No
# - What's your project's name? seeld-site
# - In which directory is your code located? ./
# - Want to override the settings? No
```

---

## שלב 4: הגדרת מסד נתונים

### מומלץ: Vercel Postgres (משולב)

1. בתוך Vercel Dashboard, בחר את הפרויקט
2. לך ל-Storage → Create Database
3. בחר "Postgres" → "Continue"
4. העתק את `DATABASE_URL` שנוצר
5. הוסף אותו ל-Environment Variables

### חלופה: Supabase / PlanetScale

- **Supabase:** https://supabase.com
- **PlanetScale:** https://planetscale.com

לאחר יצירת מסד הנתונים, הרץ:
```bash
npx prisma migrate deploy
npx prisma db seed  # אם יש seed data
```

---

## שלב 5: חיבור הדומיין SEELD.CO.IL 🌐

### 5.1 הגדרת DNS אצל רשם הדומיינים

1. **התחבר לפאנל ניהול הדומיין** (אצל הרשם שלך - לדוגמה: GoDaddy, Namecheap, וכו')

2. **הוסף רשומות DNS הבאות:**

   ```
   Type    Name              Value
   ─────────────────────────────────────────────────
   A       @                 76.76.21.21
   CNAME   www              cname.vercel-dns.com
   ```

   **או (אלטרנטיבה - מומלץ יותר):**
   ```
   Type    Name              Value
   ─────────────────────────────────────────────────
   CNAME   @                cname.vercel-dns.com
   CNAME   www              cname.vercel-dns.com
   ```

3. **שמור את השינויים**

### 5.2 הוספת הדומיין ב-Vercel

1. בתוך Vercel Dashboard, בחר את הפרויקט
2. לך ל-Settings → Domains
3. לחץ "Add Domain"
4. הזן: `seeld.co.il`
5. לחץ "Add"
6. Vercel יבדוק את ה-DNS ויאשר את הדומיין (עשוי לקחת עד 48 שעות, אך בדרך כלל כמה דקות)

7. **חזור על התהליך ל-www:**
   - הוסף גם: `www.seeld.co.il`

### 5.3 הגדרת הפניה (Redirect)

1. בתוך Domains, הגדר את `seeld.co.il` כ-Primary Domain
2. הגדר redirect מ-`www.seeld.co.il` ל-`seeld.co.il`

---

## שלב 6: תצוגה מקדימה (Preview Deployments) 👀

Vercel יוצר אוטומטית תצוגה מקדימה לכל:
- ✅ Pull Request חדש
- ✅ Push ל-branch שאינו main

### איך זה עובד:

1. **צור branch חדש:**
   ```bash
   git checkout -b feature/new-design
   ```

2. **עשה שינויים ו-push:**
   ```bash
   git add .
   git commit -m "Update homepage design"
   git push origin feature/new-design
   ```

3. **Vercel יצור deployment אוטומטי:**
   - תקבל URL ייעודי: `seeld-site-xyz123.vercel.app`
   - תוכל לראות את השינויים לפני merge
   - כל commit חדש = deployment חדש

4. **לאחר merge ל-main:**
   - הגרסה תעלה אוטומטית לדומיין הראשי: `seeld.co.il`

---

## שלב 7: עדכון משתני סביבה

לאחר ה-deployment הראשון, עדכן את `NEXTAUTH_URL`:

1. Vercel Dashboard → Settings → Environment Variables
2. ערוך את `NEXTAUTH_URL`:
   ```
   NEXTAUTH_URL=https://seeld.co.il
   ```
3. לחץ "Save"
4. Redeploy את הפרויקט (Deployments → ... → Redeploy)

---

## שלב 8: בדיקת הפעלה 🎯

1. **בדוק את האתר:**
   - https://seeld.co.il
   - https://www.seeld.co.il

2. **בדוק את הפונקציות:**
   - ✅ טעינת דפים
   - ✅ טופס יצירת קשר
   - ✅ התחברות (Agent/Client Portal)
   - ✅ API endpoints

3. **בדוק ב-Mobile:**
   - Chrome DevTools → Device Toolbar
   - או דרך מכשיר אמיתי

---

## פתרון בעיות נפוצות 🔧

### בעיה: Build נכשל
```
Error: @prisma/client did not initialize
```
**פתרון:** וודא ש-`DATABASE_URL` מוגדר ב-Environment Variables

### בעיה: הדומיין לא עובד
**פתרון:**
1. בדוק ש-DNS מוגדר נכון (עשוי לקחת עד 48 שעות)
2. השתמש ב-https://dnschecker.org לבדיקה
3. נקה cache: `Ctrl+Shift+R`

### בעיה: NextAuth לא עובד
**פתרון:**
1. וודא ש-`NEXTAUTH_URL` תואם לדומיין הנוכחי
2. וודא ש-`NEXTAUTH_SECRET` מוגדר
3. בדוק שה-DATABASE מחובר

---

## משאבים נוספים 📚

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Custom Domains on Vercel](https://vercel.com/docs/concepts/projects/custom-domains)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

## תמיכה 💬

אם נתקלת בבעיות, בדוק:
1. Vercel Dashboard → Logs
2. Build logs לשגיאות
3. Runtime logs לבעיות production

---

**מוכן להשקה! 🎉**

הצלחה עם האתר החדש של SeeLD! 🚀
