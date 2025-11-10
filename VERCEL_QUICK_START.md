# 🚀 העלאת אתר SeeLD ל-Vercel - מדריך מהיר

## ⚠️ קראו את כל ההוראות לפני שמתחילים!

---

## שלב 1: הרשמה ל-Vercel (2 דקות)

1. **פתח דפדפן חדש וגש ל:**
   ```
   https://vercel.com/signup
   ```

2. **לחץ על "Continue with GitHub"**
   - אם אתה כבר מחובר ל-GitHub, תאושר אוטומטית
   - אם לא, התחבר ל-GitHub

3. **Vercel יבקש הרשאות - לחץ "Authorize Vercel"**
   - זה בטוח ונחוץ כדי ש-Vercel יוכל לגשת לקוד שלך

---

## שלב 2: תן ל-Vercel גישה ל-Repository (חשוב מאוד!)

### אם זו הפעם הראשונה:

1. **ב-Vercel Dashboard, לחץ על "Add New..."**
2. **בחר "Project"**
3. **Vercel יראה לך רשימת repositories**

### אם אתה לא רואה את `seeld-site` ברשימה:

1. **לחץ על "Adjust GitHub App Permissions"** או **"Configure GitHub App"**
2. **בחלון שנפתח מ-GitHub:**
   - גלול למטה עד "Repository access"
   - בחר **"Only select repositories"**
   - לחץ על התפריט הנפתח
   - סמן את **`seeld-site`** ✅
   - לחץ **"Save"** בתחתית העמוד
3. **חזור ל-Vercel** (רענן את העמוד אם צריך)

---

## שלב 3: Import הפרויקט ל-Vercel

1. **ב-Vercel Dashboard, מצא את `seeld-site` ברשימה**
2. **לחץ "Import"**

---

## שלב 4: הגדרות הפרויקט (קריטי!)

### 4.1 Configure Project Settings:

1. **Project Name:** השאר `seeld-site` (או שנה לפי רצונך)

2. **Framework Preset:** Next.js (אמור להיות אוטומטי)

3. **Root Directory - חשוב מאוד!**
   - לחץ על "Edit" ליד Root Directory
   - מחק את הנקודה (`.`)
   - הקלד: **`seeld-next`**
   - Vercel אמור לזהות את Next.js כעת

### 4.2 Build and Output Settings:
אלה אמורים להיות אוטומטיים, אבל וודא:
- Build Command: `npm run build` (או `npm run vercel-build`)
- Output Directory: `.next`
- Install Command: `npm install`

---

## שלב 5: הגדרת Environment Variables

**לחץ על "Add" ליד Environment Variables והוסף:**

### משתנה 1:
- Name: `NEXTAUTH_SECRET`
- Value: `your-temporary-secret-change-later-12345678`
- Environments: בחר את כולם (Production, Preview, Development)

### משתנה 2:
- Name: `NEXTAUTH_URL`
- Value: `https://seeld-site.vercel.app`
  (נשנה אותו אחרי ה-deployment הראשון לדומיין האמיתי)
- Environments: Production בלבד

### משתנה 3 (אופציונלי - רק אם יש לך DB):
- Name: `DATABASE_URL`
- Value: [כתובת מסד הנתונים שלך]
- Environments: בחר את כולם

---

## שלב 6: Deploy! 🚀

1. **לחץ על כפתור "Deploy"** (כחול גדול)
2. **המתן 2-5 דקות**
   - Vercel יריץ:
     - Installing dependencies...
     - Building...
     - Deploying...
3. **כשזה מסיים, תראה "Congratulations!" 🎉**

---

## שלב 7: צפייה באתר

1. **לחץ על "Visit" או על ה-URL שניתן לך**
2. **האתר אמור להיות חי!** 🌐

URL יהיה משהו כמו:
```
https://seeld-site-xyz123.vercel.app
```

---

## שלב 8: חיבור הדומיין SEELD.CO.IL

### 8.1 הוספת הדומיין ב-Vercel:

1. **בתוך הפרויקט ב-Vercel:**
   - לחץ על "Settings" (למעלה)
   - בחר "Domains" מהתפריט בצד
2. **הוסף דומיין:**
   - הקלד: `seeld.co.il`
   - לחץ "Add"
3. **Vercel יראה לך הוראות DNS**

### 8.2 הגדרת DNS אצל רשם הדומיינים:

1. **התחבר לפאנל ניהול הדומיין** (GoDaddy, Namecheap, וכו')
2. **עבור ל-DNS Settings / DNS Management**
3. **הוסף/ערוך רשומות DNS:**

   **אופציה א' (מומלץ):**
   ```
   Type      Name      Value
   ────────────────────────────────────────────
   CNAME     @         cname.vercel-dns.com
   CNAME     www       cname.vercel-dns.com
   ```

   **אופציה ב' (אם CNAME @ לא עובד):**
   ```
   Type      Name      Value
   ────────────────────────────────────────────
   A         @         76.76.21.21
   CNAME     www       cname.vercel-dns.com
   ```

4. **שמור את השינויים**
5. **המתן 10 דקות - 48 שעות** (בדרך כלל כ-30 דקות)

### 8.3 אישור בדומיין ב-Vercel:

1. **חזור ל-Vercel → Settings → Domains**
2. **כשה-DNS מתעדכן, תראה "Valid Configuration" ✅**
3. **לחץ על "Set as Primary Domain"** ליד `seeld.co.il`

### 8.4 עדכון NEXTAUTH_URL:

1. **Vercel → Settings → Environment Variables**
2. **ערוך את `NEXTAUTH_URL`:**
   - שנה ל: `https://seeld.co.il`
3. **שמור ולחץ "Redeploy"**

---

## ✅ סיימת! האתר באוויר!

האתר שלך עכשיו זמין ב:
- ✅ `https://seeld.co.il`
- ✅ `https://www.seeld.co.il` (redirect)

---

## 🔧 פתרון בעיות נפוצות

### בעיה: "No Next.js version detected"
**פתרון:** וודא ש-Root Directory מוגדר ל-`seeld-next` (לא `.` !)

### בעיה: "Failed to compile"
**פתרון:** בדוק את ה-Build Logs ב-Vercel. לרוב זה משתני סביבה חסרים.

### בעיה: "403 Forbidden" בזמן Import
**פתרון:**
1. GitHub → Settings → Integrations → Applications
2. Installed GitHub Apps → Vercel → Configure
3. Repository access → בחר את `seeld-site`
4. Save

### בעיה: הדומיין לא עובד אחרי 24 שעות
**פתרון:**
1. בדוק DNS ב-https://dnschecker.org
2. נקה cache: Ctrl+Shift+R בדפדפן
3. נסה incognito mode

---

## 📞 צריך עזרה?

אם משהו לא עובד:
1. בדוק את ה-**Build Logs** ב-Vercel (Deployments → בחר deployment → View Function Logs)
2. ודא שכל משתני הסביבה מוגדרים
3. נסה **Redeploy** (Deployments → ... → Redeploy)

---

## 🎯 Preview Deployments (תצוגות מקדימה)

מעכשיו, כל פעם שתעשה:
- Push חדש ל-branch
- Pull Request חדש

Vercel יצור אוטומטית **preview deployment** עם URL ייחודי!
זה מאפשר לך לראות שינויים לפני שהם עולים לאתר הראשי.

---

**בהצלחה! 🚀**

*מדריך זה הוכן במיוחד עבור פרויקט SeeLD*
