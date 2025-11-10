import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Calendar,
  Send,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'צור קשר',
  description:
    'צרו קשר עם SeeLD Finance & Insurance. קבעו פגישת ייעוץ חינם או שלחו שאלה. אנחנו כאן לעזור.',
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'טלפון',
      value: '050-123-4567',
      action: 'tel:0501234567',
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: Mail,
      title: 'מייל',
      value: 'info@seeld.co.il',
      action: 'mailto:info@seeld.co.il',
      color: 'from-secondary-400 to-secondary-600',
    },
    {
      icon: MapPin,
      title: 'כתובת',
      value: 'רעננה, ישראל',
      action: '#',
      color: 'from-accent-400 to-accent-600',
    },
    {
      icon: Clock,
      title: 'שעות פעילות',
      value: 'ראשון-חמישי 9:00-18:00',
      action: '#',
      color: 'from-primary-400 to-primary-600',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                צור קשר
              </h1>
              <p className="text-xl md:text-2xl text-primary-600 font-medium mb-6">
                בואו נדבר על העתיד הפיננסי שלכם
              </p>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                מלאו את הטופס ונחזור אליכם בהקדם, או פשוט התקשרו - אנחנו תמיד פה לעזור
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-white border-y border-neutral-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.title}
                    href={item.action}
                    className="text-center group hover:scale-105 transition-transform"
                  >
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-neutral-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-neutral-600">{item.value}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Form and Quick Actions */}
        <section className="section-padding bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">שלחו הודעה</CardTitle>
                  <p className="text-neutral-600">
                    מלאו את הפרטים ונחזור אליכם בהקדם
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">שם מלא *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="שם מלא"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email">מייל *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone">טלפון *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="050-123-4567"
                        required
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <Label htmlFor="service">איזה שירות מעניין אותך?</Label>
                      <select
                        id="service"
                        className="flex h-11 w-full rounded-lg border-2 border-neutral-300 bg-white px-4 py-3 text-base"
                      >
                        <option value="">בחר שירות</option>
                        <option value="pension">ייעוץ פנסיוני</option>
                        <option value="financial">תכנון פיננסי</option>
                        <option value="retirement">תכנון פרישה</option>
                        <option value="insurance">ביטוחים</option>
                        <option value="mortgage">משכנתאות</option>
                        <option value="household">ניהול משק בית</option>
                        <option value="agent">הצטרפות כסוכן</option>
                        <option value="seeld-ai">מערכת SeelD AI</option>
                        <option value="other">אחר</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">הודעה</Label>
                      <Textarea
                        id="message"
                        placeholder="ספרו לנו קצת על מה שאתם מחפשים..."
                        rows={4}
                      />
                    </div>

                    {/* Submit */}
                    <Button type="submit" className="w-full" size="lg">
                      שלח הודעה
                      <Send className="mr-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-neutral-500 text-center">
                      * שדות חובה. אנחנו לא שולחים ספאם ושומרים על הפרטיות שלכם.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-6">
                {/* Schedule Meeting */}
                <Card className="border-2 border-primary-200 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">קבעו פגישה</CardTitle>
                    <p className="text-neutral-600">
                      הזמינו שיחת ייעוץ חינם בת 30 דקות ישירות ביומן שלנו
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      בחר תאריך ושעה
                      <Calendar className="mr-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="border-2 border-secondary-200 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">שלחו ב-WhatsApp</CardTitle>
                    <p className="text-neutral-600">
                      תשובה מהירה דרך WhatsApp - הכי נוח
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="secondary">
                      פתח WhatsApp
                      <MessageSquare className="mr-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card className="border-2 border-accent-200 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">שאלות ותשובות</CardTitle>
                    <p className="text-neutral-600">
                      אולי התשובה מחכה לכם כבר ב-FAQ?
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full" variant="ghost">
                      <a href="/resources/faq">
                        עברו ל-FAQ
                        <MessageSquare className="mr-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-96 bg-neutral-200 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-neutral-600">
                מפה תוטמע כאן
              </p>
              <p className="text-sm text-neutral-500">
                רעננה, ישראל
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
