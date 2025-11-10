import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ServiceHero } from '@/components/services/ServiceHero'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Bot,
  Coins,
  FileText,
  Search,
  MessageSquare,
  BarChart3,
  Bell,
  Zap,
  TrendingUp,
  Users,
  ArrowLeft,
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'מערכת SeelD AI',
  description:
    'המערכת שמגדילה סוכן אחד ל-16. ארכיטקטורה ייחודית שמתחילה מהכסף ובונה אחורה. AI-Native, לא Bolt-On.',
}

export default function SeelDAIPage() {
  const problems = [
    {
      stat: '85%',
      label: 'מזמן הסוכן',
      description: 'עבודה אדמיניסטרטיבית',
      color: 'text-red-500',
    },
    {
      stat: '30%',
      label: 'מהעמלות',
      description: 'אובדות בגלל מעקב ידני',
      color: 'text-red-500',
    },
    {
      stat: '48h',
      label: 'זמן ממוצע',
      description: 'לענות ללקוח',
      color: 'text-red-500',
    },
    {
      stat: '0%',
      label: 'שקיפות',
      description: 'בתהליך',
      color: 'text-red-500',
    },
  ]

  const uniqueProps = [
    {
      number: '1',
      title: 'מהכסף אחורה (From Money Backwards)',
      description:
        'רוב המערכות מתחילות מהלקוח. אנחנו מתחילים מהעמלה ועוקבים אחורה. למה? כי העמלה היא האמת.',
      diagram: 'עמלה → פוליסה → לקוח → ליד',
      color: 'from-primary-400 to-primary-600',
    },
    {
      number: '2',
      title: 'AI-Native, לא Bolt-On',
      description:
        'לא הוספנו צ\'אטבוט למערכת ישנה. בנינו מאפס עם AI בליבה של הארכיטקטורה.',
      color: 'from-secondary-400 to-secondary-600',
    },
    {
      number: '3',
      title: '16x Productivity',
      description:
        'סוכן אחד + SeelD AI = תפוקה של 16 סוכנים רגילים. לא אגדה. מתמטיקה.',
      calculation: '1 סוכן × SeelD AI = 16 סוכנים',
      color: 'from-accent-400 to-accent-600',
    },
  ]

  const features = [
    {
      icon: Coins,
      title: 'Commission Intelligence',
      description: 'עקיבת עמלות בזמן אמת עם אינטגרציה בנקאית, זיהוי הזדמנויות, חיזוי הכנסות.',
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: Bot,
      title: 'Ra\'am AI Assistant',
      description: 'תקשורת 24/7 עם לקוחות, איסוף מסמכים אוטומטי, מענה לשאלות, תזמון פגישות.',
      color: 'from-secondary-400 to-secondary-600',
    },
    {
      icon: FileText,
      title: 'Smart Forms',
      description: 'מילוי אוטומטי, חתימה אלקטרונית, שליחה ישירה למבטחים, מעקב סטטוס.',
      color: 'from-accent-400 to-accent-600',
    },
    {
      icon: Search,
      title: 'Portfolio Analyzer',
      description: 'סריקת כיסויים, זיהוי פערים, חישוב הזדמנויות חיסכון, הכנת חומרים לפגישה.',
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: BarChart3,
      title: 'Command Center',
      description: 'דשבורד סוכן, מחזור חיי לקוח, אנליטיקת הכנסות, אוטומציה, התראות הזדמנויות.',
      color: 'from-secondary-400 to-secondary-600',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'לעולם לא תפספס הזדמנות - התראות פרואקטיביות על בסיס AI.',
      color: 'from-accent-400 to-accent-600',
    },
  ]

  const workflow = [
    { step: 'ליד חדש נכנס למערכת', icon: Users },
    { step: 'Ra\'am מזהה ואוסף מסמכים', icon: Bot },
    { step: 'AI מנתח תיק', icon: Search },
    { step: 'הסוכן בודק ומאשר', icon: FileText },
    { step: 'הכנה אוטומטית לפגישה', icon: MessageSquare },
    { step: 'הסוכן פוגש לקוח (טאץ\' אנושי)', icon: Users },
    { step: 'טפסים ממולאים ונשלחים', icon: FileText },
    { step: 'עמלה נעקבת אוטומטית', icon: Coins },
    { step: 'מעקב שוטף ו-upsells', icon: TrendingUp },
  ]

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="מערכת SeelD AI"
          subtitle="המערכת שמגדילה סוכן אחד ל-16"
          description="ארכיטקטורה ייחודית שמתחילה מהכסף ובונה אחורה. לא עוד כלי - מהפכה אמיתית."
          icon={Bot}
          gradient="from-accent-400 to-accent-600"
        />

        {/* The Problem */}
        <section className="py-12 bg-white border-y border-neutral-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-neutral-900">
              למה התעשייה תקועה בשנות ה-90?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {problems.map((problem) => (
                <div key={problem.label} className="text-center p-6 bg-red-50 rounded-xl">
                  <div className={`text-4xl font-bold ${problem.color} mb-2`}>
                    {problem.stat}
                  </div>
                  <p className="text-sm font-medium text-neutral-900 mb-1">
                    {problem.label}
                  </p>
                  <p className="text-xs text-neutral-600">{problem.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-neutral-600 mt-8 max-w-2xl mx-auto">
              זה לא בגלל שהסוכנים רעים. זה בגלל שהמערכות גרועות.
            </p>
          </div>
        </section>

        {/* Unique Props */}
        <section className="section-padding bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading">SeelD AI - לא עוד כלי. מהפכה.</h2>
              <p className="section-subheading">שלושה דברים שמבדילים אותנו</p>
            </div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {uniqueProps.map((prop) => (
                <Card key={prop.number} className="overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${prop.color}`} />
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${prop.color} flex items-center justify-center text-white font-bold text-xl`}>
                        {prop.number}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-3">{prop.title}</CardTitle>
                        <CardDescription className="text-lg leading-relaxed mb-4">
                          {prop.description}
                        </CardDescription>
                        {prop.diagram && (
                          <div className="inline-block px-4 py-2 bg-neutral-100 rounded-lg font-mono text-sm">
                            {prop.diagram}
                          </div>
                        )}
                        {prop.calculation && (
                          <div className="inline-block px-4 py-2 bg-primary-50 rounded-lg font-bold text-primary-600">
                            {prop.calculation}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading">היכולות של המערכת</h2>
              <p className="section-subheading">6 מודולים עוצמתיים</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-gradient-pastel">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading">איך זה עובד?</h2>
              <p className="section-subheading">מליד לעמלה - אוטומטי</p>
            </div>

            <div className="max-w-3xl mx-auto">
              {workflow.map((step, index) => {
                const Icon = step.icon
                const isLast = index === workflow.length - 1

                return (
                  <div key={index} className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-primary-500">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1 bg-white p-4 rounded-lg shadow">
                        <p className="text-lg font-medium text-neutral-900">{step.step}</p>
                      </div>
                    </div>
                    {!isLast && (
                      <div className="absolute right-[23px] top-12 w-0.5 h-6 bg-primary-300" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                מוכנים לחוות את המהפכה?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                בקש הדגמה חיה או הורד את ה-Pitch Deck
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto min-w-[200px] bg-white text-primary-600 hover:bg-neutral-100 shadow-xl"
                  >
                    בקש הדגמה חיה
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pitch-deck.pdf">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto min-w-[200px] border-2 border-white text-white hover:bg-white/10"
                  >
                    הורד Pitch Deck
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-white/70 mt-6">
                למשקיעים: שוק של $92.6B, טרקשן מוכח, צוות מנוסה
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
