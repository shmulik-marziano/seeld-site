import { Users, Zap, Clock, TrendingUp } from 'lucide-react'

export function SocialProof() {
  const stats = [
    {
      icon: Users,
      value: '600+',
      label: 'לקוחות מרוצים',
      subLabel: 'Happy Clients',
    },
    {
      icon: Zap,
      value: '16x',
      label: 'תפוקה גבוהה',
      subLabel: 'Productivity',
    },
    {
      icon: Clock,
      value: '80%',
      label: 'חיסכון בזמן',
      subLabel: 'Time Saved',
    },
    {
      icon: TrendingUp,
      value: '100%',
      label: 'שקיפות מלאה',
      subLabel: 'Transparency',
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white border-y border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium text-neutral-700">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-500">{stat.subLabel}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
