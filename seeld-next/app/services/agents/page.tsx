import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ServiceHero } from '@/components/services/ServiceHero'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X, Handshake, Building2, Bot, GraduationCap, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'שירותים לסוכנים',
  description:
    'בית סוכן מלא עם תשתית, בק אופיס אוטומטי, SeelD AI, וכלי שיווק. תתמקדו במכירות - אנחנו נדאג לשאר.',
}

export default function AgentsPage() {
  const painPoints = [
    '80% מהזמן שלך הולך על ניירת, לא על לקוחות?',
    'מאבד עמלות כי לא עוקב נכון?',
    'הלקוחות שלך לא מקבלים שירות כי אתה טרוד בבק אופיס?',
    'חולם על יום שבו תתמקד רק במכירות ובאנשים?',
  ]

  const pillars = [
    {
      icon: Building2,
      title: 'תשתית מלאה',
      description: 'משרד/עמדת עבודה, מערכות ניהול, גישה לחברות ביטוח, תמיכה משפטית',
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: Bot,
      title: 'בק אופיס אוטומטי',
      description: 'SeelD AI עושה את העבודה - עקיבת עמלות, ניהול מסמכים, תזכורות ומעקבים',
      color: 'from-secondary-400 to-secondary-600',
    },
    {
      icon: TrendingUp,
      title: 'כלי שיווק',
      description: 'אתרי נחיתה, תוכן לרשתות, מערכת CRM, קמפיינים מוכנים',
      color: 'from-accent-400 to-accent-600',
    },
    {
      icon: GraduationCap,
      title: 'הכשרה ותמיכה',
      description: 'מנטורינג, הדרכות, קהילת סוכנים, תמיכה 24/7',
      color: 'from-primary-400 to-primary-600',
    },
  ]

  const tiers = [
    {
      name: 'Starter',
      subtitle: 'סוכן התחלתי',
      price: '₪500',
      period: 'לחודש',
      features: [
        { text: 'CRM בסיסי', included: true },
        { text: 'עקיבת עמלות', included: true },
        { text: 'עד 10 לקוחות פעילים', included: true },
        { text: 'תמיכה במייל', included: true },
        { text: 'Ra\'am AI Assistant', included: false },
        { text: 'כלי שיווק', included: false },
        { text: 'תמיכה עדיפות', included: false },
      ],
      cta: 'התחל ניסיון חינם',
      highlighted: false,
    },
    {
      name: 'Professional',
      subtitle: 'סוכן מנוסה',
      price: '₪1,500',
      period: 'לחודש',
      features: [
        { text: 'SeelD AI מלא', included: true },
        { text: 'לקוחות ללא הגבלה', included: true },
        { text: 'Ra\'am AI Assistant', included: true },
        { text: 'כלי שיווק מתקדמים', included: true },
        { text: 'תמיכה עדיפות', included: true },
        { text: 'דשבורד אנליטיקה', included: true },
        { text: 'אינטגרציות מותאמות', included: false },
      ],
      cta: 'התחל ניסיון חינם',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      subtitle: 'צוות/בית סוכן',
      price: 'מותאם',
      period: 'אישית',
      features: [
        { text: 'כל מה ש-Pro כולל', included: true },
        { text: 'ניהול רב-סוכנים', included: true },
        { text: 'אינטגרציות מותאמות', included: true },
        { text: 'מנהל הצלחה ייעודי', included: true },
        { text: 'הדרכות צוות', included: true },
        { text: 'דוחות מתקדמים', included: true },
        { text: 'תמיכה 24/7', included: true },
      ],
      cta: 'צור קשר',
      highlighted: false,
    },
  ]

  const process = [
    { step: '1', title: 'מלא טופס', description: 'טופס מועמדות קצר' },
    { step: '2', title: 'שיחת היכרות', description: 'נכיר, נבין את הצרכים' },
    { step: '3', title: 'אימות רישיון', description: 'בדיקת תקינות' },
    { step: '4', title: 'הדרכה', description: 'הכירו את המערכת' },
    { step: '5', title: 'התחל לעבוד!', description: 'אתה מוכן' },
  ]

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="בית סוכן לסוכנים"
          subtitle="תפסיקו לעבוד אדמין, תתחילו למכור"
          description="הצטרפו לבית הסוכן שבו AI עושה את העבודה השחורה. תתמקדו במה שאתם אוהבים - אנחנו נדאג לשאר."
          icon={Handshake}
          gradient="from-secondary-400 to-secondary-600"
        />

        {/* Pain Points */}
        <section className="py-12 bg-white border-y border-neutral-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-neutral-900">
                מכיר את התחושות האלה?
              </h2>
              <div className="space-y-4">
                {painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-lg text-neutral-700">{point}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-xl font-medium text-primary-600 mt-8">
                אתה לא לבד. כל סוכן מרגיש ככה.
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="section-padding bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading">אנחנו נדאג לכל השאר</h2>
              <p className="section-subheading">
                ארבעה עמודים שמשחררים אותך לעבוד
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <Card key={pillar.title} className="hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{pillar.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {pillar.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading">בחרו את החבילה המתאימה לכם</h2>
              <p className="section-subheading">
                כל החבילות כוללות ניסיון חינם ל-14 יום
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {tiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`relative ${
                    tier.highlighted
                      ? 'border-2 border-primary-500 shadow-2xl scale-105'
                      : 'border border-neutral-200'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 right-1/2 translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-sm font-bold rounded-full">
                      מומלץ ביותר
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-1">{tier.name}</CardTitle>
                    <p className="text-sm text-neutral-600 mb-4">{tier.subtitle}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-neutral-900">
                        {tier.price}
                      </span>
                      <span className="text-neutral-600 mr-2">{tier.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-neutral-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={
                              feature.included
                                ? 'text-neutral-700'
                                : 'text-neutral-400'
                            }
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className="w-full"
                        variant={tier.highlighted ? 'default' : 'outline'}
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-gradient-pastel">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading">איך מצטרפים?</h2>
              <p className="section-subheading">תהליך פשוט ומהיר</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {process.map((item, index) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-2 border-4 border-primary-500">
                      <span className="text-2xl font-bold text-primary-600">
                        {item.step}
                      </span>
                    </div>
                    <p className="font-bold text-neutral-900">{item.title}</p>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block w-12 h-0.5 bg-primary-300" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact">
                <Button size="lg">
                  הגש מועמדות עכשיו
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
