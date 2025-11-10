import { CheckCircle2, Target, Users, Rocket, TrendingUp } from 'lucide-react'

export function Timeline() {
  const milestones = [
    {
      year: '2023',
      title: 'הקמת הסוכנות',
      description: 'שמוליק מרציאנו מקים את SeeLD עם חזון ברור - לשלב טכנולוגיה מתקדמת בייעוץ פיננסי.',
      icon: Rocket,
      status: 'completed',
    },
    {
      year: '2024',
      title: '600+ לקוחות נרשמו',
      description: 'בשנה הראשונה השגנו אבן דרך משמעותית - מעל 600 לקוחות מרוצים סומכים עלינו.',
      icon: Users,
      status: 'completed',
    },
    {
      year: '2025',
      title: 'פיתוח SeelD AI',
      description: 'השקת המערכת המהפכנית שמגדילה פי 16 את התפוקה. מעבר לעבודה full-time בתחום.',
      icon: Target,
      status: 'current',
    },
    {
      year: '2026+',
      title: 'התרחבות וצמיחה',
      description: 'המשך פיתוח הטכנולוגיה, הרחבת הצוות, והפיכה לשחקן מוביל בשוק הישראלי.',
      icon: TrendingUp,
      status: 'future',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-secondary-500'
      case 'current':
        return 'bg-primary-500 ring-4 ring-primary-200 animate-pulse'
      case 'future':
        return 'bg-neutral-300'
      default:
        return 'bg-neutral-300'
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">המסע שלנו</h2>
          <p className="section-subheading">
            מאיפה התחלנו ולאן אנחנו הולכים
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute right-[31px] top-0 bottom-0 w-0.5 bg-neutral-200" aria-hidden="true"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                const isLast = index === milestones.length - 1

                return (
                  <div key={milestone.year} className="relative flex gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full ${getStatusColor(milestone.status)} flex items-center justify-center z-10`}>
                      {milestone.status === 'completed' ? (
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      ) : (
                        <Icon className="w-8 h-8 text-white" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-12">
                      <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-primary-600">
                            {milestone.year}
                          </span>
                          {milestone.status === 'current' && (
                            <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                              כעת
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
