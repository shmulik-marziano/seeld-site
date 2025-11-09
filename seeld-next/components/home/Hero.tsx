import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export function Hero() {
  const trustBadges = [
    { label: 'מורשה', icon: CheckCircle2 },
    { label: '600+ לקוחות', icon: CheckCircle2 },
    { label: 'מבוסס AI', icon: CheckCircle2 },
    { label: '100% שקיפות', icon: CheckCircle2 },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            העתיד של הייעוץ הפיננסי
            <br />
            <span className="text-primary-600">כבר כאן</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-600 font-medium mb-4">
            ai PowerD By UMN
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            סוכנות פיננסים וביטוח חדשנית שמשלבת מומחיות אנושית עם כוח הבינה
            המלאכותית. אנחנו לא רק מייעצים - אנחנו מהפכים את הדרך שבה מנהלים את
            העתיד הפיננסי שלכם.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                התחל עכשיו - יעוץ חינם
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services/seeld-ai">
              <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px]">
                גלה את SeelD AI
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((badge) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-neutral-700"
                >
                  <Icon className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
