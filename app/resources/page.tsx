import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Calculator, HelpCircle, FileText, TrendingUp, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'משאבים',
  description:
    'מחשבונים פיננסיים, מאמרים מקצועיים, שאלות ותשובות ועוד. כל מה שצריך כדי לקבל החלטות פיננסיות נכונות.',
}

export default function ResourcesPage() {
  const resources = [
    {
      icon: Calculator,
      title: 'מחשבונים פיננסיים',
      description:
        'מחשבונים אינטראקטיביים לחישוב פנסיה, ביטוח, משכנתא ועוד. קבלו תשובות מיידיות לשאלות הפיננסיות שלכם.',
      href: '/resources/calculators',
      color: 'from-primary-400 to-primary-600',
      features: ['מחשבון פנסיה', 'מחשבון ביטוח', 'מחשבון משכנתא'],
    },
    {
      icon: HelpCircle,
      title: 'שאלות ותשובות (FAQ)',
      description:
        'תשובות לשאלות הנפוצות ביותר על פנסיה, ביטוחים, השקעות ותכנון פיננסי. מידע מקצועי בשפה פשוטה.',
      href: '/resources/faq',
      color: 'from-secondary-400 to-secondary-600',
      features: ['פנסיה', 'ביטוחים', 'תכנון פיננסי', 'מערכת SeelD AI'],
    },
    {
      icon: BookOpen,
      title: 'בלוג ומאמרים',
      description:
        'מאמרים מקצועיים, טיפים, וחדשות מעולם הפיננסים. תוכן עדכני שעוזר לכם להבין ולקבל החלטות נכונות.',
      href: '/resources/blog',
      color: 'from-accent-400 to-accent-600',
      features: ['מדריכים מקיפים', 'טיפים שימושיים', 'חדשות ועדכונים'],
    },
  ]

  const latestArticles = [
    {
      title: 'למה רוב הפנסיות לא משתלמות',
      category: 'פנסיה',
      readTime: '5 דקות',
      excerpt: 'גלו איך לבדוק אם הפנסיה שלכם מיטבית ומה אפשר לעשות כדי לשפר.',
      href: '/resources/blog/pension-optimization',
    },
    {
      title: 'המדריך המלא לביטוח משכנתא',
      category: 'ביטוח',
      readTime: '8 דקות',
      excerpt: 'כל מה שצריך לדעת על ביטוח משכנתא - סוגים, מחירים, וטיפים לחיסכון.',
      href: '/resources/blog/mortgage-insurance-guide',
    },
    {
      title: '10 טעויות נפוצות בתכנון פרישה',
      category: 'תכנון פרישה',
      readTime: '6 דקות',
      excerpt: 'הטעויות שאנשים עושים בתכנון לפרישה ואיך להימנע מהן.',
      href: '/resources/blog/retirement-mistakes',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                משאבים פיננסיים
              </h1>
              <p className="text-xl md:text-2xl text-primary-600 font-medium mb-6">
                כל מה שצריך לקבלת החלטות נכונות
              </p>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                מחשבונים, מאמרים, ושאלות ותשובות - כל הכלים והמידע שיעזרו לכם לנהל את
                העתיד הפיננסי שלכם בצורה חכמה.
              </p>
            </div>
          </div>
        </section>

        {/* Main Resources */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <Card
                    key={resource.title}
                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-2">{resource.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {resource.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link href={resource.href}>
                        <Button className="w-full group-hover:shadow-lg transition-shadow">
                          כנס למשאב
                          <ArrowLeft className="mr-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Latest Articles Preview */}
        <section className="section-padding bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                  מאמרים אחרונים
                </h2>
                <p className="text-lg text-neutral-600">
                  תוכן מקצועי שעוזר לכם לקבל החלטות נכונות
                </p>
              </div>
              <Link href="/resources/blog">
                <Button variant="outline">
                  כל המאמרים
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {latestArticles.map((article) => (
                <Card key={article.title} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {article.readTime} קריאה
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2 line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={article.href}>
                      <Button variant="ghost" className="w-full">
                        קרא עוד
                        <ArrowLeft className="mr-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                צריכים ייעוץ מקצועי?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                המשאבים שלנו טובים, אבל ייעוץ אישי עדיף. בואו נדבר.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary-600 hover:bg-neutral-100 shadow-xl"
                >
                  קבע פגישת ייעוץ חינם
                  <ArrowLeft className="mr-2 h-5 w-5" />
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
