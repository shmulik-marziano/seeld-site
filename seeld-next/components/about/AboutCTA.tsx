import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, UserPlus } from 'lucide-react'

export function AboutCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            רוצים להצטרף למהפכה?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            בואו נשנה ביחד את תעשיית הפיננסים
          </p>

          {/* Two paths */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Path 1: Become a client */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
              <div className="mb-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <UserPlus className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">הפכו ללקוחות</h3>
                <p className="text-white/80 mb-6">
                  קבלו ייעוץ פיננסי מקצועי ושקוף
                </p>
              </div>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full bg-white text-primary-600 hover:bg-neutral-100"
                >
                  קבע פגישה חינם
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Path 2: Join as agent */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors">
              <div className="mb-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <UserPlus className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">הצטרפו כסוכנים</h3>
                <p className="text-white/80 mb-6">
                  קבלו גישה למערכת SeelD AI
                </p>
              </div>
              <Link href="/services/agents">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full bg-white text-primary-600 hover:bg-neutral-100"
                >
                  למד עוד
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Small text */}
          <p className="text-sm text-white/70">
            או פשוט צרו קשר ונספר לכם יותר
          </p>
        </div>
      </div>
    </section>
  )
}
