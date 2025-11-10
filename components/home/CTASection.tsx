import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Sparkles } from 'lucide-react'

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-8 h-8" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            מוכנים להתחיל?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            קחו את הצעד הראשון לעתיד פיננסי מאובטח
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto min-w-[240px] bg-white text-primary-600 hover:bg-neutral-100 shadow-xl"
              >
                קבע פגישת ייעוץ חינם
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Small disclaimer */}
          <p className="text-sm text-white/70">
            אין עלות, אין התחייבות - רק 30 דקות שיכולות לשנות את העתיד הפיננסי שלך
          </p>
        </div>
      </div>
    </section>
  )
}
