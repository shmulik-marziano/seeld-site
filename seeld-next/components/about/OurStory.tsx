import Image from 'next/image'

export function OurStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              הכל התחיל מתסכול אמיתי...
            </h2>

            <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
              <p>
                שמי שמוליק מרציאנו, ואני מאמין שכל אדם ראוי לייעוץ פיננסי איכותי ושקוף.
              </p>

              <p>
                הרקע שלי בציוד אודיו פרימיום לימד אותי שתשומת לב לפרטים והקשבה אמיתית
                ללקוח הם המפתח להצלחה. כשעברתי לתחום השירותים הפיננסיים, גיליתי משהו
                מטריד - סוכנים טובים טובעים בניירת במקום לעזור ללקוחות.
              </p>

              <p>
                ראיתי איך 80% מהזמן הולך על עבודה אדמיניסטרטיבית, איך עמלות הולכות
                לאיבוד בגלל מעקב ידני, ואיך לקוחות לא מקבלים את השירות שמגיע להם.
              </p>

              <p>
                <strong>אז שאלתי את עצמי:</strong> מה אם הבינה המלאכותית תוכל לעשות את
                העבודה השחורה?
              </p>

              <p>
                בשנה הראשונה בנינו בסיס של <strong className="text-primary-600">600+
                לקוחות מרוצים</strong>. אבל ידעתי שאפשר יותר. החלטתי לעבור full-time
                לשירותים פיננסיים וליצור את SeelD AI - מערכת שמאפשרת לכל סוכן להיות
                פרודקטיבי פי 16.
              </p>

              <p className="text-primary-600 font-medium text-xl">
                היום אנחנו לא רק סוכנות ביטוח. אנחנו מהפכה טכנולוגית בתעשייה שתקועה
                בשנות ה-90.
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 flex items-center justify-center p-8">
              {/* Placeholder for photo - replace with actual image */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center mb-6">
                  <span className="text-8xl">👨‍💼</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  שמוליק מרציאנו
                </h3>
                <p className="text-lg text-neutral-600">
                  מייסד ומנכ"ל SeeLD
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  ai PowerD By UMN
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
