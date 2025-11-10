import { Calendar, Search, FileCheck, ArrowDown } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      number: '1',
      title: 'קבע פגישה',
      description: 'שיחת ייעוץ חינם בת 30 דקות. אנחנו מקשיבים, מבינים, שואלים.',
    },
    {
      icon: Search,
      number: '2',
      title: 'ניתוח AI',
      description:
        'המערכת שלנו מנתחת את התיק הקיים שלך, מזהה פערים והזדמנויות לחיסכון.',
    },
    {
      icon: FileCheck,
      number: '3',
      title: 'תכנית מותאמת',
      description:
        'מקבלים תכנית פעולה מפורטת + מעקב שוטף. אנחנו לא נעלמים אחרי החתימה.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-pastel">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">איך זה עובד?</h2>
          <p className="section-subheading">
            שלושה שלבים פשוטים לעתיד פיננסי מאובטח
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1

            return (
              <div key={step.number}>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                  {/* Icon and Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-primary-500">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow between steps */}
                {!isLast && (
                  <div className="flex justify-center my-4">
                    <ArrowDown className="w-8 h-8 text-primary-400" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
