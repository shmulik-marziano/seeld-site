import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Zap, Users, Gem, Rocket } from 'lucide-react'

export function OurValues() {
  const values = [
    {
      icon: Zap,
      title: 'יעילות',
      hebrew: 'Efficiency',
      description: 'זמן הוא המשאב היקר ביותר - שלנו ושלכם. אנחנו מחויבים למקסם כל דקה.',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'אנשים קודם',
      hebrew: 'People First',
      description: 'הטכנולוגיה משרתת את האנשים, לא להפך. כל החלטה שלנו מתחילה מהלקוח.',
      color: 'secondary',
    },
    {
      icon: Gem,
      title: 'שקיפות מוחלטת',
      hebrew: 'Complete Transparency',
      description: 'אין עמלות נסתרות, אין אג\'נדה נסתרת. הכל על השולחן, תמיד.',
      color: 'accent',
    },
    {
      icon: Rocket,
      title: 'חדשנות מתמדת',
      hebrew: 'Continuous Innovation',
      description: 'תמיד מחפשים דרכים טובות יותר. הטכנולוגיה מתקדמת - גם אנחנו.',
      color: 'primary',
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return { bg: 'bg-primary-100', text: 'text-primary-600', border: 'border-primary-200' }
      case 'secondary':
        return { bg: 'bg-secondary-100', text: 'text-secondary-600', border: 'border-secondary-200' }
      case 'accent':
        return { bg: 'bg-accent-100', text: 'text-accent-600', border: 'border-accent-200' }
      default:
        return { bg: 'bg-primary-100', text: 'text-primary-600', border: 'border-primary-200' }
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">הערכים שלנו</h2>
          <p className="section-subheading">
            ארבעה עקרונות המנחים אותנו בכל יום
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon
            const colors = getColorClasses(value.color)

            return (
              <Card
                key={value.title}
                className={`border-2 ${colors.border} hover:shadow-xl transition-shadow`}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <CardTitle className="text-xl mb-1">
                    {value.title}
                  </CardTitle>
                  <p className="text-sm text-neutral-500 mb-3">{value.hebrew}</p>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
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
