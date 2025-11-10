import { Brain, TrendingUp, Shield, Eye } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export function WhySeeLD() {
  const reasons = [
    {
      icon: Brain,
      title: 'AI-Native Architecture',
      description:
        'לא הוספנו AI למערכת ישנה - בנינו מאפס עם בינה מלאכותית בליבה',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      icon: TrendingUp,
      title: 'From Money Backwards',
      description:
        'מתחילים מעקיבת עמלות בזמן אמת, בונים אחורה לרכישת לקוח',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-100',
    },
    {
      icon: Shield,
      title: 'Human + AI',
      description:
        'הטכנולוגיה עושה 80% מהעבודה, המומחים שלנו מספקים 100% מהערך',
      color: 'text-accent-600',
      bgColor: 'bg-accent-100',
    },
    {
      icon: Eye,
      title: 'Complete Transparency',
      description:
        'כל פוליסה, כל עמלה, כל המלצה - שקופים ומוסברים לחלוטין',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">למה SeeLD שונה?</h2>
          <p className="section-subheading">
            ארבעה דברים שמבדילים אותנו מהשאר
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <Card key={reason.title} className="border-2 hover:border-primary-200 transition-colors">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${reason.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${reason.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{reason.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {reason.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
