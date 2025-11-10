import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LucideIcon, Check } from 'lucide-react'
import Link from 'next/link'

export interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  process: string[]
  pricing: string
  gradient: string
}

interface ServicesGridProps {
  services: ServiceItem[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Icon & Title */}
                <div className={isEven ? '' : 'md:col-start-2'}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-white rounded-lg border-2 border-primary-200">
                    <p className="text-sm font-medium text-neutral-700 mb-1">
                      תמחור:
                    </p>
                    <p className="text-base text-neutral-900">
                      {service.pricing}
                    </p>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="w-full md:w-auto">
                      קבע ייעוץ חינם
                    </Button>
                  </Link>
                </div>

                {/* Features & Process */}
                <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">מה כלול?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <CardTitle className="text-xl mb-4">התהליך:</CardTitle>
                      <ol className="space-y-3">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 text-white text-sm font-bold flex items-center justify-center">
                              {i + 1}
                            </span>
                            <span className="text-neutral-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
