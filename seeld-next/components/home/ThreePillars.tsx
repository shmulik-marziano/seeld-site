import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users2, Handshake, Bot, ArrowLeft } from 'lucide-react'

export function ThreePillars() {
  const pillars = [
    {
      icon: Users2,
      title: 'שירותי ייעוץ לפרטיים',
      description:
        'תכנון פנסיוני, פיננסי ופרישה מותאם אישית. אנחנו לא רק מוכרים פוליסות - אנחנו מתכננים את העתיד שלכם.',
      href: '/services/individuals',
      ctaText: 'למד עוד',
      gradient: 'from-primary-400 to-primary-600',
    },
    {
      icon: Handshake,
      title: 'בית סוכן לסוכנים',
      description:
        'תשתית מלאה לסוכני ביטוח עצמאיים. תתמקדו במה שאתם אוהבים - אנחנו נדאג לשאר.',
      href: '/services/agents',
      ctaText: 'הצטרף אלינו',
      gradient: 'from-secondary-400 to-secondary-600',
    },
    {
      icon: Bot,
      title: 'מערכת SeelD AI',
      description:
        'פלטפורמה מהפכנית המגדילה פי 16 את התפוקה. ארכיטקטורה ייחודית שמתחילה מהכסף ובונה אחורה.',
      href: '/services/seeld-ai',
      ctaText: 'ראה הדגמה',
      gradient: 'from-accent-400 to-accent-600',
    },
  ]

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">השירותים שלנו</h2>
          <p className="section-subheading">
            שלושה מסלולים לעתיד פיננסי מאובטח
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Card
                key={pillar.title}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{pillar.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={pillar.href} className="w-full">
                    <Button variant="ghost" className="w-full group-hover:bg-primary-50">
                      {pillar.ctaText}
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
